/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 인터뷰 아카이브
   interview.js  ·  interview.html 전용. 내용은 data.js 의 interviews 에 있습니다.
   ═══════════════════════════════════════════════════════════════ */

const IV = DATA.interviews;

const q1 = (sel, root = document) => root.querySelector(sel);
const mk = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
const at = (name) => document.querySelector(`[data-render="${name}"]`);
const clone = (name) => q1(`#tpl-${name}`).content.firstElementChild.cloneNode(true);

function buildOrg(org) {
  const node = clone('org');
  node.id = org.id;
  q1('.org__name', node).textContent = org.name;
  q1('.org__kind', node).textContent = org.kind;
  q1('.org__when', node).textContent = org.when;
  q1('.org__saw',  node).textContent = org.saw;
  q1('.org__count', node).textContent = `인터뷰 ${org.qa.length}문항`;

  const list = q1('.org__qa', node);
  org.qa.forEach(item => {
    const li = clone('qa');
    q1('.qa__q', li).textContent = item.q;
    const a = q1('.qa__a', li);
    item.a.forEach(t => a.append(mk('p', null, t)));
    list.append(li);
  });
  return node;
}

function buildExtra(x) {
  const node = mk('article', 'org org--extra');
  node.id = x.id;
  node.append(mk('p', 'org__kind', x.kind));
  node.append(mk('h3', 'org__name', x.name));
  node.append(mk('p', 'org__when', x.when));
  const body = mk('div', 'org__extra-body');
  x.body.forEach(t => body.append(mk('p', null, t)));
  node.append(body);
  return node;
}

function renderInterview() {
  at('back-top').textContent     = IV.head.back;
  at('head-eyebrow').textContent = IV.head.eyebrow;
  const t = at('head-title');
  IV.head.title.split('\n').forEach(line => t.append(mk('span', 'hero__line', line)));
  at('head-lead').textContent = IV.head.lead;

  const wrap = at('groups');
  IV.groups.forEach(group => {
    const sec = mk('section', 'group');
    sec.id = `group-${group.id}`;
    const head = mk('header', 'group__head');
    head.append(mk('h2', 'section__title', group.region));
    head.append(mk('p', 'group__period', group.period));
    head.append(mk('p', 'group__note', group.note));
    sec.append(head);

    const list = mk('div', 'group__list');
    // 날짜순: 참관(extra)은 방문 순서에 맞춰 두 번째 자리에
    group.orgs.forEach((org, i) => {
      list.append(buildOrg(org));
      if (i === 0 && group.extra) list.append(buildExtra(group.extra));
    });
    sec.append(list);
    wrap.append(sec);
  });

  renderTopics();
  renderViewTabs();

  at('foot-heading').textContent = IV.foot.heading;
  const fb = at('foot-body');
  IV.foot.body.forEach(t => fb.append(mk('p', null, t)));
  at('back-bottom').textContent = IV.foot.back;

  // 다녀온 곳 카드에서 #기관id 로 들어오면 그 기관의 문답을 펼쳐 둔다
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) {
    const d = q1('.org__details', target);
    if (d) d.open = true;
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
}

/* 주제별 보기 — 같은 문답을 주제로 묶어 다시 보여준다 */
function allOrgs() { return IV.groups.flatMap(g => g.orgs.map(o => ({ ...o, region: g.region }))); }

function renderTopics() {
  const wrap = at('topics');
  IV.topics.forEach(tp => {
    const items = [];
    allOrgs().forEach(org => org.qa.forEach(qa => { if (qa.topic === tp.id) items.push({ org, qa }); }));
    if (!items.length) return;
    const sec = mk('section', 'group');
    const head = mk('header', 'group__head');
    head.append(mk('h2', 'section__title', tp.label));
    head.append(mk('p', 'group__period', `${items.length}문답 · ${new Set(items.map(i => i.org.name)).size}곳`));
    sec.append(head);
    const list = mk('div', 'group__list');
    items.forEach(({ org, qa }) => {
      const card = mk('article', 'org org--qa');
      card.append(mk('p', 'org__kind', `${org.region} · ${org.name}`));
      card.append(mk('h3', 'qa__q org__name--q', qa.q));
      const a = mk('div', 'qa__a');
      qa.a.forEach(t => a.append(mk('p', null, t)));
      card.append(a);
      const link = mk('a', 'org__link', '기관 기록으로');
      link.href = `#${org.id}`;
      link.addEventListener('click', () => switchView('org'));
      card.append(link);
      list.append(card);
    });
    sec.append(list);
    wrap.append(sec);
  });
}

let currentView = 'org';
function switchView(v) {
  currentView = v;
  at('groups').hidden = v !== 'org';
  at('topics').hidden = v !== 'topic';
  document.querySelectorAll('.viewbar [role="tab"]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.view === v)));
}
function renderViewTabs() {
  const bar = at('view-tabs');
  [['org', IV.viewLabels.byOrg], ['topic', IV.viewLabels.byTopic]].forEach(([v, label]) => {
    const b = mk('button', 'grade-tab', label);
    b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.view = v;
    b.setAttribute('aria-selected', String(v === currentView));
    b.addEventListener('click', () => { switchView(v); window.scrollTo({ top: bar.getBoundingClientRect().top + window.scrollY - 60 }); });
    bar.append(b);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderInterview();
  DB.setupTheme();
  DB.setupShare();
  document.querySelectorAll('.group').forEach(g => DB.termify(g));
  if (location.hash === '#topics') switchView('topic');
  DB.setupTermPopover();
});
