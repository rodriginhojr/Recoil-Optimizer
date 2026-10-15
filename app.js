/**
 * Recoil Optimizer v1.0.0 — Master Web Client & Bilingual Orchestrator
 * Coordinates:
 *  - Global Bilingual State (`window.currentLang` = 'es' | 'en') & `'recoil:langchange'` CustomEvent
 *  - Advanced OS/Architecture Detection & Dual Download Routing (x64 69.0 MB / x86 63.8 MB)
 *  - Mobile Navigation Drawer Controller
 *  - Interactive 3D Hero WPF Application Replica (5 Sidebar Tabs, Live Switches, Smart Tune, AutoDriver, Rollback)
 *  - Seamless Coupling with Live Oscilloscope (`window.RecoilCanvasFX`)
 *  - Download Actions & Automated PIN 3910 Clipboard Integration
 */

// Global State initialization
window.currentLang = window.currentLang || 'es';
window.currentRecoilSkin = 'antigravity-gold';

let currentLang = window.currentLang;
let isRollbackActive = false;

// Comprehensive Bilingual Strings Dictionary (ES / EN)
const i18n = {
  es: {
    navBenchmarks: 'Telemetría',
    navTweaks: '117 Tweaks',
    navArchitecture: 'AutoDriver & Hardware',
    navOsMatrix: 'Multi-Windows',
    navTrust: 'Garantía',
    navDownloads: 'Descargas',
    navFaq: 'FAQ',
    navFeatures: 'Características',
    btnDownloadNav: 'Descargar Gratis',
    heroTag: 'SUITE DE KERNEL & BAJA LATENCIA // WINDOWS 7 A WINDOWS 11',
    heroTitle: 'Exprime cada gota de FPS y elimina el stutter en tu Windows.',
    heroSubtitle: 'Optimización de kernel y baja latencia para esports. Windows 7, 8.1, 10 y 11. Cero servicios residentes y 100% reversible.',
    btnDownloadHero: 'Descargar para Windows',
    btnExploreTweaks: 'Ver los 117 Tweaks',
    microTrust1: '100% Seguro con Vanguard / EAC / FACEIT',
    microTrust2: 'Rollback Total en 1 Clic (VSS + Registro)',
    microTrust3: '0 MB RAM en Segundo Plano',
    microTrust4: '100% Gratis & Open Source (MIT)',
    osDetectedPrefix: 'Sistema detectado:',
    osRecommendedPrefix: 'Recomendamos:',
    passkeyTag: 'PIN OFICIAL DE SEGURIDAD:',
    passkeySub: 'Requerida al abrir la app antes de la detección',
    btnCopyPin: 'Copiar PIN',
    btnCopyPinFull: 'Copiar PIN: 3910',
    passkeyExpl: 'Introduce 3910 al abrir la app para desbloquear la detección de hardware. Clave 100% gratuita para la comunidad.',
    passkeyCopied: '¡PIN oficial 3910 copiado al portapapeles!',
    downloadStartedPinCopied: '¡Descarga iniciada! El PIN gratuito 3910 fue copiado a tu portapapeles.',
    statTweaksLabel: 'Optimizaciones de Kernel',
    statTimerLabel: 'Kernel Timer NTAPI',
    statFpsLabel: 'FPS / 1% Low Boost',
    statRamLabel: 'RAM Residual en Fondo',
    wpfWindowTitle: 'Recoil Studio // RecoilOptimizer.exe',
    wpfAdminBadge: '🛡️ RING-0 / ADMIN',
    wpfProfilePill: 'PERFIL:',
    wpfScoreLabel: '❤ SALUD:',
    wpfStatusReady: 'ESTADO: SISTEMA ÓPTIMO // CONEXIÓN RING-3 SEGURA',
    wpfStatusStock: 'ESTADO: VALORES DE FÁBRICA WINDOWS RESTAURADOS // DPC STOCK',
    btnOscStress: '⚡ Simular Pico DPC',
    mockTabDashboard: 'Dashboard',
    mockTabSmartTune: 'Smart Tune',
    mockTabTweaks: 'Optimizaciones',
    mockTabAutoDriver: 'AutoDriver',
    mockTabSecurity: 'Seguridad & Rollback',
    mockStatTimerTitle: 'Kernel Timer Resolution',
    mockStatTimerSub: '● Reloj NtSetTimerResolution 0.5ms',
    mockStatActiveTitle: 'Tweaks Activos',
    mockStatActiveSub: '● Cero jitter ISR/DPC',
    mockStatHealthTitle: 'Salud del Sistema',
    mockStatHealthSub: '● Snapshot VSS activo',
    oscilloscopeTitle: '● TELEMETRÍA DPC & ISR KERNEL EN VIVO (60 FPS)',
    mockTweak1Sub: 'Elimina el límite del 10% de paquetes de Windows durante sesiones de juego',
    mockTweak2Sub: 'Reduce la latencia de interrupciones de la GPU a la CPU a submilisegundos',
    mockTweak3Sub: 'Auto-adaptativo: Protegido en AMD Dual-CCD X3D e Intel Hybrid',
    mockPaneTweak2Name: 'GPU MSI Mode (Message Signaled-Based Interrupts)',
    mockPaneTweak4Name: 'CPU Core Parking & C-States Tuning (Hardware Safe)',
    smartTuneHeaderTitle: 'Smart Tune // Motor de Consenso Autónomo',
    smartTuneHeaderDesc: 'Ajuste matemático óptimo según tu CPU, GPU, RAM y versión de Windows.',
    smartTuneSafeBadge: '100% SEGURO',
    hwCpuLabel: 'PROCESADOR DETECTADO:',
    hwCpuVal: 'AMD Ryzen / Intel Core (Prioridad P-Cores)',
    hwGpuLabel: 'GRÁFICA & MONITOR:',
    hwGpuVal: 'NVIDIA RTX / AMD Radeon (Modo MSI + HAGS)',
    hwProfileLabel: 'PERFIL RECOMENDADO:',
    hwProfileVal: '⚡ Perfil Esports (117 Optimizaciones)',
    btnRunSmartTune: '⚡ EJECUTAR SMART TUNE (1 CLIC)',
    smartTuneStatusDone: '✓ 117 ajustes optimizados para tu procesador y GPU.',
    tweaksPaneTitle: 'Catálogo Completo de 117 Tweaks',
    tweaksPaneDesc: 'Activa o desactiva con respaldo instantáneo.',
    tweaksReversibleBadge: '117 REVERSIBLES',
    mockPaneTweak1: 'Prioridad en tiempo real en el planificador NT',
    mockPaneTweak2: 'Frecuencia fija de 0.500 ms sin drifting',
    mockPaneTweak3: 'Desactiva algoritmo de Nagle para envío inmediato',
    mockPaneTweak4: 'Bloquea módulos críticos del kernel en memoria física',
    mockPaneTweak5: 'Desactiva diagnósticos y telemetría en segundo plano',
    autoDriverPaneTitle: 'AutoDriver // WHQL Guardian & Limpieza Pura',
    autoDriverPaneDesc: 'Auditoría por PNP Hardware ID. Cero servicios residentes.',
    autoDriverZeroRamBadge: '0 MB RAM RESIDUAL',
    mockDrv1Meta: 'PCI\\VEN_10DE — Telemetría purgada, latencia DPC mínima',
    mockDrv1Badge: '✓ LIMPIO SIN BLOATWARE',
    mockDrv2Meta: 'PCI\\VEN_10EC — Modo MSI activo (IRQ dedicada)',
    mockDrv2Badge: '✓ MSI MODE ACTIVO',
    mockDrv3Meta: 'ACPI\\AMDI0010 — Firmware oficial WHQL certificado',
    mockDrv3Badge: '✓ WHQL CERTIFICADO',
    shaderCacheDesc: 'Sombreadores obsoletos acumulados que causan stuttering',
    btnCleanShaders: 'Limpiar 1.8 GB',
    btnBackupDrivers: '📦 Respaldar Drivers con pnputil',
    driverToastDone: '✓ Respaldo completado en DriverStore.',
    secPaneTitle: 'Zero-Risk Sentinel // Reversibilidad 100%',
    secPaneDesc: 'Respaldo atómico previo. Reversible a valores de fábrica en 1 clic.',
    secTransparentBadge: 'TRANSPARENTE',
    secBox1Title: 'Punto de Restauración Windows (VSS)',
    secBox1Val: '✓ Creado & Verificado',
    secBox1Sub: 'Snapshot del sistema antes de optimizar',
    secBox2Title: 'Respaldo de Registro UTF-16 LE',
    secBox2Val: '✓ 117 Claves Salvaguardadas',
    secBox2Sub: 'Copia exacta en formato nativo del registro',
    secBox3Title: 'Arquitectura Sin Riesgo de BSOD',
    secBox3Val: '✓ 100% No Destructivo',
    secBox3Sub: 'Sin alterar BIOS ni archivos del kernel',
    btnRollbackAll: '🔄 REVERTIR TODO A VALORES DE FÁBRICA (1 CLIC)',
    rollbackStatusDone: '✓ Valores originales de Windows restaurados.',
    benchmarksTag: 'RESULTADOS COMPROBADOS EMPÍRICAMENTE',
    benchmarksTitle: 'Menor Latencia, Máxima Fluidez',
    benchmarksDesc: 'Compara la telemetría en tiempo real entre Windows por defecto y Recoil Optimizer bajo cargas competitivas reales.',
    metricFpsTitle: 'Tasa de Cuadros (FPS)',
    badgeHigherBetter: 'Más es Mejor',
    labelStockWin: 'Windows por Defecto',
    labelRecoilWin: 'Con Recoil Optimizer',
    metricLatTitle: 'Latencia del Sistema (Input Lag)',
    badgeLowerBetter: 'Menos es Mejor',
    downloadsTag: 'DISTRIBUCIÓN OFICIAL COMPLETA',
    downloadsTitle: 'Descargas Oficiales y Verificadas',
    downloadsDesc: 'Arquitectura dual nativa para equipos modernos y computadoras legacy.',
    dpkBadge: 'PIN PÚBLICO OFICIAL // 3910 (GRATUITO)',
    dpkText: 'Al ejecutar la aplicación por primera vez se te solicitará este PIN de 4 dígitos (3910). Es un interruptor de seguridad gratuito para garantizar que descargaste de la fuente oficial y conozcas la reversibilidad en 1 clic.',
    cardX64Title: 'Windows 64 bits (x64)',
    cardX64Desc: 'Para equipos modernos de 64 bits.',
    cardX64Spec1: 'Windows 7, 8.1, 10 y 11 (64-bit)',
    cardX64Spec2: 'Optimizado para Intel Core Ultra y AMD Ryzen X3D',
    cardX64Spec3: 'Soporte multinúcleo y latencia ultra-baja de kernel',
    cardX86Title: 'Windows 32 bits (x86)',
    cardX86Desc: 'Para PCs de 32 bits y recursos reducidos.',
    cardX86Spec1: 'Windows 7, 8.1 y 10 (32-bit)',
    cardX86Spec2: 'Ejecución nativa PE32 sin errores de compatibilidad',
    cardX86Spec3: 'Mismos 117 tweaks y reversibilidad total en 1 clic',
    btnVerifyHash: '🔍 Validar ↓',
    btnDownloadX64: 'Descargar RecoilOptimizer_x64.exe',
    btnDownloadX86: 'Descargar RecoilOptimizer_x86.exe',
    recommendedRibbon: 'RECOMENDADO PARA TU PC',
    copyHash: 'Copiar SHA-256',
    hashCopied: '¡Hash SHA-256 copiado al portapapeles!',
    qsStep1Title: 'Descarga la Versión Detectada',
    qsStep1Desc: 'Tu navegador seleccionará automáticamente x64 o x86 según tu arquitectura nativa de Windows.',
    qsStep2Title: 'Aviso Windows SmartScreen',
    qsStep2Desc: 'Si Windows muestra la pantalla azul de SmartScreen, pulsa «Más información» y luego «Ejecutar de todas formas».',
    qsStep2Chip: 'ℹ️ «Más información» → «Ejecutar»',
    qsStep3Title: 'Ingresa el PIN Gratuito 3910',
    qsStep3Desc: 'Introduce el PIN 3910 para verificar el consentimiento y pulsa Smart Tune para aplicar las optimizaciones.',
    qsStep3SimBtn: '⚡ Probar PIN en Vivo ↓',
    featuresTag: 'INGENIERÍA DE ALTO NIVEL',
    featuresTitle: 'Tecnología de Grado Competitivo',
    featuresDesc: 'No somos un script de registro genérico. Recoil Optimizer analiza la topología exacta de tu CPU, GPU y memoria en tiempo real.',
    feat1Title: 'Smart Tune Automático',
    feat1Desc: 'Detecta automáticamente si estás en un Intel Core Ultra, un AMD Ryzen Dual-CCD X3D, o un procesador con pocos núcleos, aplicando únicamente las optimizaciones matemáticamente ideales para tu hardware.',
    feat2Title: 'Kernel Timer a 0.5ms',
    feat2Desc: 'Sincroniza el temporizador de eventos del núcleo de Windows a 0.500 ms exactos usando llamadas directas a NTAPI, reduciendo el retardo entre el clic del mouse y la respuesta en pantalla.',
    feat3Title: 'AutoDriver & Limpieza Segura',
    feat3Desc: 'Respalda, actualiza y gestiona tus controladores esenciales (GPU, Red, Chipset) sin herramientas de terceros con anuncios. Limpia cachés de shaders DirectX y sombreadores sin tocar tus partidas guardadas.',
    feat4Title: 'MSI Mode & Prioridad GPU',
    feat4Desc: 'Configura Message Signaled Interrupts (MSI) en tarjetas gráficas NVIDIA GeForce, AMD Radeon e Intel Arc, evitando cuellos de botella por colisiones de interrupción en buses PCIe.',
    feat5Title: 'Matriz Universal Multi-Windows',
    feat5Desc: 'Funciona nativamente en Windows 7, Windows 8.1, Windows 10 y Windows 11 (32 y 64 bits), aplicando filtros de seguridad que evitan cualquier incompatibilidad.',
    feat6Title: '100% Reversible y No-Destructivo',
    feat6Desc: 'Todos los ajustes guardan un snapshot de fábrica previo en formato UTF-16 LE con BOM. Si en algún momento quieres volver exactamente al estado original de Windows, un solo clic restaura todo.',
    secZeroTelemetry: 'Cero Telemetría',
    secZeroTelemetryDesc: 'No enviamos datos ni rastreamos tu equipo. 100% desconectado.',
    secBackup: 'Respaldos Automáticos',
    secBackupDesc: 'Crea snapshots de registro antes de cualquier ajuste para restaurar en 1 clic.',
    secNoBloat: 'Cero Publicidad / Adware',
    secNoBloatDesc: 'Sin instaladores engañosos ni servicios en segundo plano permanentes.',
    secOpenSource: '100% Transparente',
    secOpenSourceDesc: 'Código abierto y verificable con firma SHA-256 verificada.',
    faqTag: 'PREGUNTAS FRECUENTES',
    faqTitle: 'Respuestas Claras y Transparentes',
    faqDesc: 'Todo lo que necesitas saber antes de optimizar tu equipo.',
    faqQ1: '¿Por qué en Windows 7 me salía un error de compatibilidad x86 / x64?',
    faqA1: 'Muchas computadoras con Windows 7 tienen instalada la edición de 32 bits (x86). Si descargas el archivo de 64 bits en un sistema de 32 bits, Windows muestra esa advertencia porque el kernel no puede cargar binarios de 64 bits. Para solucionarlo, simplemente descarga la versión RecoilOptimizer_x86.exe (32 bits) disponible en nuestra sección de descargas.',
    faqQ2: '¿Es seguro usar Recoil Optimizer? ¿Puede dañar mi Windows?',
    faqA2: 'Es 100% seguro. A diferencia de scripts dudosos de internet, Recoil Optimizer valida tu hardware antes de tocar nada (protegiendo el programador de AMD Dual-CCD X3D, Intel Hybrid e impidiendo desactivar SysMain en discos mecánicos HDD). Además, realiza un respaldo del registro previo con codificación UTF-16 LE y crea un punto de restauración del sistema de forma automática.',
    faqQ3: '¿Funciona en Laptops de Gaming con doble gráfica (NVIDIA Optimus / AMD Advantage)?',
    faqA3: 'Sí. El motor de consenso detecta la GPU discreta principal y evita aplicar modificaciones de hardware que rompan el conmutador de pantalla o el estado de reposo de la batería en ordenadores portátiles.',
    faqQ4: '¿Cómo puedo revertir los cambios si quiero volver al estado de fábrica?',
    faqA4: 'Dentro de la aplicación, existe la pestaña Seguridad & Rollback. Con un solo clic en "Restaurar Copia de Seguridad", todos los valores de registro, planes de energía y servicios vuelven exactamente a sus valores predeterminados de fábrica de Microsoft Windows.',
    faqQ5: '¿Es gratuito o tendré que pagar algo después?',
    faqA5: 'Recoil Optimizer es un proyecto 100% libre y gratuito ($0.00). No hay versiones de pago, no hay funciones bloqueadas tras un muro de pago, ni suscripciones recurrentes.',
    footerBrandDesc: 'La suite de optimización de más alto rendimiento, precisión de temporizadores y latencia ultra-baja para la comunidad global de gaming y PC.',
    footerColNav: 'Navegación',
    footerColArch: 'Arquitecturas',
    footerColSec: 'Seguridad & Soporte',
    footerCopyright: '© 2024-2026 Recoil Optimizer Project. Todos los derechos reservados.',
    footerStatus: 'Todos los Sistemas Operativos Soportados (Windows 7 — Windows 11)'
  },
  en: {
    navBenchmarks: 'Telemetry',
    navTweaks: '117 Tweaks',
    navArchitecture: 'AutoDriver & Hardware',
    navOsMatrix: 'Multi-Windows',
    navTrust: 'Safety & Trust',
    navDownloads: 'Downloads',
    navFaq: 'FAQ',
    navFeatures: 'Features',
    btnDownloadNav: 'Download Free',
    heroTag: 'KERNEL LOW-LATENCY SUITE // WINDOWS 7 TO WINDOWS 11',
    heroTitle: 'Squeeze every drop of FPS and eliminate Windows micro-stutter.',
    heroSubtitle: 'Kernel optimization and ultra-low latency for esports. Windows 7, 8.1, 10, and 11. Zero resident services and 100% reversible.',
    btnDownloadHero: 'Download for Windows',
    btnExploreTweaks: 'Explore all 117 Tweaks',
    microTrust1: '100% Safe with Vanguard / EAC / FACEIT',
    microTrust2: 'Total 1-Click Rollback (VSS + Registry)',
    microTrust3: '0 MB Resident Background RAM',
    microTrust4: '100% Free & Open Source (MIT)',
    osDetectedPrefix: 'Detected System:',
    osRecommendedPrefix: 'Recommended:',
    passkeyTag: 'OFFICIAL SAFETY PIN:',
    passkeySub: 'Prompted upon initial launch before hardware scan',
    btnCopyPin: 'Copy PIN',
    btnCopyPinFull: 'Copy PIN: 3910',
    passkeyExpl: 'Enter 3910 upon launching the application to unlock hardware detection. 100% free community safety interlock.',
    passkeyCopied: 'Official PIN 3910 copied to clipboard!',
    downloadStartedPinCopied: 'Download started! Free PIN 3910 has been copied to your clipboard.',
    statTweaksLabel: 'Kernel Optimizations',
    statTimerLabel: 'NTAPI Kernel Timer',
    statFpsLabel: 'FPS / 1% Low Boost',
    statRamLabel: 'Resident Background RAM',
    wpfWindowTitle: 'Recoil Studio // RecoilOptimizer.exe',
    wpfAdminBadge: '🛡️ RING-0 / ADMIN',
    wpfProfilePill: 'PROFILE:',
    wpfScoreLabel: '❤ HEALTH:',
    wpfStatusReady: 'STATUS: OPTIMAL SYSTEM // SECURE RING-3 ATTACH',
    wpfStatusStock: 'STATUS: STOCK WINDOWS DEFAULTS RESTORED // STOCK DPC',
    btnOscStress: '⚡ Simulate DPC Spike',
    mockTabDashboard: 'Dashboard',
    mockTabSmartTune: 'Smart Tune',
    mockTabTweaks: 'Optimizations',
    mockTabAutoDriver: 'AutoDriver',
    mockTabSecurity: 'Security & Rollback',
    mockStatTimerTitle: 'Kernel Timer Resolution',
    mockStatTimerSub: '● NtSetTimerResolution 0.5ms locked',
    mockStatActiveTitle: 'Active Tweaks',
    mockStatActiveSub: '● Zero ISR/DPC jitter',
    mockStatHealthTitle: 'System Health',
    mockStatHealthSub: '● Active VSS snapshot',
    oscilloscopeTitle: '● LIVE KERNEL DPC & ISR TELEMETRY (60 FPS)',
    mockTweak1Sub: 'Bypasses Windows 10% packet throttling during intense gaming sessions',
    mockTweak2Sub: 'Reduces GPU-to-CPU interrupt latency to sub-millisecond precision',
    mockTweak3Sub: 'Hardware-adaptive: Guarded on AMD Dual-CCD X3D and Intel Hybrid',
    mockPaneTweak2Name: 'GPU MSI Mode (Message Signaled-Based Interrupts)',
    mockPaneTweak4Name: 'CPU Core Parking & C-States Tuning (Hardware Safe)',
    smartTuneHeaderTitle: 'Smart Tune // Autonomous Consensus Engine',
    smartTuneHeaderDesc: 'Optimal mathematical tuning calibrated for your CPU, GPU, RAM, and Windows kernel.',
    smartTuneSafeBadge: '100% SAFE',
    hwCpuLabel: 'DETECTED CPU:',
    hwCpuVal: 'AMD Ryzen / Intel Core (P-Core Priority)',
    hwGpuLabel: 'GPU & DISPLAY:',
    hwGpuVal: 'NVIDIA RTX / AMD Radeon (MSI Mode + HAGS)',
    hwProfileLabel: 'RECOMMENDED PROFILE:',
    hwProfileVal: '⚡ Esports Profile (117 Optimizations)',
    btnRunSmartTune: '⚡ RUN SMART TUNE (1-CLICK)',
    smartTuneStatusDone: '✓ 117 optimizations applied for your CPU and GPU.',
    tweaksPaneTitle: 'Complete 117 Tweaks Catalog',
    tweaksPaneDesc: 'Toggle in real time with instant rollback.',
    tweaksReversibleBadge: '117 REVERSIBLE',
    mockPaneTweak1: 'Real-time thread priority in NT scheduler',
    mockPaneTweak2: 'Fixed 0.500 ms clock without drift',
    mockPaneTweak3: 'Disables Nagle algorithm for immediate packet dispatch',
    mockPaneTweak4: 'Locks critical kernel modules in physical RAM',
    mockPaneTweak5: 'Disables background diagnostics and telemetry',
    autoDriverPaneTitle: 'AutoDriver // WHQL Guardian & Clean Purge',
    autoDriverPaneDesc: 'Audited by PNP Hardware ID. Zero resident services.',
    autoDriverZeroRamBadge: '0 MB RESIDENT RAM',
    mockDrv1Meta: 'PCI\\VEN_10DE — Telemetry purged, minimal DPC latency',
    mockDrv1Badge: '✓ CLEAN ZERO-BLOAT',
    mockDrv2Meta: 'PCI\\VEN_10EC — MSI Mode active (Dedicated IRQ)',
    mockDrv2Badge: '✓ MSI MODE ACTIVE',
    mockDrv3Meta: 'ACPI\\AMDI0010 — Official WHQL certified firmware',
    mockDrv3Badge: '✓ WHQL CERTIFIED',
    shaderCacheDesc: 'Stale shader cache causing render stutter',
    btnCleanShaders: 'Clean 1.8 GB',
    btnBackupDrivers: '📦 Backup Drivers with pnputil',
    driverToastDone: '✓ Driver backup completed in DriverStore.',
    secPaneTitle: 'Zero-Risk Sentinel // 100% Reversible',
    secPaneDesc: 'Atomic pre-flight snapshot. Reversible to stock Windows in 1 click.',
    secTransparentBadge: 'TRANSPARENT',
    secBox1Title: 'Windows Restore Point (VSS)',
    secBox1Val: '✓ Created & Verified',
    secBox1Sub: 'Pre-flight system snapshot',
    secBox2Title: 'UTF-16 LE Registry Backup',
    secBox2Val: '✓ 117 Keys Safeguarded',
    secBox2Sub: 'Exact replica in native registry format',
    secBox3Title: 'Zero-BSOD Architecture',
    secBox3Val: '✓ 100% Non-Destructive',
    secBox3Sub: 'No BIOS changes, no kernel file tampering',
    btnRollbackAll: '🔄 ROLLBACK ALL TO STOCK DEFAULTS (1-CLICK)',
    rollbackStatusDone: '✓ Stock Windows values restored.',
    benchmarksTag: 'EMPIRICALLY VERIFIED RESULTS',
    benchmarksTitle: 'Lower Latency, Uncompromised Smoothness',
    benchmarksDesc: 'Compare real-time frame telemetry between stock Windows and Recoil Optimizer under competitive loads.',
    metricFpsTitle: 'Frame Rate (FPS)',
    badgeHigherBetter: 'Higher is Better',
    labelStockWin: 'Stock Windows',
    labelRecoilWin: 'With Recoil Optimizer',
    metricLatTitle: 'System Latency (Input Lag)',
    badgeLowerBetter: 'Lower is Better',
    downloadsTag: 'OFFICIAL VERIFIED DISTRIBUTION',
    downloadsTitle: 'Official Verified Builds',
    downloadsDesc: 'Dual native architecture for modern PCs and legacy systems.'
    dpkBadge: 'OFFICIAL PUBLIC PIN // 3910 (FREE)',
    dpkText: 'When running the application for the first time, you will be asked for this 4-digit PIN (3910). It is a free safety interlock ensuring you downloaded from the official source and understand the 1-click rollback feature.',
    cardX64Title: 'Windows 64-bit (x64)',
    cardX64Desc: 'For modern 64-bit PCs.',
    cardX64Spec1: 'Windows 7, 8.1, 10, and 11 (64-bit)',
    cardX64Spec2: 'Optimized for Intel Core Ultra and AMD Ryzen X3D',
    cardX64Spec3: 'Multicore support and low kernel latency',
    cardX86Title: 'Windows 32-bit (x86)',
    cardX86Desc: 'For 32-bit PCs and low-spec systems.',
    cardX86Spec1: '32-bit Windows 7, 8.1 and 10',
    cardX86Spec2: 'Native PE32 execution without compatibility errors',
    cardX86Spec3: 'Same 117 tweaks and full rollback protection',
    btnVerifyHash: '🔍 Verify ↓',
    btnDownloadX64: 'Download RecoilOptimizer_x64.exe',
    btnDownloadX86: 'Download RecoilOptimizer_x86.exe',
    recommendedRibbon: 'RECOMMENDED FOR YOUR PC',
    copyHash: 'Copy SHA-256',
    hashCopied: 'SHA-256 hash copied to clipboard!',
    qsStep1Title: 'Download Detected Architecture',
    qsStep1Desc: 'Your browser automatically selects x64 or x86 according to your native Windows architecture.',
    qsStep2Title: 'Windows SmartScreen Notice',
    qsStep2Desc: 'If Windows displays the blue SmartScreen prompt, click "More info" and then "Run anyway".',
    qsStep2Chip: 'ℹ️ "More info" → "Run anyway"',
    qsStep3Title: 'Enter Free PIN 3910',
    qsStep3Desc: 'Input PIN 3910 for safety verification and click Smart Tune to apply optimizations.',
    qsStep3SimBtn: '⚡ Try PIN Live ↓',
    featuresTag: 'HIGH-LEVEL ENGINEERING',
    featuresTitle: 'Competitive Esports Technology',
    featuresDesc: 'Not a generic registry batch script. Recoil Optimizer analyzes your exact CPU topology, GPU, and RAM in real time.',
    feat1Title: 'Autonomous Smart Tune',
    feat1Desc: 'Automatically identifies if you are running an Intel Core Ultra, an AMD Ryzen Dual-CCD X3D, or an entry-level CPU, applying mathematically optimal tweaks.',
    feat2Title: '0.500ms Kernel Timer Resolution',
    feat2Desc: 'Synchronizes the Windows kernel event timer to 0.500 ms using direct NTAPI syscalls, reducing click-to-photon latency.',
    feat3Title: 'AutoDriver & Clean Purge',
    feat3Desc: 'Backs up and configures GPU, network, and chipset drivers without adware. Cleans stale DirectX shader caches without touching saves.',
    feat4Title: 'MSI Mode & GPU Priority',
    feat4Desc: 'Enables Message Signaled Interrupts (MSI) across NVIDIA GeForce, AMD Radeon, and Intel Arc, eliminating PCIe interrupt collisions.',
    feat5Title: 'Universal Multi-Windows Matrix',
    feat5Desc: 'Runs natively across Windows 7, Windows 8.1, Windows 10, and Windows 11 (32 and 64-bit) with hardware safety gates.',
    feat6Title: '100% Reversible & Safe',
    feat6Desc: 'Every single tweak saves a factory snapshot in UTF-16 LE with BOM. A single click restores stock Windows settings instantly.',
    secZeroTelemetry: 'Zero Telemetry',
    secZeroTelemetryDesc: 'No telemetry beacons, no data gathering. 100% offline and private.',
    secBackup: 'Automatic Backups',
    secBackupDesc: 'Creates registry snapshots and VSS points before any tweak for 1-click rollback.',
    secNoBloat: 'Zero Ads / No Adware',
    secNoBloatDesc: 'No bundled installers, no third-party adware, and zero persistent background services.',
    secOpenSource: '100% Transparent',
    secOpenSourceDesc: 'Fully open source, verifiable, and secured with cryptographic SHA-256 hashes.',
    faqTag: 'FREQUENTLY ASKED QUESTIONS',
    faqTitle: 'Clear & Transparent Answers',
    faqDesc: 'Everything you need to know before tuning your system.',
    faqQ1: 'Why did Windows 7 show an x86 / x64 compatibility warning?',
    faqA1: 'Many Windows 7 machines run the 32-bit (x86) edition. Attempting to run a 64-bit executable on a 32-bit kernel triggers a compatibility prompt. To resolve this, simply download the official RecoilOptimizer_x86.exe build.',
    faqQ2: 'Is Recoil Optimizer safe? Can it corrupt my Windows installation?',
    faqA2: 'It is 100% safe. Recoil Optimizer audits your hardware first (safeguarding AMD Dual-CCD X3D thread scheduling, Intel Hybrid cores, and keeping SysMain active on mechanical HDDs). It creates a UTF-16 LE registry backup and an official Windows restore point automatically.',
    faqQ3: 'Does it work on Gaming Laptops with dual GPUs (Optimus / Advantage)?',
    faqA3: 'Yes. The consensus engine identifies your primary discrete GPU and prevents modifications that would disrupt display switching or battery sleep states.',
    faqQ4: 'How can I revert all settings if I want to return to stock defaults?',
    faqA4: 'Inside the app, go to the Security & Rollback tab. A single click on "Rollback All to Factory Defaults" restores every registry key, power plan, and service to stock Microsoft Windows values.',
    faqQ5: 'Is it completely free or are there hidden paywalls?',
    faqA5: 'Recoil Optimizer is 100% free and open-source ($0.00). There are no paid tiers, no locked features, and no recurring fees.',
    footerBrandDesc: 'The ultra-low latency, high-precision kernel optimization suite for competitive gamers and PC enthusiasts worldwide.',
    footerColNav: 'Navigation',
    footerColArch: 'Architectures',
    footerColSec: 'Security & Support',
    footerCopyright: '© 2024-2026 Recoil Optimizer Project. All rights reserved.',
    footerStatus: 'Universal Support Across Windows 7 to 11'
  }
};

/**
 * Toast Notification System
 */
function showToast(message) {
  let toast = document.getElementById('recoil-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'recoil-toast';
    toast.className = 'recoil-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

/**
 * Language Switcher Function
 */
function setLanguage(lang) {
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  window.currentLang = lang;
  currentLang = lang;
  document.documentElement.lang = lang;

  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langBtn = document.getElementById('btn-lang-toggle');
  if (langBtn) {
    langBtn.textContent = lang === 'es' ? '🌐 EN' : '🌐 ES';
  }

  // Notify other modules (trust-psychology.js, benchmark-lab.js, etc.)
  window.dispatchEvent(new CustomEvent('recoil:langchange', { detail: { lang } }));
  window.refreshRecoilMotion && window.refreshRecoilMotion();
}
window.setLanguage = setLanguage;

/**
 * High-Precision OS & Architecture Detection
 */
function detectSystem() {
  const ua = navigator.userAgent;
  let osName = 'Windows 11 (64 bits)';
  let arch = 'x64';
  let isWin11 = false;
  let isWin10 = false;
  let isWin7 = false;
  let isWin8 = false;

  // Bitness detection
  const is64 = ua.includes('x86_64') || ua.includes('x64') || ua.includes('Win64') || ua.includes('WOW64') || navigator.platform === 'Win64';
  arch = is64 ? 'x64' : 'x86';

  // Windows version check from User Agent
  if (ua.includes('Windows NT 10.0')) {
    isWin10 = true;
    osName = is64 ? 'Windows 10 / 11 (64 bits)' : 'Windows 10 (32 bits)';
  } else if (ua.includes('Windows NT 6.1')) {
    isWin7 = true;
    osName = is64 ? 'Windows 7 (64 bits)' : 'Windows 7 (32 bits)';
  } else if (ua.includes('Windows NT 6.2') || ua.includes('Windows NT 6.3')) {
    isWin8 = true;
    osName = is64 ? 'Windows 8.1 (64 bits)' : 'Windows 8.1 (32 bits)';
  }

  return { osName, arch, isWin11, isWin10, isWin7, isWin8 };
}

async function applySystemDetection() {
  let sys = detectSystem();

  // Enhance detection with Chromium Client Hints if available
  if (navigator.userAgentData && typeof navigator.userAgentData.getHighEntropyValues === 'function') {
    try {
      const hints = await navigator.userAgentData.getHighEntropyValues(['platformVersion', 'architecture', 'bitness']);
      if (hints.bitness) {
        sys.arch = hints.bitness === '64' ? 'x64' : 'x86';
      }
      if (hints.platformVersion) {
        const major = parseInt(hints.platformVersion.split('.')[0], 10);
        if (major >= 13) {
          sys.osName = `Windows 11 (${sys.arch === 'x64' ? '64 bits' : '32 bits'})`;
        } else {
          sys.osName = `Windows 10 (${sys.arch === 'x64' ? '64 bits' : '32 bits'})`;
        }
      }
    } catch (_) {
      // Graceful fallback to User Agent
    }
  }

  const osText = document.getElementById('detected-os-text');
  if (osText) {
    osText.textContent = `${sys.osName} — Versión ${sys.arch.toUpperCase()} Recomendada`;
  }

  const qsPill = document.getElementById('qs-arch-pill');
  if (qsPill) {
    qsPill.textContent = `Arquitectura: ${sys.arch.toUpperCase()} Detectada`;
  }

  // Update hero primary CTA link and label
  const heroBtn = document.getElementById('hero-download-btn');
  if (heroBtn) {
    const filename = sys.arch === 'x64' ? 'RecoilOptimizer_x64.exe' : 'RecoilOptimizer_x86.exe';
    heroBtn.href = 'https://recoiloptimizer.xyz/downloads/' + filename;
    heroBtn.setAttribute('download', filename);
    const archBadge = document.getElementById('hero-arch-badge');
    if (archBadge) {
      archBadge.textContent = sys.arch === 'x64' ? '64 bits' : '32 bits';
    }
  }

  // Set recommended card highlight in Downloads section
  const card64 = document.getElementById('card-x64');
  const card86 = document.getElementById('card-x86');
  if (card64 && card86) {
    if (sys.arch === 'x64') {
      card64.classList.add('recommended');
      card86.classList.remove('recommended');
    } else {
      card86.classList.add('recommended');
      card64.classList.remove('recommended');
    }
  }
}

/**
 * Mobile Navigation Drawer Setup
 */
function setupMobileNav() {
  const hamburger = document.getElementById('btn-nav-drawer');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', !isOpen);
    drawer.setAttribute('aria-hidden', isOpen);
  });

  // Close drawer when clicking any link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    });
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  });
}

/**
 * Passkey / PIN 3910 Copy Function
 */
function copyPasskey() {
  const pin = '3910';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(pin).then(() => {
      const dict = i18n[window.currentLang] || i18n.es;
      showToast(dict.passkeyCopied);
      const label = document.getElementById('copy-passkey-label');
      if (label) {
        label.textContent = window.currentLang === 'es' ? '✓ Copiado' : '✓ Copied';
        setTimeout(() => {
          const currentDict = i18n[window.currentLang] || i18n.es;
          label.textContent = currentDict.btnCopyPin;
        }, 2500);
      }
    });
  }
}
window.copyPasskey = copyPasskey;

/**
 * SHA-256 Hash Copying & Crypto Verifier Trigger
 */
function setupHashCopying() {
  document.querySelectorAll('.btn-copy-hash').forEach(button => {
    button.addEventListener('click', () => {
      const hash = button.getAttribute('data-hash');
      if (hash && navigator.clipboard) {
        navigator.clipboard.writeText(hash).then(() => {
          const dict = i18n[window.currentLang] || i18n.es;
          showToast(dict.hashCopied);
        });
      }
    });
  });

  // Wire "Validar ↓" buttons
  document.querySelectorAll('.btn-verify-hash').forEach(btn => {
    btn.addEventListener('click', () => {
      const hash = btn.getAttribute('data-verify-hash');
      const arch = btn.getAttribute('data-verify-arch');
      const verifierMount = document.getElementById('crypto-verifier-mount');
      if (verifierMount) {
        verifierMount.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.RecoilDownloadCenter && typeof window.RecoilDownloadCenter.fillAndValidate === 'function') {
        window.RecoilDownloadCenter.fillAndValidate(hash, arch);
      }
    });
  });

  // Wire Download links to auto-copy PIN 3910
  document.querySelectorAll('.download-card a[download], #hero-download-btn').forEach(downloadLink => {
    downloadLink.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('3910').catch(() => {});
      }
      const dict = i18n[window.currentLang] || i18n.es;
      showToast(dict.downloadStartedPinCopied);

      // Pulse quickstart steps 2 & 3
      const step2 = document.getElementById('qs-step-2');
      const step3 = document.getElementById('qs-step-3');
      if (step2) step2.classList.add('pulse-step');
      if (step3) step3.classList.add('pulse-step');
      setTimeout(() => {
        if (step2) step2.classList.remove('pulse-step');
        if (step3) step3.classList.remove('pulse-step');
      }, 3500);
    });
  });
}

/**
 * FAQ Accordion Setup
 */
function setupFaq() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        const answer = other.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        const answer = item.querySelector('.faq-answer');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/**
 * Hero WPF Application Replica Tabs & Reactive Controls
 */
function setupMockTabs() {
  document.querySelectorAll('.mock-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = item.getAttribute('data-mock-tab');
      if (!tabId) return;

      document.querySelectorAll('.mock-menu-item').forEach(m => m.classList.remove('active'));
      item.classList.add('active');

      document.querySelectorAll('.mock-pane').forEach(p => p.classList.remove('active'));
      const targetPane = document.getElementById(`mock-pane-${tabId}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

function toggleMockSwitch(switchEl) {
  if (!switchEl) return;
  switchEl.classList.toggle('active');

  const allSwitches = document.querySelectorAll('.app-window .toggle-switch');
  const activeSwitches = document.querySelectorAll('.app-window .toggle-switch.active');
  const count = 117 - (allSwitches.length - activeSwitches.length);

  const badge = document.getElementById('mock-tweak-count-badge');
  const num = document.getElementById('mock-tweaks-active-num');
  if (badge) badge.textContent = count;
  if (num) num.textContent = count;

  // If user disables switches, reflect in status
  if (activeSwitches.length < allSwitches.length && !isRollbackActive) {
    const healthVal = document.getElementById('wpf-live-health-val');
    if (healthVal) healthVal.textContent = '96%';
  }
}
window.toggleMockSwitch = toggleMockSwitch;

function executeMockSmartTune() {
  const btn = document.getElementById('btn-mock-smarttune');
  const status = document.getElementById('mock-tune-status');
  if (!btn) return;

  btn.disabled = true;
  btn.textContent = window.currentLang === 'es'
    ? '⏳ Analizando topología y aplicando 117 ajustes...'
    : '⏳ Analyzing topology & deploying 117 tweaks...';

  setTimeout(() => {
    // Turn on all switches
    document.querySelectorAll('.app-window .toggle-switch').forEach(sw => sw.classList.add('active'));

    const badge = document.getElementById('mock-tweak-count-badge');
    const num = document.getElementById('mock-tweaks-active-num');
    if (badge) badge.textContent = '117';
    if (num) num.textContent = '117';

    const healthVal = document.getElementById('wpf-live-health-val');
    const timerFooter = document.getElementById('wpf-live-timer-footer');
    const statusMsg = document.getElementById('wpf-statusbar-msg');

    if (healthVal) healthVal.textContent = '100%';
    if (timerFooter) timerFooter.textContent = '0.500 ms';
    if (statusMsg) {
      statusMsg.textContent = window.currentLang === 'es'
        ? 'ESTADO: SISTEMA ÓPTIMO // KERNEL BLOQUEADO 0.500 ms'
        : 'STATUS: OPTIMAL SYSTEM // KERNEL LOCKED 0.500 ms';
    }

    isRollbackActive = false;
    window.RecoilCanvasFX && window.RecoilCanvasFX.setOptimizationEnabled(true);

    btn.disabled = false;
    btn.textContent = window.currentLang === 'es'
      ? '✓ SMART TUNE APLICADO (117 / 117)'
      : '✓ SMART TUNE DEPLOYED (117 / 117)';
    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    btn.style.borderColor = '#10b981';

    if (status) status.style.display = 'block';

    showToast(
      window.currentLang === 'es'
        ? '¡Smart Tune completado: 117 optimizaciones aplicadas y Timer bloqueado en 0.500 ms!'
        : 'Smart Tune complete: 117 tweaks applied and NTAPI Timer locked at 0.500 ms!'
    );
  }, 650);
}
window.executeMockSmartTune = executeMockSmartTune;

function executeMockCleanShaders() {
  const btn = document.getElementById('btn-clean-shaders');
  if (!btn) return;

  btn.disabled = true;
  btn.textContent = window.currentLang === 'es' ? '✓ 1.8 GB Liberados' : '✓ 1.8 GB Freed';
  btn.style.background = 'rgba(16, 185, 129, 0.2)';
  btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
  btn.style.color = '#34d399';

  showToast(
    window.currentLang === 'es'
      ? '¡1.8 GB de caché de sombreadores purgados exitosamente!'
      : '1.8 GB shader cache successfully purged!'
  );
}
window.executeMockCleanShaders = executeMockCleanShaders;

function executeMockBackupDrivers() {
  const toast = document.getElementById('driver-action-toast');
  if (toast) toast.style.display = 'flex';

  showToast(
    window.currentLang === 'es'
      ? '¡Respaldo de controladores completado en System32/DriverStore con pnputil!'
      : 'Driver backup completed in System32/DriverStore with pnputil!'
  );
}
window.executeMockBackupDrivers = executeMockBackupDrivers;

function executeMockRollback() {
  const status = document.getElementById('mock-rollback-status');
  const btn = document.getElementById('btn-mock-rollback');
  const healthVal = document.getElementById('wpf-live-health-val');
  const timerFooter = document.getElementById('wpf-live-timer-footer');
  const statusMsg = document.getElementById('wpf-statusbar-msg');

  isRollbackActive = !isRollbackActive;

  if (isRollbackActive) {
    // Revert to stock simulation
    document.querySelectorAll('.app-window .toggle-switch').forEach(sw => sw.classList.remove('active'));
    const badge = document.getElementById('mock-tweak-count-badge');
    const num = document.getElementById('mock-tweaks-active-num');
    if (badge) badge.textContent = '0';
    if (num) num.textContent = '0';

    if (healthVal) healthVal.textContent = '78%';
    if (timerFooter) timerFooter.textContent = '15.625 ms';
    if (statusMsg) {
      statusMsg.textContent = window.currentLang === 'es'
        ? 'ESTADO: VALORES DE FÁBRICA RESTAURADOS // DPC STOCK 15.625 ms'
        : 'STATUS: STOCK WINDOWS DEFAULTS RESTORED // STOCK DPC 15.625 ms';
    }

    window.RecoilCanvasFX && window.RecoilCanvasFX.setOptimizationEnabled(false);

    if (status) {
      status.style.display = 'block';
      status.textContent = window.currentLang === 'es'
        ? '✓ Valores originales de fábrica de Windows restaurados (Snapshot UTF-16 LE).'
        : '✓ Original stock Windows defaults restored (UTF-16 LE Snapshot).';
    }
    if (btn) {
      btn.textContent = window.currentLang === 'es'
        ? '⚡ RE-APLICAR OPTIMIZACIONES RECOIL'
        : '⚡ RE-APPLY RECOIL OPTIMIZATIONS';
      btn.style.borderColor = 'var(--primary)';
      btn.style.color = 'var(--accent-amber)';
    }

    showToast(
      window.currentLang === 'es'
        ? '✓ Todos los valores originales de fábrica de Windows han sido restaurados.'
        : '✓ All original stock Windows defaults have been restored.'
    );
  } else {
    // Restore back to tuned state
    executeMockSmartTune();
    if (btn) {
      btn.textContent = window.currentLang === 'es'
        ? '🔄 REVERTIR TODO A VALORES DE FÁBRICA (1 CLIC)'
        : '🔄 ROLLBACK ALL TO STOCK DEFAULTS (1-CLICK)';
      btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      btn.style.color = '#fca5a5';
    }
  }
}
window.executeMockRollback = executeMockRollback;

window.copyDiscord = function (e) {
  if (e && e.preventDefault) e.preventDefault();
  const tag = 'sousa.r';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tag).catch(() => {});
  }
  const span = document.getElementById('nav-discord-text');
  if (span) {
    const original = span.textContent;
    span.textContent = '✓ Copiado: sousa.r';
    setTimeout(() => {
      span.textContent = original;
    }, 2200);
  }
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  applySystemDetection();
  setupMobileNav();
  setupMockTabs();
  setupFaq();
  setupHashCopying();

  const langBtn = document.getElementById('btn-lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setLanguage(window.currentLang === 'es' ? 'en' : 'es');
    });
  }

  // Smooth scroll for anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

