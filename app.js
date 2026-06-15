// BirdsTV Application

const DICT = {
  ar: {
    search: "بحث",
    placeholder: "ابحث عن قناة...",
    about: "محرك بحث ترددات القنوات الفضائية",
    sat: "القمر الصناعي",
    freq: "التردد",
    pol: "الاستقطاب",
    sr: "معدل الترميز",
    fec: "FEC",
    sys: "النظام",
    back: "العودة",
    no_results: "لم يتم العثور على نتائج.",
    seo_title: "قاعدة البيانات الأسرع لترددات الأقمار الصناعية",
    seo_desc: "أداة بحث حديثة تتيح لك العثور على أي قناة فضائية بسرعة فائقة. نجمع ونحدث بيانات القنوات على مدار الساعة لضمان الدقة.",
    seo_stat_channels: "إجمالي القنوات",
    seo_stat_sats: "الأقمار الصناعية",
    seo_stat_updates: "تحديثات مستمرة",
    seo_feat1_title: "بحث ذكي باللغتين",
    seo_feat1_desc: "ابحث باللغة العربية أو الإنجليزية أو حتى باستخدام الأسماء المعربة. المحرك يفهم طلبك فوراً بدون الحاجة لكتابة الاسم بالتهجئة الدقيقة.",
    seo_feat2_title: "واجهة سريعة وخفيفة",
    seo_feat2_desc: "تم بناء الموقع ليكون خفيفاً وسريعاً على جميع الأجهزة الذكية لتتمكن من إيجاد الترددات في أجزاء من الثانية.",
    seo_feat3_title: "مفتوح المصدر ومجاني",
    seo_feat3_desc: "قاعدة البيانات والبرمجيات متاحة للجميع بالكامل بدون إعلانات مزعجة وبدون اشتراكات.",
    maintained_by: "تم التطوير بواسطة زكريا بلهادي ",
    pol_V: "عمودي (V)",
    pol_H: "أفقي (H)",
    pol_L: "يسار (L)",
    pol_R: "يمين (R)",
    dir: "rtl"
  },
  en: {
    search: "Search",
    placeholder: "Search for a channel...",
    about: "Satellite TV Channels Search Engine",
    sat: "Satellite",
    freq: "Frequency",
    pol: "Polarization",
    sr: "Symbol Rate",
    fec: "FEC",
    sys: "System",
    back: "Back",
    no_results: "No results found.",
    seo_title: "The Fastest Satellite Frequency Database",
    seo_desc: "A modern search tool that allows you to find any satellite channel at lightning speed. We collect and update channel data around the clock to ensure accuracy.",
    seo_stat_channels: "Total Channels",
    seo_stat_sats: "Satellites",
    seo_stat_updates: "Live Updates",
    seo_feat1_title: "Smart Bilingual Search",
    seo_feat1_desc: "Search in Arabic, English, or even transliterated names. The engine understands your request instantly without requiring exact spelling.",
    seo_feat2_title: "Fast & Lightweight",
    seo_feat2_desc: "Built to be incredibly fast and responsive across all devices so you can find frequencies in milliseconds.",
    seo_feat3_title: "Open Source & Free",
    seo_feat3_desc: "The database and software are completely available to everyone with no annoying ads and no subscriptions.",
    maintained_by: "Maintained by زكريا بلهادي ",
    pol_V: "Vertical (V)",
    pol_H: "Horizontal (H)",
    pol_L: "Left (L)",
    pol_R: "Right (R)",
    dir: "ltr"
  },
  ru: {
    search: "Поиск",
    placeholder: "Поиск канала...",
    about: "Поисковая система спутниковых телеканалов",
    sat: "Спутник",
    freq: "Частота",
    pol: "Поляризация",
    sr: "Символьная скорость",
    fec: "FEC",
    sys: "Система",
    back: "Назад",
    no_results: "Ничего не найдено.",
    seo_title: "Самая быстрая база данных спутниковых частот",
    seo_desc: "Современный инструмент поиска, позволяющий молниеносно найти любой спутниковый канал. Мы собираем и обновляем данные о каналах круглосуточно, чтобы обеспечить их точность.",
    seo_stat_channels: "Всего каналов",
    seo_stat_sats: "Спутники",
    seo_stat_updates: "Постоянные обновления",
    seo_feat1_title: "Умный двуязычный поиск",
    seo_feat1_desc: "Ищите на арабском, английском или даже транслитерированными именами. Система мгновенно понимает ваш запрос, не требуя точного написания.",
    seo_feat2_title: "Быстро и легко",
    seo_feat2_desc: "Создан так, чтобы быть невероятно быстрым и отзывчивым на всех устройствах, позволяя находить частоты за миллисекунды.",
    seo_feat3_title: "Открытый исходный код",
    seo_feat3_desc: "База данных и программное обеспечение полностью доступны всем, без надоедливой рекламы и подписок.",
    maintained_by: "Поддерживается زكريا بلهادي ",
    pol_V: "Вертикальная (V)",
    pol_H: "Горизонтальная (H)",
    pol_L: "Левая (L)",
    pol_R: "Правая (R)",
    dir: "ltr"
  }
};

let currentLang = 'ar';
let channels = [];
let groupedAll = [];
let satelliteCounts = [];
let isSearching = false;
let searchQuery = "";
let searchResults = [];

function t(key) {
  return DICT[currentLang][key] || key;
}

function switchLang(l) {
  currentLang = l;
  document.getElementById('doc-html').setAttribute('dir', DICT[l].dir);
  document.getElementById('doc-html').setAttribute('lang', l);
  render();
}

function escape(s) {
  return String(s || "").replace(/[<>&"']/g, (c) => {
    return {"<":"&lt;", ">":"&gt;", "&":"&amp;", '"':"&quot;", "'":"&#39;"}[c];
  });
}

function cleanRow(c) {
  return {
    name: (c.name || "").trim(),
    satellite_cluster: (c.satellite_cluster || "").trim(),
    frequency: (c.frequency || "").trim(),
    polarization: (c.polarization || "").trim(),
    sr: (c.sr || "").trim(),
    fec: (c.fec || "").trim(),
    system: (c.system || "").trim(),
    alias: (c.alias || "").trim()
  };
}

function norm(s) {
  if (!s) return "";
  return String(s)
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, "") 
    .replace(/[\u0625\u0623\u0622\u0627]/g, "\u0627")
    .replace(/[\u0649\u064A]/g, "\u064A") 
    .replace(/\u0629/g, "\u0647") 
    .replace(/[\-\u2010-\u2015._/\\()[\]{},`´"!?*+&@#$%^=~|<>;:']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function groupByName(rows) {
  const groups = new Map();
  for (const r of rows) {
    const key = r.name || "Unknown";
    if (!groups.has(key)) {
      const n1 = norm(key);
      const n2 = norm(r.alias);
      groups.set(key, {
        name: key,
        satellite_cluster: r.satellite_cluster,
        transmissions: [],
        _nn: `${n1} ${n2}`.trim(),
        _tokens: Array.from(new Set(`${n1} ${n2}`.split(/\s+/).filter(Boolean)))
      });
    }
    const g = groups.get(key);
    if (r.frequency) g.transmissions.push(r);
  }
  return Array.from(groups.values());
}

function rebuildIndex() {
  const real = channels.filter(c => c.frequency || c.system).map(cleanRow);
  groupedAll = groupByName(real);
  const counts = new Map();
  for (const g of groupedAll) {
    const s = g.satellite_cluster || "Unknown";
    counts.set(s, (counts.get(s) || 0) + 1);
  }
  satelliteCounts = Array.from(counts.entries())
    .map(([name, count]) => ({name, count}))
    .sort((a,b) => b.count - a.count);
}

function runSearch(q, isSatFilter = false) {
  searchQuery = q.trim();
  if (!searchQuery) {
    isSearching = false;
    render();
    return;
  }
  
  if (isSatFilter) {
    searchResults = groupedAll.filter(g => g.satellite_cluster.toLowerCase() === searchQuery.toLowerCase());
  } else {
    const nq = norm(searchQuery);
    const qTokens = nq.split(/\s+/).filter(Boolean);
    
    searchResults = groupedAll.filter(g => {
      // Very basic substring / token match for now
      if (g._nn.includes(nq)) return true;
      for (const t of qTokens) {
        if (!g._tokens.some(gt => gt.includes(t))) return false;
      }
      return qTokens.length > 0;
    }).slice(0, 100);
  }
  
  isSearching = true;
  render();
  window.scrollTo(0,0);
}

function renderHome() {
  const chipsHtml = satelliteCounts.map(s => 
    `<button class="sat-chip" onclick="runSearch('${escape(s.name)}', true)">
      ${escape(s.name)} <span class="sat-count">${s.count}</span>
    </button>`
  ).join('');

  return `
    <div class="top-bar">
      <div class="lang-switcher">
        <button class="lang-btn ${currentLang === 'ar' ? 'active' : ''}" onclick="switchLang('ar')">AR</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="switchLang('en')">EN</button>
        <button class="lang-btn ${currentLang === 'ru' ? 'active' : ''}" onclick="switchLang('ru')">RU</button>
      </div>
    </div>
    
    <div class="home-view">
      <div class="home-center">
        <h1 class="wordmark">BirdsTV</h1>
        
        <form class="search-wrap" onsubmit="event.preventDefault(); runSearch(document.getElementById('si').value);">
          <div class="search-bar">
            <input id="si" class="search-input" type="search" placeholder="${t('placeholder')}" autocomplete="off" />
            <button class="search-submit" type="submit">${t('search')}</button>
          </div>
        </form>

        <div class="sat-scroller">
          <div class="sat-scroller-inner">
            ${chipsHtml}
          </div>
        </div>

        <div class="scroll-down">↓</div>
      </div>
      
      <div class="seo-section">
        <div class="seo-block">
          <h2 class="seo-title">${t('seo_title')}</h2>
          <p class="seo-text">${t('seo_desc')}</p>
        </div>

        <div class="seo-stats">
          <div class="stat-card">
            <div class="stat-num">${groupedAll.length}</div>
            <div class="stat-label">${t('seo_stat_channels')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">${satelliteCounts.length}</div>
            <div class="stat-label">${t('seo_stat_sats')}</div>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-box">
            <h3 class="feature-title">${t('seo_feat1_title')}</h3>
            <p class="feature-text">${t('seo_feat1_desc')}</p>
          </div>
          <div class="feature-box">
            <h3 class="feature-title">${t('seo_feat2_title')}</h3>
            <p class="feature-text">${t('seo_feat2_desc')}</p>
          </div>
          <div class="feature-box">
            <h3 class="feature-title">${t('seo_feat3_title')}</h3>
            <p class="feature-text">${t('seo_feat3_desc')}</p>
          </div>
        </div>

        <div style="margin-top: 100px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center; color: rgba(255,255,255,0.4); font-size: 14px;">
          ${t('maintained_by')}
        </div>
      </div>
    </div>
  `;
}

function renderResults() {
  const qSafe = escape(searchQuery);
  const cardsHtml = searchResults.map(g => {
    const txHtml = g.transmissions.map(tx => {
      let polHtml = '';
      if (tx.polarization) {
        const polKey = `pol_${tx.polarization.toUpperCase()}`;
        const friendlyPol = DICT[currentLang][polKey] || tx.polarization;
        const pClass = tx.polarization.toLowerCase();
        polHtml = `<span class="pol-badge pol-${pClass}">${escape(friendlyPol)}</span>`;
      }
      
      return `
      <div class="tx-block">
        <div class="row">
          <span class="r-key">${t('freq')}</span>
          <span class="r-val" style="display:flex;align-items:center;gap:8px;">${escape(tx.frequency)} ${polHtml}</span>
        </div>
        <div class="row"><span class="r-key">${t('sr')}</span><span class="r-val">${escape(tx.sr)}</span></div>
        <div class="row"><span class="r-key">${t('fec')}</span><span class="r-val">${escape(tx.fec)}</span></div>
        <div class="row"><span class="r-key">${t('sys')}</span><span class="r-val">${escape(tx.system)}</span></div>
      </div>
      `;
    }).join('');
    
    return `
      <div class="card">
        <h3 class="card-name">${escape(g.name)}</h3>
        <div class="row" style="margin-bottom:12px;"><span class="r-key">${t('sat')}</span><span class="r-val">${escape(g.satellite_cluster)}</span></div>
        ${txHtml}
      </div>
    `;
  }).join('');

  return `
    <div class="results-view">
      <div class="results-header">
        <button class="back-btn" onclick="isSearching = false; render();">${t('back')}</button>
        <form class="results-sticky-search" onsubmit="event.preventDefault(); runSearch(document.getElementById('rsi').value);">
          <div class="search-bar" style="height: 54px; border-radius: 12px;">
            <input id="rsi" class="search-input" type="search" value="${qSafe}" />
            <button class="search-submit" style="height: 40px; padding: 0 16px;" type="submit">${t('search')}</button>
          </div>
        </form>
      </div>
      
      ${searchResults.length === 0 
        ? `<div class="empty-state">${t('no_results')}</div>` 
        : `<div class="grid">${cardsHtml}</div>`
      }
    </div>
  `;
}

function render() {
  const root = document.getElementById('app');
  if (isSearching) {
    root.innerHTML = renderResults();
  } else {
    root.innerHTML = renderHome();
  }
}

async function init() {
  try {
    const res = await fetch('channels.json');
    channels = await res.json();
    rebuildIndex();
  } catch (e) {
    console.error(e);
  }
  render();
}

init();
