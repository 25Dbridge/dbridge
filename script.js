/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 임상병리사의 바이오 진출 로드맵
   script.js
   ═══════════════════════════════════════════════════════════════ */

const DATA = {
  hero: {
    question: '임상병리사가 갈 수 있는\n병원 밖의 길을\n정리했습니다',
    answer: '일본과 국내 일곱 곳을 찾아가 현직자 10명을 만났습니다. 분석·효능평가, 생산·품질, 규제·임상이라는 3대 경로로 정리했으며, 어떤 직무를 목표로 하느냐에 따라 요구되는 학위와 역량이 달라집니다.',
    stats: [
      { value: 7,  label: '현장 방문 기관' },
      { value: 10, label: '대면 인터뷰' },
      { value: 3,  label: '도출한 진로 로드맵' }
    ],
    byline: '동서대학교 임상병리학과 재학생 5인이 일본 고베 의료산업도시와 국내 신약개발 기업을 현장 조사해 교차 검증한 결과입니다.',
    team: 'D-Bridge · 동서대학교 임상병리학과 · 2026년 여름'
  },

  roadmap: {
    notice: '3학년 전까지는 임상과 비임상의 준비 과정이 크게 다르지 않습니다.',
    stages: [
      {
        id: 'g12',
        grade: '1·2학년',
        caption: '탐색과 기초',
        items: [
          '학부 실험실에 들어가 기초 연구에 참여한다.',
          '가설 수립부터 검증, 결과 리뷰까지 실험의 한 사이클을 완수해 본다.',
          '전공 과목 학점을 관리한다. 채용 서류에 성적증명서가 포함된다.',
          '어학 역량 확보를 시작한다. 기업 현장의 기본 채용 요건으로 언급되었다.'
        ]
      },
      {
        id: 'g3',
        grade: '3학년',
        caption: '방향 결정',
        items: [
          '비임상 3대 직무 경로 중 목표 직무를 정한다.',
          '목표에 따라 대학원 진학 여부를 판단한다. 분석·효능평가는 석사 이상, 생산·품질은 학사로 진입 가능하다.',
          '목표 직무 현장에서 쓰는 실무 용어와 분석 기술을 미리 학습한다.',
          '생산·품질 직군이 목표라면 외부 기관의 GMP 과정 이수를 검토한다. 직무 이해도를 보여주는 지표로 통용된다.',
          '복수전공과 융합 과목으로 전공 지식의 폭을 넓힌다.'
        ]
      },
      {
        id: 'g4',
        grade: '4학년',
        caption: '선택',
        branches: [
          {
            id: 'clinical',
            name: '임상',
            summary: '국가시험과 병원 취업',
            items: [
              '국가시험 합격과 병원 취업 준비에 집중한다.',
              '합격 기준은 필기 40% 이상, 전 과목 총점 60% 이상, 실기 60% 이상이다.',
              '시험 일정과 응시자격은 매년 국시원 공고로 확인한다.'
            ],
            note: '한국보건의료인국가시험원 공개 자료로 보완했습니다.',
            link: { label: '국시원 임상병리사 안내', url: 'https://www.kuksiwon.or.kr/subcnt/c_2012/1/view.do?seq=7&itm_seq=08' },
            opensPaths: false
          },
          {
            id: 'nonclinical',
            name: '비임상',
            summary: '기업의 연구 · 생산 · 규제 직무',
            items: [
              '논리적으로 설명하는 역량을 강화한다. 면접과 실무에서 직접 평가되는 항목이다.',
              '지원할 기업의 파이프라인을 분석해 기술 실현성과 대량 생산 가능성을 검토한다.'
            ],
            entryOptions: [
              { id: 'A', name: '취업 선행', text: '연구 보조로 먼저 입사해 실무 흐름을 파악한 뒤 대학원에 진학한다.' },
              { id: 'B', name: '진학 선행', text: '졸업 직후 대학원에 진학해 연구 성과를 확보한 후 기업에 지원한다.' }
            ],
            opensPaths: true
          }
        ]
      },
      {
        id: 'after',
        grade: '졸업 후',
        caption: '첫 직장',
        items: [
          '소규모 기업은 신약 개발의 전 과정을 경험할 수 있고 업무 범위가 유동적이다.',
          '대규모 기업은 담당 영역이 명확한 대신 다루는 범위가 한정적이다.',
          'AI가 대체하기 어려운 실험 설계, 결과 평가, 최종 판단에 역량을 집중한다.'
        ]
      }
    ],
    closing: { quote: '"임상병리사의 길은 무궁무진하다"', line: '다만 어느 방향으로 갈지에 따라 지금 준비할 것이 달라진다.' }
  },

  paths: [
    {
      id: 'analysis',
      num: '①',
      name: '분석 · 효능평가',
      degree: '석사 이상 권장',
      work: 'ex vivo 효능평가, 기기분석, 동물실험',
      courses: ['조직학(2-2)', '세포생물학(2-1)', '임상화학및실험'],
      jobKeywords: ['효능평가', '비임상', '전임상']
    },
    {
      id: 'quality',
      num: '②',
      name: '생산 · 품질 (QC·QA)',
      degree: '학사 · 전문학사 진입 가능',
      work: 'GMP 환경에서의 품질관리(QC), 품질보증(QA), 무균 공정 생산',
      courses: ['임상화학및실험1·2', '임상미생물학및실험1·2 (무균 조작)'],
      jobKeywords: ['QC', '품질관리 제약', 'GMP']
    },
    {
      id: 'ra',
      num: '③',
      name: '규제 · 임상 · 사업개발',
      degree: '학사 이상',
      work: '식약처 품목허가 대응(RA), 임상시험 운영, 기술이전 및 라이선싱',
      courses: ['면역학(3-1)', '임상분자생물학및실험1'],
      jobKeywords: ['RA 인허가', '임상시험 CRA'],
      sections: [
        {
          origin: 'field',
          body: [
            '임상병리 전공자가 임상팀, RA, 라이선싱 직무로 진출한 사례를 기업 인터뷰로 확인했습니다.',
            'RA는 식약처 가이드라인에 맞춰 문서를 준비하므로 의학 지식이 직접 활용됩니다.',
            '다만 임상병리 전공의 1차 목표는 병원 쪽이 적합하다는 것이 인터뷰이의 판단이었습니다.'
          ]
        },
        {
          origin: 'public',
          body: [
            'RA는 약사만 지원할 수 있는 업무로 알려져 있으나 실제로는 비약사 신입 채용 사례가 존재합니다. 다만 대형 제약사는 약사 면허 소지자를 선호하는 편이라, 소규모 기업에서 실무 경력을 먼저 확보하는 경로가 현실적입니다.'
          ],
          groups: [
            {
              label: '하는 일',
              items: ['허가자료 작성·검토 및 규제기관 제출', '허가 유지·변경 관리', 'GMP·GCP 실사 지원', '표시자재 관리']
            },
            {
              label: '요구 역량',
              items: ['허가 규정 이해', '문서 검토의 꼼꼼함', '논리적 커뮤니케이션', '유관부서 협업', '외국어(영어)']
            },
            {
              label: '준비',
              items: ['별도 자격증은 없으나 워드·엑셀 활용 능력이 매우 중요합니다.', '의약품 규제업무 전문가 양성과정, 한국제약바이오협회 RA 기본교육(온라인) 등이 있습니다.']
            }
          ]
        }
      ]
    }
  ],

  sheetLabels: { work: '하는 일', courses: '연결 과목' },
  originLabels: { field: 'GELS에서 확인한 것', public: '공개 자료로 보강한 내용' },

  checklist: {
    gradeTabs: [
      { id: 'g12', label: '1·2학년' },
      { id: 'g3',  label: '3학년'  },
      { id: 'g4',  label: '4학년'  }
    ],
    groupLabels: { now: '지금 할 것', ongoing: '학년과 무관하게' },
    items: [
      {
        id: 'A1', grades: ['g12'], group: 'now', type: 'check',
        text: '학부 실험실에 들어가 있거나, 들어가는 방법을 알아본 적이 있다.',
        emptyNote: '',
        programs: ['undergrad_researcher', 'prof_counsel']
      },
      {
        id: 'A2', grades: ['g12'], group: 'now', type: 'check',
        text: '가설 수립부터 검증, 리뷰까지 실험의 한 사이클을 완수해 보았다.',
        emptyNote: '단순히 실험을 해본 것과 한 사이클을 끝내본 것은 실무에서 큰 차이를 만듭니다.',
        programs: ['capstone', 'academic_fest', 'ugrad_research_fund']
      },
      {
        id: 'B1', grades: ['g3'], group: 'now', type: 'check',
        text: '비임상 3대 직무 경로 중 타깃으로 삼는 직무를 정했다.',
        emptyNote: '채용공고의 자격 요건을 보면 그 경로가 학사를 뽑는지 석사를 뽑는지 바로 보입니다.',
        programs: ['career_counsel', 'job_lecture', 'senior_mentoring'],
        jobSearch: { mode: 'byPath' },
        linkToSection: 'paths'
      },
      {
        id: 'B2', grades: ['g3'], group: 'now', type: 'check',
        text: '목표 직무의 요구 학위를 파악하고 대학원 진학 여부를 판단했다.',
        emptyNote: '분석·효능평가는 석사 이상, 생산·품질은 학사로 진입 가능합니다.',
        programs: ['grad_briefing', 'prof_counsel', 'grad_counsel']
      },
      {
        id: 'B3', grades: ['g3'], group: 'now', type: 'check',
        text: '목표 직무 현장에서 쓰는 실무 용어와 기술을 미리 찾아본 적이 있다.',
        emptyNote: '현장에서 실무 용어와 회의 내용에 벽을 느꼈다는 인터뷰 내용이 있었습니다.',
        programs: ['job_lecture', 'senior_mentoring']
      },
      {
        id: 'B4', grades: ['g3'], group: 'now', type: 'check',
        text: '목표 경로에서 요구하는 외부 직무 교육을 검토한 적이 있다.',
        emptyNote: '생산·품질 직군이 목표라면 GMP 교육 과정 이수를 추천합니다.',
        programs: ['gmp_course'],
        noProgram: '교내에 직무교육·자격증 지원 제도는 확인되지 않았습니다.'
      },
      {
        id: 'B5', grades: ['g3'], group: 'now', type: 'check',
        text: '복수전공과 융합 과목으로 전공 지식을 넓히는 방법을 알아보았다.',
        emptyNote: '',
        programs: ['double_major']
      },
      {
        id: 'D1', grades: ['g4'], group: 'now', type: 'choice',
        text: '임상과 비임상 중 지원할 방향을 확정했다.',
        options: [
          { value: 'clinical',    label: '임상'   },
          { value: 'nonclinical', label: '비임상' },
          { value: 'undecided',   label: '아직'   }
        ],
        defaultValue: 'undecided',
        emptyWhen: ['undecided'],
        emptyLabel: '방향 결정',
        emptyNote: '어느 쪽을 고르느냐에 따라 남은 준비 과정이 완전히 달라집니다.',
        programs: ['career_counsel', 'senior_mentoring']
      },
      {
        id: 'D2', grades: ['g4'], group: 'now', type: 'check',
        showIf: { item: 'D1', valueIn: ['nonclinical'] },
        text: '취업 선행과 진학 선행 중 어느 쪽인지 정했다.',
        emptyNote: '',
        programs: ['grad_counsel', 'grad_briefing'],
        jobSearch: { mode: 'keywords', keywords: ['연구보조', '실험실 인턴'] }
      },
      {
        id: 'D3', grades: ['g4'], group: 'now', type: 'check',
        text: '내 경험과 역량을 논리적인 의사소통(말과 글)으로 설명할 수 있다.',
        emptyNote: '면접과 실무 현장에서 직접 평가되는 가장 중요한 항목입니다.',
        programs: ['writing_clinic', 'mock_interview']
      },
      {
        id: 'D4', grades: ['g4'], group: 'now', type: 'check',
        text: '지원할 기업의 파이프라인(기술 실현성 및 양산 가능성)을 분석해 보았다.',
        emptyNote: '단순히 기업 이름만 보지 말고, 채용공고와 파이프라인을 함께 검토해야 합니다.',
        programs: [],
        jobSearch: { mode: 'company' }
      },
      {
        id: 'C1', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '전공 과목 성적을 확인하고 목표 학점을 정해두었다.',
        emptyNote: '채용 서류에 성적증명서가 주요 평가 지표로 포함됩니다.',
        programs: ['study_lecture', 'tutoring']
      },
      {
        id: 'C2', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '공인 어학 역량 확보를 꾸준히 진행하고 있다.',
        emptyNote: '방문한 3개 기업 중 2곳이 기본 요건으로 언급한 사항입니다.',
        programs: ['language_course'],
        noProgram: '응시료 지원 제도는 확인되지 않았습니다. 학과 안에서 스터디를 만드는 방법도 있습니다.'
      }
    ],
    result: {
      headingTemplate: '지금 해볼 수 있는 것 {n}개',
      preview: { g12: { items: ['B1', 'B2', 'B3', 'B4', 'B5'], caption: '1년 뒤엔 이런 걸 물어봅니다' } },
      allDone: { line: '준비는 되어 있습니다. 이제 어디로 갈지 봅니다.', button: '진출 경로 보기', target: 'paths' },
      export: { filename: 'dbridge-checklist' }
    }
  },

  programs: {
    undergrad_researcher: { name: '임상병리학과 연구회', kind: 'campus', url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34132' },
    capstone: { name: '캡스톤디자인 지원 프로그램', kind: 'campus', url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000197&mode=view&idx=103053' },
    academic_fest: { name: '바이오헬스융합대학 학술제 엑스포', kind: 'campus', url: '' },
    ugrad_research_fund: { name: '학부생 연구지원 (MYDEX)', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    job_lecture: { name: '앵커 취업스쿨 — 기업 탐방 및 직무 특강', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    senior_mentoring: { name: '전공과 진로설계 — 선배가 들려주는 임상병리사의 첫걸음', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    career_counsel: { name: '취업지원센터 진로 상담', kind: 'campus', url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=research&mode=view&code=028' },
    grad_briefing: { name: '일반대학원 학·석사 연계과정 안내', kind: 'campus', url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34142' },
    grad_counsel: { name: '취업지원센터 진학 상담', kind: 'campus', url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=research&mode=view&code=028' },
    prof_counsel: { name: '지도교수 상담', kind: 'campus', url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=professor' },
    double_major: { name: '부·복수전공 신청', kind: 'campus', url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34133' },
    writing_clinic: { name: '기초 글쓰기 클리닉', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    mock_interview: { name: 'RISE 취업스쿨 — 모의면접 특강', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    study_lecture: { name: '학습전략특강', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    tutoring: { name: 'BDAD DLC 학습클럽', kind: 'campus', url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118' },
    language_course: { name: '교내 어학 강좌', kind: 'campus', url: '' },
    gmp_course: { name: 'GMP 교육 과정 (외부 기관)', kind: 'external', url: '' }
  },

  jobSites: [
    { name: '사람인',   template: 'https://www.saramin.co.kr/zf_user/search?searchword={q}' },
    { name: '잡코리아', template: 'https://www.jobkorea.co.kr/Search/?stext={q}' }
  ],

  visits: [
    {
      region: '일본 고베',
      period: '2026.06.28 ~ 07.02',
      places: ['Carna Biosciences', 'RIKEN BDR', 'FBRI 첨단의료진흥재단', '고베대학 BiCLET', '제20회 국제생명공학심포지엄(IBS2026) 참관']
    },
    {
      region: '국내 대전·오송',
      period: '2026.07.30 ~ 31',
      places: ['㈜펩트론 (오송 공장·대전 본사)', '㈜지투지바이오 (오송 본사)', '㈜인코스팜 (대전 본사)']
    }
  ],

  method: {
    heading: '조사 방법',
    body: [
      '해외 클러스터 현장 인터뷰에서 얻은 글로벌 인사이트를 바탕으로, 국내 기업 현직자 교차 질의를 통해 검증했습니다.',
      '이 사이트는 국내 취업 현실에 맞게 검증된 내용을 기준으로 작성되었습니다.'
    ],
    linkLabel: '일곱 곳에서 들은 이야기 보기'
  },

  footer: {
    limitHeading: '일러두기',
    limit: '본 로드맵은 대전·오송 지역 중소·중견 기업 현직자 인터뷰를 바탕으로 제작되었습니다. 대형 제약사나 다른 산업군의 특수성과는 다를 수 있으므로, 진로 탐색을 위한 실증 사례로 참고해 주시기 바랍니다.',
    batonHeading: '이어달리기',
    baton: '이 사이트는 2026년 <b>D-Bridge</b> 팀의 프로젝트 결과물입니다. 새로운 진로를 개척한 동문들의 데이터가 계속 누적되기를 기대합니다.',
    contactHeading: '문의',
    contact: [
      { label: '학과',     value: '동서대학교 임상병리학과' },
      { label: '학과 사무실', value: '051-320-2733' },
      { label: '홈페이지', value: '학과 홈페이지', url: 'https://uni.dongseo.ac.kr/bio/' },
      { label: '만든 팀',  value: 'D-Bridge (2026)' }
    ]
  }
};

/* ════════════════════════════════════════════════════════════════
   B. 도구 및 초기화
   ════════════════════════════════════════════════════════════════ */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const slot = (name, root = document) => root.querySelector(`[data-render="${name}"]`);
const tpl  = (name) => $(`#tpl-${name}`).content.firstElementChild.cloneNode(true);

function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function setRichText(node, str) {
  node.textContent = '';
  str.split(/(<b>.*?<\/b>)/g).forEach(part => {
    if (!part) return;
    const m = part.match(/^<b>(.*?)<\/b>$/);
    node.append(m ? make('b', null, m[1]) : document.createTextNode(part));
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════════════════════
   C. 렌더링 함수들
   ════════════════════════════════════════════════════════════════ */

function renderHero() {
  const h = DATA.hero;
  const q = slot('hero-question');
  h.question.split('\n').forEach(line => q.append(make('span', 'hero__line', line)));
  setRichText(slot('hero-answer'), h.answer);

  const stats = slot('hero-stats');
  h.stats.forEach(stat => {
    const wrap = make('div', 'hero__stat');
    const dd  = make('dd', 'hero__num');
    const val = make('span', 'hero__val', prefersReducedMotion ? stat.value : '0');
    val.dataset.target = stat.value;
    dd.append(val);
    wrap.append(dd, make('dt', 'hero__label', stat.label));
    stats.append(wrap);
  });

  slot('hero-byline').textContent = h.byline;
  slot('hero-team').textContent   = h.team;

  if (!prefersReducedMotion) {
    const nums = $$('.hero__val', stats);
    const t0 = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - t0) / 850);
      const eased = 1 - Math.pow(1 - p, 3);
      nums.forEach(n => n.textContent = Math.round(eased * Number(n.dataset.target)));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
}

function renderPaths() {
  const list = slot('paths');
  DATA.paths.forEach(path => {
    const li = tpl('path');
    li.dataset.path = path.id;
    $('.path__name', li).textContent = `${path.num} ${path.name}`;
    $('.path__degree', li).textContent = path.degree;
    $('.path__work', li).textContent = path.work;

    const courses = $('.path__majors', li);
    path.courses.forEach(c => courses.append(make('li', null, c)));

    $('.path__btn', li).addEventListener('click', () => openPathSheet(path));
    li.classList.add('reveal');
    list.append(li);
  });
}

function renderRoadmap() {
  const r = DATA.roadmap;
  slot('roadmap-notice').textContent = r.notice;

  const list = slot('timeline');
  r.stages.forEach(stage => {
    if (stage.branches) {
      const li = tpl('fork');
      li.dataset.stage = stage.id;
      const find = id => stage.branches.find(b => b.id === id);
      
      const cl = find('clinical');
      const ncl = find('nonclinical');
      
      const clNode = $('.branch--clinical', li);
      $('.branch__name', clNode).textContent = cl.name;
      $('.branch__summary', clNode).textContent = cl.summary;
      cl.items.forEach(t => $('.branch__items', clNode).append(make('li', null, t)));
      
      const nclNode = $('.branch--nonclinical', li);
      $('.branch__name', nclNode).textContent = ncl.name;
      $('.branch__summary', nclNode).textContent = ncl.summary;
      ncl.items.forEach(t => $('.branch__items', nclNode).append(make('li', null, t)));
      
      const entry = $('.entry', nclNode);
      ncl.entryOptions.forEach(opt => {
        const item = tpl('entry');
        $('.entry__label', item).textContent = opt.name;
        $('.entry__text',  item).textContent = opt.text;
        entry.append(item);
      });

      const fan = $('.fan', li);
      DATA.paths.forEach(path => {
        const btn = make('button', 'fan__item');
        btn.dataset.path = path.id;
        btn.setAttribute('aria-haspopup', 'dialog');
        btn.append(
          make('span', 'fan__num', path.num),
          make('span', 'fan__name', path.name),
          make('span', 'fan__degree', path.degree)
        );
        btn.addEventListener('click', () => openPathSheet(path));
        fan.append(btn);
      });
      li.classList.add('reveal');
      list.append(li);
    } else {
      const li = tpl('stage');
      li.dataset.stage = stage.id;
      $('.stage__grade', li).textContent = stage.grade;
      $('.stage__caption', li).textContent = stage.caption;
      stage.items.forEach(text => $('.stage__items', li).append(make('li', 'stage__item', text)));
      li.classList.add('reveal');
      list.append(li);
    }
  });

  const closing = slot('roadmap-closing');
  closing.append(
    make('p', 'roadmap__quote', r.closing.quote),
    make('p', 'roadmap__line',  r.closing.line)
  );
}

function renderVisits() {
  const list = slot('visits');
  DATA.visits.forEach(v => {
    const li = tpl('visit');
    $('.visit__region', li).textContent = v.region;
    $('.visit__period', li).textContent = v.period;
    v.places.forEach(p => $('.visit__places', li).append(make('li', null, p)));
    li.classList.add('reveal');
    list.append(li);
  });
  const m = slot('method');
  m.append(make('h3', null, DATA.method.heading));
  DATA.method.body.forEach(t => m.append(make('p', null, t)));
  slot('interview-link').textContent = DATA.method.linkLabel;
}

function renderFooter() {
  const f = DATA.footer;
  slot('limit-heading').textContent   = f.limitHeading;
  slot('limit-body').textContent      = f.limit;
  slot('baton-heading').textContent   = f.batonHeading;
  slot('contact-heading').textContent = f.contactHeading;
  setRichText(slot('baton'), f.baton);

  const dl = slot('contact-list');
  f.contact.forEach(row => {
    if (!row.value) return;
    const wrap = make('div', 'contact__row');
    const dd = make('dd');
    if (row.url) {
      const a = make('a', null, row.value);
      a.href = row.url; a.target = '_blank'; a.rel = 'noopener';
      dd.append(a);
    } else {
      dd.textContent = row.value;
    }
    wrap.append(make('dt', null, row.label), dd);
    dl.append(wrap);
  });
}

function setupReveal() {
  if (prefersReducedMotion) {
    $$('.reveal').forEach(n => n.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  $$('.reveal').forEach(n => io.observe(n));
}

/* ════════════════════════════════════════════════════════════════
   D. 체크리스트 기능
   ════════════════════════════════════════════════════════════════ */

const STORE_KEY = 'dbridge-check-v1';
let checkState = {};
let currentGrade = DATA.checklist.gradeTabs[0].id;

function loadState() {
  try { checkState = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } 
  catch { checkState = {}; }
}
function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(checkState)); } catch {}
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
    if (it.type === 'choice') {
      const v = checkState[it.id] || it.defaultValue;
      return it.emptyWhen.includes(v);
    }
    return !checkState[it.id];
  });
}

function renderChecklist() {
  loadState();
  const tabs = slot('grade-tabs');
  DATA.checklist.gradeTabs.forEach(g => {
    const b = make('button', 'grade-tab', g.label);
    b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.grade = g.id;
    b.addEventListener('click', () => { currentGrade = g.id; paintChecklist(); });
    tabs.append(b);
  });

  tabs.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const ids = DATA.checklist.gradeTabs.map(g => g.id);
    const i = ids.indexOf(currentGrade);
    currentGrade = ids[(i + (e.key === 'ArrowRight' ? 1 : ids.length - 1)) % ids.length];
    paintChecklist();
    $(`.grade-tab[data-grade="${currentGrade}"]`).focus();
  });

  $('#check-form').addEventListener('submit', e => e.preventDefault());
  $('[data-action="reset"]').addEventListener('click', () => { checkState = {}; saveState(); paintChecklist(); });
  $('[data-action="print"]').addEventListener('click', () => { buildExport(); window.print(); });
  $('[data-action="save-image"]').addEventListener('click', saveImage);

  paintChecklist();
}

function paintChecklist() {
  $$('.grade-tab').forEach(b => b.setAttribute('aria-selected', String(b.dataset.grade === currentGrade)));
  slot('legend-now').textContent = DATA.checklist.groupLabels.now;
  slot('legend-ongoing').textContent = DATA.checklist.groupLabels.ongoing;

  const items = visibleItems(currentGrade);
  ['now', 'ongoing'].forEach(group => {
    const ul = slot(`items-${group}`);
    ul.textContent = '';
    items.filter(it => it.group === group).forEach(it => {
      if (it.type === 'choice') {
        const li = tpl('choice');
        $('.check__text', li).textContent = it.text;
        const box = $('.choice__options', li);
        const cur = checkState[it.id] || it.defaultValue;
        it.options.forEach(opt => {
          const b = make('button', 'choice__btn', opt.label);
          b.type = 'button'; b.setAttribute('aria-pressed', String(cur === opt.value));
          b.addEventListener('click', () => { checkState[it.id] = opt.value; saveState(); paintChecklist(); });
          box.append(b);
        });
        ul.append(li);
      } else {
        const li = tpl('check');
        const input = $('.check__box', li);
        input.id = `chk-${it.id}`; input.checked = !!checkState[it.id];
        $('.check__text', li).textContent = it.text;
        input.addEventListener('change', () => { checkState[it.id] = input.checked; saveState(); paintResult(); });
        ul.append(li);
      }
    });
  });
  paintResult();
}

function paintResult() {
  const R = DATA.checklist.result;
  const empties = emptyItems(currentGrade);
  slot('result-heading').textContent = R.headingTemplate.replace('{n}', empties.length);

  const list = slot('result-list');
  list.textContent = '';
  empties.forEach(it => {
    const li = tpl('empty');
    $('.empty__text', li).textContent = it.emptyLabel || it.text;
    if (it.emptyNote) $('.empty__note', li).textContent = it.emptyNote;
    else $('.empty__note', li).remove();

    const progs = $('.empty__programs', li);
    (it.programs || []).forEach(pid => {
      const pr = DATA.programs[pid];
      if (!pr) return;
      const tag = pr.url ? make('a', 'chip') : make('span', 'chip');
      if (pr.url) { tag.href = pr.url; tag.target = '_blank'; tag.rel = 'noopener'; }
      if (pr.kind === 'external') tag.classList.add('chip--ext');
      tag.append(make('span', 'chip__name', pr.name));
      if (pr.when) tag.append(make('span', 'chip__when', pr.when));
      
      const liProg = make('li');
      liProg.append(tag);
      progs.append(liProg);
    });
    if (it.noProgram) {
      const pNote = make('p', 'empty__noprog', it.noProgram);
      li.insertBefore(pNote, progs.nextSibling);
    }

    const jobs = $('.empty__jobs', li);
    if (it.jobSearch) {
      const site = DATA.jobSites[0];
      const jobUrl = kw => site.template.replace('{q}', encodeURIComponent(kw));
      
      if (it.jobSearch.mode === 'byPath') {
        DATA.paths.forEach(p => {
          const liJob = make('li');
          const aJob = make('a', 'chip chip--job', `${p.num} ${p.name} 공고`);
          aJob.href = jobUrl(p.jobKeywords[0]);
          aJob.target = '_blank';
          liJob.append(aJob);
          jobs.append(liJob);
        });
      } else if (it.jobSearch.mode === 'keywords') {
        it.jobSearch.keywords.forEach(kw => {
          const liJob = make('li');
          const aJob = make('a', 'chip chip--job', `“${kw}” 공고`);
          aJob.href = jobUrl(kw);
          aJob.target = '_blank';
          liJob.append(aJob);
          jobs.append(liJob);
        });
      } else if (it.jobSearch.mode === 'company') {
        const liJob = make('li', 'job-search');
        const input = make('input', 'job-search__input'); input.type = 'text'; input.placeholder = '기업 이름';
        const go = make('button', 'chip chip--job', '공고 찾기'); go.type = 'button';
        const open = () => { if (input.value.trim()) window.open(jobUrl(input.value.trim()), '_blank', 'noopener'); };
        go.addEventListener('click', open);
        input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); open(); } });
        liJob.append(input, go); jobs.append(liJob);
      }
    }
    
    if (!jobs.children.length) jobs.remove();
    if (!progs.children.length) progs.remove();
    list.append(li);
  });

  const prevWrap = slot('result-preview');
  prevWrap.textContent = '';
  if (R.preview[currentGrade]) {
    prevWrap.hidden = false;
    prevWrap.append(make('p', 'result__preview-caption', R.preview[currentGrade].caption));
    const ul = make('ul');
    R.preview[currentGrade].items.forEach(id => {
      const it = DATA.checklist.items.find(x => x.id === id);
      if (it) ul.append(make('li', null, it.text));
    });
    prevWrap.append(ul);
  } else prevWrap.hidden = true;

  const done = slot('result-done');
  done.textContent = '';
  if (empties.length === 0) {
    done.hidden = false;
    done.append(make('p', null, R.allDone.line));
    const a = make('a', 'btn', R.allDone.button);
    a.href = `#${R.allDone.target}`;
    done.append(a);
  } else done.hidden = true;
}

function buildExport() {
  const box = $('#export-sheet'); box.textContent = '';
  box.append(make('p', 'export__eyebrow', `${DATA.checklist.gradeTabs.find(g => g.id === currentGrade).label} · 임상병리사의 바이오 진출 로드맵`));
  box.append(make('h2', 'export__title', slot('result-heading').textContent));
  const ul = make('ul', 'export__list');
  emptyItems(currentGrade).forEach(it => {
    const li = make('li', 'export__item');
    li.append(make('h3', null, it.emptyLabel || it.text));
    if (it.emptyNote) li.append(make('p', 'export__note', it.emptyNote));
    const names = (it.programs || []).map(pid => DATA.programs[pid]).filter(Boolean).map(pr => pr.when ? `${pr.name} (${pr.when})` : pr.name);
    if (it.noProgram) names.push(it.noProgram);
    if (names.length) li.append(make('p', 'export__progs', names.join('  ·  ')));
    ul.append(li);
  });
  box.append(ul);
  box.append(make('p', 'export__foot', 'D-Bridge · 동서대학교 임상병리학과'));
  return box;
}

function saveImage() {
  const box = buildExport();
  const done = (canvas) => {
    const a = document.createElement('a');
    a.download = `${DATA.checklist.result.export.filename}-${currentGrade}.png`;
    a.href = canvas.toDataURL('image/png'); a.click();
  };
  if (window.html2canvas) { html2canvas(box, { scale: 2, backgroundColor: '#ffffff' }).then(done); return; }
  const sc = document.createElement('script');
  sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
  sc.onload = () => html2canvas(box, { scale: 2, backgroundColor: '#ffffff' }).then(done);
  sc.onerror = () => window.print();
  document.head.append(sc);
}

/* ════════════════════════════════════════════════════════════════
   E. 바텀시트 기능 및 비교과 모아보기 팝업 (새로 추가됨)
   ════════════════════════════════════════════════════════════════ */

function openSheet({ eyebrow, title, build }) {
  const dlg  = $('#sheet');
  const body = slot('sheet-body');
  slot('sheet-eyebrow').textContent = eyebrow || '';
  slot('sheet-title').textContent   = title || '';
  body.textContent = '';
  if (build) build(body);
  document.documentElement.classList.add('is-locked');
  dlg.showModal();
  body.focus();
}

function closeSheet() {
  $('#sheet').close();
  document.documentElement.classList.remove('is-locked');
}

function labelledList(label, items) {
  const wrap = make('div', 'src__group');
  wrap.append(make('p', 'src__group-label', label));
  const ul = make('ul');
  items.forEach(t => ul.append(make('li', null, t)));
  wrap.append(ul);
  return wrap;
}

function openPathSheet(path) {
  openSheet({
    eyebrow: path.degree,
    title: `${path.num} ${path.name}`,
    build(body) {
      const basics = make('section', 'src src--basics');
      const wWrap = make('div', 'src__group'); wWrap.append(make('p', 'src__group-label', DATA.sheetLabels.work));
      const wUl = make('ul'); wUl.append(make('li', null, path.work)); wWrap.append(wUl);
      
      const cWrap = make('div', 'src__group'); cWrap.append(make('p', 'src__group-label', DATA.sheetLabels.courses));
      const cUl = make('ul'); path.courses.forEach(c => cUl.append(make('li', null, c))); cWrap.append(cUl);
      
      basics.append(wWrap, cWrap);
      body.append(basics);

      (path.sections || []).forEach(sec => {
        const node = tpl('sheet-section');
        $('.src__badge', node).textContent = DATA.originLabels[sec.origin];
        $('.src__title', node).remove();
        sec.body.forEach(t => $('.src__body', node).append(make('p', null, t)));
        (sec.groups || []).forEach(grp => {
          const gWrap = make('div', 'src__group'); gWrap.append(make('p', 'src__group-label', grp.label));
          const gUl = make('ul'); grp.items.forEach(i => gUl.append(make('li', null, i))); gWrap.append(gUl);
          $('.src__groups', node).append(gWrap);
        });
        body.append(node);
      });
    }
  });
}

// [새로 추가] 비교과 프로그램 모아보기 팝업 띄우기
function initProgramBtn() {
  const btn = $('#btn-show-programs');
  if (!btn) return;
  btn.addEventListener('click', () => {
    openSheet({
      eyebrow: 'D-Bridge 추천',
      title: '교내외 비교과 프로그램 모음',
      build(body) {
        const ul = make('ul', 'prog-popup-list');
        ul.style.display = 'grid';
        ul.style.gap = '1rem';
        ul.style.marginTop = '1rem';

        Object.values(DATA.programs).forEach(pr => {
          const li = make('li', 'prog-popup-item');
          li.style.padding = '1rem';
          li.style.border = '1px solid var(--rule)';
          li.style.borderRadius = 'var(--radius)';
          li.style.background = 'var(--paper)';

          const head = make('div', null);
          head.style.display = 'flex';
          head.style.alignItems = 'center';
          head.style.gap = '0.5rem';
          head.style.marginBottom = '0.5rem';

          const kind = make('span', null, pr.kind === 'campus' ? '교내' : '외부');
          kind.style.fontSize = '0.75rem';
          kind.style.fontWeight = '700';
          kind.style.padding = '0.2rem 0.5rem';
          kind.style.borderRadius = '999px';
          kind.style.background = pr.kind === 'campus' ? 'var(--accent-soft)' : 'transparent';
          kind.style.border = pr.kind === 'campus' ? 'none' : '1px dashed var(--rule-2)';
          kind.style.color = pr.kind === 'campus' ? 'var(--accent)' : 'var(--ink-2)';

          const name = make('strong', null, pr.name);
          name.style.fontSize = '0.9375rem';
          name.style.color = 'var(--ink)';

          head.append(kind, name);

          const when = make('p', null, pr.when || '상시 운영');
          when.style.fontSize = '0.8125rem';
          when.style.color = 'var(--ink-2)';
          when.style.marginBottom = pr.url ? '0.75rem' : '0';

          li.append(head, when);

          if (pr.url) {
            const a = make('a', 'btn btn--quiet', '바로가기 ↗');
            a.href = pr.url;
            a.target = '_blank';
            a.rel = 'noopener';
            a.style.display = 'inline-block';
            a.style.fontSize = '0.8125rem';
            a.style.padding = '0.4rem 0.75rem';
            li.append(a);
          }
          ul.append(li);
        });
        body.append(ul);
      }
    });
  });
}

function init() {
  renderHero();
  renderPaths();
  renderRoadmap();
  renderChecklist();
  renderVisits();
  renderFooter();
  setupReveal();
  initProgramBtn(); // 팝업 버튼 연결

  $('[data-action="close-sheet"]').addEventListener('click', closeSheet);
  $('#sheet').addEventListener('close', () => document.documentElement.classList.remove('is-locked'));
}

document.addEventListener('DOMContentLoaded', init);
