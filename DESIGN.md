# DESIGN.md — Your Safe Place

Sistema de diseño y dirección de arte para el consultorio psicológico privado de la **Psic. Fátima Escudero** en Lima, Perú (San Isidro / San Borja / La Victoria).

---

## 1. Identidad y Propósito
- **Entidad**: Consultorio Psicológico Privado "Your Safe Place"
- **Especialista**: Psic. Fátima Escudero (Psicóloga Clínica, TCC, Terapia de Pareja y Familia)
- **Tipo de Interfaz**: Servicio Clínico / Agendamiento Médico Especializado
- **Modos de Diseño**:
  - **Operate**: Flujo de reserva clínico guiado (Wizard 4 pasos), escaneable, accesible, con restricciones sanitarias y de tiempo real.
  - **Persuade**: Hero cálido, credenciales clínicas verificables y empatía sin artificios.

---

## 2. Tokens del Sistema (Paleta Clínica)
| Token | Valor Hex | Función Semántica |
|---|---|---|
| `--bg` | `#F0F7FB` | Fondo clínico suave general |
| `--bg-alt` | `#E0F2FE` | Contenedores secundarios, slots activos |
| `--surface` | `#FFFFFF` | Tarjetas de servicio, modales, formularios |
| `--surface-warm` | `#FEF9C3` | Tarjetas de información de pago y badges de ahorro |
| `--accent` | `#0284C7` | Acento profesional primario, botones y enlaces |
| `--accent-dark` | `#0369A1` | Estado hover de botones y elementos interactivos |
| `--accent-deep` | `#0C4A6E` | Tipografía de encabezados hero y navegación |
| `--warm` | `#F59E0B` | Acento cálido humano, bordes del día actual |
| `--warm-soft` | `#FDE68A` | Acento ornamental de fondo |
| `--warm-deep` | `#B45309` | Texto de contraste en superficies cálidas |
| `--border` | `#D8EAF5` | Bordes clínicos sutiles |
| `--ink` | `#0F172A` | Texto de alta jerarquía (carbón oscuro) |
| `--muted` | `#475569` | Texto secundario y etiquetas |
| `--success` | `#16A34A` | Validación aprobada, citas confirmadas |
| `--success-bg` | `#DCFCE7` | Fondo de estado confirmado / pack listo |
| `--danger` | `#DC2626` | Bloqueos de agenda, rechazos, alertas |
| `--danger-bg` | `#FEE2E2` | Fondo de alertas y chips de días bloqueados |

---

## 3. Tipografía
- **Títulos y Encabezados (`--font-heading`)**: `'Playfair Display', Georgia, serif`
  - Pesos: 600, 700.
  - Aporte: Elegancia humana, calidez médica, autoridad clínica tradicional.
- **Cuerpo y Controles (`--font-body`)**: `'Plus Jakarta Sans', system-ui, sans-serif`
  - Pesos: 400, 500, 600, 700.
  - Aporte: Legibilidad técnica, alta definición en formularios y tiempos de calendario.

---

## 4. Filosofía de Movimiento e Ingeniería UI (Emil Kowalski)
- **Easings**:
  - Salidas naturales: `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`).
  - Movimientos entre pantallas: `cubic-bezier(0.77, 0, 0.175, 1)` (`--ease-in-out`).
- **Feedback táctil**: Todos los botones y tarjetas interactivas responden al click con `transform: scale(0.97)` a `160ms`.
- **Hero Entrance**: Entrada única controlada al cargar la página sin saltos bruscos.
- **Microinteracciones en Hover**: Aisladas con `@media (hover: hover) and (pointer: fine)` para no disparar falsos hovers en móviles.
- **Accesibilidad**: Respeto estricto a `@media (prefers-reduced-motion: reduce)` anulando transformaciones y tiempos de espera.

---

## 5. Auditoría Anti-Patrones IA (Anti-Slop)
- ❌ **Sin gradientes violetas/azules genéricos**: Uso exclusivo de celestes clínicos puros y superficies cálidas.
- ❌ **Sin Bento Grids forzados**: Grid adaptativo de 2 o 3 columnas según el idioma y los servicios reales.
- ❌ **Sin botones píldora indiscriminados**: Radios calculados (`8px` en botones, `12px` en tarjetas, `16px` en contenedores maestros).
- ❌ **Sin copys genéricos**: Lenguaje clínico exacto formulado según la práctica de la Psic. Fátima Escudero.
- ❌ **Sin enlaces ni rastros de administración en la vista pública**: Aislamiento total de `/admin` y `login.html`.
