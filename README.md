# D-Bridge — 임상병리사의 바이오 진출 로드맵

동서대학교 임상병리학과 D-Bridge 팀(2026 GELS 챌린저)이 일본 고베와 국내 대전·오송의
기업·연구기관 일곱 곳을 다녀와 정리한 진로 안내 사이트입니다.

- 주소: https://25dbridge.github.io/dbridge/ (GitHub Pages, `main` 브랜치 루트)
- 빌드 과정 없음. 파일을 올리면 1~2분 뒤 그대로 반영됩니다.

## 파일

| 파일 | 역할 |
|---|---|
| `data.js` | **사이트에 보이는 모든 글과 사진 목록.** 내용을 바꿀 때는 이 파일만 고칩니다. |
| `index.html` | 메인 페이지 틀 |
| `interview.html` | 인터뷰 아카이브 틀 |
| `style.css` | 디자인 (밝은 화면·어두운 화면) |
| `script.js` | 메인 페이지 동작 (경로 찾기, 비교, 타임라인, 체크리스트…) |
| `interview.js` | 인터뷰 페이지 동작 |
| `common.js` | 두 페이지가 같이 쓰는 것 (다크 모드, 공유, 용어 풀이) |
| `vendor/html2canvas.min.js` | "이미지로 저장" 버튼이 쓰는 라이브러리 (MIT, 외부 접속 없이 동작) |
| `img/` | 사진. `img/stock/`은 Unsplash 참고 사진, `img/visits/`는 팀이 찍은 방문 사진 자리 |
| `og-image.png` | 링크 공유 미리보기 (1200×630) |

## 글 고치기

1. `data.js`를 열어 따옴표 `' '` 안의 글자만 바꿉니다. `id: '…'` 값은 바꾸지 마세요.
2. `index.html`과 `interview.html`에 있는 `?v=302` 숫자를 모두 하나 올립니다 (예: `v=303`).
   휴대폰이 예전 파일을 기억하고 있어도 새 파일을 받아가게 하는 장치입니다. 한 파일 안의 `style.css`, `data.js`, `common.js`, `script.js`/`interview.js` 네 군데를 같은 숫자로 맞춥니다.
3. 용어 풀이는 `data.js`의 `glossary`에 있습니다. `term`에 적힌 글자가 본문에 처음 나오는 자리에 점선 밑줄이 자동으로 붙습니다.
4. GitHub에 올립니다.

## 사진 넣기

- 첫 화면 배경: `img/hero.jpg` (가로 1600px 안팎, 어두운 톤이 글자와 잘 맞습니다)
- 방문 사진: `img/visits/월일-기관-번호.jpg`
  - 기관 id: `carna` `ibs` `riken` `biclet` `fbri` `peptron-osong` `g2g` `incos` `peptron-daejeon`
  - 예: `img/visits/0629-carna-1.jpg`, `img/visits/0730-peptron-osong-2.jpg`
- 권장: JPG, 긴 변 1600px 이하, 300KB 이하 (휴대폰에서 빨리 뜨게)
- 파일을 넣은 뒤 `data.js`의 `photos.items`에 한 줄 추가합니다.
  ```js
  { org: 'carna', file: 'img/visits/0629-carna-1.jpg', caption: 'Carna Biosciences 연구시설 견학' },
  ```
  그러면 다녀온 곳 카드와 현장 사진 갤러리에 같이 나옵니다. 사진이 없는 기관은 카드에 "사진 자리"가 표시됩니다.

## 되돌리기

- 2026년 9월 발표 당시 버전은 태그 `v1-2026-09`로 남겨 두었습니다.
  GitHub에서 Releases/Tags → `v1-2026-09` 에서 당시 파일을 볼 수 있습니다.
- 되돌리려면 `git checkout v1-2026-09 -- .` 후 커밋하거나, GitHub 웹에서 해당 태그의 파일을 내려받아 올리면 됩니다.

## 참고 사진 출처

`img/hero.jpg` PJH (Unsplash) · `img/stock/microscope.jpg` Ousa Chea (Unsplash) · `img/stock/pipette.jpg` CDC (Unsplash).
모두 Unsplash License(상업적 이용·수정 가능, 출처 표기 의무 없음). 하단에 크레딧을 적어 두었습니다.
팀 사진이 준비되면 `data.js`의 `photos.items`에서 이 두 줄을 지우고 방문 사진으로 바꾸면 됩니다.

## 방문자 집계

`index.html`과 `interview.html`에 GoatCounter 스크립트가 들어 있습니다.
통계는 https://dbridge25.goatcounter.com 에서 봅니다. 빼려면 해당 `<script data-goatcounter…>` 한 줄을 지우면 됩니다.
