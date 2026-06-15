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
    dir: "rtl",
    quick_guide_title: "طريقة ضبط أجهزة الرسيفر:",
    quick_guide_pol: "الاستقطاب: اختر {pol}. {area_note}",
    quick_guide_fec: "الـ FEC: اختر {fec} (أو اتركه Auto).",
    mena_note: "(هذا التردد موجه لمنطقة الشرق الأوسط وشمال إفريقيا MENA).",
    target_area_note: "(هذا التردد موجه لتغطية {area}).",
    help_setup_btn: "مساعدة في ضبط القناة",
    help_screen_title: "اختر نوع جهاز الرسيفر الخاص بك:",
    recv_type_1: "الأجهزة الشعبية والصينية (مثل: Geant, Starsat, Tiger)",
    recv_type_2: "أجهزة الجيل الثالث المتطورة (أنظمة Enigma2 مثل: Dreambox)",
    recv_type_3: "أجهزة الشاشات المدمجة الذكية (Smart TVs مثل: Samsung, LG)",
    recv_type_4: "أجهزة أندرويد الحديثة (أجهزة فوريفر / Android Boxes)",
    guide_1_text: "لضبط هذا التردد، قم بالدخول إلى القائمة الرئيسية (Menu)، ثم انتقل إلى خيار التثبيت (Installation) وافتح قائمة الترددات (TP List). يمكنك ضبط الاستقطاب بسهولة عبر أزرار الصوت واختيار ({pol}). لا توجد عادة خانة مخصصة لمعدل تصحيح الخطأ (FEC)، حيث يتعرف عليه الجهاز تلقائياً بمجرد إدخال التردد ({freq}) ومعدل الترميز ({sr}).",
    guide_2_text: "لإعداد هذا التردد، اضغط على زر Menu ثم اذهب إلى الإعدادات (Setup)، ومنها إلى البحث عن القنوات (Service Searching) ثم اختر التوليف اليدوي (Manual Scan). يجب تحديد نوع التوليف كـ User defined transponder، ثم انتقل لخانة الاستقطاب واختيار ({pol}). ولضمان التقاط الإشارة بسرعة، يُفضل اختيار قيمة الـ FEC يدوياً لتكون ({fec}) بدلاً من تركها على الوضع التلقائي.",
    guide_3_text: "لإضافة هذه القناة، ادخل إلى الإعدادات في شاشتك الذكية، ثم اختر البث أو القنوات، واضغط على التوليف اليدوي (Manual Tuning). سيظهر لك خيار الاستقطاب، قم بتعيينه على ({pol}). في الشاشات الحديثة، لا داعي للقلق بشأن معدل تصحيح الخطأ (FEC) فهو مدمج برمجياً؛ يكفي إدخال التردد ({freq}) ومعدل الترميز ({sr}).",
    guide_4_text: "في أجهزة الأندرويد، توجه إلى الإعدادات، ثم إعدادات القمر الصناعي، واختر تعديل التردد (TP Edit). قم بتعيين الاستقطاب على ({pol}). أما بالنسبة لمعدل تصحيح الخطأ (FEC)، فهو يكون على الوضع التلقائي (Auto) بشكل افتراضي، ولكن إذا لم تظهر الإشارة، يُنصح بتغييره يدوياً إلى ({fec}).",
    tip_title: "نصيحة تقنية:",
    tip_text: "تنبيه: معدل الترميز لهذا التردد مرتفع جداً ({sr}). قد لا تقبل بعض الرسيفرات القديمة سوى 5 أرقام، وفي هذه الحالة ستحتاج لتحديث سوفتوير جهازك أو استخدام رسيفر يدعم تكنولوجيا (DVB-S2).",
    freq_value: "التردد:",
    sr_value: "الترميز:",
    pol_value: "الاستقطاب:",
    fec_value: "FEC:",
    close: "إغلاق",
    back_to_options: "العودة للخيارات"
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
    dir: "ltr",
    quick_guide_title: "Receiver Setup:",
    quick_guide_pol: "Polarization: Choose {pol}. {area_note}",
    quick_guide_fec: "FEC: Choose {fec} (or leave Auto).",
    mena_note: "(Note: Broadcasts on the MENA coverage).",
    target_area_note: "(Note: Broadcasts on the {area} coverage).",
    help_setup_btn: "Help me set up this channel",
    help_screen_title: "Select your receiver type:",
    recv_type_1: "Popular & Chinese Receivers (e.g., Geant, Starsat)",
    recv_type_2: "Advanced 3rd Gen (Enigma2 e.g., Dreambox, Vu+)",
    recv_type_3: "Smart TVs (e.g., Samsung, LG built-in)",
    recv_type_4: "Modern Android Boxes (Forever servers, etc.)",
    guide_1_text: "To tune this frequency, press the Menu button, go to Installation, and open the TP List. You can easily set the polarization using the volume buttons on your remote to select ({pol}). Usually, there is no specific field for FEC, as the receiver detects it automatically once you enter the correct frequency ({freq}) and symbol rate ({sr}).",
    guide_2_text: "To set this up, press Menu, navigate to Setup, then Service Searching, and choose Manual Scan. Set the scan type to User defined transponder, and change the Polarization to ({pol}). For a faster signal lock, it is recommended to manually select the FEC value ({fec}) instead of leaving it on Auto.",
    guide_3_text: "To add this channel, go to the Settings on your Smart TV, select Broadcasting or Channels, and choose Manual Tuning. Set the polarization option to ({pol}). You don't need to worry about the FEC setting as modern TVs handle it automatically; simply enter the frequency ({freq}) and symbol rate ({sr}).",
    guide_4_text: "On Android receivers, open Settings, navigate to Satellite Settings, and choose TP Edit. Set the polarization to ({pol}). The FEC is usually set to Auto by default, but if you don't get a signal, it is recommended to manually change it to ({fec}).",
    tip_title: "Tech Tip:",
    tip_text: "High Symbol Rate Alert ({sr}): Older receivers might only accept 5 digits. You may need a software update or a newer DVB-S2 receiver.",
    freq_value: "Freq:",
    sr_value: "SR:",
    pol_value: "Pol:",
    fec_value: "FEC:",
    close: "Close",
    back_to_options: "Back to options"
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
    dir: "ltr",
    quick_guide_title: "Настройка ресивера:",
    quick_guide_pol: "Поляризация: выберите {pol}. {area_note}",
    quick_guide_fec: "FEC: выберите {fec} (или Auto).",
    mena_note: "(Примечание: вещание через покрытие MENA).",
    target_area_note: "(Примечание: вещание через покрытие {area}).",
    help_setup_btn: "Помогите настроить этот канал",
    help_screen_title: "Выберите тип вашего ресивера:",
    recv_type_1: "Популярные и китайские (Geant, Starsat, Tiger)",
    recv_type_2: "Продвинутые 3-го поколения (Enigma2: Dreambox, Vu+)",
    recv_type_3: "Smart TV (встроенные тюнеры Samsung, LG)",
    recv_type_4: "Современные Android ТВ-приставки",
    guide_1_text: "Для настройки этой частоты нажмите кнопку Menu, перейдите в Installation и откройте TP List. Вы можете легко установить поляризацию с помощью кнопок громкости на пульте ДУ, выбрав ({pol}). Обычно отдельного поля для FEC нет, так как ресивер определяет его автоматически после ввода правильной частоты ({freq}) и скорости потока ({sr}).",
    guide_2_text: "Для настройки нажмите Menu, перейдите в Setup, затем Service Searching и выберите Manual Scan. Установите тип сканирования User defined transponder и измените поляризацию на ({pol}). Для более быстрого захвата сигнала рекомендуется вручную выбрать значение FEC ({fec}) вместо Auto.",
    guide_3_text: "Чтобы добавить этот канал, зайдите в Настройки вашего Smart TV, выберите Трансляция или Каналы и нажмите Ручная настройка (Manual Tuning). Установите поляризацию на ({pol}). В современных телевизорах настраивать FEC не нужно, он определяется автоматически; просто введите частоту ({freq}) и скорость потока ({sr}).",
    guide_4_text: "На Android-ресиверах откройте Настройки, перейдите в Настройки спутника и выберите TP Edit. Установите поляризацию на ({pol}). FEC обычно по умолчанию установлен на Auto, но если сигнала нет, рекомендуется вручную изменить его на ({fec}).",
    tip_title: "Технический совет:",
    tip_text: "Высокая символьная скорость ({sr}): Старые ресиверы могут принимать только 5 цифр. Может потребоваться обновление ПО или ресивер (DVB-S2).",
    freq_value: "Частота:",
    sr_value: "Скорость:",
    pol_value: "Поляр:",
    fec_value: "FEC:",
    close: "Закрыть",
    back_to_options: "Назад к выбору"
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
      let basePol = '';
      let polSuffix = '';
      let pClass = '';
      let friendlyPolBadge = '';
      let friendlyPolName = '';
      let polHtml = '';
      
      if (tx.polarization) {
        const pUpper = tx.polarization.toUpperCase();
        if (pUpper.startsWith('H')) { basePol = 'H'; polSuffix = pUpper.substring(1); pClass = 'h'; }
        else if (pUpper.startsWith('V')) { basePol = 'V'; polSuffix = pUpper.substring(1); pClass = 'v'; }
        else if (pUpper.startsWith('L')) { basePol = 'L'; polSuffix = pUpper.substring(1); pClass = 'l'; }
        else if (pUpper.startsWith('R')) { basePol = 'R'; polSuffix = pUpper.substring(1); pClass = 'r'; }
        else { basePol = pUpper; polSuffix = ''; pClass = tx.polarization.toLowerCase(); }
        
        friendlyPolName = DICT[currentLang][`pol_${basePol}`] || basePol;
        friendlyPolBadge = tx.polarization; 
        polHtml = `<span class="pol-badge pol-${pClass}">${escape(friendlyPolBadge)}</span>`;
      }
      
      let areaNote = '';
      if (polSuffix && polSuffix !== '') {
        if (polSuffix === 'MENA') {
          areaNote = t('mena_note');
        } else {
          areaNote = t('target_area_note').replace('{area}', escape(polSuffix));
        }
      }
      
      const friendlyPolSafe = friendlyPolName;
      const qgPol = t('quick_guide_pol')
        .replace('{pol}', escape(friendlyPolSafe))
        .replace('{area_note}', areaNote);
      const qgFec = t('quick_guide_fec').replace('{fec}', escape(tx.fec || 'Auto'));
      
      const isHighSr = parseInt(tx.sr, 10) > 99999 || (tx.sr && tx.sr.length >= 6);
      let tipHtml = '';
      if (isHighSr) {
        tipHtml = `
          <div class="guide-tip" style="margin-top: 8px; padding: 10px; border-radius: 8px; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2);">
            <div class="guide-tip-title" style="color: #fcd34d; font-weight: 700; font-size: 13px; margin-bottom: 4px;">${t('tip_title')}</div>
            <div class="guide-tip-text" style="color: rgba(255,255,255,0.8); font-size: 12px; line-height: 1.5;">${t('tip_text').replace('{sr}', escape(tx.sr))}</div>
          </div>
        `;
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
        
        <div class="quick-guide">
          <div class="quick-guide-title">${t('quick_guide_title')}</div>
          <ul>
            <li>${qgPol}</li>
            <li>${qgFec}</li>
          </ul>
          ${tipHtml}
        </div>
        <button class="help-btn" onclick="openHelpModal('${escape(tx.frequency)}', '${escape(tx.sr)}', '${escape(friendlyPolSafe)}', '${escape(tx.fec || 'Auto')}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          ${t('help_setup_btn')}
        </button>
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

let currentGuideData = {};

window.openHelpModal = function(freq, sr, pol, fec) {
  currentGuideData = { freq, sr, pol, fec };
  
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;
  
  modalBody.innerHTML = `
    <h2 class="modal-title">${t('help_screen_title')}</h2>
    <div class="recv-option" onclick="showGuide(1)">1. ${t('recv_type_1')}</div>
    <div class="recv-option" onclick="showGuide(2)">2. ${t('recv_type_2')}</div>
    <div class="recv-option" onclick="showGuide(3)">3. ${t('recv_type_3')}</div>
    <div class="recv-option" onclick="showGuide(4)">4. ${t('recv_type_4')}</div>
  `;
  
  const modalOverlay = document.getElementById('help-modal');
  modalOverlay.classList.add('active');
};

window.showGuide = function(type) {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;
  
  const d = currentGuideData;
  const isHighSr = parseInt(d.sr, 10) > 99999 || (d.sr && d.sr.length >= 6);
  
  const pText = t(`guide_${type}_text`)
    .replace('{pol}', d.pol)
    .replace('{fec}', d.fec)
    .replace('{freq}', d.freq)
    .replace('{sr}', d.sr);
  
  let tipHtml = '';
  if (isHighSr) {
    tipHtml = `
      <div class="guide-tip">
        <div class="guide-tip-title">${t('tip_title')}</div>
        <div class="guide-tip-text">${t('tip_text').replace('{sr}', d.sr)}</div>
      </div>
    `;
  }
  
  modalBody.innerHTML = `
    <div class="back-to-options" onclick="openHelpModal('${d.freq}', '${d.sr}', '${d.pol}', '${d.fec}')">${t('back_to_options')}</div>
    
    <div class="guide-channel-info">
      <div class="g-info-item"><div class="g-info-lbl">${t('freq_value')}</div><div class="g-info-val">${d.freq}</div></div>
      <div class="g-info-item"><div class="g-info-lbl">${t('sr_value')}</div><div class="g-info-val">${d.sr}</div></div>
      <div class="g-info-item"><div class="g-info-lbl">${t('pol_value')}</div><div class="g-info-val">${d.pol}</div></div>
      <div class="g-info-item"><div class="g-info-lbl">${t('fec_value')}</div><div class="g-info-val">${d.fec}</div></div>
    </div>
    
    <div class="guide-details active">
      <div class="guide-article-text">${pText}</div>
    </div>
    
    ${tipHtml}
  `;
};

window.closeHelpModal = function(e) {
  if (e && e.target !== e.currentTarget && e.target.className !== 'modal-close') return;
  const modalOverlay = document.getElementById('help-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
};

init();
