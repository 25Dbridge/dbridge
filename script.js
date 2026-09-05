/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 임상병리학과 진로 안내
   script.js

   ┌─ A. 콘텐츠 데이터 ──────────────────────────────────────┐
   │  내용을 바꾸려면 여기만 고칩니다.                        │
   │  따옴표 ' ' 안의 글자만 바꾸세요.                        │
   │  id 값(예: 'B1', 'analysis')은 바꾸지 마세요.            │
   └────────────────────────────────────────────────────────┘
   B. 도구            C. 화면 그리기
   D. 체크리스트       E. 분기 그리기        F. 바텀시트
   ═══════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════════
   A. 콘텐츠 데이터
   ════════════════════════════════════════════════════════════════ */

const DATA = {

  /* ─── 1. 첫 화면 ─────────────────────────────────────────── */
  hero: {
    question: '임상병리사는\n병원으로만\n취업해야 하는가',
    // \n 은 줄바꿈입니다. 큰 글자가 어디서 끊길지 정합니다.

    answer: '<b>아니다.</b> 다만 어느 방향으로 갈지에 따라 지금 준비할 것이 달라진다.',

    stats: [
      { value: 7,  label: '방문 기관'   },
      { value: 10, label: '만난 현직자' },
      { value: 3,  label: '정리한 경로' }
    ],

    byline: '임상병리학과 2학년 5명이 일본 고베 4개 기관과 국내 3개 기업을 직접 찾아가 현직자 10명을 만났습니다',
    team: 'D-Bridge · 동서대학교 임상병리학과 · 2026년 여름'
  },


  /* ─── 2. 로드맵 ──────────────────────────────────────────── */
  roadmap: {
    notice: '3학년까지의 로드맵은 임상과 비임상 모두 비슷합니다.',

    stages: [
      {
        id: 'g12',
        grade: '1·2학년',
        caption: '지금',
        items: [
          '학부 실험실에 들어간다.',
          '가설 수립부터 리뷰까지 한 사이클을 끝까지 경험한다.',
          '전공 과목 학점을 관리한다. 채용 서류에 성적증명서가 포함된다.',
          '영어를 시작한다. 3개 기업 중 2곳이 기본 요건으로 언급하였다.'
        ]
      },
      {
        id: 'g3',
        grade: '3학년',
        caption: '방향 결정',
        items: [
          '세 경로 중 목표를 정한다.',
          '목표에 따라 대학원 진학 여부를 판단한다. 분석·효능평가는 석사 이상, 생산·품질은 학사로 진입 가능하다.',
          '현장실습에 참여한다. 용어와 회의 내용에서 벽을 느낀다는 지적이 있었으므로 사전 학습이 필요하다.',
          '생산·품질 직군을 목표로 한다면 협회 및 교육기관의 GMP 과정 이수를 검토한다. 법적 필수 자격은 아니나 지원 서류와 면접에서 직무 이해도를 보여주는 지표로 통용된다.',
          '복수전공 또는 융합 과목으로 전공의 폭을 넓힌다.'
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
            items: ['국가시험 준비와 병원 취업 준비'],
            opensPaths: false
          },
          {
            id: 'nonclinical',
            name: '비임상',
            summary: '기업의 연구 · 생산 · 규제 직무',
            items: [
              '말과 글로 설명하는 훈련을 한다. 면접과 실무에서 직접 평가된다.',
              '지원 기업의 기술이 실현 가능하고 대량 생산이 가능한지 확인한다.'
            ],
            entryOptions: [
              {
                id: 'A',
                name: '먼저 입사',
                text: '연구 보조로 입사해 흐름을 익히고 경력을 쌓은 뒤 대학원에 진학한다.'
              },
              {
                id: 'B',
                name: '먼저 진학',
                text: '졸업 직후 대학원에 진학해 논문 성과를 갖고 기업에 지원한다.'
              }
            ],
            opensPaths: true
          }
        ]
      },
      {
        id: 'after',
        grade: '졸업 후',
        caption: '진입',
        items: [
          '소규모 기업은 신약 개발 전 과정을 경험할 수 있고 맡는 일의 범위가 유동적이다.',
          '대기업은 담당 영역이 명확한 대신 범위가 한정적이다.',
          'AI가 대체하지 않는 영역인 실험 설계, 평가, 판단에 역량을 집중한다.'
        ]
      }
    ],

    closing: {
      quote: '"임상병리사는 병원으로만 취업해야 하는가." 아니다.',
      line:  '다만 어느 방향으로 갈지에 따라 지금 준비할 것이 달라진다.'
    }
  },


  /* ─── 3. 세 갈래 직무 경로 ───────────────────────────────── */
  paths: [
    {
      id: 'analysis',
      num: '①',
      name: '분석 · 효능평가',
      degree: '석사 이상',
      work: 'ex vivo 효능평가, 기기분석, 동물실험',
      majors: ['조직학', '세포생물학', '기기분석'],
      jobKeywords: ['효능평가', '비임상', '전임상'],
      sections: [
        {
          origin: 'field',
          title: '하는 일과 준비',
          body: [
            'ex vivo 효능평가, 기기분석, 동물실험을 담당합니다.',
            '조직학·세포생물학·기기분석 과목이 직접 연결됩니다.',
            '석사 이상이 요구되는 경우가 많습니다.'
          ]
        }
      ]
    },
    {
      id: 'quality',
      num: '②',
      name: '생산 · 품질 (QC·QA)',
      degree: '학사 · 전문학사',
      work: 'GMP 환경의 품질관리, 품질보증, 생산',
      majors: ['임상화학', '기기분석', '무균 조작'],
      jobKeywords: ['QC', '품질관리 제약', 'GMP'],
      sections: [
        {
          origin: 'field',
          title: '하는 일과 준비',
          body: [
            'GMP 환경에서 품질관리, 품질보증, 생산을 담당합니다.',
            '임상화학·기기분석·무균 조작이 직접 연결됩니다.',
            '학사·전문학사로 진입할 수 있는 경로입니다.'
          ]
        }
      ]
    },
    {
      id: 'ra',
      num: '③',
      name: '규제 · 임상 · 사업개발',
      degree: '학사 이상',
      work: '인허가 문서(RA), 임상 운영, 기술이전 · 라이선싱',
      majors: ['병리학', '면역학', '문서 · 언어 능력'],
      jobKeywords: ['RA 인허가', '임상시험 CRA'],

      caveat: '세 경로 중 저희가 현장에서 확인한 내용이 가장 적은 경로입니다. 아래에 확인한 것과 공개 자료로 보완한 것을 나누어 적었습니다.',

      sections: [
        {
          origin: 'field',
          title: '저희가 확인한 것',
          body: [
            '임상병리 전공자가 임상팀, RA(인허가), 라이선싱 직무로 진출한 사례가 있습니다.',
            'RA는 식약처 품목허가와 가이드라인에 맞춰 문서를 준비하므로 의학 지식이 직접 활용됩니다.',
            '다만 임상병리 전공의 1차 목표는 병원 쪽이 적합하다는 것이 담당자의 판단이었습니다.'
          ]
        },
        {
          origin: 'public',
          title: '공개 자료로 보완한 것',
          body: [
            'RA는 약사만 지원할 수 있는 업무로 알려져 있으나 실제로는 그렇지 않으며, 비약사 신입 채용 사례가 있습니다. 다만 상위권 제약사는 약사 면허 소지자를 선호하는 편이라, 규모가 작은 기업에서 경력을 쌓고 이직하는 경로가 현실적이라는 조언이 많습니다.'
          ],
          groups: [
            {
              label: '하는 일',
              items: [
                '국내외 임상시험계획 승인과 품목 허가를 위한 허가자료 작성·검토 및 규제기관 제출',
                '허가 유지·변경 관리',
                'GMP·GCP 실사 지원',
                '표시자재 관리'
              ]
            },
            {
              label: '요구 역량',
              items: [
                '허가 규정과 가이드라인 이해',
                '허가문서 검토의 꼼꼼함',
                '규제기관 대상의 논리적 커뮤니케이션',
                '유관부서 협업',
                '외국어'
              ]
            },
            {
              label: '준비',
              items: [
                '별도 자격증은 없습니다.',
                '문서 작업이 많아 워드·엑셀 활용 능력이 중요하며 컴퓨터활용능력 2급 정도가 도움이 됩니다.',
                '직무 교육으로 의약품 규제업무 전문가 양성과정, 한국제약바이오협회 RA 기본교육(온라인) 등이 있습니다.'
              ]
            }
          ]
        }
      ]
    }
  ],

  originLabels: {
    field:  '저희가 확인한 것',
    public: '공개 자료로 보완한 것'
  },


  /* ─── 4. 체크리스트 ──────────────────────────────────────── */
  checklist: {
    gradeTabs: [
      { id: 'g12', label: '1·2학년' },
      { id: 'g3',  label: '3학년'  },
      { id: 'g4',  label: '4학년'  }
    ],

    groupLabels: {
      now:     '지금 할 것',
      ongoing: '계속 유효한 것'
    },

    items: [
      /* ── 1·2학년 ── */
      {
        id: 'A1', grades: ['g12'], group: 'now', type: 'check',
        text: '학부 실험실에 들어가 있거나, 들어가는 방법을 알아본 적이 있다.',
        emptyNote: '',
        programs: ['undergrad_researcher', 'lab_intern']
      },
      {
        id: 'A2', grades: ['g12'], group: 'now', type: 'check',
        text: '가설을 세우고 실험하고 결과를 정리해 리뷰까지 받는 한 사이클을 끝까지 해봤다.',
        emptyNote: '실험을 해본 것과 한 사이클을 끝내본 것은 다릅니다.',
        programs: ['capstone', 'academic_fest', 'ugrad_research_fund']
      },

      /* ── 3학년 ── */
      {
        id: 'B1', grades: ['g3'], group: 'now', type: 'check',
        text: '세 경로 중 지금 목표로 두는 경로가 하나 있다.',
        emptyNote: '공고의 자격 요건을 보면 그 경로가 학사를 뽑는지 석사를 뽑는지 바로 보입니다.',
        programs: ['career_counsel', 'job_lecture', 'senior_mentoring'],
        jobSearch: { mode: 'byPath' },
        linkToSection: 'paths'
      },
      {
        id: 'B2', grades: ['g3'], group: 'now', type: 'check',
        text: '그 경로에 대학원이 필요한지 확인했고, 진학 여부를 판단했다.',
        emptyNote: '분석·효능평가는 석사 이상, 생산·품질은 학사로 진입 가능합니다.',
        programs: ['grad_briefing', 'lab_tour', 'prof_counsel']
      },
      {
        id: 'B3', grades: ['g3'], group: 'now', type: 'check',
        text: '현장실습에 참여했거나, 신청 일정을 확인했다.',
        emptyNote: '용어와 회의 내용에서 벽을 느꼈다는 지적이 있었습니다. 신청만큼 사전 학습이 중요합니다.',
        programs: ['field_training', 'internship']
      },
      {
        id: 'B4', grades: ['g3'], group: 'now', type: 'check',
        text: '목표 경로에서 요구하는 직무 교육이 무엇인지 찾아본 적이 있다.',
        emptyNote: '생산·품질을 목표로 한다면 GMP 과정입니다. 법적 필수 자격은 아니지만 서류와 면접에서 직무 이해도 지표로 통용됩니다.',
        programs: ['job_training_support', 'gmp_course']
      },
      {
        id: 'B5', grades: ['g3'], group: 'now', type: 'check',
        text: '복수전공·부전공·융합 과목으로 전공 폭을 넓히는 방법을 알아보았다.',
        emptyNote: '',
        programs: ['double_major', 'micro_degree']
      },

      /* ── 4학년 ── */
      {
        id: 'D1', grades: ['g4'], group: 'now', type: 'choice',
        text: '임상과 비임상 중 어느 쪽으로 지원할지 정했습니다.',
        options: [
          { value: 'clinical',    label: '임상'   },
          { value: 'nonclinical', label: '비임상' },
          { value: 'undecided',   label: '아직'   }
        ],
        defaultValue: 'undecided',
        emptyWhen: ['undecided'],
        emptyLabel: '방향 결정',
        emptyNote: '어느 쪽을 고르느냐에 따라 남은 준비가 달라집니다.',
        programs: ['career_counsel', 'recruit_briefing']
      },
      {
        id: 'D2', grades: ['g4'], group: 'now', type: 'check',
        showIf: { item: 'D1', valueIn: ['nonclinical'] },
        text: '취업 후 진학(먼저 입사)과 졸업 직후 진학(먼저 진학) 중 어느 쪽인지 정했다.',
        emptyNote: '',
        programs: ['grad_counsel'],
        jobSearch: { mode: 'keywords', keywords: ['연구보조', '실험실 인턴'] }
      },
      {
        id: 'D3', grades: ['g4'], group: 'now', type: 'check',
        text: '내 경험을 말과 글로 설명해본 적이 있다. 발표, 자기소개서, 모의면접 중 하나라도.',
        emptyNote: '면접과 실무에서 직접 평가됩니다.',
        programs: ['writing_clinic', 'resume_review', 'mock_interview']
      },
      {
        id: 'D4', grades: ['g4'], group: 'now', type: 'check',
        text: '지원하려는 기업의 기술이 어떤 것이고, 대량 생산까지 갈 수 있는지 찾아본 적이 있다.',
        emptyNote: '기업 이름으로 검색해 채용공고와 파이프라인을 함께 봅니다.',
        programs: [],
        jobSearch: { mode: 'company' }
      },

      /* ── 계속 유효한 것 ── */
      {
        id: 'C1', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '이번 학기 전공 과목 성적을 확인했고, 목표 학점을 정해두었다.',
        emptyNote: '채용 서류에 성적증명서가 포함됩니다.',
        programs: ['study_lecture', 'tutoring']
      },
      {
        id: 'C2', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '영어를 지금 하고 있다. 점수 준비든 회화든 진행 중인 것이 있다.',
        emptyNote: '방문한 3개 기업 중 2곳이 기본 요건으로 언급했습니다.',
        programs: ['language_course', 'test_support', 'english_study']
      }
    ],

    result: {
      headingTemplate: '지금 해볼 수 있는 것 {n}개',

      preview: {
        g12: {
          items: ['B1', 'B2', 'B3', 'B4', 'B5'],
          caption: '1년 뒤엔 이런 걸 물어봅니다'
        }
      },

      allDone: {
        line: '준비는 되어 있습니다. 이제 어디로 갈지 봅니다.',
        button: '세 경로 보기',
        target: 'paths'
      },

      export: { filename: 'dbridge-checklist' }
    }
  },


  /* ─── 5. 교내 프로그램 ← 실제 목록으로 교체할 곳 ─────────── */
  programs: {
    undergrad_researcher: { name: '학부연구생',              url: '' },
    lab_intern:           { name: '연구실 인턴',             url: '' },
    capstone:             { name: '캡스톤디자인',            url: '' },
    academic_fest:        { name: '학과 학술제',             url: '' },
    ugrad_research_fund:  { name: '학부생 연구지원',         url: '' },
    career_counsel:       { name: '진로 상담',               url: '' },
    job_lecture:          { name: '직무 특강',               url: '' },
    senior_mentoring:     { name: '선배 멘토링',             url: '' },
    grad_briefing:        { name: '대학원 진학 설명회',      url: '' },
    lab_tour:             { name: '연구실 탐방',             url: '' },
    prof_counsel:         { name: '지도교수 상담',           url: '' },
    field_training:       { name: '현장실습',                url: '' },
    internship:           { name: '인턴십',                  url: '' },
    job_training_support: { name: '직무교육·자격증 지원',    url: '' },
    gmp_course:           { name: 'GMP 교육 과정',           url: '' },
    double_major:         { name: '복수전공·부전공',         url: '' },
    micro_degree:         { name: '융합전공·마이크로디그리', url: '' },
    grad_counsel:         { name: '진학 상담',               url: '' },
    writing_clinic:       { name: '발표·글쓰기 클리닉',      url: '' },
    resume_review:        { name: '자기소개서 첨삭',         url: '' },
    mock_interview:       { name: '모의면접',                url: '' },
    recruit_briefing:     { name: '채용 설명회',             url: '' },
    study_lecture:        { name: '학습법 특강',             url: '' },
    tutoring:             { name: '튜터링·학습공동체',       url: '' },
    language_course:      { name: '교내 어학 강좌',          url: '' },
    test_support:         { name: '어학시험 응시 지원',      url: '' },
    english_study:        { name: '영어 스터디',             url: '' }
  },


  /* ─── 6. 채용공고 검색 ───────────────────────────────────── */
  jobSites: [
    { name: '사람인',   template: 'https://www.saramin.co.kr/zf_user/search?searchword={q}' },
    { name: '잡코리아', template: 'https://www.jobkorea.co.kr/Search/?stext={q}' }
  ],


  /* ─── 7. 다녀온 곳 ───────────────────────────────────────── */
  visits: [
    {
      region: '일본 고베',
      period: '2026.06.28 ~ 07.02',
      places: [
        'Carna Biosciences',
        'RIKEN BDR',
        'FBRI 첨단의료진흥재단',
        '고베대학 BiCLET',
        '제20회 국제생명공학심포지엄(IBS2026) 참관'
      ]
    },
    {
      region: '국내 대전·오송',
      period: '2026.07.30 ~ 31',
      places: [
        '㈜펩트론 (오송 공장·대전 본사)',
        '㈜지투지바이오 (오송 본사)',
        '㈜인코스팜 (대전 본사)'
      ]
    }
  ],

  method: {
    heading: '조사 방법',
    body: [
      '기관 방문과 현직자 인터뷰로 조사했습니다. 인터뷰 전문은 공개하지 않습니다.',
      '일본에서 들은 내용을 국내에서 다시 확인했고, 이 사이트는 국내 기준으로 작성했습니다.'
    ]
  },


  /* ─── 8. 하단 ────────────────────────────────────────────── */
  footer: {
    limitHeading: '조사 한계',
    limit: '국내 인터뷰는 현직자 4인, 기업당 1인입니다. 방문한 세 곳은 모두 펩타이드 분야의 중소 규모 기업이며 대전·오송 지역에 집중되어 있습니다. 대형 제약사나 CDMO 전문 기업, 다른 지역의 사례는 포함되지 않았습니다. 일반화보다는 사례를 찾아본 성격에 가깝습니다.',

    baton: '이 사이트는 2026년 <b>D-Bridge</b>가 만들었습니다. 여기 없는 경로를 찾은 후배가 있다면 이어서 채워 주세요.',

    contactHeading: '문의',
    contact: [
      { label: '학과',    value: '동서대학교 임상병리학과' },
      { label: '메일',    value: '' },
      { label: '만든 팀', value: 'D-Bridge (2026)' }
    ]
  }

};


/* ════════════════════════════════════════════════════════════════
   여기서부터는 화면을 그리는 코드입니다.
   내용만 바꾸실 거라면 아래는 건드리지 않으셔도 됩니다.
   ════════════════════════════════════════════════════════════════ */


/* ─── B. 도구 ────────────────────────────────────────────────── */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** data-render="이름" 인 자리를 찾는다 */
const slot = (name, root = document) => root.querySelector(`[data-render="${name}"]`);

/** <template id="tpl-이름"> 을 복제한다 */
const tpl = (name) => $(`#tpl-${name}`).content.firstElementChild.cloneNode(true);

/** 요소를 만든다. text 는 항상 textContent 로 넣어 안전하게 처리한다. */
function make(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

/** 문장 안의 <b> 만 허용하고 나머지는 글자로 처리한다 */
function setRichText(node, str) {
  node.textContent = '';
  str.split(/(<b>.*?<\/b>)/g).forEach(part => {
    if (!part) return;
    const m = part.match(/^<b>(.*?)<\/b>$/);
    node.append(m ? make('b', null, m[1]) : document.createTextNode(part));
  });
}

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 채용공고 검색 링크를 만든다 */
function jobLinks(keyword) {
  return DATA.jobSites.map(site => {
    const a = make('a', 'chip chip--job', `${site.name}에서 “${keyword}”`);
    a.href = site.template.replace('{q}', encodeURIComponent(keyword));
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  });
}


/* ─── C. 화면 그리기 ─────────────────────────────────────────── */

/* C-1. 첫 화면 ------------------------------------------------- */
function renderHero() {
  const h = DATA.hero;

  const q = slot('hero-question');
  h.question.split('\n').forEach(line => {
    q.append(make('span', 'hero__line', line));
  });

  const answer = slot('hero-answer');
  if (answer) setRichText(answer, h.answer);

  const stats = slot('hero-stats');
  h.stats.forEach(stat => {
    const wrap = make('div', 'hero__stat');
    const dd = make('dd', 'hero__num', prefersReducedMotion ? stat.value : '0');
    const dt = make('dt', 'hero__label', stat.label);
    dd.dataset.target = stat.value;
    wrap.append(dd, dt);
    stats.append(wrap);
  });

  slot('hero-byline').textContent = h.byline;
  slot('hero-team').textContent   = h.team;

  if (!prefersReducedMotion) countUp(stats);
}

/** 숫자 카운트업 — 한 번만, 짧게 */
function countUp(root) {
  const nums = $$('.hero__num', root);
  const t0 = performance.now();
  const DUR = 850;

  function frame(now) {
    const p = Math.min(1, (now - t0) / DUR);
    const eased = 1 - Math.pow(1 - p, 3);   // ease-out
    nums.forEach(n => {
      n.textContent = Math.round(eased * Number(n.dataset.target));
    });
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}


/* C-2. 로드맵 -------------------------------------------------- */
function renderRoadmap() {
  const r = DATA.roadmap;

  slot('roadmap-notice').textContent = r.notice;

  const list = slot('timeline');
  r.stages.forEach(stage => {
    list.append(stage.branches ? buildFork(stage) : buildStage(stage));
  });

  const closing = slot('roadmap-closing');
  closing.append(
    make('p', 'roadmap__quote', r.closing.quote),
    make('p', 'roadmap__line',  r.closing.line)
  );
}

/** 평범한 단계 — 항목은 한 줄 요약, 누르면 바텀시트 */
function buildStage(stage) {
  const li = tpl('stage');
  li.dataset.stage = stage.id;
  $('.stage__grade',   li).textContent = stage.grade;
  $('.stage__caption', li).textContent = stage.caption;

  const ul = $('.stage__items', li);
  stage.items.forEach(text => {
    const item = tpl('stage-item');
    const btn  = $('.stage__item-btn', item);
    $('.stage__item-text', item).textContent = text;
    btn.addEventListener('click', () => {
      openSheet({ eyebrow: `${stage.grade} · ${stage.caption}`, title: stage.grade, text });
    });
    ul.append(item);
  });

  li.classList.add('reveal');
  return li;
}

/** 4학년 — 임상 / 비임상으로 갈라지고, 비임상 아래에서 다시 세 갈래 */
function buildFork(stage) {
  const li = tpl('fork');
  li.dataset.stage = stage.id;

  const find = id => stage.branches.find(b => b.id === id);

  fillBranch($('.branch--clinical', li),    find('clinical'));
  fillBranch($('.branch--nonclinical', li), find('nonclinical'));

  // 세 갈래 — 누르면 해당 경로의 바텀시트
  const fan = $('.fan', li);
  DATA.paths.forEach(path => {
    const btn = make('button', 'fan__item');
    btn.type = 'button';
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
  return li;
}

function fillBranch(node, data) {
  $('.branch__name', node).textContent    = data.name;
  $('.branch__summary', node).textContent = data.summary;

  const ul = $('.branch__items', node);
  data.items.forEach(t => ul.append(make('li', null, t)));

  const entry = $('.entry', node);
  if (!entry) return;

  if (!data.entryOptions) { entry.remove(); return; }

  // 라벨만으로 오해할 수 있으므로 원문 문장을 그대로 아래 붙인다
  data.entryOptions.forEach(opt => {
    const item = tpl('entry');
    $('.entry__label', item).textContent = opt.name;
    $('.entry__text',  item).textContent = opt.text;
    entry.append(item);
  });
}


/* C-3. 세 경로 ------------------------------------------------- */
function renderPaths() {
  const list = slot('paths');
  DATA.paths.forEach(path => {
    const li = tpl('path');
    li.dataset.path = path.id;
    $('.path__name',   li).textContent = `${path.num} ${path.name}`;
    $('.path__degree', li).textContent = path.degree;
    $('.path__work',   li).textContent = path.work;

    const majors = $('.path__majors', li);
    path.majors.forEach(m => majors.append(make('li', null, m)));

    $('.path__btn', li).addEventListener('click', () => openPathSheet(path));
    li.classList.add('reveal');
    list.append(li);
  });
}


/* C-4. 다녀온 곳 ----------------------------------------------- */
function renderVisits() {
  const list = slot('visits');
  DATA.visits.forEach(v => {
    const li = tpl('visit');
    $('.visit__region', li).textContent = v.region;
    $('.visit__period', li).textContent = v.period;
    const ul = $('.visit__places', li);
    v.places.forEach(p => ul.append(make('li', null, p)));
    li.classList.add('reveal');
    list.append(li);
  });

  const m = slot('method');
  m.append(make('h3', null, DATA.method.heading));
  DATA.method.body.forEach(t => m.append(make('p', null, t)));
}


/* C-5. 하단 ---------------------------------------------------- */
function renderFooter() {
  const f = DATA.footer;

  slot('limit-heading').textContent   = f.limitHeading;
  slot('limit-body').textContent      = f.limit;
  slot('contact-heading').textContent = f.contactHeading;

  setRichText(slot('baton'), f.baton);

  const dl = slot('contact-list');
  f.contact.forEach(row => {
    if (!row.value) return;              // 비어 있으면 줄 자체를 안 그린다
    const wrap = make('div', 'contact__row');
    wrap.append(make('dt', null, row.label), make('dd', null, row.value));
    dl.append(wrap);
  });
}


/* C-6. 스크롤 진입 — 페이드 정도로 절제 ------------------------ */
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


/* ─── D. 체크리스트 ─────────────────────────────── (2단계에서) */
/* ─── E. 분기 그리기 ────────────────────────────── (3단계에서) */
/* ─── F. 바텀시트 ───────────────────────────────── (4단계에서) */

/* 4단계 전까지 쓰는 임시 바텀시트.
   ESC·배경 클릭은 dialog 기본 동작으로 이미 동작합니다.
   스와이프 닫기와 스크롤 잠금은 4단계에서 붙입니다. */
function openSheet({ eyebrow, title, text, build }) {
  const dlg  = $('#sheet');
  const body = slot('sheet-body');

  slot('sheet-eyebrow').textContent = eyebrow || '';
  slot('sheet-title').textContent   = title || '';
  body.textContent = '';

  if (build) build(body);
  else if (text) body.append(make('p', null, text));

  document.documentElement.classList.add('is-locked');
  dlg.showModal();
  body.focus();
}

function closeSheet() {
  $('#sheet').close();
  document.documentElement.classList.remove('is-locked');
}

/** 경로 카드 — 출처(확인한 것 / 공개 자료)를 배지로 갈라 보여준다 */
function openPathSheet(path) {
  openSheet({
    eyebrow: path.degree,
    title: `${path.num} ${path.name}`,
    build(body) {
      if (path.caveat) body.append(make('p', 'sheet__caveat', path.caveat));

      path.sections.forEach(sec => {
        const node = tpl('sheet-section');
        node.dataset.origin = sec.origin;
        $('.src__badge', node).textContent = DATA.originLabels[sec.origin];
        $('.src__title', node).textContent = sec.title || '';

        const b = $('.src__body', node);
        sec.body.forEach(t => b.append(make('p', null, t)));

        const g = $('.src__groups', node);
        (sec.groups || []).forEach(grp => {
          const wrap = make('div', 'src__group');
          wrap.append(make('p', 'src__group-label', grp.label));
          const ul = make('ul');
          grp.items.forEach(t => ul.append(make('li', null, t)));
          wrap.append(ul);
          g.append(wrap);
        });

        body.append(node);
      });
    }
  });
}


/* ─── 시작 ──────────────────────────────────────────────────── */
function init() {
  renderHero();
  renderRoadmap();
  renderPaths();
  renderVisits();
  renderFooter();
  setupReveal();

  $('[data-action="close-sheet"]').addEventListener('click', closeSheet);
  $('#sheet').addEventListener('close', () => {
    document.documentElement.classList.remove('is-locked');
  });
}

document.addEventListener('DOMContentLoaded', init);
