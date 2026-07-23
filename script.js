const i18n = {
  en: {
    "nav.about":"About","nav.systems":"Systems","nav.stack":"Stack","nav.contact":"Contact","nav.available":"Available",
    "hero.tag":"Systems & Security Engineer",
    "hero.line1":"Building","hero.line2a":"reliable","hero.line2b":"systems","hero.line3":"methodically.",
    "hero.desc":"Mid-Level Software Engineer. Backend, Systems & Security. Self-taught. Hardware-curious. Driven by understanding what happens beneath the surface.",
    "hero.cta1":"View Systems ↓","hero.cta2":"Get in Touch","hero.scroll":"Scroll",
    "about.title":"About","about.skillsTitle":"Skill Profile",
    "about.p1":"I started programming from <strong>pure curiosity</strong> about how systems work — inspired by tech culture and the desire to understand what happens beneath the surface.",
    "about.p2":"With no formal education, no courses, and no corporate background, I taught myself everything from open online resources. My journey progressed from experimentation to <strong>structured engineering</strong>.",
    "about.p3":"Today I build production-grade systems for security research, hardware analysis, and automation. Every project is built with <strong>full system control</strong> — no black boxes.",
    "about.pr1":"Understand the system before extending it","about.pr2":"Reliability over hype",
    "about.pr3":"Prefer simple architectures that scale","about.pr4":"Hardware integration: Arduino, ESP32, RF systems",
    "about.pr5":"Write software that is easy to debug and maintain",
"about.pr6":"Languages: Russian | English | German",
    "stats.s1":"Production Systems","stats.s2":"Years Experience","stats.s3":"Self Taught","stats.s4":"Curiosity",
    "systems.title":"Systems","badge.prod":"IN PRODUCTION",
    "proj.cherenkov":"Real-time global radiological intelligence platform. Aggregates 10,000+ sensors, detects anomalies in milliseconds, predicts fallout dispersion. Built with Rust + WebAssembly for zero-cost architecture at 100% free tier.",
    "metric.perf":"Performance","metric.rel":"Reliability","metric.sensors":"Sensors","metric.detect":"Detection",
    "proj.esp32gotchi":"Autonomous WPA/WPA2 handshake capture device on ESP32-WROOM-32. FreeRTOS firmware with 4 core-pinned tasks, promiscuous-mode 802.11 sniffing, EAPOL parsing, PCAP writes to SD. OLED face UI, ~10 EUR BOM.",
    "proj.pinetcore":"Production-ready Raspberry Pi 5 network appliance. Rust core (Tokio/Axum/pnet) for packet capture and nftables firewall. Modular plugin system for WireGuard VPN, Pi-hole DNS, Suricata IDS. React 18 dashboard with live WebSocket metrics.",
    "proj.securemysite":"Local desktop security analyzer for AI-generated web projects. 100% offline SAST/DAST scanning with severity scoring and AI fix prompt generation.",
    "proj.gemini":"Enterprise-grade AI orchestration and monitoring system for BLACKBOXAI within VS Code. Real-time telemetry, command execution, and security sandboxing.",
    "proj.pivotmap":"Attack path intelligence engine for offensive security teams. Ingests scan results, builds directed attack graphs, identifies realistic pivot opportunities.",
    "proj.bluescope":"Bluetooth Monitoring & Security Platform. ML-powered anomaly detection, real-time BLE traffic analysis, and comprehensive security auditing.",
    "proj.flipper":"RF analysis platform for Flipper Zero. 15 advanced features: device fingerprinting, protocol detection, threat modeling. Lab-grade timing (<1μs), pure C.",
    "proj.keyspace":"Cross-platform password auditing tool for authorized security testing. PyQt6 GUI with modular backend supporting multiple attack vectors and hash types.",
    "proj.flowscope":"Flow-based network traffic analysis and anomaly investigation. Real-time packet inspection with flow-based anomaly detection for security operations.",
    "proj.devzero":"Comprehensive static educational platform for developers. Covers backend, frontend, mobile, penetration testing, and AI-assisted web coding with progress tracking.",
    "proj.esp32watchdog":"Passive Wi-Fi threat monitor for ESP32. Detects deauth floods, evil twin APs and beacon floods in promiscuous mode — no transmission, no config. Logs CSV to microSD. OLED display, single-button mode switch, FreeRTOS multitasking. ~11 EUR in parts.",
    "stack.title":"Stack",
    "term.whoami":"alexey — systems & security engineer","term.focus1":"backend","term.focus2":"embedded","term.focus3":"security",
    "term.comment1":"11 production systems shipped","term.years":"years","term.selftaught":"self-taught","term.learning":"still learning","term.osint":"osint","term.pentest":"pentest",
    "term.comment2":"always curious about what's below the surface",
    "contact.headline":"Let's<br>work <span class='accent'>together.</span>",
    "contact.sub":"Open to interesting engineering problems, security research, and technical collaborations. Prefer async-first communication.",
    "contact.modal.title":"Get in Touch","contact.modal.sub":"// open to interesting problems and collaborations",
    "footer.built":"Built with precision.",
    "skill.python":"Python / Automation","skill.security":"Security Research","skill.hardware":"Hardware / RF",
    "skill.sysdesign":"System Design","skill.c":"C / C++ (Embedded)","skill.rust":"Rust (Systems)",
    "stack.automation":"Automation","stack.systems":"Systems","stack.embedded":"Embedded",
    "stack.frontend":"Frontend","stack.os":"Operating System","stack.devops":"DevOps","stack.desktop":"Desktop GUI","stack.vcs":"Version Control"
  },
  ru: {
    "nav.about":"Обо мне","nav.systems":"Системы","nav.stack":"Стек","nav.contact":"Контакт","nav.available":"Открыт к работе",
    "hero.tag":"Инженер систем и безопасности",
    "hero.line1":"Создаю","hero.line2a":"надёжные","hero.line2b":"системы","hero.line3":"методично.",
    "hero.desc":"Разработчик среднего уровня. Бэкенд, системы и безопасность. Самоучка. Увлечён железом. Стремлюсь понять, что происходит под капотом.",
    "hero.cta1":"Смотреть системы ↓","hero.cta2":"Написать мне","hero.scroll":"Скролл",
    "about.title":"Обо мне","about.skillsTitle":"Профиль навыков",
    "about.p1":"Я начал программировать из <strong>чистого любопытства</strong> — как работают системы. Вдохновлялся технической культурой и желанием понять, что происходит под поверхностью.",
    "about.p2":"Без формального образования, курсов и корпоративного опыта — я научился всему из открытых онлайн-ресурсов. Путь от экспериментов до <strong>структурированной инженерии</strong>.",
    "about.p3":"Сегодня строю системы для исследования безопасности, анализа железа и автоматизации. Каждый проект — с <strong>полным контролем над системой</strong>, без чёрных ящиков.",
    "about.pr1":"Понять систему, прежде чем расширять её","about.pr2":"Надёжность важнее хайпа",
    "about.pr3":"Простые архитектуры, которые масштабируются","about.pr4":"Интеграция железа: Arduino, ESP32, RF-системы",
    "about.pr5":"Писать код, который легко отлаживать и поддерживать",
    "about.pr6":"Языки: Русский | Английский | Немецкий",
    "stats.s1":"Продакшн-систем","stats.s2":"Лет опыта","stats.s3":"Самоучка","stats.s4":"Любопытство",
    "systems.title":"Системы","badge.prod":"В ПРОДАКШНЕ",
    "proj.cherenkov":"Платформа радиологической разведки в реальном времени. Агрегирует 10 000+ датчиков, обнаруживает аномалии за миллисекунды, предсказывает рассеивание осадков. Rust + WebAssembly, нулевые затраты, 100% бесплатный тариф.",
    "metric.perf":"Производительность","metric.rel":"Надёжность","metric.sensors":"Датчики","metric.detect":"Обнаружение",
    "proj.esp32gotchi":"Автономное устройство захвата WPA/WPA2 хендшейков на ESP32-WROOM-32. Прошивка FreeRTOS с 4 задачами, promiscuous-режим 802.11, парсинг EAPOL, запись PCAP на SD-карту. OLED интерфейс, BOM ~10 EUR.",
    "proj.pinetcore":"Готовый сетевой апплайнс для Raspberry Pi 5. Ядро на Rust (Tokio/Axum/pnet): захват пакетов и файрвол nftables. Плагины: WireGuard VPN, Pi-hole DNS, Suricata IDS. Дашборд на React 18 с WebSocket метриками.",
    "proj.securemysite":"Локальный анализатор безопасности для AI-сгенерированных веб-проектов. 100% оффлайн SAST/DAST сканирование с оценкой критичности и генерацией промптов для исправления.",
    "proj.gemini":"AI-оркестровка корпоративного уровня для BLACKBOXAI в VS Code. Телеметрия в реальном времени, выполнение команд и изоляция безопасности.",
    "proj.pivotmap":"Движок анализа путей атаки для offensive-команд. Строит графы атак по результатам сканирования, определяет реалистичные точки проникновения.",
    "proj.bluescope":"Платформа мониторинга и безопасности Bluetooth. ML-обнаружение аномалий, анализ BLE-трафика в реальном времени и аудит безопасности.",
    "proj.flipper":"RF-платформа для Flipper Zero. 15 функций: идентификация устройств, обнаружение протоколов, моделирование угроз. Точность &lt;1мкс, чистый C.",
    "proj.keyspace":"Кроссплатформенный инструмент аудита паролей. GUI на PyQt6 с модульным бэкендом и поддержкой нескольких векторов атак.",
    "proj.flowscope":"Анализ сетевого трафика на основе потоков. Инспекция пакетов в реальном времени с обнаружением аномалий для операций безопасности.",
    "proj.devzero":"Статическая образовательная платформа для разработчиков. Бэкенд, фронтенд, мобайл, пентест и AI-программирование с отслеживанием прогресса.",
    "proj.esp32watchdog":"Пассивный Wi-Fi монитор угроз на ESP32. Обнаруживает deauth-флуды, evil twin точки доступа и beacon-флуды в promiscuous-режиме — без передачи данных, без настройки. Логирование CSV на microSD. OLED дисплей, однокнопочное переключение режимов, FreeRTOS. ~11 EUR.",
    "stack.title":"Стек",
    "term.whoami":"алексей — инженер систем и безопасности","term.focus1":"бэкенд","term.focus2":"железо","term.focus3":"безопасность",
    "term.comment1":"11 систем в продакшне","term.years":"лет","term.selftaught":"самоучка","term.learning":"продолжаю учиться","term.osint":"osint","term.pentest":"pentest",
    "term.comment2":"всегда интересно, что под капотом",
    "contact.headline":"Давай<br>работать <span class='accent'>вместе.</span>",
    "contact.sub":"Открыт для интересных инженерных задач, исследований безопасности и технического сотрудничества. Предпочитаю асинхронное общение.",
    "contact.modal.title":"Написать мне","contact.modal.sub":"// открыт к интересным задачам и сотрудничеству",
    "footer.built":"Собрано с точностью.",
    "skill.python":"Python / Автоматизация","skill.security":"Исследование безопасности","skill.hardware":"Железо / RF",
    "skill.sysdesign":"Системный дизайн","skill.c":"C / C++ (Встраиваемые)","skill.rust":"Rust (Системы)",
    "stack.automation":"Автоматизация","stack.systems":"Системы","stack.embedded":"Встраиваемые",
    "stack.frontend":"Фронтенд","stack.os":"Операционная система","stack.devops":"DevOps","stack.desktop":"Десктоп GUI","stack.vcs":"Контроль версий"
  },
  de: {
    "nav.about":"Über mich","nav.systems":"Systeme","nav.stack":"Stack","nav.contact":"Kontakt","nav.available":"Verfügbar",
    "hero.tag":"System- und Sicherheitsingenieur",
    "hero.line1":"Aufbau von","hero.line2a":"zuverlässigen","hero.line2b":"Systemen","hero.line3":"methodisch.",
    "hero.desc":"Mid-Level Software Engineer. Backend, Systeme und Sicherheit. Autodidakt. Hardware-begeistert. Angetrieben vom Verständnis dessen, was unter der Oberfläche passiert.",
    "hero.cta1":"Systeme ansehen ↓","hero.cta2":"Kontakt aufnehmen","hero.scroll":"Scrollen",
    "about.title":"Über mich","about.skillsTitle":"Fähigkeitsprofil",
    "about.p1":"Ich begann zu programmieren aus <strong>reiner Neugier</strong> — wie funktionieren Systeme? Inspiriert von Technikkultur und dem Wunsch zu verstehen, was unter der Oberfläche passiert.",
    "about.p2":"Ohne formale Ausbildung, Kurse oder Unternehmenshintergrund habe ich mir alles aus offenen Online-Ressourcen beigebracht. Von Experimenten zu <strong>strukturierter Ingenieurskunst</strong>.",
    "about.p3":"Heute baue ich produktionsreife Systeme für Sicherheitsforschung, Hardware-Analyse und Automatisierung. Jedes Projekt mit <strong>vollem Systemkontrolle</strong> — keine Black Boxes.",
    "about.pr1":"Das System verstehen, bevor man es erweitert","about.pr2":"Zuverlässigkeit über Hype",
    "about.pr3":"Einfache Architekturen bevorzugen, die skalieren","about.pr4":"Hardware-Integration: Arduino, ESP32, RF-Systeme",
    "about.pr5":"Software schreiben, die leicht zu debuggen und zu warten ist",
    "about.pr6":"Sprachen: Russisch | Englisch | Deutsch",
    "stats.s1":"Produktionssysteme","stats.s2":"Jahre Erfahrung","stats.s3":"Autodidakt","stats.s4":"Neugier",
    "systems.title":"Systeme","badge.prod":"IN PRODUKTION",
    "proj.cherenkov":"Echtzeit-Plattform für globale radiologische Aufklärung. Aggregiert 10.000+ Sensoren, erkennt Anomalien in Millisekunden, sagt Fallout-Dispersion voraus. Rust + WebAssembly, kostenfreie Architektur.",
    "metric.perf":"Leistung","metric.rel":"Zuverlässigkeit","metric.sensors":"Sensoren","metric.detect":"Erkennung",
    "proj.esp32gotchi":"Autonomes WPA/WPA2-Handshake-Capture-Gerät auf ESP32-WROOM-32. FreeRTOS-Firmware mit 4 Core-gepinnten Tasks, promiskuitiver 802.11-Sniffing, EAPOL-Parsing, PCAP-Schreiben auf SD. OLED-UI, ~10 EUR BOM.",
    "proj.pinetcore":"Produktionsreifes Netzwerk-Appliance für Raspberry Pi 5. Rust-Kern (Tokio/Axum/pnet) für Paketerfassung und nftables-Firewall. Modulares Plugin-System für WireGuard VPN, Pi-hole DNS, Suricata IDS. React 18 Dashboard mit Live-WebSocket-Metriken.",
    "proj.securemysite":"Lokaler Sicherheitsanalysator für KI-generierte Webprojekte. 100% offline SAST/DAST-Scanning mit Schweregrad-Bewertung und KI-Korrektur-Prompt-Generierung.",
    "proj.gemini":"KI-Orchestrierung für BLACKBOXAI in VS Code. Echtzeit-Telemetrie, Befehlsausführung und Sicherheits-Sandboxing.",
    "proj.pivotmap":"Angriffspfad-Engine für offensive Sicherheitsteams. Erstellt Angriffsgraphen aus Scan-Ergebnissen und identifiziert Pivot-Möglichkeiten.",
    "proj.bluescope":"Bluetooth-Monitoring- und Sicherheitsplattform. ML-gestützte Anomalieerkennung und BLE-Verkehrsanalyse in Echtzeit.",
    "proj.flipper":"RF-Analyseplattform für Flipper Zero. 15 Funktionen: Geräte-Fingerprinting, Protokollerkennung, Bedrohungsmodellierung. Timing &lt;1μs, reines C.",
    "proj.keyspace":"Plattformübergreifendes Passwort-Audit-Tool. PyQt6-GUI mit modularem Backend für mehrere Angriffsvektoren.",
    "proj.flowscope":"Flussbasierte Netzwerkverkehrsanalyse. Echtzeit-Paketinspektion mit Anomalieerkennung für Sicherheitsoperationen.",
    "proj.devzero":"Statische Bildungsplattform für Entwickler. Backend, Frontend, Mobile, Penetrationstests und KI-gestütztes Web-Coding.",
    "proj.esp32watchdog":"Passiver WLAN-Bedrohungsmonitor für ESP32. Erkennt Deauth-Floods, Evil-Twin-APs und Beacon-Floods im Promiscuous-Modus — keine Übertragung, keine Konfiguration. CSV-Logging auf microSD. OLED-Display, Ein-Tasten-Modusumschaltung, FreeRTOS. ~11 EUR.",
    "stack.title":"Stack",
    "term.whoami":"alexey — system- und sicherheitsingenieur","term.focus1":"backend","term.focus2":"hardware","term.focus3":"sicherheit",
    "term.comment1":"11 Systeme in Produktion","term.years":"Jahre","term.selftaught":"Autodidakt","term.learning":"lerne weiter","term.osint":"osint","term.pentest":"pentest",
    "term.comment2":"immer neugierig auf das, was unter der Oberfläche liegt",
    "contact.headline":"Lass uns<br><span class='accent'>zusammenarbeiten.</span>",
    "contact.sub":"Offen für interessante Ingenieursprobleme, Sicherheitsforschung und technische Kooperationen. Bevorzuge asynchrone Kommunikation.",
    "contact.modal.title":"Kontakt aufnehmen","contact.modal.sub":"// offen für interessante Probleme und Kooperationen",
    "footer.built":"Mit Präzision gebaut.",
    "skill.python":"Python / Automatisierung","skill.security":"Sicherheitsforschung","skill.hardware":"Hardware / RF",
    "skill.sysdesign":"Systemdesign","skill.c":"C / C++ (Eingebettet)","skill.rust":"Rust (Systeme)",
    "stack.automation":"Automatisierung","stack.systems":"Systeme","stack.embedded":"Eingebettet",
    "stack.frontend":"Frontend","stack.os":"Betriebssystem","stack.devops":"DevOps","stack.desktop":"Desktop-GUI","stack.vcs":"Versionskontrolle"
  }
};
 
let lang = localStorage.getItem('portfolio-lang') || 'en';
 
function t(key) { return i18n[lang][key] || i18n.en[key] || key; }
 
function setLang(l) {
  lang = l;
  localStorage.setItem('portfolio-lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === l.toUpperCase()));
  applyI18n();
  renderSkills();
  renderStack();
}
 
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.innerHTML = v;
  });
}
 
// Cursor — only on fine-pointer (mouse) devices, never on touch
// Turnstile
let turnstileToken = null;
function onTurnstileSuccess(token) { turnstileToken = token; }

// ── AI CHAT ─────────────────────────────────────────────────────────────────
const CHAT_SYSTEM = `You are the technical assistant for Alexey's portfolio (alexey.dev). Your role is to provide accurate information about Alexey's projects, technical skills, and offer guidance on system engineering.

COMMUNICATION STYLE:
- Adapt to the language the user is using.
- Maintain a clean, professional, and efficient tone. Avoid marketing buzzwords, corporate fluff, and unnecessary filler.
- Be precise. For technical questions, provide clear, actionable, and dense information.
- If a question is outside the scope of technical engineering or Alexey's work, politely steer the conversation back to relevant topics.
- Never speculate. If information is not available, state it clearly.

ABOUT ALEXEY:
- Alexey is a backend and systems engineer focused on low-level architecture, embedded firmware, RF/hardware security, and automation.
- Expertise: Rust, Python, Go, C/C++, Linux (Arch/Kali), Docker, Kubernetes, and hardware (ESP32, Raspberry Pi, Flipper Zero).
- Communication: Async-first (Telegram @smtrcv / Discord @tworjaga) Russian, German, English.
- Philosophy: Values efficiency, system-level understanding, and solving complex technical challenges.

PROJECTS (USE THESE FOR TECHNICAL CONTEXT):
- Cherenkov: Real-time radiological intelligence platform (Rust + WebAssembly).
- ESP32Gotchi / Watchdog: Wireless threat monitoring and handshake capture (FreeRTOS).
- PiNetCore: Network appliance for Raspberry Pi 5 (Rust, nftables, Suricata).
- Flipper-rf-lab: RF analysis platform (C/DWT cycle counting).
- Security Tools: pivotmap (attack paths), FlowScope (traffic analysis), BlueScope (BLE security), KeySpace (password audit), SecureMySite (SAST/DAST).
- GEMINI Overseer: AI orchestration tool for VS Code.

OPERATIONAL RULES:
- Referral: If a user is inquiring about collaboration or professional work, direct them to Telegram (@smtrcv) or Discord (@tworjaga).
- Efficiency: Prioritize direct answers. Use bullet points or code blocks to make technical information easy to read.`;

let chatHistory = [];
let chatOpen = false;
let chatTyping = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatPanel').classList.toggle('open', chatOpen);
  if (chatOpen) {
    document.getElementById('chatNotif').classList.remove('show');
    setTimeout(() => document.getElementById('chatInput').focus(), 300);
  }
}

document.addEventListener('click', e => {
  if (!chatOpen) return;
  const panel = document.getElementById('chatPanel');
  const btn = document.getElementById('chatBtn');
  if (!panel.contains(e.target) && !btn.contains(e.target)) {
    chatOpen = false;
    panel.classList.remove('open');
  }
});

function appendMsg(text, role) {
  const msgs = document.getElementById('chatMessages');
  // remove suggestions on first user message
  if (role === 'user') {
    const sugg = document.getElementById('chatSuggestions');
    if (sugg) sugg.remove();
  }
  const wrap = document.createElement('div');
  wrap.className = `chat-msg chat-msg-${role === 'user' ? 'user' : 'ai'}`;
  const bubble = document.createElement('div');
  bubble.className = 'chat-msg-bubble';
  bubble.textContent = text;
  wrap.appendChild(bubble);
  msgs.appendChild(wrap);
  msgs.scrollTop = msgs.scrollHeight;
  return bubble;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'chat-msg chat-msg-ai';
  el.id = 'typingIndicator';
  el.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function setStatus(text) {
  document.getElementById('chatStatus').textContent = text;
}

async function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text || chatTyping) return;
  input.value = '';
  chatTyping = true;
  document.getElementById('chatSend').disabled = true;

  appendMsg(text, 'user');
  chatHistory.push({ role: 'user', content: text });

  showTyping();
  setStatus('typing...');

  try {
    const res = await fetch('https://gemini-proxy.tworjaga.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 300,
        temperature: 0.7,
        messages: [
          { role: 'system', content: CHAT_SYSTEM },
          ...chatHistory.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
        ],
        cf_turnstile_token: turnstileToken
      })
    });

    const data = await res.json();
    hideTyping();

    const reply = data?.choices?.[0]?.message?.content;
    if (reply) {
      appendMsg(reply, 'ai');
      chatHistory.push({ role: 'assistant', content: reply });
      setStatus('Ask me anything');
    } else {
      const errMsg = data?.error?.message || JSON.stringify(data);
      appendMsg(`API error: ${errMsg}`, 'ai');
      setStatus('Ask me anything');
    }
  } catch (err) {
    hideTyping();
    appendMsg('Connection error. Reach Alexey directly on Telegram: @al7exy', 'ai');
    setStatus('Ask me anything');
  }

  chatTyping = false;
  document.getElementById('chatSend').disabled = false;
  document.getElementById('chatInput').focus();
}

function sendSuggestion(btn) {
  document.getElementById('chatInput').value = btn.textContent;
  sendChat();
}

// Show notif dot after 8s if chat not opened yet
setTimeout(() => {
  if (!chatOpen) document.getElementById('chatNotif').classList.add('show');
}, 8000);

// GitHub Stats Drawer
function openGhDrawer() {
  document.getElementById('ghDrawer').classList.add('open');
  document.getElementById('ghOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeGhDrawer() {
  document.getElementById('ghDrawer').classList.remove('open');
  document.getElementById('ghOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeGhDrawer(); });

// Scroll to top
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// Typing animation on hero
(function initTyping() {
  const el = document.getElementById('typing-line');
  if (!el) return;
  const fullText = el.textContent.trim();
  el.innerHTML = '<span class="typing-cursor"></span>';
  let i = 0;
  const cursor = el.querySelector('.typing-cursor');
  function type() {
    if (i <= fullText.length) {
      el.innerHTML = fullText.slice(0, i) + '<span class="typing-cursor"></span>';
      i++;
      setTimeout(type, i === 1 ? 900 : 65 + Math.random() * 40);
    }
  }
  setTimeout(type, 600);
})();

// Copy link on project cards
function copyCardLink(e, id) {
  e.stopPropagation();
  const url = location.origin + location.pathname + '#' + id;
  const btn = e.currentTarget;
  navigator.clipboard.writeText(url).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg>';
    }, 2000);
  }).catch(() => {});
}

// Project detail modal
function openProjModal(card) {
  const name = card.dataset.name;
  const date = card.dataset.date;
  const descKey = card.dataset.descKey;
  const tagsRaw = card.dataset.tags || '';
  const gh = card.dataset.gh || '';
  document.getElementById('pm-name').textContent = name;
  document.getElementById('pm-date').textContent = date;
  document.getElementById('pm-desc').textContent = t(descKey);
  document.getElementById('pm-tags').innerHTML = tagsRaw.split(',').map(tag =>
    `<span class="tag">${tag.trim()}</span>`).join('');

  // remove old stats block if re-opening different card
  const oldStats = document.getElementById('pm-modal-stats');
  if (oldStats) oldStats.remove();

  const links = document.getElementById('pm-links');
  links.innerHTML = gh
    ? `<a href="${gh}" target="_blank" rel="noopener" class="proj-modal-link primary">↗ GitHub</a>
       <button class="proj-modal-link" onclick="copyCardLink(event,'${card.dataset.id}')">⎘ Copy Link</button>`
    : `<button class="proj-modal-link" onclick="copyCardLink(event,'${card.dataset.id}')">⎘ Copy Link</button>`;

  // inject live GH stats if available
  const cached = ghCache[card.dataset.repo];
  if (cached) {
    const div = document.createElement('div');
    div.id = 'pm-modal-stats';
    div.className = 'gh-stats';
    div.style.marginTop = '16px';
    div.innerHTML =
      `<span class="gh-stat loaded">${starIcon} ${cached.stars} stars</span>` +
      `<span class="gh-stat loaded">${forkIcon} ${cached.forks} forks</span>` +
      (cached.lang ? `<span class="gh-stat loaded"><svg fill="var(--accent)" viewBox="0 0 8 8" width="8" height="8"><circle cx="4" cy="4" r="4"/></svg>${cached.lang}</span>` : '');
    links.after(div);
  }

  document.getElementById('projModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  // scroll modal to top
  document.getElementById('projModalInner').scrollTop = 0;

  // inject README
  const readmeEl = document.getElementById('pm-readme');
  const readme = README_DATA[card.dataset.id];
  if (readme) {
    readmeEl.innerHTML = mdToHtml(readme);
    readmeEl.style.display = 'block';
  } else {
    readmeEl.innerHTML = '';
    readmeEl.style.display = 'none';
  }
}
function closeProjModalNow() {
  document.getElementById('projModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeProjModal(e) {
  if (e.target === document.getElementById('projModal')) {
    closeProjModalNow();
  }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProjModalNow();
});

// ── HERO CANVAS — RF signal particles ──────────────────────────────────────
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes, mouse = { x: -999, y: -999 };
  const ACCENT = [200, 240, 64];
  const N = window.innerWidth < 768 ? 38 : 72;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function mkNode() {
    const bvx = (Math.random() - 0.5) * 0.07;
    const bvy = (Math.random() - 0.5) * 0.07;
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: bvx, vy: bvy,
      bvx, bvy,
      r:  1 + Math.random() * 1.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.018 + Math.random() * 0.012,
    };
  }

  function init() { resize(); nodes = Array.from({ length: N }, mkNode); }

  function isLight() { return document.documentElement.getAttribute('data-theme') === 'light'; }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const light = isLight();
    const [r, g, b] = light ? [100, 140, 0] : ACCENT;
    const maxDist = 140;

    nodes.forEach(n => {
      // move
      n.x += n.vx; n.y += n.vy;
      if (n.x < -10) n.x = W + 10;
      if (n.x > W + 10) n.x = -10;
      if (n.y < -10) n.y = H + 10;
      if (n.y > H + 10) n.y = -10;
      n.pulse += n.pulseSpeed;

      // mouse repulsion
      const dx = n.x - mouse.x, dy = n.y - mouse.y;
      const md = Math.sqrt(dx * dx + dy * dy);
      if (md < 140) { n.vx += dx / md * 0.02; n.vy += dy / md * 0.02; }
      // ease back toward natural drift speed — keeps ambient motion alive
      // without letting a mouse-induced push glide on for too long
      n.vx += (n.bvx - n.vx) * 0.05;
      n.vy += (n.bvy - n.vy) * 0.05;
      // speed cap
      const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      if (spd > 0.25) { n.vx /= spd / 0.25; n.vy /= spd / 0.25; }

      // draw node
      const alpha = 0.35 + 0.25 * Math.sin(n.pulse);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fill();
    });

    // edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b2 = nodes[j];
        const dx = a.x - b2.x, dy = a.y - b2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b2.x, b2.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); });
  document.querySelector('.hero').addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  document.querySelector('.hero').addEventListener('mouseleave', () => { mouse.x = -999; });
})();

// ── GITHUB LIVE STATS ──────────────────────────────────────────────────────
const ghCache = {};
const starIcon = `<svg fill="currentColor" viewBox="0 0 24 24" width="11" height="11"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
const forkIcon = `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 16 16" width="11" height="11"><path d="M5 3.25a.75.75 0 110 1.5.75.75 0 010-1.5zm0 9.5a.75.75 0 110 1.5.75.75 0 010-1.5zm5.25-9.5a.75.75 0 110 1.5.75.75 0 010-1.5zM5 4.75v1.5a2.25 2.25 0 002.25 2.25h1.5A2.25 2.25 0 0011 6.25v-1.5M5 4.75v5.5"/></svg>`;

// fetch for all cards including featured
document.querySelectorAll('[data-repo]').forEach(card => {
  const repo = card.dataset.repo;
  const el = card.querySelector('.gh-stats');
  if (!repo) return;

  fetch(`https://api.github.com/repos/${repo}`, {
    headers: { 'Accept': 'application/vnd.github.v3+json' }
  })
  .then(r => r.json())
  .then(data => {
    const stars = typeof data.stargazers_count === 'number' ? data.stargazers_count : 0;
    const forks = typeof data.forks_count === 'number' ? data.forks_count : 0;
    const lang  = data.language || '';
    ghCache[repo] = { stars, forks, lang };
    card.dataset.ghStars = stars;
    card.dataset.ghForks = forks;
    card.dataset.ghLang  = lang;
    if (el) {
      el.innerHTML =
        `<span class="gh-stat loaded">${starIcon} ${stars}</span>` +
        `<span class="gh-stat loaded">${forkIcon} ${forks}</span>` +
        (lang ? `<span class="gh-stat loaded"><svg fill="var(--accent)" viewBox="0 0 8 8" width="8" height="8"><circle cx="4" cy="4" r="4"/></svg> ${lang}</span>` : '');
    }
    // also update project-metrics stars if it's the featured card
    const starsMetric = card.querySelector('.metric-stars');
    if (starsMetric) starsMetric.textContent = stars;
  })
  .catch(() => {});
});


// ── README DATA & MARKDOWN RENDERER ────────────────────────────────────────
const README_DATA = {"esp32gotchi": "# ESP32Gotchi\n\n[![Platform](https://img.shields.io/badge/Platform-ESP32--WROOM--32-blue)](https://www.espressif.com/en/products/socs/esp32)\n[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)\n[![Build](https://img.shields.io/badge/Build-Arduino_IDE_2.x-orange)](https://www.arduino.cc/)\n[![Author](https://img.shields.io/badge/Author-tworjaga-lightgrey)](https://github.com/tworjaga)\n<img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.ESP32Gotchi&\"  />\n\n> Autonomous WPA/WPA2 handshake capture and Wi-Fi AP monitoring device based on ESP32.  \n> Low-cost, plug-and-play, no configuration required.\n\n---\n\n## Overview\n\nESP32Gotchi is a self-contained passive Wi-Fi handshake sniffer and AP logger inspired by the Pwnagotchi project. It runs on an ~10–15 EUR hardware stack, requires no host computer, and writes standard PCAP files and CSV logs directly to a microSD card. All operation is autonomous from power-on.\n\nThe firmware uses FreeRTOS with five independent tasks, a promiscuous-mode Wi-Fi callback, IEEE 802.11-2020 compliant EAPOL parsing, a dedicated SD write task to prevent I/O from stalling packet processing, and an optional GPS task for geolocation tagging.\n\n---\n\n## Hardware\n\n### Bill of Materials\n\n| Component | Specification | Approx. Cost |\n|-----------|--------------|--------------|\n| MCU | ESP32 DevKit V1, 30-pin, ESP32-WROOM-32 | ~5 EUR |\n| Display | 0.96″ SSD1306 OLED, 128×64, I2C (4-pin) | ~3 EUR |\n| Storage | MicroSD SPI module, 3.3V compatible | ~1 EUR |\n| Button | Tactile push button | <0.50 EUR |\n| LED | 3mm or 5mm LED + 220 Ω resistor | <0.50 EUR |\n| Power (portable) | LiPo 3.7V + TP4056 USB-C charging module | ~2 EUR |\n| **GPS (optional)** | **Neo-6M UART module** | **~3 EUR** |\n\n**Total: ~10–15 EUR (with GPS)**\n\n### Wiring\n\n**OLED — I2C**\n```\nESP32 GPIO21  ->  SDA\nESP32 GPIO22  ->  SCL\nESP32 3.3V    ->  VCC\nESP32 GND     ->  GND\n```\n\n**MicroSD — SPI**\n```\nESP32 GPIO18  ->  SCK\nESP32 GPIO23  ->  MOSI\nESP32 GPIO19  ->  MISO\nESP32 GPIO5   ->  CS\nESP32 3.3V    ->  VCC\nESP32 GND     ->  GND\n```\n\n> **GPIO5 note:** GPIO5 is the SDIO-slave timing strapping pin but has no effect in SPI mode. Safe on DevKit V1. On a custom PCB, do not place an external pull-up stronger than 10 kΩ on GPIO5 before the strapping window closes at boot.\n\n**Button — GPIO4**\n```\nESP32 GPIO4   ->  Button  ->  GND\n(internal pull-up enabled in firmware)\n```\n\n**LED (optional)**\n```\nESP32 GPIO2   ->  220 ohm resistor  ->  LED anode\nLED cathode   ->  GND\n```\n\n**GPS Neo-6M — UART2 (optional, v1.2.2)**\n```\nESP32 GPIO16  ->  Neo-6M TX   (UART2 RX)\nESP32 GPIO17  ->  Neo-6M RX   (UART2 TX)\nESP32 3.3V    ->  Neo-6M VCC\nESP32 GND     ->  Neo-6M GND\n```\n\n**Battery voltage sense — ADC (optional, v1.2.2)**\n```\nVbat  ->  100k resistor  ->  GPIO34  ->  100k resistor  ->  GND\n(100k/100k divider: Vadc = Vbat / 2)\n```\n\n### Power Options\n\nUSB only (development / bench use):\n```\nUSB -> ESP32 DevKit V1\n```\n\nPortable (battery operation):\n```\nLiPo 3.7V -> TP4056 -> ESP32 VIN\n```\n\n---\n\n## Hardware Architecture\n\n```\nESP32-WROOM-32\n |-- OLED SSD1306      (I2C: GPIO21/22)\n |-- MicroSD module    (SPI: GPIO18/19/23/5)\n |-- Tactile button    (GPIO4, active-low)\n |-- Status LED        (GPIO2, optional)\n |-- Neo-6M GPS        (UART2: GPIO16/17, optional)   ← v1.2.2\n |-- Batt ADC divider  (GPIO34, optional)              ← v1.2.2\n |-- LiPo + TP4056     (optional, portable)\n```\n\n---\n\n## Firmware\n\n### Architecture\n\nFive FreeRTOS tasks with explicit core pinning:\n\n| Task | Core | Priority | Stack | Function |\n|------|------|----------|-------|----------|\n| `task_hop` | 0 | **6** | 2 KB | Cycles channels 1–11, 200 ms dwell. Highest priority on Core 0 — guaranteed to run. |\n| `task_proc` | 0 | 5 | 6 KB | Pulls packets from queue, parses 802.11/EAPOL, manages handshake slots. Drains AP log queue in idle window. |\n| `task_write` | 0 | **4** | 6 KB | Receives completed handshakes (by slot index), writes PCAP to SD. Drains AP log queue, writes stats CSV every 60 s. |\n| `task_ui` | 1 | 1 | 4 KB | Updates OLED every 200 ms, handles LED, button, battery ADC reads. |\n| `task_gps` | 1 | 2 | 3 KB | Parses NMEA sentences from UART2; updates `g_gps` struct and soft RTC. *(new in v1.2.2)* |\n\n### Memory Layout\n\nAll packet storage is statically allocated at boot. No `malloc()` or `free()` at runtime (task stacks and one GPS sentence buffer are the only dynamic allocations, made once at boot).\n\n| Region | Size | Purpose |\n|--------|------|---------|\n| `pkt_pool_mem[32][1600]` | 51 200 B | In-flight packet buffers (claimed by `promisc_cb`, released by `task_proc`) |\n| `hs_raw_pool_mem[32][1600]` | 51 200 B | Handshake frame storage (held until PCAP written, then released) |\n| `g_hs[16]` metadata | ~640 B | Handshake slot state (indices into `hs_raw_pool_mem`, not frame data) |\n| `g_ap_table[256][6]` | 1 536 B | AP hash table |\n| **Total user static** | **~104 KB** | Well within the ~200 KB available after the Wi-Fi stack |\n\n### EAPOL Detection\n\nImplements IEEE 802.11-2020 §12.7.2 key_info bit field:\n\n| Message | Pairwise | ACK | MIC | Install | Secure |\n|---------|----------|-----|-----|---------|--------|\n| Msg 1 | 1 | 1 | 0 | 0 | 0 |\n| Msg 2 | 1 | 0 | 1 | 0 | 0 |\n| Msg 3 | 1 | 1 | 1 | 1 | 1 |\n| Msg 4 | 1 | 0 | 1 | 0 | 1 |\n\nAll four messages must be captured to mark a handshake as complete. Incomplete slots expire after 15 seconds.\n\n### PCAP Output\n\nFiles are written to `/handshakes/` on the SD card.  \nNaming: `hs_<bssid>_<uptime_seconds>.pcap`  \nExample: `hs_aa_bb_cc_dd_ee_ff_3721.pcap`\n\nWhen GPS time is available, the PCAP packet timestamp uses the GPS UTC clock instead of `millis()`.\n\nFormat: standard libpcap (magic `0xa1b2c3d4`), network type 105 (IEEE 802.11). Files open directly in Wireshark without conversion.\n\n### AP Log Output (new in v1.2.2)\n\nNew BSSIDs seen in beacon and probe-response frames are logged to `/aplog/aps.csv`:\n\n```\ntimestamp,bssid,rssi_dbm,channel\n2024-06-01T14:32:01Z,AA:BB:CC:DD:EE:FF,-62,6\n2024-06-01T14:32:04Z,11:22:33:44:55:66,-74,11\n```\n\nThe file rotates to `aps_1.csv` when it reaches 4 MB. The timestamp is ISO-8601 UTC when a GPS fix is available, or an uptime string (`UP+00042s`) otherwise.\n\n### Stats Log Output (new in v1.2.2)\n\nA device statistics snapshot is appended to `/stats/stats.csv` every 60 seconds:\n\n```\ntimestamp,ap_count,pkt_rate,free_heap,rssi_last,rssi_drops,gps_lat,gps_lon,gps_fix\n2024-06-01T14:33:00Z,14,87,148320,-67,203,48.208176,16.373819,1\n```\n\nThe file rotates to `stats_1.csv` at 4 MB.\n\n### OLED Display Layout\n\nThe display now has four pages, cycled by short button press.\n\n**Page 1 — Stats**\n```\n(o_o)              1/4\nHS:  12\nCH:  6\nAP:  34\nPKT: 128\nRSSI:-67 D:203\n```\n\n**Page 2 — GPS**\n```\n(o_o)              2/4\nFIX: YES\nLAT:48.20818\nLON:16.37382\nALT:183m\nSAT:8 HDOP:1.1\n```\n\n**Page 3 — SD**\n```\n(o_o)              3/4\nSD:  OK\nFREE:3821MB\nAPS: 14KB\nSTS: 2KB\nWR:  OK\n```\n\n**Page 4 — System**\n```\n(o_o)              4/4\nHEAP:148320B\nUP: 01:22:07\nPKT: 87/s\nDRP: 203\nBAT: 78%\n```\n\nFace states:\n- `(o_o)` — scanning normally\n- `(^o^)` — EAPOL frames being collected\n- `(X_X)` — error (SD missing, low space)\n- `(-_-)` — idle\n\n### LED Patterns\n\n| Pattern | Meaning |\n|---------|---------|\n| Slow blink (1 Hz) | Normal scanning |\n| Fast blink (5 Hz) | Handshake capture in progress |\n| Single short flash | Handshake saved to SD |\n| 3 × long flash (2 s) | SD error — repeating |\n\n### Button Behaviour\n\n| Press duration | Action |\n|---------------|--------|\n| Short (50 ms – 3 s) | Cycle OLED page (Stats → GPS → SD → System → Stats) |\n| Long (3 s – 6 s) | `ESP.restart()` |\n| Extra-long (≥ 6 s) | Enter deep sleep (wake on same button) |\n\n### GPS Integration (new in v1.2.2)\n\nConnect a Neo-6M (or compatible) GPS module to UART2 (GPIO16/GPIO17). `task_gps` parses `$GPRMC` and `$GPGGA` sentences with NMEA checksum verification. When a valid fix is active:\n\n- All timestamps in `/aplog/aps.csv` and `/stats/stats.csv` switch to ISO-8601 UTC.\n- PCAP packet record timestamps use GPS UTC instead of `millis()`.\n- The GPS page (Page 2) shows lat, lon, altitude, satellite count, and HDOP.\n\nA fix is considered stale after 10 seconds without a valid `$GPRMC` with status `A`; the firmware downgrades `FIX: YES` → `FIX: NO` and stops reporting coordinates until the next good fix. If no fix is obtained within 60 seconds of boot, a one-time warning is logged to Serial and operation continues without GPS.\n\nThe GPS module is optional. If not wired, `g_gps_available` remains `false` and all timestamps fall back to uptime strings. No code changes required.\n\n### Battery Monitoring (new in v1.2.2)\n\nConnect a 100 kΩ/100 kΩ voltage divider from the LiPo+ rail to GPIO34. The firmware reads 16 ADC samples every 30 seconds, averages them, reconstructs `Vbat`, and maps it to 0–100% (3 500 mV → 4 200 mV range). The percentage is shown on Page 4 (System). No external library required.\n\n### Startup Self-Test (new in v1.2.2)\n\nOn boot the firmware runs a visual self-test sequence on the OLED before any tasks are started:\n\n```\nSelf-test v1.2.2\nSD:   OK\n  free: 3821MB\n```\n```\nSelf-test v1.2.2\nGPS:  UART OK\n```\n```\nSelf-test v1.2.2\nHEAP: 152340B\n```\n```\nSelf-test v1.2.2\nWIFI: OK\n```\n```\n   Cheapagotchi\n   v1.2.2 Ready\n```\n\nEach screen is displayed for ~600 ms. If SD fails, `SD: FAIL` is shown and the device continues without SD logging.\n\n### Deep Sleep (new in v1.2.2)\n\nAn extra-long button press (≥ 6 seconds) triggers a clean shutdown sequence:\n\n1. Promiscuous mode disabled.\n2. Write queue flushed (up to 2 s timeout).\n3. `task_write` suspended.\n4. SD card cleanly unmounted.\n5. OLED shows `SLEEP ZZZ / Hold BTN to wake`.\n6. `esp_deep_sleep_start()` — wakes on GPIO4 LOW (same button).\n\n---\n\n## Build & Flash\n\n### Requirements\n\n- Arduino IDE 2.x or PlatformIO\n- ESP32 board package by Espressif, version 2.0.x or later\n- U8g2 library (install via Arduino Library Manager)\n- No additional libraries required for GPS or battery monitoring\n\n### Arduino IDE\n\n1. Install board package: `File -> Preferences -> Additional Boards Manager URLs`  \n   Add: `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`\n\n2. Install U8g2: `Tools -> Manage Libraries -> search \"U8g2\"`\n\n3. Board settings:\n   ```\n   Board            : ESP32 Dev Module\n   Partition scheme : Default 4MB with spiffs\n   CPU Frequency    : 240 MHz\n   Flash mode       : QIO\n   Upload speed     : 921600\n   ```\n\n4. Open `Cheapagotchi.ino`, compile, and flash.\n\n### PlatformIO\n\n```ini\n[env:esp32dev]\nplatform  = espressif32\nboard     = esp32dev\nframework = arduino\nmonitor_speed = 115200\nlib_deps  = olikraus/U8g2\nboard_build.partitions = default.csv\n```\n\n---\n\n## SD Card\n\n- Format: FAT32\n- Minimum recommended size: 2 GB\n- The firmware creates `/handshakes/`, `/aplog/`, and `/stats/` automatically on first boot.\n- Minimum free space check: 1 MB before each PCAP write. If space is below threshold, the device continues sniffing but skips saving.\n- CSV files rotate at 4 MB (`aps.csv` → `aps_1.csv`, `stats.csv` → `stats_1.csv`).\n- If SD is absent or fails, the device retries initialisation on the next retry cycle and displays `SD: ERR`.\n\n---\n\n## Serial Debug Output\n\nConnect at 115200 baud. Example output:\n\n```\n[BOOT] ESP32 Cheapagotchi v1.2.2\n[SD] OK\n[WIFI] promiscuous active\n[MEM]  free heap: 152340 bytes\n[GPS] no fix within 60 s — continuing without fix\n[HS] aa:bb:cc:dd:ee:ff -> 11:22:33:44:55:66  msg1\n[HS] aa:bb:cc:dd:ee:ff -> 11:22:33:44:55:66  msg2\n[HS] aa:bb:cc:dd:ee:ff -> 11:22:33:44:55:66  msg3\n[HS] aa:bb:cc:dd:ee:ff -> 11:22:33:44:55:66  msg4\n[HS] saved /handshakes/hs_aa_bb_cc_dd_ee_ff_3721.pcap  total=1\n[STAT] pkt/s=23  rssi=-67dBm  drops=142  thr=-80dBm  ap_log_drops=0  hs_pool_drops=0\n[BTN] page -> 1\n[SLEEP] entering deep sleep\n```\n\n---\n\n## Repository Structure\n\n```\nESP32Gotchi/\n |-- Cheapagotchi.ino        # Full firmware source\n |-- README.md\n |-- LICENSE\n |-- hardware/\n |    └── BOM.md             # Bill of materials\n └── docs/\n      └── pcap_analysis.md   # Notes on opening captures in Wireshark\n```\n\n---\n\n## Troubleshooting\n\n| Symptom | Likely cause | Fix |\n|---------|-------------|-----|\n| `SD: ERR` on boot | SD not inserted, wrong wiring, not FAT32 | Check SPI wiring, reformat to FAT32 |\n| OLED blank | I2C address mismatch or wiring fault | Verify SDA/SCL, confirm 0x3C with I2C scanner |\n| No handshakes captured | No WPA2 4-way exchanges occurring nearby | Use a test AP; deauth-based capture is outside scope of this firmware |\n| Device reboots repeatedly | Watchdog trigger — task hang | Check serial output for last log line; report via Issues |\n| PCAP not opening in Wireshark | Corrupt write (power cut during save) | Delete partial file; ensure stable power supply |\n| `GPS: N/A` on Page 2 | GPS UART not wired or module not responding | Check GPIO16/17 wiring; GPS is optional |\n| `FIX: NO` after 60 s | No satellite view | Move outdoors; wait for first fix (can take 1–2 min cold start) |\n| `BAT: 0%` | Voltage divider not wired or wrong pins | Check GPIO34 / divider resistors; feature requires hardware |\n| `ap_log_drops > 0` in Serial | AP log queue full — high beacon density | Normal in dense RF; rows are not lost, just rate-limited |\n\n---\n\n## Technical Specifications\n\n| Parameter | Value |\n|-----------|-------|\n| MCU | Xtensa LX6 dual-core, 240 MHz |\n| RAM | 520 KB SRAM |\n| Wi-Fi | 802.11 b/g/n, 2.4 GHz |\n| Channels scanned | 1 – 11 |\n| Channel dwell time | 200 ms |\n| Packet queue depth | 32 items |\n| Packet pool blocks | 32 × 1 600 B (static) |\n| HS raw-frame pool blocks | 32 × 1 600 B (static) |\n| Max concurrent handshake slots | 16 |\n| Max tracked APs | 192 (hash table, 256 buckets) |\n| Handshake slot timeout | 15 s |\n| New slot rate limit | 1 per 100 ms |\n| RSSI filter threshold | –80 dBm (tunable) |\n| PCAP network type | 105 (802.11) |\n| GPS baud rate | 9 600 (Neo-6M default) |\n| GPS fix staleness timeout | 10 s |\n| Stats log interval | 60 s |\n| CSV rotation size | 4 MB |\n| Battery ADC samples | 16-sample average |\n| Battery update interval | 30 s |\n| Watchdog timeout | 30 s |\n| Min SD free space | 1 MB |\n| Runtime heap allocations | **0** (excluding one-time GPS buffer) |\n\n---\n\n## Legal Notice\n\nThis tool is intended for **authorised security research and educational use only**.  \nCapturing Wi-Fi handshakes on networks you do not own or have explicit written permission to test is illegal in most jurisdictions.  \nThe author assumes no liability for misuse.\n\n---\n\n## License\n\nMIT — see [LICENSE](LICENSE).\n\n---\n\n## Contact\n\nAuthor: [@tworjaga](https://github.com/tworjaga)  \nTelegram: [@smtrcv](https://t.me/smtrcv)  \nIssues: [github.com/tworjaga/ESP32Gotchi/issues](https://github.com/tworjaga/ESP32Gotchi/issues)\n", "cherenkov": "# Cherenkov -- ## In development\n\n[![CI](https://github.com/tworjaga/cherenkov/workflows/ci/badge.svg)](https://github.com/tworjaga/cherenkov/actions)\n[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange.svg)](https://www.rust-lang.org)\n[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://www.typescriptlang.org)\n[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org)\n\n<div align=\"center\">\n  <img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.Cherenkov&\"  />\n</div>\n\n\n> Real-time global radiological intelligence platform\n\nThe blue glow of nuclear reactors, made visible. Cherenkov aggregates 50,000+ radiation sensors worldwide, detects anomalies in milliseconds, predicts fallout dispersion, and provides situational awareness for nuclear events — from medical isotope spills to reactor meltdowns.\n\n## Overview\n\nCherenkov is a high-performance, real-time monitoring platform designed for radiological intelligence. It combines a Rust-based backend for data ingestion and processing with a modern React/Next.js frontend for visualization and interaction.\n\n### Key Features\n\n- **Real-time Data Ingestion**: 10M+ events per second from 50,000+ sensors\n- **Anomaly Detection**: Sub-10ms detection using stream processing\n- **Global Visualization**: WebGL2-powered globe with 100k points at 60fps\n- **Plume Dispersion Modeling**: Real-time fallout prediction\n- **Multi-source Integration**: 15+ data sources including Safecast, uRADMonitor, EPA RadNet\n- **WebSocket Subscriptions**: Real-time updates to 1M+ concurrent clients\n- **GraphQL API**: Flexible data querying and mutations\n\n## Architecture\n\n```\n┌─────────────────────────────────────────────────────────────┐\n│                        Frontend                             │\n│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │\n│  │   Next.js   │  │   WebGL2    │  │   React/TypeScript  │  │\n│  │   (Web)     │  │   (Globe)   │  │   (Dashboard)       │  │\n│  └─────────────┘  └─────────────┘  └─────────────────────┘  │\n└─────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\n┌─────────────────────────────────────────────────────────────┐\n│                      API Gateway                            │\n│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │\n│  │   GraphQL   │  │  WebSocket  │  │   REST (Health)     │  │\n│  │   (Async)   │  │  (Real-time)│  │   (Status)          │  │\n│  └─────────────┘  └─────────────┘  └─────────────────────┘  │\n└─────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\n┌─────────────────────────────────────────────────────────────┐\n│                   Stream Processing                         │\n│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │\n│  │   Anomaly   │  │ Correlation │  │   Windowing         │  │\n│  │  Detection  │  │   Engine    │  │   (Time-series)     │  │\n│  └─────────────┘  └─────────────┘  └─────────────────────┘  │\n└─────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\n┌─────────────────────────────────────────────────────────────┐\n│                    Data Ingestion                           │\n│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │\n│  │   Polling   │  │   Webhook   │  │   Normalization     │  │\n│  │  (Sources)  │  │  (Events)   │  │   (Transform)       │  │\n│  └─────────────┘  └─────────────┘  └─────────────────────┘  │\n└─────────────────────────────────────────────────────────────┘\n                              │\n                              ▼\n┌─────────────────────────────────────────────────────────────┐\n│                      Data Sources                           │\n│  Safecast │ uRADMonitor │ EPA RadNet │ EURDEP │ IAEA PRIS   │\n│  USGS │ NASA FIRMS │ NOAA GFS │ OpenAQ │ Open-Meteo         │\n└─────────────────────────────────────────────────────────────┘\n```\n\n## Technology Stack\n\n### Backend (Rust)\n- **Runtime**: Tokio (async runtime)\n- **Stream Processing**: Timely Dataflow\n- **ML Inference**: Candle (GPU-native, no Python)\n- **Storage**: ScyllaDB (time-series), SQLite (cache)\n- **API**: GraphQL (async-graphql), WebSocket (tokio-tungstenite)\n- **Observability**: Custom metrics and tracing\n\n### Frontend (TypeScript/React)\n- **Framework**: Next.js 14 (App Router)\n- **UI Library**: React 18 + TypeScript\n- **Styling**: Tailwind CSS + CSS Modules\n- **State Management**: Zustand\n- **Data Fetching**: GraphQL (Apollo Client), WebSocket\n- **Visualization**: Deck.gl (WebGL2), D3.js\n- **Testing**: Vitest (unit), Playwright (E2E)\n- **Documentation**: Storybook\n\n### Infrastructure\n- **Containerization**: Docker + Docker Compose\n- **Orchestration**: Kubernetes (Kustomize)\n- **CI/CD**: GitHub Actions\n- **Monitoring**: Prometheus + Grafana (planned)\n\n## Project Structure\n\n```\ncherenkov/\n├── crates/                    # Rust workspace\n│   ├── cherenkov-api/         # GraphQL/WebSocket API\n│   ├── cherenkov-core/        # Core types and event bus\n│   ├── cherenkov-db/          # Database layer\n│   ├── cherenkov-ingest/      # Data ingestion pipeline\n│   ├── cherenkov-ml/          # ML inference and training\n│   ├── cherenkov-observability/  # Metrics and tracing\n│   ├── cherenkov-plume/        # Dispersion modeling\n│   └── cherenkov-stream/       # Stream processing\n├── web/                       # Next.js frontend\n│   ├── src/\n│   │   ├── app/               # Next.js App Router\n│   │   ├── components/        # React components\n│   │   ├── hooks/             # Custom React hooks\n│   │   ├── lib/               # Utilities and clients\n│   │   ├── stores/            # Zustand stores\n│   │   ├── styles/            # Tailwind + themes\n│   │   └── types/             # TypeScript types\n│   ├── tests/                 # Test suites\n│   └── .storybook/            # Storybook config\n├── mock-api/                  # Mock API for development\n├── docs/                      # Documentation\n├── k8s/                       # Kubernetes manifests\n└── scripts/                   # Deployment scripts\n```\n\n## Quick Start\n\n### Prerequisites\n\n- **Rust**: 1.75+ (install via [rustup](https://rustup.rs))\n- **Node.js**: 18+ (install via [nvm](https://github.com/nvm-sh/nvm))\n- **Docker**: For local infrastructure (optional)\n\n### Development Setup\n\n```bash\n# Clone repository\ngit clone https://github.com/tworjaga/cherenkov.git\ncd cherenkov\n\n# Install dependencies\ncd web && npm install && cd ..\n\n# Start mock API (for frontend development)\ncd mock-api && npm start\n\n# In another terminal, start frontend\ncd web && npm run dev\n\n# Open http://localhost:3000\n```\n\n### Full Stack Development\n\n```bash\n# Start infrastructure services\ndocker-compose up -d scylla redis\n\n# Build and run Rust services\ncargo build --release\ncargo run -p cherenkov-ingest\ncargo run -p cherenkov-api\ncargo run -p cherenkov-stream\n\n# Start frontend\ncd web && npm run dev\n```\n\n## Testing\n\n### Unit Tests (Vitest)\n```bash\ncd web\nnpm test\n```\n- **Status**: 253 tests passing (100% pass rate)\n- **Coverage**: Components, hooks, utilities, stores\n\n### E2E Tests (Playwright)\n```bash\ncd web\nnpx playwright test\n```\n- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari\n- **Tests**: Authentication, Dashboard, Globe, Sensors\n\n### Rust Tests\n```bash\ncargo test --workspace\n```\n\n## Data Sources\n\n| Source | Type | Coverage | Status |\n|--------|------|----------|--------|\n| Safecast | Crowdsourced | Global | Active |\n| uRADMonitor | Commercial | Global | Active |\n| EPA RadNet | Government | USA | Active |\n| EURDEP | Government | EU | Active |\n| IAEA PRIS | Regulatory | 440 plants | Active |\n| USGS Seismic | Scientific | Global | Active |\n| NASA FIRMS | Satellite | Global | Active |\n| NOAA GFS | Weather | Global | Active |\n| OpenAQ | Air quality | Global | Active |\n| Open-Meteo | Weather | Global | Active |\n\nSee [DATA_SOURCES.md](docs/DATA_SOURCES.md) for complete documentation.\n\n## API Documentation\n\n### GraphQL Endpoint\n```\nhttp://localhost:8080/graphql\n```\n\n### WebSocket Endpoint\n```\nws://localhost:8080\n```\n\n### Key Queries\n\n```graphql\n# Get all sensors\nquery GetSensors {\n  sensors {\n    id\n    name\n    location {\n      lat\n      lon\n    }\n    readings {\n      value\n      unit\n      timestamp\n    }\n  }\n}\n\n# Subscribe to real-time readings\nsubscription OnNewReading {\n  newReading {\n    sensorId\n    value\n    timestamp\n  }\n}\n```\n\nSee [API.md](docs/API.md) for complete documentation.\n\n## Configuration\n\n### Environment Variables\n\n| Variable | Description | Default |\n|----------|-------------|---------|\n| `CHERENKOV_API_PORT` | API server port | 8080 |\n| `CHERENKOV_WEB_PORT` | Web server port | 3000 |\n| `SCYLLA_HOSTS` | ScyllaDB hosts | localhost:9042 |\n| `REDIS_URL` | Redis connection | redis://localhost:6379 |\n| `JWT_SECRET` | JWT signing key | - |\n| `LOG_LEVEL` | Logging level | info |\n\nSee [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for production configuration.\n\n## Deployment\n\n### Docker Compose (Local)\n```bash\ndocker-compose up -d\n```\n\n### Kubernetes (Production)\n```bash\nkubectl apply -k k8s/overlays/production\n```\n\nSee [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment guides.\n\n## Documentation\n\n- [Architecture](docs/ARCHITECTURE.md) - System design and data flow\n- [API Reference](docs/API.md) - GraphQL schema and examples\n- [Data Sources](docs/DATA_SOURCES.md) - Source documentation\n- [Deployment](docs/DEPLOYMENT.md) - Production deployment\n- [Contributing](docs/CONTRIBUTING.md) - Contribution guidelines\n- [Security](docs/SECURITY.md) - Security policies\n- [Troubleshooting](docs/TROUBLESHOOTING.md) - Common issues\n\n## Roadmap\n\n### Completed\n- [x] Core data ingestion pipeline\n- [x] GraphQL API with subscriptions\n- [x] WebGL2 globe visualization\n- [x] Real-time anomaly detection\n- [x] WebSocket infrastructure\n- [x] Component library (Storybook)\n- [x] Unit and E2E testing (100% pass rate)\n\n### In Progress\n- [x] Plume dispersion modeling\n- [x] ML-based anomaly classification\n- [x] Mobile application\n- [x] Alert notification system\n\n### Planned\n- [ ] Historical data analysis\n- [ ] Predictive maintenance\n- [ ] Multi-tenant support\n- [ ] Federated learning\n\n## Contributing\n\nContributions are welcome. Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.\n\n1. Fork the repository\n2. Create a feature branch (`git checkout -b feature/amazing-feature`)\n3. Commit changes (`git commit -m 'feat: add amazing feature'`)\n4. Push to branch (`git push origin feature/amazing-feature`)\n5. Open a Pull Request\n\n## Security\n\nFor security concerns, please review [SECURITY.md](SECURITY.md).\n\n## License\n\nThis project is licensed under the MIT License - see [LICENSE](LICENSE) for details.\n\n## Acknowledgments\n\n- Safecast for open radiation data\n- uRADMonitor for sensor network\n- EPA RadNet for US monitoring data\n- IAEA for nuclear facility information\n\n---\n\n**Repository**: https://github.com/tworjaga/cherenkov\n", "flowscope": "# FlowScope 🔍\n\nProfessional-grade network traffic analyzer with advanced protocol analysis, real-time visualization, and anomaly detection.\n\n[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey.svg)](https://github.com)\n<img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.FlowScope&\"  />\n\n## Features\n\n### TLS/HTTPS Analysis (Enhanced)\n- **Multi-Port TLS Detection** - Ports 443, 8443, 4433, 10443\n- **Complete TLS Handshake Capture** - All handshake stages tracked\n- **Full X.509 Certificate Parsing** - Subject, Issuer, Validity, Serial Number\n- **Enhanced JA3 Fingerprinting** - Complete 5-component fingerprint\n- **Advanced Extension Parsing** - SNI, ALPN, Supported Groups, Signature Algorithms\n- **TLS Version Detection** - TLS 1.0/1.1/1.2/1.3\n- **Cipher Suite Analysis** - All cipher suites captured and analyzed\n- **Certificate Chain Validation** - Full certificate details\n- **Session Tracking** - Session ID and ticket monitoring\n\n### WiFi Network Analysis (Enhanced)\n- **Cross-Platform Scanning** - Windows, Linux, macOS support\n- **MAC Vendor Lookup** - Identifies 30+ device manufacturers\n- **Rogue AP Detection** - Detects duplicate SSIDs with different BSSIDs\n- **Enhanced Security Analysis** - Color-coded warnings ( Critical,  Warning,  Info)\n- **WPA3 Detection** - Latest security standard support\n- **Interference Analysis** - Channel overlap and interference scoring\n- **Smart Channel Recommendations** - Best channels for 2.4GHz and 5GHz\n- **Suspicious SSID Detection** - Identifies potentially malicious networks\n- **Hidden SSID Detection** - Flags security through obscurity\n- **Signal Strength History** - Track signal quality over time\n- **Network History Tracking** - Monitor network appearances\n- **Deauth Attack Detection** - Identifies potential attacks\n- **Comprehensive Reports** - Detailed WiFi environment analysis\n\n### Protocol Analysis\n- TCP/UDP with detailed flag analysis (None-safe)\n- ICMP (ping, unreachable messages)\n- ARP (network discovery)\n- DHCP (IP assignment tracking)\n- DNS with query tracking\n- HTTP/HTTPS traffic analysis\n- NTP (time synchronization)\n- mDNS/SSDP (device discovery)\n- QUIC (detection and analysis)\n\n### Advanced Filtering\n- IP range filtering\n- Port filtering\n- Protocol filtering\n- Direction filtering (in/out)\n- Time-based filtering\n- Combined filters (AND/OR)\n- Saved filter presets\n\n### Statistics & Metrics\n- PPS (packets per second)\n- BPS (bytes per second)\n- Top IPs by traffic\n- Top domains (DNS/SNI)\n- Top ports\n- Traffic histograms\n- Spike detection\n- Idle/active period analysis\n\n### Real-time Visualization\n- Live traffic graphs\n- Protocol distribution charts\n- DNS/HTTP/TLS activity graphs\n- Activity heatmaps\n- Source→Destination flow diagrams\n- Timeline view\n- Packet mini-maps\n\n### WiFi Network Analysis\n- WiFi network scanning (Windows/Linux/macOS)\n- Signal strength monitoring\n- Channel congestion analysis\n- Security vulnerability detection\n- Best channel recommendations\n- Connected network details\n- Network quality assessment\n- Auto-refresh capability\n- Comprehensive WiFi reports\n\n### Anomaly Detection (Enhanced)\n- **Excessive DNS Queries** - Detects DNS tunneling attempts\n- **Port Scanning Detection** - Identifies reconnaissance activity\n- **Suspicious Port Usage** - Flags dangerous ports (SSH, RDP, SMB, etc.)\n- **Unusual SNI Patterns** - Detects Tor, suspicious domains\n- **Beaconing Detection** - Identifies C2 communication patterns\n- **Rate-Limit Violations** - PPS/BPS threshold monitoring\n- **VPN/Proxy Detection** - Identifies encrypted tunnel usage\n- **DNS over HTTPS Detection** - Tracks DoH usage\n- **DDoS Detection** - Connection attempt monitoring\n\n### Export & Reporting\n- CSV export\n- PCAP export (Wireshark compatible)\n- HTML reports with charts\n- Auto-save sessions\n- Session comparison\n- Syslog export\n\n### UI/UX Features\n- Dark theme (strict & pleasant)\n- Context menus\n- Detailed packet inspection\n- Color profiles\n- Sortable/pinnable columns\n- Dockable panels\n- Hotkeys support\n- Zoom controls\n\n### Advanced Features\n- Plugin system\n- Configuration profiles\n- REST API\n- Headless mode\n- Role-based access (viewer/analyst)\n- Capture timers\n- Auto-start sessions\n- Domain blacklist/whitelist\n- VPN/Proxy detection\n- DNS over HTTPS detection\n\n## 🛠️ Installation\n\n### Prerequisites\n- Python 3.10 or higher\n- Administrator/root privileges (for packet capture)\n- **Npcap** (Windows) - [Download here](https://npcap.com/)\n  - ⚠️ **IMPORTANT**: Install with \"WinPcap API-compatible Mode\" enabled\n  - Enable \"Support raw 802.11 traffic\" for WiFi analysis\n\n### Quick Install\n\n```bash\n# Clone the repository\ngit clone https://github.com/tworjaga/flowscope.git\ncd flowscope\n\n# Install dependencies\npip install -r requirements.txt\n\n# Run the analyzer (requires admin/root privileges)\npython main.py\n```\n\n### Dependencies\n```\nPyQt6>=6.4.0\nscapy>=2.5.0\npsutil>=5.9.0\nmatplotlib>=3.7.0\ncryptography>=41.0.0  # For enhanced TLS certificate parsing\nnetifaces>=0.11.0     # For WiFi analysis\n```\n\n## Quick Start\n\n### GUI Mode (Recommended)\n```bash\n# Windows (Run as Administrator)\npython main.py\n\n# Linux/macOS (Run with sudo)\nsudo python main.py\n```\n\n### Headless Mode\n```bash\n# Capture for 1 hour and save to file\npython main.py --headless --duration 3600 --output capture.pcap\n\n# Capture with specific interface\npython main.py --headless --interface eth0 --output capture.pcap\n```\n\n### API Mode\n```bash\n# Start REST API server\npython main.py --api --port 8080\n\n# Access API at http://localhost:8080/api/\n```\n\n### Test Capture\n```bash\n# Test if packet capture is working\npython test_capture.py\n```\n\n## Hotkeys\n\n- `Ctrl+S` - Save session\n- `Ctrl+O` - Open session\n- `Ctrl+E` - Export to CSV\n- `Ctrl+F` - Open filter dialog\n- `Ctrl+P` - Pause/Resume capture\n- `Ctrl+R` - Reset statistics\n- `F5` - Refresh view\n- `F11` - Toggle fullscreen\n- `Space` - Pause/Resume\n\n## Configuration\n\nEdit `config/settings.yaml` to customize:\n- Capture interface\n- Buffer sizes\n- Update intervals\n- Theme colors\n- Plugin settings\n\n## Architecture\n\n```\nflowscope/\n├── backend/          # Core packet capture & analysis\n├── frontend/         # PyQt6 GUI\n├── config/           # Configuration files\n├── plugins/          # Plugin system\n├── sessions/         # Saved capture sessions\n└── logs/            # Application logs\n```\n\n## Requirements\n\n- Python 3.10+\n- **Npcap** (Windows) - https://npcap.com/\n  - ОБЯЗАТЕЛЬНО с WinPcap API-compatible Mode\n  - Support raw 802.11 traffic\n- Administrator/root privileges (for packet capture)\n- Windows/Linux/macOS\n\n## Documentation\n\n- **[Installation Guide](INSTALL.md)** - Detailed installation instructions\n- **[Npcap Setup Guide](NPCAP_SETUP_GUIDE.md)** - Windows packet capture setup\n- **[Quick Start Guide](БЫСТРЫЙ_СТАРТ.md)** - Get started in 5 minutes\n- **[Project Summary](PROJECT_SUMMARY.md)** - Complete feature overview\n- **[Testing Results](TESTING_RESULTS.md)** - Validation and test results\n\n## Troubleshooting\n\n### \"0 packets captured\"\n1. **Read `NPCAP_SETUP_GUIDE.md`** for Windows setup\n2. **Run `test_capture.py`** for diagnostics\n3. **Install Npcap correctly** with WinPcap compatibility mode\n4. **Select active network interface** (WiFi/Ethernet)\n5. **Run as Administrator/root**\n\n### \"Permission denied\"\n- **Windows**: Run Command Prompt as Administrator\n- **Linux/macOS**: Use `sudo python main.py`\n\n### \"No such device exists\"\n- Check interface name in `test_capture.py`\n- Reinstall Npcap (Windows)\n- Check `ifconfig` or `ip addr` (Linux)\n\n### NoneType Errors (Fixed)\nAll NoneType errors in TCP flag parsing have been resolved in:\n- `packet_capture.py`\n- `filter_engine.py`\n- `flow_engine.py`\n- `anomaly_detector.py`\n\n### Asyncio Task Warnings (Fixed)\nProper task cancellation implemented for clean shutdown.\n\n## Use Cases\n\n- **Network Security Analysis** - Detect intrusions and anomalies\n- **WiFi Site Surveys** - Optimize wireless network deployment\n- **Protocol Debugging** - Analyze application-level protocols\n- **Performance Monitoring** - Track network bandwidth and latency\n- **Compliance Auditing** - Monitor network security policies\n- **Penetration Testing** - Identify vulnerabilities\n- **IoT Device Analysis** - Monitor smart device communications\n- **TLS/SSL Inspection** - Analyze encrypted traffic metadata\n\n## Recent Updates\n\n### Version 2.0 (Latest)\n- **Enhanced TLS Analysis** - Complete handshake capture with JA3 fingerprinting\n- **Powerful WiFi Tools** - Rogue AP detection, vendor lookup, interference analysis\n- **Fixed All NoneType Errors** - Robust TCP flag parsing across all modules\n- **Asyncio Task Management** - Proper task cancellation and cleanup\n- **Enhanced Security Detection** - WPA3 support, suspicious SSID detection\n- **Better Certificate Parsing** - Full X.509 details with cryptography library\n- **Improved UI** - Packet details panel, TLS handshake panel integration\n\n## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n1. Fork the repository\n2. Create your feature branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)\n4. Push to the branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request\n\n## License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.\n\n## Author\n\nCreated for professional network analysis and security research.\n\n## Acknowledgments\n\n- Scapy - Powerful packet manipulation library\n- PyQt6 - Modern GUI framework\n- Npcap - Windows packet capture driver\n- cryptography - TLS certificate parsing\n\n## Star History\n\nIf you find this project useful, please consider giving it a star!\n\n---\n\n**Note**: This tool is for educational and professional network analysis purposes only. Always ensure you have proper authorization before analyzing network traffic.\n\n\n\n\n", "gemini-overseer": "# GEMINI Overseer\n\n<div align=\"center\">\n  <img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.GEMINI-OVERSEER&\"  />\n</div>\n\n\nEnterprise-grade AI orchestration and monitoring system for BLACKBOXAI integration within VS Code:.\n\n## Overview\n\nGEMINI Overseer acts as the bridge interface between the GEMINI Controller and BLACKBOXAI, providing real-time telemetry, command execution, and security sandboxing for AI-assisted development workflows.\n\n## Features\n\n- **Real-time Telemetry Collection**: Editor state, terminal output, and git status monitoring\n- **Command Bridge**: Outbound command execution (PROMPT_DISPATCH, SYSTEM_INTERVENTION, FILESYSTEM_OVERRIDE, BROWSER_ORCHESTRATION)\n- **Security Sandbox**: Forbidden pattern detection, secret scanning, path validation\n- **Quality Gates**: Automated code review checkpoints and error correction workflows\n- **Multi-mode Supervision**: Autonomous, Supervised, Strict, and Locked operation modes\n\n## Installation\n\n### From Source\n\n```bash\ngit clone https://github.com/tworjaga/GEMINI-OVERSEER.git\ncd GEMINI-OVERSEER\nnpm install\nnpm run compile\n```\n\n### VS Code: Extension\n\n1. Open VS Code:\n2. Go to Extensions view (Ctrl+Shift+X)\n3. Click \"...\" menu -> \"Install from VSIX\"\n4. Select the compiled `.vsix` file\n\n## Configuration\n\nSettings are available under `gemini-overseer.*`:\n\n| Setting | Default | Description |\n|---------|---------|-------------|\n| `supervisionMode` | `supervised` | BLACKBOXAI supervision level |\n| `telemetryEnabled` | `true` | Enable real-time telemetry collection |\n| `forbiddenPatterns` | See defaults | Regex patterns for forbidden commands |\n| `maxContextTokens` | `30000` | Maximum tokens for context window |\n\n## Commands\n\n| Command | Description |\n|---------|-------------|\n| `GEMINI: Status Report` | Display current system status |\n| `GEMINI: Pause BLACKBOXAI` | Halt AI operations |\n| `GEMINI: Resume BLACKBOXAI` | Continue AI operations |\n| `GEMINI: Set Supervision Mode` | Change supervision level |\n| `GEMINI: Force Code Review` | Trigger manual review checkpoint |\n| `GEMINI: Emergency Rollback` | Restore last known good state |\n| `GEMINI: Run Security Audit` | Execute security scan |\n\n## Architecture\n\nSee [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed system design and ADRs.\n\n## Development\n\n```bash\n# Install dependencies\nnpm install\n\n# Compile\nnpm run compile\n\n# Watch mode\nnpm run watch\n\n# Run tests\nnpm run test\n\n# Package extension\nnpm run package\n```\n\n## License\n\nMIT\n", "pinetcore": "# PiNetCore -- Raspberry Pi Network Appliance\n\n[![CI](https://github.com/tworjaga/PiNetCore/workflows/ci/badge.svg)](https://github.com/tworjaga/PiNetCore/actions)\n[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)\n[![Rust](https://img.shields.io/badge/Rust-1.75+-orange.svg)](https://www.rust-lang.org)\n[![Docker](https://img.shields.io/badge/Docker-ARM-blue.svg)](https://www.docker.com)\n[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev)\n<img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.PiNetCore&\"  />\n\n## Overview\n\nPiNetCore is a production-ready network appliance for Raspberry Pi 5. Full router control, real-time packet logging, nftables firewall, modular plugins (WireGuard VPN, Pi-hole DNS, Suricata IDS), React dashboard with live metrics.\n\n## Architecture\n\n```\nInternet/WAN → Rust Core (pnet TAP/bridge + Axum API + SQLite) → Plugins → React Dashboard (Vite/Tailwind/Recharts)\n```\n\n## Key Features\n\n- Packet capture/logging (Ethernet/IP/TCP/UDP → SQLite)\n- nftables firewall (blacklist/whitelist)\n- Plugin system (VPN/Pi-hole/Suricata ready)\n- Axum REST + /metrics (Prometheus)\n- React dashboard + real-time WebSocket\n- Docker ARM + systemd deploy\n- Pi5 LiteOS optimized\n\n## Project Structure\n\n```\nPiNetCore/\n├── core-engine/           # Rust backend (Tokio/Axum/pnet/sqlx)\n│   ├── src/{api,capture,firewall,plugins,storage}\n│   ├── Cargo.toml\n│   └── tests/\n├── dashboard/             # React frontend (Vite/Tailwind/React Query)\n│   ├── src/{components,hooks,services,store}\n│   ├── package.json\n│   └── tests/\n├── deployments/           # Docker + systemd + Pi scripts\n│   ├── docker/\n│   ├── scripts/install_pi.sh\n│   └── docker-compose.yml\n└── configs/               # nftables/wireguard\n```\n\n## Quick Start\n\n### Docker (Recommended)\n```bash\ngit clone https://github.com/tworjaga/PiNetCore\ncd PiNetCore\ndocker compose up -d\n```\nAPI: http://localhost:8080/api/connections  \nDashboard: http://localhost:3000  \nMetrics: http://localhost:8080/metrics\n\n### Pi5 Native\n```bash\n./deployments/scripts/install_pi.sh\nsudo systemctl start pinetcore\n```\n\n## Compatibility\n\n| Router | Bridge Mode | VLAN | ISP Modem |\n|--------|-------------|------|-----------|\n| ASUS/TP-Link/Netgear | Yes | Yes | Yes |\n| OpenWrt/DD-WRT | Yes | Yes | Yes |\n| ISP Locked | Manual | No | No |\n\n## Technology Stack\n\n**Backend (Rust)**  \nRuntime: Tokio  \nWeb: Axum  \nPacket: pnet  \nDB: sqlx (SQLite)  \nFirewall: nftables bindings  \n\n**Frontend (TypeScript)**  \nFramework: Vite + React 18  \nStyling: Tailwind CSS  \nCharts: Recharts  \nQuery: TanStack Query  \n\n**Infrastructure**  \nContainer: Docker ARM64  \nCompose: Multi-service stack  \nDeploy: systemd service  \n\n## Testing\n\n```bash\n# Backend\ncd core-engine\ncargo test           # Unit/integration\ncargo clippy         # Lints\n\n# Frontend\ncd dashboard\nnpm test             # Vitest (100% coverage)\nnpm run build        # Production build\n```\n\n## Configuration\n\n`.env` or `core-engine/config.yaml`:\n```\ndatabase_url = \"sqlite://pinetcore.db\"\napi_port = 8080\ncapture:\n  interface = \"eth0\"\nfirewall:\n  enabled = true\n```\n\n## API\n\n**REST**:\n```\nGET /api/connections    # Recent connections\nGET /health             # Status\nGET /metrics            # Prometheus\n```\n\n**Example**:\n```bash\ncurl http://localhost:8080/api/connections\n```\n\n## Deployment\n\n**Docker Compose** (Grafana/Prometheus/Loki ready):\n```bash\ndocker compose -f docker-compose.monitoring.yml up -d\n```\n\n**Pi Production**:\n1. `./deployments/scripts/install_pi.sh`\n2. `sudo systemctl enable pinetcore`\n3. `sudo systemctl status pinetcore`\n\n## Plugins\n\n```rust\npub struct MyPlugin;\nimpl Plugin for MyPlugin {\n    fn name(&self) -> &str { \"MyPlugin\" }\n    fn start(&self) -> anyhow::Result<()> { Ok(()) }\n}\n```\n\nRegister in `main.rs` → auto start/stop.\n\n## Contributing\n\nSee CONTRIBUTING.md for guidelines on:\n1. Fork → feature branch\n2. `cargo fmt + cargo clippy`\n3. PR with tests\n\n## License\n\nMIT License - see LICENSE for details.\n\n---\n\nRepository: https://github.com/tworjaga/PiNetCore  \nTelegram: @al7exy\n\n", "securemysite": "# Secure My Site\n\n<div align=\"center\">\n  <img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.SecureMySite&\"  />\n</div>\n\n\nA fully offline, local desktop security analyzer for AI-generated web projects. Detects vulnerabilities before deployment through static analysis (SAST), dynamic analysis (DAST on localhost only), and dependency review.\n\n## Features\n\n- **100% Offline Operation** - No data leaves your machine\n- **Static Analysis (SAST)** - Python, JavaScript/TypeScript code scanning\n- **Dependency Scanning** - requirements.txt, package.json vulnerability detection\n- **Configuration Analysis** - .env, settings.py security checks\n- **Local Web Scanning** - Security headers and endpoint analysis (localhost only)\n- **AI Fix Prompts** - Generate structured prompts for ChatGPT/Claude\n- **Professional GUI** - Dark theme PyQt6 interface\n- **CLI Mode** - Command-line operation for CI/CD integration\n\n## Installation\n\n### Requirements\n\n- Python 3.11 or higher\n- Windows, macOS, or Linux\n\n### Install from Source\n\n```bash\n# Clone repository\ngit clone https://github.com/tworjaga/SecureMySite.git\ncd SecureMySite\n\n# Create virtual environment\npython -m venv venv\n\n# Activate virtual environment\n# Windows:\nvenv\\Scripts\\activate\n# macOS/Linux:\nsource venv/bin/activate\n\n# Install dependencies\npip install -r requirements.txt\n```\n\n## Usage\n\n### GUI Mode\n\nLaunch the application without arguments:\n\n```bash\npython main.py\n```\n\n### CLI Mode\n\nScan a project directory:\n\n```bash\npython main.py /path/to/project\n```\n\nWith web scanning:\n\n```bash\npython main.py /path/to/project --url http://localhost:8000\n```\n\nExport results:\n\n```bash\npython main.py /path/to/project --export json --output report.json\n```\n\nGenerate AI fix prompt:\n\n```bash\npython main.py /path/to/project --prompt\n```\n\n## Security Score\n\nThe application calculates a security score from 0-100:\n\n| Score | Grade | Risk Level |\n|-------|-------|------------|\n| 80-100 | A+ to A | Safe |\n| 60-79 | B+ to B | Moderate |\n| 40-59 | C+ to C | High Risk |\n| 0-39 | D+ to F | Critical Risk |\n\n## Vulnerability Severity Levels\n\n- **CRITICAL** (-15 points): RCE, exposed secrets, SQL injection\n- **HIGH** (-10 points): XSS, open CORS, missing CSP\n- **MEDIUM** (-5 points): Missing headers, debug configs\n- **LOW** (-2 points): Best practice violations\n\n## Scanners\n\n### Python SAST\n- Detects eval/exec usage\n- SQL injection patterns\n- Hardcoded credentials\n- Debug mode enabled\n- Unsafe deserialization\n- Path traversal risks\n\n### JavaScript Scanner\n- DOM XSS (innerHTML)\n- eval() usage\n- localStorage token storage\n- Exposed API keys\n- CORS misconfigurations\n\n### Config Scanner\n- .env file exposure\n- Debug settings\n- Hardcoded secrets\n- Insecure cookie flags\n\n### Dependency Scanner\n- requirements.txt analysis\n- package.json analysis\n- Local vulnerability database (100+ CVEs)\n\n### Web Scanner (Localhost Only)\n- Security headers check\n- Cookie flag analysis\n- Dangerous endpoint detection\n- CORS policy validation\n\n## Project Structure\n\n```\nsecure_my_site/\n├── main.py                 # Entry point\n├── app.py                  # Application controller\n├── core/\n│   ├── engine.py          # Analysis orchestrator\n│   ├── file_loader.py     # Safe file discovery\n│   └── config.py          # Configuration\n├── scanners/\n│   ├── base_scanner.py    # Abstract base class\n│   ├── python_sast.py     # Python analysis\n│   ├── js_scanner.py      # JavaScript analysis\n│   ├── config_scanner.py  # Config file analysis\n│   ├── dependency_scanner.py  # Dependency audit\n│   └── web_scanner.py     # Localhost web scan\n├── models/\n│   ├── vulnerability.py   # Data model\n│   └── scan_result.py     # Results container\n├── scoring/\n│   ├── severity.py        # Classification rules\n│   └── score_engine.py    # Score calculation\n├── prompt_engine/\n│   └── prompt_builder.py  # AI prompt generation\n├── gui/\n│   ├── main_window.py     # Primary window\n│   ├── components.py      # UI widgets\n│   └── theme.py           # Dark theme\n└── utils/\n    ├── helpers.py         # Utilities\n    └── validators.py      # Input validation\n```\n\n## Building Executable\n\n### Windows\n\n```bash\npip install pyinstaller\npyinstaller build.spec\n```\n\nThe executable will be in `dist/SecureMySite.exe`.\n\n## Development\n\n### Running Tests\n\n```bash\npip install -r requirements-dev.txt\npytest\n```\n\n### Code Formatting\n\n```bash\nblack .\n```\n\n### Type Checking\n\n```bash\nmypy .\n```\n\n## Security Constraints\n\n1. **Path Traversal Prevention** - All file operations resolve paths within target directory only\n2. **No Code Execution** - Never executes code from scanned projects\n3. **Memory Limits** - 10MB per file, 500MB total project size\n4. **URL Validation** - Web scanner rejects non-localhost URLs\n\n## License\n\nMIT License - See LICENSE file for details.\n\n## Contributing\n\nContributions welcome. Please follow conventional commit format:\n- `feat:` New features\n- `fix:` Bug fixes\n- `refactor:` Code refactoring\n- `docs:` Documentation\n- `style:` Formatting\n\n## Support\n\n- GitHub Issues: https://github.com/tworjaga/SecureMySite/issues\n- Telegram: @al7exy\n", "bluescope": "# 🔵 BlueScope\n\n> **Enterprise Bluetooth Monitoring, Security Analysis & Signal Manipulation Platform**\n\n[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)\n[![PyQt6](https://img.shields.io/badge/PyQt6-6.6+-green.svg)](https://www.riverbankcomputing.com/software/pyqt/)\n[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)\n[![Version](https://img.shields.io/badge/Version-0.2.0-success.svg)](CHANGELOG.md)\n[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey.svg)]()\n[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen.svg)]()\n<img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.bluescope&\"  />\n\n\nA professional-grade Bluetooth monitoring and analysis tool with ML-powered anomaly detection, real-time visualization, signal duplication, security auditing, and comprehensive device profiling capabilities.\n\n![BlueScope Screenshot](docs/screenshot.png)\n\n---\n\n## Features\n\n### Core Capabilities\n- **Real-time Bluetooth Monitoring** - Capture and analyze BLE traffic with live updates\n- **Professional GUI** - Dark-themed interface with 6 functional tabs\n- **ML-Powered Analytics** - Anomaly detection using Isolation Forest & Autoencoders\n- **Device Profiling** - Comprehensive device behavior analysis\n- **Live Visualization** - Real-time graphs for traffic and RSSI\n- **Statistics Dashboard** - Detailed metrics and performance indicators\n\n### Signal Duplication & Live Capture\n- **Signal Recording** - Capture and store Bluetooth signals in real-time\n- **Signal Duplication** - Replay signals with multiple modes (immediate, delayed, burst, random)\n- **Live Signal Table** - Real-time visualization of captured signals with RSSI color-coding\n- **Export/Import** - Save signal captures to JSON for later analysis\n- **Signal Replay** - Replicate captured traffic patterns for testing\n\n### Security Analysis\n- **Device Scanner** - Discover and profile nearby Bluetooth devices\n- **Security Audit** - Comprehensive vulnerability assessment\n- **Channel Analyzer** - Analyze BLE channel usage and interference\n- **Faraday Simulator** - Educational simulation of RF isolation effects\n- **Vulnerability Detection** - Identify known vulnerable device signatures\n\n### Bluetooth Spam (Security Testing)\n- **Advertising Spam** - Flood advertising channels (simulation mode)\n- **Connection Request Spam** - Test device resilience\n- **L2CAP/ATT Packet Spam** - Protocol-level testing\n- **Real Transmission** - Linux-only with root and proper hardware\n\n### Analytics Features\n- **Behavior Engine** - Pattern detection and baseline profiling\n- **Anomaly Detection** - Statistical and ML-based anomaly identification\n- **Device Tracking** - Monitor multiple devices simultaneously\n- **Packet Analysis** - Deep packet inspection and protocol analysis\n- **Session Replay** - Replay captured sessions for analysis\n\n### User Interface\n- **6 Tabs**: Devices, Packets, Anomalies, Statistics, Graphs, Live Capture\n- **Dark Theme** - Professional VS Code-inspired design\n- **Real-time Updates** - Live data refresh every second\n- **Search & Filter** - Quick data filtering and search\n- **Export Capabilities** - CSV and JSON export for further analysis\n\n---\n\n## Quick Start\n\n### Prerequisites\n- **Python 3.11+** (Python 3.14 recommended)\n- **Windows 10/11** (primary support), Linux, macOS\n- **4GB RAM** minimum (8GB recommended)\n- **100MB** disk space\n\n### Installation\n\n#### Method 1: One-Click Launch (Easiest)\n```bash\n# Clone the repository\ngit clone https://github.com/tworjaga/bluescope.git\ncd bluescope\n\n# Run the launcher\nstart.bat\n```\n\n#### Method 2: Manual Setup\n```bash\n# Clone the repository\ngit clone https://github.com/tworjaga/bluescope.git\ncd bluescope\n\n# Create virtual environment\npython -m venv venv\n\n# Activate virtual environment\nvenv\\Scripts\\activate  # Windows\nsource venv/bin/activate  # Linux/Mac\n\n# Install dependencies\npip install -r requirements-minimal.txt\n\n# Launch application\npython main.py\n```\n\n#### Method 3: Full Installation with All Features\n```bash\n# Install all dependencies including ML and security features\npip install -r requirements.txt\n\n# Launch\npython main.py\n```\n\n---\n\n## Usage Guide\n\n### Starting BlueScope\n1. **Launch the application**:\n   - Run `start.bat`, or\n   - Run `python main.py`\n\n2. **Start Capture**:\n   - Click the green \"▶ Start Capture\" button\n   - Watch real-time data populate all panels\n\n3. **Explore Features**:\n   - **Devices Tab**: View discovered Bluetooth devices\n   - **Packets Tab**: Inspect captured packets\n   - **Anomalies Tab**: Review ML-detected anomalies\n   - **Statistics Panel**: Monitor real-time metrics\n   - **Graphs**: Visualize traffic and RSSI data\n   - **Live Capture**: Record and duplicate signals\n\n### Security Analysis\n1. **Open Security Audit**: Tools > Security Audit (Ctrl+Shift+A)\n2. **Run Device Scanner**: Click \"Start Security Scan\"\n3. **Analyze Channels**: Switch to \"Channel Analyzer\" tab\n4. **View Results**: Review vulnerabilities and recommendations\n\n### Signal Duplication\n1. **Open Live Capture**: Switch to \"Live Capture\" tab\n2. **Start Recording**: Click \"Start Recording\"\n3. **Configure Duplication**: Set mode (immediate/delayed/burst/random)\n4. **Start Duplication**: Click \"▶ Start Duplication\"\n5. **Replay Signals**: Use \"Replay\" controls\n\n### Key Controls\n- **Ctrl+P**: Start/Stop capture\n- **Ctrl+Shift+A**: Security Audit\n- **Ctrl+Shift+D**: Signal Duplication\n- **Ctrl+Shift+S**: Bluetooth Spam (Security Testing)\n- **Ctrl+S**: Save session\n- **Ctrl+E**: Export to CSV\n- **Ctrl+R**: Reset statistics\n- **F5**: Refresh view\n- **F11**: Toggle fullscreen\n\n---\n\n## Architecture\n\n```\nbluescope/\n├── main.py                      # Application entry point\n├── frontend/                    # GUI components\n│   ├── ui/                     # UI widgets\n│   │   ├── main_window.py      # Main application window\n│   │   ├── device_table.py     # Device listing table\n│   │   ├── packet_table.py     # Packet inspection table\n│   │   ├── statistics_panel.py # Real-time statistics\n│   │   ├── graphs.py           # Traffic & RSSI graphs\n│   │   ├── anomaly_panel.py    # Anomaly display\n│   │   ├── live_capture_view.py # Signal duplication UI\n│   │   ├── packet_inspector.py # Deep packet inspection\n│   │   ├── session_replay.py   # Session replay controls\n│   │   ├── export_config_dialog.py # Export configuration\n│   │   └── alert_notification.py # Alert system\n│   └── themes/                 # UI themes\n│       └── dark_theme.py       # Dark theme styling\n├── backend/                     # Core backend modules\n│   ├── capture_manager.py      # Bluetooth capture engine\n│   ├── signal_duplicator.py   # Signal recording & replay\n│   ├── bluetooth_security.py  # Security analysis tools\n│   ├── bluetooth_spam.py      # Security testing (simulation)\n│   ├── linux_bluetooth_tx.py  # Real transmission (Linux)\n│   ├── export_manager.py      # Data export functionality\n│   ├── session_manager.py     # Session management\n│   ├── protocol_parser.py     # BLE protocol parsing\n│   ├── filter_engine.py       # Packet filtering\n│   ├── ml_integration.py      # Machine learning integration\n│   ├── multi_capture_manager.py # Multi-device capture\n│   ├── advanced_protocols.py  # Advanced protocol support\n│   ├── plugin_system.py       # Plugin architecture\n│   ├── error_handler.py       # Error handling\n│   ├── performance_optimizer.py # Performance optimization\n│   └── platform_utils.py      # Platform-specific utilities\n├── analytics/                   # Analytics engines\n│   ├── behavior_engine/       # Behavior analysis\n│   │   └── main.py\n│   └── anomaly_engine/        # Anomaly detection\n│       ├── main.py\n│       └── ml_detector.py\n├── agents/                      # Capture agents\n│   └── bt-capture/            # Rust-based capture agent\n│       └── src/\n├── config/                      # Configuration files\n│   └── settings.yaml\n├── docs/                        # Documentation\n│   └── API_REFERENCE.md\n├── exports/                     # Export directory\n├── logs/                        # Application logs\n└── tests/                       # Test suite\n```\n\n---\n\n## Configuration\n\nEdit `config/settings.yaml` to customize:\n\n```yaml\napp:\n  name: \"BlueScope\"\n  version: \"0.2.0\"\n  log_level: \"INFO\"\n\ncapture:\n  device: \"auto\"\n  buffer_size: 10000\n  update_interval: 1000\n  backend: \"mock\"  # Options: mock, bleak, rust\n\nanalytics:\n  behavior_engine:\n    enabled: true\n    baseline_window: 86400\n  anomaly_engine:\n    enabled: true\n    threshold: 2.5\n\nsignal_duplication:\n  enabled: true\n  auto_record: false\n  default_mode: \"immediate\"\n\nsecurity:\n  auto_scan: false\n  vulnerability_check: true\n\nui:\n  theme: \"dark\"\n  update_rate: 1000\n  max_table_rows: 10000\n```\n\n---\n\n## Dependencies\n\n### Core (Minimal Install)\n- **PyQt6** (>=6.6.0) - GUI framework\n- **NumPy** (>=1.26.0) - Data processing\n- **python-dotenv** (>=1.0.0) - Environment variables\n- **PyYAML** (>=6.0.1) - Configuration management\n\n### ML & Analytics (Full Install)\n- **scikit-learn** (>=1.8.0) - Machine learning algorithms\n- **PyTorch** (>=2.9.0) - Deep learning framework\n- **scipy** (>=1.16.0) - Scientific computing\n\n### Security & Capture (Optional)\n- **bleak** (>=0.21.0) - Cross-platform BLE library\n- **pyusb** (>=1.2.1) - USB device access\n\nSee `requirements.txt` for complete list.\n\n---\n\n## Testing\n\nRun the verification script:\n```bash\npython verify_installation.py\n```\n\nRun backend tests:\n```bash\npython backend/bluetooth_security.py\n```\n\nExpected output:\n```\n============================================================\nBluetooth Security Module Test\n============================================================\n1. Testing Bluetooth Scanner...\n   Devices found: 4\n   Security issues: 10\n   Critical devices: 2\n\n2. Testing Channel Analyzer...\n   Total packets: 33\n   Interference detected: False\n\n3. Testing Faraday Simulator...\n   Devices blocked: 4\n   Remaining: 0\n\n4. Testing Full Security Audit...\n   Risk Level: LOW\n   Key Findings: 4\n\n✓ All security module tests passed!\n```\n\n---\n\n## Contributing\n\nContributions are welcome! Please follow these steps:\n\n1. Fork the repository\n2. Create a feature branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)\n4. Push to the branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request\n\n### Development Setup\n```bash\n# Clone your fork\ngit clone https://github.com/tworjaga/bluescope.git\ncd bluescope\n\n# Create virtual environment\npython -m venv venv\nvenv\\Scripts\\activate  # Windows\nsource venv/bin/activate  # Linux/Mac\n\n# Install development dependencies\npip install -r requirements.txt\npip install pytest black flake8 mypy\n\n# Run tests\npytest\n\n# Format code\nblack .\n```\n\n---\n\n## Legal Notice\n\n**For Authorized Security Testing Only**\n\nBlueScope includes security testing features (Bluetooth Spam, Signal Duplication) that are intended for:\n- Authorized penetration testing\n- Security research in controlled environments\n- Educational purposes\n- Testing your own devices\n\n**Do not use these features to:**\n- Attack networks or devices without explicit permission\n- Disrupt public Bluetooth services\n- Violate any laws or regulations\n- Harass or spy on individuals\n\nThe authors are not responsible for misuse of this software. Always ensure you have proper authorization before testing any Bluetooth systems.\n\n---\n\n## License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n---\n\n## Acknowledgments\n\n- **PyQt6** - For the excellent GUI framework\n- **scikit-learn** - For ML algorithms\n- **PyTorch** - For deep learning capabilities\n- **bleak** - For cross-platform BLE support\n- **Community** - For feedback and contributions\n\n---\n\n## Support\n\n- **Issues**: [GitHub Issues](https://github.com/tworjaga/bluescope/issues)\n- **Discussions**: [GitHub Discussions](https://github.com/tworjaga/bluescope/discussions)\n- **Email**: tworjaga@example.com\n\n\n---\n\n## Roadmap\n\n### Version 0.2.0 (Current)\n- [x] Signal Duplication & Live Capture\n- [x] Security Audit & Device Scanner\n- [x] Channel Analyzer\n- [x] Bluetooth Spam (Security Testing)\n- [x] Session Replay\n- [x] Export/Import functionality\n\n### Version 0.3.0 (Planned)\n- [ ] Real Bluetooth hardware integration\n- [ ] Advanced protocol parsers (BLE 5.0, Mesh)\n- [ ] Multi-device simultaneous capture\n- [ ] Cloud synchronization\n- [ ] Advanced ML models\n- [ ] Plugin system\n\n### Version 1.0.0 (Future)\n- [ ] Production-ready release\n- [ ] Complete hardware support (Ubertooth, HackRF)\n- [ ] Full documentation\n- [ ] Enterprise features\n- [ ] Comprehensive testing suite\n\n---\n\n## Project Status\n\n- **Version**: 0.2.0\n- **Status**: Production Ready\n- **Last Updated**: March 2025\n- **Python**: 3.11+\n- **Platform**: Windows (primary), Linux, macOS\n\n---\n\n## Star History\n\nIf you find this project useful, please consider giving it a star\n\n---\n\n\n\n\n", "flipper-rf-lab": "# Flipper RF Lab\n\n[![Flipper Zero](https://img.shields.io/badge/Flipper-Zero-orange)](https://flipperzero.one)\n[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)\n[![Tests](https://img.shields.io/badge/Tests-30%2F30%20Passing-brightgreen)](tests/test_algorithms.py)\n<img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.flipper-rf-lab&\"  />\n\n\n> **Professional RF Analysis & Research Platform for Flipper Zero**\n> \n> Transform your Flipper Zero into a laboratory-grade RF forensics instrument with 15 advanced analysis features.\n\n![Flipper RF Lab](docs/images/flipper-rf-lab-banner.png)\n\n## Features\n\n| Feature | Description | Status |\n|---------|-------------|--------|\n| **RF Fingerprinting** | Device-level identification via timing drift, rise/fall slopes, clock instability | ✅ |\n| **Adaptive Signal Modeling** | Automatic protocol detection and hypothesis generation | ✅ |\n| **Cross-Session Correlation** | Compare signals across capture sessions | ✅ |\n| **Behavioral Profiling** | Long-term device behavior analysis | ✅ |\n| **Timing Stability Analysis** | Laboratory-grade oscillator characterization | ✅ |\n| **Advanced Clustering** | K-means and hierarchical signal grouping | ✅ |\n| **Threat Modeling** | Vulnerability scoring and risk assessment | ✅ |\n| **Real-Time Activity Map** | Continuous 300-928 MHz spectrum monitoring | ✅ |\n| **Signal Replay Integrity** | Verify fidelity of signal regeneration | ✅ |\n| **Modular Research Mode** | Deep analytical tools for protocol reverse engineering | ✅ |\n| **Internal Telemetry** | OS-level performance monitoring | ✅ |\n| **Deterministic Execution** | <1μs timing jitter for scientific validity | ✅ |\n| **Signal Compression** | 5:1+ compression for long-term logging | ✅ |\n| **Long-Term Logging** | Unattended background monitoring | ✅ |\n| **Embedded Math Toolkit** | Q15.16 fixed-point operations | ✅ |\n\n## Quick Start\n\n### Prerequisites\n- [Flipper Zero](https://flipperzero.one/) device\n- [Flipper Zero Firmware SDK](https://github.com/flipperdevices/flipperzero-firmware)\n\n### Installation\n\n```bash\n# 1. Clone the Flipper Zero firmware\ngit clone https://github.com/flipperdevices/flipperzero-firmware.git\ncd flipperzero-firmware\n\n# 2. Add this application to user apps\ngit clone https://github.com/tworjaga/flipper-rf-lab.git applications_user/flipper-rf-lab\n\n# 3. Build the application\n./fbt fap_flipper_rf_lab\n\n# 4. Flash to your Flipper Zero\n./fbt fap_flipper_rf_lab flash\n```\n\n### Alternative: Direct Download\nDownload the latest `.fap` file from [Releases](https://github.com/tworjaga/flipper-rf-lab/releases) and copy to your Flipper's SD card.\n\n## Usage\n\n### Main Menu\n- **Capture Mode**: Real-time RF signal capture with analysis\n- **Spectrum Scan**: 300-928 MHz continuous monitoring\n- **Device Database**: View identified device fingerprints\n- **Research Mode**: Advanced protocol reverse engineering tools\n- **Settings**: Configure RF parameters and logging options\n\n### Capture & Analysis\n1. Select frequency band (315/433/868/915 MHz or custom)\n2. Choose modulation type or use auto-detection\n3. Start capture - signals are automatically analyzed\n4. View real-time results: fingerprint, threat score, protocol guess\n\n### Research Mode\n- Raw timing dumps to CSV\n- Binary frame visualization\n- Pulse histogram analysis\n- Frame alignment tools\n\n## Architecture\n\n```\nflipper-rf-lab/\n├── core/                    # Main application & HAL\n│   ├── flipper_rf_lab.h     # Core data structures\n│   ├── flipper_rf_lab_main.c # Entry point & FreeRTOS tasks\n│   ├── hal/                 # Hardware abstraction\n│   │   ├── cc1101_driver.c  # TI CC1101 RF transceiver\n│   │   ├── gpio_manager.c   # GPIO control\n│   │   └── timer_precision.c # DWT cycle counter (1μs)\n│   └── math/                # Fixed-point math library\n│       ├── fixed_point.c    # Q15.16 operations\n│       └── statistics.c     # Welford's online algorithm\n├── analysis/                # Signal analysis engines\n│   ├── fingerprinting.c     # RF device fingerprinting\n│   ├── clustering.c         # K-means & hierarchical\n│   ├── protocol_infer.c     # Protocol detection\n│   └── threat_model.c       # Vulnerability scoring\n├── storage/                 # Data persistence\n│   ├── sd_manager.c         # FAT32 file operations\n│   └── compression.c        # Delta, RLE, Huffman, LZ77\n├── ui/                      # User interface\n│   └── main_menu.c          # 128x64 LCD menu system\n└── research/                # Advanced tools\n    └── telemetry.c          # Performance monitoring\n```\n\n## Technical Specifications\n\n| Parameter | Value |\n|-----------|-------|\n| **Platform** | Flipper Zero (STM32WB55RG) |\n| **CPU** | ARM Cortex-M4 @ 64 MHz |\n| **RAM Usage** | ~60 KB (static allocation only) |\n| **Timing Precision** | 0.1 μs (DWT cycle counter) |\n| **Frequency Range** | 300-928 MHz |\n| **Modulations** | 2-FSK, 4-FSK, GFSK, MSK, OOK, ASK |\n| **Compression** | 16.7:1 ratio (RLE) |\n| **Battery Life** | 8+ hours logging, 48+ hours standby |\n\n## Testing\n\nAll core algorithms are verified with Python simulations:\n\n```bash\ncd tests\npython test_algorithms.py\n```\n\n**Results**: 30/30 tests passing (100%)\n- Fixed-point math (Q15.16)\n- Compression algorithms (Delta, RLE)\n- Statistical analysis (Welford's algorithm)\n- Clustering (K-means, Euclidean distance)\n- Threat modeling (Shannon entropy)\n- Protocol inference (OOK, FSK, ASK detection)\n\n## Contributing\n\nContributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.\n\n## License\n\nMIT License - see [LICENSE](LICENSE) file.\n\n## Acknowledgments\n\n- [Flipper Devices](https://flipperdevices.com/) for the amazing Flipper Zero\n- [Flipper Zero Firmware](https://github.com/flipperdevices/flipperzero-firmware) team\n- TI CC1101 datasheet and application notes\n\n## Contact\n\n**Author**: [@tworjaga](https://github.com/tworjaga)\n\nFor bug reports and feature requests, please use [GitHub Issues](https://github.com/tworjaga/flipper-rf-lab/issues).\n\n---\n\n", "keyspace": "# Keyspace\n\nAdvanced password cracking tool with modern GUI built using PyQt6. Features multiple attack types including dictionary attacks, brute force, rule-based attacks, and more.\n\n\n## Features\n\n- **Multiple Attack Types**:\n  - Dictionary Attack (WPA2)\n  - Brute Force Attack\n  - Rule-based Attack\n  - Hybrid Attack\n  - Mask Attack\n  - Combinator Attack\n  - PIN Code Attack\n\n- **Advanced Features**:\n  - Real-time progress monitoring\n  - Speed and ETA calculations\n  - Comprehensive logging\n  - Pause/Resume functionality\n  - Checkpoint saving for resume capability\n  - Modern PyQt6 GUI\n  - Multiple mutation rules for rule-based attacks\n\n- **GUI Features**:\n  - Dashboard with live statistics\n  - Attack log viewer\n  - Results panel\n  - Configuration panel\n  - Progress bars and status indicators\n\n## Installation\n\n### Option 1: Manual Installation\n\n1. Clone or download the repository\n2. Install dependencies:\n   ```bash\n   pip install -r requirements.txt\n   ```\n\n### Option 2: Platform-Specific Packages\n\nThe tool provides native packages for different platforms:\n\n#### Linux (Debian/Ubuntu)\n```bash\n# Build Debian package\n./packaging/linux/deb/build_deb.sh\n\n# Or use the universal build script\n./build_packages.sh\n```\n\n#### Linux (Red Hat/Fedora/CentOS)\n```bash\n# Build RPM package\n./packaging/linux/rpm/build_rpm.sh\n\n# Or use the universal build script\n./build_packages.sh\n```\n\n#### macOS\n```bash\n# Build DMG installer\n./packaging/macos/build_dmg.sh\n\n# Or use the universal build script\n./build_packages.sh\n```\n\n### Option 3: Docker\n\nRun the tool in a container:\n```bash\n# Build and run with Docker\ndocker build -t keyspace .\n\ndocker run -it --rm keyspace\n\n\n# Or use Docker Compose for full stack\ndocker-compose up\n```\n\n## Usage\n\n### GUI Mode (Recommended)\n\nRun the tool with the graphical interface:\n\n```bash\npython main.py\n```\n\nOr use the provided batch file:\n```bash\nstart.bat\n```\n\n### Command Line Mode\n\nYou can also pre-configure attacks via command line:\n\n```bash\npython main.py --target \"demo_target\" --attack-type \"Brute Force Attack\" --min-length 8 --max-length 12\n```\n\n## Attack Types\n\n### Dictionary Attack (WPA2)\nUses a wordlist file to test passwords against a target. Requires a wordlist file.\n\n### Brute Force Attack\nGenerates all possible combinations within the specified character set and length range.\n\n### Rule-based Attack\nApplies various mutation rules to base passwords from a wordlist, including:\n- Case variations\n- Leet speak\n- Number appending/prepending\n- Special character insertion\n- Keyboard walk patterns\n- And more\n\n### Hybrid Attack\nCombines dictionary words with common additions (numbers, special chars, etc.)\n\n### Mask Attack\nUses password masks (like Hashcat) to generate specific patterns.\n\n### Combinator Attack\nCombines words from two wordlists.\n\n### PIN Code Attack\nSpecialized attack for numeric PIN codes of various lengths.\n\n## Configuration\n\n### Basic Settings\n- **Target**: The target to attack (SSID, username, etc.)\n- **Attack Type**: Select from available attack methods\n- **Wordlist**: Path to wordlist file (required for some attacks)\n- **Min/Max Length**: Password length range for brute force\n- **Charset**: Characters to use in brute force generation\n\n### Advanced Settings\nThe tool includes various performance optimizations:\n- Memory-efficient processing\n- Batch processing\n- Speed monitoring with moving averages\n- Error handling and recovery\n\n## GUI Layout\n\nThe main window is divided into several panels:\n\n1. **Attack Configuration**: Set up your attack parameters\n2. **Dashboard**: Live statistics and progress\n3. **Attack Log**: Detailed logging of attack progress\n4. **Statistics**: Performance metrics and analysis\n5. **Results**: Found passwords and attack outcomes\n\n## Safety & Ethics\n\n**WARNING**: This tool is for educational and security research purposes only. Unauthorized use against systems you don't own may be illegal. Always obtain proper authorization before performing security testing.\n\n\n## Requirements\n\n- Python 3.8+\n- PyQt6\n- Windows/Linux/macOS\n\n## License\n\nThis project is for educational purposes. Use responsibly.\n\n## Contributing\n\nContributions welcome! Please ensure all code follows security best practices and includes proper error handling.\n", "pivotmap": "# PivotMap  <img src=\"https://visitor-badge.laobi.icu/badge?page_id=tworjaga.pivotmap&\"  />\n\n\nAttack Path Intelligence Engine\n\nFrom exposure to compromise.\n\n## Overview\n\nPivotMap is an open-source Python-based attack path intelligence engine for offensive security professionals. It does not perform active scanning. Instead, it ingests scan results, correlates vulnerabilities, builds an attack graph, and identifies realistic compromise paths.\n\n## Core Principles\n\n- Vulnerability lists are not intelligence\n- CVSS alone is insufficient\n- Attack paths matter more than raw findings\n- Context determines exploitability\n- Correlation over enumeration\n\n## Features\n\n- **Ingestion Layer**: Parse Nmap XML and Nuclei JSON scan results\n- **Correlation Engine**: Match services to CVEs with fuzzy version matching\n- **Graph Engine**: Build directed attack graphs with networkx\n- **Pivot Engine**: Compute shortest, highest impact, and lowest complexity paths\n- **PivotScore System**: Multi-factor scoring (exploitability × exposure × privilege × network position × criticality)\n- **Reporting**: Generate Markdown, HTML, and JSON reports\n\n## Download and Installation\n\n### System Requirements\n\n- **Operating System**: Windows 10/11, Linux, macOS\n- **Python**: Version 3.12 or higher\n- **Memory**: Minimum 4GB RAM (8GB recommended for large graphs)\n- **Disk Space**: 500MB for installation, additional space for CVE database\n\n### Method 1: pip install (Recommended)\n\nInstall from PyPI when published:\n\n```bash\npip install pivotmap\n```\n\nWith optional dependencies:\n\n```bash\n# With Redis support for background jobs\npip install pivotmap[redis]\n\n# With visualization support\npip install pivotmap[viz]\n\n# With all optional features\npip install pivotmap[all]\n```\n\n### Method 2: Install from Source\n\nClone the repository and install in development mode:\n\n```bash\n# Clone repository\ngit clone https://github.com/tworjaga/pivotmap.git\n\n# Enter directory\ncd pivotmap\n\n# Create virtual environment (recommended)\npython -m venv .venv\n\n# Activate virtual environment\n# Windows:\n.venv\\Scripts\\activate\n# Linux/macOS:\nsource .venv/bin/activate\n\n# Install dependencies\npip install -r requirements.txt\n\n# Install package in editable mode\npip install -e .\n```\n\n### Method 3: Windows Quick Start\n\nFor Windows users, use the provided batch file:\n\n```bash\n# Download or clone the repository\ngit clone https://github.com/tworjaga/pivotmap.git\ncd pivotmap\n\n# Run the setup script\nstart.bat\n```\n\nThe `start.bat` script will:\n- Check Python installation\n- Create virtual environment\n- Install all dependencies\n- Install PivotMap in development mode\n- Display usage instructions\n\n### Method 4: Docker\n\nRun PivotMap in a containerized environment:\n\n```bash\n# Clone repository\ngit clone https://github.com/tworjaga/pivotmap.git\ncd pivotmap\n\n# Build and run with Docker Compose\ndocker-compose up -d\n\n# Or build manually\ndocker build -t pivotmap .\n\n# Run container\ndocker run -p 8000:8000 -v ./data:/app/data pivotmap\n```\n\nDocker Compose includes:\n- PivotMap API server (port 8000)\n- Optional Redis for background jobs\n- Persistent data volumes\n- Health checks\n\n\n### Verify Installation\n\n```bash\n# Check CLI is working\npivotmap --version\n\n# Check API can be imported\npython -c \"from pivotmap.api import app; print('API OK')\"\n\n# Run tests\npytest tests/\n```\n\n\n## Quick Start\n\n### Step 1: Download Sample Data\n\nDownload test scan files to get started:\n\n```bash\n# Create test directory\nmkdir test_data\ncd test_data\n\n# Download sample Nmap XML (replace with your own scan)\n# Example: nmap -sV -oX scan.xml target.com\n\n# Download sample Nuclei JSON (replace with your own results)\n# Example: nuclei -u target.com -json -o vulns.json\n```\n\n### Step 2: CLI Usage\n\n```bash\n# Import scan results\npivotmap import scan.xml\npivotmap import vulns.json --format nuclei\n\n# Build attack graph\npivotmap analyze --nmap scan.xml --nuclei vulns.json\n\n# Find top attack paths\npivotmap paths --top 10\n\n# Generate report\npivotmap report --format html --output report.html\n```\n\n### Step 3: API Usage\n\n```bash\n# Start API server\nuvicorn pivotmap.api:app --reload\n\n# Import and analyze\ncurl -X POST -F \"file=@scan.xml\" http://localhost:8000/import\ncurl -X POST http://localhost:8000/analyze\n\n# Get attack paths\ncurl http://localhost:8000/paths?top=5\n\n# Generate report\ncurl http://localhost:8000/report?format=markdown\n```\n\n\n## Architecture\n\n```\npivotmap/\n├── core/           # Data models, scoring, graph builder\n├── ingest/         # Nmap/Nuclei parsers\n├── knowledge/      # CVE database, exploit metadata\n├── engine/         # Pivot engine, path finder\n├── reporting/      # Report generators\n├── cli.py          # Command-line interface\n├── api.py          # FastAPI endpoints\n└── config.py       # Configuration management\n```\n\n## Dependencies\n\n### Core Dependencies\n\n| Package | Version | Purpose |\n|---------|---------|---------|\n| Python | >=3.12 | Runtime |\n| FastAPI | >=0.109.0 | API framework |\n| Typer | >=0.9.0 | CLI framework |\n| Rich | >=13.7.0 | Terminal output |\n| Pydantic | >=2.5.0 | Data validation |\n| SQLModel | >=0.0.14 | ORM |\n| networkx | >=3.2.0 | Graph engine |\n| httpx | >=0.26.0 | HTTP client |\n| WeasyPrint | >=60.0 | PDF generation |\n| PyYAML | >=6.0.1 | YAML parsing |\n| Jinja2 | >=3.1.3 | Template engine |\n\n### Optional Dependencies\n\n| Package | Purpose |\n|---------|---------|\n| redis | Background job queue |\n| rq | Job processing |\n| pyvis | Interactive graph visualization |\n| matplotlib | Static graph plots |\n\n### Download Size\n\n- Source code: ~150KB\n- Dependencies: ~50-100MB\n- CVE database (optional): ~500MB\n\n\n## Troubleshooting\n\n### Installation Issues\n\n**Problem**: `pip install` fails with Python version error\n**Solution**: Ensure Python 3.12+ is installed: `python --version`\n\n**Problem**: `ModuleNotFoundError` after installation\n**Solution**: Install in editable mode: `pip install -e .`\n\n**Problem**: WeasyPrint installation fails\n**Solution**: Install system dependencies (GTK+) from https://weasyprint.org\n\n### Runtime Issues\n\n**Problem**: Out of memory with large graphs\n**Solution**: Enable graph pruning in config: `graph.pruning_enabled = true`\n\n**Problem**: Slow CVE matching\n**Solution**: Use SQLite backend: `cve.backend = \"sqlite\"`\n\n## License\n\nMIT License - see LICENSE file for details.\n\n## Contributing\n\nContributions welcome. Please follow conventional commits format.\n\n1. Fork the repository\n2. Create feature branch: `git checkout -b feat/new-feature`\n3. Commit changes: `git commit -m \"feat: add new feature\"`\n4. Push to branch: `git push origin feat/new-feature`\n5. Open Pull Request\n\n## Contact\n\n- **GitHub**: https://github.com/tworjaga\n- **Telegram**: @al7exy\n- **Project**: https://github.com/tworjaga/pivotmap\n\n## Changelog\n\nSee [CHANGELOG.md](CHANGELOG.md) for version history.\n", "esp32watchdog": "# ESP32Watchdog\n\n[![Platform](https://img.shields.io/badge/Platform-ESP32--WROOM--32-blue)](https://www.espressif.com/en/products/socs/esp32)\n[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)\n[![Build](https://img.shields.io/badge/Build-Arduino_IDE_2.x-orange)](https://www.arduino.cc/)\n[![Author](https://img.shields.io/badge/Author-tworjaga-lightgrey)](https://github.com/tworjaga)\n\n> Passive Wi-Fi threat detection device for the ESP32.  \n> Detects deauth floods, evil twin APs, and beacon floods — no transmission, no configuration, logs everything to microSD.\n\n---\n\n## Overview\n\nESP32Watchdog is a self-contained passive 802.11 threat monitor inspired by the Gotchi project family. It runs on the same ~10 EUR hardware stack as ESP32Gotchi, requires no host computer, and logs all detections as CSV files directly to a microSD card. All operation is autonomous from power-on.\n\nThe firmware uses three FreeRTOS tasks, a promiscuous-mode Wi-Fi callback with RSSI pre-filtering, and a dedicated SD write task so logging never stalls packet processing. A single button cycles through three independent detection modes. The device transmits nothing — it is entirely passive.\n\n---\n\n## Detection Modes\n\n### Mode 0 — DEAUTH\nMonitors for deauthentication and disassociation frame floods. If the same source MAC sends ≥ 10 deauth/disassoc frames within a 1-second window, an alert fires. This is the primary indicator of a deauth-based denial-of-service or forced re-association attack.\n\n### Mode 1 — TWIN\nMonitors beacon and probe-response frames for evil twin APs: two different BSSIDs advertising the same SSID. The device maintains a table of known SSID→BSSID mappings and alerts immediately when a conflicting BSSID is seen.\n\n### Mode 2 — FLOOD\nCounts unique SSIDs seen per second from beacons and probe responses. If the count exceeds 20 unique SSIDs within a 1-second window, a beacon flood is detected. This pattern is characteristic of management-frame flood tools and certain Wi-Fi scanner exploits.\n\n---\n\n## Hardware\n\n### Bill of Materials\n\n| Component | Specification | Approx. Cost |\n|-----------|--------------|-------------|\n| MCU | ESP32 DevKit V1, 30-pin, ESP32-WROOM-32 | ~5 EUR |\n| Display | 0.96\" SSD1306 OLED, 128×64, I2C (4-pin) | ~3 EUR |\n| Storage | MicroSD SPI module, 3.3V compatible | ~1 EUR |\n| Button | Tactile push button, through-hole | ~0.10 EUR |\n| LED | 3mm or 5mm, any colour + 220 Ω resistor | ~0.15 EUR |\n| MicroSD card | FAT32 formatted, 2 GB minimum | ~2 EUR |\n\n**Total: ~11 EUR**\n\nSee [hardware/BOM.md](hardware/BOM.md) for full component details and sourcing notes.\n\n### Wiring\n\n**OLED — I2C**\n```\nESP32 GPIO21  ->  SDA\nESP32 GPIO22  ->  SCL\nESP32 3.3V    ->  VCC\nESP32 GND     ->  GND\n```\n\n**MicroSD — SPI**\n```\nESP32 GPIO18  ->  SCK\nESP32 GPIO23  ->  MOSI\nESP32 GPIO19  ->  MISO\nESP32 GPIO5   ->  CS\nESP32 3.3V    ->  VCC\nESP32 GND     ->  GND\n```\n\n> **GPIO5 note:** GPIO5 is the SDIO-slave timing strapping pin, but this has no effect in SPI mode. Safe to use on DevKit V1.\n\n**Button — active-low on GPIO4**\n```\nESP32 GPIO4   ->  Button  ->  GND\n(internal pull-up enabled in firmware)\n```\n\n> **GPIO4 not GPIO0:** GPIO0 is the ESP32 boot-mode strapping pin. A button on GPIO0 that is held during reset sends the device into Download Mode — black screen, looks like a brick. GPIO4 has no strapping function.\n\n**LED (optional)**\n```\nESP32 GPIO2   ->  220 Ω resistor  ->  LED anode\nLED cathode   ->  GND\n```\n\n### Block Diagram\n\n```\nESP32-WROOM-32\n |-- OLED SSD1306      (I2C: GPIO21/22)\n |-- MicroSD module    (SPI: GPIO18/19/23/5)\n |-- Tactile button    (GPIO4, active-low)\n |-- Status LED        (GPIO2, optional)\n └-- LiPo + TP4056     (optional, portable)\n```\n\n---\n\n## Firmware\n\n### Architecture\n\nThree FreeRTOS tasks with explicit core pinning:\n\n| Task | Core | Priority | Stack | Function |\n|------|------|----------|-------|----------|\n| `task_scan` | 0 | 5 | 6 KB | Promiscuous packet intake, 802.11 parsing, detection logic, channel hopping |\n| `task_write` | 0 | 4 | 6 KB | Reads alert indices from queue, writes CSV rows to SD |\n| `task_ui` | **1** | 1 | 4 KB | OLED draw (200 ms), LED patterns, button debounce (10 ms poll) |\n\n`task_ui` is pinned to Core 1. The U8g2 I2C bus hold (~2 ms per frame) conflicts with the promiscuous ISR on Core 0 and causes a LoadProhibited cache-miss panic if they share a core. A `configASSERT(xPortGetCoreID() == 1)` at task entry catches any future accidental migration.\n\nChannel hopping is integrated into `task_scan` — after each packet batch, the scan task advances to the next channel (1–13, 200 ms dwell). No separate hop task is needed.\n\n### Memory Layout\n\nAll packet storage is statically allocated at boot. No `malloc()` or `free()` at runtime.\n\n| Region | Size | Purpose |\n|--------|------|---------|\n| `pkt_pool_mem[32][1600]` | 51 200 B | In-flight packet pool, claimed by `promisc_cb`, released by `task_scan` |\n| `g_ap_table[64]` | ~3 KB | AP/SSID table for evil twin and flood detection |\n| `g_deauth_track[8]` | ~400 B | Per-source deauth sliding-window counters |\n| Alert structs (×3) | ~200 B | Deauth / twin / flood payloads, protected by `g_alert_mutex` |\n| **Total user static** | **~55 KB** | Well within the ~200 KB available after the Wi-Fi stack |\n\n### Synchronisation\n\n| Object | Type | Protects |\n|--------|------|----------|\n| `g_ap_mutex` | `portMUX_TYPE` spinlock | `g_ap_table`, `g_deauth_track`, `g_flood_set` — ISR-safe |\n| `g_alert_mutex` | Standard mutex | Alert payload structs |\n| `g_sd_mutex` | Standard mutex | SD file access |\n| `g_mode`, `g_channel`, `g_led`, `g_face`, counters | `std::atomic<T>` | All cross-core shared scalars |\n\n### RSSI Pre-filter\n\n`promisc_cb` drops packets weaker than -90 dBm before claiming a pool block. This is the first gate — no memcpy, no queue touch, zero pool cost for noise-floor packets. Threshold is configurable via `RSSI_THRESHOLD`.\n\n### Detection Logic\n\n**DEAUTH:** Maintains a per-source sliding window. On each deauth/disassoc frame (subtypes 12 and 10), the source MAC is looked up in `g_deauth_track[8]`. If the count reaches `DEAUTH_THRESHOLD` (10) within `DEAUTH_WINDOW_MS` (1000 ms), an alert fires and the window resets. The table covers the 8 most recently active sources — real floods have one dominant attacker.\n\n**TWIN:** On each beacon or probe-response, the SSID is extracted from tagged parameters and looked up in `g_ap_table`. If the SSID is found with a different BSSID, an evil twin alert fires immediately. Both BSSIDs and their RSSI values are included in the alert.\n\n**FLOOD:** Counts unique SSIDs per window using a 64-entry presence table. When the unique count exceeds `FLOOD_THRESHOLD` (20) within `FLOOD_WINDOW_MS` (1000 ms), an alert fires. The table resets and the window restarts. Three sample SSIDs are captured for logging.\n\n### OLED Display\n\n**Idle screen (no alert):**\n```\n(o_o)\nMODE: DEAUTH\nAL:  0\nPKT: 128\nCH:  6\nSD:  OK\n```\n\n**Deauth alert:**\n```\n(X_X)\nDEAUTH DETECT\nAT: aa:bb:cc\nTG: dd:ee:ff\nCNT: 42  CH: 6\n```\n\n**Evil twin alert:**\n```\n(>_<)\nEVIL TWIN\nTargetNetwork\nL:aa:bb:cc -45\nR:dd:ee:ff -62\n```\n\n**Beacon flood alert:**\n```\n(o_o)\nBEACON FLOOD\nSSID/s: 47\nCH: 1  PKT: 312\nFreeWifi\n```\n\n### LED Patterns\n\n| Pattern | Meaning |\n|---------|---------|\n| Slow blink (1 Hz) | Scanning, no alert |\n| Fast blink (5 Hz) | Alert active |\n| Single 120 ms flash | Alert saved to SD |\n| 3 × long flash, repeat | SD error |\n\n### Button Behaviour\n\n| Press duration | Action |\n|---------------|--------|\n| Short (50 ms – 3 s) | Cycle mode: DEAUTH → TWIN → FLOOD → DEAUTH. Resets face and LED to idle. |\n| Long (> 3 s) | `ESP.restart()` |\n\n---\n\n## SD Card and Logs\n\nFormat: FAT32. Minimum recommended size: 2 GB.\n\nThe firmware creates `/watchdog/` on first boot and writes CSV headers if the files do not exist. Three log files accumulate across sessions:\n\n**`/watchdog/deauth.csv`**\n```\ntimestamp_ms,attacker_mac,target_mac,channel,frame_count,reason_code\n1712345678,aa:bb:cc:dd:ee:ff,ff:ff:ff:ff:ff:ff,6,14,7\n```\n\n**`/watchdog/twins.csv`**\n```\ntimestamp_ms,ssid,legit_bssid,legit_rssi,rogue_bssid,rogue_rssi,channel\n1712345901,HomeNetwork,aa:bb:cc:dd:ee:ff,-45,11:22:33:44:55:66,-62,11\n```\n\n**`/watchdog/floods.csv`**\n```\ntimestamp_ms,unique_ssids_per_sec,channel,sample1,sample2,sample3\n1712346100,34,1,FreeWifi,OpenNet,Guest\n```\n\nIf the SD card is absent or fails, the device retries initialisation every 10 seconds and displays `SD: ERR`. Detections continue in memory during the outage.\n\nA minimum free space check of 1 MB runs before each write. If space is below threshold, the row is skipped and a serial warning is printed.\n\n---\n\n## Build & Flash\n\n### Requirements\n\n- Arduino IDE 2.x or PlatformIO\n- ESP32 board package by Espressif, version 2.0.x or later\n- U8g2 library (install via Arduino Library Manager)\n- SD, SPI, WiFi, esp_wifi, FreeRTOS — all bundled with the ESP32 core\n\n### Arduino IDE\n\n1. Add board package URL: `File → Preferences → Additional Boards Manager URLs`  \n   `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`\n\n2. Install U8g2: `Tools → Manage Libraries → search \"U8g2\"`\n\n3. Board settings:\n   ```\n   Board            : ESP32 Dev Module\n   Partition scheme : Default 4MB with spiffs\n   CPU Frequency    : 240 MHz\n   Flash mode       : QIO\n   Upload speed     : 921600\n   ```\n\n4. Open `ESP32Watchdog.ino`, compile, and flash.\n\n### PlatformIO\n\n```ini\n[env:esp32dev]\nplatform  = espressif32\nboard     = esp32dev\nframework = arduino\nmonitor_speed = 115200\nlib_deps  = olikraus/U8g2\nboard_build.partitions = default.csv\n```\n\n---\n\n## Serial Debug Output\n\nConnect at 115200 baud. Example output:\n\n```\n[BOOT] ESP32Watchdog v1.0.0\n[SD] OK\n[WIFI] promiscuous active\n[BOOT] tasks started\n[MEM]  free heap: 148320 bytes\n[STAT] pkt/s=89  ch=6  mode=DEAUTH\n[DEAUTH] aa:bb:cc:dd:ee:ff -> ff:ff:ff:ff:ff:ff  cnt=14  reason=7\n[TWIN] SSID=HomeNetwork  legit=aa:bb:cc  rogue=11:22:33  rssi=-68\n[FLOOD] ssid/s=34  sample=FreeWifi,OpenNet,Guest\n[SD] wrote alert type=0  total=1\n```\n\n---\n\n## Technical Specifications\n\n| Parameter | Value |\n|-----------|-------|\n| MCU | Xtensa LX6 dual-core, 240 MHz |\n| RAM | 520 KB SRAM |\n| Wi-Fi | 802.11 b/g/n, 2.4 GHz, passive only |\n| Channels scanned | 1–13 |\n| Channel dwell time | 200 ms |\n| Packet queue depth | 32 items |\n| Packet pool | 32 × 1 600 B static |\n| RSSI drop threshold | -90 dBm |\n| Deauth alert threshold | 10 frames / 1 s |\n| Evil twin detection | Immediate (first conflicting beacon) |\n| Beacon flood threshold | 20 unique SSIDs / 1 s |\n| AP table capacity | 64 entries, 30 s expiry |\n| Deauth tracker slots | 8 source MACs |\n| Watchdog timeout | 30 s |\n| Min SD free space | 1 MB |\n| Runtime heap allocations | 0 (CSV row buffer is a static array) |\n\n---\n\n## Troubleshooting\n\n| Symptom | Likely cause | Fix |\n|---------|-------------|-----|\n| `SD: ERR` on boot | SD not inserted, wrong wiring, not FAT32 | Check SPI wiring; reformat card to FAT32 |\n| OLED blank | I2C address mismatch or wiring fault | Verify SDA=21 / SCL=22; scan with I2C scanner sketch to confirm 0x3C |\n| No alerts in any mode | RSSI threshold too strict, or no attacks nearby | Lower `RSSI_THRESHOLD` to -95; use a test tool in a controlled environment |\n| Device reboots repeatedly | Watchdog trigger — task stall | Check serial for last log line; likely SD write hang on a worn card |\n| CSV rows missing | SD low space or partial write | Check free space; replace card if worn |\n| Button puts device in Download Mode | Button wired to GPIO0 | Move button wire to GPIO4 |\n| Evil twin false positive | Two legitimate APs with same SSID (e.g. mesh network) | Expected — a mesh with identical SSIDs on different BSSIDs will trigger MODE_TWIN |\n\n---\n\n## Repository Structure\n\n```\nESP32Watchdog/\n |-- ESP32Watchdog.ino       # Full firmware — single file\n |-- README.md\n |-- LICENSE\n |-- hardware/\n |    └── BOM.md             # Full bill of materials with sourcing notes\n └── docs/\n      └── csv_analysis.md    # Guide to reading and analysing log files\n```\n\n---\n\n## Relationship to ESP32Gotchi\n\nESP32Watchdog is a sibling project to ESP32Gotchi (WPA/WPA2 handshake sniffer). They share the same hardware platform, wiring, FreeRTOS architecture, memory pool design, ISR safety model, and coding conventions. The firmware fix annotations (`W1`–`W-W2`) follow the same scheme as the Gotchi fixes (`F1`–`F13`). Either firmware can be flashed to the same physical device with no hardware changes.\n\n---\n\n## Legal Notice\n\nThis tool is intended for **authorised security research and educational use only.**  \nMonitoring Wi-Fi traffic on networks you do not own or have explicit written permission to test is illegal in most jurisdictions.  \nThe author assumes no liability for misuse.\n\n---\n\n## License\n\nMIT — see [LICENSE](LICENSE).\n\n---\n\n## Contact\n\nAuthor: [@tworjaga](https://github.com/tworjaga)  \nTelegram: [@smtrcv](https://t.me/smtrcv)  \nIssues: [github.com/tworjaga/ESP32Watchdog/issues](https://github.com/tworjaga/ESP32Watchdog/issues)\n"};

function mdToHtml(md) {
  // whitelist a small set of safe raw-HTML tags commonly used in READMEs
  // (e.g. <div align="center"><img src="..."/></div>) so they render instead
  // of being escaped to literal text. Anything not matching stays escaped.
  const placeholders = [];
  const protectedMd = md.replace(/<\/?(div|img|br|p|a)(\s+[a-zA-Z-]+="[^"]*")*\s*\/?>/g, (tag) => {
    // strip event handlers / scripts / unknown attrs defensively
    if (/on\w+\s*=|javascript:/i.test(tag)) return tag; // will get escaped below, left as-is
    placeholders.push(tag);
    return `\u0000${placeholders.length - 1}\u0000`;
  });

  let html = protectedMd
    // escape HTML entities first
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    // fenced code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_,c) => `<pre class="readme-pre"><code>${c.trimEnd()}</code></pre>`)
    // inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // images (must run BEFORE the link rule, and handle badge chains like [![alt](img)](link))
    .replace(/\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g, '<a href="$3" target="_blank" rel="noopener"><img class="readme-badge" src="$2" alt="$1" loading="lazy"></a>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img class="readme-badge" src="$2" alt="$1" loading="lazy">')
    // horizontal rules
    .replace(/^---+$/gm, '<hr class="readme-hr">')
    // headings
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // blockquotes
    .replace(/^&gt; (.+)$/gm, '<blockquote class="readme-bq">$1</blockquote>')
    // bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // tables: detect | row | row |
    .replace(/((?:^\|.+\|\s*\n)+)/gm, (table) => {
      const rows = table.trim().split('\n').filter(r => !/^\|[-| :]+\|/.test(r));
      const toRow = (r, tag) => '<tr>' + r.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => `<${tag} class="readme-td">${c.trim()}</${tag}>`).join('') + '</tr>';
      return '<div class="readme-table-wrap"><table class="readme-table">' + rows.map((r,i) => toRow(r, i===0?'th':'td')).join('') + '</table></div>';
    })
    // unordered lists — collect consecutive lines
    .replace(/((?:^[\-\*] .+\n?)+)/gm, (block) => {
      const items = block.trim().split('\n').map(l => `<li>${l.replace(/^[\-\*] /,'').trim()}</li>`).join('');
      return `<ul class="readme-ul">${items}</ul>`;
    })
    // ordered lists
    .replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
      const items = block.trim().split('\n').map(l => `<li>${l.replace(/^\d+\. /,'').trim()}</li>`).join('');
      return `<ol class="readme-ol">${items}</ol>`;
    })
    // links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // paragraphs: wrap remaining lines
    .split('\n\n').map(block => {
      block = block.trim();
      if (!block) return '';
      if (/^<(h[1-6]|ul|ol|pre|hr|blockquote|div|table)/.test(block)) return block;
      return `<p>${block.replace(/\n/g,' ')}</p>`;
    }).join('\n');
  // restore whitelisted raw HTML tags
  html = html.replace(/\u0000(\d+)\u0000/g, (_, i) => placeholders[Number(i)]);
  return html;
}

// Skills
const skillsData = [
  {key:'skill.python',level:95,color:'#c8f040'},
  {key:'skill.security',level:58,color:'#40f0a0'},
  {key:'skill.hardware',level:53,color:'#f0a040'},
  {key:'skill.sysdesign',level:57,color:'#c8f040'},
  {key:'skill.c',level:63,color:'#f04060'},
  {key:'skill.rust',level:84,color:'#40f0a0'},
];
 
function renderSkills() {
  const sc = document.getElementById('skills-container');
  sc.innerHTML = '';
  skillsData.forEach(s => {
    sc.innerHTML += `<div class="skill-item"><div class="skill-header"><span class="skill-name">${t(s.key)}</span><span class="skill-pct">${s.level}%</span></div><div class="skill-track"><div class="skill-fill" data-w="${s.level}" style="background:${s.color};width:0%"></div></div></div>`;
  });
  setTimeout(() => sc.querySelectorAll('.skill-fill[data-w]').forEach(b => b.style.width = b.dataset.w+'%'), 300);
}
 
// Stack
const stackData = [
  {name:'Python', icon:'<img src="https://skillicons.dev/icons?i=python&perline=9"/>', catKey:'stack.automation', level:95},
  {name:'Rust / Go', icon:'<img src="https://skillicons.dev/icons?i=rust,go&perline=9"/>', catKey:'stack.systems', level:84},
  {name:'C / C++ / Arduino / RaspberryPi', icon:'<img src="https://skillicons.dev/icons?i=c,cpp,arduino,raspberrypi&perline=9"/>', catKey:'stack.embedded', level:62},
  {name:'TS / JS / HTML', icon:'<img src="https://skillicons.dev/icons?i=ts,js,html&perline=9"/>', catKey:'stack.frontend', level:37},
  {name:'Linux', icon:'<img src="https://skillicons.dev/icons?i=linux,arch,kali"/>', catKey:'stack.os', level:90},
  {name:'Docker / Kubernetes / AWS / Jenkins / Azure', icon:'<img src="https://skillicons.dev/icons?i=docker,kubernetes,aws,jenkins,azure"/>', catKey:'stack.devops', level:68},
  {name:'PyQt6', icon:'<img src="https://skillicons.dev/icons?i=qt"/>', catKey:'stack.desktop', level:88},
  {name:'Git', icon:'<img src="https://skillicons.dev/icons?i=git"/>', catKey:'stack.vcs', level:92},
];
 
function renderStack() {
  const sg = document.getElementById('stack-grid');
  sg.innerHTML = '';
  stackData.forEach(tech => {
    const div = document.createElement('div');
    div.className = 'stack-item';
    div.innerHTML = `<div style="margin-bottom:8px;">${tech.icon}</div><div class="stack-name">${tech.name}</div><div class="stack-cat">${t(tech.catKey)}</div><div class="stack-bar"><div class="stack-bar-fill" data-w="${tech.level}"></div></div>`;
    sg.appendChild(div);
  });
  setTimeout(() => sg.querySelectorAll('.stack-bar-fill[data-w]').forEach(b => b.style.width = b.dataset.w+'%'), 300);
}
 
// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill[data-w],.stack-bar-fill[data-w]').forEach(b => setTimeout(() => b.style.width = b.dataset.w+'%', 200));
    }
  });
}, {threshold:0.2});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
 
// Theme toggle
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next === 'dark' ? '' : 'light');
  localStorage.setItem('portfolio-theme', next);
}
(function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

// Hamburger nav
function toggleDrawer() {
  const h = document.getElementById('hamburger');
  const d = document.getElementById('navDrawer');
  const open = h.classList.toggle('open');
  d.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeDrawer() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navDrawer').classList.remove('open');
  document.body.style.overflow = '';
}
// Close drawer on ESC
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDrawer(); });

// Tag filter
document.getElementById('tagFilter').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('#projectsGrid .project-card').forEach(card => {
    const tags = Array.from(card.querySelectorAll('.card-tag')).map(t => t.textContent.trim());
    card.classList.toggle('hidden', filter !== 'all' && !tags.includes(filter));
  });
});

// Modal
function openModal() { document.getElementById('modal').classList.add('open'); }
function closeModal(e) { if(e.target===document.getElementById('modal')) document.getElementById('modal').classList.remove('open'); }
document.addEventListener('keydown', e => { if(e.key==='Escape') document.getElementById('modal').classList.remove('open'); });
 
// Email copy
function copyEmail() {
  const email = 'tworjaga@outlook.com';
  function confirm() {
    const l=document.getElementById('email-label'), a=document.getElementById('email-arrow');
    l.textContent='✓ Copied!'; l.style.color='var(--accent)';
    a.textContent='✓'; a.style.color='var(--accent)';
    setTimeout(()=>{ l.textContent=email; l.style.color=''; a.textContent='↗'; a.style.color=''; }, 2000);
  }
  function fallback() {
    const ta = document.createElement('textarea');
    ta.value = email;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    try { document.execCommand('copy'); confirm(); } catch(e) { alert('Email: ' + email); }
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(confirm).catch(fallback);
  } else {
    fallback();
  }
}
 
// Nav active
window.addEventListener('scroll', () => {
  let current = '';
  ['about','systems','stack','contact'].forEach(id => { const el=document.getElementById(id); if(el && el.getBoundingClientRect().top<120) current=id; });
  document.querySelectorAll('.nav-links a').forEach(l => { l.style.color = l.getAttribute('href')==='#'+current ? 'var(--accent)' : ''; });
});
 
// Init
document.addEventListener('scroll', () => {
  let current = '';
  ['about','systems','stack','contact'].forEach(id => { const el=document.getElementById(id); if(el && el.getBoundingClientRect().top<120) current=id; });
  document.querySelectorAll('.nav-links a').forEach(l => { l.style.color = l.getAttribute('href')==='#'+current ? 'var(--accent)' : ''; });
});
 
// Init
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === lang.toUpperCase()));
  applyI18n();
  renderSkills();
  renderStack();
});
