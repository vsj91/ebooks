const MODEL = '@cf/zai-org/glm-4.7-flash';

function json(data, status = 200, origin = '') {
  const headers = { 'content-type': 'application/json; charset=utf-8' };
  if (origin) {
    headers['access-control-allow-origin'] = origin;
    headers['vary'] = 'Origin';
  }
  return new Response(JSON.stringify(data), { status, headers });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const configured = (env.ALLOWED_ORIGIN || 'https://vsj91.github.io').replace(/\/$/, '');
  if (!origin) return configured;
  if (origin === configured || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) return origin;
  return '';
}

function cleanHistory(history) {
  if (!Array.isArray(history)) return [];
  return history.slice(-8).flatMap(item => {
    if (!item || !['user', 'assistant'].includes(item.role)) return [];
    const content = String(item.content || '').trim().slice(0, 2200);
    return content ? [{ role: item.role, content }] : [];
  });
}

function extractText(result) {
  return String(
    result?.choices?.[0]?.message?.content ??
    result?.response ??
    result?.result?.response ??
    ''
  ).trim();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = allowedOrigin(request, env);

    if (request.method === 'OPTIONS') {
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          'access-control-allow-origin': origin,
          'access-control-allow-methods': 'POST, OPTIONS',
          'access-control-allow-headers': 'Content-Type',
          'access-control-max-age': '86400',
          'vary': 'Origin'
        }
      });
    }

    if (url.pathname === '/' && request.method === 'GET') {
      return json({ ok: true, service: 'Beginner Books AI Tutor', model: MODEL });
    }
    if (url.pathname !== '/api/chat' || request.method !== 'POST') return json({ error: 'Not found' }, 404, origin);
    if (!origin) return json({ error: 'Origin not allowed' }, 403);

    try {
      const body = await request.json();
      const message = String(body?.message || '').trim().slice(0, 2400);
      const page = body?.page || {};
      const pageText = String(page.text || '').trim().slice(0, 14000);
      if (!message) return json({ error: 'Question is required.' }, 400, origin);

      const system = `You are Beginner Books AI Tutor, a friendly teacher for absolute beginners.
The learner is reading: ${String(page.bookTitle || 'Beginner Books')}.
Current page: ${String(page.pageNumber || '')} — ${String(page.title || '')}.
Module: ${String(page.module || '')}.

Use the supplied page context as your primary source. Explain clearly and simply. If helpful, give one short example. For software testing, prefer practical QA examples. For English, gently correct grammar and give natural sentences. If the user asks to be quizzed, ask one question at a time. If the answer is not supported by the page, say that you are adding general knowledge rather than pretending the page contains it. Keep answers concise and beginner-friendly.

PAGE CONTEXT:
${pageText}`;

      const messages = [
        { role: 'system', content: system },
        ...cleanHistory(body?.history),
        { role: 'user', content: message }
      ];

      const result = await env.AI.run(MODEL, {
        messages,
        temperature: 0.35,
        max_completion_tokens: 500
      });
      const answer = extractText(result);
      if (!answer) return json({ error: 'The model returned an empty response.' }, 502, origin);
      return json({ answer, model: MODEL }, 200, origin);
    } catch (error) {
      return json({ error: 'AI tutor failed to process the request.', detail: String(error?.message || error).slice(0, 300) }, 500, origin);
    }
  }
};
