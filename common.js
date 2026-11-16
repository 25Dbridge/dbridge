/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 두 페이지가 같이 쓰는 코드
   common.js  ·  다크 모드, 공유, 알림, 용어 풀이
   ═══════════════════════════════════════════════════════════════ */

const DB = (() => {
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v == null ? fallback : JSON.parse(v); } catch { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
  };
  const make = (tag, className, text) => {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;
    return n;
  };

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2200);
  }

  /* 다크 모드 — 시스템 설정을 따르고, 버튼으로 바꾸면 그 선택을 기억한다 */
  function setupTheme() {
    const root = document.documentElement;
    const btns = $$('[data-action="theme"]');
    const sys = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const saved = store.get('dbridge-theme', null);
      const dark = saved ? saved === 'dark' : sys.matches;
      root.dataset.theme = dark ? 'dark' : 'light';
      btns.forEach(b => b.setAttribute('aria-label', dark ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기'));
      const meta = $('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', dark ? '#0F0D14' : '#201D2B');
    };
    apply();
    sys.addEventListener('change', () => { if (!store.get('dbridge-theme', null)) apply(); });
    btns.forEach(b => b.addEventListener('click', () => {
      store.set('dbridge-theme', root.dataset.theme === 'dark' ? 'light' : 'dark');
      apply();
    }));
  }

  /* 공유 — 휴대폰은 공유 시트, 안 되면 링크 복사 */
  function setupShare() {
    const data = { title: DATA.site.title, text: DATA.site.shareText, url: DATA.site.url };
    const share = async () => {
      if (navigator.share) {
        try { await navigator.share(data); return; } catch (e) { if (e.name === 'AbortError') return; }
      }
      try { await navigator.clipboard.writeText(data.url); toast(DATA.footer.copied); }
      catch { window.prompt('주소를 복사하세요', data.url); }
    };
    $$('[data-action="share"]').forEach(b => b.addEventListener('click', share));
  }

  /* 용어 풀이 — 지정한 영역 안에서 용어가 처음 나오는 자리에 버튼을 씌운다 */
  const TERMS = (DATA.glossary || []).slice().sort((a, b) => b.term.length - a.term.length);
  const TERM_RE = TERMS.length ? new RegExp('(' + TERMS.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')') : null;
  const SKIP = new Set(['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SCRIPT', 'STYLE', 'H1', 'H2', 'SUMMARY', 'ABBR', 'LEGEND', 'LABEL', 'DT']);

  function termify(root) {
    if (!TERM_RE || !root) return;
    const seen = new Set();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        for (let p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (SKIP.has(p.tagName) || p.classList.contains('term') || p.classList.contains('no-term')) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const parts = node.nodeValue.split(TERM_RE);
      if (parts.length < 2) return;
      const frag = document.createDocumentFragment();
      parts.forEach(part => {
        const t = TERMS.find(x => x.term === part);
        if (t && !seen.has(t.term)) {
          seen.add(t.term);
          const b = make('button', 'term', part);
          b.type = 'button';
          b.dataset.term = t.term;
          b.setAttribute('aria-label', `${part} — 용어 풀이 보기`);
          frag.append(b);
        } else frag.append(document.createTextNode(part));
      });
      node.parentNode.replaceChild(frag, node);
    });
  }

  function setupTermPopover() {
    const pop = $('#termpop');
    if (!pop) return;
    const title = $('.termpop__term', pop), body = $('.termpop__text', pop);
    let current = null, openedAt = 0;
    const close = () => { pop.hidden = true; if (current) current.setAttribute('aria-expanded', 'false'); current = null; };
    const open = (btn) => {
      const t = TERMS.find(x => x.term === btn.dataset.term);
      if (!t) return;
      if (current === btn) { close(); return; }
      if (current) current.setAttribute('aria-expanded', 'false');
      current = btn; btn.setAttribute('aria-expanded', 'true');
      title.textContent = t.term; body.textContent = t.text;
      pop.hidden = false;
      openedAt = window.scrollY;
      const r = btn.getBoundingClientRect();
      const w = Math.min(window.innerWidth - 24, 22 * 16);
      let left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12));
      pop.style.width = w + 'px';
      pop.style.left = left + 'px';
      const below = r.bottom + 8;
      pop.style.top = (below + pop.offsetHeight + 12 < window.innerHeight ? below : Math.max(12, r.top - pop.offsetHeight - 8)) + 'px';
    };
    document.addEventListener('click', e => {
      const btn = e.target.closest('.term');
      if (btn) { e.preventDefault(); open(btn); return; }
      if (!e.target.closest('#termpop')) close();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.addEventListener('scroll', () => { if (current && Math.abs(window.scrollY - openedAt) > 48) close(); }, { passive: true });
    $('.termpop__close', pop).addEventListener('click', close);
  }

  return { $, $$, store, make, toast, setupTheme, setupShare, termify, setupTermPopover };
})();
