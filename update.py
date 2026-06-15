import json
import re

with open(r'c:\Users\Administrator\Downloads\BirdsTV-8\BirdsTV\app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace DICT using regex
def replace_dict(match):
    dict_str = match.group(0)
    
    # AR replacements
    dict_str = dict_str.replace('"⚙️ طريقة ضبط أجهزة الرسيفر:"', '"طريقة ضبط أجهزة الرسيفر:"')
    dict_str = dict_str.replace('"💡 نصيحة تقنية:"', '"نصيحة تقنية:"')
    dict_str = dict_str.replace('"⬅️ العودة للخيارات"', '"العودة للخيارات"')
    dict_str = re.sub(r'step_access:.*?\n\s+step_pol:.*?\n\s+step_fec:.*?\n\s+guide_1_access:.*?\n\s+guide_1_pol:.*?\n\s+guide_1_fec:.*?\n\s+guide_2_access:.*?\n\s+guide_2_pol:.*?\n\s+guide_2_fec:.*?\n\s+guide_3_access:.*?\n\s+guide_3_pol:.*?\n\s+guide_3_fec:.*?\n\s+guide_4_access:.*?\n\s+guide_4_pol:.*?\n\s+guide_4_fec:.*?,', 
    '''guide_1_text: "لضبط هذا التردد، قم بالدخول إلى القائمة الرئيسية (Menu)، ثم انتقل إلى خيار التثبيت (Installation) وافتح قائمة الترددات (TP List). يمكنك ضبط الاستقطاب بسهولة عبر أزرار الصوت واختيار ({pol}). لا توجد عادة خانة مخصصة لمعدل تصحيح الخطأ (FEC)، حيث يتعرف عليه الجهاز تلقائياً بمجرد إدخال التردد ({freq}) ومعدل الترميز ({sr}).",
    guide_2_text: "لإعداد هذا التردد، اضغط على زر Menu ثم اذهب إلى الإعدادات (Setup)، ومنها إلى البحث عن القنوات (Service Searching) ثم اختر التوليف اليدوي (Manual Scan). يجب تحديد نوع التوليف كـ User defined transponder، ثم انتقل لخانة الاستقطاب واختيار ({pol}). ولضمان التقاط الإشارة بسرعة، يُفضل اختيار قيمة الـ FEC يدوياً لتكون ({fec}) بدلاً من تركها على الوضع التلقائي.",
    guide_3_text: "لإضافة هذه القناة، ادخل إلى الإعدادات في شاشتك الذكية، ثم اختر البث أو القنوات، واضغط على التوليف اليدوي (Manual Tuning). سيظهر لك خيار الاستقطاب، قم بتعيينه على ({pol}). في الشاشات الحديثة، لا داعي للقلق بشأن معدل تصحيح الخطأ (FEC) فهو مدمج برمجياً؛ يكفي إدخال التردد ({freq}) ومعدل الترميز ({sr}).",
    guide_4_text: "في أجهزة الأندرويد، توجه إلى الإعدادات، ثم إعدادات القمر الصناعي، واختر تعديل التردد (TP Edit). قم بتعيين الاستقطاب على ({pol}). أما بالنسبة لمعدل تصحيح الخطأ (FEC)، فهو يكون على الوضع التلقائي (Auto) بشكل افتراضي، ولكن إذا لم تظهر الإشارة، يُنصح بتغييره يدوياً إلى ({fec}).",''', dict_str, count=1)
    
    # EN replacements
    dict_str = dict_str.replace('"⚙️ Receiver Setup:"', '"Receiver Setup:"')
    dict_str = dict_str.replace('"💡 Tech Tip:"', '"Tech Tip:"')
    dict_str = dict_str.replace('"⬅️ Back to options"', '"Back to options"')
    dict_str = re.sub(r'step_access:.*?\n\s+step_pol:.*?\n\s+step_fec:.*?\n\s+guide_1_access:.*?\n\s+guide_1_pol:.*?\n\s+guide_1_fec:.*?\n\s+guide_2_access:.*?\n\s+guide_2_pol:.*?\n\s+guide_2_fec:.*?\n\s+guide_3_access:.*?\n\s+guide_3_pol:.*?\n\s+guide_3_fec:.*?\n\s+guide_4_access:.*?\n\s+guide_4_pol:.*?\n\s+guide_4_fec:.*?,', 
    '''guide_1_text: "To tune this frequency, press the Menu button, go to Installation, and open the TP List. You can easily set the polarization using the volume buttons on your remote to select ({pol}). Usually, there is no specific field for FEC, as the receiver detects it automatically once you enter the correct frequency ({freq}) and symbol rate ({sr}).",
    guide_2_text: "To set this up, press Menu, navigate to Setup, then Service Searching, and choose Manual Scan. Set the scan type to User defined transponder, and change the Polarization to ({pol}). For a faster signal lock, it is recommended to manually select the FEC value ({fec}) instead of leaving it on Auto.",
    guide_3_text: "To add this channel, go to the Settings on your Smart TV, select Broadcasting or Channels, and choose Manual Tuning. Set the polarization option to ({pol}). You don't need to worry about the FEC setting as modern TVs handle it automatically; simply enter the frequency ({freq}) and symbol rate ({sr}).",
    guide_4_text: "On Android receivers, open Settings, navigate to Satellite Settings, and choose TP Edit. Set the polarization to ({pol}). The FEC is usually set to Auto by default, but if you don't get a signal, it is recommended to manually change it to ({fec}).",''', dict_str, count=1)
    
    # RU replacements
    dict_str = dict_str.replace('"⚙️ Настройка ресивера:"', '"Настройка ресивера:"')
    dict_str = dict_str.replace('"💡 Технический совет:"', '"Технический совет:"')
    dict_str = dict_str.replace('"⬅️ Назад к выбору"', '"Назад к выбору"')
    dict_str = re.sub(r'step_access:.*?\n\s+step_pol:.*?\n\s+step_fec:.*?\n\s+guide_1_access:.*?\n\s+guide_1_pol:.*?\n\s+guide_1_fec:.*?\n\s+guide_2_access:.*?\n\s+guide_2_pol:.*?\n\s+guide_2_fec:.*?\n\s+guide_3_access:.*?\n\s+guide_3_pol:.*?\n\s+guide_3_fec:.*?\n\s+guide_4_access:.*?\n\s+guide_4_pol:.*?\n\s+guide_4_fec:.*?,', 
    '''guide_1_text: "Для настройки этой частоты нажмите кнопку Menu, перейдите в Installation и откройте TP List. Вы можете легко установить поляризацию с помощью кнопок громкости на пульте ДУ, выбрав ({pol}). Обычно отдельного поля для FEC нет, так как ресивер определяет его автоматически после ввода правильной частоты ({freq}) и скорости потока ({sr}).",
    guide_2_text: "Для настройки нажмите Menu, перейдите в Setup, затем Service Searching и выберите Manual Scan. Установите тип сканирования User defined transponder и измените поляризацию на ({pol}). Для более быстрого захвата сигнала рекомендуется вручную выбрать значение FEC ({fec}) вместо Auto.",
    guide_3_text: "Чтобы добавить этот канал, зайдите в Настройки вашего Smart TV, выберите Трансляция или Каналы и нажмите Ручная настройка (Manual Tuning). Установите поляризацию на ({pol}). В современных телевизорах настраивать FEC не нужно, он определяется автоматически; просто введите частоту ({freq}) и скорость потока ({sr}).",
    guide_4_text: "На Android-ресиверах откройте Настройки, перейдите в Настройки спутника и выберите TP Edit. Установите поляризацию на ({pol}). FEC обычно по умолчанию установлен на Auto, но если сигнала нет, рекомендуется вручную изменить его на ({fec}).",''', dict_str, count=1)
    
    return dict_str

content = re.sub(r'const DICT = \{.*?\n\};', replace_dict, content, flags=re.DOTALL)

# Replace the showGuide function logic to remove steps
new_show_guide = """window.showGuide = function(type) {
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
};"""

content = re.sub(r'window\.showGuide = function\(type\) \{.*?\n\};', new_show_guide, content, flags=re.DOTALL)

with open(r'c:\Users\Administrator\Downloads\BirdsTV-8\BirdsTV\app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("done")
