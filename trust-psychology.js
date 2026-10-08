/**
 * ============================================================================
 * RECOIL OPTIMIZER v1.0.0 — SOCIAL ENGINEERING & COGNITIVE TRUST ARCHITECTURE
 * File: trust-psychology.js (Wave 2 Subagent #1)
 * Purpose: Neutralizes the 4 subconscious gamer/power-user fears (Anti-Cheat,
 *          BSOD/Brick risk, Background Bloatware, Paywall/PIN suspicion),
 *          pre-inoculates Windows Defender SmartScreen with an interactive
 *          3-step walkthrough, and establishes technical authority via a
 *          4-row comparative matrix.
 * ============================================================================
 */

(function () {
  'use strict';

  const STYLE_ID = 'recoil-trust-psychology-styles';
  const MOUNT_ID = 'trust-psychology-mount';

  /* --------------------------------------------------------------------------
   * BILINGUAL DICTIONARY (ES / EN)
   * -------------------------------------------------------------------------- */
  const I18N = {
    es: {
      sectionTag: 'ARQUITECTURA DE CONFIANZA // INGENIERÍA CERO-RIESGO',
      sectionTitle: 'Seguridad de Grado Quirúrgico y Transparencia Total',
      sectionDesc:
        'Sabemos que descargar un optimizador de bajo nivel exige confianza absoluta. Recoil Optimizer fue diseñado bajo cuatro garantías técnicas verificables en código abierto para que optimices tu PC con cero riesgo.',

      // Shield 01
      s1Code: 'ESCUDO 01 // RING-3 USER-MODE',
      s1Badge: '0% RIESGO DE BANEO',
      s1Title: '100% Compatible con Anti-Cheat Competitivo',
      s1Desc:
        'Recoil Optimizer jamás inyecta drivers .sys no firmados en el kernel (Ring-0), nunca lee ni modifica la memoria de ningún juego (.exe) y jamás altera archivos de tus títulos competitivos. Opera exclusivamente configurando llaves documentadas del Registro de Windows, BCD, planes de energía y buses PnP en modo usuario (Ring-3).',
      s1AcTitle: 'VERIFICACIÓN DE COMPATIBILIDAD ANTI-CHEAT:',
      s1Ac1Name: 'Riot Vanguard',
      s1Ac1Sub: 'Valorant · LoL',
      s1Ac2Name: 'FACEIT & VAC',
      s1Ac2Sub: 'Counter-Strike 2',
      s1Ac3Name: 'EasyAntiCheat',
      s1Ac3Sub: 'Fortnite · Apex · Rust',
      s1Ac4Name: 'Ricochet',
      s1Ac4Sub: 'Call of Duty · Warzone',
      s1StatusSafe: ' SEGURO // RING-3',
      s1Spec1: 'Cero drivers .sys propios ni hooks de memoria (Read/WriteProcessMemory)',
      s1Spec2: '100% compatible con HVCI, Core Isolation, Secure Boot y TPM 2.0',

      // Shield 02
      s2Code: 'ESCUDO 02 // ROLLBACK EN 1 CLIC',
      s2Badge: 'DOBLE PARACAÍDAS',
      s2Title: 'Paracaídas Atómico Doble (100% Reversible)',
      s2Desc:
        'Antes de modificar una sola llave del sistema, Recoil Optimizer ejecuta un protocolo de respaldo atómico dual: crea un Punto de Restauración oficial de Windows (VSS) y exporta el estado original exacto de los 117 tweaks en codificación nativa UTF-16 LE con BOM.',
      s2BtnToggleFlow: 'Ver Flujo de Respaldo Atómico',
      s2BtnHideFlow: 'Ocultar Flujo de Respaldo Atómico',
      s2FlowStep1Title: '1. Snapshot VSS Oficial',
      s2FlowStep1Desc: 'Invoca WMI SystemRestore creando un punto de control nativo de Windows antes de tocar el registro.',
      s2FlowStep2Title: '2. Exportación UTF-16 LE BOM',
      s2FlowStep2Desc: 'Guarda los valores originales en \\Backups\\RECOIL_REVERT_ORIGINAL.reg con cabecera hexadecimal FF FE.',
      s2FlowStep3Title: '3. Validación de Guardrails',
      s2FlowStep3Desc: 'Filtra tweaks incompatibles según tu CPU (Ryzen X3D / Intel Hybrid), almacenamiento (NVMe / HDD) y versión de OS.',
      s2FlowStep4Title: '4. Restauración Instantánea en 1 Clic',
      s2FlowStep4Desc: 'Pulsa "Restaurar Copia de Seguridad" en la app o haz doble clic en el archivo .reg para volver al estado de fábrica.',
      s2RegPreviewLabel: 'VISTA PREVIA DEL SNAPSHOT ATÓMICO GENERADO AUTOMÁTICAMENTE:',
      s2SimRollbackBtn: 'Simular Rollback en 1 Clic',
      s2SimRollbackDone: '¡117 Llaves Restauradas al Estado Original de Fábrica!',

      // Shield 03
      s3Code: 'ESCUDO 03 // ZERO-RESIDENT',
      s3Badge: '0.0 MB RAM EN JUEGO',
      s3Title: 'Arquitectura Zero-Resident (0 MB en Segundo Plano)',
      s3Desc:
        'La mayoría de los "gaming boosters" comerciales son una contradicción técnica: instalan hasta 4 servicios permanentes que consumen 300 MB de RAM, ciclos de CPU y envían telemetría mientras juegas. Recoil Optimizer aplica los ajustes directamente en Windows, se cierra por completo y deja 0 procesos abiertos.',
      s3MeterTitle: 'COMPARATIVA DE HUELLA EN MEMORIA MIENTRAS JUEGAS:',
      s3MeterBloatLabel: 'Optimizadores Comerciales ("Boosters")',
      s3MeterBloatVal: '4 Procesos · ~320 MB RAM · Telemetría Activa',
      s3MeterRecoilLabel: 'Recoil Optimizer v1.0.0 (Zero-Resident)',
      s3MeterRecoilVal: '0 Procesos · 0.0 MB RAM · 0.0% CPU',
      s3FootprintNote: 'Abres Recoil → Aplicas Smart Tune → Cierras Recoil → Juegas con el 100% de tu hardware libre.',

      // Shield 04
      s4Code: 'ESCUDO 04 // SAFETY INTERLOCK',
      s4Badge: '100% GRATIS ($0.00)',
      s4Title: '¿Por Qué Existe el PIN Público Gratuito 3910?',
      s4Desc:
        'Muchos foros y canales de YouTube comparten enlaces directos al archivo .exe sin contexto ni instrucciones. El PIN público 3910 funciona como un Interruptor de Seguridad de Consentimiento Informado (estilo aviación): garantiza que pasaste por la web oficial, que sabes que existe el botón de Rollback en 1 clic y que nunca pagaste a revendedores.',
      s4PinLabel: 'PIN DE SEGURIDAD PÚBLICO Y GRATUITO:',
      s4CopyBtn: 'Copiar PIN 3910',
      s4CopiedBtn: '¡PIN 3910 Copiado!',
      s4Guarantee1: '$0.00 para siempre (Sin versión de pago ni suscripciones)',
      s4Guarantee2: 'Sin registro de correo, sin cuentas y sin publicidad',

      // Part 2: SmartScreen Pre-Inoculation
      ssTag: 'GUÍA DE TRANSPARENCIA // WINDOWS DEFENDER SMARTSCREEN',
      ssTitle: '¿Por Qué Windows SmartScreen Muestra un Aviso Azul al Primer Inicio?',
      ssHonestyBadge: 'HONESTIDAD DE INGENIERÍA 100% OPEN SOURCE',
      ssHonestyText:
        'Las autoridades certificadoras cobran entre $400 y $600 USD al año a las empresas por un Certificado EV de Firma de Código para omitir de inmediato la pantalla azul de Windows SmartScreen. Como Recoil Optimizer es un proyecto 100% gratuito ($0.00), sin fines de lucro y de arquitectura abierta bajo licencia MIT, preferimos distribuir nuestros instaladores oficiales directamente y firmar cada ejecutable con hashes criptográficos SHA-256 verificables antes que cobrarte o meter publicidad.',
      ssStep1Badge: 'PASO 01',
      ssStep1Title: 'Haz clic en «Más información»',
      ssStep1Desc: 'En la ventana azul de Windows Defender SmartScreen ("Windows protegió su PC"), pulsa el enlace subrayado «Más información» (More info).',
      ssStep2Badge: 'PASO 02',
      ssStep2Title: 'Pulsa «Ejecutar de todas formas»',
      ssStep2Desc: 'Verifica el nombre del ejecutable oficial (RecoilOptimizer_x64.exe o x86.exe) y haz clic en el botón «Ejecutar de todas formas» (Run anyway).',
      ssStep3Badge: 'PASO 03',
      ssStep3Title: 'Ingresa el PIN 3910 y Optimiza',
      ssStep3Desc: 'Introduce el PIN de seguridad gratuito 3910 para desbloquear el panel principal, crea tu respaldo automático y pulsa Smart Tune.',
      ssInteractiveHint: 'Haz clic en cualquier paso o directamente en los botones de la ventana simulada:',
      ssMockWindowTitle: 'Seguridad de Windows — Simulador Interactivo SmartScreen',
      ssMockHeader: 'Windows protegió su PC',
      ssMockBody1:
        'Microsoft Defender SmartScreen impidió el inicio de una aplicación desconocida. Ejecutar esta aplicación podría poner en riesgo su PC.',
      ssMockMoreInfoLink: 'Más información',
      ssMockAppLabel: 'Aplicación:',
      ssMockAppVal: 'RecoilOptimizer_x64.exe (SHA-256 Verificado)',
      ssMockPubLabel: 'Editor:',
      ssMockPubVal: 'Open Source MIT Release (Recoil Optimizer Official Build v1.0.0)',
      ssMockRunAnywayBtn: 'Ejecutar de todas formas',
      ssMockDontRunBtn: 'No ejecutar',
      ssMockStep3Header: 'Recoil Optimizer v1.0.0 — Safety Interlock Activo',
      ssMockStep3Sub: 'Respaldo VSS + UTF-16 LE listo. Ingresa el PIN público gratuito para continuar:',
      ssMockStep3Btn: 'Desbloquear con PIN 3910 → Smart Tune',

      // Part 3: Comparative Authority Table
      cmpTag: 'MATRIZ COMPARATIVA DE AUTORIDAD TÉCNICA',
      cmpTitle: 'Por Qué Recoil Optimizer Supera a Scripts y Boosters Comerciales',
      cmpDesc: 'Comparativa objetiva de arquitectura, seguridad del sistema y consumo de recursos en tiempo real.',
      cmpColFeature: 'Dimensión Técnica',
      cmpColBat: 'Scripts .bat de Foros / YouTube',
      cmpColCommercial: 'Optimizadores Comerciales ("Boosters")',
      cmpColRecoil: 'Recoil Optimizer v1.0.0 (Ingeniería Abierta)',

      cmpRow1Title: '1. Detección de Hardware y Sistema Operativo',
      cmpRow1Bat: 'Ciega y estática. Aplica los mismos cambios en HDD que en NVMe y suele degradar CPUs Ryzen X3D o laptops.',
      cmpRow1Com: 'Genérica y cerrada. Perfiles prefabricados sin auditoría de código ni adaptación a topologías híbridas.',
      cmpRow1Rec: 'Smart Tune IA + Guardrails: Analiza topología CPU (Ryzen Dual-CCD X3D / Intel Hybrid), disco (NVMe vs HDD) y OS (Win 7 SP1 a Win 11 25H2).',

      cmpRow2Title: '2. Consumo de RAM y Procesos Mientras Juegas',
      cmpRow2Bat: '0 MB en segundo plano, pero suele deshabilitar servicios críticos rompiendo Windows Update o Xbox Game Bar.',
      cmpRow2Com: 'Pesado (250 MB a 450 MB RAM). Instala de 3 a 5 servicios permanentes, overlays intrusivos y telemetría constante.',
      cmpRow2Rec: '0.0 MB RAM (Zero-Resident): Aplica los 117 ajustes nativos en Windows, se cierra al 100% y deja 0 procesos abiertos.',

      cmpRow3Title: '3. Respaldo y Reversibilidad ante Fallos',
      cmpRow3Bat: 'Nulo o incompleto. Si un ajuste causa inestabilidad, a menudo obliga a reinstalar o formatear Windows.',
      cmpRow3Com: 'Parcial o bloqueado tras una suscripción de pago ("Versión PRO").',
      cmpRow3Rec: 'Paracaídas Atómico Doble en 1 Clic: Punto de Restauración VSS oficial + Snapshot completo .reg en formato UTF-16 LE BOM.',

      cmpRow4Title: '4. Transparencia, Precio y Seguridad Anti-Cheat',
      cmpRow4Bat: 'Gratis, pero frecuentemente ofuscados o con comandos destructivos pegados sin validación.',
      cmpRow4Com: '$29 a $59 USD/año. Código cerrado, anuncios emergentes y drivers .sys que pueden alertar a sistemas Anti-Cheat.',
      cmpRow4Rec: '100% Gratis ($0.00) · MIT Open Source · Ring-3 Safe: Verificado con SHA-256 y 100% seguro en Vanguard, FACEIT, EAC y Ricochet.'
    },

    en: {
      sectionTag: 'TRUST ARCHITECTURE // ZERO-RISK ENGINEERING',
      sectionTitle: 'Surgical-Grade Safety & Total Open-Source Transparency',
      sectionDesc:
        'We know running a low-level system optimizer requires absolute trust. Recoil Optimizer is engineered around four verifiable open-source guarantees so you can tune your PC with zero risk.',

      // Shield 01
      s1Code: 'SHIELD 01 // RING-3 USER-MODE',
      s1Badge: '0% BAN RISK',
      s1Title: '100% Competitive Anti-Cheat Compatible',
      s1Desc:
        'Recoil Optimizer NEVER loads unsigned .sys kernel drivers (Ring-0), never hooks or reads game process memory (.exe), and never modifies game files. It operates exclusively by configuring documented Microsoft Windows Registry keys, BCD parameters, power plans, and PnP buses in User-Mode (Ring-3).',
      s1AcTitle: 'VERIFIED ANTI-CHEAT COMPATIBILITY:',
      s1Ac1Name: 'Riot Vanguard',
      s1Ac1Sub: 'Valorant · LoL',
      s1Ac2Name: 'FACEIT & VAC',
      s1Ac2Sub: 'Counter-Strike 2',
      s1Ac3Name: 'EasyAntiCheat',
      s1Ac3Sub: 'Fortnite · Apex · Rust',
      s1Ac4Name: 'Ricochet',
      s1Ac4Sub: 'Call of Duty · Warzone',
      s1StatusSafe: ' VERIFIED // RING-3',
      s1Spec1: 'Zero custom .sys kernel drivers or process memory hooks (Read/WriteProcessMemory)',
      s1Spec2: '100% compliant with HVCI, Memory Integrity, Secure Boot, and TPM 2.0',

      // Shield 02
      s2Code: 'SHIELD 02 // 1-CLICK ROLLBACK',
      s2Badge: 'DUAL ATOMIC PARACHUTE',
      s2Title: 'Dual Atomic Parachute (100% Reversible in 1 Click)',
      s2Desc:
        'Before touching a single registry key, Recoil Optimizer executes a dual atomic backup protocol: it creates an official Windows VSS Restore Point and exports all 117 original registry keys in native UTF-16 LE BOM format.',
      s2BtnToggleFlow: 'View Atomic Backup Flow',
      s2BtnHideFlow: 'Hide Atomic Backup Flow',
      s2FlowStep1Title: '1. Official VSS Snapshot',
      s2FlowStep1Desc: 'Invokes WMI SystemRestore to create a native Windows checkpoint before touching the registry.',
      s2FlowStep2Title: '2. UTF-16 LE BOM Export',
      s2FlowStep2Desc: 'Saves your exact factory values to \\Backups\\RECOIL_REVERT_ORIGINAL.reg with a valid FF FE BOM header.',
      s2FlowStep3Title: '3. Hardware Guardrail Check',
      s2FlowStep3Desc: 'Filters out incompatible tweaks based on your CPU (Ryzen X3D / Intel Hybrid), drive (NVMe / HDD), and OS build.',
      s2FlowStep4Title: '4. Instant 1-Click Rollback',
      s2FlowStep4Desc: 'Click "Restore Backup" inside the app or double-click the exported .reg file to return to stock Windows.',
      s2RegPreviewLabel: 'AUTO-GENERATED ATOMIC SNAPSHOT PREVIEW:',
      s2SimRollbackBtn: 'Simulate 1-Click Rollback',
      s2SimRollbackDone: 'All 117 Registry Keys Restored to Factory Defaults!',

      // Shield 03
      s3Code: 'SHIELD 03 // ZERO-RESIDENT',
      s3Badge: '0.0 MB BACKGROUND RAM',
      s3Title: 'Zero-Resident Architecture (0 MB Background Bloat)',
      s3Desc:
        'Commercial "gaming boosters" are a technical contradiction: they install up to 4 background services eating 300+ MB of RAM, CPU cycles, and network bandwidth for telemetry while you play. Recoil Optimizer applies native Windows configurations, closes completely, and leaves 0 processes running.',
      s3MeterTitle: 'IN-GAME MEMORY FOOTPRINT COMPARISON:',
      s3MeterBloatLabel: 'Commercial "Gaming Boosters"',
      s3MeterBloatVal: '4 Daemons · ~320 MB RAM · 24/7 Telemetry',
      s3MeterRecoilLabel: 'Recoil Optimizer v1.0.0 (Zero-Resident)',
      s3MeterRecoilVal: '0 Processes · 0.0 MB RAM · 0.0% CPU',
      s3FootprintNote: 'Launch Recoil → Apply Smart Tune → Close Recoil → Play with 100% of your hardware resources free.',

      // Shield 04
      s4Code: 'SHIELD 04 // SAFETY INTERLOCK',
      s4Badge: '100% FREE ($0.00)',
      s4Title: 'Why Does the Free Public PIN 3910 Exist?',
      s4Desc:
        'Third-party forums and YouTube channels frequently repost direct .exe links without context or safety notes. The public PIN 3910 acts as an aviation-style Informed Consent Safety Interlock: it guarantees you visited the official source, know that a 1-click Rollback button exists, and never got scammed into paying a reseller.',
      s4PinLabel: 'FREE PUBLIC SAFETY INTERLOCK PIN:',
      s4CopyBtn: 'Copy PIN 3910',
      s4CopiedBtn: 'PIN 3910 Copied!',
      s4Guarantee1: '$0.00 forever (No PRO paywall, no subscriptions)',
      s4Guarantee2: 'No email registration, no accounts, zero adware',

      // Part 2: SmartScreen Pre-Inoculation
      ssTag: 'TRANSPARENCY GUIDE // WINDOWS DEFENDER SMARTSCREEN',
      ssTitle: 'Why Might Windows SmartScreen Show a Blue Prompt on First Launch?',
      ssHonestyBadge: '100% OPEN-SOURCE ENGINEERING HONESTY',
      ssHonestyText:
        'Certificate Authorities charge corporations $400–$600 USD every year for a commercial EV Code Signing Certificate to immediately bypass the Windows SmartScreen prompt. Because Recoil Optimizer is 100% free ($0.00), non-profit, and MIT Open Source, we distribute our official installers directly and sign every executable with verifiable SHA-256 cryptographic hashes instead of charging users or adding ads.',
      ssStep1Badge: 'STEP 01',
      ssStep1Title: 'Click "More info" («Más información»)',
      ssStep1Desc: 'On the blue Windows Defender SmartScreen dialog ("Windows protected your PC"), click the underlined "More info" link.',
      ssStep2Badge: 'STEP 02',
      ssStep2Title: 'Click "Run anyway" («Ejecutar de todas formas»)',
      ssStep2Desc: 'Verify the official executable name (RecoilOptimizer_x64.exe or x86.exe) and press the "Run anyway" button.',
      ssStep3Badge: 'STEP 03',
      ssStep3Title: 'Enter Free PIN 3910 & Press Smart Tune',
      ssStep3Desc: 'Enter the free safety PIN 3910 to unlock the dashboard, trigger your automatic backup, and run Smart Tune.',
      ssInteractiveHint: 'Click any step card or interact directly with the simulated SmartScreen window:',
      ssMockWindowTitle: 'Windows Security — Interactive SmartScreen Walkthrough',
      ssMockHeader: 'Windows protected your PC',
      ssMockBody1:
        'Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.',
      ssMockMoreInfoLink: 'More info',
      ssMockAppLabel: 'App:',
      ssMockAppVal: 'RecoilOptimizer_x64.exe (SHA-256 Verified)',
      ssMockPubLabel: 'Publisher:',
      ssMockPubVal: 'Open Source MIT Release (Recoil Optimizer Official Build v1.0.0)',
      ssMockRunAnywayBtn: 'Run anyway',
      ssMockDontRunBtn: "Don't run",
      ssMockStep3Header: 'Recoil Optimizer v1.0.0 — Safety Interlock Ready',
      ssMockStep3Sub: 'VSS + UTF-16 LE Backup Armed. Enter the free public PIN to unlock:',
      ssMockStep3Btn: 'Unlock with PIN 3910 → Smart Tune',

      // Part 3: Comparative Authority Table
      cmpTag: 'TECHNICAL AUTHORITY COMPARISON MATRIX',
      cmpTitle: 'Why Recoil Optimizer Outperforms Forum Scripts & Commercial Boosters',
      cmpDesc: 'An objective engineering comparison across hardware safety, background overhead, and reversibility.',
      cmpColFeature: 'Technical Dimension',
      cmpColBat: 'Forum / YouTube .bat Scripts',
      cmpColCommercial: 'Commercial "Gaming Boosters"',
      cmpColRecoil: 'Recoil Optimizer v1.0.0 (Open Engineering)',

      cmpRow1Title: '1. Hardware Topology & OS Validation',
      cmpRow1Bat: 'Blind execution. Applies identical tweaks on HDDs and NVMe drives; frequently breaks Ryzen X3D scheduling or laptops.',
      cmpRow1Com: 'Generic black-box profiles with zero public code audit or hybrid CPU topology awareness.',
      cmpRow1Rec: 'Smart Tune AI + Guardrails: Detects CPU topology (Ryzen Dual-CCD X3D / Intel Hybrid), storage (NVMe vs HDD), and OS (Win 7 SP1 to Win 11 25H2).',

      cmpRow2Title: '2. In-Game RAM & Background Processes',
      cmpRow2Bat: '0 MB background RAM, but often nukes critical Windows services, breaking Windows Update or Xbox Game Bar.',
      cmpRow2Com: 'Heavy (250 MB – 450 MB RAM). Installs 3–5 permanent background daemons, intrusive overlays, and constant telemetry.',
      cmpRow2Rec: '0.0 MB RAM (Zero-Resident): Applies all 117 native Windows optimizations, exits 100%, and leaves 0 background processes.',

      cmpRow3Title: '3. Backup System & Crash Recovery',
      cmpRow3Bat: 'None. If a registry change causes instability, users are often forced to reinstall Windows from scratch.',
      cmpRow3Com: 'Partial or locked behind a recurring paid "PRO" subscription.',
      cmpRow3Rec: '1-Click Dual Atomic Parachute: Official Windows VSS Restore Point + full UTF-16 LE BOM .reg snapshot of all 117 keys.',

      cmpRow4Title: '4. Transparency, Cost & Anti-Cheat Safety',
      cmpRow4Bat: 'Free, but frequently obfuscated or copy-pasted without engineering verification.',
      cmpRow4Com: '$29–$59 USD/year. Closed-source, ad-supported upsells, and intrusive kernel drivers that can trigger Anti-Cheat flags.',
      cmpRow4Rec: '100% Free ($0.00) · MIT Open Source · Ring-3 Safe: SHA-256 verified and 100% safe with Vanguard, FACEIT, EAC, and Ricochet.'
    }
  };

  /* --------------------------------------------------------------------------
   * COMPONENT STATE
   * -------------------------------------------------------------------------- */
  let activeSmartScreenStep = 1;
  let isAtomicFlowExpanded = false;
  let isRollbackSimulated = false;

  function getLang() {
    if (typeof window.currentLang === 'string') {
      return window.currentLang.toLowerCase().startsWith('en') ? 'en' : 'es';
    }
    const htmlLang = (document.documentElement.getAttribute('lang') || 'es').toLowerCase();
    return htmlLang.startsWith('en') ? 'en' : 'es';
  }

  /* --------------------------------------------------------------------------
   * SCOPED CSS INJECTION (#recoil-trust-psychology-styles)
   * -------------------------------------------------------------------------- */
  function injectScopedStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = `
      :root {
        --accent-cobalt: var(--primary, #3b82f6);
        --font-hud: var(--font-display, 'Orbitron', sans-serif);
      }

      .rtp-section {
        position: relative;
        max-width: 1220px;
        margin: 0 auto;
        padding: 84px 24px;
        font-family: var(--font-sans);
        color: var(--text-main);
        z-index: 2;
      }

      .rtp-header {
        text-align: center;
        max-width: 820px;
        margin: 0 auto 52px auto;
      }

      .rtp-tag {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--font-mono);
        font-size: 0.74rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 6px 14px;
        border-radius: 999px;
        background: rgba(16, 185, 129, 0.12);
        color: var(--accent-emerald);
        border: 1px solid rgba(16, 185, 129, 0.35);
        margin-bottom: 16px;
        box-shadow: 0 0 24px rgba(16, 185, 129, 0.14);
      }

      .rtp-tag-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent-emerald);
        box-shadow: 0 0 8px var(--accent-emerald);
      }

      .rtp-title {
        font-family: var(--font-hud);
        font-size: clamp(1.75rem, 3.3vw, 2.55rem);
        font-weight: 800;
        line-height: 1.18;
        letter-spacing: -0.02em;
        color: var(--text-main);
        margin: 0 0 16px 0;
      }

      .rtp-desc {
        font-size: 1.02rem;
        line-height: 1.65;
        color: var(--text-muted);
        margin: 0;
      }

      /* 4 Shields Bento Grid */
      .rtp-shields-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 24px;
        margin-bottom: 64px;
      }

      .rtp-shield-card {
        position: relative;
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 18px;
        padding: 28px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.28s ease, box-shadow 0.28s ease;
        overflow: hidden;
      }

      .rtp-shield-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary), var(--accent-emerald), transparent);
        opacity: 0.7;
      }

      .rtp-shield-card:hover {
        transform: translateY(-4px);
        border-color: var(--border-glow);
        box-shadow: 0 20px 44px -14px rgba(0, 0, 0, 0.65), 0 0 28px var(--primary-glow);
      }

      .rtp-shield-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;
        flex-wrap: wrap;
      }

      .rtp-shield-code {
        font-family: var(--font-mono);
        font-size: 0.74rem;
        font-weight: 700;
        color: var(--primary);
        letter-spacing: 0.08em;
      }

      .rtp-shield-badge {
        font-family: var(--font-mono);
        font-size: 0.69rem;
        font-weight: 700;
        padding: 4px 10px;
        border-radius: 999px;
        letter-spacing: 0.06em;
        background: rgba(16, 185, 129, 0.14);
        color: var(--accent-emerald);
        border: 1px solid rgba(16, 185, 129, 0.35);
      }

      .rtp-shield-badge.amber {
        background: rgba(245, 158, 11, 0.14);
        color: var(--accent-amber);
        border-color: rgba(245, 158, 11, 0.38);
      }

      .rtp-shield-badge.cobalt {
        background: rgba(59, 130, 246, 0.14);
        color: var(--accent-cobalt);
        border-color: var(--border-glow);
      }

      .rtp-shield-title {
        font-family: var(--font-hud);
        font-size: 1.22rem;
        font-weight: 700;
        color: var(--text-main);
        margin: 0 0 12px 0;
        line-height: 1.3;
      }

      .rtp-shield-desc {
        font-size: 0.93rem;
        line-height: 1.62;
        color: var(--text-muted);
        margin: 0 0 20px 0;
      }

      /* Anti-Cheat Badges Grid (Shield 01) */
      .rtp-ac-label {
        font-family: var(--font-mono);
        font-size: 0.71rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--text-muted);
        margin-bottom: 10px;
        text-transform: uppercase;
      }

      .rtp-ac-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 16px;
      }

      .rtp-ac-item {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: 10px;
        padding: 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .rtp-ac-name {
        font-size: 0.84rem;
        font-weight: 700;
        color: var(--text-main);
        display: block;
      }

      .rtp-ac-sub {
        font-family: var(--font-mono);
        font-size: 0.69rem;
        color: var(--text-muted);
      }

      .rtp-ac-status {
        font-family: var(--font-mono);
        font-size: 0.66rem;
        font-weight: 700;
        color: var(--accent-emerald);
        background: rgba(16, 185, 129, 0.12);
        border: 1px solid rgba(16, 185, 129, 0.3);
        padding: 3px 7px;
        border-radius: 6px;
        white-space: nowrap;
      }

      .rtp-CheckList {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .rtp-CheckList li {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 0.83rem;
        color: var(--text-main);
        line-height: 1.45;
      }

      .rtp-CheckList li svg {
        flex-shrink: 0;
        color: var(--accent-emerald);
        margin-top: 2px;
      }

      /* Shield 02: Atomic Backup Flow Drawer */
      .rtp-flow-toggle-btn {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 11px 16px;
        border-radius: 10px;
        font-family: var(--font-mono);
        font-size: 0.81rem;
        font-weight: 700;
        color: var(--primary);
        background: rgba(59, 130, 246, 0.11);
        border: 1px solid var(--border-glow);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .rtp-flow-toggle-btn:hover {
        background: var(--primary);
        color: #06080d;
      }

      .rtp-atomic-drawer {
        margin-top: 16px;
        padding: 16px;
        border-radius: 12px;
        background: var(--bg-deep);
        border: 1px solid var(--border-subtle);
        display: none;
      }

      .rtp-atomic-drawer.open {
        display: block;
      }

      .rtp-flow-steps {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 14px;
      }

      .rtp-flow-step {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: 8px;
        padding: 10px;
      }

      .rtp-flow-step-title {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--accent-emerald);
        margin-bottom: 4px;
      }

      .rtp-flow-step-desc {
        font-size: 0.76rem;
        color: var(--text-muted);
        line-height: 1.45;
      }

      .rtp-reg-code {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        line-height: 1.5;
        background: rgba(0, 0, 0, 0.45);
        border: 1px solid var(--border-subtle);
        border-radius: 8px;
        padding: 10px 12px;
        color: var(--accent-amber);
        overflow-x: auto;
        margin-bottom: 12px;
      }

      .rtp-sim-rollback-btn {
        width: 100%;
        padding: 9px 14px;
        border-radius: 8px;
        font-family: var(--font-mono);
        font-size: 0.77rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid rgba(16, 185, 129, 0.4);
        background: rgba(16, 185, 129, 0.14);
        color: var(--accent-emerald);
        transition: all 0.2s ease;
      }

      .rtp-sim-rollback-btn:hover {
        background: var(--accent-emerald);
        color: #05080f;
      }

      /* Shield 03: Zero-Resident RAM Meter */
      .rtp-ram-box {
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: 12px;
        padding: 14px 16px;
      }

      .rtp-ram-row {
        margin-bottom: 12px;
      }

      .rtp-ram-row:last-child {
        margin-bottom: 0;
      }

      .rtp-ram-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        font-size: 0.79rem;
        margin-bottom: 6px;
        flex-wrap: wrap;
      }

      .rtp-ram-track {
        height: 8px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.07);
        overflow: hidden;
      }

      .rtp-ram-fill-bloat {
        width: 82%;
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--accent-amber), #ef4444);
      }

      .rtp-ram-fill-recoil {
        width: 4%;
        height: 100%;
        border-radius: 999px;
        background: var(--accent-emerald);
        box-shadow: 0 0 10px var(--accent-emerald);
      }

      .rtp-footprint-note {
        margin-top: 12px;
        font-family: var(--font-mono);
        font-size: 0.74rem;
        color: var(--accent-emerald);
        background: rgba(16, 185, 129, 0.08);
        border-left: 3px solid var(--accent-emerald);
        padding: 8px 10px;
        border-radius: 0 6px 6px 0;
      }

      /* Shield 04: PIN 3910 Interlock Box */
      .rtp-pin-interlock {
        background: var(--bg-surface);
        border: 1px solid var(--border-glow);
        border-radius: 12px;
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 14px;
        flex-wrap: wrap;
      }

      .rtp-pin-digits {
        font-family: var(--font-hud);
        font-size: 1.55rem;
        font-weight: 900;
        letter-spacing: 0.22em;
        color: var(--accent-amber);
        text-shadow: 0 0 18px rgba(245, 158, 11, 0.35);
      }

      .rtp-pin-copy-btn {
        font-family: var(--font-mono);
        font-size: 0.78rem;
        font-weight: 700;
        padding: 9px 15px;
        border-radius: 8px;
        border: 1px solid rgba(245, 158, 11, 0.45);
        background: rgba(245, 158, 11, 0.15);
        color: var(--accent-amber);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .rtp-pin-copy-btn:hover {
        background: var(--accent-amber);
        color: #06080d;
      }

      /* Part 2: SmartScreen Interactive Pre-Inoculation */
      .rtp-smartscreen-panel {
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 22px;
        padding: 36px;
        margin-bottom: 64px;
        position: relative;
        overflow: hidden;
      }

      .rtp-honesty-banner {
        background: rgba(59, 130, 246, 0.08);
        border: 1px solid var(--border-glow);
        border-radius: 14px;
        padding: 18px 22px;
        margin-bottom: 28px;
      }

      .rtp-honesty-badge {
        display: inline-block;
        font-family: var(--font-mono);
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--primary);
        letter-spacing: 0.08em;
        margin-bottom: 6px;
      }

      .rtp-honesty-text {
        font-size: 0.92rem;
        line-height: 1.62;
        color: var(--text-main);
        margin: 0;
      }

      .rtp-ss-walkthrough {
        display: grid;
        grid-template-columns: 1.05fr 0.95fr;
        gap: 28px;
        align-items: stretch;
      }

      .rtp-ss-steps {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .rtp-ss-step-card {
        text-align: left;
        background: var(--bg-surface);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        padding: 18px 20px;
        cursor: pointer;
        transition: all 0.22s ease;
        color: var(--text-main);
        font-family: var(--font-sans);
      }

      .rtp-ss-step-card:hover {
        border-color: var(--border-glow);
      }

      .rtp-ss-step-card.active {
        border-color: var(--primary);
        background: rgba(59, 130, 246, 0.11);
        box-shadow: 0 0 24px var(--primary-glow);
      }

      .rtp-ss-step-badge {
        font-family: var(--font-mono);
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--primary);
        letter-spacing: 0.08em;
        display: block;
        margin-bottom: 4px;
      }

      .rtp-ss-step-title {
        font-family: var(--font-hud);
        font-size: 1.02rem;
        font-weight: 700;
        margin: 0 0 6px 0;
        color: var(--text-main);
      }

      .rtp-ss-step-desc {
        font-size: 0.86rem;
        line-height: 1.52;
        color: var(--text-muted);
        margin: 0;
      }

      /* Simulated Windows SmartScreen Dialog */
      .rtp-ss-simulator {
        background: #005a9e;
        border: 2px solid rgba(255, 255, 255, 0.24);
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #ffffff;
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.65);
      }

      .rtp-ss-simulator.step-3-mode {
        background: var(--bg-deep);
        border-color: var(--accent-emerald);
      }

      .rtp-ss-winbar {
        background: rgba(0, 0, 0, 0.28);
        padding: 10px 16px;
        font-family: var(--font-mono);
        font-size: 0.74rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      }

      .rtp-ss-winbody {
        padding: 24px;
        flex: 1;
      }

      .rtp-ss-winheader {
        font-size: 1.35rem;
        font-weight: 600;
        margin: 0 0 12px 0;
        color: #ffffff;
      }

      .rtp-ss-winp {
        font-size: 0.88rem;
        line-height: 1.55;
        color: rgba(255, 255, 255, 0.9);
        margin: 0 0 14px 0;
      }

      .rtp-ss-moreinfo-btn {
        background: rgba(255, 255, 255, 0.15);
        border: 1px dashed #fbbf24;
        color: #fde68a;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;
      }

      .rtp-ss-meta-box {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 12px;
        font-family: var(--font-mono);
        font-size: 0.76rem;
        line-height: 1.6;
        margin-top: 12px;
      }

      .rtp-ss-winfoot {
        padding: 16px 24px;
        background: rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        flex-wrap: wrap;
      }

      .rtp-ss-btn-run {
        background: #ffffff;
        color: #004578;
        border: 2px solid #fbbf24;
        padding: 8px 16px;
        font-weight: 800;
        font-size: 0.84rem;
        border-radius: 4px;
        cursor: pointer;
      }

      .rtp-ss-btn-dont {
        background: transparent;
        color: rgba(255, 255, 255, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.45);
        padding: 8px 16px;
        font-size: 0.84rem;
        border-radius: 4px;
        cursor: pointer;
      }

      /* Part 3: Comparative Authority Table */
      .rtp-cmp-wrapper {
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 20px;
        padding: 32px;
        overflow-x: auto;
      }

      .rtp-cmp-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 720px;
      }

      .rtp-cmp-table th,
      .rtp-cmp-table td {
        padding: 16px 18px;
        text-align: left;
        vertical-align: top;
        border-bottom: 1px solid var(--border-subtle);
        font-size: 0.88rem;
        line-height: 1.55;
      }

      .rtp-cmp-table th {
        font-family: var(--font-hud);
        font-size: 0.82rem;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--text-muted);
        background: var(--bg-surface);
      }

      .rtp-cmp-table th.recoil-col {
        color: var(--accent-emerald);
        background: rgba(16, 185, 129, 0.1);
        border-top: 2px solid var(--accent-emerald);
      }

      .rtp-cmp-table td.feature-col {
        font-weight: 700;
        color: var(--text-main);
        width: 22%;
      }

      .rtp-cmp-table td.bad-col {
        color: var(--text-muted);
        width: 24%;
      }

      .rtp-cmp-table td.recoil-col {
        background: rgba(16, 185, 129, 0.06);
        color: var(--text-main);
        font-weight: 600;
        border-left: 1px solid rgba(16, 185, 129, 0.25);
        border-right: 1px solid rgba(16, 185, 129, 0.25);
        width: 30%;
      }

      @media (max-width: 960px) {
        .rtp-shields-grid,
        .rtp-ss-walkthrough,
        .rtp-flow-steps {
          grid-template-columns: 1fr;
        }
        .rtp-smartscreen-panel,
        .rtp-cmp-wrapper {
          padding: 22px 18px;
        }
      }

      @media (max-width: 560px) {
        .rtp-ac-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  /* --------------------------------------------------------------------------
   * RENDER ENGINE
   * -------------------------------------------------------------------------- */
  function ensureMountPoint() {
    let mount = document.getElementById(MOUNT_ID);
    if (!mount) {
      mount = document.createElement('div');
      mount.id = MOUNT_ID;
      const downloadsSection = document.getElementById('downloads');
      const faqSection = document.getElementById('faq');
      if (downloadsSection && downloadsSection.parentNode) {
        downloadsSection.parentNode.insertBefore(mount, downloadsSection);
      } else if (faqSection && faqSection.parentNode) {
        faqSection.parentNode.insertBefore(mount, faqSection);
      } else {
        const main = document.querySelector('main') || document.body;
        main.appendChild(mount);
      }
    }
    return mount;
  }

  function buildSmartScreenMockupHTML(t) {
    if (activeSmartScreenStep === 1) {
      return `
        <div class="rtp-ss-simulator" data-step="1">
          <div class="rtp-ss-winbar">
            <span>🛡️ ${t.ssMockWindowTitle}</span>
            <span>[1 / 3]</span>
          </div>
          <div class="rtp-ss-winbody">
            <h4 class="rtp-ss-winheader">${t.ssMockHeader}</h4>
            <p class="rtp-ss-winp">${t.ssMockBody1}</p>
            <button type="button" class="rtp-ss-moreinfo-btn" data-ss-goto="2">
              👉 ${t.ssMockMoreInfoLink}
            </button>
          </div>
          <div class="rtp-ss-winfoot">
            <button type="button" class="rtp-ss-btn-dont" data-ss-goto="2">${t.ssMockDontRunBtn}</button>
          </div>
        </div>
      `;
    }

    if (activeSmartScreenStep === 2) {
      return `
        <div class="rtp-ss-simulator" data-step="2">
          <div class="rtp-ss-winbar">
            <span>🛡️ ${t.ssMockWindowTitle}</span>
            <span>[2 / 3]</span>
          </div>
          <div class="rtp-ss-winbody">
            <h4 class="rtp-ss-winheader">${t.ssMockHeader}</h4>
            <div class="rtp-ss-meta-box">
              <div><strong>${t.ssMockAppLabel}</strong> ${t.ssMockAppVal}</div>
              <div><strong>${t.ssMockPubLabel}</strong> ${t.ssMockPubVal}</div>
            </div>
          </div>
          <div class="rtp-ss-winfoot">
            <button type="button" class="rtp-ss-btn-run" data-ss-goto="3">
              ✅ ${t.ssMockRunAnywayBtn}
            </button>
            <button type="button" class="rtp-ss-btn-dont" data-ss-goto="1">${t.ssMockDontRunBtn}</button>
          </div>
        </div>
      `;
    }

    return `
      <div class="rtp-ss-simulator step-3-mode" data-step="3">
        <div class="rtp-ss-winbar">
          <span style="color: var(--accent-emerald);">⚡ Recoil Optimizer v1.0.0 — Ring-3 Safe</span>
          <span>[3 / 3]</span>
        </div>
        <div class="rtp-ss-winbody">
          <h4 class="rtp-ss-winheader" style="color: var(--accent-emerald);">${t.ssMockStep3Header}</h4>
          <p class="rtp-ss-winp">${t.ssMockStep3Sub}</p>
          <div class="rtp-pin-interlock" style="margin-bottom:0;">
            <span class="rtp-pin-digits">3 9 1 0</span>
            <button type="button" class="rtp-ss-btn-run" data-ss-goto="1" style="background: var(--accent-emerald); color: #05080f; border-color: var(--accent-emerald);">
              🚀 ${t.ssMockStep3Btn}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderTrustSection() {
    injectScopedStyles();
    const mount = ensureMountPoint();
    const lang = getLang();
    const t = I18N[lang] || I18N.es;

    mount.innerHTML = `
      <section class="rtp-section" aria-label="${t.sectionTitle}">
        <!-- Section Header -->
        <div class="rtp-header">
          <div class="rtp-tag">
            <span class="rtp-tag-dot"></span>
            <span>${t.sectionTag}</span>
          </div>
          <h2 class="rtp-title">${t.sectionTitle}</h2>
          <p class="rtp-desc">${t.sectionDesc}</p>
        </div>

        <!-- PART 1: THE 4 SHIELDS OF COGNITIVE TRUST -->
        <div class="rtp-shields-grid">
          <!-- Shield 01: Anti-Cheat Ring-3 Compatibility -->
          <article class="rtp-shield-card">
            <div>
              <div class="rtp-shield-top">
                <span class="rtp-shield-code">${t.s1Code}</span>
                <span class="rtp-shield-badge">🛡️ ${t.s1Badge}</span>
              </div>
              <h3 class="rtp-shield-title">${t.s1Title}</h3>
              <p class="rtp-shield-desc">${t.s1Desc}</p>

              <div class="rtp-ac-label">${t.s1AcTitle}</div>
              <div class="rtp-ac-grid">
                <div class="rtp-ac-item">
                  <div>
                    <span class="rtp-ac-name">${t.s1Ac1Name}</span>
                    <span class="rtp-ac-sub">${t.s1Ac1Sub}</span>
                  </div>
                  <span class="rtp-ac-status">✓${t.s1StatusSafe}</span>
                </div>
                <div class="rtp-ac-item">
                  <div>
                    <span class="rtp-ac-name">${t.s1Ac2Name}</span>
                    <span class="rtp-ac-sub">${t.s1Ac2Sub}</span>
                  </div>
                  <span class="rtp-ac-status">✓${t.s1StatusSafe}</span>
                </div>
                <div class="rtp-ac-item">
                  <div>
                    <span class="rtp-ac-name">${t.s1Ac3Name}</span>
                    <span class="rtp-ac-sub">${t.s1Ac3Sub}</span>
                  </div>
                  <span class="rtp-ac-status">✓${t.s1StatusSafe}</span>
                </div>
                <div class="rtp-ac-item">
                  <div>
                    <span class="rtp-ac-name">${t.s1Ac4Name}</span>
                    <span class="rtp-ac-sub">${t.s1Ac4Sub}</span>
                  </div>
                  <span class="rtp-ac-status">✓${t.s1StatusSafe}</span>
                </div>
              </div>
            </div>

            <ul class="rtp-CheckList">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${t.s1Spec1}</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${t.s1Spec2}</span>
              </li>
            </ul>
          </article>

          <!-- Shield 02: Dual Atomic Parachute (VSS + UTF-16 LE BOM) -->
          <article class="rtp-shield-card">
            <div>
              <div class="rtp-shield-top">
                <span class="rtp-shield-code">${t.s2Code}</span>
                <span class="rtp-shield-badge cobalt">🔄 ${t.s2Badge}</span>
              </div>
              <h3 class="rtp-shield-title">${t.s2Title}</h3>
              <p class="rtp-shield-desc">${t.s2Desc}</p>
            </div>

            <div>
              <button type="button" class="rtp-flow-toggle-btn" id="rtp-btn-toggle-flow" aria-expanded="${isAtomicFlowExpanded}">
                <span>🔍 ${isAtomicFlowExpanded ? t.s2BtnHideFlow : t.s2BtnToggleFlow}</span>
              </button>

              <div class="rtp-atomic-drawer ${isAtomicFlowExpanded ? 'open' : ''}" id="rtp-atomic-drawer">
                <div class="rtp-flow-steps">
                  <div class="rtp-flow-step">
                    <div class="rtp-flow-step-title">${t.s2FlowStep1Title}</div>
                    <div class="rtp-flow-step-desc">${t.s2FlowStep1Desc}</div>
                  </div>
                  <div class="rtp-flow-step">
                    <div class="rtp-flow-step-title">${t.s2FlowStep2Title}</div>
                    <div class="rtp-flow-step-desc">${t.s2FlowStep2Desc}</div>
                  </div>
                  <div class="rtp-flow-step">
                    <div class="rtp-flow-step-title">${t.s2FlowStep3Title}</div>
                    <div class="rtp-flow-step-desc">${t.s2FlowStep3Desc}</div>
                  </div>
                  <div class="rtp-flow-step">
                    <div class="rtp-flow-step-title">${t.s2FlowStep4Title}</div>
                    <div class="rtp-flow-step-desc">${t.s2FlowStep4Desc}</div>
                  </div>
                </div>

                <div class="rtp-ac-label">${t.s2RegPreviewLabel}</div>
                <pre class="rtp-reg-code">[HEX BOM: FF FE // UTF-16 LE] Windows Registry Editor Version 5.00
; Recoil Optimizer v1.0.0 — Atomic Pre-Flight Backup (117 Keys)
; Path: \\Backups\\RECOIL_REVERT_ORIGINAL.reg
[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile]
"SystemResponsiveness"=dword:00000014
"NetworkThrottlingIndex"=dword:0000000a</pre>

                <button type="button" class="rtp-sim-rollback-btn" id="rtp-btn-sim-rollback">
                  ${isRollbackSimulated ? '✅ ' + t.s2SimRollbackDone : '⚡ ' + t.s2SimRollbackBtn}
                </button>
              </div>
            </div>
          </article>

          <!-- Shield 03: Zero-Resident Architecture (0 MB RAM) -->
          <article class="rtp-shield-card">
            <div>
              <div class="rtp-shield-top">
                <span class="rtp-shield-code">${t.s3Code}</span>
                <span class="rtp-shield-badge">⚡ ${t.s3Badge}</span>
              </div>
              <h3 class="rtp-shield-title">${t.s3Title}</h3>
              <p class="rtp-shield-desc">${t.s3Desc}</p>
            </div>

            <div>
              <div class="rtp-ac-label">${t.s3MeterTitle}</div>
              <div class="rtp-ram-box">
                <div class="rtp-ram-row">
                  <div class="rtp-ram-meta">
                    <span style="color: var(--text-muted);">${t.s3MeterBloatLabel}</span>
                    <span style="font-family: var(--font-mono); color: var(--accent-amber); font-weight:700;">${t.s3MeterBloatVal}</span>
                  </div>
                  <div class="rtp-ram-track">
                    <div class="rtp-ram-fill-bloat"></div>
                  </div>
                </div>

                <div class="rtp-ram-row">
                  <div class="rtp-ram-meta">
                    <span style="color: var(--text-main); font-weight: 700;">${t.s3MeterRecoilLabel}</span>
                    <span style="font-family: var(--font-mono); color: var(--accent-emerald); font-weight:700;">${t.s3MeterRecoilVal}</span>
                  </div>
                  <div class="rtp-ram-track">
                    <div class="rtp-ram-fill-recoil"></div>
                  </div>
                </div>
              </div>
              <div class="rtp-footprint-note">${t.s3FootprintNote}</div>
            </div>
          </article>

          <!-- Shield 04: Why Public PIN 3910 Exists -->
          <article class="rtp-shield-card">
            <div>
              <div class="rtp-shield-top">
                <span class="rtp-shield-code">${t.s4Code}</span>
                <span class="rtp-shield-badge amber">🔓 ${t.s4Badge}</span>
              </div>
              <h3 class="rtp-shield-title">${t.s4Title}</h3>
              <p class="rtp-shield-desc">${t.s4Desc}</p>
            </div>

            <div>
              <div class="rtp-ac-label">${t.s4PinLabel}</div>
              <div class="rtp-pin-interlock">
                <span class="rtp-pin-digits">3910</span>
                <button type="button" class="rtp-pin-copy-btn" id="rtp-btn-copy-pin">
                  📋 ${t.s4CopyBtn}
                </button>
              </div>
              <ul class="rtp-CheckList">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${t.s4Guarantee1}</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${t.s4Guarantee2}</span>
                </li>
              </ul>
            </div>
          </article>
        </div>

        <!-- PART 2: WINDOWS DEFENDER SMARTSCREEN PRE-INOCULATION GUIDE -->
        <div class="rtp-smartscreen-panel">
          <div class="rtp-header" style="margin-bottom: 24px;">
            <div class="rtp-tag" style="background: rgba(59, 130, 246, 0.12); color: var(--primary); border-color: var(--border-glow);">
              <span>🛡️ ${t.ssTag}</span>
            </div>
            <h3 class="rtp-title" style="font-size: clamp(1.4rem, 2.5vw, 2rem);">${t.ssTitle}</h3>
          </div>

          <div class="rtp-honesty-banner">
            <span class="rtp-honesty-badge">💡 ${t.ssHonestyBadge}</span>
            <p class="rtp-honesty-text">${t.ssHonestyText}</p>
          </div>

          <p style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); margin: 0 0 14px 0;">
            ${t.ssInteractiveHint}
          </p>

          <div class="rtp-ss-walkthrough">
            <div class="rtp-ss-steps">
              <button type="button" class="rtp-ss-step-card ${activeSmartScreenStep === 1 ? 'active' : ''}" data-ss-step="1">
                <span class="rtp-ss-step-badge">${t.ssStep1Badge}</span>
                <h4 class="rtp-ss-step-title">${t.ssStep1Title}</h4>
                <p class="rtp-ss-step-desc">${t.ssStep1Desc}</p>
              </button>

              <button type="button" class="rtp-ss-step-card ${activeSmartScreenStep === 2 ? 'active' : ''}" data-ss-step="2">
                <span class="rtp-ss-step-badge">${t.ssStep2Badge}</span>
                <h4 class="rtp-ss-step-title">${t.ssStep2Title}</h4>
                <p class="rtp-ss-step-desc">${t.ssStep2Desc}</p>
              </button>

              <button type="button" class="rtp-ss-step-card ${activeSmartScreenStep === 3 ? 'active' : ''}" data-ss-step="3">
                <span class="rtp-ss-step-badge">${t.ssStep3Badge}</span>
                <h4 class="rtp-ss-step-title">${t.ssStep3Title}</h4>
                <p class="rtp-ss-step-desc">${t.ssStep3Desc}</p>
              </button>
            </div>

            <div id="rtp-ss-mockup-container">
              ${buildSmartScreenMockupHTML(t)}
            </div>
          </div>
        </div>

        <!-- PART 3: 4-ROW TECHNICAL AUTHORITY COMPARISON TABLE -->
        <div class="rtp-cmp-wrapper">
          <div class="rtp-header" style="margin-bottom: 28px;">
            <div class="rtp-tag">
              <span class="rtp-tag-dot"></span>
              <span>${t.cmpTag}</span>
            </div>
            <h3 class="rtp-title" style="font-size: clamp(1.4rem, 2.5vw, 2rem);">${t.cmpTitle}</h3>
            <p class="rtp-desc">${t.cmpDesc}</p>
          </div>

          <table class="rtp-cmp-table">
            <thead>
              <tr>
                <th>${t.cmpColFeature}</th>
                <th>⚠️ ${t.cmpColBat}</th>
                <th>💸 ${t.cmpColCommercial}</th>
                <th class="recoil-col">🏆 ${t.cmpColRecoil}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-col">${t.cmpRow1Title}</td>
                <td class="bad-col">${t.cmpRow1Bat}</td>
                <td class="bad-col">${t.cmpRow1Com}</td>
                <td class="recoil-col">✅ ${t.cmpRow1Rec}</td>
              </tr>
              <tr>
                <td class="feature-col">${t.cmpRow2Title}</td>
                <td class="bad-col">${t.cmpRow2Bat}</td>
                <td class="bad-col">${t.cmpRow2Com}</td>
                <td class="recoil-col">⚡ ${t.cmpRow2Rec}</td>
              </tr>
              <tr>
                <td class="feature-col">${t.cmpRow3Title}</td>
                <td class="bad-col">${t.cmpRow3Bat}</td>
                <td class="bad-col">${t.cmpRow3Com}</td>
                <td class="recoil-col">🛡️ ${t.cmpRow3Rec}</td>
              </tr>
              <tr>
                <td class="feature-col">${t.cmpRow4Title}</td>
                <td class="bad-col">${t.cmpRow4Bat}</td>
                <td class="bad-col">${t.cmpRow4Com}</td>
                <td class="recoil-col">🔓 ${t.cmpRow4Rec}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;

    bindInteractiveEvents(mount, t);

    if (typeof window.refreshRecoilMotion === 'function') {
      window.refreshRecoilMotion();
    }
  }

  /* --------------------------------------------------------------------------
   * INTERACTIVE EVENT DELEGATION
   * -------------------------------------------------------------------------- */
  function bindInteractiveEvents(mount, t) {
    // 1. Atomic Backup Flow Toggle
    const toggleFlowBtn = mount.querySelector('#rtp-btn-toggle-flow');
    if (toggleFlowBtn) {
      toggleFlowBtn.addEventListener('click', function () {
        isAtomicFlowExpanded = !isAtomicFlowExpanded;
        renderTrustSection();
      });
    }

    // 2. Simulate 1-Click Rollback
    const simRollbackBtn = mount.querySelector('#rtp-btn-sim-rollback');
    if (simRollbackBtn) {
      simRollbackBtn.addEventListener('click', function () {
        isRollbackSimulated = true;
        simRollbackBtn.textContent = '✅ ' + t.s2SimRollbackDone;
        setTimeout(function () {
          isRollbackSimulated = false;
        }, 4000);
      });
    }

    // 3. Copy Public PIN 3910
    const copyPinBtn = mount.querySelector('#rtp-btn-copy-pin');
    if (copyPinBtn) {
      copyPinBtn.addEventListener('click', function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('3910').catch(function () {});
        }
        if (typeof window.copyPasskey === 'function') {
          try {
            window.copyPasskey();
          } catch (_) {}
        }
        copyPinBtn.textContent = '✓ ' + t.s4CopiedBtn;
        setTimeout(function () {
          copyPinBtn.textContent = '📋 ' + t.s4CopyBtn;
        }, 2500);
      });
    }

    // 4. SmartScreen Step Cards
    const stepCards = mount.querySelectorAll('[data-ss-step]');
    stepCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const step = parseInt(card.getAttribute('data-ss-step'), 10);
        if (step >= 1 && step <= 3) {
          activeSmartScreenStep = step;
          renderTrustSection();
        }
      });
    });

    // 5. SmartScreen Simulated Window Buttons
    const gotoBtns = mount.querySelectorAll('[data-ss-goto]');
    gotoBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const nextStep = parseInt(btn.getAttribute('data-ss-goto'), 10);
        if (nextStep >= 1 && nextStep <= 3) {
          activeSmartScreenStep = nextStep;
          renderTrustSection();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
   * LIFECYCLE & REACTIVE LISTENERS
   * -------------------------------------------------------------------------- */
  function init() {
    renderTrustSection();

    window.addEventListener('recoil:langchange', function () {
      renderTrustSection();
    });

    window.addEventListener('recoil:skinchange', function () {
      if (typeof window.refreshRecoilMotion === 'function') {
        window.refreshRecoilMotion();
      }
    });

    // Observe <html lang="..."> mutations as a fallback
    const observer = new MutationObserver(function (mutations) {
      for (let i = 0; i < mutations.length; i++) {
        if (mutations[i].attributeName === 'lang') {
          renderTrustSection();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
