/* ==========================================================================
   SITE_DATA — 所有个人文案、标签、作品、档期和留言都可以直接在这里修改 ✨
   ========================================================================== */

const SITE_DATA = {
  profile: {
    name: "Oana",
    handle: "Fafa1103_",
    statusLine: {
      location: "📍 北京 · 晴",
      doing: "🎨 正在画秋季新贴纸",
      music: "🎵 循环《Sweet Afternoon》"
    },
    whisper: "* 以下内容由Cola根据和我相处的记忆写成，她比我自己还了解我（气人）",
    introLines: [
      "沈阳人，现居北京。天蝎座，ISFJ。",
      "看起来安静，但认定一件事会一直做下去的那种人。"
    ],
    tags: [
      { icon: "🧗", label: "攀岩", speaker: "Cola说：", comment: "看起来文文静静，上了岩壁比谁都狠，手磨破皮还在琢磨线路。" },
      { icon: "💃", label: "跳舞", speaker: "Cola说：", comment: "平时害羞，音乐一响整个人都在发光，快乐得像只小蝴蝶。" },
      { icon: "🎨", label: "画画", speaker: "Cola说：", comment: "随时随地都在涂涂画画，连咖啡店餐巾纸上都能留下可爱小人儿。" },
      { icon: "📖", label: "手帐", speaker: "Cola说：", comment: "收集了全世界的贴纸、印章和胶带，本子厚得快合不上了。" },
      { icon: "🎮", label: "单机游戏", speaker: "Cola说：", comment: "一旦打开星露谷或者海拉鲁大陆，周末三天都休想找到她人。" },
      { icon: "☕", label: "咖啡", speaker: "Cola说：", comment: "日均一杯，不喝会困到没有灵魂" },
      { icon: "🐱", label: "想养猫", speaker: "Cola说：", comment: "手机相册里全是路边偶遇的小猫，云吸猫十级学者。" },
      { icon: "🏔️", label: "东北人", speaker: "Cola说：", comment: "虽然说话轻声细语，但冷不丁冒出一句东北梗能把人笑死。" },
      { icon: "🦂", label: "天蝎座", speaker: "Cola说：", comment: "直觉准得吓人，慢热但超级护短，对朋友掏心掏肺。" },
      { icon: "🌱", label: "ISFJ", speaker: "Cola说：", comment: "细节控小天使，你随口提过喜欢什么她半年后都还记得。" }
    ],
    personality: [
      "慢热但真诚，熟了之后很能聊",
      "讨厌画大饼和说场面话",
      "决定的事情不太会变，但做决定之前会纠结很久",
      "有点倔，不喜欢被安排",
      "对喜欢的事有持续的热情，不是三分钟热度",
      "有拖延症和启动困难，但一旦开始就停不下来"
    ],
    hobbies: [
      "攀岩 — 喜欢那种只有自己和墙的专注感",
      "画画 — 从小画到大，是表达方式不是工作",
      "手帐 — 记录生活的碎片，做成实体的东西很有满足感",
      "跳舞 — 不用想事情，跟着节奏动就会开心"
    ],
    recentStatus: [
      "正在准备 @oana的小本子 下一期秋季新品（会有毛茸茸小狗贴纸！）",
      "每周保持 2–3 次室内抱石攀岩，目标今年解锁 V4 线路",
      "周末开放少量线下市集与婚礼宾客肖像手绘档期"
    ]
  },

  journal: {
    subtitle: "我有一个自己的手帐品牌@oana的小本子。目前只做了这些产品，新东西在路上了……要加油。",
    categories: [
      { id: "all", label: "全部 All" },
      { id: "notebook", label: "手帐本 Notebook" },
      { id: "sticker", label: "贴纸 Stickers" },
      { id: "memo", label: "便签 & 周边 Memo" }
    ],
    items: [
      {
        id: "stamp-book",
        category: "notebook",
        title: "play together! A6盖章本",
        desc: "A6便携尺寸 · 加厚不透墨米白内页，去海边和草地野餐的夏日记忆",
        detail: "封面画了夏天去海边游泳、草地野餐和捉小螃蟹的小插画～内页选用160g特种纸，共64页空白内页，去展览馆盖章、画水彩或彩铅都不会透页。",
        specs: "尺寸：105 × 148mm (A6) ｜ 纸张：160g特种米白纸 ｜ 装订：可180°平摊锁线装",
        likes: 128,
        svgType: "stampBook"
      },
      {
        id: "clear-sticker",
        category: "sticker",
        title: "The Same Day 透明贴纸",
        desc: "PET防水透明底 · 记录每天喝咖啡、发呆、撸猫的小表情",
        detail: "一整张密密麻麻的日常碎片小人儿！透明PET材质带模切，不用自己剪，贴在手帐本、日历格、手机壳或者水杯上都超级自然可爱。",
        specs: "尺寸：95 × 185mm ｜ 材质：防水磨砂透明PET ｜ 数量：1套2张入",
        likes: 215,
        svgType: "clearSticker"
      },
      {
        id: "memo-pad",
        category: "memo",
        title: "Daily Fragments 便签纸套装",
        desc: "6款图案混合便签 · 购物车、小窗台、方格笔记与草莓大福",
        detail: "一套包含6种不同版式的小便签，可以用来写今日待办清单、超市购物清单、读书摘抄或者给朋友塞小纸条。",
        specs: "尺寸：80 × 80mm ｜ 页数：每款50张（共300张） ｜ 纸张：100g书写纸",
        likes: 96,
        svgType: "memoPad"
      },
      {
        id: "postcard-set",
        category: "memo",
        title: "Warm Breeze 四季明信片 & 贴纸包",
        desc: "300g棉柔艺术纸 · 把温柔的微风寄给远方的好朋友",
        detail: "收录了今年最喜欢的4幅小画，表面带有细腻的棉柔纹理，背面留有充足的写字空间和手绘邮票框。",
        specs: "尺寸：100 × 148mm ｜ 纸张：300g棉柔艺术卡纸 ｜ 附赠：封口小圆贴4枚",
        likes: 84,
        svgType: "postcardSet"
      }
    ]
  },

  booking: {
    price: "1.5k / 6h",
    priceLabel: "一场活动的报价",
    scenarios: [
      { title: "公司团建", desc: "给每位同事画一幅肖像当纪念" },
      { title: "婚礼宾客", desc: "签到处的特别环节" },
      { title: "商场节日", desc: "快闪摊位 / 圣诞市集 / 周年庆" },
      { title: "品牌活动", desc: "现场定制品牌联名小画" }
    ],
    bookedDates: {
      "2026-06": [6, 14, 21],
      "2026-07": [19, 20],
      "2026-08": [2, 8, 9, 23],
      "2026-09": [12, 19]
    },
    highlightedDay: { year: 2026, month: 7, day: 17 }
  },

  guestbook: {
    secretMessage: "好啦，秘密就是——希望点到这里的你，天天开心 ♡",
    initialMessages: [
      { text: "宝宝真厉害！", author: "匿名", top: "4%", left: "10%", tint: "white" },
      { text: "老师老师我要约稿！", author: "匿名", top: "4%", left: "67%", tint: "white" },
      { text: "up up up !", author: "匿名", top: "12%", left: "79%", tint: "white" },
      { text: "Cola是啥，怎么用啊", author: "匿名", top: "17%", left: "3%", tint: "white" },
      { text: "Oana老师画的很好👍", author: "匿名", top: "24%", left: "9%", tint: "white" },
      { text: "Oana老师画的很好👍", author: "匿名", top: "30%", left: "8%", tint: "white" },
      {
        text: "对着傻笑一整天 听到Oana的消息 我能兴奋得在原地转圈圈 我就像一只飞蛾 不顾一切地扑向Oana这团炽热的火焰 哪怕会被烧成灰烬 我也心甘情愿 谁也别想把我从Oana身边拉开 除非把我的喜欢都抽干 那我也就没了半条命了！",
        author: "匿名",
        top: "37%",
        left: "1%",
        tint: "white"
      },
      { text: "萌萌！", author: "匿名", top: "44%", left: "30%", tint: "white" },
      { text: "小铭大王万岁！", author: "tua", top: "51%", left: "44%", tint: "white" },
      { text: "好喜欢首页的设计", author: "匿名", top: "57%", left: "48%", tint: "white" },
      { text: "oanaoana我们喜欢你！", author: "匿名", top: "63%", left: "55%", tint: "white" },
      { text: "hello！！", author: "匿名", top: "70%", left: "46%", tint: "white" },
      { text: "Oana老师我要约稿！！！", author: "不二", top: "77%", left: "61%", tint: "white" },
      { text: "我想去度假了！", author: "小铭", top: "84%", left: "71%", tint: "white" }
    ]
  }
};

/* ==========================================================================
   Web Audio API Tactile Sound Effects & Music-Box Synthesizer (Zero Dependencies)
   ========================================================================== */

let soundEnabled = true;
let audioCtx = null;
let bgmPlaying = false;
let bgmInterval = null;

function getAudioCtx() {
  if (!audioCtx && typeof window !== "undefined") {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function playSoftSound(type = "pop") {
  if (!soundEnabled) return;
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === "pop") {
    osc.type = "sine";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.065);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
    osc.start(now);
    osc.stop(now + 0.08);
  } else if (type === "sparkle") {
    osc.type = "triangle";
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(1180, now + 0.14);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.start(now);
    osc.stop(now + 0.17);
  }
}

function toggleMusicBoxBgm() {
  const vinylBtn = document.getElementById("hotspot-vinyl");
  if (bgmPlaying) {
    bgmPlaying = false;
    clearInterval(bgmInterval);
    bgmInterval = null;
    vinylBtn?.classList.remove("playing");
    showRoomToast("🎵 留声机已暂停播放～");
    return;
  }

  soundEnabled = true;
  updateSfxButtonUI();
  const ctx = getAudioCtx();
  if (!ctx) return;

  bgmPlaying = true;
  vinylBtn?.classList.add("playing");
  showRoomToast("🎶 正在播放《Sweet Afternoon》八音盒旋律 ♪ ♫");

  // Dreamy pentatonic music-box notes (C5, D5, E5, G5, A5, C6)
  const melody = [523.25, 659.25, 783.99, 659.25, 880.0, 783.99, 659.25, 587.33];
  let step = 0;

  function playNote() {
    if (!bgmPlaying || !soundEnabled) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(melody[step % melody.length], now);
    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.0008, now + 0.55);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.58);
    step++;
  }

  playNote();
  bgmInterval = setInterval(playNote, 620);
}

function updateSfxButtonUI() {
  const btn = document.getElementById("sfx-toggle-btn");
  if (btn) {
    btn.textContent = soundEnabled ? "🔊" : "🔇";
    btn.title = soundEnabled ? "点击静音互动音效" : "点击开启互动音效";
  }
}

/* ==========================================================================
   Click Sparkle Effect (Hand-Drawn Doodles on Click)
   ========================================================================== */

const SPARKLE_CHARS = ["♡", "✦", "✿", "🫧", "♪"];

function initClickSparkles() {
  document.addEventListener("click", (e) => {
    const el = document.createElement("span");
    el.className = "click-sparkle";
    el.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
    el.style.left = `${e.clientX}px`;
    el.style.top = `${e.clientY}px`;
    el.style.setProperty("--dx", `${Math.floor(-18 + Math.random() * 36)}px`);
    el.style.setProperty("--rot", `${Math.floor(-25 + Math.random() * 50)}deg`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 750);
  });
}

/* ==========================================================================
   Hand-Crafted SVG Artwork Generator for Journal Cards
   ========================================================================== */

function getJournalIllustration(svgType) {
  switch (svgType) {
    case "stampBook":
      return `
      <svg viewBox="0 0 400 410" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="410" fill="#CFC4A9"/>
        <circle cx="40" cy="45" r="32" fill="#9E8B52" opacity="0.45"/>
        <circle cx="145" cy="15" r="28" fill="#9E8B52" opacity="0.45"/>
        <circle cx="345" cy="95" r="34" fill="#9E8B52" opacity="0.45"/>
        <circle cx="370" cy="215" r="30" fill="#9E8B52" opacity="0.45"/>
        <circle cx="65" cy="210" r="34" fill="#9E8B52" opacity="0.45"/>
        <circle cx="35" cy="340" r="32" fill="#9E8B52" opacity="0.45"/>
        <circle cx="340" cy="335" r="34" fill="#9E8B52" opacity="0.45"/>
        <rect x="86" y="34" width="232" height="342" rx="6" fill="rgba(60,50,40,0.16)" transform="rotate(1.5 200 205)"/>
        <g transform="rotate(1 200 205)">
          <rect x="82" y="30" width="230" height="340" rx="5" fill="#F8F7F2" stroke="#E5E0D5" stroke-width="1.5"/>
          <pattern id="dotsA6" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1" fill="#C9C2B2"/>
          </pattern>
          <rect x="88" y="36" width="218" height="328" fill="url(#dotsA6)"/>
          <circle cx="132" cy="82" r="20" fill="none" stroke="#8574A6" stroke-width="10" stroke-dasharray="14 6"/>
          <circle cx="132" cy="82" r="20" fill="none" stroke="#F4D068" stroke-width="10" stroke-dashoffset="10" stroke-dasharray="6 14"/>
          <path d="M 185 75 Q 235 45 275 82 Q 230 85 185 75 Z" fill="#90A96E" stroke="#5C6E46" stroke-width="1.5"/>
          <ellipse cx="228" cy="126" rx="48" ry="18" fill="#8EA8C3" opacity="0.65"/>
          <circle cx="212" cy="108" r="10" fill="#F7D7C4"/>
          <path d="M 201 106 Q 212 92 223 106" fill="#6D4C41"/>
          <rect x="204" y="117" width="16" height="14" rx="4" fill="#E68A99"/>
          <ellipse cx="148" cy="196" rx="36" ry="14" fill="#9BC4DC" opacity="0.65"/>
          <ellipse cx="148" cy="192" rx="18" ry="7" fill="#F4D35E"/>
          <circle cx="148" cy="178" r="11" fill="#F7D7C4"/>
          <path d="M 137 175 Q 148 164 159 175" fill="#5D4037"/>
          <text x="200" y="198" font-family="Comic Sans MS, cursive, sans-serif" font-size="11" fill="#5A524C" transform="rotate(-5 200 198)">play together!</text>
          <path d="M 105 335 Q 115 295 108 265" stroke="#6E8B57" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M 120 338 Q 132 300 124 275" stroke="#88A66C" stroke-width="4" fill="none" stroke-linecap="round"/>
          <circle cx="145" cy="316" r="9" fill="#C85A53"/>
          <polygon points="215,332 255,308 288,325 248,348" fill="#E6B8C0"/>
          <circle cx="248" cy="316" r="10" fill="#F7D7C4"/>
          <path d="M 238 314 Q 248 300 259 314" fill="#6D4C41"/>
        </g>
      </svg>`;

    case "clearSticker":
      return `
      <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="197" height="280" fill="#D5CCB8"/>
        <rect x="203" y="0" width="197" height="280" fill="#CBC2AE"/>
        <circle cx="95" cy="70" r="55" fill="#4E593C" opacity="0.65"/>
        <circle cx="135" cy="120" r="48" fill="#3E482E" opacity="0.65"/>
        <rect x="38" y="34" width="122" height="206" rx="6" fill="rgba(255,255,255,0.42)" stroke="rgba(255,255,255,0.8)" stroke-width="1.5"/>
        <rect x="112" y="44" width="38" height="12" rx="6" fill="#FFF8EE" stroke="#7A6855" stroke-width="1"/>
        <g fill="#FFFDF9" stroke="#6B5B52" stroke-width="1.4">
          <circle cx="62" cy="72" r="10"/><circle cx="96" cy="72" r="10"/><circle cx="132" cy="74" r="10"/>
          <circle cx="66" cy="104" r="10"/><circle cx="102" cy="104" r="10"/><circle cx="134" cy="106" r="10"/>
          <circle cx="62" cy="138" r="10"/><circle cx="96" cy="138" r="10"/><circle cx="130" cy="138" r="10"/>
          <circle cx="66" cy="172" r="10"/><circle cx="100" cy="172" r="10"/><circle cx="134" cy="172" r="10"/>
          <circle cx="64" cy="206" r="10"/><circle cx="98" cy="206" r="10"/><circle cx="132" cy="206" r="10"/>
        </g>
        <rect x="244" y="42" width="114" height="196" rx="4" fill="rgba(255,255,255,0.68)" stroke="#D8D2C5" stroke-width="1"/>
        <rect x="244" y="42" width="114" height="32" rx="3" fill="#9E97A8"/>
        <ellipse cx="301" cy="58" rx="16" ry="8" fill="#FFF" stroke="#6B5B52" stroke-width="1"/>
        <g fill="#F9F4F0" stroke="#5A4E48" stroke-width="1.2">
          <circle cx="266" cy="96" r="8"/><circle cx="298" cy="96" r="8"/><circle cx="332" cy="96" r="8"/>
          <circle cx="268" cy="126" r="8"/><circle cx="300" cy="126" r="8"/><circle cx="330" cy="126" r="8"/>
          <circle cx="266" cy="156" r="8"/><circle cx="298" cy="156" r="8"/><circle cx="332" cy="156" r="8"/>
          <circle cx="268" cy="186" r="8"/><circle cx="300" cy="186" r="8"/><circle cx="330" cy="186" r="8"/>
          <circle cx="266" cy="214" r="8"/><circle cx="298" cy="214" r="8"/><circle cx="332" cy="214" r="8"/>
        </g>
      </svg>`;

    case "memoPad":
      return `
      <svg viewBox="0 0 400 310" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="310" fill="#463020"/>
        <rect x="42" y="34" width="98" height="112" rx="2" fill="#F4F1EA"/>
        <text x="54" y="54" font-family="Comic Sans MS, cursive" font-size="9" fill="#B5A689">Shopping list</text>
        <path d="M 54 70 L 64 70 L 72 108 L 118 108 L 124 80 L 68 80" fill="none" stroke="#C5B38E" stroke-width="2"/>
        <circle cx="78" cy="118" r="5" fill="none" stroke="#C5B38E" stroke-width="2"/>
        <circle cx="110" cy="118" r="5" fill="none" stroke="#C5B38E" stroke-width="2"/>
        <rect x="151" y="34" width="98" height="112" rx="2" fill="#F2F2F0"/>
        <path d="M 168 130 L 168 70 Q 200 44 232 70 L 232 130 Z" fill="none" stroke="#C2C5CC" stroke-width="1.5"/>
        <rect x="260" y="34" width="98" height="112" rx="2" fill="#F5F3EF"/>
        <circle cx="309" cy="92" r="24" fill="#C96A88"/>
        <circle cx="301" cy="84" r="6" fill="#E8A5B8" opacity="0.65"/>
        <rect x="42" y="156" width="98" height="114" rx="2" fill="#F4F3EF"/>
        <line x1="50" y1="176" x2="130" y2="176" stroke="#D8D4CC" stroke-width="1"/>
        <line x1="50" y1="192" x2="130" y2="192" stroke="#D8D4CC" stroke-width="1"/>
        <line x1="50" y1="208" x2="130" y2="208" stroke="#D8D4CC" stroke-width="1"/>
        <circle cx="115" cy="235" r="10" fill="#D4747E"/>
        <rect x="106" y="245" width="18" height="18" rx="4" fill="#E2959E"/>
        <rect x="151" y="156" width="98" height="114" rx="2" fill="#F2F2EE"/>
        <pattern id="memoGrid" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="7" cy="7" r="1.2" fill="#B5B8B1"/>
        </pattern>
        <rect x="158" y="164" width="84" height="98" fill="url(#memoGrid)"/>
        <rect x="260" y="156" width="98" height="114" rx="2" fill="#D5C4A1"/>
        <rect x="268" y="252" width="82" height="12" rx="2" fill="#F5F2EB"/>
      </svg>`;

    default:
      return `
      <svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="290" fill="#F3E9E2"/>
        <g transform="rotate(-4 140 145)">
          <rect x="46" y="44" width="170" height="200" rx="8" fill="#FFFDFB" stroke="#E8D8D0" stroke-width="1.5"/>
          <rect x="58" y="56" width="146" height="136" rx="4" fill="#FCEBEF"/>
          <circle cx="131" cy="118" r="28" fill="#F7D0D9"/>
          <circle cx="131" cy="114" r="14" fill="#FFFDFB"/>
          <text x="131" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#C57685">sweet afternoon ♡</text>
        </g>
        <g transform="rotate(5 270 150)">
          <rect x="188" y="48" width="166" height="196" rx="8" fill="#FFFDFB" stroke="#E8D8D0" stroke-width="1.5"/>
          <rect x="200" y="60" width="142" height="132" rx="4" fill="#EBF3F5"/>
          <path d="M 220 165 Q 271 120 322 165" fill="#AED0BA"/>
          <circle cx="295" cy="92" r="14" fill="#FFE082"/>
          <text x="271" y="220" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7D98A1">have a nice day ✦</text>
        </g>
      </svg>`;
  }
}

/* ==========================================================================
   Navigation & URL Hash Routing
   ========================================================================== */

let currentView = "room";

function navigateTo(viewName, scrollToBooking = false, updateHash = true) {
  playSoftSound("pop");
  currentView = viewName;

  document.querySelectorAll(".page-view").forEach((el) => {
    el.classList.remove("active");
  });

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".quick-nav-btn").forEach((btn) => {
    const isBookingBtn = btn.dataset.nav === "booking" && viewName === "room" && scrollToBooking;
    const isNormalMatch = btn.dataset.nav === viewName && !scrollToBooking;
    btn.classList.toggle("active", isBookingBtn || isNormalMatch);
  });

  if (updateHash) {
    const hashValue = scrollToBooking ? "#booking" : `#${viewName}`;
    if (window.location.hash !== hashValue) {
      history.replaceState(null, "", hashValue);
    }
  }

  if (viewName === "room" && scrollToBooking) {
    const bookingEl = document.getElementById("booking-section");
    if (bookingEl) {
      setTimeout(() => {
        bookingEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function handleHashChange() {
  const hash = (window.location.hash || "#room").replace("#", "");
  if (hash === "booking") {
    navigateTo("room", true, false);
  } else if (["room", "about", "journal", "guestbook"].includes(hash)) {
    navigateTo(hash, false, false);
  }
}

/* ==========================================================================
   Room Interactive Easter Eggs
   ========================================================================== */

let coffeeCount = 1;
let weatherIndex = 0;
const weatherStates = [
  { sky: "#E6F3F8", sun: "#FFE066", msg: "今天北京天气超好，适合出门攀岩或喝冰美式 🌤️" },
  { sky: "#F9DCE8", sun: "#F497A9", msg: "傍晚的粉色晚霞漫进房间啦 🌇" },
  { sky: "#DCE4EC", sun: "#A9BCD0", msg: "下雨天最适合窝在桌前写手帐听歌 🌧️" }
];

let toastTimer = null;
function showRoomToast(message) {
  const toast = document.getElementById("room-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2900);
}

function initRoomInteractions() {
  document.getElementById("hotspot-coffee")?.addEventListener("click", () => {
    coffeeCount++;
    playSoftSound("pop");
    showRoomToast(`☕ 今日第 ${coffeeCount} 杯咖啡已续上！灵魂回来了～`);
  });

  document.getElementById("hotspot-cat")?.addEventListener("click", () => {
    playSoftSound("sparkle");
    const catMsgs = [
      "🐱 呼噜呼噜……小猫翻了个肚皮向你撒娇 ♡",
      "🐾 喵呜～今天也要开开心心画画哦！",
      "🐱 小猫蹭了蹭你的铅笔，留下一朵小梅花印～"
    ];
    showRoomToast(catMsgs[Math.floor(Math.random() * catMsgs.length)]);
  });

  document.getElementById("hotspot-lamp")?.addEventListener("click", function () {
    playSoftSound("pop");
    const isNight = document.body.classList.toggle("night-mode");
    const badge = this.querySelector(".hotspot-badge");
    if (badge) badge.textContent = isNight ? "🪔 开灯" : "🪔 晚安台灯";
    showRoomToast(isNight ? "✨ 已开启夜晚暖灯模式，晚安好梦 ♡" : "☀️ 早安！房间恢复奶油日光模式～");
  });

  document.getElementById("hotspot-window")?.addEventListener("click", () => {
    playSoftSound("pop");
    weatherIndex = (weatherIndex + 1) % weatherStates.length;
    const st = weatherStates[weatherIndex];
    document.getElementById("window-sky-rect")?.setAttribute("fill", st.sky);
    document.getElementById("window-sun-circle")?.setAttribute("fill", st.sun);
    showRoomToast(st.msg);
  });

  document.getElementById("hotspot-vinyl")?.addEventListener("click", () => {
    toggleMusicBoxBgm();
  });
}

/* ==========================================================================
   About Me Page Rendering & Interactive "Cola说" Tag Popover (Hover + Click)
   ========================================================================== */

function renderAboutPage() {
  const whisperEl = document.getElementById("about-whisper");
  const introEl = document.getElementById("about-intro");
  const tagsWrap = document.getElementById("about-tags-wrap");
  const personalityList = document.getElementById("personality-list");
  const hobbiesList = document.getElementById("hobbies-list");
  const recentList = document.getElementById("recent-status-list");

  if (whisperEl) whisperEl.textContent = SITE_DATA.profile.whisper;
  if (introEl) {
    introEl.innerHTML = SITE_DATA.profile.introLines.map((l) => `<div>${l}</div>`).join("");
  }

  if (tagsWrap) {
    const pillsHtml = SITE_DATA.profile.tags
      .map(
        (tag, idx) => `
        <button type="button" class="tag-pill" data-tag-index="${idx}">
          <span>${tag.icon}</span>
          <span>${tag.label}</span>
        </button>`
      )
      .join("");

    tagsWrap.innerHTML = `
      ${pillsHtml}
      <div id="cola-popover" class="cola-popover" role="status" aria-live="polite">
        <div id="cola-popover-speaker" class="cola-popover-speaker">Cola说：</div>
        <div id="cola-popover-text" class="cola-popover-text">日均一杯，不喝会困到没有灵魂</div>
      </div>
    `;

    const pills = tagsWrap.querySelectorAll(".tag-pill");
    const popover = document.getElementById("cola-popover");
    const speakerEl = document.getElementById("cola-popover-speaker");
    const textEl = document.getElementById("cola-popover-text");

    function showTagPopover(pillBtn, tagIndex) {
      const tag = SITE_DATA.profile.tags[tagIndex];
      if (!tag || !popover) return;

      pills.forEach((p) => p.classList.remove("active"));
      pillBtn.classList.add("active");

      speakerEl.textContent = tag.speaker;
      textEl.textContent = tag.comment;

      const topOffset = pillBtn.offsetTop + pillBtn.offsetHeight + 12;
      const maxLeft = Math.max(0, tagsWrap.clientWidth - 270);
      const rawLeft = pillBtn.offsetLeft - 14;
      const leftOffset = Math.max(0, Math.min(rawLeft, maxLeft));

      const pillCenter = pillBtn.offsetLeft + pillBtn.offsetWidth / 2;
      const arrowLeft = Math.max(18, Math.min(pillCenter - leftOffset - 5, 240));

      popover.style.top = `${topOffset}px`;
      popover.style.left = `${leftOffset}px`;
      popover.style.setProperty("--arrow-left", `${arrowLeft}px`);
      popover.classList.add("visible");
    }

    pills.forEach((pillBtn) => {
      const idx = Number(pillBtn.dataset.tagIndex);
      pillBtn.addEventListener("mouseenter", () => {
        showTagPopover(pillBtn, idx);
      });
      pillBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        playSoftSound("pop");
        showTagPopover(pillBtn, idx);
      });
    });

    const coffeeIndex = SITE_DATA.profile.tags.findIndex((t) => t.label === "咖啡");
    if (coffeeIndex !== -1 && pills[coffeeIndex]) {
      setTimeout(() => showTagPopover(pills[coffeeIndex], coffeeIndex), 150);
    }

    document.addEventListener("click", () => {
      if (popover) popover.classList.remove("visible");
      pills.forEach((p) => p.classList.remove("active"));
    });
  }

  if (personalityList) {
    personalityList.innerHTML = SITE_DATA.profile.personality.map((item) => `<li>${item}</li>`).join("");
  }
  if (hobbiesList) {
    hobbiesList.innerHTML = SITE_DATA.profile.hobbies.map((item) => `<li>${item}</li>`).join("");
  }
  if (recentList && SITE_DATA.profile.recentStatus) {
    recentList.innerHTML = SITE_DATA.profile.recentStatus.map((item) => `<li>${item}</li>`).join("");
  }
}

/* ==========================================================================
   Journal Page Rendering + Category Filter & Likes
   ========================================================================== */

let activeJournalCategory = "all";

function renderJournalPage() {
  const subEl = document.getElementById("journal-subtitle");
  const filterBar = document.getElementById("journal-filter-bar");
  const gridEl = document.getElementById("journal-grid");
  if (subEl) subEl.textContent = SITE_DATA.journal.subtitle;
  if (!gridEl) return;

  if (filterBar && SITE_DATA.journal.categories) {
    filterBar.innerHTML = SITE_DATA.journal.categories
      .map(
        (cat) => `
        <button type="button" class="filter-pill ${cat.id === activeJournalCategory ? "active" : ""}" data-cat="${cat.id}">
          ${cat.label}
        </button>`
      )
      .join("");

    filterBar.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        playSoftSound("pop");
        activeJournalCategory = btn.dataset.cat;
        renderJournalPage();
      });
    });
  }

  const filtered = SITE_DATA.journal.items.filter(
    (item) => activeJournalCategory === "all" || item.category === activeJournalCategory
  );

  gridEl.innerHTML = filtered
    .map((item) => {
      const realIdx = SITE_DATA.journal.items.indexOf(item);
      return `
        <article class="journal-card clickable" data-journal-idx="${realIdx}">
          <div class="journal-card-img">
            ${getJournalIllustration(item.svgType)}
          </div>
          <div class="journal-card-body">
            <div>
              <h3 class="journal-card-title">${item.title}</h3>
              <p class="journal-card-desc">${item.desc}</p>
            </div>
            <button type="button" class="journal-like-badge" data-like-idx="${realIdx}" title="喜欢这件作品">
              ♡ <span>${item.likes || 99}</span>
            </button>
          </div>
        </article>`;
    })
    .join("");

  gridEl.querySelectorAll(".journal-like-badge").forEach((likeBtn) => {
    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playSoftSound("sparkle");
      const idx = Number(likeBtn.dataset.likeIdx);
      const item = SITE_DATA.journal.items[idx];
      if (item) {
        item.likes = (item.likes || 99) + 1;
        const span = likeBtn.querySelector("span");
        if (span) span.textContent = item.likes;
      }
    });
  });

  gridEl.querySelectorAll(".journal-card").forEach((card) => {
    card.addEventListener("click", () => {
      playSoftSound("pop");
      const idx = Number(card.dataset.journalIdx);
      const item = SITE_DATA.journal.items[idx];
      if (!item) return;
      openModal(`
        <h3 style="font-size:18px;color:var(--rose-title);margin-bottom:12px;">${item.title}</h3>
        <div style="border-radius:14px;overflow:hidden;margin-bottom:16px;max-height:280px;">
          ${getJournalIllustration(item.svgType)}
        </div>
        <p style="font-size:14px;color:var(--text-main);margin-bottom:10px;">${item.detail}</p>
        <div style="background:var(--bg-cream);padding:10px 14px;border-radius:10px;font-size:12.5px;color:var(--text-sub);margin-bottom:8px;">
          ${item.specs || "原创手帐周边 · 独立包装"}
        </div>
        <p style="font-size:12px;color:var(--text-light);">✦ 手帐品牌 @oana的小本子 · 感谢喜欢 ♡</p>
      `);
    });
  });
}

/* ==========================================================================
   Booking Section, 3D Pink Notebook & Schedule Calendar
   ========================================================================== */

let calYear = 2026;
let calMonth = 7;
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function renderCalendar() {
  const monthLabel = document.getElementById("cal-month-label");
  const grid = document.getElementById("calendar-days-grid");
  if (!monthLabel || !grid) return;

  monthLabel.textContent = `${MONTH_NAMES[calMonth - 1]} ${calYear}`;

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let html = weekdays.map((w) => `<div class="cal-weekday">${w}</div>`).join("");

  const firstDate = new Date(calYear, calMonth - 1, 1);
  const startOffset = (firstDate.getDay() + 6) % 7;
  const daysInMonth = new Date(calYear, calMonth, 0).getDate();

  const key = `${calYear}-${String(calMonth).padStart(2, "0")}`;
  const bookedList = SITE_DATA.booking.bookedDates[key] || [];
  const hl = SITE_DATA.booking.highlightedDay;

  for (let i = 0; i < startOffset; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isBooked = bookedList.includes(d);
    const isToday = hl && hl.year === calYear && hl.month === calMonth && hl.day === d;
    const classes = ["cal-day"];
    if (isBooked) classes.push("booked");
    if (isToday) classes.push("today");
    const tip = isBooked ? `${calMonth}月${d}日：已约满` : `${calMonth}月${d}日：空白可约（点击生成预约单）`;

    html += `<div class="${classes.join(" ")}" data-day="${d}" data-booked="${isBooked}" title="${tip}">${d}</div>`;
  }

  grid.innerHTML = html;

  grid.querySelectorAll(".cal-day:not(.empty)").forEach((cell) => {
    cell.addEventListener("click", () => {
      playSoftSound("pop");
      const day = Number(cell.dataset.day);
      const isBooked = cell.dataset.booked === "true";
      if (isBooked) {
        showRoomToast(`📌 ${calYear}年${calMonth}月${day}日 档期已约满啦～可以看看其他空白日期 ♡`);
      } else {
        openBookingModalForDate(calYear, calMonth, day);
      }
    });
  });
}

function openBookingModalForDate(year, month, day) {
  openModal(`
    <h3 style="font-size:18px;color:var(--rose-title);margin-bottom:8px;">✨ 档期预约单：${year}年${month}月${day}日</h3>
    <p style="font-size:13.5px;color:var(--text-sub);margin-bottom:14px;">
      选择你的活动场景，一键复制预约文案发送至微信或小红书 <strong>${SITE_DATA.profile.handle}</strong>：
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;" id="modal-scene-pills">
      <button type="button" class="filter-pill active" data-scene="婚礼宾客签到肖像">💍 婚礼宾客肖像</button>
      <button type="button" class="filter-pill" data-scene="公司团建纪念肖像">🏢 公司团建</button>
      <button type="button" class="filter-pill" data-scene="商场节日快闪市集">🎪 商场节日快闪</button>
      <button type="button" class="filter-pill" data-scene="品牌定制联名小画">✨ 品牌定制活动</button>
    </div>
    <div id="booking-preview-box" style="background:var(--bg-cream);padding:14px 16px;border-radius:12px;font-size:13px;color:var(--text-main);margin-bottom:16px;line-height:1.7;">
      你好！看到你的个人小房间网站，想咨询并预约 <strong>${year}年${month}月${day}日</strong> 的【婚礼宾客签到肖像】现场手绘档期（报价 ${SITE_DATA.booking.price}）～
    </div>
    <button type="button" id="copy-booking-btn" class="gb-submit-btn" style="width:100%;">复制预约文案并微信号 (${SITE_DATA.profile.handle}) ♡</button>
  `);

  let selectedScene = "婚礼宾客签到肖像";
  const previewBox = document.getElementById("booking-preview-box");
  const sceneBtns = document.querySelectorAll("#modal-scene-pills .filter-pill");

  sceneBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sceneBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedScene = btn.dataset.scene;
      if (previewBox) {
        previewBox.innerHTML = `你好！看到你的个人小房间网站，想咨询并预约 <strong>${year}年${month}月${day}日</strong> 的【${selectedScene}】现场手绘档期（报价 ${SITE_DATA.booking.price}）～`;
      }
    });
  });

  document.getElementById("copy-booking-btn")?.addEventListener("click", function () {
    const plainText = `你好！看到你的个人小房间网站，想咨询并预约 ${year}年${month}月${day}日 的【${selectedScene}】现场手绘档期（报价 ${SITE_DATA.booking.price}）～`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(plainText).catch(() => {});
    }
    playSoftSound("sparkle");
    this.textContent = `✅ 已复制预约文案！去添加 ${SITE_DATA.profile.handle} 吧 ✨`;
  });
}

function initBookingSection() {
  document.getElementById("cal-prev-btn")?.addEventListener("click", () => {
    playSoftSound("pop");
    calMonth--;
    if (calMonth < 1) {
      calMonth = 12;
      calYear--;
    }
    renderCalendar();
  });

  document.getElementById("cal-next-btn")?.addEventListener("click", () => {
    playSoftSound("pop");
    calMonth++;
    if (calMonth > 12) {
      calMonth = 1;
      calYear++;
    }
    renderCalendar();
  });

  document.getElementById("pink-notebook-btn")?.addEventListener("click", () => {
    playSoftSound("sparkle");
    openModal(`
      <h3 style="font-size:18px;color:var(--rose-title);text-align:center;">📖 现场手绘小本子 · Open Me</h3>
      <div class="notebook-spread">
        <div class="spread-page">
          <h4>🎨 现场肖像怎么画？</h4>
          <p>每位嘉宾大约 <strong>5–8 分钟</strong>，使用马克笔与彩铅在定制卡纸上现场手绘。</p>
          <p style="margin-top:8px;">画风温柔可爱，会抓住每个人的穿搭细节、发型与神态特征（支持单人、情侣同框或带小宠物）～</p>
        </div>
        <div class="spread-page">
          <h4>💌 1.5k / 6h 包含什么？</h4>
          <ul style="padding-left:16px;">
            <li>6小时内不限张数（约35–45人）</li>
            <li>全套画具、高克重卡纸、透明保护袋与封口贴纸</li>
            <li>可免费定制活动专属印章或联名LOGO画框</li>
          </ul>
        </div>
      </div>
    `);
  });

  renderCalendar();
}

/* ==========================================================================
   Guestbook Floating Bubbles (Draggable + Color Picker + "my secret")
   ========================================================================== */

const STORAGE_KEY_GUESTBOOK = "oana_vibe_guestbook_v2";
let selectedBubbleTint = "white";

function getGuestbookMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_GUESTBOOK);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // ignore storage errors
  }
  return [...SITE_DATA.guestbook.initialMessages];
}

function saveGuestbookMessages(list) {
  try {
    localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(list));
  } catch (e) {
    // ignore
  }
}

function renderGuestbookBubbles() {
  const stage = document.getElementById("guestbook-stage");
  if (!stage) return;

  const messages = getGuestbookMessages();
  const secretCardHtml = `
    <div id="secret-center-card" class="secret-center-card">
      ${SITE_DATA.guestbook.secretMessage}
    </div>
  `;

  const bubblesHtml = messages
    .map((m, idx) => {
      const dur = (5.5 + (idx % 5) * 0.85).toFixed(2);
      const delay = ((idx % 4) * -1.2).toFixed(2);
      const likes = m.likes || 0;
      const tint = m.tint || "white";
      return `
        <div class="guest-bubble clickable ${likes > 0 ? "liked" : ""}"
             data-idx="${idx}"
             data-tint="${tint}"
             style="top:${m.top};left:${m.left};--dur:${dur}s;--delay:${delay}s;"
             title="可拖拽移动位置 · 点击送小爱心 ♡">
          <span>${escapeHtml(m.text)}</span>
          <span class="guest-bubble-author">${escapeHtml(m.author || "匿名")}</span>
          <span class="guest-bubble-likes">♡ ${likes}</span>
        </div>
      `;
    })
    .join("");

  stage.innerHTML = bubblesHtml + secretCardHtml;

  // Enable dragging & liking on bubbles
  stage.querySelectorAll(".guest-bubble").forEach((bubble) => {
    let isDragging = false;
    let moved = false;
    let startX = 0;
    let startY = 0;
    let origLeft = 0;
    let origTop = 0;

    bubble.addEventListener("pointerdown", (e) => {
      isDragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      origLeft = bubble.offsetLeft;
      origTop = bubble.offsetTop;
      bubble.classList.add("dragging");
      bubble.setPointerCapture(e.pointerId);
    });

    bubble.addEventListener("pointermove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
      if (!moved) return;

      const stageRect = stage.getBoundingClientRect();
      const newLeftPct = Math.max(0, Math.min(88, ((origLeft + dx) / stageRect.width) * 100));
      const newTopPct = Math.max(2, Math.min(88, ((origTop + dy) / stageRect.height) * 100));
      bubble.style.left = `${newLeftPct.toFixed(1)}%`;
      bubble.style.top = `${newTopPct.toFixed(1)}%`;
    });

    bubble.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;
      bubble.classList.remove("dragging");
      bubble.releasePointerCapture(e.pointerId);

      const idx = Number(bubble.dataset.idx);
      const all = getGuestbookMessages();
      if (!all[idx]) return;

      if (moved) {
        all[idx].left = bubble.style.left;
        all[idx].top = bubble.style.top;
        saveGuestbookMessages(all);
      } else {
        // Treat as a click -> like bubble!
        playSoftSound("sparkle");
        all[idx].likes = (all[idx].likes || 0) + 1;
        saveGuestbookMessages(all);
        const likeSpan = bubble.querySelector(".guest-bubble-likes");
        if (likeSpan) likeSpan.textContent = `♡ ${all[idx].likes}`;
        bubble.classList.add("liked");
      }
    });
  });
}

function initGuestbook() {
  renderGuestbookBubbles();

  // Bubble tint selector dots
  document.querySelectorAll(".color-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      playSoftSound("pop");
      document.querySelectorAll(".color-dot").forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
      selectedBubbleTint = dot.dataset.tint || "white";
    });
  });

  const msgInput = document.getElementById("gb-input-msg");
  const nameInput = document.getElementById("gb-input-name");
  const submitBtn = document.getElementById("gb-submit-btn");

  function handleSend() {
    if (!msgInput) return;
    const text = msgInput.value.trim();
    if (!text) {
      msgInput.focus();
      return;
    }
    playSoftSound("sparkle");
    const author = (nameInput && nameInput.value.trim()) || "匿名";

    const randTop = `${Math.floor(8 + Math.random() * 74)}%`;
    const randLeft = `${Math.floor(6 + Math.random() * 62)}%`;

    const list = getGuestbookMessages();
    list.push({
      text,
      author,
      top: randTop,
      left: randLeft,
      tint: selectedBubbleTint,
      likes: 1
    });
    saveGuestbookMessages(list);

    msgInput.value = "";
    renderGuestbookBubbles();
  }

  submitBtn?.addEventListener("click", handleSend);
  msgInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });

  // Bottom-right "my secret" folder toggle
  const secretBtn = document.getElementById("my-secret-trigger");
  const stage = document.getElementById("guestbook-stage");

  if (secretBtn && stage) {
    secretBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playSoftSound("sparkle");
      const card = document.getElementById("secret-center-card");
      if (!card) return;
      const isOpen = card.classList.toggle("open");
      stage.classList.toggle("secret-dimmed", isOpen);
      secretBtn.classList.toggle("active", isOpen);
    });

    document.addEventListener("click", () => {
      const card = document.getElementById("secret-center-card");
      if (card && card.classList.contains("open")) {
        card.classList.remove("open");
        stage.classList.remove("secret-dimmed");
        secretBtn.classList.remove("active");
      }
    });
  }
}

/* ==========================================================================
   Modal Helper & Utilities
   ========================================================================== */

function openModal(innerHtml) {
  const backdrop = document.getElementById("modal-backdrop");
  const content = document.getElementById("modal-body-content");
  if (!backdrop || !content) return;
  content.innerHTML = innerHtml;
  backdrop.classList.add("open");
}

function closeModal() {
  document.getElementById("modal-backdrop")?.classList.remove("open");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ==========================================================================
   Initialize Everything on DOMContentLoaded
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initClickSparkles();

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(btn.dataset.goto, btn.dataset.scrollBooking === "true");
    });
  });

  document.querySelectorAll(".quick-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nav = btn.dataset.nav;
      if (nav === "booking") {
        navigateTo("room", true);
      } else {
        navigateTo(nav, false);
      }
    });
  });

  // Sound Effects Toggle Button
  document.getElementById("sfx-toggle-btn")?.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (!soundEnabled && bgmPlaying) {
      toggleMusicBoxBgm();
    }
    updateSfxButtonUI();
  });

  // Modal & Escape key close events
  document.getElementById("modal-close-btn")?.addEventListener("click", closeModal);
  document.getElementById("modal-backdrop")?.addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      const card = document.getElementById("secret-center-card");
      if (card?.classList.contains("open")) {
        card.classList.remove("open");
        document.getElementById("guestbook-stage")?.classList.remove("secret-dimmed");
        document.getElementById("my-secret-trigger")?.classList.remove("active");
      }
    }
  });

  initRoomInteractions();
  renderAboutPage();
  renderJournalPage();
  initBookingSection();
  initGuestbook();

  window.addEventListener("hashchange", handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  }
});
