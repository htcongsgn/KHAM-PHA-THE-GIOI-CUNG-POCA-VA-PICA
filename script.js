const STORAGE_KEY = "poca-pica-summer-adventure-2026";
const TOTAL_COUNTRIES = 12;

const PIRATE_MISSIONS = {
  vietnam: "Mekong Treasure Voyage",
  china: "Great Wall Treasure Run",
  japan: "Mount Fuji Secret Cave",
  korea: "Seoul Night Treasure Hunt",
  usa: "Liberty Island Mystery",
  australia: "Kangaroo Outback Rescue",
  uk: "Royal Crown Treasure",
  france: "Eiffel Tower Secret Vault",
  netherlands: "Windmill Treasure Mystery",
  egypt: "Pyramid Escape",
  russia: "Frozen Crystal Castle",
  mexico: "Lost Maya Temple"
};

const PIRATE_GATES = {
  1: { title: "DISCOVER THE CLUE", icon: "🧩", label: "Dấu vết bí mật" },
  2: { title: "TREASURE MATCH", icon: "🗺️", label: "Ghép bản đồ" },
  3: { title: "HIDDEN TREASURE SEARCH", icon: "🔎", label: "Tìm kho báu" },
  4: { title: "PIRATE PUZZLE", icon: "🗝️", label: "Mật mã hải tặc" },
  5: { title: "FINAL TREASURE QUEST", icon: "🏴‍☠️", label: "Nhiệm vụ cuối" }
};

const HIDDEN_SCENE_POSITIONS = [
  [12, 22], [36, 18], [62, 21], [82, 28], [24, 48],
  [52, 48], [75, 52], [15, 72], [42, 76], [66, 72], [88, 70]
];

const HIDDEN_DISTRACTORS = [
  { icon: "🐼", label: "Gấu trúc" },
  { icon: "🗼", label: "Tháp Eiffel" },
  { icon: "🦘", label: "Kangaroo" },
  { icon: "🍣", label: "Sushi" },
  { icon: "🔺", label: "Kim tự tháp" },
  { icon: "🪙", label: "Xu hải tặc" },
  { icon: "🧭", label: "La bàn" },
  { icon: "🗝️", label: "Chìa khóa" },
  { icon: "🧜", label: "Nàng tiên cá" },
  { icon: "🐚", label: "Vỏ sò" },
  { icon: "⚓", label: "Mỏ neo" },
  { icon: "🦜", label: "Vẹt hải tặc" }
];

const app = document.getElementById("app");
const state = {
  selectedPlayer: null,
  selectedCountry: null,
  currentGate: 1,
  currentQuestionIndex: 0,
  currentScore: 0,
  answered: false,
  selectedLeft: null,
  matchedIds: [],
  foundIds: [],
  hiddenWrongIds: [],
  hiddenFeedback: "",
  shuffledAnswers: {},
  gateAnswers: [],
  progressData: loadProgress()
};

function defaultProgress() {
  return Object.fromEntries(Object.keys(PLAYERS).map(id => [id, {
    score: 0,
    stars: 0,
    diamonds: 0,
    goldCoins: 0,
    pirateKeys: 0,
    compassFragments: 0,
    mapPieces: [],
    finalCompleted: false,
    badges: [],
    stamps: [],
    countries: {},
    correctAnswers: [],
    wrongAnswers: [],
    failedMissions: [],
    history: []
  }]));
}

function normalizeProgressData(saved = {}) {
  const base = defaultProgress();
  const countryIds = typeof COUNTRIES !== "undefined" ? COUNTRIES.map(c => c.id) : [];
  Object.keys(base).forEach(id => {
    base[id] = { ...base[id], ...(saved[id] || {}) };
    base[id].badges ||= [];
    base[id].stamps ||= [];
    base[id].mapPieces ||= [];
    base[id].countries ||= {};
    base[id].correctAnswers ||= [];
    base[id].wrongAnswers ||= [];
    base[id].failedMissions ||= [];
    base[id].history ||= [];
    base[id].goldCoins ||= 0;
    base[id].pirateKeys ||= 0;
    base[id].compassFragments ||= 0;
    base[id].finalCompleted ||= false;
    countryIds.forEach(countryId => {
      if ((base[id].stamps.includes(countryId) || base[id].countries[countryId]?.completed) && !base[id].mapPieces.includes(countryId)) {
        base[id].mapPieces.push(countryId);
      }
    });
  });
  return base;
}

function loadProgress() {
  try {
    return normalizeProgressData(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {});
  } catch {
    return defaultProgress();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progressData));
}

function player() {
  return PLAYERS[state.selectedPlayer];
}

function avatarMarkup(person, size = "") {
  const sizeClass = size ? ` ${size}` : "";
  const fallback = person.avatar || person.name.slice(0, 1);
  if (!person.avatarImage) {
    return `<div class="avatar${sizeClass}">${fallback}</div>`;
  }
  return `<div class="avatar${sizeClass}"><img src="${person.avatarImage}" alt="${person.name}" onerror="this.remove(); this.parentElement.textContent='${fallback}'"></div>`;
}

function progress() {
  state.progressData = normalizeProgressData(state.progressData);
  return state.progressData[state.selectedPlayer];
}

function country() {
  return COUNTRIES.find(item => item.id === state.selectedCountry);
}

function countryCode(countryItem) {
  const codes = {
    vietnam: "VN",
    china: "CN",
    japan: "JP",
    korea: "KR",
    usa: "US",
    australia: "AU",
    uk: "GB",
    france: "FR",
    netherlands: "NL",
    egypt: "EG",
    russia: "RU",
    mexico: "MX"
  };
  return codes[countryItem.id] || countryItem.id.slice(0, 2).toUpperCase();
}

function pirateMapImage() {
  return state.selectedPlayer === "PICA"
    ? "assets/Pirate King Maps/pica maps.png"
    : "assets/Pirate King Maps/poca maps.png";
}

function mapPosition(countryItem) {
  const positions = {
    usa: [21, 39],
    mexico: [18, 56],
    uk: [42, 28],
    netherlands: [51, 30],
    france: [48, 41],
    russia: [64, 22],
    egypt: [57, 54],
    china: [70, 34],
    korea: [80, 40],
    japan: [85, 30],
    vietnam: [73, 55],
    australia: [81, 75]
  };
  return positions[countryItem.id] || countryItem.position;
}

function flagScreenClass() {
  return `screen flag-screen flag-${country().id}`;
}

function countryIntroScene(countryItem) {
  const scenes = {
    vietnam: { landmark: "🛶", accent: "🌾", label: "Sông Mekong", ground: "rice" },
    china: { landmark: "🧱", accent: "🐼", label: "Vạn Lý Trường Thành", ground: "hills" },
    japan: { landmark: "🗻", accent: "🌸", label: "Núi Phú Sĩ", ground: "fuji" },
    korea: { landmark: "🗼", accent: "🎤", label: "N Seoul Tower", ground: "city" },
    usa: { landmark: "🚀", accent: "🗽", label: "NASA Mission", ground: "space" },
    australia: { landmark: "🦘", accent: "🎵", label: "Sydney Adventure", ground: "beach" },
    uk: { landmark: "👑", accent: "🏰", label: "Royal Castle", ground: "castle" },
    france: { landmark: "🗼", accent: "🥐", label: "Tháp Eiffel", ground: "paris" },
    netherlands: { landmark: "🌬️", accent: "🌷", label: "Cối xay gió", ground: "tulip" },
    egypt: { landmark: "🔺", accent: "🐫", label: "Kim tự tháp", ground: "desert" },
    russia: { landmark: "🏰", accent: "❄️", label: "Lâu đài tuyết", ground: "snow" },
    mexico: { landmark: "🛕", accent: "🌵", label: "Đền Maya", ground: "temple" }
  };
  return scenes[countryItem.id] || { landmark: countryItem.icon, accent: countryItem.symbols[0][0], label: countryItem.symbols[0][1], ground: "hills" };
}

function countryProgress(countryId = state.selectedCountry) {
  const data = progress();
  data.countries[countryId] ||= { completedGates: [], currentGate: 1, completed: false };
  data.countries[countryId].completedGates ||= [];
  data.countries[countryId].currentGate ||= 1;
  data.countries[countryId].completed ||= false;
  return data.countries[countryId];
}

function render(html) {
  app.innerHTML = html;
}

function playTone(kind) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = kind === "correct" ? 740 : kind === "wrong" ? 180 : 420;
  gain.gain.value = 0.035;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);
  osc.stop(ctx.currentTime + 0.18);
}

function header(title = "") {
  const p = player();
  const data = progress();
  const stampCount = data.stamps.length;
  const countryName = country()?.name || "Bản đồ kho báu thế giới";
  return `
    <header class="topbar">
      <div class="identity">
        ${avatarMarkup(p)}
        <div><strong>${p.name}</strong><div class="tiny">${title || countryName}</div></div>
      </div>
      <div class="stats">
        <span class="stat-pill">🪙 ${data.goldCoins}</span>
        <span class="stat-pill">⭐ ${data.stars}</span>
        <span class="stat-pill">💎 ${data.diamonds}</span>
        <span class="stat-pill">🗝️ ${data.pirateKeys}</span>
        <span class="stat-pill">🗺️ ${data.mapPieces.length}/${TOTAL_COUNTRIES}</span>
        <span class="stat-pill">🛂 ${stampCount}/12</span>
      </div>
    </header>`;
}

function footer(extra = "") {
  return `
    <footer class="footerbar">
      <div class="nav-actions">${extra}</div>
      <div class="nav-actions">
        <button class="small-btn" onclick="showTreasureMap()">🗺️ Bản đồ báu</button>
        <button class="small-btn" onclick="showPassport()">🛂 Hộ chiếu</button>
        <button class="small-btn" onclick="showParentReport()">📋 Báo cáo</button>
        <button class="small-btn" onclick="showSettings()">⚙️ Cài đặt</button>
      </div>
    </footer>`;
}

function showWelcome() {
  state.selectedPlayer = null;
  render(`
    <section class="screen hero">
      <div class="hero-stage">
        <div class="brand">
          <h1>🏴‍☠️ Pirate Treasure Edition</h1>
          <p>Chọn thuyền trưởng, đi vòng quanh thế giới, thu thập dấu hộ chiếu và 12 mảnh bản đồ kho báu của Pirate King.</p>
        </div>
        <div class="player-grid">
          ${Object.values(PLAYERS).map(p => `
            <button class="player-card" onclick="selectPlayer('${p.id}')">
              ${avatarMarkup(p, "big")}
              <div>
                <strong>${p.name}</strong>
                <span>${p.born} • ${p.nationality}</span>
                <div class="tiny">${p.intro}</div>
              </div>
              <div class="arrow">›</div>
            </button>`).join("")}
        </div>
      </div>
    </section>`);
}

function selectPlayer(id) {
  state.selectedPlayer = id;
  showWorldMap();
}

function showWorldMap() {
  const data = progress();
  render(`
    <section class="screen pirate-screen">
      ${header("Bản đồ kho báu thế giới")}
      <div class="main-area map-layout">
        <div class="world-map">
          <div class="map-title-card">
            <strong>World Treasure Map</strong>
            <span>${player().name} đang tìm ${TOTAL_COUNTRIES - data.mapPieces.length} mảnh bản đồ còn lại</span>
          </div>
          ${COUNTRIES.map(c => {
            const pos = mapPosition(c);
            const cp = progress().countries[c.id];
            const completedClass = cp?.completed ? " completed" : "";
            const piece = data.mapPieces.includes(c.id) ? " 🗺️" : "";
            return `<button class="map-pin flag-chip flag-${c.id}${completedClass}" style="left:${pos[0]}%;top:${pos[1]}%" onclick="selectCountry('${c.id}')" aria-label="${c.viName}"><span>${countryCode(c)}${piece}</span></button>`;
          }).join("")}
        </div>
        <div class="country-list">
          ${COUNTRIES.map(c => {
            const cp = progress().countries[c.id];
            const hasPiece = data.mapPieces.includes(c.id);
            const status = cp?.completed ? "Đã có dấu + mảnh bản đồ" : cp?.completedGates?.length ? "Tiếp tục săn báu" : "Bắt đầu truy tìm";
            const statusIcon = cp?.completed ? "✅" : cp?.completedGates?.length ? "🧭" : "🗝️";
            return `<button class="country-tile flag-card flag-${c.id} ${cp?.completed ? "completed" : ""}" onclick="selectCountry('${c.id}')">
              <div class="flag-badge flag-chip flag-${c.id}"><span>${countryCode(c)}</span></div>
              <div class="country-card-copy"><strong>${c.viName}</strong><span>${statusIcon} ${status}${hasPiece ? " 🗺️" : ""}</span></div>
            </button>`;
          }).join("")}
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showWelcome()">👤 Đổi nhân vật</button>`)}
    </section>`);
}

function selectCountry(id) {
  state.selectedCountry = id;
  state.currentGate = countryProgress(id).currentGate || 1;
  showCountryIntro();
}

function mapInvitePlayerName() {
  return player().name.charAt(0) + player().name.slice(1).toLowerCase();
}

function showMapPieceInvite(id) {
  state.selectedCountry = id;
  state.currentGate = countryProgress(id).currentGate || 1;
  const c = country();
  const scene = countryIntroScene(c);
  const mission = PIRATE_MISSIONS[c.id] || c.finalQuest;
  const displayName = mapInvitePlayerName();
  render(`
    <section class="${flagScreenClass()}">
      ${header("Mảnh bản đồ bí mật")}
      <div class="main-area map-invite-wrap">
        <div class="map-invite-card">
          <div class="map-invite-sparkles">
            <span>${c.icon}</span>
            <span>${scene.landmark}</span>
            <span>${c.symbols[0]?.[0] || c.flag}</span>
          </div>
          <div class="map-invite-country flag-chip flag-${c.id}">
            <span>${countryCode(c)}</span>
          </div>
          <h1>Mời ${displayName} khám phá đất nước ${c.viName}</h1>
          <p>Mảnh bản đồ vừa sáng lên! Pirate King để lại một dấu hiệu ở <strong>${scene.label}</strong>. Hãy bắt đầu chuyến săn kho báu tại ${c.viName}.</p>
          <div class="map-invite-icons">
            ${c.symbols.slice(0, 4).map(symbol => `<div><b>${symbol[0]}</b><span>${symbol[1]}</span></div>`).join("")}
          </div>
          <div class="nav-actions">
            <button class="primary" onclick="showCountryIntro()">Khám phá</button>
            <button class="small-btn" onclick="showTreasureMap()">Quay lại bản đồ</button>
          </div>
          <em>${mission}</em>
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showTreasureMap()">← Bản đồ kho báu</button>`)}
    </section>`);
}

function showCountryIntro() {
  const c = country();
  const scene = countryIntroScene(c);
  const mission = PIRATE_MISSIONS[c.id] || c.finalQuest;
  render(`
    <section class="${flagScreenClass()}">
      ${header(`Captain ${player().name} • ${c.name}`)}
      <div class="main-area intro-layout">
        <div class="poster country-poster scene-${scene.ground}">
          <div class="scene-sky">
            <div class="scene-cloud cloud-one"></div>
            <div class="scene-cloud cloud-two"></div>
            <div class="scene-accent accent-left">${scene.accent}</div>
            <div class="scene-landmark"><span>${scene.landmark}</span><strong>${scene.label}</strong></div>
            <div class="scene-player">
              ${avatarMarkup(player(), "big")}
              <strong>${player().name}</strong>
            </div>
            <div class="scene-caption"><span>${countryCode(c)}</span><b>${c.viName}</b></div>
          </div>
        </div>
        <div class="panel mission-briefing">
          <h2>🏴‍☠️ ${mission}</h2>
          <p><strong>Captain ${player().name}!</strong></p>
          <p>Một chiếc rương bí ẩn vừa xuất hiện gần <strong>${scene.label}</strong>. Pirate King tin rằng một mảnh bản đồ kho báu đang được giấu ở ${c.viName}.</p>
          <div class="icon-cloud">
            ${c.symbols.map(symbol => `<div class="feature"><b>${symbol[0]}</b><span>${symbol[1]}</span></div>`).join("")}
          </div>
          <p>${c.intro}</p>
          <button class="primary" onclick="showChallengeMap()">🧭 BẮT ĐẦU SĂN KHO BÁU</button>
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showWorldMap()">← Bản đồ thế giới</button>`)}
    </section>`);
}

function showChallengeMap() {
  const cp = countryProgress();
  render(`
    <section class="${flagScreenClass()}">
      ${header(`Hành trình kho báu ${country().name}`)}
      <div class="main-area">
        <div class="challenge-path">
          <div class="gate-node done"><div class="gate-icon">🏴‍☠️</div><strong>ĐỔ BỘ</strong><span>Captain ${player().name}</span></div>
          ${GATES.map(g => {
            const done = cp.completedGates.includes(g.id);
            const current = cp.currentGate === g.id && !done;
            const locked = g.id > cp.currentGate;
            const pirateGate = PIRATE_GATES[g.id];
            return `
              <button class="gate-node ${done ? "done" : current ? "current" : locked ? "locked" : ""}" ${locked ? "disabled" : ""} onclick="startGate(${g.id})">
                <div class="gate-icon">${done ? "✅" : locked ? "🔒" : pirateGate.icon}</div>
                <strong>${pirateGate.title}</strong>
                <span>${pirateGate.label}</span>
              </button>`;
          }).join("")}
          <button class="gate-node ${cp.completed ? "done" : cp.completedGates.length >= 5 ? "current" : "locked"}" ${cp.completedGates.length >= 5 ? "" : "disabled"} onclick="showTreasureChest()">
            <div class="gate-icon">${cp.completed ? "🗺️" : "🧰"}</div><strong>RƯƠNG BÁU</strong><span>${cp.completed ? "Đã lấy mảnh bản đồ" : "Mở khóa kho báu"}</span>
          </button>
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showCountryIntro()">← Briefing</button><button class="small-btn" onclick="showWorldMap()">Bản đồ</button>`)}
    </section>`);
}

function startGate(gateId) {
  state.currentGate = gateId;
  state.currentQuestionIndex = 0;
  state.currentScore = 0;
  state.answered = false;
  state.selectedLeft = null;
  state.matchedIds = [];
  state.foundIds = [];
  state.hiddenWrongIds = [];
  state.hiddenFeedback = "";
  state.gateAnswers = [];
  showGate();
}

function gateItems() {
  return country().gates[state.selectedPlayer][state.currentGate];
}

function showGate() {
  const gate = GATES[state.currentGate - 1];
  const items = gateItems();
  const type = items[0].type;
  if (type === "match") return showMatchGate(gate, items);
  if (type === "hidden") return showHiddenGate(gate, items);
  return showMcqGate(gate, items);
}

function showMcqGate(gate, items) {
  const q = items[state.currentQuestionIndex];
  const shuffled = shuffledOptions(q);
  const nextDisabled = state.answered ? "" : "disabled";
  const pirateGate = PIRATE_GATES[gate.id];
  render(`
    <section class="${flagScreenClass()}">
      ${header(`${pirateGate.title} • Gate ${gate.id}`)}
      <div class="main-area question-card">
        <div class="mission-label">🏴‍☠️ Captain ${player().name}, mở manh mối ${state.currentQuestionIndex + 1}/5</div>
        <p class="prompt">${q.prompt}</p>
        <div class="question-visual"><div class="big-emoji">${q.visual}</div></div>
        <div>
          <div class="answers">
            ${shuffled.options.map((option, index) => `<button class="answer-btn" onclick="answerMcq(${index})">${option}</button>`).join("")}
          </div>
          <div id="feedback" class="feedback"></div>
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showChallengeMap()">← Bản đồ</button><button id="nextBtn" class="primary" ${nextDisabled} onclick="nextQuestion()">Tiếp theo</button>`)}
    </section>`);
}

function questionKey() {
  return `${state.selectedCountry}-${state.selectedPlayer}-${state.currentGate}-${state.currentQuestionIndex}`;
}

function shuffledOptions(q) {
  const key = questionKey();
  if (!state.shuffledAnswers[key]) {
    const original = q.options.map((option, index) => ({ option, originalIndex: index }));
    const seed = [...key].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const decorated = original
      .map((item, index) => ({ ...item, sort: (seed * (index + 3) + index * 17) % 97 }))
      .sort((a, b) => a.sort - b.sort || a.originalIndex - b.originalIndex);
    state.shuffledAnswers[key] = {
      options: decorated.map(item => item.option),
      answer: decorated.findIndex(item => item.originalIndex === q.answer),
      originalIndexes: decorated.map(item => item.originalIndex)
    };
  }
  return state.shuffledAnswers[key];
}

function answerMcq(index) {
  if (state.answered) return;
  const q = gateItems()[state.currentQuestionIndex];
  const shuffled = shuffledOptions(q);
  const buttons = [...document.querySelectorAll(".answer-btn")];
  const correct = index === shuffled.answer;
  state.answered = true;
  if (correct) state.currentScore += 1;
  buttons[index].classList.add(correct ? "correct" : "wrong");
  buttons[shuffled.answer].classList.add("correct");
  document.getElementById("feedback").textContent = `${correct ? "Kho báu sáng lên!" : "Mật mã chưa đúng."} ${q.explanation}`;
  document.getElementById("nextBtn").disabled = false;
  recordAnswer(q, correct, shuffled.options[index], shuffled.options[shuffled.answer]);
  playTone(correct ? "correct" : "wrong");
}

function nextQuestion() {
  const items = gateItems();
  if (state.currentQuestionIndex < items.length - 1) {
    state.currentQuestionIndex += 1;
    state.answered = false;
    showGate();
  } else {
    finishGate();
  }
}

function showMatchGate(gate, items) {
  const shuffledRight = [...items].sort((a, b) => a.right.localeCompare(b.right));
  const pirateGate = PIRATE_GATES[gate.id];
  const completeDisabled = state.matchedIds.length >= 5 ? "" : "disabled";
  const leftSlots = items.map(item => {
    const matched = state.matchedIds.includes(item.id);
    return `<div class="match-slot ${matched ? "matched-slot" : ""}">
      <button class="match-item ${matched ? "matched" : ""}" aria-disabled="${matched}" onclick="selectMatchLeft('${item.id}')">
        <span>${item.left}</span>${matched ? `<small>Đã ghép</small>` : ""}
      </button>
    </div>`;
  }).join("");
  const rightSlots = shuffledRight.map(item => {
    const matched = state.matchedIds.includes(item.id);
    return `<div class="match-slot ${matched ? "matched-slot" : ""}">
      <button class="match-item ${matched ? "matched" : ""}" aria-disabled="${matched}" onclick="selectMatchRight('${item.id}')">
        <span>${item.right}</span>${matched ? `<small>Đã ghép</small>` : ""}
      </button>
    </div>`;
  }).join("");
  render(`
    <section class="${flagScreenClass()}">
      ${header(`${pirateGate.title} • Gate ${gate.id}`)}
      <div class="main-area question-card">
        <p class="prompt">Captain ${player().name}, sửa bản đồ cũ: chạm vào một hình bên trái, rồi chạm vào manh mối đúng bên phải.</p>
        <div class="question-visual">
          <div class="match-grid">
            <div class="match-col">${leftSlots}</div>
            <div class="match-col">${rightSlots}</div>
          </div>
        </div>
        <div id="feedback" class="feedback">Đã ghép ${state.matchedIds.length}/5 mảnh bản đồ</div>
      </div>
      ${footer(`<button class="small-btn" onclick="showChallengeMap()">← Bản đồ</button><button class="primary" ${completeDisabled} onclick="finishGate()">Hoàn thành</button>`)}
    </section>`);
}

function selectMatchLeft(id) {
  if (state.matchedIds.includes(id)) return;
  state.selectedLeft = id;
  document.querySelectorAll(".match-item").forEach(item => item.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
}

function selectMatchRight(id) {
  if (!state.selectedLeft || state.matchedIds.includes(id)) return;
  const correct = state.selectedLeft === id;
  const item = gateItems().find(entry => entry.id === id);
  if (correct) {
    state.matchedIds.push(id);
    state.currentScore += 1;
    recordAnswer({ ...item, prompt: `${item.left} -> ${item.right}`, explanation: "Đã ghép đúng cặp.", topic: "country" }, true, item.right, item.right);
    playTone("correct");
  } else {
    const left = gateItems().find(entry => entry.id === state.selectedLeft);
    recordAnswer({ ...left, prompt: `${left.left} -> ?`, explanation: `Đáp án đúng là ${left.right}.`, topic: "country" }, false, item.right, left.right);
    playTone("wrong");
    event.currentTarget.classList.add("wrong");
    document.getElementById("feedback").textContent = "Mảnh này chưa khớp, Captain thử lại nhé.";
    state.selectedLeft = null;
    setTimeout(() => showMatchGate(GATES[state.currentGate - 1], gateItems()), 220);
    return;
  }
  state.selectedLeft = null;
  showMatchGate(GATES[state.currentGate - 1], gateItems());
}

function hiddenItemLabel(item) {
  const c = country();
  const symbol = c.symbols.find(entry => entry[0] === item.icon);
  if (symbol) return symbol[1];
  const pair = c.gates[state.selectedPlayer][2]?.find(entry => entry.left === item.icon);
  if (pair) return pair.right;
  return item.label || item.icon;
}

function hiddenSceneItems(items) {
  const targetIcons = new Set(items.map(item => item.icon));
  const targets = items.map((item, index) => ({
    ...item,
    label: hiddenItemLabel(item),
    isTarget: true,
    x: item.x ?? HIDDEN_SCENE_POSITIONS[index][0],
    y: item.y ?? HIDDEN_SCENE_POSITIONS[index][1]
  }));
  const distractors = HIDDEN_DISTRACTORS
    .filter(item => !targetIcons.has(item.icon))
    .slice(0, 6)
    .map((item, index) => ({
      id: `d${index + 1}`,
      icon: item.icon,
      label: item.label,
      isTarget: false,
      x: HIDDEN_SCENE_POSITIONS[index + targets.length][0],
      y: HIDDEN_SCENE_POSITIONS[index + targets.length][1],
      topic: "observation",
      explanation: "Đây là vật gây nhiễu trong cảnh."
    }));
  return [...targets, ...distractors];
}

function showHiddenGate(gate, items) {
  const sceneItems = hiddenSceneItems(items);
  const targetItems = sceneItems.filter(item => item.isTarget);
  const pirateGate = PIRATE_GATES[gate.id];
  const completeDisabled = state.foundIds.length >= 5 ? "" : "disabled";
  const shortPrompt = `Captain ${player().name}, trong cảnh có nhiều vật phẩm từ khắp thế giới. Hãy tìm đúng 5 vật thuộc ${country().viName}.`;
  render(`
    <section class="${flagScreenClass()}">
      ${header(`${pirateGate.title} • Gate ${gate.id}`)}
      <div class="main-area question-card">
        <p class="prompt">🏝️ ${shortPrompt}</p>
        <div class="target-checklist">
          ${targetItems.map(item => `<span class="${state.foundIds.includes(item.id) ? "checked" : ""}">${item.icon} ${item.label}</span>`).join("")}
        </div>
        <div class="question-visual">
          <div class="hidden-scene">
            ${sceneItems.map(item => `<button class="hidden-item ${state.foundIds.includes(item.id) ? "found" : ""} ${state.hiddenWrongIds.includes(item.id) ? "miss" : ""}" style="left:${item.x}%;top:${item.y}%" onclick="findHidden('${item.id}')" aria-label="${item.label}">${item.icon}</button>`).join("")}
          </div>
        </div>
        <div class="feedback">${state.hiddenFeedback || `Đã tìm ${state.foundIds.length}/5 báu vật đúng`}</div>
      </div>
      ${footer(`<button class="small-btn" onclick="showChallengeMap()">← Bản đồ</button><button class="primary" ${completeDisabled} onclick="finishGate()">Hoàn thành</button>`)}
    </section>`);
}

function findHidden(id) {
  if (state.foundIds.includes(id)) return;
  const sceneItem = hiddenSceneItems(gateItems()).find(entry => entry.id === id);
  if (!sceneItem) return;
  if (!sceneItem.isTarget) {
    if (!state.hiddenWrongIds.includes(id)) state.hiddenWrongIds.push(id);
    state.hiddenFeedback = `Chưa đúng, ${player().name}! ${sceneItem.label} là vật gây nhiễu.`;
    recordAnswer({ ...sceneItem, prompt: `Captain ${player().name} chọn ${sceneItem.icon}`, explanation: "Đây là vật gây nhiễu, chưa phải mục tiêu cần tìm.", topic: "observation" }, false, sceneItem.label, "Một trong 5 vật phẩm mục tiêu");
    playTone("wrong");
    showHiddenGate(GATES[state.currentGate - 1], gateItems());
    return;
  }
  state.foundIds.push(id);
  state.currentScore += 1;
  state.hiddenFeedback = `Tìm đúng rồi! ${sceneItem.label} là báu vật mục tiêu.`;
  recordAnswer({ ...sceneItem, prompt: `Captain ${player().name} tìm ${sceneItem.icon}`, explanation: "Đã tìm đúng báu vật.", topic: "observation" }, true, sceneItem.label, sceneItem.label);
  playTone("correct");
  showHiddenGate(GATES[state.currentGate - 1], gateItems());
}

function recordAnswer(q, correct, chosen, expected) {
  const entry = {
    player: player().name,
    country: country().name,
    gate: state.currentGate,
    prompt: q.prompt,
    chosen,
    expected,
    correct,
    topic: q.topic || "country",
    explanation: q.explanation || "",
    time: new Date().toISOString()
  };
  state.gateAnswers.push(entry);
}

function finishGate() {
  const passed = state.currentScore >= 3;
  const data = progress();
  data.history.push({
    country: country().name,
    gate: state.currentGate,
    score: state.currentScore,
    passed,
    time: new Date().toISOString()
  });
  state.gateAnswers.forEach(entry => {
    data[entry.correct ? "correctAnswers" : "wrongAnswers"].push(entry);
  });
  if (passed) {
    const cp = countryProgress();
    if (!cp.completedGates.includes(state.currentGate)) {
      cp.completedGates.push(state.currentGate);
      data.score += state.currentScore * 20;
      data.stars += state.currentScore;
      data.diamonds += Math.max(1, state.currentScore - 2);
      data.goldCoins += state.currentScore * 10;
      data.pirateKeys += 1;
      data.compassFragments += 1;
    }
    cp.currentGate = Math.min(5, state.currentGate + 1);
  } else {
    data.failedMissions.push({
      country: country().name,
      gate: state.currentGate,
      mission: PIRATE_GATES[state.currentGate].title,
      score: state.currentScore,
      time: new Date().toISOString()
    });
  }
  saveProgress();
  showGateResult(passed);
}

function showGateResult(passed) {
  const c = country();
  const pirateGate = PIRATE_GATES[state.currentGate];
  render(`
    <section class="screen pirate-screen">
      ${header(`Kết quả ${pirateGate.title}`)}
      <div class="main-area result-grid">
        <div class="score-burst">
          <div><strong>${state.currentScore}/5</strong><p>${passed ? "MỞ KHÓA" : "CHƯA MỞ"}</p></div>
        </div>
        <div class="panel">
          <h2>${passed ? `Captain ${player().name} đã mở khóa manh mối!` : `Captain ${player().name}, mật mã này cần thử lại.`}</h2>
          <p>Phần thưởng: 🪙 ${state.currentScore * 10} • ⭐ ${state.currentScore} • 💎 ${Math.max(0, state.currentScore - 2)} • 🗝️ ${passed ? 1 : 0} • 🧭 ${passed ? 1 : 0}</p>
          <div class="nav-actions">
            ${passed && state.currentGate < 5 ? `<button class="primary" onclick="startGate(${state.currentGate + 1})">Cửa tiếp theo</button>` : ""}
            ${passed && state.currentGate === 5 ? `<button class="primary" onclick="completeCountry()">Mở rương kho báu</button>` : ""}
            ${!passed ? `<button class="primary" onclick="startGate(${state.currentGate})">Chơi lại</button>` : ""}
            <button class="small-btn" onclick="showChallengeMap()">Về bản đồ</button>
          </div>
          <p class="tiny">🏴‍☠️ ${PIRATE_MISSIONS[c.id] || c.finalQuest}</p>
        </div>
      </div>
      ${footer()}
    </section>`);
}

function completeCountry() {
  awardCountryRewards();
  saveProgress();
  showTreasureChest();
}

function awardCountryRewards() {
  const c = country();
  const data = progress();
  const cp = countryProgress();
  if (cp.completed) return;
  cp.completed = true;
  cp.currentGate = 5;
  if (!data.stamps.includes(c.id)) data.stamps.push(c.id);
  if (!data.badges.includes(c.badge)) data.badges.push(c.badge);
  if (!data.mapPieces.includes(c.id)) data.mapPieces.push(c.id);
  data.score += 100;
  data.stars += 5;
  data.diamonds += 3;
  data.goldCoins += 100;
  data.pirateKeys += 1;
}

function showTreasureChest() {
  const c = country();
  const cp = countryProgress();
  if (!cp.completed && cp.completedGates.length >= 5) {
    awardCountryRewards();
    saveProgress();
  }
  render(`
    <section class="${flagScreenClass()}">
      ${header("Rương kho báu hải tặc")}
      <div class="main-area treasure">
        <div class="stars">${Array.from({ length: 10 }, (_, i) => `<span style="--i:${i}">${i % 3 === 0 ? "🪙" : i % 3 === 1 ? "💎" : "⭐"}</span>`).join("")}</div>
        <div>
          <div class="chest">🧰✨🗺️</div>
          <h1>Captain ${player().name} mở rương!</h1>
          <p>${player().name} đã nhận ${c.badge}, dấu hộ chiếu ${c.flag}, 1 mảnh bản đồ kho báu, xu vàng và kim cương.</p>
          <div class="nav-actions">
            <button class="primary" onclick="showTreasureMap()">Xem bản đồ báu</button>
            <button class="primary" onclick="showPassport()">Xem hộ chiếu</button>
            <button class="small-btn" onclick="showWorldMap()">Khám phá nước khác</button>
          </div>
        </div>
      </div>
      ${footer()}
    </section>`);
}

function showTreasureMap() {
  const data = progress();
  const complete = data.stamps.length >= TOTAL_COUNTRIES && data.mapPieces.length >= TOTAL_COUNTRIES;
  render(`
    <section class="screen pirate-screen">
      ${header("Treasure Map")}
      <div class="main-area treasure-map-layout">
        <div class="panel map-panel">
          <h2>🗺️ Bản đồ kho báu của Pirate King</h2>
          <p>Captain ${player().name} đã tìm được <strong>${data.mapPieces.length}/${TOTAL_COUNTRIES}</strong> mảnh bản đồ và <strong>${data.stamps.length}/${TOTAL_COUNTRIES}</strong> dấu hộ chiếu.</p>
          <div class="map-piece-board ${complete ? "complete" : ""}" style="--pirate-map-image: url('${pirateMapImage()}')">
            <div class="pirate-map-reveal" aria-hidden="true"></div>
            <div class="map-piece-grid">
            ${COUNTRIES.map((c, index) => {
              const earned = data.mapPieces.includes(c.id);
              return `<button class="map-piece ${earned ? "earned" : "locked"}" onclick="showMapPieceInvite('${c.id}')" aria-label="Mời ${mapInvitePlayerName()} khám phá đất nước ${c.viName}">
                <span>${earned ? "✓" : index + 1}</span>
                <strong>${countryCode(c)}</strong>
                <em>${c.viName}</em>
              </button>`;
            }).join("")}
            </div>
          </div>
        </div>
        <div class="panel island-panel ${complete ? "unlocked" : "locked"}">
          <div class="island-art">🏝️🧰🏴‍☠️</div>
          <h2>Pirate King's Island</h2>
          <p>${complete ? `Cánh cổng cuối đã mở cho Captain ${player().name}!` : `Cần đủ ${TOTAL_COUNTRIES} mảnh bản đồ và ${TOTAL_COUNTRIES} dấu hộ chiếu để mở đảo cuối.`}</p>
          ${complete ? `<button class="primary" onclick="showPirateIsland()">Vào đảo cuối</button>` : `<button class="primary" disabled>Đảo còn khóa</button>`}
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showWorldMap()">← Bản đồ thế giới</button>`)}
    </section>`);
}

function showPirateIsland() {
  const data = progress();
  const complete = data.stamps.length >= TOTAL_COUNTRIES && data.mapPieces.length >= TOTAL_COUNTRIES;
  if (!complete) return showTreasureMap();
  if (!data.finalCompleted) {
    data.finalCompleted = true;
    if (!data.badges.includes("Pirate Master")) data.badges.push("Pirate Master");
    if (!data.badges.includes("World Explorer 2026")) data.badges.push("World Explorer 2026");
    data.score += 500;
    data.goldCoins += 500;
    data.diamonds += 12;
    data.stars += 12;
    saveProgress();
  }
  render(`
    <section class="screen final-island">
      ${header("Pirate King's Island")}
      <div class="main-area treasure">
        <div class="stars">${Array.from({ length: 14 }, (_, i) => `<span style="--i:${i}">${i % 2 ? "🎆" : "⭐"}</span>`).join("")}</div>
        <div>
          <div class="chest giant">🏆🧰🏴‍☠️</div>
          <h1>World Explorer 2026</h1>
          <h2>🏴‍☠️ Pirate Master ${player().name}</h2>
          <p>${player().name} đã ghép đủ 12 mảnh bản đồ, mở đảo Pirate King và hoàn thành kho báu mùa hè.</p>
          <div class="nav-actions">
            <button class="primary" onclick="showPassport()">Xem huy hiệu</button>
            <button class="small-btn" onclick="showWorldMap()">Trở về bản đồ</button>
          </div>
        </div>
      </div>
      ${footer()}
    </section>`);
}

function showPassport() {
  const p = player();
  const data = progress();
  const allDone = data.stamps.length >= TOTAL_COUNTRIES && data.mapPieces.length >= TOTAL_COUNTRIES;
  render(`
    <section class="screen">
      ${header(`Hộ chiếu ${p.name}`)}
      <div class="main-area passport-grid">
        <div class="panel">
          ${avatarMarkup(p, "big")}
          <h2>${p.name}</h2>
          <p>Năm sinh: ${p.born}<br>Quốc tịch: ${p.nationality}<br>${p.intro}</p>
          <p><strong>Tổng cộng:</strong> 🏆 ${data.score} • 🪙 ${data.goldCoins} • ⭐ ${data.stars} • 💎 ${data.diamonds} • 🗝️ ${data.pirateKeys}</p>
          ${allDone ? `<h2>🏆 World Explorer 2026<br>🏴‍☠️ Pirate Master</h2>` : `<p class="tiny">Còn ${TOTAL_COUNTRIES - data.stamps.length} dấu và ${TOTAL_COUNTRIES - data.mapPieces.length} mảnh bản đồ để mở đảo Pirate King.</p>`}
        </div>
        <div class="stamp-grid">
          ${COUNTRIES.map(c => {
            const earned = data.stamps.includes(c.id);
            return `<div class="passport-stamp ${earned ? "" : "locked"}"><div>${earned ? c.flag : "🔒"}<br>${c.viName}<br><span class="tiny">${earned ? "ĐÃ ĐÓNG DẤU" : "Chưa mở"}</span></div></div>`;
          }).join("")}
        </div>
      </div>
      ${footer(`<button class="small-btn" onclick="showWorldMap()">← Bản đồ</button>`)}
    </section>`);
}

function showParentReport() {
  const data = progress();
  const rows = [...data.wrongAnswers, ...data.correctAnswers].slice(-80).reverse();
  const completedCountries = COUNTRIES.filter(c => data.countries[c.id]?.completed).length;
  render(`
    <section class="screen">
      ${header("Báo cáo học tập")}
      <div class="main-area panel">
        <h2>Báo cáo học tập của ${player().name}</h2>
        <div class="report-summary">
          <div><strong>${completedCountries}/${TOTAL_COUNTRIES}</strong><span>Quốc gia hoàn thành</span></div>
          <div><strong>${data.mapPieces.length}/${TOTAL_COUNTRIES}</strong><span>Mảnh bản đồ</span></div>
          <div><strong>${data.pirateKeys}</strong><span>Chìa khóa</span></div>
          <div><strong>${data.goldCoins}</strong><span>Xu vàng</span></div>
          <div><strong>${data.failedMissions.length}</strong><span>Nhiệm vụ cần luyện lại</span></div>
        </div>
        <div class="report-list">
          ${rows.length ? rows.map(row => `
            <div class="report-row">
              <strong>${row.correct ? "✅" : "❌"} ${row.country} • Gate ${row.gate} • ${row.topic}</strong>
              ${row.prompt}<br>
              Đã chọn: ${row.chosen} • Đáp án đúng: ${row.expected}<br>
              <span class="tiny">${new Date(row.time).toLocaleString()}</span>
            </div>`).join("") : `<div class="report-row">Chưa có câu trả lời nào.</div>`}
        </div>
        ${data.failedMissions.length ? `<h3>Nhiệm vụ hải tặc cần luyện lại</h3>
          <div class="report-list compact">
            ${data.failedMissions.slice(-12).reverse().map(row => `<div class="report-row">🏴‍☠️ ${row.country} • Gate ${row.gate} • ${row.mission} • ${row.score}/5<br><span class="tiny">${new Date(row.time).toLocaleString()}</span></div>`).join("")}
          </div>` : ""}
      </div>
      ${footer(`<button class="small-btn" onclick="showWorldMap()">← Bản đồ</button>`)}
    </section>`);
}

function showSettings() {
  render(`
    <section class="screen">
      ${header("Cài đặt")}
      <div class="main-area panel settings-grid">
        <button class="danger" onclick="resetPlayer('POCA')">Xóa tiến độ POCA</button>
        <button class="danger" onclick="resetPlayer('PICA')">Xóa tiến độ PICA</button>
        <button class="danger" onclick="resetAll()">Xóa toàn bộ game</button>
        <button class="primary" onclick="exportReport()">Xuất báo cáo JSON</button>
        <textarea id="exportBox" aria-label="Dữ liệu xuất" readonly></textarea>
      </div>
      ${footer(`<button class="small-btn" onclick="showWorldMap()">← Bản đồ</button>`)}
    </section>`);
}

function resetPlayer(id) {
  state.progressData[id] = defaultProgress()[id];
  saveProgress();
  if (state.selectedPlayer === id) showWorldMap();
}

function resetAll() {
  state.progressData = defaultProgress();
  saveProgress();
  showWelcome();
}

function exportReport() {
  document.getElementById("exportBox").value = JSON.stringify(progress(), null, 2);
}

showWelcome();
