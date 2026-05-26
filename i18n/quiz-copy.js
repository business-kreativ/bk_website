(function () {
  'use strict';

  const COMMON = {
    choices: {
      en: {
        daten_mehrfach: 'Data is entered multiple times into different systems',
        aufgaben_doppelt: '“Has anyone already done this?” — tasks get done twice',
        neue_ma_wochen: 'New employees need weeks to understand workflows',
        infos_verteilt: 'Important information is scattered across WhatsApp, email, Excel and paper',
        fehler_beim_kunden: 'Errors only show up at the customer — embarrassing and expensive',
        krankheit_alles_steht: 'When someone is sick or on vacation, an entire process stops',
        berichte_dauern: 'Reports take hours to compile instead of minutes',
        mitarbeiter_rufen_status: 'Employees call just to ask for status updates',
        wettbewerb: 'We lose competitiveness — competitors are more efficient',
        nicht_wachsen: 'We cannot keep growing because operations are stuck',
        mitarbeiter_verlieren: 'We lose good employees through overload and frustration',
        fehlerkosten_steigen: 'Error costs keep rising — eventually this will hurt us',
        alles_okay: 'Honestly? Things are okay — I mainly want to optimize',
        keine_zeit: 'We know we need to act, but daily work leaves no time',
        mehrfach_versucht: 'We have tried automation before — without lasting success',
        technisch_fit: 'We are technically capable, but need an outside perspective and method',
        bereit_zu_investieren: 'We are ready to invest if the concept is convincing',
        einziger_der_sieht: 'I am the only one who sees the problem — I still need to convince others',
        keine_zeit_obj: 'We did not have time to look into it properly',
        wussten_nicht_wo_anfangen: 'We did not know where to start',
        kosten_aufwand: 'We were afraid of high costs or too much effort',
        schlechte_erfahrungen: 'We had bad experiences with IT providers',
        unsicher_funktioniert: 'We were not sure whether it would work for us',
        intern_nicht_durchgehalten: 'We tried it, but could not keep it going internally',
        sofort: 'Immediately — the pain is acute',
        '3_monate': 'Within the next 3 months',
        dieses_jahr: 'Still this year',
        informieren: 'First gather information',
        ich_chef: 'Me — I am the managing director / owner',
        fuehrungsteam: 'We decide together in the leadership team',
        vorbereiter: 'I prepare it, someone else makes the final decision',
        unschluessig: 'We are not yet sure who should drive this',
        '200+': '200 or more',
        dienstleistung: 'Services / consulting',
        handwerk: 'Crafts / manufacturing / production',
        handel: 'Retail / e-commerce',
        gesundheit: 'Healthcare / care / social sector',
        it_tech: 'IT / tech',
        andere: 'Other',
      },
      ru: {
        daten_mehrfach: 'Данные несколько раз вводятся в разные системы',
        aufgaben_doppelt: '«Это уже кто-то сделал?» — задачи выполняются дважды',
        neue_ma_wochen: 'Новым сотрудникам нужны недели, чтобы понять процессы',
        infos_verteilt: 'Важная информация разбросана по WhatsApp, почте, Excel и бумаге',
        fehler_beim_kunden: 'Ошибки обнаруживаются только у клиента — неприятно и дорого',
        krankheit_alles_steht: 'При болезни или отпуске останавливается целый процесс',
        berichte_dauern: 'Отчеты собираются часами вместо минут',
        mitarbeiter_rufen_status: 'Сотрудники звонят, чтобы узнать статус',
        wettbewerb: 'Мы теряем конкурентоспособность — конкуренты эффективнее',
        nicht_wachsen: 'Мы не можем расти дальше, потому что застряли в операционке',
        mitarbeiter_verlieren: 'Мы теряем хороших сотрудников из-за перегрузки и раздражения',
        fehlerkosten_steigen: 'Стоимость ошибок растет — однажды это сильно ударит',
        alles_okay: 'Честно? В целом все нормально — я хочу оптимизировать',
        keine_zeit: 'Мы знаем, что надо действовать, но в ежедневной работе нет времени',
        mehrfach_versucht: 'Мы уже пробовали автоматизировать — без устойчивого результата',
        technisch_fit: 'Технически мы сильны, но нужна внешняя перспектива и методика',
        bereit_zu_investieren: 'Мы готовы инвестировать, если концепция убедит',
        einziger_der_sieht: 'Только я вижу проблему — остальных еще надо убедить',
        keine_zeit_obj: 'У нас не было времени глубоко этим заняться',
        wussten_nicht_wo_anfangen: 'Мы не знали, с чего начать',
        kosten_aufwand: 'Мы боялись слишком больших затрат или усилий',
        schlechte_erfahrungen: 'У нас был плохой опыт с IT-подрядчиками',
        unsicher_funktioniert: 'Мы не были уверены, что это вообще сработает у нас',
        intern_nicht_durchgehalten: 'Мы пробовали, но не смогли довести внутри',
        sofort: 'Сразу — проблема острая',
        '3_monate': 'В ближайшие 3 месяца',
        dieses_jahr: 'Еще в этом году',
        informieren: 'Сначала хочу разобраться',
        ich_chef: 'Я — управляющий / владелец',
        fuehrungsteam: 'Мы решаем вместе в руководящей команде',
        vorbereiter: 'Я готовлю решение, финально решает другой человек',
        unschluessig: 'Мы еще не уверены, кто должен этим заниматься',
        '200+': '200 и больше',
        dienstleistung: 'Услуги / консалтинг',
        handwerk: 'Ремесло / производство',
        handel: 'Торговля / e-commerce',
        gesundheit: 'Здравоохранение / уход / социальная сфера',
        it_tech: 'IT / технологии',
        andere: 'Другое',
      },
      uk: {
        daten_mehrfach: 'Дані кілька разів вводяться в різні системи',
        aufgaben_doppelt: '«Це вже хтось зробив?» — задачі виконуються двічі',
        neue_ma_wochen: 'Новим працівникам потрібні тижні, щоб зрозуміти процеси',
        infos_verteilt: 'Важлива інформація розкидана у WhatsApp, пошті, Excel і на папері',
        fehler_beim_kunden: 'Помилки стають помітними лише у клієнта — неприємно й дорого',
        krankheit_alles_steht: 'Під час хвороби чи відпустки зупиняється цілий процес',
        berichte_dauern: 'Звіти збираються годинами замість хвилин',
        mitarbeiter_rufen_status: 'Працівники телефонують, щоб дізнатися статус',
        wettbewerb: 'Ми втрачаємо конкурентоспроможність — конкуренти ефективніші',
        nicht_wachsen: 'Ми не можемо рости далі, бо застрягли в операційці',
        mitarbeiter_verlieren: 'Ми втрачаємо хороших працівників через перевантаження й роздратування',
        fehlerkosten_steigen: 'Вартість помилок зростає — колись це сильно вдарить',
        alles_okay: 'Чесно? Загалом усе нормально — я хочу оптимізувати',
        keine_zeit: 'Ми знаємо, що треба діяти, але в щоденній роботі немає часу',
        mehrfach_versucht: 'Ми вже пробували автоматизувати — без стійкого результату',
        technisch_fit: 'Технічно ми сильні, але потрібен зовнішній погляд і методика',
        bereit_zu_investieren: 'Ми готові інвестувати, якщо концепція переконає',
        einziger_der_sieht: 'Лише я бачу проблему — інших ще треба переконати',
        keine_zeit_obj: 'У нас не було часу глибоко цим зайнятися',
        wussten_nicht_wo_anfangen: 'Ми не знали, з чого почати',
        kosten_aufwand: 'Ми боялися завеликих витрат або зусиль',
        schlechte_erfahrungen: 'У нас був поганий досвід з IT-підрядниками',
        unsicher_funktioniert: 'Ми не були впевнені, що це спрацює саме в нас',
        intern_nicht_durchgehalten: 'Ми пробували, але не змогли втримати всередині',
        sofort: 'Одразу — проблема гостра',
        '3_monate': 'У найближчі 3 місяці',
        dieses_jahr: 'Ще цього року',
        informieren: 'Спершу хочу розібратися',
        ich_chef: 'Я — керівник / власник',
        fuehrungsteam: 'Ми вирішуємо разом у керівній команді',
        vorbereiter: 'Я готую рішення, фінально вирішує інша людина',
        unschluessig: 'Ми ще не впевнені, хто має це вести',
        '200+': '200 або більше',
        dienstleistung: 'Послуги / консалтинг',
        handwerk: 'Ремесло / виробництво',
        handel: 'Торгівля / e-commerce',
        gesundheit: 'Охорона здоровʼя / догляд / соціальна сфера',
        it_tech: 'IT / технології',
        andere: 'Інше',
      },
      tr: {
        daten_mehrfach: 'Veriler farklı sistemlere birden fazla kez giriliyor',
        aufgaben_doppelt: '“Bunu biri yaptı mı?” — görevler iki kez yapılıyor',
        neue_ma_wochen: 'Yeni çalışanların süreçleri anlaması haftalar sürüyor',
        infos_verteilt: 'Önemli bilgiler WhatsApp, e-posta, Excel ve kağıtta dağınık duruyor',
        fehler_beim_kunden: 'Hatalar ancak müşteride fark ediliyor — utandırıcı ve pahalı',
        krankheit_alles_steht: 'Hastalık/izin durumunda tüm süreç duruyor',
        berichte_dauern: 'Raporlar dakikalar yerine saatler sürüyor',
        mitarbeiter_rufen_status: 'Çalışanlar durum sormak için arıyor',
        wettbewerb: 'Rekabet gücümüzü kaybediyoruz — rakipler daha verimli',
        nicht_wachsen: 'Operasyonel olarak takıldığımız için büyüyemiyoruz',
        mitarbeiter_verlieren: 'Aşırı yük ve hayal kırıklığı yüzünden iyi çalışanları kaybediyoruz',
        fehlerkosten_steigen: 'Hata maliyetleri artıyor — bir noktada can yakacak',
        alles_okay: 'Dürüstçe? Aslında her şey yolunda — sadece optimize etmek istiyorum',
        keine_zeit: 'Harekete geçmemiz gerektiğini biliyoruz ama günlük işte zaman bulamıyoruz',
        mehrfach_versucht: 'Otomasyonu birkaç kez denedik — kalıcı başarı olmadı',
        technisch_fit: 'Teknik olarak iyiyiz ama dış bakış ve yöntem gerekiyor',
        bereit_zu_investieren: 'Konsept doğruysa yatırım yapmaya hazırız',
        einziger_der_sieht: 'Sorunu sadece ben görüyorum — diğerlerini ikna etmem gerekiyor',
        keine_zeit_obj: 'Buna derinlemesine zaman ayıramadık',
        wussten_nicht_wo_anfangen: 'Nereden başlayacağımızı bilmiyorduk',
        kosten_aufwand: 'Çok yüksek maliyet veya efor olmasından korktuk',
        schlechte_erfahrungen: 'IT hizmet sağlayıcılarıyla kötü deneyimler yaşadık',
        unsicher_funktioniert: 'Bizde işe yarayıp yaramayacağından emin değildik',
        intern_nicht_durchgehalten: 'Denedik ama içeride sürdüremedik',
        sofort: 'Hemen — sorun akut',
        '3_monate': 'Önümüzdeki 3 ay içinde',
        dieses_jahr: 'Bu yıl içinde',
        informieren: 'Önce bilgi almak istiyorum',
        ich_chef: 'Ben — genel müdür / sahibim',
        fuehrungsteam: 'Yönetim ekibi olarak birlikte karar veririz',
        vorbereiter: 'Ben hazırlarım, nihai kararı başka biri verir',
        unschluessig: 'Bunu kimin yürüteceğinden henüz emin değiliz',
        '200+': '200 veya daha fazla',
        dienstleistung: 'Hizmet / danışmanlık',
        handwerk: 'Zanaat / imalat / üretim',
        handel: 'Ticaret / e-ticaret',
        gesundheit: 'Sağlık / bakım / sosyal alan',
        it_tech: 'IT / teknoloji',
        andere: 'Diğer',
      },
    },
    ui: {
      en: {
        q: 'Question {n} of 11',
        q11: 'Question 11 of 11 · Final question',
        q1Title: 'You probably know this — which of these situations happen in your company?',
        q1Hint: 'Select everything that applies. Be honest with yourself.',
        q2Note: 'Based on your answers',
        q2Title: 'Which of these situations frustrates you <em>personally the most</em>?',
        q3Title: 'Estimate honestly — nobody sees this except you.',
        q3Hint: 'How many hours per week does your team lose to recurring manual work?',
        q3Unit: 'hrs / week',
        q3Label: 'Estimated time loss in the team',
        q3Roi: 'Estimated annual cost',
        q3Sub: 'based on an average hourly rate of €45',
        tip1Label: '◆ First insight',
        tip1: 'In companies of <strong>your size</strong>, targeted automation typically saves <strong>€18,000–€35,000 per year</strong>. You will see the full picture at the end.',
        q4Title: 'Imagine nothing changes in the next 12 months. What would be the biggest consequence?',
        q5Title: 'What best describes your current situation?',
        q6Title: 'Honestly — what has stopped you from tackling this so far?',
        q7Title: 'When do you want to tackle this?',
        tip2Label: '◆ Quick tip based on your answers',
        tip2: 'The fastest lever in your situation is often a <strong>sync between existing tools</strong>. You avoid new software and gain transparency immediately.',
        q8Title: 'Who decides on investments like this in your company?',
        q9Title: 'How many employees does your company have?',
        q10Title: 'So we can classify you correctly — which industry are you in?',
        q11Title: 'What would be the <em>ideal outcome</em> of a 30-minute first call with us?',
        q11Hint: 'Optional — but we really take it seriously.',
        q11Ph: 'e.g. “I finally want to understand which 3 processes we can automate and where to start …”',
        lever: 'LEVER',
        recip1: 'With <strong>{hours} hours / week</strong>, comparable companies typically save <strong>{lower}–{upper} € per year</strong> through targeted automation. You will see the full picture at the end.',
        firstRead: '<p><strong>{name}, your answers show a clear automation pattern.</strong></p><p>A few targeted improvements can remove the biggest bottlenecks without turning this into a months-long IT project.</p><p style="color:var(--muted);font-size:13px;">Your complete analysis follows in a few seconds…</p>',
        caseQuote: 'A comparable SME started with one clearly scoped process instead of a big-bang project. <strong>Result after a few weeks: fewer manual handovers, less status chasing and more time for real work.</strong>',
        caseMeta: 'Comparable pain profile',
      },
      ru: {
        q: 'Вопрос {n} из 11', q11: 'Вопрос 11 из 11 · Последний вопрос',
        q1Title: 'Наверняка вам это знакомо — какие ситуации встречаются у вас?', q1Hint: 'Выберите все подходящие варианты — честная самооценка.', q2Note: 'На основе ваших ответов', q2Title: 'Какая из этих ситуаций раздражает вас <em>лично больше всего</em>?', q3Title: 'Оцените честно — это видите только вы.', q3Hint: 'Сколько часов в неделю команда теряет на повторяющихся ручных задачах?', q3Unit: 'ч / неделя', q3Label: 'Оценочная потеря времени в команде', q3Roi: 'Оценочные годовые затраты', q3Sub: 'при средней ставке 45 € в час', tip1Label: '◆ Первое наблюдение', tip1: 'В компаниях <strong>вашего масштаба</strong> целевая автоматизация обычно экономит <strong>18 000–35 000 € в год</strong>. Полную картину вы увидите в конце.', q4Title: 'Представьте, что за 12 месяцев ничего не изменится. Какое последствие будет самым серьезным?', q5Title: 'Что лучше всего описывает вашу текущую ситуацию?', q6Title: 'Честно — что до сих пор мешало заняться этой темой?', q7Title: 'Когда вы хотите заняться этой темой?', tip2Label: '◆ Быстрый совет по вашим ответам', tip2: 'Самый быстрый рычаг в вашей ситуации часто — <strong>синхронизация уже существующих инструментов</strong>. Без новой системы вы сразу получаете прозрачность.', q8Title: 'Кто у вас принимает решения о таких инвестициях?', q9Title: 'Сколько сотрудников в вашей компании?', q10Title: 'Чтобы правильно вас классифицировать — в какой отрасли вы работаете?', q11Title: 'Какой <em>идеальный результат</em> вы хотели бы получить от 30-минутного первого разговора?', q11Hint: 'Необязательно — но мы действительно учитываем это.', q11Ph: 'Например: «Я хочу наконец понять, какие 3 процесса можно автоматизировать и с чего начать …»', lever: 'РЫЧАГ', recip1: 'При <strong>{hours} ч / неделю</strong> похожие компании обычно экономят <strong>{lower}–{upper} € в год</strong> благодаря целевой автоматизации. Полную картину вы увидите в конце.', firstRead: '<p><strong>{name}, ваши ответы показывают четкий потенциал автоматизации.</strong></p><p>Несколько точечных улучшений могут убрать главные узкие места без многомесячного IT-проекта.</p><p style="color:var(--muted);font-size:13px;">Полный анализ появится через несколько секунд…</p>', caseQuote: 'Похожая компания начала с одного четко ограниченного процесса вместо большого проекта. <strong>Через несколько недель: меньше ручных передач, меньше вопросов о статусе и больше времени на настоящую работу.</strong>', caseMeta: 'Похожий профиль боли',
      },
      uk: {
        q: 'Питання {n} з 11', q11: 'Питання 11 з 11 · Останнє питання',
        q1Title: 'Вам це, мабуть, знайомо — які з цих ситуацій трапляються у вас?', q1Hint: 'Оберіть усе, що підходить. Чесна самооцінка.', q2Note: 'На основі ваших відповідей', q2Title: 'Яка з цих ситуацій дратує вас <em>особисто найбільше</em>?', q3Title: 'Оцініть чесно — це бачите лише ви.', q3Hint: 'Скільки годин на тиждень команда втрачає на повторюваних ручних задачах?', q3Unit: 'год / тиждень', q3Label: 'Орієнтовна втрата часу в команді', q3Roi: 'Орієнтовні річні витрати', q3Sub: 'за середньої ставки 45 € на годину', tip1Label: '◆ Перше спостереження', tip1: 'У компаніях <strong>вашого масштабу</strong> цільова автоматизація зазвичай економить <strong>18 000–35 000 € на рік</strong>. Повну картину ви побачите наприкінці.', q4Title: 'Уявімо, що за 12 місяців нічого не зміниться. Який наслідок буде найбільшим?', q5Title: 'Що найкраще описує вашу поточну ситуацію?', q6Title: 'Чесно — що досі заважало взятися за цю тему?', q7Title: 'Коли ви хочете зайнятися цією темою?', tip2Label: '◆ Швидка порада за вашими відповідями', tip2: 'Найшвидший важіль у вашій ситуації часто — <strong>синхронізація наявних інструментів</strong>. Без нової системи ви одразу отримуєте прозорість.', q8Title: 'Хто у вас ухвалює рішення щодо таких інвестицій?', q9Title: 'Скільки працівників у вашій компанії?', q10Title: 'Щоб правильно вас класифікувати — у якій галузі ви працюєте?', q11Title: 'Який <em>ідеальний результат</em> ви хотіли б отримати від 30-хвилинної першої розмови?', q11Hint: 'Необовʼязково — але ми справді це враховуємо.', q11Ph: 'Наприклад: «Я хочу нарешті зрозуміти, які 3 процеси можна автоматизувати і з чого почати …»', lever: 'ВАЖІЛЬ', recip1: 'За <strong>{hours} год / тиждень</strong> подібні компанії зазвичай економлять <strong>{lower}–{upper} € на рік</strong> завдяки цільовій автоматизації. Повну картину ви побачите наприкінці.', firstRead: '<p><strong>{name}, ваші відповіді показують чіткий потенціал автоматизації.</strong></p><p>Кілька точкових покращень можуть прибрати головні вузькі місця без багатомісячного IT-проєкту.</p><p style="color:var(--muted);font-size:13px;">Повний аналіз зʼявиться за кілька секунд…</p>', caseQuote: 'Подібна компанія почала з одного чітко обмеженого процесу замість великого проєкту. <strong>За кілька тижнів: менше ручних передач, менше запитів про статус і більше часу на справжню роботу.</strong>', caseMeta: 'Подібний профіль болю',
      },
      tr: {
        q: 'Soru {n} / 11', q11: 'Soru 11 / 11 · Son soru',
        q1Title: 'Bunu muhtemelen biliyorsunuz — bu durumlardan hangileri sizde yaşanıyor?', q1Hint: 'Uygun olanların hepsini seçin. Dürüst bir öz değerlendirme.', q2Note: 'Yanıtlarınıza göre', q2Title: 'Bu durumlardan hangisi sizi <em>kişisel olarak en çok</em> yoruyor?', q3Title: 'Dürüstçe tahmin edin — bunu sizden başka kimse görmez.', q3Hint: 'Ekibiniz tekrarlayan manuel işler için haftada kaç saat kaybediyor?', q3Unit: 'saat / hafta', q3Label: 'Ekipte tahmini zaman kaybı', q3Roi: 'Tahmini yıllık maliyet', q3Sub: 'ortalama 45 € saatlik ücretle', tip1Label: '◆ İlk içgörü', tip1: '<strong>Sizin ölçeğinizdeki</strong> şirketlerde hedefli otomasyon genellikle yılda <strong>18.000–35.000 €</strong> tasarruf sağlar. Tam tabloyu sonunda göreceksiniz.', q4Title: 'Diyelim ki 12 ay boyunca hiçbir şey değişmedi. En büyük sonuç ne olurdu?', q5Title: 'Mevcut durumunuzu en iyi ne anlatır?', q6Title: 'Dürüst olalım — bu konuya başlamanızı şimdiye kadar ne engelledi?', q7Title: 'Bu konuyu ne zaman ele almak istiyorsunuz?', tip2Label: '◆ Yanıtlarınıza göre hızlı ipucu', tip2: 'Sizin durumda en hızlı kaldıraç çoğu zaman <strong>mevcut araçlar arasında senkronizasyon</strong> kurmaktır. Yeni yazılım almadan hemen şeffaflık kazanırsınız.', q8Title: 'Sizde bu tür yatırımlara kim karar verir?', q9Title: 'Şirketinizde kaç çalışan var?', q10Title: 'Sizi doğru sınıflandırabilmemiz için — hangi sektörde çalışıyorsunuz?', q11Title: 'Bizimle 30 dakikalık ilk görüşmeden sizin için <em>ideal sonuç</em> ne olurdu?', q11Hint: 'İsteğe bağlı — ama bunu gerçekten dikkate alıyoruz.', q11Ph: 'Örn. “Bizde hangi 3 sürecin otomatikleştirilebileceğini ve nereden başlamam gerektiğini anlamak istiyorum …”', lever: 'KALDIRAÇ', recip1: '<strong>{hours} saat / hafta</strong> için benzer şirketler hedefli otomasyonla genellikle yılda <strong>{lower}–{upper} €</strong> tasarruf eder. Tam tabloyu sonunda göreceksiniz.', firstRead: '<p><strong>{name}, yanıtlarınız net bir otomasyon potansiyeli gösteriyor.</strong></p><p>Birkaç hedefli iyileştirme, bunu aylar süren bir IT projesine çevirmeden en büyük darboğazları kaldırabilir.</p><p style="color:var(--muted);font-size:13px;">Tam analiziniz birkaç saniye içinde geliyor…</p>', caseQuote: 'Benzer bir KOBİ büyük bir proje yerine net sınırları olan tek bir süreçle başladı. <strong>Birkaç hafta sonra: daha az manuel devir, daha az durum sorgusu ve gerçek işe daha fazla zaman.</strong>', caseMeta: 'Benzer sorun profili',
      },
    },
  };

  const PERSONA_KEYS = {
    p1_solopreneur: ['Build coverage', 'Documented workflows so work does not stop when someone is away.', 'Risk reduced', 'Automate the order inbox', 'Requests are captured, assigned and answered automatically.', '~6 h / week', 'Dashboards instead of questions', 'Live status without you becoming the bottleneck.', 'Mental load reduced', '30-minute first call — concrete relief for you', 'High · Fast relief'],
    p2_wachstum: ['Sync systems', 'CRM, accounting and warehouse data stay aligned.', '~12 h / week', 'Automate reporting', 'Reports are generated instead of rebuilt by hand.', '~4 h / week', 'Scalable order logic', 'Order intake scales without extra headcount.', '~8 h / week', 'Roadmap workshop for your next growth phase', 'High · Growth critical'],
    p3_toolprofi: ['Tool audit', 'We map your existing tools and unused interfaces.', 'Clear current state', 'Integration layer', 'Connect what you already use instead of buying more software.', '60–80% cost saving', 'Custom modules', 'Where standard integrations fail, we build precise bridges.', 'Full control', 'Strategy sparring — outside perspective in 30 minutes', 'High · Quickly actionable'],
    p4_skeptiker: ['Fixed-price audit', 'A clear entry point without an open-ended budget.', 'No blank cheque', 'Quick win in 4 weeks', 'One clearly scoped result you can feel quickly.', '3–5 h / week', 'Transfer documentation', 'What we build remains maintainable without us.', 'No lock-in', 'Fixed-price audit — low-risk first step', 'Medium · Trust matters'],
    p5_quality: ['Plausibility checks', 'Automatic checks at the handover points where mistakes happen.', 'Error rate -80%', 'Single source of truth', 'One reliable data base instead of conflicting versions.', 'Fewer complaints', 'Four-eye logic', 'Critical values are checked before they reach the customer.', 'Protect reputation', 'Error-cost analysis as the first module', 'High · Hidden costs'],
    p6_daten: ['Tool mapping', 'A clear map of where information lives and who needs it.', 'Clarity on one page', 'Automatic data sync', 'One change updates the relevant systems automatically.', '~8 h / week saved', 'Live status dashboard', 'Orders can be tracked without calls or Excel.', 'Status calls -90%', 'System-sync workshop — we map your tools', 'High · Quickly visible'],
    p7_team: ['Remove routine pain', 'Find and automate the five most frustrating tasks.', 'Higher satisfaction', 'Coverage and onboarding', 'New people understand workflows in days instead of weeks.', 'Onboarding -70%', 'Visible quick wins', 'The team sees that their daily friction is being solved.', 'Retention improves', 'Quick-win roadmap — reduce pressure in 4 weeks', 'High · HR relevant'],
    p8_optimierer: ['Connect workflows', 'Link handovers that still happen manually.', '~4 h / week per team', 'Data analysis layer', 'Turn operational data into better decisions.', 'Better decisions', 'Find silent bottlenecks', 'Even “okay” processes often run 20% faster.', 'Free capacity', 'Optimization audit for well-running companies', 'Medium · Next level'],
    p9_unentschlossen: ['Process map', 'Visualize current workflows and bottlenecks.', 'Internal alignment', 'Prioritize top 3 levers', 'Decide what should be tackled first.', 'Clear plan', 'Bring stakeholders along', 'A fact base that helps you convince internally.', 'Buy-in', 'Process map to take away — free first step', 'Medium · Clarity first'],
    p10_enterprise: ['Architecture assessment', 'Strategic view of systems and consolidation potential.', 'Six-figure potential', 'Step-by-step modernization', 'A roadmap without a risky big bang.', 'Lower transformation risk', 'Cross-department sync', 'Connect data and workflows across departments.', 'Communication -50%', 'Architecture assessment for your system landscape', 'Very high · Strategic'],
  };

  const GENERIC_PERSONA = {
    ru: ['Карта процессов', 'Мы показываем, где именно теряется время и где стоит начать.', 'Ясность для команды', 'Синхронизация систем', 'Данные передаются автоматически между существующими инструментами.', '~8 ч / неделю', 'Живой статус', 'Прогресс виден без звонков, Excel и ручных уточнений.', 'Меньше ручной работы', '30-минутный разговор — конкретная дорожная карта', 'Высокий · Быстро видимый'],
    uk: ['Карта процесів', 'Ми показуємо, де саме втрачається час і з чого варто почати.', 'Ясність для команди', 'Синхронізація систем', 'Дані автоматично передаються між наявними інструментами.', '~8 год / тиждень', 'Живий статус', 'Прогрес видно без дзвінків, Excel і ручних уточнень.', 'Менше ручної роботи', '30-хвилинна розмова — конкретна дорожня карта', 'Високий · Швидко помітний'],
    tr: ['Süreç haritası', 'Zamanın nerede kaybolduğunu ve nereden başlamanız gerektiğini netleştiririz.', 'Ekip için netlik', 'Sistem senkronizasyonu', 'Veriler mevcut araçlar arasında otomatik aktarılır.', '~8 saat / hafta', 'Canlı durum görünümü', 'İlerleme telefon, Excel ve manuel sorgu olmadan görünür.', 'Daha az manuel iş', '30 dakikalık görüşme — somut yol haritası', 'Yüksek · Hızlı görünür'],
  };

  function lang() {
    return (window.BK_LANG || document.documentElement.lang || 'de').toLowerCase();
  }

  function fill(text, vars) {
    return Object.keys(vars || {}).reduce((result, key) => result.replaceAll('{' + key + '}', vars[key]), text);
  }

  function q(key, fallback, vars) {
    const current = COMMON.ui[lang()];
    return fill((current && current[key]) || fallback, vars);
  }

  function choice(value, fallback) {
    const current = COMMON.choices[lang()];
    return (current && current[value]) || fallback;
  }

  function setText(selector, value, html) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (html) el.innerHTML = value;
    else el.textContent = value;
  }

  function applyStatic() {
    if (lang() === 'de') return;
    for (let i = 1; i <= 10; i++) setText('#screen-q' + i + ' .q-number', q('q', '', { n: String(i).padStart(2, '0') }));
    setText('#screen-q11 .q-number', q('q11', ''));
    setText('#screen-q1 .q-title', q('q1Title', '')); setText('#screen-q1 .q-hint', q('q1Hint', ''));
    setText('#screen-q2 .q-conditional-note', q('q2Note', '')); setText('#screen-q2 .q-title', q('q2Title', ''), true);
    setText('#screen-q3 .q-title', q('q3Title', '')); setText('#screen-q3 .q-hint', q('q3Hint', ''));
    setText('.slider-unit', q('q3Unit', '')); setText('.slider-label', q('q3Label', '')); setText('.roi-label', q('q3Roi', '')); setText('.roi-sub', q('q3Sub', ''));
    setText('#screen-q4 .recip-tip-label', q('tip1Label', '')); setText('#recip-tip-1', q('tip1', ''), true); setText('#screen-q4 .q-title', q('q4Title', ''));
    setText('#screen-q5 .q-title', q('q5Title', '')); setText('#screen-q6 .q-title', q('q6Title', '')); setText('#screen-q7 .q-title', q('q7Title', ''));
    setText('#screen-q8 .recip-tip-label', q('tip2Label', '')); setText('#recip-tip-2', q('tip2', ''), true); setText('#screen-q8 .q-title', q('q8Title', ''));
    setText('#screen-q9 .q-title', q('q9Title', '')); setText('#screen-q10 .q-title', q('q10Title', ''));
    setText('#screen-q11 .q-title', q('q11Title', ''), true); setText('#screen-q11 .q-hint', q('q11Hint', ''));
    const q11 = document.getElementById('q11-input'); if (q11) q11.placeholder = q('q11Ph', q11.placeholder);
    document.querySelectorAll('.option[data-value]').forEach((button) => {
      const text = button.querySelector('.option-text');
      if (text) text.textContent = choice(button.dataset.value, text.textContent);
    });
  }

  window.bkQuizChoice = choice;
  window.bkQuizText = q;
  window.bkQuizLocalizePersonas = function (personas) {
    if (lang() === 'de') return;
    const ui = COMMON.ui[lang()];
    if (!ui) return;
    Object.keys(PERSONA_KEYS).forEach((key) => {
      if (!personas[key]) return;
      const row = lang() === 'en' ? PERSONA_KEYS[key] : GENERIC_PERSONA[lang()];
      personas[key].firstRead = (name) => fill(ui.firstRead, { name: name || '' });
      personas[key].hebel = [
        { title: row[0], desc: row[1], saving: row[2] },
        { title: row[3], desc: row[4], saving: row[5] },
        { title: row[6], desc: row[7], saving: row[8] },
      ];
      personas[key].cta = row[9];
      personas[key].potential = row[10];
      personas[key].case = { meta: ui.caseMeta, quote: ui.caseQuote };
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyStatic);
  else applyStatic();
})();
