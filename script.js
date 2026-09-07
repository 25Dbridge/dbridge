/* ═══════════════════════════════════════════════════════════════
   D-Bridge — 임상병리사의 바이오 진출 로드맵
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
    question: '임상병리사가 갈 수 있는\n병원 밖의 길을\n정리했습니다',
    // \n 은 줄바꿈입니다. 큰 글자가 어디서 끊길지 정합니다.

    answer: '일본과 국내 일곱 곳을 찾아가 열 분을 만났습니다. 분석·효능평가, 생산·품질, 규제·임상. 세 갈래로 정리했고, 어느 쪽을 목표로 하느냐에 따라 요구되는 학위와 역량이 달라집니다.',

    stats: [
      { value: 7,  label: '현장 방문 기관' },
      { value: 10, suffix: '인', label: '대면 인터뷰' },
      { value: 3,  label: '도출한 로드맵' }
    ],

    byline: '동서대학교 임상병리학과 재학생 5인이 일본 고베 의료산업도시와 국내 신약개발 기업을 현장 조사해 교차 검증한 결과입니다.',
    team: 'D-Bridge · 동서대학교 임상병리학과 · 2026년 여름'
  },


  /* ─── 2. 로드맵 ──────────────────────────────────────────── */
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
          '비임상 세 경로 중 목표 직무를 정한다.',
          '목표에 따라 대학원 진학 여부를 판단한다. 분석·효능평가는 석사 이상, 생산·품질은 학사로 진입 가능하다.',
          '목표 직무 현장에서 쓰는 실무 용어와 분석 기술을 미리 학습한다.',
          '생산·품질 직군이 목표라면 외부 기관의 GMP 과정 이수를 검토한다. 필수 자격은 아니나 직무 이해도를 보여주는 지표로 통용된다.',
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
            items: ['국가시험 합격과 병원 취업 준비에 집중한다.'],
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
              {
                id: 'A',
                name: '취업 선행',
                text: '연구 보조로 먼저 입사해 실무 흐름을 파악한 뒤 대학원에 진학한다.'
              },
              {
                id: 'B',
                name: '진학 선행',
                text: '졸업 직후 대학원에 진학해 연구 성과를 확보한 후 기업에 지원한다.'
              }
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

    closing: {
      quote: '"임상병리사의 길은 무궁무진하다"',
      line:  '다만 어느 방향으로 갈지에 따라 지금 준비할 것이 달라진다.'
    }
  },


  /* ─── 3. 세 갈래 직무 경로 ───────────────────────────────── */
  paths: [
    {
      id: 'analysis',
      num: '①',
      name: '분석 · 효능평가',
      degree: '석사 이상 권장',
      work: 'ex vivo 효능평가, 기기분석, 동물실험',
      courses: ['조직학(2-2)', '세포생물학(2-1)', '임상화학및실험'],
      lab: {
        name: 'SCDRL',
        pi: '김동원 교수',
        focus: '피부세포 성장·분화, 천연물 및 의약품 생리활성 검증',
        url: 'https://spl-dongseo.github.io/'
      },
      jobKeywords: ['효능평가', '비임상', '전임상']
    },
    {
      id: 'quality',
      num: '②',
      name: '생산 · 품질 (QC·QA)',
      degree: '학사 · 전문학사 진입 가능',
      work: 'GMP 환경에서의 품질관리(QC), 품질보증(QA), 무균 공정 생산',
      courses: ['임상화학및실험1·2', '임상미생물학및실험1·2 (무균 조작)'],
      lab: {
        name: 'MoMiLab',
        pi: '이용헌 교수',
        status: '2027년 개설 예정',
        focus: '세균 병독성의 분자적 메커니즘, 슈퍼박테리아 항생제 내성, 유전자 기반 분자진단',
        note: '개설 전까지는 외부 기관의 GMP 교육으로 직무 이해도를 보완하는 방법이 있습니다.',
        url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=professor'
      },
      jobKeywords: ['QC', '품질관리 제약', 'GMP']
    },
    {
      id: 'ra',
      num: '③',
      name: '규제 · 임상 · 사업개발',
      degree: '학사 이상',
      work: '식약처 품목허가 대응(RA), 임상시험 운영, 기술이전 및 라이선싱',
      courses: ['면역학(3-1)', '임상분자생물학및실험1'],
      lab: {
        name: 'IVDL',
        pi: '이태희 교수',
        focus: '체외진단 개발, 액체생검, 임상연구코디네이터',
        url: 'https://v0-next-js-boilerplate-sigma-rosy.vercel.app/'
      },
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
            'RA는 약사만 지원할 수 있는 업무로 알려져 있으나 실제로는 그렇지 않으며 비약사 신입 채용 사례가 있습니다. 다만 대형 제약사는 약사 면허 소지자를 선호하는 편이라, 소규모 기업에서 실무 경력을 먼저 확보하는 경로가 현실적입니다.'
          ],
          groups: [
            {
              label: '하는 일',
              items: [
                '허가자료 작성·검토 및 규제기관 제출',
                '허가 유지·변경 관리',
                'GMP·GCP 실사 지원',
                '표시자재 관리'
              ]
            },
            {
              label: '요구 역량',
              items: [
                '허가 규정 이해',
                '문서 검토의 꼼꼼함',
                '논리적 커뮤니케이션',
                '유관부서 협업',
                '외국어'
              ]
            },
            {
              label: '준비',
              items: [
                '별도 자격증은 없습니다.',
                '문서 작업이 많아 워드·엑셀 활용 능력이 중요합니다.',
                '의약품 규제업무 전문가 양성과정, 한국제약바이오협회 RA 기본교육(온라인) 등이 있습니다.'
              ]
            }
          ]
        }
      ]
    }
  ],

  // 바텀시트 안 소제목
  sheetLabels: {
    work:    '하는 일',
    courses: '연결 과목',
    lab:     '학과 연구실'
  },

  // 출처 배지
  originLabels: {
    field:  'GELS에서 확인한 것',
    public: '공개 자료로 보강한 내용'
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
      ongoing: '학년과 무관하게'
    },

    items: [
      /* ── 1·2학년 ── */
      {
        id: 'A1', grades: ['g12'], group: 'now', type: 'check',
        text: '학부 실험실에 들어가 있거나, 들어가는 방법을 알아본 적이 있다.',
        emptyNote: '',
        programs: ['undergrad_researcher', 'prof_counsel']
      },
      {
        id: 'A2', grades: ['g12'], group: 'now', type: 'check',
        text: '가설 수립부터 검증, 리뷰까지 실험의 한 사이클을 완수해 보았다.',
        emptyNote: '실험을 해본 것과 한 사이클을 끝내본 것은 다릅니다.',
        programs: ['capstone', 'academic_fest', 'ugrad_research_fund']
      },

      /* ── 3학년 ── */
      {
        id: 'B1', grades: ['g3'], group: 'now', type: 'check',
        text: '비임상 세 경로 중 목표로 삼는 직무를 정했다.',
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
        emptyNote: '현장에서 용어와 회의 내용에 벽을 느꼈다는 이야기가 있었습니다.',
        programs: ['job_lecture', 'senior_mentoring']
      },
      {
        id: 'B4', grades: ['g3'], group: 'now', type: 'check',
        text: '목표 경로에서 요구하는 외부 직무 교육을 검토한 적이 있다.',
        emptyNote: '생산·품질이 목표라면 GMP 과정입니다.',
        programs: ['gmp_course'],
        noProgram: '교내에 직무교육·자격증 지원 제도는 확인되지 않았습니다.'
      },
      {
        id: 'B5', grades: ['g3'], group: 'now', type: 'check',
        text: '복수전공과 융합 과목으로 전공 지식을 넓히는 방법을 알아보았다.',
        emptyNote: '',
        programs: ['double_major']
      },

      /* ── 4학년 ── */
      {
        id: 'D1', grades: ['g4'], group: 'now', type: 'choice',
        text: '임상과 비임상 중 지원할 방향을 정했다.',
        options: [
          { value: 'clinical',    label: '임상'   },
          { value: 'nonclinical', label: '비임상' },
          { value: 'undecided',   label: '아직'   }
        ],
        defaultValue: 'undecided',
        emptyWhen: ['undecided'],
        emptyLabel: '방향 결정',
        emptyNote: '어느 쪽을 고르느냐에 따라 남은 준비가 달라집니다.',
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
        text: '내 경험과 역량을 말과 글로 설명할 수 있다. (발표, 자기소개서, 모의면접 등)',
        emptyNote: '면접과 실무에서 직접 평가됩니다.',
        programs: ['writing_clinic', 'mock_interview']
      },
      {
        id: 'D4', grades: ['g4'], group: 'now', type: 'check',
        text: '지원할 기업의 파이프라인을 분석해 보았다.',
        emptyNote: '기업 이름으로 검색해 채용공고와 파이프라인을 함께 봅니다.',
        programs: [],
        jobSearch: { mode: 'company' }
      },

      /* ── 학년과 무관하게 ── */
      {
        id: 'C1', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '전공 과목 성적을 확인하고 목표 학점을 정해두었다.',
        emptyNote: '채용 서류에 성적증명서가 포함됩니다.',
        programs: ['study_lecture', 'tutoring']
      },
      {
        id: 'C2', grades: ['g12', 'g3', 'g4'], group: 'ongoing', type: 'check',
        text: '공인 어학 역량 확보를 진행하고 있다.',
        emptyNote: '방문한 3개 기업 중 2곳이 기본 요건으로 언급했습니다.',
        programs: ['language_course'],
        noProgram: '응시료 지원 제도는 확인되지 않았습니다. 학과 안에서 스터디를 만드는 방법도 있습니다.'
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


  /* ─── 5. 교내 프로그램 ───────────────────────────────────
     조사 결과 '없음'으로 확인된 항목은 아예 넣지 않았습니다.
     빈 자리로 두면 못 찾은 건지 없는 건지 구분이 안 됩니다.

     kind — 'campus' 교내 / 'external' 외부 기관
     when — 신청 시기. 없으면 표시하지 않습니다.
     ───────────────────────────────────────────────────────── */
  programs: {
    undergrad_researcher: {
      name: '임상병리학과 연구회',
      kind: 'campus',
      when: '학과 공지로 모집',
      url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34132'
    },
    capstone: {
      name: '캡스톤디자인 지원 프로그램',
      kind: 'campus',
      when: '매 학기',
      url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000197&mode=view&idx=103053'
    },
    academic_fest: {
      name: '바이오헬스융합대학 학술제 엑스포',
      kind: 'campus',
      when: '11월경',
      url: ''
    },
    ugrad_research_fund: {
      name: '학부생 연구지원 (MYDEX)',
      kind: 'campus',
      when: '',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },

    job_lecture: {
      name: '앵커 취업스쿨 — 기업 탐방 및 직무 특강',
      kind: 'campus',
      when: '7월 말',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },
    senior_mentoring: {
      name: '전공과 진로설계 — 선배가 들려주는 임상병리사의 첫걸음',
      kind: 'campus',
      when: '4월 말',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },
    career_counsel: {
      name: '취업지원센터 진로 상담',
      kind: 'campus',
      when: '상시 · 051-320-4600',
      url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=research&mode=view&code=028'
    },

    grad_briefing: {
      name: '일반대학원 학·석사 연계과정 안내',
      kind: 'campus',
      when: '1월 · 7월 첫째 주',
      url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34142'
    },
    grad_counsel: {
      name: '취업지원센터 진학 상담',
      kind: 'campus',
      when: '상시 · 051-320-4600',
      url: 'https://www.dongseo.ac.kr/kr/index.php?pCode=research&mode=view&code=028'
    },
    prof_counsel: {
      name: '지도교수 상담',
      kind: 'campus',
      when: '학과 사무실 051-320-2733',
      url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=professor'
    },

    double_major: {
      name: '부·복수전공 신청',
      kind: 'campus',
      when: '매 학기 개강 2개월 전',
      url: 'https://uni.dongseo.ac.kr/bio/index.php?pCode=generalboa&mode=view&idx=34133'
    },

    writing_clinic: {
      name: '기초 글쓰기 클리닉',
      kind: 'campus',
      when: '매 학기 · MYDEX에서 검색',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },
    mock_interview: {
      name: 'RISE 취업스쿨 — 모의면접 특강',
      kind: 'campus',
      when: '학기 중 1~2회 · MYDEX에서 검색',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },

    study_lecture: {
      name: '학습전략특강',
      kind: 'campus',
      when: '학기 중 · MYDEX에서 검색',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },
    tutoring: {
      name: 'BDAD DLC 학습클럽',
      kind: 'campus',
      when: '매 학기 · MYDEX에서 검색',
      url: 'https://mydex.dongseo.ac.kr/loadPage.do?jspPage=/PORTAL/STUD/C/A/SSCA020_01S&menuId=00118'
    },

    language_course: {
      name: '교내 어학 강좌',
      kind: 'campus',
      when: '매 학기 초 학교 홈페이지 공지 확인',
      url: ''
    },

    // 교내 프로그램이 아닌 외부 기관 과정
    gmp_course: {
      name: 'GMP 교육 과정 (외부 기관)',
      kind: 'external',
      when: '한국제약바이오협회 등',
      url: ''
    }
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
      '해외 클러스터 현장 인터뷰에서 얻은 답을 국내 기업 현직자에게 다시 확인하는 방식으로 진행했습니다.',
      '이 사이트는 국내에서 검증된 내용을 기준으로 작성했습니다.'
    ],
    linkLabel: '일곱 곳에서 들은 이야기 보기'
  },


  /* ─── 8. 하단 ────────────────────────────────────────────── */
  footer: {
    limitHeading: '일러두기',
    limit: '본 로드맵은 대전·오송 지역 펩타이드 분야 중소·중견 기업 재직자 인터뷰를 바탕으로 도출되었습니다. 대형 제약사나 다른 바이오 산업군은 사정이 다를 수 있으므로 하나의 사례로 참고해 주시기 바랍니다.',

    batonHeading: '이어달리기',
    baton: '이 사이트는 2026년 <b>D-Bridge</b> 팀의 프로젝트 결과물입니다. 새로운 진로를 개척한 후배들의 기록이 계속 쌓이기를 기대합니다.',

    contactHeading: '문의',
    contact: [
      { label: '학과',     value: '동서대학교 임상병리학과' },
      { label: '학과 사무실', value: '051-320-2733' },
      { label: '홈페이지', value: '학과 홈페이지', url: 'https://uni.dongseo.ac.kr/bio/' },
      { label: '메일',     value: '' },
      { label: '만든 팀',  value: 'D-Bridge (2026)' }
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

const slot = (name, root = document) => root.querySelector(`[data-render="${name}"]`);
const tpl  = (name) => $(`#tpl-${name}`).content.firstElementChild.cloneNode(true);

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

  setRichText(slot('hero-answer'), h.answer);

  const stats = slot('hero-stats');
  h.stats.forEach(stat => {
    const wrap = make('div', 'hero__stat');
    const dd  = make('dd', 'hero__num');
    const val = make('span', 'hero__val', prefersReducedMotion ? stat.value : '0');
    val.dataset.target = stat.value;
    dd.append(val);
    if (stat.suffix) dd.append(make('span', 'hero__suffix', stat.suffix));
    wrap.append(dd, make('dt', 'hero__label', stat.label));
    stats.append(wrap);
  });

  slot('hero-byline').textContent = h.byline;
  slot('hero-team').textContent   = h.team;

  if (!prefersReducedMotion) countUp(stats);
}

/** 숫자 카운트업 — 한 번만, 짧게 */
function countUp(root) {
  const nums = $$('.hero__val', root);
  const t0 = performance.now();
  const DUR = 850;

  function frame(now) {
    const p = Math.min(1, (now - t0) / DUR);
    const eased = 1 - Math.pow(1 - p, 3);
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

function buildStage(stage) {
  const li = tpl('stage');
  li.dataset.stage = stage.id;
  $('.stage__grade',   li).textContent = stage.grade;
  $('.stage__caption', li).textContent = stage.caption;

  const ul = $('.stage__items', li);
  stage.items.forEach(text => {
    const item = tpl('stage-item');
    $('.stage__item-text', item).textContent = text;
    $('.stage__item-btn', item).addEventListener('click', () => {
      openSheet({ eyebrow: `${stage.grade} · ${stage.caption}`, title: stage.grade, text });
    });
    ul.append(item);
  });

  li.classList.add('reveal');
  return li;
}

function buildFork(stage) {
  const li = tpl('fork');
  li.dataset.stage = stage.id;

  const find = id => stage.branches.find(b => b.id === id);
  fillBranch($('.branch--clinical', li),    find('clinical'));
  fillBranch($('.branch--nonclinical', li), find('nonclinical'));

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

  // 라벨만으로 오해할 수 있으므로 설명 문장을 그대로 아래 붙인다
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

    // 학과 연구실 — 카드에는 한 줄로, 상세는 바텀시트에
    const lab = $('.path__lab', li);
    lab.append(make('span', 'path__lab-label', DATA.sheetLabels.lab));
    lab.append(make('span', 'path__lab-name',
      path.lab.name ? path.lab.name : '연계 연구실 없음'));
    if (path.lab.status) lab.append(make('span', 'path__lab-status', path.lab.status));
    if (!path.lab.name) lab.classList.add('path__lab--none');

    const courses = $('.path__majors', li);
    path.courses.forEach(c => courses.append(make('li', null, c)));

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

  slot('interview-link').textContent = DATA.method.linkLabel;
}


/* C-5. 하단 ---------------------------------------------------- */
function renderFooter() {
  const f = DATA.footer;

  slot('limit-heading').textContent   = f.limitHeading;
  slot('limit-body').textContent      = f.limit;
  slot('baton-heading').textContent   = f.batonHeading;
  slot('contact-heading').textContent = f.contactHeading;

  setRichText(slot('baton'), f.baton);

  const dl = slot('contact-list');
  f.contact.forEach(row => {
    if (!row.value) return;              // 비어 있으면 줄 자체를 안 그린다
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


/* C-6. 스크롤 진입 -------------------------------------------- */
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

/** 소제목 + 목록 한 덩어리 */
function labelledList(label, items) {
  const wrap = make('div', 'src__group');
  wrap.append(make('p', 'src__group-label', label));
  const ul = make('ul');
  items.forEach(t => ul.append(make('li', null, t)));
  wrap.append(ul);
  return wrap;
}

/** 경로 상세 — 하는 일 / 연결 과목 / 학과 연구실, 그리고 출처 구분 섹션 */
function openPathSheet(path) {
  const L = DATA.sheetLabels;

  openSheet({
    eyebrow: path.degree,
    title: `${path.num} ${path.name}`,
    build(body) {
      const basics = make('section', 'src src--basics');
      basics.append(labelledList(L.work, [path.work]));
      basics.append(labelledList(L.courses, path.courses));

      // 학과 연구실 — 개설 예정이거나 없으면 그 사실을 그대로 적는다
      const labItems = [];
      if (path.lab.name) {
        labItems.push(path.lab.pi
          ? `${path.lab.name} (${path.lab.pi})`
          : path.lab.name);
        if (path.lab.status) labItems.push(path.lab.status);
        if (path.lab.focus)  labItems.push(path.lab.focus);
      }
      if (path.lab.note) labItems.push(path.lab.note);
      if (!labItems.length) labItems.push('교내에 직접 연계되는 연구실은 없습니다.');

      const labBlock = labelledList(L.lab, labItems);
      if (!path.lab.name) labBlock.classList.add('src__group--none');
      if (path.lab.url) {
        const a = make('a', 'chip', '연구실 정보 보기');
        a.href = path.lab.url; a.target = '_blank'; a.rel = 'noopener';
        const p = make('p', 'src__group-link');
        p.append(a);
        labBlock.append(p);
      }
      basics.append(labBlock);

      body.append(basics);

      (path.sections || []).forEach(sec => {
        const node = tpl('sheet-section');
        node.dataset.origin = sec.origin;
        $('.src__badge', node).textContent = DATA.originLabels[sec.origin];
        $('.src__title', node).remove();      // 배지가 제목 역할을 한다

        const b = $('.src__body', node);
        sec.body.forEach(t => b.append(make('p', null, t)));

        const g = $('.src__groups', node);
        (sec.groups || []).forEach(grp => g.append(labelledList(grp.label, grp.items)));

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
