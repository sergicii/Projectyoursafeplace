# Your Safe Place · Consultorio Psicológico Privado
**Psic. Fátima Escudero · Lima, Perú**

Sistema web de agendamiento clínico y panel de control administrativo privado.

---

## 📁 Estructura del Proyecto

```text
Projectyoursafeplace/
├── index.html                   # Vista pública de agendamiento para pacientes (libre acceso)
├── login.html                   # Login administrativo protegido (fatima.escudero)
├── admin.html                   # Panel de control de Fátima (KPIs, bloqueo de fechas, citas)
├── styles.css                   # Sistema de diseño clínico y estilos responsive
├── app.js                       # Lógica unificada (I18N, slots en tiempo real, validaciones, WhatsApp)
├── DESIGN.md                    # Manual de identidad visual, tokens y principios UI/UX
│
├── assets/                      # Recursos visuales del sistema web
│   ├── foto-fatima-1.jpg        # Fotografía oficial para presentación web
│   ├── logo-fatima.jpg          # Isotipo de comunicación y mente
│   ├── redes-fatima.jpg         # Imagen oficial para redes de contacto
│   └── originales/              # Archivos originales entregados
│       ├── foto fatima 1.JPG
│       ├── logo fatima.jpeg
│       └── redes fatima.jpeg
│
└── capturas/                    # Evidencias visuales organizadas por dimensión y resolución
    ├── desktop-1440x900/        # Capturas de viewport estándar de PC (1440×900, 1366×585)
    ├── desktop-full-page/       # Capturas de página completa en PC (> 3000 px de alto)
    ├── mobile-390x844/          # Capturas de viewport estándar de celular (390×844)
    └── mobile-full-page/        # Capturas de página completa en celular (> 5000 px de alto)
```

---

## 🔐 Acceso al Panel de Control

- **Ruta**: `/login.html` (o `/admin.html` con guard activo)
- **Usuario**: `fatima.escudero`
- **Contraseña**: *(Protegida con hash criptográfico SHA-256 en cliente; la contraseña en texto plano no está expuesta en el repositorio)*
