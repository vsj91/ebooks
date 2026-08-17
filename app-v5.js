const $ = (s) => document.querySelector(s);
const libraryView = $('#libraryView');
const readerView = $('#readerView');
const toc = $('#toc');
const sidebar = $('#sidebar');
const overlay = $('#overlay');

let state = JSON.parse(localStorage.getItem('beginnerBooksState') || '{}');
state.completed ||= {};
state.bookmarks ||= {};
state.font ||= 'medium';
state.theme ||= 'paper';
state.voiceRate ||= 1;
state.voiceURI ||= '';

let currentBook = null;
let currentChapter = 0;
let aiHistory = [];
let aiPageKey = '';
let aiBusy = false;
let speechRunId = 0;
let speechChunks = [];
let speechIndex = 0;
let speechPaused = false;

function save(){ localStorage.setItem('beginnerBooksState', JSON.stringify(state)); }
function key(book, chapter){ return `${book.id}:${chapter}`; }
function completedCount(book){ return book.chapters.filter((_,i)=>state.completed[key(book,i)]).length; }
function progress(book){ return Math.round(completedCount(book)/book.chapters.length*100); }

function renderLibrary(){
  stopReading();
  currentBook = null;
  libraryView.classList.remove('hidden');
  readerView.classList.add('hidden');
  $('#aiFab').classList.add('hidden');
  $('#voiceBtn').classList.add('hidden');
  $('#aiTopBtn').classList.add('hidden');
  $('#sideTitle').textContent='Library';
  toc.innerHTML = `<button class="toc-home active">⌂ &nbsp;All books</button>`;
  $('#bookGrid').innerHTML = BOOKS.map(book => {
    const p=progress(book);
    return `<article class="book-card">
      <div><div class="book-icon">${book.symbol}</div><h2>${book.title}</h2><p>${book.description}</p></div>
      <div><div class="book-stats"><span>${book.chapters.length} pages</span><span>${book.level}</span><span>${p}% complete</span></div>
      <div class="progress-line"><span style="width:${p}%"></span></div>
      <button data-book="${book.id}">${p ? 'Continue reading' : 'Start reading'} →</button></div>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-book]').forEach(b=>b.onclick=()=>openBook(b.dataset.book, firstUnread(b.dataset.book)));
  history.replaceState(null,'',location.pathname + location.search);
  closeSidebar();
}

function firstUnread(bookId){
  const b=BOOKS.find(x=>x.id===bookId);
  const i=b.chapters.findIndex((_,n)=>!state.completed[key(b,n)]);
  return i<0?0:i;
}

function openBook(bookId, chapter=0){
  const nextBook=BOOKS.find(b=>b.id===bookId);
  if(!nextBook) return renderLibrary();
  const nextChapter=Math.max(0,Math.min(chapter,nextBook.chapters.length-1));
  const nextPageKey=`${nextBook.id}:${nextChapter}`;
  if(aiPageKey && aiPageKey!==nextPageKey){ aiHistory=[]; clearAiMessages(); }
  aiPageKey=nextPageKey;
  stopReading();
  currentBook=nextBook;
  currentChapter=nextChapter;
  libraryView.classList.add('hidden');
  readerView.classList.remove('hidden');
  $('#aiFab').classList.remove('hidden');
  $('#voiceBtn').classList.remove('hidden');
  $('#aiTopBtn').classList.remove('hidden');
  renderToc();
  renderChapter();
  history.replaceState(null,'',`${location.pathname}${location.search}#${currentBook.id}/${currentChapter+1}`);
  closeSidebar();
  window.scrollTo({top:0,behavior:'instant'});
}

function renderToc(){
  $('#sideTitle').textContent=currentBook.shortTitle;
  let html=`<button class="toc-home" data-library>← &nbsp;Library</button>`;
  let lastModule='';
  currentBook.chapters.forEach((c,i)=>{
    if(c.module!==lastModule){ html+=`<div class="toc-section">${c.module}</div>`; lastModule=c.module; }
    html+=`<button class="toc-item ${i===currentChapter?'active':''} ${state.completed[key(currentBook,i)]?'done':''}" data-chapter="${i}"><span class="num">${state.completed[key(currentBook,i)]?'✓':String(i+1).padStart(3,'0')}</span><span>${c.title}</span></button>`;
  });
  toc.innerHTML=html;
  $('[data-library]').onclick=renderLibrary;
  document.querySelectorAll('[data-chapter]').forEach(x=>x.onclick=()=>openBook(currentBook.id,+x.dataset.chapter));
  const active=toc.querySelector('.toc-item.active');
  if(active) active.scrollIntoView({block:'nearest'});
}

function renderSections(ch){
  return ch.sections.map(s=>{
    if(s.callout) return `<div class="callout">${s.callout}</div>`;
    if(s.example) return `<div class="example">${s.example.replaceAll('\n','<br>')}</div>`;
    return `<section><h2>${s.h}</h2>${(s.p||[]).map(p=>`<p>${p}</p>`).join('')}</section>`;
  }).join('');
}
function renderQA(ch){ return `<h2>Questions & Answers</h2>${ch.qa.map(([q,a])=>`<details class="qa"><summary>${q}</summary><p>${a}</p></details>`).join('')}`; }
function renderQuiz(ch){
  const q=ch.quiz;
  return `<div class="quiz" data-answer="${q.answer}"><h3>Quick check</h3><strong>${q.q}</strong>${q.options.map((o,i)=>`<label><input type="radio" name="quiz-${currentBook.id}-${currentChapter}" value="${i}"> ${o}</label>`).join('')}<div class="quiz-result" aria-live="polite"></div></div>`;
}

function renderChapter(){
  const ch=currentBook.chapters[currentChapter];
  $('#chapterNumber').textContent=`Page ${currentChapter+1} of ${currentBook.chapters.length} · ${ch.module}`;
  $('#chapterContent').innerHTML=`<h1>${ch.title}</h1><p class="lead">${ch.intro}</p>${renderSections(ch)}${renderQA(ch)}${renderQuiz(ch)}`;
  $('#prevBtn').disabled=currentChapter===0;
  $('#nextBtn').disabled=currentChapter===currentBook.chapters.length-1;
  const done=!!state.completed[key(currentBook,currentChapter)];
  $('#completeBtn').textContent=done?'✓ Completed':'Mark page complete';
  const bookmarked=!!state.bookmarks[key(currentBook,currentChapter)];
  $('#bookmarkBtn').textContent=bookmarked?'★ Bookmarked':'☆ Bookmark';
  $('#voicePageLabel').textContent=`Read page ${currentChapter+1}`;
  document.querySelectorAll('.quiz input').forEach(input=>input.onchange=e=>{
    const quiz=e.target.closest('.quiz');
    const ok=+e.target.value===+quiz.dataset.answer;
    quiz.querySelector('.quiz-result').textContent=ok?'✓ Correct — nice work.':'Not quite. Try another answer.';
  });
  renderToc();
}

$('#prevBtn').onclick=()=>openBook(currentBook.id,currentChapter-1);
$('#nextBtn').onclick=()=>openBook(currentBook.id,currentChapter+1);
$('#completeBtn').onclick=()=>{state.completed[key(currentBook,currentChapter)]=!state.completed[key(currentBook,currentChapter)];save();renderChapter();};
$('#bookmarkBtn').onclick=()=>{state.bookmarks[key(currentBook,currentChapter)]=!state.bookmarks[key(currentBook,currentChapter)];save();renderChapter();};

document.querySelectorAll('[data-home]').forEach(x=>x.onclick=e=>{e.preventDefault();renderLibrary();});
function openSidebar(){sidebar.classList.add('open');overlay.classList.remove('hidden');}
function closeSidebar(){sidebar.classList.remove('open');overlay.classList.add('hidden');}
$('#menuBtn').onclick=openSidebar;
$('#closeMenuBtn').onclick=closeSidebar;
overlay.onclick=closeSidebar;

const settingsDialog=$('#settingsDialog');
$('#readerBtn').onclick=()=>settingsDialog.showModal();
function applyPrefs(){
  document.body.classList.remove('font-small','font-medium','font-large','theme-light','theme-dark');
  document.body.classList.add(`font-${state.font}`);
  if(state.theme!=='paper')document.body.classList.add(`theme-${state.theme}`);
  document.querySelectorAll('[data-font]').forEach(b=>b.classList.toggle('active',b.dataset.font===state.font));
  document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('active',b.dataset.theme===state.theme));
  $('#voiceRate').value=String(state.voiceRate);
}
document.querySelectorAll('[data-font]').forEach(b=>b.onclick=()=>{state.font=b.dataset.font;save();applyPrefs();});
document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.theme;save();applyPrefs();});
$('#voiceRate').onchange=e=>{state.voiceRate=Number(e.target.value)||1;save(); if(speechChunks.length) startReading(true);};

const searchDialog=$('#searchDialog');
const searchInput=$('#searchInput');
$('#searchBtn').onclick=()=>{searchDialog.showModal();setTimeout(()=>searchInput.focus(),50);};
searchInput.oninput=()=>{
  const q=searchInput.value.trim().toLowerCase();
  if(q.length<2){$('#searchResults').innerHTML='<p style="color:var(--muted)">Type at least 2 characters.</p>';return;}
  const hits=[];
  BOOKS.forEach(book=>book.chapters.forEach((ch,i)=>{
    const hay=[ch.title,ch.intro,ch.module,...ch.sections.flatMap(s=>[s.h,...(s.p||[]),s.callout,s.example]),...ch.qa.flat()].filter(Boolean).join(' ').toLowerCase();
    if(hay.includes(q))hits.push({book,i,ch});
  }));
  $('#searchResults').innerHTML=hits.length?hits.slice(0,40).map((h,n)=>`<button type="button" class="search-hit" data-hit="${n}"><strong>${h.ch.title}</strong><small>${h.book.shortTitle} · Page ${h.i+1}</small></button>`).join(''):'<p style="color:var(--muted)">No matching pages found.</p>';
  document.querySelectorAll('[data-hit]').forEach(b=>b.onclick=()=>{const h=hits[+b.dataset.hit];searchDialog.close();openBook(h.book.id,h.i);});
};

// ---------- Read Aloud ----------
const synth = window.speechSynthesis;
function availableVoices(){ return synth ? synth.getVoices() : []; }
function loadVoices(){
  const select=$('#voiceSelect');
  if(!select) return;
  const voices=availableVoices().filter(v=>/^en[-_]/i.test(v.lang));
  select.innerHTML='<option value="">Automatic English voice</option>'+voices.map(v=>`<option value="${escapeAttr(v.voiceURI)}">${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`).join('');
  if(state.voiceURI && voices.some(v=>v.voiceURI===state.voiceURI)) select.value=state.voiceURI;
}
if(synth){ loadVoices(); synth.onvoiceschanged=loadVoices; }
$('#voiceSelect').onchange=e=>{state.voiceURI=e.target.value;save(); if(speechChunks.length) startReading(true);};

function pageSpeechText(){
  if(!currentBook) return '';
  const ch=currentBook.chapters[currentChapter];
  const parts=[ch.title, ch.intro];
  ch.sections.forEach(s=>{
    if(s.h) parts.push(s.h);
    if(s.p) parts.push(...s.p);
    if(s.callout) parts.push(s.callout);
    if(s.example) parts.push(s.example);
  });
  if(ch.qa?.length){
    parts.push('Questions and answers.');
    ch.qa.forEach(([q,a])=>parts.push(`Question: ${q}`,`Answer: ${a}`));
  }
  if(ch.quiz){ parts.push('Quick check.',ch.quiz.q,...ch.quiz.options.map((o,i)=>`Option ${i+1}: ${o}`)); }
  return parts.filter(Boolean).join('. ');
}
function splitSpeechText(text, max=220){
  const sentences=text.replace(/\s+/g,' ').trim().split(/(?<=[.!?])\s+/);
  const out=[]; let buf='';
  for(const sentence of sentences){
    if(sentence.length>max){
      if(buf){out.push(buf);buf='';}
      const words=sentence.split(' '); let part='';
      for(const word of words){
        if((part+' '+word).trim().length>max){ if(part)out.push(part); part=word; }
        else part=(part+' '+word).trim();
      }
      if(part)out.push(part);
    }else if((buf+' '+sentence).trim().length>max){ out.push(buf); buf=sentence; }
    else buf=(buf+' '+sentence).trim();
  }
  if(buf)out.push(buf);
  return out;
}
function selectedVoice(){
  const voices=availableVoices();
  return voices.find(v=>v.voiceURI===state.voiceURI) || voices.find(v=>/^en[-_]/i.test(v.lang)) || voices[0] || null;
}
function updateSpeechUi(mode='stopped'){
  const btn=$('#readAloudBtn');
  const pause=$('#pauseReadBtn');
  if(mode==='speaking'){ btn.textContent='↻ Restart'; pause.disabled=false; pause.textContent='⏸ Pause'; }
  else if(mode==='paused'){ btn.textContent='↻ Restart'; pause.disabled=false; pause.textContent='▶ Resume'; }
  else { btn.textContent='▶ Read aloud'; pause.disabled=true; pause.textContent='⏸ Pause'; }
  $('#voiceStatus').textContent=mode==='speaking'?'Reading this page aloud…':mode==='paused'?'Reading paused.':'Voice reader ready';
}
function speakChunk(runId){
  if(!synth || runId!==speechRunId) return;
  if(speechIndex>=speechChunks.length){ stopReading(false); return; }
  const u=new SpeechSynthesisUtterance(speechChunks[speechIndex]);
  const voice=selectedVoice(); if(voice)u.voice=voice;
  u.rate=Number(state.voiceRate)||1; u.pitch=1;
  u.onend=()=>{ if(runId!==speechRunId)return; speechIndex++; speakChunk(runId); };
  u.onerror=e=>{ if(runId!==speechRunId)return; if(e.error!=='canceled'&&e.error!=='interrupted') $('#voiceStatus').textContent='Voice reader stopped. Try another browser voice.'; };
  synth.speak(u);
}
function startReading(restart=true){
  if(!synth){ $('#voiceStatus').textContent='Read aloud is not supported by this browser.'; return; }
  if(restart){
    speechRunId++;
    synth.cancel();
    speechChunks=splitSpeechText(pageSpeechText());
    speechIndex=0;
    speechPaused=false;
  }
  if(!speechChunks.length) return;
  updateSpeechUi('speaking');
  speakChunk(speechRunId);
}
function pauseOrResume(){
  if(!synth || !speechChunks.length) return;
  if(speechPaused){ synth.resume(); speechPaused=false; updateSpeechUi('speaking'); }
  else { synth.pause(); speechPaused=true; updateSpeechUi('paused'); }
}
function stopReading(clear=true){
  speechRunId++;
  if(synth) synth.cancel();
  speechPaused=false;
  speechIndex=0;
  if(clear) speechChunks=[];
  updateSpeechUi('stopped');
}
$('#readAloudBtn').onclick=()=>startReading(true);
$('#pauseReadBtn').onclick=pauseOrResume;
$('#stopReadBtn').onclick=()=>stopReading();
$('#voiceBtn').onclick=()=>startReading(true);

// ---------- AI Tutor ----------
const aiDialog=$('#aiDialog');
function effectiveAiEndpoint(){
  const raw=(window.BEGINNER_BOOKS_CONFIG?.aiEndpoint || '').trim();
  if(!raw || /YOUR-|example\.workers\.dev/i.test(raw)) return '';
  return raw;
}
function currentPageContext(){
  const ch=currentBook.chapters[currentChapter];
  return {
    bookId: currentBook.id,
    bookTitle: currentBook.title,
    pageNumber: currentChapter+1,
    pageCount: currentBook.chapters.length,
    module: ch.module,
    title: ch.title,
    text: pageSpeechText().slice(0,14000)
  };
}
function clearAiMessages(){
  const box=$('#aiMessages');
  if(box) box.innerHTML='';
}
function addAiMessage(role,text,meta=''){
  const wrap=document.createElement('div');
  wrap.className=`ai-message ${role}`;
  const bubble=document.createElement('div'); bubble.className='ai-bubble'; bubble.textContent=text;
  wrap.appendChild(bubble);
  if(meta){ const small=document.createElement('small'); small.textContent=meta; wrap.appendChild(small); }
  $('#aiMessages').appendChild(wrap);
  $('#aiMessages').scrollTop=$('#aiMessages').scrollHeight;
  return wrap;
}
function openAi(){
  if(!currentBook) return;
  const ch=currentBook.chapters[currentChapter];
  $('#aiContext').textContent=`${currentBook.shortTitle} · Page ${currentChapter+1}: ${ch.title}`;
  if(!$('#aiMessages').children.length){
    if(effectiveAiEndpoint()) addAiMessage('assistant','Ask me anything about this page. I can explain the lesson more simply, give another example, quiz you, or help with a doubt.');
  }
  aiDialog.showModal();
  setTimeout(()=>$('#aiInput').focus(),80);
}
$('#aiFab').onclick=openAi;
$('#aiTopBtn').onclick=openAi;
$('#aiClear').onclick=()=>{aiHistory=[];clearAiMessages();addAiMessage('assistant','Chat cleared. What would you like to understand on this page?');};

async function sendAi(){
  const input=$('#aiInput');
  const message=input.value.trim();
  if(!message || aiBusy || !currentBook) return;
  const endpoint=effectiveAiEndpoint();
  addAiMessage('user',message);
  input.value='';
  if(!endpoint){ addAiMessage('assistant','AI tutor is temporarily unavailable.'); return; }
  aiBusy=true; $('#aiSend').disabled=true;
  const pending=addAiMessage('assistant','Thinking…'); pending.classList.add('pending');
  try{
    const res=await fetch(endpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message,history:aiHistory.slice(-8),page:currentPageContext()})
    });
    let data={}; try{data=await res.json();}catch{}
    if(!res.ok) throw new Error(data.error || `AI request failed (${res.status})`);
    const answer=(data.answer || '').trim();
    if(!answer) throw new Error('AI returned an empty answer.');
    pending.remove();
    addAiMessage('assistant',answer, data.model ? `Model: ${data.model.split('/').pop()}` : '');
    aiHistory.push({role:'user',content:message},{role:'assistant',content:answer});
    aiHistory=aiHistory.slice(-10);
  }catch(err){
    pending.remove();
    addAiMessage('assistant',`I could not reach the AI tutor. ${err.message}`);
  }finally{ aiBusy=false; $('#aiSend').disabled=false; input.focus(); }
}
$('#aiSend').onclick=sendAi;
$('#aiInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendAi();}});

function escapeHtml(s=''){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function escapeAttr(s=''){ return escapeHtml(s).replace(/'/g,'&#39;'); }

applyPrefs();
updateSpeechUi('stopped');
const match=location.hash.match(/^#(testing|english)\/(\d+)$/);
match?openBook(match[1],+match[2]-1):renderLibrary();
