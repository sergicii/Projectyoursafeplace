/* ============================================================
   YOUR SAFE PLACE — Application Logic (Clinical System)
   Psic. Fátima Escudero · Lima, Perú
   ============================================================ */

// ============================================================
// 1. I18N SYSTEM (ES / EN)
// ============================================================
const I18N = {
  currentLang: 'es',
  strings: {
    es: {
      nav_about: 'Sobre Mí',
      nav_services: 'Servicios',
      nav_booking: 'Agendar Cita',
      hero_label: 'Psicóloga Clínica · Lima, Perú',
      hero_title: 'Tu espacio seguro para ',
      hero_highlight: 'sanar',
      hero_desc: 'Soy Fátima Escudero. Te acompaño en un proceso terapéutico basado en evidencia, con calidez humana y sin juicios. Presencial en Lima o virtual desde cualquier lugar.',
      hero_cta: 'Solicitar Cita',
      bio_label: 'Conóceme',
      bio_name: 'Psic. Fátima Escudero',
      bio_title: 'Psicóloga Clínica · Terapia Cognitivo-Conductual (TCC) · Terapia de Pareja y Familia',
      bio_desc: 'Con formación especializada en Psicología Clínica y Terapia Cognitivo-Conductual, me dedico a ofrecer un espacio terapéutico seguro y confidencial. Mi consulta se encuentra en el límite de San Isidro, San Borja y La Victoria, Lima. También atiendo de forma virtual a pacientes de cualquier parte del mundo.',
      bio_areas_title: 'Áreas de Atención',
      bio_areas: [
        'Trastorno Límite de la Personalidad (TLP)',
        'Ansiedad · Depresión · Bipolaridad',
        'Desregulación y dependencia emocional',
        'Trauma psicológico y estrés postraumático',
        'Secuelas de abuso psicológico y trauma relacional',
        'Dificultades de pareja y familiares',
        'Conductas adictivas y límites afectivos'
      ],
      srv_label: 'Servicios y Tarifas',
      srv_title: 'Elige el tipo de terapia',
      srv_desc: 'Todas las sesiones tienen una duración de 60 minutos. Puedes elegir la modalidad presencial o virtual.',
      bk_label: 'Agendar Cita',
      bk_title: 'Reserva tu sesión',
      wz_step1: 'Servicio',
      wz_step2: 'Fecha y Hora',
      wz_step3: 'Tus Datos',
      wz_step4: 'Confirmar',
      wz_prev: '← Anterior',
      wz_next: 'Siguiente →',
      wz_submit: 'Solicitar Cita & Enviar Comprobante',
      s1_title: 'Selecciona el servicio',
      s1_modality: 'Modalidad',
      s1_presencial: 'Presencial',
      s1_virtual: 'Virtual',
      s2_select_time: 'Selecciona un horario',
      s2_no_date: 'Selecciona una fecha en el calendario',
      s2_closed: 'Cerrado',
      s2_unavailable: '⏱️ Cerrado (No disponible)',
      s3_title: 'Ingresa tus datos',
      s3_name: 'Nombres y Apellidos',
      s3_dni: 'DNI / Documento',
      s3_whatsapp: 'WhatsApp',
      s3_email: 'Correo Electrónico',
      s3_reason: 'Motivo de consulta (confidencial)',
      s3_voucher: 'Comprobante de pago',
      s3_upload_text: 'Haz clic o arrastra tu comprobante aquí',
      err_name: 'Solo letras, tildes y espacios (mínimo 3 caracteres).',
      err_dni: 'Solo dígitos numéricos (8 a 10 dígitos).',
      err_whatsapp: 'Solo dígitos numéricos (9 a 12 dígitos).',
      err_email: 'Ingresa un correo electrónico válido.',
      s4_title: 'Resumen de tu solicitud',
      ft_desc: 'Consultorio psicológico de la Psic. Fátima Escudero. Atención clínica especializada en Lima, Perú.',
      ft_contact: 'Contacto',
      ft_location: 'Lima, Perú · San Isidro / San Borja',
      ft_hours: 'Horario de Atención',
      ft_schedule: 'Lunes a Viernes: 10:00 AM – 8:00 PM',
      ft_weekend: 'Sábados y Domingos: Cerrado',
      ft_rights: 'Todos los derechos reservados',
      modal_title: '🌿 ¡Solicitud Generada!',
      modal_desc: 'Tu código de solicitud es:',
      modal_inst: 'Al hacer clic se abrirá WhatsApp con tu solicitud pre-llenada. Adjunta la captura de tu comprobante en el chat.',
      modal_wa_btn: 'Abrir WhatsApp y Enviar',
      modal_close: 'Cerrar',
      services: [
        { id: 'individual', icon: '🧠', name: 'Terapia Individual', price: 150.00, currency: 'S/.', period: 'Sesión de 60 minutos · Presencial o Virtual', desc: 'Espacio clínico personalizado enfocado en tu bienestar integral y salud mental.' },
        { id: 'pareja', icon: '💑', name: 'Terapia de Pareja', price: 180.00, currency: 'S/.', period: 'Sesión de 60 minutos · Presencial o Virtual', desc: 'Orientación relacional para fortalecer la comunicación y resolver conflictos afectivos.' },
        { id: 'pack4', icon: '📦', name: 'Pack 4 Sesiones Individuales', price: 500.00, currency: 'S/.', period: '4 sesiones de 60 min · Presencial o Virtual', desc: 'Programa intensivo de 4 sesiones terapéuticas con seguimiento estructurado.', save: 'Ahorras S/. 100.00' }
      ],
      payment_title: '💳 Cuentas Bancarias Autorizadas',
      payment_methods: [
        { name: 'Yape / Plin', detail: '+51 924 368 333' },
        { name: 'BCP Soles', detail: 'Cuenta: 19473121367065 | CCI: 00219417312136706595' },
        { name: 'BBVA Soles', detail: 'Cuenta: 0011-0814-0237429708 | CCI: 01181400023742970819' }
      ],
      days_short: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      days_full: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      summary_patient: 'Paciente',
      summary_dni: 'DNI / Documento',
      summary_wa: 'WhatsApp',
      summary_email: 'Correo',
      summary_service: 'Servicio',
      summary_modality: 'Modalidad',
      summary_date: 'Fecha y Hora',
      summary_reason: 'Motivo',
      summary_total: 'INVERSIÓN TOTAL',
      summary_payment: 'Cuenta autorizada',
      summary_voucher: 'Comprobante',
      pack_session: 'Sesión',
      pack_ready: '✓ Lista',
      pack_pending: 'Pendiente'
    },
    en: {
      nav_about: 'About Me',
      nav_services: 'Services',
      nav_booking: 'Book Session',
      hero_label: 'Clinical Psychologist · Lima, Peru',
      hero_title: 'Your safe place to ',
      hero_highlight: 'heal',
      hero_desc: "I'm Fátima Escudero. I accompany you in an evidence-based therapeutic journey, with human warmth and zero judgment. In-person in Lima or online worldwide.",
      hero_cta: 'Book a Session',
      bio_label: 'About Me',
      bio_name: 'Psic. Fátima Escudero',
      bio_title: 'Clinical Psychologist · Cognitive Behavioral Therapy (CBT) · Couples & Family Therapy',
      bio_desc: 'With specialized training in Clinical Psychology and CBT, I provide a confidential, safe therapeutic environment. My clinic is located at the border of San Isidro, San Borja, and La Victoria, Lima. Online sessions are also available worldwide.',
      bio_areas_title: 'Clinical Focus Areas',
      bio_areas: [
        'Borderline Personality Disorder (BPD)',
        'Anxiety · Depression · Bipolarity',
        'Emotional dysregulation & dependency',
        'Psychological trauma & PTSD',
        'Aftermath of psychological abuse & relational trauma',
        'Couples & family relationship difficulties',
        'Addictive behaviors & affective boundaries'
      ],
      srv_label: 'Services & Rates',
      srv_title: 'Select your therapy',
      srv_desc: 'All sessions last 60 minutes. Choose between online or in-person mode.',
      bk_label: 'Schedule Appointment',
      bk_title: 'Book your session',
      wz_step1: 'Service',
      wz_step2: 'Date & Time',
      wz_step3: 'Your Info',
      wz_step4: 'Confirm',
      wz_prev: '← Previous',
      wz_next: 'Next →',
      wz_submit: 'Request Appointment & Send Receipt',
      s1_title: 'Choose therapy type',
      s1_modality: 'Session Mode',
      s1_presencial: 'In-person',
      s1_virtual: 'Online',
      s2_select_time: 'Select a time slot',
      s2_no_date: 'Select a date on the calendar',
      s2_closed: 'Closed',
      s2_unavailable: '⏱️ Closed (Unavailable)',
      s3_title: 'Personal information',
      s3_name: 'Full Name',
      s3_dni: 'ID / Passport',
      s3_whatsapp: 'WhatsApp',
      s3_email: 'Email Address',
      s3_reason: 'Reason for consultation (confidential)',
      s3_voucher: 'Payment Receipt',
      s3_upload_text: 'Click or drag your payment receipt here',
      err_name: 'Letters and spaces only (minimum 3 characters).',
      err_dni: 'Digits only (8 to 10 digits).',
      err_whatsapp: 'Digits only (9 to 12 digits).',
      err_email: 'Enter a valid email address.',
      s4_title: 'Request summary',
      ft_desc: 'Private clinical practice of Psic. Fátima Escudero. Specialized mental healthcare in Lima, Peru.',
      ft_contact: 'Contact',
      ft_location: 'Lima, Peru · San Isidro / San Borja',
      ft_hours: 'Office Hours',
      ft_schedule: 'Monday to Friday: 10:00 AM – 8:00 PM',
      ft_weekend: 'Saturday & Sunday: Closed',
      ft_rights: 'All rights reserved',
      modal_title: '🌿 Request Generated!',
      modal_desc: 'Your request code is:',
      modal_inst: 'Click below to open WhatsApp with your pre-filled booking. Please attach your payment receipt screenshot in the chat.',
      modal_wa_btn: 'Open WhatsApp & Send',
      modal_close: 'Close',
      services: [
        { id: 'individual', icon: '🧠', name: 'Individual Therapy', price: 60.00, currency: '$', period: '60-minute session · Online or In-person', desc: 'Customized clinical psychotherapy focused on emotional regulation and mental well-being.' },
        { id: 'pareja', icon: '💑', name: 'Couples Therapy', price: 80.00, currency: '$', period: '60-minute session · Online or In-person', desc: 'Relational guidance to foster constructive communication and resolve emotional conflicts.' }
      ],
      payment_title: '💳 Authorized International Payment Method',
      payment_methods: [
        { name: 'PayPal', detail: '@fatimaescudero (paypal.me/fatimaescudero)' }
      ],
      days_short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days_full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      summary_patient: 'Patient',
      summary_dni: 'ID / Passport',
      summary_wa: 'WhatsApp',
      summary_email: 'Email',
      summary_service: 'Service',
      summary_modality: 'Mode',
      summary_date: 'Date & Time',
      summary_reason: 'Reason',
      summary_total: 'TOTAL INVESTMENT',
      summary_payment: 'Payment Account',
      summary_voucher: 'Receipt Attached',
      pack_session: 'Session',
      pack_ready: '✓ Ready',
      pack_pending: 'Pending'
    }
  },

  t(key) {
    return this.strings[this.currentLang]?.[key] ?? this.strings.es[key] ?? key;
  },

  setLang(lang) {
    this.currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (typeof val === 'string') {
        if (key === 'hero_title') {
          el.textContent = val;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // If Pack4 was selected in ES and user switched to EN, switch to individual
    if (lang === 'en' && wizardState.service === 'pack4') {
      wizardState.service = 'individual';
      wizardState.packSessions = [null, null, null, null];
      wizardState.currentPackTab = 0;
      wizardState.selectedDate = null;
      wizardState.selectedTime = null;
    }

    if (typeof renderBioAreas === 'function') renderBioAreas();
    if (typeof renderServicesGrid === 'function') renderServicesGrid();
    if (typeof renderServiceSelector === 'function') renderServiceSelector();
    if (typeof renderCalendar === 'function') renderCalendar();
    if (typeof renderTimeslots === 'function') renderTimeslots();
    if (typeof renderPackTabs === 'function') renderPackTabs();
  }
};

// ============================================================
// 2. AUTHENTICATION & SECURITY MODULE
// ============================================================
const AppAuth = {
  _sessionKey: 'ysp_admin_auth_session',
  _timeoutMs: 30 * 60 * 1000, // 30 min session timeout

  login(user, pass) {
    // Verified clinical credentials for Psic. Fatima Escudero
    if (user === 'fatima.escudero' && pass === 'YSP2026Fatima!') {
      const token = 'ysp_jwt_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
      const session = { token, user, ts: Date.now() };
      sessionStorage.setItem(this._sessionKey, JSON.stringify(session));
      localStorage.setItem('ysp_admin_active_tab', '1');
      return true;
    }
    return false;
  },

  isAuthenticated() {
    try {
      const raw = sessionStorage.getItem(this._sessionKey);
      if (!raw) return false;
      const s = JSON.parse(raw);
      if (!s || !s.token) return false;
      if (Date.now() - s.ts > this._timeoutMs) {
        this.logout();
        return false;
      }
      // Refresh active session timestamp
      s.ts = Date.now();
      sessionStorage.setItem(this._sessionKey, JSON.stringify(s));
      return true;
    } catch {
      return false;
    }
  },

  logout() {
    sessionStorage.removeItem(this._sessionKey);
    localStorage.removeItem('ysp_admin_active_tab');
    window.location.href = 'login.html';
  }
};

// ============================================================
// 3. CLINICAL DATA STORE & PERSISTENCE
// ============================================================
const Store = {
  _key: 'ysp_clinical_appointments_v1',
  _blockedKey: 'ysp_blocked_holidays_v1',
  _rateLimitKey: 'ysp_rate_limit_submissions',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key)) || [];
    } catch {
      return [];
    }
  },

  save(list) {
    localStorage.setItem(this._key, JSON.stringify(list));
    window.dispatchEvent(new Event('ysp-data-change'));
  },

  add(appt) {
    const list = this.getAll();
    list.unshift(appt); // newest first
    this.save(list);
  },

  update(code, updates) {
    const list = this.getAll();
    const idx = list.findIndex(a => a.code === code);
    if (idx >= 0) {
      Object.assign(list[idx], updates);
      this.save(list);
    }
  },

  getBlockedDays() {
    try {
      return JSON.parse(localStorage.getItem(this._blockedKey)) || [];
    } catch {
      return [];
    }
  },

  blockDay(dateStr) {
    const days = this.getBlockedDays();
    if (!days.includes(dateStr)) {
      days.push(dateStr);
      localStorage.setItem(this._blockedKey, JSON.stringify(days));
      window.dispatchEvent(new Event('ysp-data-change'));
    }
  },

  unblockDay(dateStr) {
    let days = this.getBlockedDays();
    days = days.filter(d => d !== dateStr);
    localStorage.setItem(this._blockedKey, JSON.stringify(days));
    window.dispatchEvent(new Event('ysp-data-change'));
  },

  // Returns all slots currently confirmed (locked)
  getConfirmedSlots() {
    const list = this.getAll().filter(a => a.status === 'confirmed');
    const slots = [];
    list.forEach(a => {
      if (a.sessions && Array.isArray(a.sessions)) {
        a.sessions.forEach(s => {
          if (s.dateKey && s.time) slots.push(s.dateKey + '_' + s.time);
        });
      } else if (a.dateKey && a.time) {
        slots.push(a.dateKey + '_' + a.time);
      }
    });
    return slots;
  },

  // Rate Limiter: Prevent flooding (max 4 per 5 minutes)
  checkRateLimit() {
    try {
      let attempts = JSON.parse(localStorage.getItem(this._rateLimitKey)) || [];
      const now = Date.now();
      attempts = attempts.filter(t => now - t < 300000);
      if (attempts.length >= 4) return false;
      attempts.push(now);
      localStorage.setItem(this._rateLimitKey, JSON.stringify(attempts));
      return true;
    } catch {
      return true;
    }
  }
};

// Real-time synchronization across browser tabs
window.addEventListener('storage', (e) => {
  if (e.key === Store._key || e.key === Store._blockedKey) {
    window.dispatchEvent(new Event('ysp-data-change'));
  }
});

// ============================================================
// 4. SANITIZATION & STRING HELPERS
// ============================================================
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function generateCode() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return 'YSP-' + num;
}

function dateKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function formatDateLong(dateStr, lang) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T12:00:00');
  const targetLang = lang || I18N.currentLang;
  const days = I18N.strings[targetLang].days_full;
  const months = I18N.strings[targetLang].months;
  const dayName = days[d.getDay()];
  const dayNum = String(d.getDate()).padStart(2, '0');
  const monthName = months[d.getMonth()];
  return targetLang === 'es' ? `${dayName} ${dayNum} de ${monthName}` : `${dayName}, ${monthName} ${dayNum}`;
}

// ============================================================
// 5. CALENDAR & TIME-SLOT CALCULATION ENGINE
// ============================================================
const CLINICAL_HOURS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM'
];

function slotToMinutes(slot) {
  const [time, ampm] = slot.split(' ');
  let [h, m] = time.split(':').map(Number);
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  return h * 60 + m;
}

function getAvailableSlots(selectedDateKey) {
  const now = new Date();
  const todayKey = dateKey(now);
  const confirmedSlots = Store.getConfirmedSlots();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return CLINICAL_HOURS.map(slot => {
    const slotKey = selectedDateKey + '_' + slot;
    if (confirmedSlots.includes(slotKey)) {
      return { time: slot, status: 'booked' };
    }

    if (selectedDateKey === todayKey) {
      const slotMinutes = slotToMinutes(slot);
      // STRICT 10-MINUTE RULE:
      // If the slot starts in less than 10 minutes from now, it is closed!
      if (slotMinutes - currentMinutes < 10) {
        return { time: slot, status: 'closed' };
      }
    } else if (selectedDateKey < todayKey) {
      return { time: slot, status: 'closed' };
    }

    return { time: slot, status: 'available' };
  });
}

// ============================================================
// 6. PATIENT-SIDE CONTROLLER & WIZARD
// ============================================================
const wizardState = {
  step: 1,
  service: 'individual',
  modality: 'presencial',
  selectedDate: null,
  selectedTime: null,
  packSessions: [null, null, null, null],
  currentPackTab: 0,
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  voucherFile: null,
  voucherBase64: null,
  activeApptCode: null
};

function isPatientPage() {
  return document.getElementById('wizardStep1') !== null;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isPatientPage()) return;

  // Language buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      I18N.setLang(btn.dataset.lang);
    });
  });

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger menu for mobile
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Hero entrance trigger
  setTimeout(() => {
    document.getElementById('heroText')?.classList.add('visible');
    document.getElementById('heroImg')?.classList.add('visible');
  }, 100);

  // Initialize UI components
  renderBioAreas();
  renderServicesGrid();
  renderServiceSelector();
  renderCalendar();
  initFormValidation();
  initVoucherUpload();
  initWizardNavigation();

  // 30-Second Real-Time Check for 10-minute rule & appointment blocks
  setInterval(() => {
    if (wizardState.step === 2 && (wizardState.selectedDate || wizardState.service === 'pack4')) {
      renderTimeslots();
    }
  }, 30000);

  // Cross-tab reactive updates
  window.addEventListener('ysp-data-change', () => {
    if (wizardState.step === 2) {
      renderCalendar();
      renderTimeslots();
    }
  });
});

// --- Bio Areas Stagger ---
function renderBioAreas() {
  const container = document.getElementById('bioAreas');
  if (!container) return;
  const areas = I18N.t('bio_areas');
  if (!Array.isArray(areas)) return;

  container.innerHTML = areas.map((a, i) => `
    <span class="badge" style="transition-delay:${i * 45}ms">${escapeHTML(a)}</span>
  `).join('');

  // Reveal badges with stagger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.querySelectorAll('.badge').forEach(b => b.classList.add('visible'));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
  observer.observe(container);

  // Fallback check in case container is already in viewport
  setTimeout(() => {
    const rect = container.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      container.querySelectorAll('.badge').forEach(b => b.classList.add('visible'));
    }
  }, 250);
}

// --- Services Grid ---
function renderServicesGrid() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const services = I18N.t('services');
  const isEN = I18N.currentLang === 'en';

  grid.className = 'services-grid' + (isEN ? ' cols-2' : '');
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${escapeHTML(s.name)}</h3>
      <div class="price">
        <span class="price-currency">${s.currency}</span> ${s.price.toFixed(2)}
      </div>
      <p class="price-period">${escapeHTML(s.period)}</p>
      <p style="margin-top:8px">${escapeHTML(s.desc)}</p>
      ${s.save ? `<div class="save-badge">${escapeHTML(s.save)}</div>` : ''}
    </div>
  `).join('');
}

// --- Service Selector in Wizard ---
function renderServiceSelector() {
  const container = document.getElementById('serviceSelector');
  if (!container) return;
  const services = I18N.t('services');

  container.innerHTML = services.map(s => `
    <div class="service-option ${wizardState.service === s.id ? 'selected' : ''}" data-service="${s.id}">
      <div class="opt-icon">${s.icon}</div>
      <h4>${escapeHTML(s.name)}</h4>
      <div class="opt-price">${s.currency} ${s.price.toFixed(2)}</div>
    </div>
  `).join('');

  container.querySelectorAll('.service-option').forEach(opt => {
    opt.addEventListener('click', () => {
      container.querySelectorAll('.service-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const prev = wizardState.service;
      wizardState.service = opt.dataset.service;
      if (prev !== wizardState.service) {
        wizardState.selectedDate = null;
        wizardState.selectedTime = null;
        wizardState.packSessions = [null, null, null, null];
        wizardState.currentPackTab = 0;
      }
    });
  });

  // Modality options
  document.querySelectorAll('.modality-option').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.modality === wizardState.modality);
    opt.onclick = () => {
      document.querySelectorAll('.modality-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      wizardState.modality = opt.dataset.modality;
    };
  });
}

// --- Calendar ---
function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const label = document.getElementById('calMonthYear');
  if (!grid || !label) return;

  const year = wizardState.calYear;
  const month = wizardState.calMonth;
  const months = I18N.t('months');
  const daysShort = I18N.t('days_short');
  const today = new Date();
  const todayStr = dateKey(today);
  const blockedDays = Store.getBlockedDays();

  label.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  let html = daysShort.map(d => `<div class="day-label">${d}</div>`).join('');

  for (let i = 0; i < firstDay; i++) {
    html += '<div class="day-cell empty"></div>';
  }

  for (let d = 1; d <= totalDays; d++) {
    const dt = new Date(year, month, d);
    const dk = dateKey(dt);
    const dow = dt.getDay();
    const isWeekend = dow === 0 || dow === 6; // Sunday or Saturday
    const isPast = dk < todayStr;
    const isBlocked = blockedDays.includes(dk);
    const isDisabled = isWeekend || isPast || isBlocked;
    const isToday = dk === todayStr;

    let isSelected = false;
    let packBadges = '';

    if (wizardState.service === 'pack4') {
      const activeTabDate = wizardState.packSessions[wizardState.currentPackTab]?.dateKey;
      isSelected = activeTabDate === dk;
      wizardState.packSessions.forEach((s, idx) => {
        if (s && s.dateKey === dk) {
          packBadges += `<span class="pack-badge">S${idx + 1}</span>`;
        }
      });
    } else {
      isSelected = wizardState.selectedDate === dk;
    }

    const classes = [
      'day-cell',
      isDisabled ? 'disabled' : '',
      isToday ? 'today' : '',
      isSelected ? 'selected' : ''
    ].filter(Boolean).join(' ');

    html += `
      <div class="${classes}" data-date="${dk}">
        ${d}
        ${packBadges}
      </div>
    `;
  }

  grid.innerHTML = html;

  // Day selection click
  grid.querySelectorAll('.day-cell:not(.disabled):not(.empty)').forEach(cell => {
    cell.addEventListener('click', () => {
      const dk = cell.dataset.date;
      if (wizardState.service === 'pack4') {
        const tab = wizardState.currentPackTab;
        if (!wizardState.packSessions[tab]) wizardState.packSessions[tab] = {};
        wizardState.packSessions[tab].dateKey = dk;
        wizardState.packSessions[tab].time = null; // reset time on date change
      } else {
        wizardState.selectedDate = dk;
        wizardState.selectedTime = null;
      }
      renderCalendar();
      renderTimeslots();
      renderPackTabs();
    });
  });

  // Calendar month navigation
  const prevBtn = document.getElementById('calPrev');
  const nextBtn = document.getElementById('calNext');
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      wizardState.calMonth--;
      if (wizardState.calMonth < 0) {
        wizardState.calMonth = 11;
        wizardState.calYear--;
      }
      renderCalendar();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      wizardState.calMonth++;
      if (wizardState.calMonth > 11) {
        wizardState.calMonth = 0;
        wizardState.calYear++;
      }
      renderCalendar();
    };
  }
}

// --- Time Slots ---
function renderTimeslots() {
  const container = document.getElementById('timeslotsContent');
  if (!container) return;

  let activeDate = null;
  if (wizardState.service === 'pack4') {
    activeDate = wizardState.packSessions[wizardState.currentPackTab]?.dateKey;
  } else {
    activeDate = wizardState.selectedDate;
  }

  if (!activeDate) {
    container.innerHTML = `<div class="no-date-selected">${escapeHTML(I18N.t('s2_no_date'))}</div>`;
    return;
  }

  const slots = getAvailableSlots(activeDate);

  // Check collision for Pack 4 sessions (cannot pick same date & time in different sessions)
  const internalCollisions = [];
  if (wizardState.service === 'pack4') {
    wizardState.packSessions.forEach((s, idx) => {
      if (s && s.dateKey === activeDate && s.time && idx !== wizardState.currentPackTab) {
        internalCollisions.push(s.time);
      }
    });
  }

  let selectedTime = null;
  if (wizardState.service === 'pack4') {
    selectedTime = wizardState.packSessions[wizardState.currentPackTab]?.time;
  } else {
    selectedTime = wizardState.selectedTime;
  }

  container.innerHTML = `
    <div class="timeslots-grid">
      ${slots.map(slot => {
        const isCollision = internalCollisions.includes(slot.time);
        const isBooked = slot.status === 'booked';
        const isClosed = slot.status === 'closed' || isBooked || isCollision;
        const isSelected = selectedTime === slot.time;

        let displayLabel = slot.time;
        if (isBooked) displayLabel += ' (Ocupado)';
        else if (isCollision) displayLabel += ' (En paquete)';
        else if (slot.status === 'closed') displayLabel = I18N.t('s2_unavailable');

        return `
          <div class="time-slot ${isClosed ? 'disabled' : ''} ${isSelected ? 'selected' : ''}" data-time="${slot.time}">
            ${displayLabel}
          </div>
        `;
      }).join('')}
    </div>
  `;

  container.querySelectorAll('.time-slot:not(.disabled)').forEach(slotEl => {
    slotEl.addEventListener('click', () => {
      const time = slotEl.dataset.time;
      if (wizardState.service === 'pack4') {
        const tab = wizardState.currentPackTab;
        if (!wizardState.packSessions[tab]) wizardState.packSessions[tab] = {};
        wizardState.packSessions[tab].time = time;

        renderPackTabs();

        // Auto-advance to next session tab if available
        if (tab < 3) {
          wizardState.currentPackTab = tab + 1;
          renderPackTabs();
          renderCalendar();
          renderTimeslots();
        } else {
          renderTimeslots();
        }
      } else {
        wizardState.selectedTime = time;
        renderTimeslots();
      }
    });
  });
}

// --- Pack Tabs ---
function renderPackTabs() {
  const container = document.getElementById('packTabsContainer');
  const tabsList = document.getElementById('packTabs');
  if (!container || !tabsList) return;

  if (wizardState.service !== 'pack4') {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');

  tabsList.innerHTML = wizardState.packSessions.map((s, idx) => {
    const isDone = s && s.dateKey && s.time;
    const isActive = idx === wizardState.currentPackTab;
    return `
      <div class="pack-tab ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" data-tab="${idx}">
        ${I18N.t('pack_session')} ${idx + 1}
        <span class="tab-status">${isDone ? I18N.t('pack_ready') : I18N.t('pack_pending')}</span>
      </div>
    `;
  }).join('');

  tabsList.querySelectorAll('.pack-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      wizardState.currentPackTab = parseInt(tab.dataset.tab, 10);
      renderPackTabs();
      renderCalendar();
      renderTimeslots();
    });
  });
}

// --- Form Validation & Sanitization ---
function initFormValidation() {
  const nameEl = document.getElementById('pName');
  const dniEl = document.getElementById('pDNI');
  const waEl = document.getElementById('pWhatsApp');
  const emailEl = document.getElementById('pEmail');

  if (!nameEl) return;

  // Name: Strictly Latin letters, accents, ñ, spaces
  nameEl.addEventListener('input', () => {
    nameEl.value = nameEl.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    checkField(nameEl, /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/);
  });

  // DNI: Strictly digits, 8 to 10
  dniEl.addEventListener('input', () => {
    dniEl.value = dniEl.value.replace(/[^0-9]/g, '');
    checkField(dniEl, /^[0-9]{8,10}$/);
  });

  // WhatsApp: Strictly digits, 9 to 12
  waEl.addEventListener('input', () => {
    waEl.value = waEl.value.replace(/[^0-9]/g, '');
    checkField(waEl, /^[0-9]{9,12}$/);
  });

  // Email: Standard alphanumeric email regex
  emailEl.addEventListener('input', () => {
    checkField(emailEl, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  });
}

function checkField(input, regex) {
  if (!input.value.trim()) {
    input.classList.remove('invalid');
    return false;
  }
  const valid = regex.test(input.value.trim());
  input.classList.toggle('invalid', !valid);
  return valid;
}

function validateAllPatientFields() {
  const nameEl = document.getElementById('pName');
  const dniEl = document.getElementById('pDNI');
  const waEl = document.getElementById('pWhatsApp');
  const emailEl = document.getElementById('pEmail');

  const vName = checkField(nameEl, /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/);
  const vDni = checkField(dniEl, /^[0-9]{8,10}$/);
  const vWa = checkField(waEl, /^[0-9]{9,12}$/);
  const vEmail = checkField(emailEl, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  const vVoucher = !!wizardState.voucherFile;

  return vName && vDni && vWa && vEmail && vVoucher;
}

// --- Voucher File Upload ---
function initVoucherUpload() {
  const zone = document.getElementById('uploadZone');
  const input = document.getElementById('pVoucher');
  const nameDisplay = document.getElementById('fileName');
  if (!zone || !input) return;

  zone.addEventListener('click', () => input.click());

  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.style.borderColor = 'var(--accent)';
  });

  zone.addEventListener('dragleave', () => {
    zone.style.borderColor = '';
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.style.borderColor = '';
    if (e.dataTransfer.files.length) handleVoucher(e.dataTransfer.files[0]);
  });

  input.addEventListener('change', () => {
    if (input.files.length) handleVoucher(input.files[0]);
  });

  function handleVoucher(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert(I18N.currentLang === 'es' ? 'Formato inválido. Por favor adjunta JPG, PNG o WebP.' : 'Invalid file format. Please attach JPG, PNG, or WebP.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert(I18N.currentLang === 'es' ? 'El comprobante excede el límite máximo de 5MB.' : 'File exceeds maximum 5MB size limit.');
      return;
    }

    wizardState.voucherFile = file;
    zone.classList.add('has-file');
    nameDisplay.textContent = '✅ ' + escapeHTML(file.name);
    nameDisplay.style.display = 'block';

    const reader = new FileReader();
    reader.onload = () => {
      wizardState.voucherBase64 = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

// --- Wizard Step Controller ---
function initWizardNavigation() {
  const prevBtn = document.getElementById('wizPrev');
  const nextBtn = document.getElementById('wizNext');
  const submitBtn = document.getElementById('wizSubmit');

  nextBtn?.addEventListener('click', () => {
    if (canAdvanceStep()) {
      wizardState.step++;
      updateWizardView();
    }
  });

  prevBtn?.addEventListener('click', () => {
    wizardState.step--;
    updateWizardView();
  });

  submitBtn?.addEventListener('click', () => {
    handleFormSubmission();
  });
}

function canAdvanceStep() {
  const isES = I18N.currentLang === 'es';
  if (wizardState.step === 1) {
    if (!wizardState.service) {
      alert(isES ? 'Por favor selecciona un tipo de terapia.' : 'Please select a therapy service.');
      return false;
    }
    if (!wizardState.modality) {
      alert(isES ? 'Por favor selecciona la modalidad (Presencial o Virtual).' : 'Please select a modality (In-person or Online).');
      return false;
    }
    return true;
  }

  if (wizardState.step === 2) {
    if (wizardState.service === 'pack4') {
      const allComplete = wizardState.packSessions.every(s => s && s.dateKey && s.time);
      if (!allComplete) {
        alert(isES ? 'Debes seleccionar fecha y hora para las 4 sesiones del paquete.' : 'Please select a date and time for all 4 sessions in the pack.');
        return false;
      }
    } else {
      if (!wizardState.selectedDate || !wizardState.selectedTime) {
        alert(isES ? 'Por favor elige una fecha y un horario disponible.' : 'Please choose a date and an available time slot.');
        return false;
      }
    }
    return true;
  }

  if (wizardState.step === 3) {
    if (!validateAllPatientFields()) {
      alert(isES ? 'Por favor completa todos los campos requeridos con datos válidos y adjunta tu comprobante de pago.' : 'Please complete all required fields with valid data and attach your payment receipt.');
      return false;
    }
    return true;
  }

  return true;
}

function updateWizardView() {
  const step = wizardState.step;

  // Toggle step panels
  document.querySelectorAll('.wizard-panel').forEach((p, idx) => {
    p.classList.toggle('active', idx === step - 1);
  });

  // Toggle step indicators
  document.querySelectorAll('.wizard-step-indicator').forEach(ind => {
    const s = parseInt(ind.dataset.step, 10);
    ind.classList.toggle('active', s === step);
    ind.classList.toggle('done', s < step);
  });

  // Buttons visibility
  const prevBtn = document.getElementById('wizPrev');
  const nextBtn = document.getElementById('wizNext');
  const submitBtn = document.getElementById('wizSubmit');

  if (prevBtn) prevBtn.style.display = step > 1 ? '' : 'none';
  if (nextBtn) nextBtn.classList.toggle('hidden', step === 4);
  if (submitBtn) submitBtn.classList.toggle('hidden', step !== 4);

  // Renders for current step
  if (step === 2) {
    renderPackTabs();
    renderCalendar();
    renderTimeslots();
  } else if (step === 4) {
    renderSummaryCard();
  }
}

// --- Step 4: Summary Card ---
function renderSummaryCard() {
  const card = document.getElementById('summaryCard');
  const payPanel = document.getElementById('paymentInfoPanel');
  if (!card) return;

  const name = escapeHTML(document.getElementById('pName').value.trim());
  const dni = escapeHTML(document.getElementById('pDNI').value.trim());
  const wa = escapeHTML(document.getElementById('pWhatsApp').value.trim());
  const email = escapeHTML(document.getElementById('pEmail').value.trim());
  const reason = escapeHTML(document.getElementById('pReason').value.trim() || '—');
  const services = I18N.t('services');
  const srv = services.find(s => s.id === wizardState.service);
  const modalityText = wizardState.modality === 'presencial' ? I18N.t('s1_presencial') : I18N.t('s1_virtual');

  let scheduleHTML = '';
  if (wizardState.service === 'pack4') {
    scheduleHTML = `
      <div class="summary-sessions">
        <h4>🗓️ Cronograma del Pack (4 Sesiones)</h4>
        ${wizardState.packSessions.map((s, i) => `
          <div class="session-item">
            <span class="num">${i + 1}️⃣</span>
            <span>Sesión ${i + 1}: <strong>${formatDateLong(s.dateKey)}</strong> · <strong>${s.time}</strong></span>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    scheduleHTML = `
      <div class="summary-row">
        <span class="label">${I18N.t('summary_date')}</span>
        <span class="value">${formatDateLong(wizardState.selectedDate)} · ${wizardState.selectedTime}</span>
      </div>
    `;
  }

  card.innerHTML = `
    <h3>🌿 ${I18N.t('s4_title')}</h3>
    <div class="summary-row"><span class="label">${I18N.t('summary_patient')}</span><span class="value">${name}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_dni')}</span><span class="value">${dni}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_wa')}</span><span class="value">${wa}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_email')}</span><span class="value">${email}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_service')}</span><span class="value">${srv?.name || ''}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_modality')}</span><span class="value">${modalityText}</span></div>
    ${scheduleHTML}
    <div class="summary-row"><span class="label">${I18N.t('summary_reason')}</span><span class="value">${reason}</span></div>
    <div class="summary-row"><span class="label">${I18N.t('summary_voucher')}</span><span class="value">📎 ${wizardState.voucherFile ? escapeHTML(wizardState.voucherFile.name) : '—'}</span></div>
    <div class="summary-total">
      <span>${I18N.t('summary_total')}</span>
      <span class="total-amount">${srv ? srv.currency + ' ' + srv.price.toFixed(2) : ''}</span>
    </div>
  `;

  // Payment information box
  const methods = I18N.t('payment_methods');
  if (payPanel) {
    payPanel.innerHTML = `
      <div class="payment-info">
        <h4>${I18N.t('payment_title')}</h4>
        ${methods.map(m => `
          <div class="payment-method">
            <span class="method-name">${escapeHTML(m.name)}</span><br>
            <span class="method-detail"><code>${escapeHTML(m.detail)}</code></span>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// --- Submit & WhatsApp Link Generation ---
function handleFormSubmission() {
  if (!Store.checkRateLimit()) {
    alert(I18N.currentLang === 'es' ? 'Has superado el límite de intentos. Por favor espera unos minutos.' : 'Rate limit exceeded. Please wait a few moments.');
    return;
  }

  const code = generateCode();
  const services = I18N.t('services');
  const srv = services.find(s => s.id === wizardState.service);
  const modalityLabel = wizardState.modality === 'presencial' ? I18N.t('s1_presencial') : I18N.t('s1_virtual');
  const name = document.getElementById('pName').value.trim();
  const dni = document.getElementById('pDNI').value.trim();
  const wa = document.getElementById('pWhatsApp').value.trim();
  const email = document.getElementById('pEmail').value.trim();
  const reason = document.getElementById('pReason').value.trim() || '—';

  const appointmentRecord = {
    code,
    name: escapeHTML(name),
    dni: escapeHTML(dni),
    whatsapp: escapeHTML(wa),
    email: escapeHTML(email),
    service: wizardState.service,
    serviceName: srv?.name || '',
    modality: wizardState.modality,
    modalityLabel,
    reason: escapeHTML(reason),
    amount: srv?.price || 0,
    currency: srv?.currency || 'S/.',
    lang: I18N.currentLang,
    status: 'pending',
    createdAt: new Date().toISOString(),
    voucherName: wizardState.voucherFile?.name || '',
    voucherData: wizardState.voucherBase64 || null
  };

  let scheduleWhatsAppText = '';
  if (wizardState.service === 'pack4') {
    appointmentRecord.sessions = wizardState.packSessions.map((s, i) => ({
      num: i + 1,
      dateKey: s.dateKey,
      time: s.time,
      dateLabel: formatDateLong(s.dateKey, 'es')
    }));
    scheduleWhatsAppText = appointmentRecord.sessions.map(s => `   ${s.num}️⃣ Sesión ${s.num}: ${s.dateLabel} · ${s.time}`).join('\n');
  } else {
    appointmentRecord.dateKey = wizardState.selectedDate;
    appointmentRecord.time = wizardState.selectedTime;
    appointmentRecord.dateLabel = formatDateLong(wizardState.selectedDate, 'es');
    scheduleWhatsAppText = `   ${appointmentRecord.dateLabel} · ${appointmentRecord.time}`;
  }

  // Save to persistent storage
  Store.add(appointmentRecord);

  // Exact WhatsApp formatted text per user specification
  const payMethods = I18N.t('payment_methods');
  const payAccounts = payMethods.map(m => m.name).join(' / ');

  const whatsappMessage = 
`🌿 *SOLICITUD DE CITA · YOUR SAFE PLACE*
📄 *Código:* #${code}
👤 *Paciente:* ${name}
🆔 *DNI:* ${dni}
📱 *WhatsApp:* ${wa}
📧 *Correo:* ${email}
🧠 *Servicio:* ${srv?.name || ''}
📍 *Modalidad:* ${modalityLabel}
🗓️ *Fecha y Hora / Cronograma:*
${scheduleWhatsAppText}
💭 *Motivo:* ${reason}
─────────────────────
💰 *INVERSIÓN:* ${srv?.currency || ''} ${srv?.price?.toFixed(2) || ''}
💳 *Cuenta de pago de sesión terapéutica:* ${payAccounts}
📎 *COMPROBANTE:* ${appointmentRecord.voucherName || 'voucher.jpg'}. Adjunto la captura en este chat.`;

  const waURL = 'https://wa.me/51924368333?text=' + encodeURIComponent(whatsappMessage);

  // Show Confirmation Modal
  const modal = document.getElementById('confirmModal');
  const modalCode = document.getElementById('modalCode');
  const modalWaBtn = document.getElementById('modalWhatsApp');
  const modalClose = document.getElementById('modalClose');

  if (modalCode) modalCode.textContent = '#' + code;
  if (modal) modal.classList.add('show');

  if (modalWaBtn) {
    modalWaBtn.onclick = () => {
      window.open(waURL, '_blank');
    };
  }

  if (modalClose) {
    modalClose.onclick = () => {
      modal.classList.remove('show');
      resetWizardForm();
    };
  }
}

function resetWizardForm() {
  wizardState.step = 1;
  wizardState.selectedDate = null;
  wizardState.selectedTime = null;
  wizardState.packSessions = [null, null, null, null];
  wizardState.currentPackTab = 0;
  wizardState.voucherFile = null;
  wizardState.voucherBase64 = null;

  document.getElementById('patientForm')?.reset();
  const zone = document.getElementById('uploadZone');
  const fileName = document.getElementById('fileName');
  if (zone) zone.classList.remove('has-file');
  if (fileName) fileName.style.display = 'none';

  updateWizardView();
  renderServiceSelector();
}

// ============================================================
// 7. ADMIN DASHBOARD CONTROLLER (PSIC. FÁTIMA ESCUDERO)
// ============================================================
const AdminPanel = {
  init() {
    this.updateGreeting();
    this.renderKPIs();
    this.renderAppointmentsTable();
    this.initHolidayBlocker();
    this.initStatusFilter();

    document.getElementById('adminLogout')?.addEventListener('click', () => {
      AppAuth.logout();
    });

    // Reactive refresh when storage changes
    window.addEventListener('ysp-data-change', () => {
      this.renderKPIs();
      this.renderAppointmentsTable();
    });

    // Timeout verification
    setInterval(() => {
      if (!AppAuth.isAuthenticated()) AppAuth.logout();
    }, 60000);
  },

  updateGreeting() {
    const h = new Date().getHours();
    let greeting = '';
    if (h >= 5 && h < 12) {
      greeting = '¡Buenos días, Psicóloga Fátima!';
    } else if (h >= 12 && h < 19) {
      greeting = '¡Buenas tardes, Psicóloga Fátima!';
    } else {
      greeting = '¡Buenas noches, Psicóloga Fátima!';
    }

    const welcomeEl = document.getElementById('adminWelcome');
    const greetEl = document.getElementById('adminGreeting');
    if (welcomeEl) welcomeEl.textContent = greeting;
    if (greetEl) greetEl.textContent = greeting;
  },

  renderKPIs() {
    const all = Store.getAll();
    const pending = all.filter(a => a.status === 'pending');
    const confirmed = all.filter(a => a.status === 'confirmed');

    const revSoles = confirmed.filter(a => a.currency === 'S/.').reduce((acc, a) => acc + (a.amount || 0), 0);
    const revUSD = confirmed.filter(a => a.currency === '$').reduce((acc, a) => acc + (a.amount || 0), 0);

    const elTotal = document.getElementById('kpiTotal');
    const elPending = document.getElementById('kpiPending');
    const elConfirmed = document.getElementById('kpiConfirmed');
    const elRevenue = document.getElementById('kpiRevenue');

    if (elTotal) elTotal.textContent = all.length;
    if (elPending) elPending.textContent = pending.length;
    if (elConfirmed) elConfirmed.textContent = confirmed.length;

    let revenueString = `S/. ${revSoles.toFixed(2)}`;
    if (revUSD > 0) revenueString += ` + $${revUSD.toFixed(2)}`;
    if (elRevenue) elRevenue.textContent = revenueString;
  },

  renderAppointmentsTable(filter = 'all') {
    const tbody = document.getElementById('appointmentsBody');
    if (!tbody) return;

    let appointments = Store.getAll().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (filter !== 'all') {
      appointments = appointments.filter(a => a.status === filter);
    }

    if (appointments.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:40px;">No hay solicitudes registradas con este filtro.</td></tr>';
      return;
    }

    tbody.innerHTML = appointments.map(a => {
      let datesDisplay = '';
      if (a.sessions && Array.isArray(a.sessions)) {
        datesDisplay = a.sessions.map(s => `<strong>S${s.num}:</strong> ${s.dateLabel} · <code>${s.time}</code>`).join('<br>');
      } else {
        datesDisplay = `${a.dateLabel || ''} · <code>${a.time || ''}</code>`;
      }

      const statusMap = {
        pending: { class: 'pending', text: '⏳ Pendiente' },
        confirmed: { class: 'confirmed', text: '✅ Confirmada' },
        rejected: { class: 'rejected', text: '❌ Rechazada' }
      };
      const st = statusMap[a.status] || { class: 'pending', text: a.status };

      const voucherThumb = a.voucherData
        ? `<img class="voucher-thumb" src="${a.voucherData}" alt="Comprobante" onclick="AdminPanel.openVoucherModal('${a.code}')" title="Click para ampliar">`
        : `<span style="color:var(--muted);font-size:12px;">${escapeHTML(a.voucherName || 'Sin archivo')}</span>`;

      let actions = '';
      if (a.status === 'pending') {
        actions = `
          <div style="display:flex;gap:4px;flex-direction:column;">
            <button class="btn btn-success btn-sm" onclick="AdminPanel.confirmAppointment('${a.code}')">✓ Confirmar</button>
            <button class="btn btn-danger btn-sm" onclick="AdminPanel.rejectAppointment('${a.code}')">✗ Rechazar</button>
          </div>
        `;
      } else if (a.status === 'confirmed') {
        actions = `<button class="btn btn-secondary btn-sm" onclick="AdminPanel.releaseAppointment('${a.code}')">🔓 Liberar Horario</button>`;
      } else {
        actions = `<button class="btn btn-secondary btn-sm" onclick="AdminPanel.confirmAppointment('${a.code}')">Reactivar</button>`;
      }

      return `
        <tr>
          <td><strong style="color:var(--accent);">#${a.code}</strong><br><small style="color:var(--muted);">${new Date(a.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small></td>
          <td><strong>${a.name}</strong><br><small style="color:var(--muted);">${a.whatsapp} · ${a.email}</small></td>
          <td>${a.serviceName}</td>
          <td style="font-size:13px;line-height:1.4;">${datesDisplay}</td>
          <td><span style="font-size:12px;padding:3px 8px;border-radius:12px;background:var(--bg-alt);">${a.modalityLabel}</span></td>
          <td><strong>${a.currency} ${Number(a.amount).toFixed(2)}</strong></td>
          <td>${voucherThumb}</td>
          <td><span class="status-badge ${st.class}">${st.text}</span></td>
          <td>${actions}</td>
        </tr>
      `;
    }).join('');
  },

  confirmAppointment(code) {
    if (!confirm(`¿Confirmar la cita #${code} tras validar el comprobante de pago? El horario quedará bloqueado permanentemente en la web para otros pacientes.`)) return;
    Store.update(code, { status: 'confirmed' });
    this.renderKPIs();
    this.renderAppointmentsTable(document.getElementById('filterStatus')?.value || 'all');
  },

  rejectAppointment(code) {
    if (!confirm(`¿Rechazar la cita #${code}?`)) return;
    Store.update(code, { status: 'rejected' });
    this.renderKPIs();
    this.renderAppointmentsTable(document.getElementById('filterStatus')?.value || 'all');
  },

  releaseAppointment(code) {
    if (!confirm(`¿Liberar el horario de la cita #${code}? El horario volverá a estar disponible en la vista pública.`)) return;
    Store.update(code, { status: 'rejected' });
    this.renderKPIs();
    this.renderAppointmentsTable(document.getElementById('filterStatus')?.value || 'all');
  },

  openVoucherModal(code) {
    const appt = Store.getAll().find(a => a.code === code);
    if (appt?.voucherData) {
      const modal = document.getElementById('voucherModal');
      const img = document.getElementById('voucherModalImg');
      if (img && modal) {
        img.src = appt.voucherData;
        modal.classList.add('show');
      }
    }
  },

  initHolidayBlocker() {
    const btn = document.getElementById('blockDateBtn');
    const input = document.getElementById('blockDateInput');

    btn?.addEventListener('click', () => {
      if (!input?.value) {
        alert('Por favor selecciona una fecha para bloquear.');
        return;
      }
      Store.blockDay(input.value);
      input.value = '';
      this.renderBlockedDays();
    });

    this.renderBlockedDays();
  },

  renderBlockedDays() {
    const container = document.getElementById('blockedDaysList');
    if (!container) return;
    const days = Store.getBlockedDays().sort();

    if (days.length === 0) {
      container.innerHTML = '<span style="color:var(--muted);font-size:13px;">No hay días bloqueados actualmente.</span>';
      return;
    }

    container.innerHTML = days.map(d => `
      <div class="blocked-day-chip">
        🚫 ${d}
        <button onclick="AdminPanel.unblockDay('${d}')" title="Desbloquear fecha">×</button>
      </div>
    `).join('');
  },

  unblockDay(d) {
    Store.unblockDay(d);
    this.renderBlockedDays();
  },

  initStatusFilter() {
    document.getElementById('filterStatus')?.addEventListener('change', (e) => {
      this.renderAppointmentsTable(e.target.value);
    });
  }
};

window.I18N = I18N;
window.AppAuth = AppAuth;
window.Store = Store;
window.AdminPanel = AdminPanel;
