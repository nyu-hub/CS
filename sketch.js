// sketch.js
// Cleaning Service UI
// - 반응형 + 텍스트 길이에 맞춰 박스/캔버스 높이 자동 조절
// - 핸드폰을 흔들 때마다 단어 1~4개 랜덤 낙하
//   단, "토끼는 길쭉하고 움직일 수 있는 긴 귀를 가지고 있어 청각이 뛰어나다." 문장은 마지막까지 남음

let searchInput;
let langBtn;
let loadWikiBtn;
let coreBtn;

// 제목 & 레이아웃 관련 전역값
let titleX, titleY, titleSize, controlsY;
let controlHeight = 0; // 버튼 줄 높이 저장

// 인터랙션 관련 전역값
const fixedSentence =
  "토끼는 길쭉하고 움직일 수 있는 긴 귀를 가지고 있어 청각이 뛰어나다.";
let wikiFallingText; // fixedSentence 제거된 텍스트
let fallingWords = []; // 낙하하는 단어들
let wordsLaidOut = false; // 단어 레이아웃 계산 여부

// 텍스트 레이아웃용 전역
let lastPanelX, lastPanelY, lastPanelW, lastPanelH;
let lastPaddingX, lastPaddingY, lastTextBoxW, lastFontSize, lastLeading;

// 토끼 위키 원문 텍스트
let wikiText = `🍀 토끼 – Wikipedia 원문 텍스트

토끼(兎-, 영어: Leporid)는 토끼과(兎끼科, Leporidae)에 속하는 포유동물의 총칭이다. 우는토끼와 함께 토끼목을 이룬다.
경상남도, 전라도, 충청도, 평안북도 등지에서는 토끼를 토깽이라고도 부른다.
영어에서는 산토끼 계열을 헤어(Hare)로, 집토끼 계열을 래빗(rabbit)이라고 부른다. 총칭으로는 레포리드(Leporid)라고 부른다.

== 특징 ==
토끼는 길쭉하고 움직일 수 있는 긴 귀를 가지고 있어 청각이 뛰어나다. 눈이 커서 야간 시력이 좋은데, 이는 토끼가 밤에도 활동하는 야행성을 띄기 때문이다. 또한, 뒷다리가 길어 빠른 움직임에 적응했으며, 뒷다리의 각 발에는 네 개의 발가락이 있다. 앞다리는 짧고, 앞다리의 각 발에 다섯 개의 발가락이 있다. 발바닥에는 털이 많이 나 있어서 달릴 때 접지력이 뛰어나고, 모든 발가락에 강한 발톱이 달려 있다.
토끼의 몸길이는 21 ~ 76 센티미터 (8.3 ~ 29.9 in) 정도이다. 암컷 토끼가 거의 항상 수컷보다 큰데, 이는 육상 포유류 중에서는 드문 경우다. 또한, 모든 토끼과의 동물들은 서로 상완골이 매우 유사하다.
토끼는 대부분 초식성이다. 주로 풀잎과 허브를 먹지만, 과일도 먹을 수 있다. 그러나 과일의 경우 생후 6개월 이전에 먹는 것은 피하는 게 좋다. 일부 토끼과 동물들은 썩은 고기를 먹는 것으로 알려져 있다.
쉽게 소화되는 음식은 위장에서 처리되어 대변으로 배출다. 그러나 소화하기 어려운 음식들은 영양소를 얻기 위해 맹장에서 섬유질을 발효시킨 다음 내용물을 밖으로 배출하고 이를 다시 섭취합니다. 다시 섭취한 내용물은 소장에서 흡수되어 영양소로 활용된다.
토끼는 원 모양 똥을 두 번에 걸쳐 나누어 싸는데, 처음 싼 똥은 영양분이 많아서 대부분 다시 먹는다.
흔히 "빨갛게 충혈된 눈"을 일컬어 "토끼눈"이라 하는데, 이러한 빨간색 토끼눈은 백색증을 가진 토끼의 눈이다.
토끼를 해부해 보면 위의 분문(들문)과 유문(날문)이 가까이 있어 해부학적으로 토하지 못하는 구조를 가지고 있다. 임신기간은 평균 30일이며, 한 번에 4 ~ 12마리의 새끼를 낳는다. 암컷 토끼는 자궁이 2개 달려있기 때문에, 임신중에도 중복 임신이 가능해 엄청나게 많은 새끼를 낳는다. 또한, 토끼는 요로결석에 매우 취약한 동물로 알려져 있다.
토끼의 천적으로는 불곰, 멧돼지, 점박이하이에나, 족제비과 동물들, 개과 동물들, 고양이과 동물들, 맹금류, 대형 조류, 뱀, 악어 등이 있다.

=== 서식지 ===
토끼는 남극과 오세아니아 (오스트레일리아, 뉴질랜드, 괌 등), 몰디브, 마다가스카르, 모리셔스, 코모로, 세이셸, 한국 등 인도양의 도서 지역을 제외한 전 세계에 분포한다. 오스트레일리아에서는 토끼를 방사하여 도입되었으나, 지나친 번식력과 천적의 부재로 인해 생태계에 피해를 주고 있다. 이 때문에 들개, 여우, 고양이 등을 풀어서 해결하려 했으나 이들은 되려 토끼보다 사냥하기 쉬운 양을 습격하는 등 문제가 많았다. 결국 오스트레일리아 방위군까지 동원해서 대대적인 토끼 사냥에 나서서 현재는 꽤 많이 도축한 상태이다.

== 관련 문화 ==

=== 대한민국 ===
한국에서는 토끼를 꾀가 많고 영민한 동물로 인식한다.
토끼는 십이지신 중 네 번째 동물이다.
달의 분화구 모양이 계수나무 밑에서 절구를 찧는 토끼에 비유되기도 한다. (옥토끼)
한국의 설화인 토끼전에서 토끼 간이 용왕의 병을 고치는 데 효과가 있는 것으로 묘사된다.
황해도에는 토산군 (兎山郡), 토산면 (兎山面)이 있는데, 이들은 모두 토끼와 관련된 지명이다.

=== 중국 ===
중국에서는 토끼를 동양의 미와 관련이 있는 동물로 보이게 되며 한국과 유사하게 역사적인 인식이 깊다.
전통 문화의 상징성이 큰 것으로 보인다.

=== 일본 ===
일본의 최대의 토끼 섬인 오쿠노시마섬에는 수백여 마리의 토끼가 떼지어 방사하여 활동하고 있다.
토끼를 중국과 동등하게 동양의 미를 인식하고 있는 것을 굳게 믿어지는 경우를 가지고 있다.

=== 세계 ===
이상한 나라의 앨리스에서 토끼가 신사로 나온다.
독일에서는 부활절이 되면 토끼모양 유정란을 먹는다.
서양에서는 부활절이 되면 부활절 토끼가 부활절달걀을 나눠주는 민간 설화가 있다.
이솝 우화의 '토끼와 거북이' 이야기에서 토끼가 등장한다.

== 세부 종류 ==
아마미검은멧토끼속(Pentalagus)
아마미검은멧토끼(Pentalagus furnessi)
강토끼속(Bunolagus)
강토끼(Bunolagus monticularis)
줄무늬토끼속(Nesolagus)
수마트라줄무늬토끼(Nesolagus netscheri)
안남줄무늬토끼(Nesolagus timminsi)
멕시코토끼속(Romerolagus)
멕시코토끼 또는 화산토끼(Romerolagus diazi)
피그미토끼속(Brachylagus)
피그미토끼(Brachylagus idahoensis)
솜꼬리토끼속(Sylvilagus)
브라질토끼아속(Tapeti)
늪토끼 또는 늪솜꼬리토끼(Sylvilagus aquaticus)
브라질토끼 또는 브라질솜꼬리토끼 또는 숲솜꼬리토끼(Sylvilagus brasiliensis)
다이스솜꼬리토끼(Sylvilagus dicei)
오밀테메솜꼬리토끼(Sylvilagus insonus)
습지토끼 또는 습지솜꼬리토끼(Sylvilagus palustris)
베네수엘라저지대토끼(Sylvilagus varynaensis)
솜꼬리토끼아속(Sylvilagus)
사막솜꼬리토끼(Sylvilagus audubonii)
만자노산솜꼬리토끼(Sylvilagus cognatus)
멕시코솜꼬리토끼(Sylvilagus cunicularis)
동부솜꼬리토끼(Sylvilagus floridanus)
트레스마리아스토끼 또는 트레스마리아스솜꼬리토끼(Sylvilagus graysoni)
산솜꼬리토끼 또는 누탈솜꼬리토끼(Sylvilagus nuttallii)
애팔래치아솜꼬리토끼(Sylvilagus obscurus)
데이비스산맥토끼(Sylvilagus robustus)
뉴잉글랜드솜꼬리토끼(Sylvilagus transitionalis)
덤불토끼아속(Microlagus)
덤불토끼(Sylvilagus bachmani)
산호세덤불토끼(Sylvilagus mansuetus)
굴토끼속(Oryctolagus)
굴토끼 또는 유럽토끼(Oryctolagus cuniculus)
분뇨로토끼속(Poelagus)
분뇨로토끼 또는 서아프리카토끼(Poelagus marjorita)
붉은바위토끼속(Pronolagus)
나탈붉은바위토끼(Pronolagus crassicaudatus)
제임슨붉은바위토끼(Pronolagus randensis)
스미스붉은바위토끼(Pronolagus rupestris)
휴이트붉은바위토끼(Pronolagus saundersiae)
아삼털토끼속(Caprolagus)
아삼털토끼(Caprolagus hispidus)
산토끼속(Lepus)
영양잭토끼아속(Macrotolagus)
영양잭토끼(Lepus alleni)
눈덧신토끼이속(Poecilolagus)
눈덧신토끼 또는 아메리카산토끼(Lepus americanus)
극한토끼아속(Lepus)
북극토끼(Lepus arcticus)
알래스카토끼(Lepus othus)
고산토끼(Lepus timidus)
고서양멧토끼아속Proeulagus
캘리포니아멧토끼(Lepus californicus)
흰줄무늬잭토끼(Lepus callotis)
케이프멧토끼(Lepus capensis)
테우안테펙잭토끼(Lepus flavigularis)
아메리카검은멧토끼 또는 검은잭토끼(Lepus insularis)
덤불멧토끼(Lepus saxatilis)
사막멧토끼(Lepus tibetanus)
톨라이멧토끼(Lepus tolai)
서양멧토끼아속Eulagos
빗자루토끼(Lepus castrovieoi)
윈난멧토끼(Lepus comus)
멧토끼(Lepus coreanus)
코르시카멧토끼(Lepus corsicanus)
숲멧토끼 또는 유럽산토끼(Lepus europaeus)
그라나다멧토끼(Lepus granatensis)
만주토끼(Lepus mandschuricus)
양털멧토끼(Lepus oiostolus)
에티오피아고원멧토끼(Lepus starcki)
흰꼬리잭토끼(Lepus townsendii)
사바나멧토끼아속(Sabanalagus)
에티오피아멧토끼(Lepus fagani)
아프리카사바나멧토끼(Lepus microtis)
인도멧토끼아속(Indolagus)
하이난멧토끼(Lepus hainanus)
인도멧토끼(Lepus nigricollis)
버마멧토끼(Lepus peguensis)
중국멧토끼아속(Sinolagus)
중국멧토끼(Lepus sinensis)
야르칸드멧토끼아속(Tarimolagus)
야르칸드멧토끼(Lepus yarkandensis)
incertae sedis
일본멧토끼(Lepus brachyurus)
아비시니아멧토끼(Lepus habessinicus)

== 같이 보기 ==
토끼목
토끼고기
토끼와 거북이
토끼풀
여우
개구리
멧토끼

== 각주 ==

== 외부 링크 ==
위키미디어 공용에 토끼 관련 미디어 분류가 있습니다.
〈토끼〉. 《두산세계대백과사전》. (주)두산.
권오길 (2010년 1월 21일). “토끼”. gettyimages/멀티비츠, TOPIC/corbis 이미지. 《네이버캐스트》.`;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 고정 문장 제거된 텍스트 준비 (낙하용)
  wikiFallingText = wikiText.replace(fixedSentence, "");

  // UI 요소 생성
  searchInput = createInput("");
  searchInput.attribute("placeholder", "검색어 입력하는 곳");

  langBtn = createButton("KR");
  loadWikiBtn = createButton("위키피디아 텍스트 불러오기 버튼");
  coreBtn = createButton("핵심 문장 보기 버튼");

  styleUI();
  updateTitleMetrics();
  layoutUI();

  // 핸드폰 흔들림 민감도 (값이 작을수록 조금만 흔들어도 인식)
  // 필요하면 10~60 사이에서 조절해보기
  if (typeof setShakeThreshold === "function") {
    setShakeThreshold(20);
  }
}

function draw() {
  background(153, 215, 255); // 하늘색 배경

  // 혹시 창 크기가 바뀌었을 수 있으니 제목/버튼 기준 업데이트
  updateTitleMetrics();

  noStroke();

  // 타이틀 텍스트
  textAlign(LEFT, TOP);
  textSize(titleSize);

  // 그림자
  fill(120, 190, 240);
  text(
    "Cleaning Service",
    titleX + titleSize * 0.03,
    titleY + titleSize * 0.03
  );

  // 본문
  fill(255);
  text("Cleaning Service", titleX, titleY);

  // === 중앙 흰 박스 (위키 텍스트 박스) ===
  let panelX = width * 0.05;

  // 버튼 줄 아래로 + 여백을 충분히 주기
  let extraMargin = max(height * 0.03, 20); // 최소 20px
  let panelY = controlsY + controlHeight + extraMargin;
  let panelW = width * 0.74;

  // 텍스트 스타일 세팅
  let fontSize = width * 0.011;
  textAlign(LEFT, TOP);
  textSize(fontSize);
  let leading = fontSize * 1.4;
  textLeading(leading);

  // 텍스트가 실제로 차지할 높이 계산 (전체 원문 기준)
  let textBoxW = panelW * 0.9;
  let textHeight = getTextHeight(wikiText, textBoxW, fontSize);

  // 위/아래 패딩
  let paddingTop = fontSize * 1.5;
  let paddingBottom = fontSize * 1.5;
  let panelH = textHeight + paddingTop + paddingBottom;

  // 박스가 화면보다 크면 캔버스도 늘려주기
  let bottomMargin = fontSize * 2;
  let neededHeight = panelY + panelH + bottomMargin;
  if (neededHeight > height) {
    resizeCanvas(windowWidth, neededHeight);
  }

  // 전역에 현재 레이아웃 정보 저장 (낙하 레이아웃용)
  lastPanelX = panelX;
  lastPanelY = panelY;
  lastPanelW = panelW;
  lastPanelH = panelH;
  lastPaddingX = panelX + panelW * 0.05;
  lastPaddingY = panelY + paddingTop;
  lastTextBoxW = textBoxW;
  lastFontSize = fontSize;
  lastLeading = leading;

  // 흰 박스 그리기
  fill(255);
  rect(panelX, panelY, panelW, panelH, 32);

  // 단어 레이아웃이 안 되어 있으면 한 번만 계산
  if (!wordsLaidOut) {
    layoutFallingWords();
  }

  // === 고정 문장 (항상 남아있게) ===
  fill(0);
  let fixedHeight = getTextHeight(fixedSentence, lastTextBoxW, lastFontSize);
  text(
    fixedSentence,
    lastPaddingX,
    lastPaddingY,
    lastTextBoxW,
    fixedHeight + lastLeading
  );

  // === 나머지 단어들: 일부만 낙하 ===
  for (let w of fallingWords) {
    if (w.isFalling) {
      w.vy += 0.3; // 중력
      w.y += w.vy;
      w.x += w.vx;
    }
    text(w.word, w.x, w.y);
  }
}

// 낙하 텍스트 레이아웃 계산 (한 번만)
function layoutFallingWords() {
  fallingWords = [];

  textAlign(LEFT, TOP);
  textSize(lastFontSize);
  textLeading(lastLeading);

  let boxX = lastPaddingX;
  let boxY = lastPaddingY;
  let boxW = lastTextBoxW;

  // 고정 문장 높이 계산 후, 그 아래에서 나머지 텍스트 시작
  let fixedH = getTextHeight(fixedSentence, boxW, lastFontSize);
  let startY = boxY + fixedH + lastLeading * 0.8;

  let x = boxX;
  let y = startY;

  let paragraphs = wikiFallingText.split("\n");

  for (let p of paragraphs) {
    let trimmed = p.trim();

    if (trimmed.length === 0) {
      // 빈 줄이면 줄 하나 띄우기
      y += lastLeading;
      x = boxX;
      continue;
    }

    let words = p.split(" ");
    for (let raw of words) {
      let w = raw;
      if (w.length === 0) continue;

      let wWidth = textWidth(w);
      // 줄바꿈 체크
      if (x + wWidth > boxX + boxW) {
        x = boxX;
        y += lastLeading;
      }

      fallingWords.push({
        word: w,
        x: x,
        y: y,
        vx: 0, // 처음에는 정지
        vy: 0,
        isFalling: false, // 흔들릴 때까지는 안 떨어짐
      });

      x += wWidth + textWidth(" ");
    }

    // 문단 끝 줄바꿈
    y += lastLeading;
    x = boxX;
  }

  wordsLaidOut = true;
}

// 텍스트가 주어진 폭에서 몇 줄이 되는지 계산해서, 전체 높이 리턴
function getTextHeight(txt, boxW, fontSize) {
  push();
  textSize(fontSize);
  textAlign(LEFT, TOP);
  let leading = fontSize * 1.4;

  let totalLines = 0;
  let paragraphs = txt.split("\n");

  for (let p of paragraphs) {
    let line = "";
    // 빈 줄이면 그냥 한 줄 추가 (줄바꿈)
    if (p.trim().length === 0) {
      totalLines++;
      continue;
    }

    let words = p.split(" ");
    for (let w of words) {
      let testLine = line.length > 0 ? line + " " + w : w;
      if (textWidth(testLine) > boxW) {
        // 한 줄이 넘으면 줄바꿈
        totalLines++;
        line = w; // 새 줄 시작
      } else {
        line = testLine;
      }
    }
    if (line.length > 0) {
      totalLines++;
    }
  }

  pop();
  return totalLines * leading;
}

// 창 크기 바뀔 때
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateTitleMetrics();
  layoutUI();

  // 리사이즈되면 전체 레이아웃/낙하 상태 리셋
  wordsLaidOut = false;
  fallingWords = [];
}

// 제목 크기 & 위치 계산
function updateTitleMetrics() {
  titleX = width * 0.06;

  // 화면 비율 + 절대 최대 크기 3중 제어
  titleSize = min(
    width * 0.09, // 가로 비율
    height * 0.2, // 세로 비율
    120 // 최대 글자 크기(px)
  );

  titleY = height * 0.04;
  controlsY = titleY + titleSize * 0.95; // 제목 아래 버튼 줄 Y
}

// 공통 스타일
function styleUI() {
  const elements = [searchInput, langBtn, loadWikiBtn, coreBtn];
  elements.forEach((el) => {
    el.style("border", "none");
    el.style("border-radius", "999px");
    el.style("padding", "0");
    el.style("outline", "none");
    el.style("background-color", "#ffffff");
    el.style("box-shadow", "0 3px 6px rgba(0,0,0,0.15)");
    el.style(
      "font-family",
      "system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
    );
    el.style("cursor", "pointer");
  });

  searchInput.style("cursor", "text");
}

// 버튼 위치/크기 계산
function layoutUI() {
  let topY = controlsY; // 제목 아래
  let marginX = width * 0.05;

  // 버튼 높이 (최소 40px 보장)
  controlHeight = max(height * 0.06, 40);
  let gap = width * 0.01;

  // 글자 크기
  let baseFontSize = width * 0.01;
  searchInput.style("font-size", baseFontSize + "px");
  langBtn.style("font-size", baseFontSize + "px");
  loadWikiBtn.style("font-size", baseFontSize * 0.9 + "px");
  coreBtn.style("font-size", baseFontSize * 0.9 + "px");

  // 버튼 폭 (너무 좁거나 넓지 않게 제한)
  let searchW = constrain(width * 0.25, 180, width * 0.4);
  let langW = constrain(width * 0.08, 70, 160);
  let loadW = constrain(width * 0.21, 180, width * 0.32);
  let coreW = constrain(width * 0.17, 150, width * 0.28);

  // 검색창
  searchInput.position(marginX, topY);
  searchInput.size(searchW, controlHeight);

  // KR 버튼
  langBtn.position(marginX + searchW + gap, topY);
  langBtn.size(langW, controlHeight);

  // 위키 텍스트 버튼
  loadWikiBtn.position(marginX + searchW + gap + langW + gap, topY);
  loadWikiBtn.size(loadW, controlHeight);

  // 핵심 문장 버튼
  coreBtn.position(marginX + searchW + gap + langW + gap + loadW + gap, topY);
  coreBtn.size(coreW, controlHeight);
}

// 👉 핸드폰을 흔들었을 때 호출되는 p5 콜백
function deviceShaken() {
  triggerWordFall();
}

// 단어 1~4개 랜덤으로 낙하시키는 함수
function triggerWordFall() {
  if (!wordsLaidOut) return;

  // 아직 안 떨어지는 단어들만 후보로
  let candidates = fallingWords.filter((w) => !w.isFalling);
  if (candidates.length === 0) return;

  // 이번 흔들림에 떨어질 단어 개수: 1~4개
  let n = floor(random(1, 5)); // 1,2,3,4
  n = min(n, candidates.length);

  // 후보 중에서 n개 랜덤 선택
  let pool = [...candidates];
  for (let i = 0; i < n; i++) {
    let idx = floor(random(pool.length));
    let w = pool[idx];

    w.isFalling = true;
    w.vx = random(-0.8, 0.8);
    w.vy = random(-1, 0.5);

    pool.splice(idx, 1); // 중복 선택 방지
  }
}
