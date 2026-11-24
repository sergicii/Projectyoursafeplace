/* ============================================================
   YOUR SAFE PLACE — Unified Application Logic (Clinical System)
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
      nav_booking: 'Agendar Cita',
      hero_label: 'Psicóloga Clínica · Lima, Perú',
      hero_title: 'Tu espacio seguro para ',
      hero_highlight: 'sanar',
      pres_subtitle: 'Psic. Fátima Escudero · Especialista en TCC, Terapia de Pareja y Familia',
      pres_bio: 'Te acompaño en un proceso terapéutico basado en evidencia, con calidez humana y sin juicios. Consultorio privado en el límite de San Isidro, San Borja y La Victoria, Lima, o modalidad virtual por videollamada para todo el Perú y el extranjero.',
      pres_services_summary: '💡 <strong>Servicios disponibles:</strong> Sesiones de 60 minutos individuales (S/. 150) y de pareja (S/. 180), además de packs terapéuticos individuales con tarifa reducida.',
      hero_cta: '📅 Agendar mi Cita',
      bio_areas: [
        'Trastorno Límite de la Personalidad (TLP)',
        'Ansiedad · Depresión · Bipolaridad',
        'Desregulación y dependencia emocional',
        'Trauma psicológico y estrés postraumático',
        'Secuelas de abuso psicológico y trauma relacional',
        'Dificultades de pareja y familiares',
        'Conductas adictivas y límites afectivos'
      ],
      s1_header_title: 'Modalidad y Selección de Terapia',
      s1_presencial_title: 'Presencial en Consultorio',
      s1_presencial_badge: 'Lima',
      s1_presencial_desc: 'Consultorio privado en el Límite San Isidro, San Borja & La Victoria.',
      s1_virtual_title: 'Virtual por Videollamada',
      s1_virtual_badge: 'Meet / Zoom',
      s1_virtual_desc: 'Sesión online para Lima, provincias de Perú y pacientes en el extranjero.',
      s1_therapy_subheading: 'Selecciona la Terapia o Paquete:',
      s2_header_title: 'Fecha y Horario de la Sesión',
      leg_disp: 'Disponible',
      leg_ocup: 'Ocupado',
      leg_cerr: 'Cerrado',
      cal_note: '* Atención de Lunes a Viernes. Fines de semana y fechas pasadas no están disponibles.',
      slots_lbl: 'HORARIOS DISPONIBLES (60 MIN)',
      slots_placeholder: 'Haz clic en un día del calendario a la izquierda para ver los horarios disponibles.',
      s3_header_title: 'Datos de Contacto del Paciente',
      fld_name: 'Nombres y Apellidos',
      hint_name: 'Solo letras y espacios (sin números ni caracteres especiales)',
      err_name: 'Ingresa un nombre válido (mínimo 3 letras).',
      fld_dni: 'DNI / Documento de Identidad',
      hint_dni: 'Solo números (máximo 10 dígitos)',
      err_dni: 'Ingresa entre 8 y 10 dígitos numéricos.',
      fld_wa: 'WhatsApp de Contacto',
      hint_wa: 'Solo números',
      err_wa: 'Ingresa un número de WhatsApp válido (9 a 12 dígitos).',
      fld_email: 'Correo Electrónico',
      hint_email: 'Alfanumérico seguro (@ y .)',
      err_email: 'Ingresa un correo electrónico válido.',
      fld_reason: 'Motivo de consulta (Breve y confidencial)',
      s4_header_title: 'Información de Abono y Confirmación',
      inv_label: 'INVERSIÓN POR SESIÓN TERAPÉUTICA',
      acc_title: '💳 Cuentas de pago autorizadas para sesión terapéutica:',
      vch_title: '📎 Adjuntar Fotografía o Captura del Pago *',
      vch_desc: 'Sube el comprobante de abono para que Fátima lo verifique y valide tu cita.',
      btn_upload: 'Seleccionar archivo de pago',
      vch_empty: 'Sin adjuntar',
      btn_submit_wa: 'Solicitar Cita & Enviar Comprobante por WhatsApp',
      wa_disclaimer: '* Para habilitar el envío, debes adjuntar primero la foto o captura de tu comprobante de abono arriba.<br>Atención estrictamente confidencial bajo secreto profesional.',
      ft_desc: 'Consultorio psicológico de la Psic. Fátima Escudero. Atención clínica especializada en Lima, Perú.',
      ft_contact: 'Contacto',
      ft_location: 'Lima, Perú · Límite San Isidro, San Borja & La Victoria',
      ft_hours: 'Horario de Atención',
      ft_schedule: 'Lunes a Viernes: 10:00 AM – 8:00 PM',
      ft_weekend: 'Sábados y Domingos: Cerrado',
      ft_rights: 'Todos los derechos reservados',
      modal_title: '🌿 ¡Solicitud Generada!',
      modal_desc: 'Tu código de solicitud es:',
      modal_inst: 'Al hacer clic se abrirá WhatsApp con los detalles de tu solicitud. Adjunta la captura de tu comprobante en el chat para que Fátima confirme tu cita.',
      modal_wa_btn: 'Abrir WhatsApp y Enviar',
      modal_close: 'Cerrar',
      days_short: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      days_full: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      services: [
        { id: 'individual', name: 'Terapia Individual', price: 150.00, currency: 'S/.', period: 'Sesión de 60 minutos' },
        { id: 'pareja', name: 'Terapia de Pareja', price: 180.00, currency: 'S/.', period: 'Sesión de 60 minutos' },
        { id: 'pack4', name: 'Pack 4 Sesiones Individuales', price: 500.00, currency: 'S/.', period: '4 sesiones de 60 min (Ahorro S/. 100)', warm: true }
      ],
      payment_methods: [
        { name: 'Yape / Plin', badge: 'Móvil', number: '+51 924 368 333', extra: 'Titular: Fátima Escudero' },
        { name: 'BCP Soles', badge: 'Ahorros', number: '19473121367065', extra: 'CCI: 00219417312136706595' },
        { name: 'BBVA Soles', badge: 'Independencia', number: '0011-0814-0237429708', extra: 'CCI: 01181400023742970819' }
      ]
    },
    en: {
      nav_about: 'About Me',
      nav_booking: 'Book Session',
      hero_label: 'Clinical Psychologist · Lima, Peru',
      hero_title: 'Your safe place to ',
      hero_highlight: 'heal',
      pres_subtitle: 'Psic. Fátima Escudero · Specialist in CBT, Couples & Family Therapy',
      pres_bio: 'Evidence-based therapeutic support delivered with empathy and zero judgment. In-person clinic at the border of San Isidro, San Borja, and La Victoria, Lima, or online video sessions worldwide.',
      pres_services_summary: '💡 <strong>Available Services:</strong> 60-minute individual ($60 USD) and couples ($80 USD) psychotherapy sessions.',
      hero_cta: '📅 Book My Session',
      bio_areas: [
        'Borderline Personality Disorder (BPD)',
        'Anxiety · Depression · Bipolarity',
        'Emotional dysregulation & dependency',
        'Psychological trauma & PTSD',
        'Aftermath of psychological abuse & relational trauma',
        'Couples & family relationship difficulties',
        'Addictive behaviors & affective boundaries'
      ],
      s1_header_title: 'Session Mode & Therapy Selection',
      s1_presencial_title: 'In-person at Clinic',
      s1_presencial_badge: 'Lima',
      s1_presencial_desc: 'Private clinic at the border of San Isidro, San Borja & La Victoria.',
      s1_virtual_title: 'Online Video Session',
      s1_virtual_badge: 'Meet / Zoom',
      s1_virtual_desc: 'Online video consultation for Lima, Peru provinces, and international patients.',
      s1_therapy_subheading: 'Select Therapy Service:',
      s2_header_title: 'Date and Time Slot',
      leg_disp: 'Available',
      leg_ocup: 'Booked',
      leg_cerr: 'Closed',
      cal_note: '* Monday to Friday office hours. Weekends and past dates are unavailable.',
      slots_lbl: 'AVAILABLE SLOTS (60 MIN)',
      slots_placeholder: 'Click a date on the calendar to see available time slots.',
      s3_header_title: 'Patient Contact Details',
      fld_name: 'Full Name',
      hint_name: 'Letters and spaces only (minimum 3 letters)',
      err_name: 'Enter a valid full name.',
      fld_dni: 'ID / Passport Number',
      hint_dni: 'Digits only (8 to 10 digits)',
      err_dni: 'Enter between 8 and 10 digits.',
      fld_wa: 'WhatsApp Phone Number',
      hint_wa: 'Digits only',
      err_wa: 'Enter a valid WhatsApp number (9 to 12 digits).',
      fld_email: 'Email Address',
      hint_email: 'Standard alphanumeric email (@ and .)',
      err_email: 'Enter a valid email address.',
      fld_reason: 'Reason for consultation (Brief & confidential)',
      s4_header_title: 'Payment Details & Confirmation',
      inv_label: 'SESSION INVESTMENT',
      acc_title: '💳 Authorized international payment method:',
      vch_title: '📎 Attach Payment Screenshot or Receipt *',
      vch_desc: 'Upload your payment receipt so Fátima can verify and validate your booking.',
      btn_upload: 'Select payment file',
      vch_empty: 'No file attached',
      btn_submit_wa: 'Request Appointment & Send Receipt via WhatsApp',
      wa_disclaimer: '* To enable booking, attach your payment screenshot above first.<br>Strictly confidential clinical care under professional medical secrecy.',
      ft_desc: 'Private clinical psychology practice of Psic. Fátima Escudero. Lima, Peru.',
      ft_contact: 'Contact',
      ft_location: 'Lima, Peru · San Isidro, San Borja & La Victoria',
      ft_hours: 'Office Hours',
      ft_schedule: 'Monday to Friday: 10:00 AM – 8:00 PM',
      ft_weekend: 'Saturday & Sunday: Closed',
      ft_rights: 'All rights reserved',
      modal_title: '🌿 Booking Request Generated!',
      modal_desc: 'Your request code is:',
      modal_inst: 'Click below to open WhatsApp with your booking details. Please send your payment screenshot in the chat for confirmation.',
      modal_wa_btn: 'Open WhatsApp & Send',
      modal_close: 'Close',
      days_short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days_full: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      services: [
        { id: 'individual', name: 'Individual Therapy', price: 60.00, currency: '$', period: '60-minute session' },
        { id: 'pareja', name: 'Couples Therapy', price: 80.00, currency: '$', period: '60-minute session' }
      ],
      payment_methods: [
        { name: 'PayPal', badge: 'International', number: '@fatimaescudero', extra: 'paypal.me/fatimaescudero' }
      ]
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
        } else if (key === 'pres_services_summary' || key === 'wa_disclaimer') {
          el.innerHTML = val;
        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // In EN, strictly force individual if pack4 was selected
    if (lang === 'en' && bookingState.service === 'pack4') {
      bookingState.service = 'individual';
      bookingState.packSessions = [null, null, null, null];
      bookingState.currentPackTab = 0;
    }

    renderPresentationAreas();
    renderTherapyOptions();
    renderPaymentAccounts();
    updateInvestmentCard();
    renderCalendar();
    renderTimeSlots();

    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }
};

// ============================================================
// 2. AUTHENTICATION (ADMIN ACCESS & SESSION TIMEOUT)
// ============================================================
const AppAuth = {
  _sessionKey: 'ysp_admin_auth_session',
  _timeoutMs: 30 * 60 * 1000,

  login(user, pass) {
    if (user === 'fatima.escudero' && pass === 'YSP2026Fatima!') {
      const token = 'ysp_jwt_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
      const session = { token, user, ts: Date.now() };
      sessionStorage.setItem(this._sessionKey, JSON.stringify(session));
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
      s.ts = Date.now();
      sessionStorage.setItem(this._sessionKey, JSON.stringify(s));
      return true;
    } catch {
      return false;
    }
  },

  logout() {
    sessionStorage.removeItem(this._sessionKey);
    window.location.href = 'login.html';
  }
};

// ============================================================
// 3. PERSISTENT STORAGE & REAL-TIME SYNC
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
    list.unshift(appt);
    this.save(list);
  },

  remove(code) {
    let list = this.getAll();
    list = list.filter(a => a.code !== code);
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

  checkRateLimit() {
    try {
      let attempts = JSON.parse(localStorage.getItem(this._rateLimitKey)) || [];
      const now = Date.now();
      attempts = attempts.filter(t => now - t < 300000);
      if (attempts.length >= 5) return false;
      attempts.push(now);
      localStorage.setItem(this._rateLimitKey, JSON.stringify(attempts));
      return true;
    } catch {
      return true;
    }
  }
};

window.addEventListener('storage', (e) => {
  if (e.key === Store._key || e.key === Store._blockedKey) {
    window.dispatchEvent(new Event('ysp-data-change'));
  }
});

// ============================================================
// 4. HELPERS
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
// 5. UNIFIED BOOKING STATE & CONTROLLER
// ============================================================
const bookingState = {
  modality: 'presencial',
  service: 'individual',
  selectedDate: null,
  selectedTime: null,
  packSessions: [null, null, null, null],
  currentPackTab: 0,
  calMonth: new Date().getMonth(),
  calYear: new Date().getFullYear(),
  voucherFile: null,
  voucherBase64: null
};

function isPatientPage() {
  return document.getElementById('agendamiento') !== null;
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
    document.getElementById('presText')?.classList.add('visible');
    document.getElementById('presImg')?.classList.add('visible');
  }, 100);

  // Initialize UI components
  renderPresentationAreas();
  initModalitySelector();
  renderTherapyOptions();
  renderCalendar();
  renderPaymentAccounts();
  updateInvestmentCard();
  initPatientFormValidation();
  initVoucherUploadButton();
  initWhatsAppSubmit();

  // 30-Second Real-Time Check for 10-minute rule
  setInterval(() => {
    if (bookingState.selectedDate || bookingState.service === 'pack4') {
      renderTimeSlots();
    }
  }, 30000);

  // Reactive cross-tab updates
  window.addEventListener('ysp-data-change', () => {
    renderCalendar();
    renderTimeSlots();

    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  });
});

// --- Presentation Areas ---
function renderPresentationAreas() {
  const container = document.getElementById('presAreas');
  if (!container) return;
  const areas = I18N.t('bio_areas');
  container.innerHTML = areas.map(a => `<span class="badge">${escapeHTML(a)}</span>`).join('');
}

// --- Modality Selector ---
function initModalitySelector() {
  const presencial = document.getElementById('modPresencial');
  const virtual = document.getElementById('modVirtual');

  presencial?.addEventListener('click', () => {
    presencial.classList.add('selected');
    virtual.classList.remove('selected');
    bookingState.modality = 'presencial';
    updateInvestmentCard();
  });

  virtual?.addEventListener('click', () => {
    virtual.classList.add('selected');
    presencial.classList.remove('selected');
    bookingState.modality = 'virtual';
    updateInvestmentCard();
  });
}

// --- Therapy Options ---
function renderTherapyOptions() {
  const grid = document.getElementById('therapyGrid');
  if (!grid) return;
  const services = I18N.t('services');
  const isEN = I18N.currentLang === 'en';

  grid.className = 'therapy-grid' + (isEN ? ' cols-2' : '');
  grid.innerHTML = services.map(s => {
    const isSelected = bookingState.service === s.id;
    const isWarm = !!s.warm;
    const classes = [
      'therapy-card',
      isSelected ? 'selected' : '',
      isWarm ? 'warm-highlight' : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="${classes}" data-service="${s.id}">
        <div class="top-row">
          <div class="radio-label">
            <span class="radio-circle"></span>
            <h4>${escapeHTML(s.name)}</h4>
          </div>
          <span class="price-pill">${s.currency} ${s.price.toFixed(2)}</span>
        </div>
        <div class="therapy-desc">${escapeHTML(s.period)}</div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.therapy-card').forEach(card => {
    card.addEventListener('click', () => {
      grid.querySelectorAll('.therapy-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      const prevService = bookingState.service;
      bookingState.service = card.dataset.service;

      if (prevService !== bookingState.service) {
        bookingState.selectedDate = null;
        bookingState.selectedTime = null;
        bookingState.packSessions = [null, null, null, null];
        bookingState.currentPackTab = 0;
      }

      updateInvestmentCard();
      renderPackTabs();
      renderCalendar();
      renderTimeSlots();
    });
  });

  renderPackTabs();
}

// --- Calendar ---
function renderCalendar() {
  const grid = document.getElementById('calGrid');
  const label = document.getElementById('calMonthYear');
  if (!grid || !label) return;

  const year = bookingState.calYear;
  const month = bookingState.calMonth;
  const months = I18N.t('months');
  const daysShort = I18N.t('days_short');
  const today = new Date();
  const todayStr = dateKey(today);
  const blockedDays = Store.getBlockedDays();

  label.textContent = `${months[month]} ${year}`;

  // European week starting Monday: 0=Sun -> 6, 1=Mon -> 0, etc.
  const firstDayRaw = new Date(year, month, 1).getDay();
  const firstDay = firstDayRaw === 0 ? 6 : firstDayRaw - 1;
  const totalDays = new Date(year, month + 1, 0).getDate();

  let html = daysShort.map((d, idx) => {
    const isWeekend = idx === 5 || idx === 6; // Sáb, Dom
    return `<div class="day-name ${isWeekend ? 'weekend' : ''}">${d}</div>`;
  }).join('');

  for (let i = 0; i < firstDay; i++) {
    html += '<div class="day-btn empty"></div>';
  }

  for (let d = 1; d <= totalDays; d++) {
    const dt = new Date(year, month, d);
    const dk = dateKey(dt);
    const dow = dt.getDay();
    const isWeekend = dow === 0 || dow === 6;
    const isPast = dk < todayStr;
    const isBlocked = blockedDays.includes(dk);
    const isDisabled = isWeekend || isPast || isBlocked;
    const isToday = dk === todayStr;

    let isSelected = false;
    let packBadges = '';

    if (bookingState.service === 'pack4') {
      const activeTabDate = bookingState.packSessions[bookingState.currentPackTab]?.dateKey;
      isSelected = activeTabDate === dk;
      bookingState.packSessions.forEach((s, idx) => {
        if (s && s.dateKey === dk) {
          packBadges += `<span class="pack-badge">S${idx + 1}</span>`;
        }
      });
    } else {
      isSelected = bookingState.selectedDate === dk;
    }

    const classes = [
      'day-btn',
      isDisabled ? 'disabled' : '',
      isToday ? 'today' : '',
      isSelected ? 'selected' : ''
    ].filter(Boolean).join(' ');

    let subLabel = '';
    if (isToday) {
      subLabel = '<span class="sub-lbl">Hoy</span>';
    } else if (isWeekend || isBlocked) {
      subLabel = '<span class="sub-lbl" style="color:var(--warm)">Cerrado</span>';
    }

    html += `
      <div class="${classes}" data-date="${dk}">
        <span>${d}</span>
        ${subLabel}
        ${packBadges}
      </div>
    `;
  }

  grid.innerHTML = html;

  grid.querySelectorAll('.day-btn:not(.disabled):not(.empty)').forEach(btn => {
    btn.addEventListener('click', () => {
      const dk = btn.dataset.date;
      if (bookingState.service === 'pack4') {
        const tab = bookingState.currentPackTab;
        if (!bookingState.packSessions[tab]) bookingState.packSessions[tab] = {};
        bookingState.packSessions[tab].dateKey = dk;
        bookingState.packSessions[tab].time = null;
      } else {
        bookingState.selectedDate = dk;
        bookingState.selectedTime = null;
      }
      renderCalendar();
      renderTimeSlots();
      renderPackTabs();
      updateInvestmentCard();
    });
  });

  const prevBtn = document.getElementById('calPrev');
  const nextBtn = document.getElementById('calNext');
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      bookingState.calMonth--;
      if (bookingState.calMonth < 0) {
        bookingState.calMonth = 11;
        bookingState.calYear--;
      }
      renderCalendar();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      bookingState.calMonth++;
      if (bookingState.calMonth > 11) {
        bookingState.calMonth = 0;
        bookingState.calYear++;
      }
      renderCalendar();
    };
  }
}

// --- Time Slots ---
function renderTimeSlots() {
  const container = document.getElementById('slotsList');
  const dateTitle = document.getElementById('slotsDateTitle');
  const freeBadge = document.getElementById('slotsFreeBadge');
  const selectedText = document.getElementById('selectedSlotText');
  if (!container || !dateTitle) return;

  let activeDate = null;
  let selectedTime = null;

  if (bookingState.service === 'pack4') {
    const tab = bookingState.currentPackTab;
    activeDate = bookingState.packSessions[tab]?.dateKey;
    selectedTime = bookingState.packSessions[tab]?.time;
  } else {
    activeDate = bookingState.selectedDate;
    selectedTime = bookingState.selectedTime;
  }

  if (!activeDate) {
    dateTitle.textContent = I18N.t('slots_placeholder');
    if (freeBadge) freeBadge.textContent = '—';
    container.innerHTML = `<div style="text-align:center;color:var(--muted);padding:30px 10px;font-size:13px;">${escapeHTML(I18N.t('slots_placeholder'))}</div>`;
    if (selectedText) selectedText.textContent = '—';
    return;
  }

  dateTitle.textContent = formatDateLong(activeDate);

  const slots = getAvailableSlots(activeDate);

  // Check collision in other sessions of Pack 4
  const packCollisions = [];
  if (bookingState.service === 'pack4') {
    bookingState.packSessions.forEach((s, idx) => {
      if (s && s.dateKey === activeDate && s.time && idx !== bookingState.currentPackTab) {
        packCollisions.push(s.time);
      }
    });
  }

  const freeSlotsCount = slots.filter(s => s.status === 'available' && !packCollisions.includes(s.time)).length;
  if (freeBadge) freeBadge.textContent = `${freeSlotsCount} horario(s) libre(s)`;

  if (selectedText) {
    if (selectedTime) {
      selectedText.textContent = `${formatDateLong(activeDate)} · ${selectedTime}`;
    } else {
      selectedText.textContent = `${formatDateLong(activeDate)} · Elige una hora`;
    }
  }

  container.innerHTML = slots.map(slot => {
    const isBooked = slot.status === 'booked';
    const isCollision = packCollisions.includes(slot.time);
    const isClosed = slot.status === 'closed' || isBooked || isCollision;
    const isSelected = selectedTime === slot.time;

    let badgeText = 'DISPONIBLE';
    let rowClass = 'slot-row';

    if (isSelected) {
      badgeText = 'SELECCIONADO';
      rowClass += ' selected';
    } else if (isBooked) {
      badgeText = 'OCUPADO';
      rowClass += ' disabled booked';
    } else if (isCollision) {
      badgeText = 'EN PAQUETE';
      rowClass += ' disabled';
    } else if (slot.status === 'closed') {
      badgeText = 'CERRADO';
      rowClass += ' disabled';
    }

    return `
      <div class="${rowClass}" data-time="${slot.time}">
        <span>⏰ ${slot.time}</span>
        <span class="status-pill">${badgeText}</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.slot-row:not(.disabled)').forEach(row => {
    row.addEventListener('click', () => {
      const time = row.dataset.time;
      if (bookingState.service === 'pack4') {
        const tab = bookingState.currentPackTab;
        if (!bookingState.packSessions[tab]) bookingState.packSessions[tab] = {};
        bookingState.packSessions[tab].time = time;

        renderPackTabs();

        // Advance to next uncompleted tab
        if (tab < 3) {
          bookingState.currentPackTab = tab + 1;
          renderPackTabs();
          renderCalendar();
          renderTimeSlots();
        } else {
          renderTimeSlots();
        }
      } else {
        bookingState.selectedTime = time;
        renderTimeSlots();
      }
      updateInvestmentCard();
    });
  });
}

// --- Pack Tabs ---
function renderPackTabs() {
  const container = document.getElementById('packTabsContainer');
  const tabsList = document.getElementById('packTabs');
  if (!container || !tabsList) return;

  if (bookingState.service !== 'pack4') {
    container.classList.add('hidden');
    return;
  }
  container.classList.remove('hidden');

  tabsList.innerHTML = bookingState.packSessions.map((s, idx) => {
    const isDone = s && s.dateKey && s.time;
    const isActive = idx === bookingState.currentPackTab;
    return `
      <div class="pack-tab ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}" data-tab="${idx}">
        <span class="tab-num">Sesión ${idx + 1}</span>
        <span class="tab-status">${isDone ? '✓ ' + s.time : 'Pendiente'}</span>
      </div>
    `;
  }).join('');

  tabsList.querySelectorAll('.pack-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      bookingState.currentPackTab = parseInt(tab.dataset.tab, 10);
      renderPackTabs();
      renderCalendar();
      renderTimeSlots();
    });
  });
}

// --- Investment Card ---
function updateInvestmentCard() {
  const invAmount = document.getElementById('invAmount');
  const invSub = document.getElementById('invSub');
  const badgeModality = document.getElementById('badgeModality');
  const badgeDateTime = document.getElementById('badgeDateTime');
  if (!invAmount || !invSub) return;

  const services = I18N.t('services');
  const srv = services.find(s => s.id === bookingState.service) || services[0];

  invAmount.textContent = `${srv.currency} ${srv.price.toFixed(2)}`;
  invSub.textContent = `${srv.name} (${srv.period} · Psic. Fátima Escudero)`;

  if (badgeModality) {
    badgeModality.textContent = bookingState.modality === 'presencial' ? 'Presencial (Lima)' : 'Virtual (Meet / Zoom)';
  }

  if (badgeDateTime) {
    if (bookingState.service === 'pack4') {
      const completed = bookingState.packSessions.filter(s => s && s.dateKey && s.time).length;
      badgeDateTime.textContent = completed === 4 ? 'Pack: 4 sesiones programadas' : `Pack: ${completed} de 4 sesiones elegidas`;
    } else if (bookingState.selectedDate && bookingState.selectedTime) {
      badgeDateTime.textContent = `${formatDateLong(bookingState.selectedDate)} · ${bookingState.selectedTime}`;
    } else {
      badgeDateTime.textContent = 'Selecciona fecha y hora';
    }
  }
}

// --- Payment Accounts ---
function renderPaymentAccounts() {
  const grid = document.getElementById('accountsGrid');
  if (!grid) return;
  const methods = I18N.t('payment_methods');

  grid.innerHTML = methods.map(m => `
    <div class="account-card">
      <div class="acc-header">
        <span class="acc-name">${escapeHTML(m.name)}</span>
        <span class="acc-badge">${escapeHTML(m.badge)}</span>
      </div>
      <div class="acc-number">${escapeHTML(m.number)}</div>
      <div class="acc-cci">${escapeHTML(m.extra)}</div>
    </div>
  `).join('');
}

// --- Patient Form Validation ---
function initPatientFormValidation() {
  const nameEl = document.getElementById('pName');
  const dniEl = document.getElementById('pDNI');
  const waEl = document.getElementById('pWhatsApp');
  const emailEl = document.getElementById('pEmail');
  if (!nameEl) return;

  nameEl.addEventListener('input', () => {
    nameEl.value = nameEl.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    checkField(nameEl, /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/);
  });

  dniEl.addEventListener('input', () => {
    dniEl.value = dniEl.value.replace(/[^0-9]/g, '');
    checkField(dniEl, /^[0-9]{8,10}$/);
  });

  waEl.addEventListener('input', () => {
    waEl.value = waEl.value.replace(/[^0-9]/g, '');
    checkField(waEl, /^[0-9]{9,12}$/);
  });

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

function validatePatientForm() {
  const nameEl = document.getElementById('pName');
  const dniEl = document.getElementById('pDNI');
  const waEl = document.getElementById('pWhatsApp');
  const emailEl = document.getElementById('pEmail');

  const vName = checkField(nameEl, /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/);
  const vDni = checkField(dniEl, /^[0-9]{8,10}$/);
  const vWa = checkField(waEl, /^[0-9]{9,12}$/);
  const vEmail = checkField(emailEl, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

  return vName && vDni && vWa && vEmail;
}

// --- Voucher Upload Button ---
function initVoucherUploadButton() {
  const btn = document.getElementById('btnSelectVoucher');
  const fileInput = document.getElementById('pVoucher');
  const statusText = document.getElementById('voucherStatusText');
  const submitBtn = document.getElementById('btnSubmitWhatsApp');
  const disclaimer = document.getElementById('waDisclaimer');

  if (!btn || !fileInput) return;

  // The button triggers the file input reliably
  btn.onclick = (e) => {
    e.preventDefault();
    fileInput.click();
  };

  fileInput.onchange = () => {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const file = fileInput.files[0];

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert(I18N.currentLang === 'es' ? 'Formato inválido. Por favor selecciona un archivo JPG, PNG o WebP.' : 'Invalid format. Please select a JPG, PNG, or WebP image.');
      fileInput.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert(I18N.currentLang === 'es' ? 'El archivo excede el tamaño máximo permitido de 5MB.' : 'File exceeds maximum 5MB size limit.');
      fileInput.value = '';
      return;
    }

    bookingState.voucherFile = file;

    // Read Base64 for admin review
    const reader = new FileReader();
    reader.onload = () => {
      bookingState.voucherBase64 = reader.result;
    };
    reader.readAsDataURL(file);

    // Update UI Status
    if (statusText) {
      statusText.textContent = `✅ ${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
      statusText.classList.add('attached');
    }

    // Enable WhatsApp submit button!
    if (submitBtn) {
      submitBtn.removeAttribute('disabled');
    }

    if (disclaimer) {
      disclaimer.innerHTML = '✅ <strong>Comprobante adjuntado con éxito.</strong> Ahora puedes pulsar el botón para confirmar por WhatsApp.';
      disclaimer.style.color = 'var(--success)';
    }
  };
}

// --- WhatsApp Submission ---
function initWhatsAppSubmit() {
  const submitBtn = document.getElementById('btnSubmitWhatsApp');
  if (!submitBtn) return;

  submitBtn.onclick = () => {
    if (!validatePatientForm()) {
      alert(I18N.currentLang === 'es' ? 'Por favor completa correctamente tus datos personales en el Paso 3.' : 'Please fill in your contact information in Step 3 correctly.');
      document.getElementById('pName')?.focus();
      return;
    }

    if (bookingState.service === 'pack4') {
      const allSelected = bookingState.packSessions.every(s => s && s.dateKey && s.time);
      if (!allSelected) {
        alert(I18N.currentLang === 'es' ? 'Por favor completa la fecha y hora de las 4 sesiones del paquete en el Paso 2.' : 'Please select a date and time for all 4 sessions in Step 2.');
        return;
      }
    } else {
      if (!bookingState.selectedDate || !bookingState.selectedTime) {
        alert(I18N.currentLang === 'es' ? 'Por favor selecciona fecha y horario para tu sesión en el Paso 2.' : 'Please choose a session date and time slot in Step 2.');
        return;
      }
    }

    if (!bookingState.voucherFile) {
      alert(I18N.currentLang === 'es' ? 'Debes adjuntar el comprobante de pago en el Paso 4 para continuar.' : 'Please attach your payment receipt in Step 4 to continue.');
      return;
    }

    if (!Store.checkRateLimit()) {
      alert(I18N.currentLang === 'es' ? 'Has realizado demasiados intentos. Por favor espera unos minutos.' : 'Too many attempts. Please wait a few moments.');
      return;
    }

    // Build Record
    const code = generateCode();
    const services = I18N.t('services');
    const srv = services.find(s => s.id === bookingState.service) || services[0];
    const name = document.getElementById('pName').value.trim();
    const dni = document.getElementById('pDNI').value.trim();
    const wa = document.getElementById('pWhatsApp').value.trim();
    const email = document.getElementById('pEmail').value.trim();
    const reason = document.getElementById('pReason').value.trim() || '—';
    const modalityLabel = bookingState.modality === 'presencial' ? 'Presencial (Lima)' : 'Virtual (Meet / Zoom)';

    const appt = {
      code,
      name: escapeHTML(name),
      dni: escapeHTML(dni),
      whatsapp: escapeHTML(wa),
      email: escapeHTML(email),
      service: bookingState.service,
      serviceName: srv.name,
      modality: bookingState.modality,
      modalityLabel,
      reason: escapeHTML(reason),
      amount: srv.price,
      currency: srv.currency,
      lang: I18N.currentLang,
      status: 'pending',
      createdAt: new Date().toISOString(),
      voucherName: bookingState.voucherFile?.name || '',
      voucherData: bookingState.voucherBase64 || null
    };

    let scheduleWhatsAppText = '';
    if (bookingState.service === 'pack4') {
      appt.sessions = bookingState.packSessions.map((s, i) => ({
        num: i + 1,
        dateKey: s.dateKey,
        time: s.time,
        dateLabel: formatDateLong(s.dateKey, 'es')
      }));
      scheduleWhatsAppText = appt.sessions.map(s => `   ${s.num}️⃣ Sesión ${s.num}: ${s.dateLabel} · ${s.time}`).join('\n');
    } else {
      appt.dateKey = bookingState.selectedDate;
      appt.time = bookingState.selectedTime;
      appt.dateLabel = formatDateLong(bookingState.selectedDate, 'es');
      scheduleWhatsAppText = `   ${appt.dateLabel} · ${appt.time}`;
    }

    // Save to persistent storage
    Store.add(appt);

    const methods = I18N.t('payment_methods');
    const payAccounts = methods.map(m => m.name).join(' / ');

    const whatsappMessage = 
`🌿 *SOLICITUD DE CITA · YOUR SAFE PLACE*
📄 *Código:* #${code}
👤 *Paciente:* ${name}
🆔 *DNI:* ${dni}
📱 *WhatsApp:* ${wa}
📧 *Correo:* ${email}
🧠 *Servicio:* ${srv.name}
📍 *Modalidad:* ${modalityLabel}
🗓️ *Fecha y Hora / Cronograma:*
${scheduleWhatsAppText}
💭 *Motivo:* ${reason}
─────────────────────
💰 *INVERSIÓN:* ${srv.currency} ${srv.price.toFixed(2)}
💳 *Cuenta de pago de sesión terapéutica:* ${payAccounts}
📎 *COMPROBANTE:* ${appt.voucherName || 'voucher.jpg'}. Adjunto la captura en este chat.`;

    const waURL = 'https://wa.me/51924368333?text=' + encodeURIComponent(whatsappMessage);

    // Show confirmation modal
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
        resetBookingForm();
      };
    }
  };
}

function resetBookingForm() {
  bookingState.selectedDate = null;
  bookingState.selectedTime = null;
  bookingState.packSessions = [null, null, null, null];
  bookingState.currentPackTab = 0;
  bookingState.voucherFile = null;
  bookingState.voucherBase64 = null;

  document.getElementById('bookingForm')?.reset();
  const fileInput = document.getElementById('pVoucher');
  if (fileInput) fileInput.value = '';

  const statusText = document.getElementById('voucherStatusText');
  if (statusText) {
    statusText.textContent = I18N.t('vch_empty');
    statusText.classList.remove('attached');
  }

  const submitBtn = document.getElementById('btnSubmitWhatsApp');
  if (submitBtn) submitBtn.setAttribute('disabled', 'true');

  const disclaimer = document.getElementById('waDisclaimer');
  if (disclaimer) {
    disclaimer.innerHTML = I18N.t('wa_disclaimer');
    disclaimer.style.color = '';
  }

  renderCalendar();
  renderTimeSlots();
  renderPackTabs();
  updateInvestmentCard();
}

// ============================================================
// 6. ADMIN DASHBOARD CONTROLLER (PSIC. FÁTIMA ESCUDERO)
// ============================================================
const AdminPanel = {
  init() {
    // Clean up any historical rejected appointments
    const rawAll = Store.getAll();
    const activeOnly = rawAll.filter(a => a.status === 'pending' || a.status === 'confirmed');
    if (activeOnly.length !== rawAll.length) {
      Store.save(activeOnly);
    }

    this.updateGreeting();
    this.renderKPIs();
    this.renderAppointmentsTable();
    this.initHolidayBlocker();
    this.initStatusFilter();

    document.getElementById('adminLogout')?.addEventListener('click', () => {
      AppAuth.logout();
    });

    window.addEventListener('ysp-data-change', () => {
      this.renderKPIs();
      this.renderAppointmentsTable();
    });

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
    const all = Store.getAll().filter(a => a.status === 'pending' || a.status === 'confirmed');
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

    let appointments = Store.getAll()
      .filter(a => a.status === 'pending' || a.status === 'confirmed')
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (filter === 'pending') {
      appointments = appointments.filter(a => a.status === 'pending');
    } else if (filter === 'confirmed') {
      appointments = appointments.filter(a => a.status === 'confirmed');
    }

    if (appointments.length === 0) {
      tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:40px;">No hay solicitudes activas registradas con este filtro.</td></tr>';
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
        confirmed: { class: 'confirmed', text: '✅ Confirmada' }
      };
      const st = statusMap[a.status] || { class: 'pending', text: a.status };

      const voucherThumb = a.voucherData && a.voucherData.startsWith('data:image')
        ? `<img class="voucher-thumb" src="${a.voucherData}" alt="Comprobante" onclick="AdminPanel.openVoucherModal('${a.code}')" title="Click para ampliar">`
        : `<button class="btn btn-secondary btn-sm" style="font-size:11px;padding:4px 8px;" onclick="AdminPanel.openVoucherModal('${a.code}')">📎 ${escapeHTML(a.voucherName || 'Ver')}</button>`;

      let actions = '';
      if (a.status === 'pending') {
        actions = `
          <div class="action-buttons-group">
            <button class="btn btn-success btn-sm" onclick="AdminPanel.confirmAppointment('${a.code}')">✓ Confirmar</button>
            <button class="btn btn-danger btn-sm" onclick="AdminPanel.rejectAppointment('${a.code}')">✗ Rechazar</button>
          </div>
        `;
      } else if (a.status === 'confirmed') {
        actions = `<button class="btn btn-secondary btn-sm btn-block" onclick="AdminPanel.releaseAppointment('${a.code}')">🔓 Liberar Horario</button>`;
      }

      return `
        <tr class="appointment-card-row">
          <td data-label="Código"><strong style="color:var(--accent);">#${a.code}</strong><br><small style="color:var(--muted);">${new Date(a.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small></td>
          <td data-label="Paciente">
            <div>
              <strong>${escapeHTML(a.name)}</strong><br>
              <small style="color:var(--muted);display:inline-block;margin-top:2px;">
                🆔 <strong>DNI:</strong> ${escapeHTML(a.dni || '—')}<br>
                📱 ${escapeHTML(a.whatsapp)} · ✉️ ${escapeHTML(a.email)}
              </small>
            </div>
          </td>
          <td data-label="Servicio">${escapeHTML(a.serviceName)}</td>
          <td data-label="Fecha(s)" style="font-size:13px;line-height:1.4;"><div class="dates-list">${datesDisplay}</div></td>
          <td data-label="Modalidad"><span style="font-size:12px;padding:3px 8px;border-radius:12px;background:var(--bg-alt);">${escapeHTML(a.modalityLabel)}</span></td>
          <td data-label="Monto"><strong>${escapeHTML(a.currency)} ${Number(a.amount).toFixed(2)}</strong></td>
          <td data-label="Voucher">${voucherThumb}</td>
          <td data-label="Estado"><span class="status-badge ${st.class}">${st.text}</span></td>
          <td data-label="Acciones" class="cell-actions">${actions}</td>
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
    if (!confirm(`¿Rechazar y descartar la solicitud #${code}?`)) return;
    Store.remove(code);
    this.renderKPIs();
    this.renderAppointmentsTable(document.getElementById('filterStatus')?.value || 'all');
  },

  releaseAppointment(code) {
    if (!confirm(`¿Liberar el horario de la cita #${code}? El horario volverá a estar disponible en la web para otros pacientes y la cita se retirará del sistema.`)) return;
    Store.remove(code);
    this.renderKPIs();
    this.renderAppointmentsTable(document.getElementById('filterStatus')?.value || 'all');
  },

  openVoucherModal(code) {
    const appt = Store.getAll().find(a => a.code === code);
    if (appt?.voucherData && appt.voucherData.startsWith('data:image')) {
      const modal = document.getElementById('voucherModal');
      const img = document.getElementById('voucherModalImg');
      if (img && modal) {
        img.src = appt.voucherData;
        modal.classList.add('show');
      }
    } else {
      alert(`Comprobante de la cita #${code} (${appt ? appt.name : ''}):\n${appt?.voucherName || 'Adjunto enviado en el chat de WhatsApp'}`);
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
