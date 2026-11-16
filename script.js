/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 임상병리사의 바이오 진출 로드맵
   script.js  ·  index.html 의 화면을 그리는 코드

   글과 사진 목록은 data.js 에 있습니다. 내용만 바꿀 거라면
   이 파일은 건드리지 않아도 됩니다.
   ═══════════════════════════════════════════════════════════════ */

/* ─── 도구 ───────────────────────────────────────────────────── */
const { $, $$, store, make, toast } = DB;
const slot = (name, root = document) => root.querySelector(`[data-render="${name}"]`);
const tpl  = (name) => $(`#tpl-${name}`).content.firstElementChild.cloneNode(true);

function setRichText(node, str) {
  node.textContent = '';
  str.split(/(<b>.*?<\/b>)/g).forEach(part => {
    if (!part) return;
    const m = part.match(/^<b>(.*?)<\/b>$/);
    node.append(m ? make('b', null, m[1]) : document.createTextNode(part));
  });
}
function extLink(className, text, url) {
  const a = make('a', className, text);
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  return a;
}
const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const WIDE   = window.matchMedia('(min-width: 720px)');
const pathById = id => DATA.paths.find(p => p.id === id);

/* ─── 공유 버튼 문구 ─────────────────────────────────────────── */
function renderShareLabel() { slot('share-button').textContent = DATA.footer.shareButton; }

/* ─── 첫 화면 ────────────────────────────────────────────────── */
function renderHero() {
  const h = DATA.hero;
  const q = slot('hero-question');
  h.question.split('\n').forEach(line => q.append(make('span', 'hero__line', line)));
  slot('hero-answer').textContent  = h.answer;
  slot('hero-lead').textContent    = h.lead;
  slot('hero-finding').textContent = h.finding;
  slot('hero-cta').textContent     = h.cta;
  slot('hero-project').textContent = h.project;
  slot('hero-team').textContent    = h.team;

  const img = slot('hero-img');
  img.addEventListener('error', () => img.remove());   // 사진이 아직 없으면 조용히 빈 배경
  img.src = DATA.photos.hero;

  const stats = slot('hero-stats');
  h.stats.forEach(stat => {
    const wrap = make('div', 'hero__stat');
    const dd = make('dd', null, REDUCE ? String(stat.value) : '0');
    dd.dataset.target = stat.value;
    wrap.append(dd, make('dt', null, stat.label));
    stats.append(wrap);
  });
  if (REDUCE) return;
  const nums = $$('dd', stats);
  const t0 = performance.now();
  (function frame(now) {
    const p = Math.min(1, (now - t0) / 900);
    const eased = 1 - Math.pow(1 - p, 3);
    nums.forEach(n => n.textContent = Math.round(eased * Number(n.dataset.target)));
    if (p < 1) requestAnimationFrame(frame);
  })(t0);
}

/* ─── 나의 경로 찾기 ────────────────────────────────────────── */
const finderState = store.get('dbridge-finder', { grade: null, goal: null });

function renderFinder() {
  const F = DATA.finder;
  slot('finder-heading').textContent     = F.heading;
  slot('finder-lead').textContent        = F.lead;
  slot('finder-grade-label').textContent = F.gradeLabel;
  slot('finder-goal-label').textContent  = F.goalLabel;

  const row = (wrap, options, key) => {
    options.forEach(o => {
      const b = make('button', 'opt', o.label);
      b.type = 'button';
      b.dataset.value = o.id;
      b.setAttribute('aria-pressed', String(finderState[key] === o.id));
      b.addEventListener('click', () => {
        finderState[key] = o.id;
        store.set('dbridge-finder', finderState);
        $$('.opt', wrap).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        paintFinder(true);
      });
      wrap.append(b);
    });
  };
  row(slot('finder-grades'), F.grades, 'grade');
  row(slot('finder-goals'),  F.goals,  'goal');
  paintFinder(false);
}

function stageItemsFor(gradeId, goalId) {
  const stage = DATA.roadmap.stages.find(s => s.id === gradeId);
  if (!stage) return [];
  if (stage.items) return stage.items;
  // 4학년 — 비임상 갈래의 항목. 목표를 안 정했으면 임상 쪽도 같이 보여 준다.
  const non = stage.branches.find(b => b.id === 'nonclinical');
  const cli = stage.branches.find(b => b.id === 'clinical');
  let items = [...non.items];
  if (goalId === 'master') non.entryOptions.forEach(o => items.push(`${o.name} — ${o.text}`));
  else if (goalId === 'bachelor') items.push(non.entryOptions[0].text.replace('대학원에 진학한다', '필요하면 대학원 진학을 검토한다'));
  else items.push(`임상으로 간다면: ${cli.items[0]}`);
  return items;
}

function paintFinder(animate) {
  const F = DATA.finder;
  const box = slot('finder-result');
  box.textContent = '';
  const { grade, goal } = finderState;

  if (!grade || !goal) {
    const fr = make('div', 'fr');
    fr.append(make('p', 'fr__hint', F.emptyHint));
    box.append(fr);
    return;
  }

  const R = F.results[goal];
  const fr = make('div', 'fr');
  fr.append(make('h3', 'fr__headline', R.headline));
  fr.append(make('p', 'fr__note', F.gradeNotes[grade]));

  const paths = make('div', 'fr__paths');
  R.paths.forEach(pid => {
    const p = pathById(pid);
    const b = make('button', 'fr__path');
    b.type = 'button'; b.dataset.path = pid;
    b.setAttribute('aria-haspopup', 'dialog');
    const txt = make('span', 'fr__path-text');
    txt.append(make('span', 'fr__path-name', p.name), make('span', 'fr__path-degree', p.degree));
    b.append(make('span', 'fr__path-num', p.num), txt);
    b.addEventListener('click', () => openPathSheet(p));
    paths.append(b);
  });
  fr.append(paths);

  fr.append(make('p', 'fr__label', F.itemsLabel));
  const ul = make('ul', 'fr__list fr__list--items');
  stageItemsFor(grade, goal).forEach(t => ul.append(make('li', null, t)));
  fr.append(ul);

  fr.append(make('p', 'fr__label', F.evidenceLabel));
  const ev = make('ul', 'fr__list fr__list--ev');
  R.evidence.forEach(e => ev.append(sourced(e)));
  fr.append(ev);

  if (grade !== 'after') {
    const cta = make('p', 'fr__cta');
    const a = make('a', 'btn', F.checklistCta);
    a.href = '#checklist';
    a.addEventListener('click', () => { currentGrade = grade; paintChecklist(); });
    cta.append(a);
    fr.append(cta);
  }

  if (animate && !REDUCE) {
    fr.classList.add('reveal');
    requestAnimationFrame(() => requestAnimationFrame(() => fr.classList.add('is-in')));
  }
  box.append(fr);
  DB.termify(fr);
}

/* ─── 세 갈래 ────────────────────────────────────────────────── */
function renderPaths() {
  slot('paths-heading').textContent = DATA.pathsHeading;
  slot('paths-lead').textContent    = DATA.pathsLead;
  const list = slot('paths');
  DATA.paths.forEach(path => {
    const li = tpl('path');
    li.dataset.path = path.id;
    $('.path__num', li).textContent     = path.num;
    $('.path__name', li).textContent    = path.name;
    $('.path__degree', li).textContent  = path.degree;
    $('.path__work', li).textContent    = path.work;
    $('.path__courses', li).textContent = path.courses.join(' · ');
    $('.path__basis', li).textContent   = path.basis || '';
    $('.path__btn', li).addEventListener('click', () => openPathSheet(path));
    list.append(li);
  });
}

function openPathSheet(path) {
  const L = DATA.sheetLabels;
  openSheet({
    eyebrow: path.degree,
    title: `${path.num} ${path.name}`,
    build(body) {
      const basics = make('section', 'src src--basics');
      basics.append(infoBlock(L.work, make('p', 'src__info-desc', path.work)));
      if (path.basis) basics.append(infoBlock(L.basis, make('p', 'src__info-desc', path.basis)));
      const ul = make('ul', 'src__chip-list');
      path.courses.forEach(c => ul.append(make('li', 'src__chip-item', c)));
      basics.append(infoBlock(L.courses, ul));
      const jobs = make('ul', 'src__chip-list');
      path.jobKeywords.forEach(kw => {
        const li = make('li');
        li.append(extLink('chip chip--job', `${DATA.jobSites[0].name}에서 “${kw}”`, jobUrl(kw)));
        jobs.append(li);
      });
      basics.append(infoBlock(L.jobs, jobs));
      body.append(basics);

      (path.sections || []).forEach(sec => {
        const node = make('section', 'src');
        node.dataset.origin = sec.origin;
        node.append(make('p', 'src__badge', DATA.originLabels[sec.origin]));
        const b = make('div', 'src__body');
        sec.body.forEach(t => b.append(sourced(t, 'p')));
        node.append(b);
        if (sec.groups) {
          const g = make('div', 'src__groups');
          sec.groups.forEach(grp => {
            const w = make('div', 'src__group');
            w.append(make('p', 'src__group-label', grp.label));
            const gul = make('ul');
            grp.items.forEach(i => gul.append(make('li', null, i)));
            w.append(gul); g.append(w);
          });
          node.append(g);
        }
        body.append(node);
      });
    }
  });
}
/** { org, text } 또는 문자열 → 출처 라벨이 붙은 항목 */
function sourced(e, tag = 'li') {
  const li = make(tag);
  if (typeof e === 'string') { li.textContent = e; return li; }
  li.append(make('span', 'src-org', e.org), make('span', 'src-text', e.text));
  return li;
}
function infoBlock(title, node) {
  const wrap = make('div', 'src__info-block');
  wrap.append(make('h4', 'src__info-title', title), node);
  return wrap;
}

/* ─── 로드맵 ─────────────────────────────────────────────────── */
function renderRoadmap() {
  const r = DATA.roadmap;
  slot('roadmap-heading').textContent = r.heading;
  slot('roadmap-notice').textContent  = r.notice;
  const list = slot('timeline');

  r.stages.forEach((stage, i) => {
    const li = tpl(stage.branches ? 'fork' : 'stage');
    li.dataset.stage = stage.id;
    $('.stage__grade', li).textContent   = stage.grade;
    $('.stage__caption', li).textContent = stage.caption;
    // PC 에서는 모두 펼치고, 휴대폰에서는 첫 단계만 펼친다
    $('.stage__box', li).open = WIDE.matches || i === 0;

    if (stage.items) {
      stage.items.forEach(t => $('.stage__items', li).append(make('li', null, t)));
    } else {
      const find = id => stage.branches.find(b => b.id === id);
      fillBranch($('.branch--clinical', li),    find('clinical'));
      fillBranch($('.branch--nonclinical', li), find('nonclinical'));
    }
    list.append(li);
  });

  slot('roadmap-closing').append(
    make('p', 'roadmap__quote', r.closing.quote),
    make('p', 'roadmap__line',  r.closing.line)
  );
}

function fillBranch(node, data) {
  $('.branch__name', node).textContent    = data.name;
  $('.branch__summary', node).textContent = data.summary;
  data.items.forEach(t => $('.branch__items', node).append(make('li', null, t)));
  const entry = $('.entry', node);
  if (entry) {
    if (data.entryOptions) data.entryOptions.forEach(o => entry.append(make('dt', null, o.name), make('dd', null, o.text)));
    else entry.remove();
  }
  if (data.note) node.append(make('p', 'branch__note', data.note));
  if (data.link) {
    const wrap = make('p', 'branch__link');
    wrap.append(extLink('chip', data.link.label, data.link.url));
    node.append(wrap);
  }
}

/* ─── 일본 · 국내 ────────────────────────────────────────────── */
function renderCompare() {
  const C = DATA.compare;
  slot('compare-heading').textContent = C.heading;
  slot('compare-lead').textContent    = C.lead;
  const list = slot('compare');
  C.items.forEach(it => {
    const li = tpl('compare');
    li.dataset.verdict = it.verdict;
    $('.cmp__title', li).textContent   = it.title;
    $('.cmp__verdict', li).textContent = C.verdictLabels[it.verdict];
    const [jp, kr] = $$('.cmp__col', li);
    $('.cmp__colname', jp).textContent = C.colJp;
    $('.cmp__text', jp).textContent    = it.jp;
    $('.cmp__org', jp).textContent     = it.jpOrg;
    $('.cmp__colname', kr).textContent = C.colKr;
    $('.cmp__text', kr).textContent    = it.kr;
    $('.cmp__org', kr).textContent     = `${C.orgsLabel}: ${it.krOrgs.join(', ')}`;
    const team = $('.cmp__team', li);
    if (it.team) team.append(make('span', 'cmp__team-label', C.teamLabel), document.createTextNode(it.team));
    else team.remove();
    list.append(li);
  });
}

/* ─── 다녀온 곳 ──────────────────────────────────────────────── */
const visitFilter = { country: 'all', type: 'all' };

function photoNode(ph) {
  const li = make('li', 'photo');
  const b = make('button'); b.type = 'button';
  b.setAttribute('aria-label', `${ph.caption} 크게 보기`);
  const img = make('img'); img.loading = 'lazy'; img.alt = ph.caption; img.src = ph.file;
  img.addEventListener('error', () => {
    li.classList.add('photo--empty'); li.textContent = '';
    li.append(make('span', null, `사진 자리\n${ph.file}`));
  });
  b.append(img);
  b.addEventListener('click', () => openLightbox(ph));
  li.append(b);
  return li;
}
function emptyPhotoNode(stopId) {
  const li = make('li', 'photo photo--empty');
  li.append(make('span', null, `사진 자리\nimg/visits/월일-${stopId}-1.jpg`));
  return li;
}

function renderVisits() {
  const V = DATA.visits;
  slot('visits-heading').textContent       = V.heading;
  slot('visits-lead').textContent          = V.lead;
  slot('visits-country-label').textContent = V.countryLabel;
  slot('visits-type-label').textContent    = V.typeLabel;
  slot('stops-none').textContent           = V.labels.none;

  const filterRow = (wrap, options, key) => {
    options.forEach(o => {
      const b = make('button', 'fopt', o.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(visitFilter[key] === o.id));
      b.addEventListener('click', () => {
        visitFilter[key] = o.id;
        $$('.fopt', wrap).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        applyVisitFilter();
      });
      wrap.append(b);
    });
  };
  filterRow(slot('visits-countries'), V.countries, 'country');
  filterRow(slot('visits-types'),     V.types,     'type');
  requestAnimationFrame(applyVisitFilter);

  const typeLabel = id => (V.types.find(t => t.id === id) || {}).label || '';
  const list = slot('stops');
  V.stops.forEach(s => {
    const li = tpl('stop');
    li.dataset.country = s.country; li.dataset.type = s.type; li.id = `stop-${s.id}`;
    $('.stop__day', li).textContent  = s.dateLabel;
    $('.stop__time', li).textContent = s.time || '';
    const tags = $('.stop__tags', li);
    tags.append(make('span', `tag tag--${s.country}`, s.country === 'jp' ? '일본' : '국내'));
    tags.append(make('span', 'tag', typeLabel(s.type)));
    $('.stop__name', li).textContent = s.name;
    $('.stop__kind', li).textContent = `${s.place} · ${s.kind}`;

    const info = $('.stop__info', li);
    const row = (label, content) => {
      const dt = make('dt', null, label); const dd = make('dd');
      if (Array.isArray(content)) { const ul = make('ul'); content.forEach(t => ul.append(make('li', null, t))); dd.append(ul); }
      else dd.textContent = content;
      const w = make('div'); w.append(dt, dd); info.append(w);
    };
    row(V.labels.purpose, s.purpose);
    row(V.labels.did, s.did);
    row(V.labels.heard, s.heard);

    const photos = $('.stop__photos', li);
    const mine = DATA.photos.items.filter(p => p.org === s.id);
    if (mine.length) mine.forEach(p => photos.append(photoNode(p)));
    else photos.append(emptyPhotoNode(s.id));

    const qa = $('.stop__qa a', li);
    qa.textContent = V.labels.qa;
    qa.href = `interview.html#${s.id}`;

    list.append(li);
  });
}

function applyVisitFilter() {
  // 고른 국가에 없는 기관 유형은 흐리게 해서 빈 결과를 미리 막는다
  const stops = DATA.visits.stops;
  $$('[data-render="visits-types"] .fopt').forEach((b, i) => {
    const id = DATA.visits.types[i].id;
    const any = id === 'all' || stops.some(s => (visitFilter.country === 'all' || s.country === visitFilter.country) && s.type === id);
    b.disabled = !any;
    if (!any && visitFilter.type === id) { visitFilter.type = 'all'; $$('[data-render="visits-types"] .fopt').forEach(x => x.setAttribute('aria-pressed', String(x === $$('[data-render="visits-types"] .fopt')[0]))); }
  });
  let shown = 0;
  $$('.stop').forEach(li => {
    const ok = (visitFilter.country === 'all' || li.dataset.country === visitFilter.country)
            && (visitFilter.type === 'all'    || li.dataset.type === visitFilter.type);
    li.hidden = !ok;
    if (ok) shown++;
  });
  slot('stops-none').hidden = shown > 0;
}

function renderMethod() {
  const M = DATA.method;
  const m = slot('method');
  m.append(make('h3', 'method__heading', M.heading));
  const steps = make('div', 'method__steps');
  M.steps.forEach(st => {
    const w = make('div', 'method__step');
    w.append(make('h4', null, st.title));
    const ul = make('ul'); st.items.forEach(t => ul.append(make('li', null, t)));
    w.append(ul); steps.append(w);
  });
  m.append(steps, make('p', 'method__note', M.note));
  slot('interview-link').textContent = M.interviewLink;
}

/* ─── 체크리스트 ─────────────────────────────────────────────── */
const STORE_KEY = 'dbridge-check-v1';
let checkState = store.get(STORE_KEY, {});
let currentGrade = DATA.checklist.gradeTabs[0].id;
const saveState = () => { store.set(STORE_KEY, checkState); markSaved(); };

function markSaved() {
  const n = slot('check-saved');
  const any = Object.keys(checkState).length > 0;
  n.textContent = any ? DATA.checklist.savedLabel : '';
}

function visibleItems(grade) {
  return DATA.checklist.items.filter(it => {
    if (!it.grades.includes(grade)) return false;
    if (it.showIf && !it.showIf.valueIn.includes(checkState[it.showIf.item])) return false;
    return true;
  });
}
function emptyItems(grade) {
  return visibleItems(grade).filter(it => {
    if (it.type === 'choice') return it.emptyWhen.includes(checkState[it.id] || it.defaultValue);
    return !checkState[it.id];
  });
}

function renderChecklist() {
  const C = DATA.checklist;
  slot('checklist-heading').textContent = C.heading;
  slot('checklist-lead').textContent    = C.lead;
  slot('programs-button').textContent   = C.programsButton;

  const tabs = slot('grade-tabs');
  C.gradeTabs.forEach(g => {
    const b = make('button', 'grade-tab', g.label);
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'check-form');
    b.id = `tab-${g.id}`;
    b.dataset.grade = g.id;
    b.addEventListener('click', () => { currentGrade = g.id; paintChecklist(); });
    tabs.append(b);
  });
  tabs.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const ids = C.gradeTabs.map(g => g.id);
    const i = ids.indexOf(currentGrade);
    currentGrade = ids[(i + (e.key === 'ArrowRight' ? 1 : ids.length - 1)) % ids.length];
    paintChecklist();
    $(`.grade-tab[data-grade="${currentGrade}"]`).focus();
  });

  $('#check-form').addEventListener('submit', e => e.preventDefault());
  $('[data-action="reset"]').addEventListener('click', () => { checkState = {}; saveState(); paintChecklist(); toast('체크를 지웠습니다'); });
  $('[data-action="save-image"]').addEventListener('click', saveImage);
  $('[data-action="programs"]').addEventListener('click', openProgramSheet);

  // 경로 찾기에서 고른 학년이 있으면 그 학년으로 시작
  if (finderState.grade && C.gradeTabs.some(g => g.id === finderState.grade)) currentGrade = finderState.grade;
  markSaved();
  paintChecklist();
}

function paintChecklist() {
  $$('.grade-tab').forEach(b => {
    const on = b.dataset.grade === currentGrade;
    b.setAttribute('aria-selected', String(on));
    b.tabIndex = on ? 0 : -1;
  });
  $('#check-form').setAttribute('aria-labelledby', `tab-${currentGrade}`);
  slot('legend-now').textContent     = DATA.checklist.groupLabels.now;
  slot('legend-ongoing').textContent = DATA.checklist.groupLabels.ongoing;

  const items = visibleItems(currentGrade);
  ['now', 'ongoing'].forEach(group => {
    const ul = slot(`items-${group}`);
    ul.textContent = '';
    items.filter(it => it.group === group).forEach(it => ul.append(buildCheckItem(it)));
  });
  paintResult();
}

function buildCheckItem(it) {
  if (it.type === 'choice') {
    const li = tpl('choice');
    $('.check__text', li).textContent = it.text;
    const box = $('.choice__options', li);
    const cur = checkState[it.id] || it.defaultValue;
    it.options.forEach(opt => {
      const b = make('button', 'choice__btn', opt.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(cur === opt.value));
      b.addEventListener('click', () => { checkState[it.id] = opt.value; saveState(); paintChecklist(); });
      box.append(b);
    });
    return li;
  }
  const li = tpl('check');
  const input = $('.check__box', li);
  input.id = `chk-${it.id}`;
  input.checked = !!checkState[it.id];
  $('.check__text', li).textContent = it.text;
  input.addEventListener('change', () => {
    if (input.checked) checkState[it.id] = true; else delete checkState[it.id];
    saveState(); paintResult();
  });
  return li;
}

function progTag(pr) {
  const label = pr.when ? `${pr.name} (${pr.when})` : pr.name;
  const node = pr.url ? extLink('ptag', label, pr.url) : make('span', 'ptag', label);
  if (pr.kind === 'external') node.classList.add('ptag--ext');
  return node;
}

const jobUrl = kw => DATA.jobSites[0].template.replace('{q}', encodeURIComponent(kw));

function paintResult() {
  const R = DATA.checklist.result;
  const empties = emptyItems(currentGrade);
  slot('result-heading').textContent = R.headingTemplate.replace('{n}', empties.length);

  const list = slot('result-list');
  list.textContent = '';
  empties.forEach(it => {
    const li = tpl('empty');
    $('.empty__text', li).textContent = it.emptyLabel || it.text;
    if (it.emptyNote) $('.empty__note', li).textContent = it.emptyNote; else $('.empty__note', li).remove();

    const progs = $('.empty__progs', li);
    (it.programs || []).map(pid => DATA.programs[pid]).filter(Boolean).forEach(pr => progs.append(progTag(pr)));
    if (it.noProgram) progs.append(make('span', 'ptag ptag--none', it.noProgram));
    if (!progs.children.length) progs.remove();

    const jobs = $('.empty__jobs', li);
    buildJobs(jobs, it);
    if (!jobs.children.length) jobs.remove();
    list.append(li);
  });

  const prevWrap = slot('result-preview');
  prevWrap.textContent = '';
  const prev = R.preview[currentGrade];
  if (prev) {
    prevWrap.hidden = false;
    prevWrap.append(make('p', 'result__preview-caption', prev.caption));
    const ul = make('ul');
    prev.items.forEach(id => { const it = DATA.checklist.items.find(x => x.id === id); if (it) ul.append(make('li', null, it.text)); });
    prevWrap.append(ul);
  } else prevWrap.hidden = true;

  const done = slot('result-done');
  done.textContent = '';
  if (empties.length === 0) {
    done.hidden = false;
    done.append(make('p', null, R.allDone.line));
    const a = make('a', 'btn', R.allDone.button); a.href = `#${R.allDone.target}`;
    done.append(a);
  } else done.hidden = true;
}

function buildJobs(wrap, it) {
  if (!it.jobSearch) return;
  const chip = (label, href) => { const li = make('li'); li.append(extLink('chip chip--job', label, href)); return li; };
  const m = it.jobSearch.mode;
  if (m === 'byPath') DATA.paths.forEach(p => wrap.append(chip(`${p.num} ${p.name} 공고`, jobUrl(p.jobKeywords[0]))));
  else if (m === 'keywords') it.jobSearch.keywords.forEach(kw => wrap.append(chip(`“${kw}” 공고`, jobUrl(kw))));
  else if (m === 'company') {
    const li = make('li', 'job-search');
    const input = make('input', 'job-search__input');
    input.type = 'text'; input.placeholder = '기업 이름'; input.setAttribute('aria-label', '검색할 기업 이름');
    const go = make('button', 'chip chip--job', '공고 찾기'); go.type = 'button';
    const open = () => { const v = input.value.trim(); if (v) window.open(jobUrl(v), '_blank', 'noopener'); };
    go.addEventListener('click', open);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); open(); } });
    li.append(input, go); wrap.append(li);
  }
}

function openProgramSheet() {
  openSheet({
    eyebrow: '교내외 비교과',
    title: '프로그램 모아보기',
    build(body) {
      const ul = make('ul', 'prog-list');
      Object.values(DATA.programs).forEach(pr => {
        const li = tpl('program');
        const kind = $('.prog__kind', li);
        kind.textContent = pr.kind === 'campus' ? '교내' : '외부';
        kind.dataset.kind = pr.kind;
        $('.prog__name', li).textContent = pr.name;
        if (pr.when) $('.prog__when', li).textContent = pr.when; else $('.prog__when', li).remove();
        const a = $('.prog__link', li);
        if (pr.url) { a.href = pr.url; a.target = '_blank'; a.rel = 'noopener'; } else a.remove();
        ul.append(li);
      });
      body.append(ul);
    }
  });
}

/* 이미지로 저장 */
function buildExport() {
  const box = $('#export-sheet');
  box.textContent = '';
  const label = DATA.checklist.gradeTabs.find(g => g.id === currentGrade).label;
  box.append(make('p', 'export__eyebrow', `${label} · 임상병리사의 바이오 진출 로드맵`));
  box.append(make('h2', 'export__title', slot('result-heading').textContent));
  const wrap = make('div', 'export__list');
  emptyItems(currentGrade).forEach(it => {
    const card = make('div', 'export__item');
    card.append(make('h3', null, it.emptyLabel || it.text));
    if (it.emptyNote) card.append(make('p', 'export__note', it.emptyNote));
    const names = (it.programs || []).map(pid => DATA.programs[pid]).filter(Boolean).map(pr => pr.when ? `${pr.name} (${pr.when})` : pr.name);
    if (it.noProgram) names.push(it.noProgram);
    if (names.length) { const row = make('div', 'export__progs'); names.forEach(n => row.append(make('span', 'export__prog-tag', n))); card.append(row); }
    wrap.append(card);
  });
  box.append(wrap, make('p', 'export__foot', 'D-Bridge · 동서대학교 임상병리학과'));
  return box;
}

function saveImage() {
  const btn = $('[data-action="save-image"]');
  const box = buildExport();
  const done = canvas => {
    const a = document.createElement('a');
    a.download = `${DATA.checklist.result.export.filename}-${currentGrade}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
    btn.textContent = '이미지로 저장';
  };
  const fail = () => { btn.textContent = '저장 실패 · 다시 시도'; };
  btn.textContent = '만드는 중…';
  const run = () => html2canvas(box, { scale: 2, backgroundColor: '#ffffff', useCORS: true }).then(done).catch(fail);
  if (window.html2canvas) return run();
  const sc = document.createElement('script');
  sc.src = 'vendor/html2canvas.min.js';
  sc.onload = run; sc.onerror = fail;
  document.head.append(sc);
}

/* ─── 사진 ───────────────────────────────────────────────────── */
function renderGallery() {
  const G = DATA.gallery;
  slot('gallery-heading').textContent = G.heading;
  slot('gallery-lead').textContent    = G.lead;
  const grid = slot('gallery');
  if (!DATA.photos.items.length) { grid.append(make('li', 'gallery__empty', G.empty)); return; }
  DATA.photos.items.forEach(ph => grid.append(photoNode(ph)));
  if (G.note && !DATA.photos.items.some(p => p.org)) slot('gallery-lead').textContent = `${G.lead} ${G.note}`;
}
function openLightbox(ph) {
  const dlg = $('#lightbox');
  const img = slot('lightbox-img');
  img.src = ph.file; img.alt = ph.caption;
  slot('lightbox-cap').textContent = ph.caption;
  dlg.showModal();
}

/* ─── 남은 과제 · 하단 ───────────────────────────────────────── */
function renderOpen() {
  const O = DATA.open;
  slot('open-heading').textContent         = O.heading;
  slot('open-lead').textContent            = O.lead;
  slot('open-limits-label').textContent    = O.limitsLabel;
  slot('open-questions-label').textContent = O.questionsLabel;
  const dl = slot('open-limits');
  O.limits.forEach(l => { const w = make('div'); w.append(make('dt', null, l.title), make('dd', null, l.body)); dl.append(w); });
  const ul = slot('open-questions');
  O.questions.forEach(q => ul.append(make('li', null, q)));
  slot('baton-heading').textContent = O.batonHeading;
  setRichText(slot('baton'), O.baton);
}

function renderFooter() {
  const f = DATA.footer;
  slot('note-heading').textContent    = f.noteHeading;
  slot('note-body').textContent       = f.note;
  slot('contact-heading').textContent = f.contactHeading;
  if (f.credits) slot('credits').textContent = f.credits;
  const dl = slot('contact-list');
  f.contact.forEach(row => {
    if (!row.value) return;
    const wrap = make('div', 'contact__row');
    const dd = make('dd');
    if (row.url) dd.append(extLink(null, row.value, row.url)); else dd.textContent = row.value;
    wrap.append(make('dt', null, row.label), dd);
    dl.append(wrap);
  });
}

/* ─── 스크롤 진입 · 현재 위치 ────────────────────────────────── */
function setupReveal() {
  const nodes = $$('main > section > .section__title, .path, .stage, .cmp, .stop, .limits > div');
  nodes.forEach(n => n.classList.add('reveal'));
  const showAll = () => nodes.forEach(n => n.classList.add('is-in'));
  if (REDUCE || !('IntersectionObserver' in window)) { showAll(); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add('is-in'); io.unobserve(e.target); });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.02 });
  nodes.forEach(n => io.observe(n));
  setTimeout(showAll, 2500);   // 안전장치: 어떤 이유로든 안 보이면 전부 보이게
}

function setupScrollSpy() {
  const links = $$('.topbar__nav a, .tabbar a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  const sections = [...new Set(links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean))];
  const setActive = id => links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
  const io = new IntersectionObserver(entries => {
    const seen = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (seen.length) setActive(seen[0].target.id);
  }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));
}

/* ─── 바텀시트 ───────────────────────────────────────────────── */
function openSheet({ eyebrow, title, build }) {
  const body = slot('sheet-body');
  slot('sheet-eyebrow').textContent = eyebrow || '';
  slot('sheet-title').textContent   = title || '';
  body.textContent = '';
  if (build) build(body);
  DB.termify(body);
  body.scrollTop = 0;
  document.documentElement.classList.add('is-locked');
  $('#sheet').showModal();
  body.focus();
}
function closeSheet() { $('#sheet').close(); }

/* ─── 시작 ───────────────────────────────────────────────────── */
function init() {
  const safe = (name, fn) => { try { fn(); } catch (err) { console.error(`[${name}] 렌더 실패`, err); } };
  safe('theme',     DB.setupTheme);
  safe('share',     DB.setupShare);
  safe('sharelbl',  renderShareLabel);
  safe('hero',      renderHero);
  safe('finder',    renderFinder);
  safe('paths',     renderPaths);
  safe('roadmap',   renderRoadmap);
  safe('compare',   renderCompare);
  safe('visits',    renderVisits);
  safe('method',    renderMethod);
  safe('checklist', renderChecklist);
  safe('gallery',   renderGallery);
  safe('open',      renderOpen);
  safe('footer',    renderFooter);
  safe('reveal',    setupReveal);
  safe('spy',       setupScrollSpy);
  // 용어 풀이: 섹션마다 첫 등장에만 밑줄
  safe('terms',     () => { $$('main > section, .hero__inner').forEach(sec => DB.termify(sec)); DB.setupTermPopover(); });

  const sheet = $('#sheet');
  $('[data-action="close-sheet"]').addEventListener('click', closeSheet);
  sheet.addEventListener('close', () => document.documentElement.classList.remove('is-locked'));
  sheet.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });

  const lb = $('#lightbox');
  $('[data-action="close-lightbox"]').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb || e.target.tagName === 'FIGURE') lb.close(); });

  // 창 크기가 바뀌면 로드맵 접힘 상태를 맞춘다
  WIDE.addEventListener('change', e => { if (e.matches) $$('.stage__box').forEach(d => d.open = true); });
}

document.addEventListener('DOMContentLoaded', init);
