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
let currentBook = null;
let currentChapter = 0;

function save(){ localStorage.setItem('beginnerBooksState', JSON.stringify(state)); }
function key(book, chapter){ return `${book.id}:${chapter}`; }
function completedCount(book){ return book.chapters.filter((_,i)=>state.completed[key(book,i)]).length; }
function progress(book){ return Math.round(completedCount(book)/book.chapters.length*100); }

function renderLibrary(){
  currentBook = null;
  libraryView.classList.remove('hidden'); readerView.classList.add('hidden');
  $('#sideTitle').textContent='Library';
  toc.innerHTML = `<button class="toc-home active">⌂ &nbsp;All books</button>`;
  $('#bookGrid').innerHTML = BOOKS.map(book => {
    const p=progress(book);
    return `<article class="book-card">
      <div><div class="book-icon">${book.symbol}</div><h2>${book.title}</h2><p>${book.description}</p></div>
      <div><div class="book-stats"><span>${book.chapters.length} lessons</span><span>${book.level}</span><span>${p}% complete</span></div>
      <div class="progress-line"><span style="width:${p}%"></span></div>
      <button data-book="${book.id}">${p ? 'Continue reading' : 'Start reading'} →</button></div>
    </article>`;
  }).join('');
  document.querySelectorAll('[data-book]').forEach(b=>b.onclick=()=>openBook(b.dataset.book, firstUnread(b.dataset.book)));
  history.replaceState(null,'',location.pathname);
  closeSidebar();
}

function firstUnread(bookId){ const b=BOOKS.find(x=>x.id===bookId); const i=b.chapters.findIndex((_,n)=>!state.completed[key(b,n)]); return i<0?0:i; }
function openBook(bookId, chapter=0){
  currentBook=BOOKS.find(b=>b.id===bookId); currentChapter=Math.max(0,Math.min(chapter,currentBook.chapters.length-1));
  libraryView.classList.add('hidden'); readerView.classList.remove('hidden');
  renderToc(); renderChapter();
  history.replaceState(null,'',`#${currentBook.id}/${currentChapter+1}`);
  closeSidebar(); window.scrollTo({top:0,behavior:'instant'});
}

function renderToc(){
  $('#sideTitle').textContent=currentBook.shortTitle;
  toc.innerHTML=`<button class="toc-home" data-library>← &nbsp;Library</button><div class="toc-section">Contents</div>`+
    currentBook.chapters.map((c,i)=>`<button class="toc-item ${i===currentChapter?'active':''} ${state.completed[key(currentBook,i)]?'done':''}" data-chapter="${i}"><span class="num">${state.completed[key(currentBook,i)]?'✓':String(i+1).padStart(2,'0')}</span><span>${c.title}</span></button>`).join('');
  $('[data-library]').onclick=renderLibrary;
  document.querySelectorAll('[data-chapter]').forEach(x=>x.onclick=()=>openBook(currentBook.id,+x.dataset.chapter));
}

function renderSections(ch){
  return ch.sections.map(s=>{
    if(s.callout) return `<div class="callout">${s.callout}</div>`;
    if(s.example) return `<div class="example">${s.example.replaceAll('\n','<br>')}</div>`;
    return `<section><h2>${s.h}</h2>${(s.p||[]).map(p=>`<p>${p}</p>`).join('')}</section>`;
  }).join('');
}
function renderQA(ch){ return `<h2>Questions & Answers</h2>${ch.qa.map(([q,a])=>`<details class="qa"><summary>${q}</summary><p>${a}</p></details>`).join('')}`; }
function renderQuiz(ch){ const q=ch.quiz; return `<div class="quiz" data-answer="${q.answer}"><h3>Quick check</h3><strong>${q.q}</strong>${q.options.map((o,i)=>`<label><input type="radio" name="quiz-${currentBook.id}-${currentChapter}" value="${i}"> ${o}</label>`).join('')}<div class="quiz-result" aria-live="polite"></div></div>`; }
function renderChapter(){
  const ch=currentBook.chapters[currentChapter];
  $('#chapterNumber').textContent=`Lesson ${currentChapter+1} of ${currentBook.chapters.length} · ${currentBook.shortTitle}`;
  $('#chapterContent').innerHTML=`<h1>${ch.title}</h1><p class="lead">${ch.intro}</p>${renderSections(ch)}${renderQA(ch)}${renderQuiz(ch)}`;
  $('#prevBtn').disabled=currentChapter===0; $('#nextBtn').disabled=currentChapter===currentBook.chapters.length-1;
  const done=!!state.completed[key(currentBook,currentChapter)]; $('#completeBtn').textContent=done?'✓ Completed':'Mark complete';
  const bookmarked=!!state.bookmarks[key(currentBook,currentChapter)]; $('#bookmarkBtn').textContent=bookmarked?'★ Bookmarked':'☆ Bookmark';
  document.querySelectorAll('.quiz input').forEach(input=>input.onchange=e=>{
    const quiz=e.target.closest('.quiz'); const ok=+e.target.value===+quiz.dataset.answer; quiz.querySelector('.quiz-result').textContent=ok?'✓ Correct — nice work.':'Not quite. Try another answer.';
  });
  renderToc();
}

$('#prevBtn').onclick=()=>openBook(currentBook.id,currentChapter-1);
$('#nextBtn').onclick=()=>openBook(currentBook.id,currentChapter+1);
$('#completeBtn').onclick=()=>{state.completed[key(currentBook,currentChapter)]=!state.completed[key(currentBook,currentChapter)];save();renderChapter();};
$('#bookmarkBtn').onclick=()=>{state.bookmarks[key(currentBook,currentChapter)]=!state.bookmarks[key(currentBook,currentChapter)];save();renderChapter();};

document.querySelectorAll('[data-home]').forEach(x=>x.onclick=e=>{e.preventDefault();renderLibrary();});
function openSidebar(){sidebar.classList.add('open');overlay.classList.remove('hidden')}
function closeSidebar(){sidebar.classList.remove('open');overlay.classList.add('hidden')}
$('#menuBtn').onclick=openSidebar; $('#closeMenuBtn').onclick=closeSidebar; overlay.onclick=closeSidebar;

const settingsDialog=$('#settingsDialog'); $('#readerBtn').onclick=()=>settingsDialog.showModal();
function applyPrefs(){
  document.body.classList.remove('font-small','font-medium','font-large','theme-light','theme-dark');
  document.body.classList.add(`font-${state.font}`); if(state.theme!=='paper')document.body.classList.add(`theme-${state.theme}`);
  document.querySelectorAll('[data-font]').forEach(b=>b.classList.toggle('active',b.dataset.font===state.font));
  document.querySelectorAll('[data-theme]').forEach(b=>b.classList.toggle('active',b.dataset.theme===state.theme));
}
document.querySelectorAll('[data-font]').forEach(b=>b.onclick=()=>{state.font=b.dataset.font;save();applyPrefs();});
document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{state.theme=b.dataset.theme;save();applyPrefs();});

const searchDialog=$('#searchDialog'); const searchInput=$('#searchInput');
$('#searchBtn').onclick=()=>{searchDialog.showModal();setTimeout(()=>searchInput.focus(),50)};
searchInput.oninput=()=>{
  const q=searchInput.value.trim().toLowerCase();
  if(q.length<2){$('#searchResults').innerHTML='<p style="color:var(--muted)">Type at least 2 characters.</p>';return;}
  const hits=[];
  BOOKS.forEach(book=>book.chapters.forEach((ch,i)=>{
    const hay=[ch.title,ch.intro,...ch.sections.flatMap(s=>[s.h,...(s.p||[]),s.callout,s.example]),...ch.qa.flat()].filter(Boolean).join(' ').toLowerCase();
    if(hay.includes(q))hits.push({book,i,ch});
  }));
  $('#searchResults').innerHTML=hits.length?hits.slice(0,20).map((h,n)=>`<button type="button" class="search-hit" data-hit="${n}"><strong>${h.ch.title}</strong><small>${h.book.shortTitle} · Lesson ${h.i+1}</small></button>`).join(''):'<p style="color:var(--muted)">No matching lessons found.</p>';
  document.querySelectorAll('[data-hit]').forEach(b=>b.onclick=()=>{const h=hits[+b.dataset.hit];searchDialog.close();openBook(h.book.id,h.i);});
};

applyPrefs();
const match=location.hash.match(/^#(testing|english)\/(\d+)$/); match?openBook(match[1],+match[2]-1):renderLibrary();
