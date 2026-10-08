/**
 * Recoil Optimizer v1.0.0 — Cryptographic Verifier & Download Experience Center
 * File: download-center.js
 * Mounts into: #crypto-verifier-mount
 * Features:
 *  - Official v1.0.0 Binary Manifest (x64: 69.0 MB / 72,377,559 bytes, x86: 63.8 MB / 66,862,368 bytes)
 *  - Interactive PowerShell (x64), PowerShell (x86), and CMD (certutil) Hash Verifier Terminal
 *  - Live SHA-256 Cryptographic Hash Validator Input Box with Instant Seal & Local File Drag-and-Drop SHA-256 Check
 *  - Interactive PIN 3910 Startup Security Gate & Real-Time Hardware Telemetry Unlock Simulator
 *  - Full Bilingual Support ('es' / 'en' via window.currentLang & 'recoil:langchange') + 5-Skin CSS Variable Adaptation
 */

(function () {
  'use strict';

  const RELEASE_DATA = Object.freeze({
    version: 'v1.0.0',
    releaseUrl: '#downloads',
    pin: '3910',
    x64: {
      id: 'x64',
      fileName: 'RecoilOptimizer_x64.exe',
      archLabelEs: '64-bit (x64 Native)',
      archLabelEn: '64-bit (x64 Native)',
      sizeFormatted: '69.0 MB',
      sizeBytes: '72,377,559 bytes',
      sizeBytesRaw: 72377559,
      sha256: '0E73DF41953870169CBAE6E7687F450F85324B6C2B6BC56C76888435089AAF3B',
      downloadUrl: 'https://recoil-optimizer.surge.sh/downloads/RecoilOptimizer_x64.exe',
      targetOsEs: 'Windows 10 / 11 (24H2/25H2) & Win 7/8.1 x64',
      targetOsEn: 'Windows 10 / 11 (24H2/25H2) & Win 7/8.1 x64'
    },
    x86: {
      id: 'x86',
      fileName: 'RecoilOptimizer_x86.exe',
      archLabelEs: '32-bit (x86 Legacy)',
      archLabelEn: '32-bit (x86 Legacy)',
      sizeFormatted: '63.8 MB',
      sizeBytes: '66,862,368 bytes',
      sizeBytesRaw: 66862368,
      sha256: '32E762B461DDCCA1356B1254D910142B27E386D3E1BFBF6A64F84117F6B35F22',
      downloadUrl: 'https://recoil-optimizer.surge.sh/downloads/RecoilOptimizer_x86.exe',
      targetOsEs: 'Windows 7 SP1 / 8 / 10 (32-bit x86)',
      targetOsEn: 'Windows 7 SP1 / 8 / 10 (32-bit x86)'
    }
  });

  const I18N = {
    es: {
      headerBadge: ' AUDITORÍA CRIPTOGRÁFICA & CONTROL DE ACCESO // RELEASE v1.0.0',
      headerTitle: 'Centro de Verificación Criptográfica SHA-256 & Simulador de PIN',
      headerSubtitle:
        'Transparencia binaria absoluta. Verifica matemáticamente la integridad de tu ejecutable descargado mediante PowerShell o CMD y prueba en vivo la compuerta de seguridad PIN 3910.',
      releaseLinkLabel: 'Descargar Instalador Oficial v1.0.0 Directo',
      manifestTitle: 'MANIFIESTO OFICIAL DE BINARIOS COMPILADOS (v1.0.0)',
      manifestVerifiedTag: 'FIRMA SHA-256 VERIFICADA',
      sizeLabel: 'Tamaño Exacto:',
      shaLabel: 'Checksum SHA-256:',
      copyHashBtn: 'Copiar SHA-256',
      copiedHashBtn: '¡Hash Copiado!',
      testInValidatorBtn: 'Validar Hash ↓',
      directDownloadBtn: 'Descargar',
      // Left Column: Terminal & Validator
      termPanelTag: 'CONSOLA DE AUDITORÍA LOCAL',
      termPanelTitle: 'Terminal de Verificación PowerShell / CMD',
      termPanelDesc:
        'Selecciona tu arquitectura, copia el comando oficial y ejecútalo en tu PC para confirmar que el binario coincide bit a bit con nuestra compilación oficial.',
      tabPs64: 'PowerShell (x64)',
      tabPs86: 'PowerShell (x86)',
      tabCmd: 'CMD (certutil)',
      copyCmdBtn: 'Copiar Comando',
      copiedCmdBtn: '¡Comando Copiado!',
      runSimBtn: 'Simular Verificación',
      runningSimBtn: 'Calculando SHA-256...',
      termPromptHint: 'Comando listo para ejecutar en tu carpeta de Descargas:',
      termExpectedHeader: 'SALIDA ESPERADA EN TU CONSOLA WINDOWS:',
      termStatusMatch: 'COINCIDENCIA EXACTA BIT A BIT (100% ÍNTEGRO)',
      // Live Hash Validator
      validatorTag: 'VALIDADOR CRIPTOGRÁFICO EN TIEMPO REAL',
      validatorTitle: 'Comprobador Instantáneo de Hash SHA-256',
      validatorDesc:
        'Pega el hash SHA-256 arrojado por tu terminal (o haz clic en un botón de prueba rápida) para validar su sello criptográfico al instante.',
      validatorPlaceholder: 'Pega aquí un hash SHA-256 (ej. 0E73DF4195387016... o 32E762B461DDCCA1...)',
      quickFillLabel: 'Prueba rápida:',
      quickFillX64: 'Probar Hash x64 Oficial',
      quickFillX86: 'Probar Hash x86 Oficial',
      quickFillBad: 'Simular Hash Alterado',
      quickClear: 'Limpiar',
      fileDropLabel: '¿Ya descargaste el .exe? Arrastra o selecciona tu archivo aquí para calcular su SHA-256 localmente en tu navegador (0 bytes subidos)',
      fileComputing: 'Calculando hash SHA-256 local del archivo...',
      sealIdleTitle: 'ESPERANDO ENTRADA DE HASH SHA-256 (64 CARACTERES HEX)',
      sealIdleSub:
        'Pega cualquier firma SHA-256 arriba o usa los botones de autocompletado para verificar el sello de autenticidad de Recoil Optimizer v1.0.0.',
      sealValidX64Title: 'SELLO CRIPTOGRÁFICO AUTÉNTICO // BINARIO OFICIAL 64-BIT (x64)',
      sealValidX64Sub:
        'Verificado: RecoilOptimizer_x64.exe • 69.0 MB (72,377,559 bytes) • Release v1.0.0 íntegro y libre de modificaciones.',
      sealValidX86Title: 'SELLO CRIPTOGRÁFICO AUTÉNTICO // BINARIO OFICIAL 32-BIT (x86)',
      sealValidX86Sub:
        'Verificado: RecoilOptimizer_x86.exe • 63.8 MB (66,862,368 bytes) • Release v1.0.0 íntegro y compatible con Windows 7/8/10 32-bit.',
      sealPartialTitle: 'PREFIJO OFICIAL DETECTADO — COMPLETA LOS 64 CARACTERES',
      sealPartialSub:
        'El fragmento ingresado coincide con el inicio del hash oficial ({arch}). Haz clic en "Autocompletar" o pega los 64 caracteres.',
      sealPartialBtn: 'Autocompletar Hash Oficial',
      sealInvalidTitle: 'ALERTA CRIPTOGRÁFICA // HASH NO RECONOCIDO O ARCHIVO MODIFICADO',
      sealInvalidSub:
        'Este hash NO coincide con RecoilOptimizer_x64.exe (0E73DF41...) ni con RecoilOptimizer_x86.exe (32E762B4...). No ejecutes binarios de fuentes no oficiales.',
      // Right Column: PIN 3910 Simulator
      pinPanelTag: 'SIMULADOR INTERACTIVO DE SEGURIDAD',
      pinPanelTitle: 'Compuerta de Acceso PIN 3910 en Vivo',
      pinPanelDesc:
        'Al abrir Recoil Optimizer por primera vez, esta compuerta verifica que conoces el protocolo de respaldo automático antes de iniciar la telemetría del kernel.',
      pinAutoBtn: '⚡ Auto-Probar PIN 3910',
      pinCopyBtn: 'Copiar PIN: 3910',
      pinCopiedBtn: '¡PIN 3910 Copiado!',
      pinResetBtn: 'Bloquear / Reiniciar Demo',
      pinGateWindowTitle: 'RecoilOptimizer.exe — Security Gate v1.0.0 [Ring-3 Safe]',
      pinStatusLocked: 'BLOQUEADO // INGRESA EL PIN 3910',
      pinStatusTyping: 'VERIFICANDO SECUENCIA DE ACCESO...',
      pinStatusError: 'PIN INCORRECTO — USA LA CLAVE OFICIAL 3910',
      pinStatusUnlocked: 'ACCESO AUTORIZADO // TELEMETRÍA DE HARDWARE ACTIVA',
      pinInstruction: 'Haz clic en los dígitos 3 - 9 - 1 - 0 en el teclado táctico o pulsa "Auto-Probar PIN 3910":',
      pinClearKey: 'CLR',
      pinBackKey: '⌫',
      telemetryHeader: 'TELEMETRÍA DE HARDWARE & KERNEL DESBLOQUEADA',
      telemetrySub: 'Simulación en tiempo real del arranque seguro de Recoil Optimizer v1.0.0 tras validar el PIN 3910:',
      telItem1Label: 'RESOLUCIÓN DE TIMER NTAPI',
      telItem1Val: '0.500 ms BLOQUEADO',
      telItem1Meta: 'ZwSetTimerResolution activo • 0% deriva de reloj',
      telItem2Label: 'SNAPSHOT DE REGISTRO & VSS',
      telItem2Val: 'UTF-16 LE VERIFICADO',
      telItem2Meta: '117 claves respaldadas antes de aplicar cambios',
      telItem3Label: 'MOTOR SMART TUNE',
      telItem3Val: '117 / 117 TWEAKS LISTOS',
      telItem3Meta: 'Topología CPU/GPU analizada • 0 demonios residentes',
      telItem4Label: 'INTEGRIDAD DE EJECUTABLE',
      telItem4Val: 'SHA-256 AUTENTICADO',
      telItem4Meta: 'v1.0.0 Oficial • Cero telemetría externa',
      telFooterNote: '✓ Compuerta superada. En la aplicación real, ahora accedes al Dashboard completo y Smart Tune en 1 clic.'
    },
    en: {
      headerBadge: ' CRYPTOGRAPHIC AUDIT & ACCESS CONTROL // RELEASE v1.0.0',
      headerTitle: 'SHA-256 Cryptographic Verification Center & PIN Simulator',
      headerSubtitle:
        'Absolute binary transparency. Mathematically verify the integrity of your downloaded executable via PowerShell or CMD and live-test the PIN 3910 startup security gate.',
      releaseLinkLabel: 'Direct Official v1.0.0 Installer',
      manifestTitle: 'OFFICIAL COMPILED BINARY MANIFEST (v1.0.0)',
      manifestVerifiedTag: 'VERIFIED SHA-256 SIGNATURE',
      sizeLabel: 'Exact Size:',
      shaLabel: 'SHA-256 Checksum:',
      copyHashBtn: 'Copy SHA-256',
      copiedHashBtn: 'Hash Copied!',
      testInValidatorBtn: 'Validate Hash ↓',
      directDownloadBtn: 'Download',
      // Left Column: Terminal & Validator
      termPanelTag: 'LOCAL AUDIT CONSOLE',
      termPanelTitle: 'PowerShell / CMD Hash Verifier Terminal',
      termPanelDesc:
        'Select your architecture, copy the official command, and run it on your PC to confirm your binary matches our official build bit-for-bit.',
      tabPs64: 'PowerShell (x64)',
      tabPs86: 'PowerShell (x86)',
      tabCmd: 'CMD (certutil)',
      copyCmdBtn: 'Copy Command',
      copiedCmdBtn: 'Command Copied!',
      runSimBtn: 'Simulate Verification',
      runningSimBtn: 'Computing SHA-256...',
      termPromptHint: 'Command ready to run in your Downloads folder:',
      termExpectedHeader: 'EXPECTED OUTPUT IN YOUR WINDOWS CONSOLE:',
      termStatusMatch: 'EXACT BIT-FOR-BIT MATCH (100% UNMODIFIED)',
      // Live Hash Validator
      validatorTag: 'REAL-TIME CRYPTOGRAPHIC VALIDATOR',
      validatorTitle: 'Instant SHA-256 Hash Inspector',
      validatorDesc:
        'Paste the SHA-256 hash output from your terminal (or click a quick-test pill) to immediately validate its cryptographic seal.',
      validatorPlaceholder: 'Paste any SHA-256 hash here (e.g. 0E73DF4195387016... or 32E762B461DDCCA1...)',
      quickFillLabel: 'Quick test:',
      quickFillX64: 'Test Official x64 Hash',
      quickFillX86: 'Test Official x86 Hash',
      quickFillBad: 'Simulate Tampered Hash',
      quickClear: 'Clear',
      fileDropLabel: 'Already downloaded the .exe? Drag & drop or select your file here to compute its SHA-256 locally in-browser (0 bytes uploaded)',
      fileComputing: 'Computing local SHA-256 hash of file...',
      sealIdleTitle: 'AWAITING SHA-256 HASH INPUT (64 HEX CHARACTERS)',
      sealIdleSub:
        'Paste any SHA-256 signature above or use the quick-fill buttons to verify the Recoil Optimizer v1.0.0 authenticity seal.',
      sealValidX64Title: 'AUTHENTIC CRYPTOGRAPHIC SEAL // OFFICIAL 64-BIT BINARY (x64)',
      sealValidX64Sub:
        'Verified: RecoilOptimizer_x64.exe • 69.0 MB (72,377,559 bytes) • Official Release v1.0.0 intact and untampered.',
      sealValidX86Title: 'AUTHENTIC CRYPTOGRAPHIC SEAL // OFFICIAL 32-BIT BINARY (x86)',
      sealValidX86Sub:
        'Verified: RecoilOptimizer_x86.exe • 63.8 MB (66,862,368 bytes) • Official Release v1.0.0 intact and Windows 7/8/10 32-bit ready.',
      sealPartialTitle: 'OFFICIAL PREFIX DETECTED — COMPLETE ALL 64 CHARACTERS',
      sealPartialSub:
        'The entered fragment matches the beginning of the official ({arch}) hash. Click "Auto-Complete" or paste all 64 characters.',
      sealPartialBtn: 'Auto-Complete Official Hash',
      sealInvalidTitle: 'CRYPTOGRAPHIC ALERT // UNRECOGNIZED HASH OR MODIFIED FILE',
      sealInvalidSub:
        'This hash does NOT match RecoilOptimizer_x64.exe (0E73DF41...) or RecoilOptimizer_x86.exe (32E762B4...). Never run binaries from unofficial sources.',
      // Right Column: PIN 3910 Simulator
      pinPanelTag: 'INTERACTIVE SECURITY SIMULATOR',
      pinPanelTitle: 'Live PIN 3910 Startup Security Gate',
      pinPanelDesc:
        'When launching Recoil Optimizer for the first time, this security gate confirms awareness of the automatic backup protocol before unlocking hardware telemetry.',
      pinAutoBtn: '⚡ Auto-Test PIN 3910',
      pinCopyBtn: 'Copy PIN: 3910',
      pinCopiedBtn: 'PIN 3910 Copied!',
      pinResetBtn: 'Lock / Reset Demo',
      pinGateWindowTitle: 'RecoilOptimizer.exe — Security Gate v1.0.0 [Ring-3 Safe]',
      pinStatusLocked: 'LOCKED // ENTER ACCESS PIN 3910',
      pinStatusTyping: 'VERIFYING ACCESS SEQUENCE...',
      pinStatusError: 'INVALID PIN — USE OFFICIAL PASSKEY 3910',
      pinStatusUnlocked: 'ACCESS GRANTED // HARDWARE TELEMETRY ACTIVE',
      pinInstruction: 'Click digits 3 - 9 - 1 - 0 on the tactical keypad or press "Auto-Test PIN 3910":',
      pinClearKey: 'CLR',
      pinBackKey: '⌫',
      telemetryHeader: 'HARDWARE & KERNEL TELEMETRY UNLOCKED',
      telemetrySub: 'Real-time simulation of Recoil Optimizer v1.0.0 secure startup sequence after validating PIN 3910:',
      telItem1Label: 'NTAPI TIMER RESOLUTION',
      telItem1Val: '0.500 ms LOCKED',
      telItem1Meta: 'ZwSetTimerResolution active • 0% clock drift',
      telItem2Label: 'REGISTRY & VSS SNAPSHOT',
      telItem2Val: 'UTF-16 LE VERIFIED',
      telItem2Meta: '117 registry keys backed up prior to tuning',
      telItem3Label: 'SMART TUNE ENGINE',
      telItem3Val: '117 / 117 TWEAKS ARMED',
      telItem3Meta: 'CPU/GPU topology analyzed • 0 resident daemons',
      telItem4Label: 'EXECUTABLE INTEGRITY',
      telItem4Val: 'SHA-256 AUTHENTICATED',
      telItem4Meta: 'Official v1.0.0 • Zero outbound telemetry',
      telFooterNote: '✓ Security gate passed. In the desktop app, you now enter the full Dashboard & 1-click Smart Tune.'
    }
  };

  // Component Interactive State
  const state = {
    lang: 'es',
    activeTermTab: 'ps64', // 'ps64' | 'ps86' | 'cmd'
    isSimulatingTerm: false,
    simProgressLines: 4,
    validatorInput: '',
    enteredPin: '',
    pinState: 'locked', // 'locked' | 'typing' | 'error' | 'unlocked'
    autoPinTimer: null,
    activeKeyHighlight: null,
    fileCheckInfo: null
  };

  function getLang() {
    const raw = (window.currentLang || document.documentElement.lang || 'es').toLowerCase();
    return raw.startsWith('en') ? 'en' : 'es';
  }

  function t(key) {
    const lang = state.lang;
    return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  }

  function copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          if (onSuccess) onSuccess();
        })
        .catch(() => fallbackCopy(text, onSuccess));
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (onSuccess) onSuccess();
    } catch (_) {
      if (onSuccess) onSuccess();
    }
  }

  function getTerminalCommandData(tabId) {
    if (tabId === 'ps64') {
      return {
        shellLabel: 'Windows PowerShell 5.1 / 7+ (x64)',
        promptPrefix: 'PS C:\\Users\\Player\\Downloads>',
        command: 'Get-FileHash .\\RecoilOptimizer_x64.exe -Algorithm SHA256 | Format-List',
        lines: [
          'Algorithm : SHA256',
          'Hash      : ' + RELEASE_DATA.x64.sha256,
          'Path      : C:\\Users\\Player\\Downloads\\' + RELEASE_DATA.x64.fileName,
          'FileSize  : ' + RELEASE_DATA.x64.sizeBytes + ' (' + RELEASE_DATA.x64.sizeFormatted + ')'
        ],
        targetHash: RELEASE_DATA.x64.sha256,
        targetFile: RELEASE_DATA.x64.fileName,
        targetSize: RELEASE_DATA.x64.sizeFormatted + ' (' + RELEASE_DATA.x64.sizeBytes + ')'
      };
    }
    if (tabId === 'ps86') {
      return {
        shellLabel: 'Windows PowerShell 5.1 / x86 Legacy',
        promptPrefix: 'PS C:\\Users\\Player\\Downloads>',
        command: 'Get-FileHash .\\RecoilOptimizer_x86.exe -Algorithm SHA256 | Format-List',
        lines: [
          'Algorithm : SHA256',
          'Hash      : ' + RELEASE_DATA.x86.sha256,
          'Path      : C:\\Users\\Player\\Downloads\\' + RELEASE_DATA.x86.fileName,
          'FileSize  : ' + RELEASE_DATA.x86.sizeBytes + ' (' + RELEASE_DATA.x86.sizeFormatted + ')'
        ],
        targetHash: RELEASE_DATA.x86.sha256,
        targetFile: RELEASE_DATA.x86.fileName,
        targetSize: RELEASE_DATA.x86.sizeFormatted + ' (' + RELEASE_DATA.x86.sizeBytes + ')'
      };
    }
    return {
      shellLabel: 'Windows Command Prompt (cmd.exe / certutil)',
      promptPrefix: 'C:\\Users\\Player\\Downloads>',
      command:
        'certutil -hashfile RecoilOptimizer_x64.exe SHA256 && certutil -hashfile RecoilOptimizer_x86.exe SHA256',
      lines: [
        'SHA256 hash of RecoilOptimizer_x64.exe (' + RELEASE_DATA.x64.sizeBytes + '):',
        RELEASE_DATA.x64.sha256,
        'SHA256 hash of RecoilOptimizer_x86.exe (' + RELEASE_DATA.x86.sizeBytes + '):',
        RELEASE_DATA.x86.sha256,
        'CertUtil: -hashfile command completed successfully.'
      ],
      targetHash: RELEASE_DATA.x64.sha256,
      targetFile: 'RecoilOptimizer_x64.exe & RecoilOptimizer_x86.exe',
      targetSize: '69.0 MB & 63.8 MB'
    };
  }

  function evaluateHashInput(rawInput) {
    const cleaned = (rawInput || '').replace(/[\s\-:]/g, '').toUpperCase();
    if (!cleaned) {
      return { status: 'idle', cleaned: '' };
    }
    const x64Hash = RELEASE_DATA.x64.sha256.toUpperCase();
    const x86Hash = RELEASE_DATA.x86.sha256.toUpperCase();

    if (cleaned === x64Hash) {
      return { status: 'valid-x64', cleaned, release: RELEASE_DATA.x64 };
    }
    if (cleaned === x86Hash) {
      return { status: 'valid-x86', cleaned, release: RELEASE_DATA.x86 };
    }
    if (cleaned.length >= 6 && cleaned.length < 64) {
      if (x64Hash.startsWith(cleaned)) {
        return { status: 'partial', arch: 'x64', fullHash: x64Hash, cleaned };
      }
      if (x86Hash.startsWith(cleaned)) {
        return { status: 'partial', arch: 'x86', fullHash: x86Hash, cleaned };
      }
    }
    return { status: 'invalid', cleaned };
  }

  function injectStyles() {
    if (document.getElementById('recoil-crypto-verifier-styles')) return;
    const style = document.createElement('style');
    style.id = 'recoil-crypto-verifier-styles';
    style.textContent = `
      #crypto-verifier-mount {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        width: 100%;
        font-family: var(--font-sans, 'Inter', -apple-system, BlinkMacSystemFont, sans-serif);
        color: var(--text-main, #f8fafc);
        position: relative;
        z-index: 2;
      }

      .rcv-shell {
        background: linear-gradient(165deg, var(--bg-card, rgba(15, 23, 42, 0.86)) 0%, var(--bg-deep, rgba(8, 12, 24, 0.95)) 100%);
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.16));
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        position: relative;
        overflow: hidden;
      }

      .rcv-shell::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary, #3b82f6), var(--accent-emerald, #10b981), var(--accent-amber, #f59e0b), transparent);
        opacity: 0.85;
      }

      .rcv-top-header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.25rem;
        margin-bottom: 1.75rem;
        padding-bottom: 1.35rem;
        border-bottom: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
      }

      .rcv-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--primary, #60a5fa);
        background: var(--bg-surface, rgba(59, 130, 246, 0.1));
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.32));
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        margin-bottom: 0.65rem;
      }

      .rcv-badge-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent-emerald, #10b981);
        box-shadow: 0 0 8px var(--accent-emerald, #10b981);
      }

      .rcv-title {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: clamp(1.35rem, 2.3vw, 1.85rem);
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--text-main, #f8fafc);
        margin: 0 0 0.45rem 0;
        line-height: 1.2;
      }

      .rcv-subtitle {
        font-size: 0.92rem;
        color: var(--text-muted, #94a3b8);
        max-width: 720px;
        line-height: 1.55;
        margin: 0;
      }

      .rcv-release-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--text-main, #f8fafc);
        background: var(--bg-surface, rgba(30, 41, 59, 0.75));
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.35));
        padding: 0.65rem 1rem;
        border-radius: 10px;
        text-decoration: none;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .rcv-release-btn:hover {
        border-color: var(--primary, #3b82f6);
        box-shadow: 0 0 20px var(--primary-glow, rgba(59, 130, 246, 0.28));
        transform: translateY(-1px);
      }

      /* Binary Ledger Bar */
      .rcv-manifest-bar {
        margin-bottom: 1.85rem;
      }

      .rcv-manifest-label-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
      }

      .rcv-manifest-heading {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.73rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--text-muted, #94a3b8);
        text-transform: uppercase;
      }

      .rcv-manifest-tag {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--accent-emerald, #10b981);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        padding: 0.2rem 0.6rem;
        border-radius: 6px;
      }

      .rcv-manifest-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .rcv-bin-card {
        background: var(--bg-surface, rgba(15, 23, 42, 0.72));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.16));
        border-radius: 14px;
        padding: 1.1rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }

      .rcv-bin-card:hover {
        border-color: var(--border-glow, rgba(59, 130, 246, 0.4));
        box-shadow: 0 8px 26px rgba(0, 0, 0, 0.28);
      }

      .rcv-bin-card.rcv-bin-x86 {
        border-left: 3px solid var(--accent-amber, #f59e0b);
      }

      .rcv-bin-card.rcv-bin-x64 {
        border-left: 3px solid var(--primary, #3b82f6);
      }

      .rcv-bin-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        flex-wrap: wrap;
      }

      .rcv-bin-name {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .rcv-arch-pill {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.2rem 0.55rem;
        border-radius: 6px;
        background: rgba(59, 130, 246, 0.14);
        color: var(--primary, #60a5fa);
        border: 1px solid rgba(59, 130, 246, 0.3);
      }

      .rcv-arch-pill.x86 {
        background: rgba(245, 158, 11, 0.14);
        color: var(--accent-amber, #fbbf24);
        border-color: rgba(245, 158, 11, 0.32);
      }

      .rcv-bin-meta {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: var(--text-muted, #94a3b8);
      }

      .rcv-bin-size-strong {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        color: var(--text-main, #f8fafc);
        font-weight: 600;
      }

      .rcv-hash-box {
        background: var(--bg-deep, rgba(7, 10, 19, 0.85));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
        border-radius: 8px;
        padding: 0.55rem 0.75rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        color: var(--accent-emerald, #34d399);
        word-break: break-all;
        line-height: 1.45;
        user-select: all;
      }

      .rcv-bin-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.15rem;
      }

      .rcv-mini-btn {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.73rem;
        font-weight: 600;
        padding: 0.42rem 0.75rem;
        border-radius: 8px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.2));
        background: var(--bg-card, rgba(30, 41, 59, 0.7));
        color: var(--text-main, #f8fafc);
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        text-decoration: none;
        transition: all 0.18s ease;
      }

      .rcv-mini-btn:hover {
        border-color: var(--primary, #3b82f6);
        background: rgba(59, 130, 246, 0.14);
      }

      .rcv-mini-btn.primary-dl {
        background: var(--primary, #3b82f6);
        border-color: var(--primary, #3b82f6);
        color: #ffffff;
        margin-left: auto;
      }

      .rcv-mini-btn.primary-dl:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 16px var(--primary-glow, rgba(59, 130, 246, 0.35));
      }

      /* Main 2-Column Interactive Grid */
      .rcv-main-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 1.5rem;
        align-items: stretch;
      }

      .rcv-panel {
        background: var(--bg-surface, rgba(15, 23, 42, 0.65));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.15));
        border-radius: 16px;
        padding: 1.4rem;
        display: flex;
        flex-direction: column;
        gap: 1.15rem;
      }

      .rcv-panel-tag {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--primary, #60a5fa);
      }

      .rcv-panel-title {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
        margin: 0.2rem 0 0.35rem 0;
      }

      .rcv-panel-desc {
        font-size: 0.83rem;
        color: var(--text-muted, #94a3b8);
        line-height: 1.5;
        margin: 0;
      }

      /* Terminal Widget */
      .rcv-term-window {
        background: var(--bg-deep, #070b14);
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.2));
        border-radius: 12px;
        overflow: hidden;
        box-shadow: inset 0 2px 12px rgba(0, 0, 0, 0.5);
      }

      .rcv-term-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.6rem 0.85rem;
        background: rgba(15, 23, 42, 0.9);
        border-bottom: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.15));
      }

      .rcv-term-tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
      }

      .rcv-term-tab {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.73rem;
        font-weight: 600;
        padding: 0.38rem 0.7rem;
        border-radius: 7px;
        border: 1px solid transparent;
        background: transparent;
        color: var(--text-muted, #94a3b8);
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .rcv-term-tab:hover {
        color: var(--text-main, #f8fafc);
        background: rgba(255, 255, 255, 0.05);
      }

      .rcv-term-tab.active {
        color: var(--text-main, #ffffff);
        background: rgba(59, 130, 246, 0.18);
        border-color: var(--primary, #3b82f6);
        box-shadow: 0 0 12px var(--primary-glow, rgba(59, 130, 246, 0.2));
      }

      .rcv-term-actions {
        display: flex;
        align-items: center;
        gap: 0.45rem;
      }

      .rcv-btn-copy-cmd,
      .rcv-btn-sim-cmd {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 600;
        padding: 0.38rem 0.75rem;
        border-radius: 7px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: all 0.18s ease;
      }

      .rcv-btn-copy-cmd {
        background: var(--primary, #3b82f6);
        border: 1px solid var(--primary, #3b82f6);
        color: #ffffff;
      }

      .rcv-btn-copy-cmd:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 14px var(--primary-glow, rgba(59, 130, 246, 0.35));
      }

      .rcv-btn-sim-cmd {
        background: rgba(16, 185, 129, 0.13);
        border: 1px solid rgba(16, 185, 129, 0.35);
        color: var(--accent-emerald, #34d399);
      }

      .rcv-btn-sim-cmd:hover {
        background: rgba(16, 185, 129, 0.22);
      }

      .rcv-term-body {
        padding: 1rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.76rem;
        line-height: 1.55;
      }

      .rcv-term-cmd-line {
        background: rgba(30, 41, 59, 0.55);
        border: 1px solid rgba(148, 163, 184, 0.14);
        border-radius: 8px;
        padding: 0.65rem 0.8rem;
        margin-bottom: 0.85rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.45rem;
        word-break: break-all;
      }

      .rcv-term-prompt {
        color: var(--primary, #60a5fa);
        font-weight: 700;
        user-select: none;
      }

      .rcv-term-cmd-text {
        color: #f8fafc;
        font-weight: 600;
        user-select: all;
      }

      .rcv-term-output-label {
        font-size: 0.67rem;
        letter-spacing: 0.07em;
        color: var(--text-muted, #94a3b8);
        margin-bottom: 0.45rem;
        text-transform: uppercase;
      }

      .rcv-term-output-box {
        background: rgba(2, 6, 14, 0.72);
        border-left: 3px solid var(--accent-emerald, #10b981);
        border-radius: 6px;
        padding: 0.65rem 0.85rem;
        color: #cbd5e1;
      }

      .rcv-term-output-line {
        word-break: break-all;
        margin-bottom: 0.2rem;
      }

      .rcv-term-output-line.hash-highlight {
        color: var(--accent-emerald, #34d399);
        font-weight: 700;
      }

      .rcv-term-match-pill {
        margin-top: 0.55rem;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--accent-emerald, #34d399);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.28);
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
      }

      /* Live Hash Validator Box */
      .rcv-validator-card {
        background: var(--bg-deep, rgba(9, 13, 24, 0.78));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.16));
        border-radius: 12px;
        padding: 1.1rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }

      .rcv-input-wrap {
        position: relative;
        display: flex;
        align-items: center;
      }

      .rcv-hash-input {
        width: 100%;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.78rem;
        padding: 0.75rem 2.4rem 0.75rem 0.9rem;
        border-radius: 9px;
        background: rgba(15, 23, 42, 0.9);
        border: 1.5px solid var(--border-subtle, rgba(148, 163, 184, 0.24));
        color: var(--text-main, #f8fafc);
        outline: none;
        transition: all 0.2s ease;
      }

      .rcv-hash-input:focus {
        border-color: var(--primary, #3b82f6);
        box-shadow: 0 0 0 3px var(--primary-glow, rgba(59, 130, 246, 0.2));
      }

      .rcv-hash-input.valid {
        border-color: var(--accent-emerald, #10b981);
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);
      }

      .rcv-hash-input.invalid {
        border-color: #ef4444;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.18);
      }

      .rcv-input-clear {
        position: absolute;
        right: 0.55rem;
        background: transparent;
        border: none;
        color: var(--text-muted, #94a3b8);
        font-size: 0.95rem;
        cursor: pointer;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
      }

      .rcv-input-clear:hover {
        color: var(--text-main, #ffffff);
      }

      .rcv-quick-pills {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4rem;
      }

      .rcv-quick-label {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        color: var(--text-muted, #94a3b8);
        margin-right: 0.2rem;
      }

      .rcv-pill-btn {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.69rem;
        font-weight: 600;
        padding: 0.28rem 0.6rem;
        border-radius: 6px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.2));
        background: rgba(30, 41, 59, 0.65);
        color: var(--text-main, #e2e8f0);
        cursor: pointer;
        transition: all 0.16s ease;
      }

      .rcv-pill-btn:hover {
        border-color: var(--primary, #3b82f6);
        color: #ffffff;
      }

      .rcv-pill-btn.bad:hover {
        border-color: #ef4444;
        color: #fca5a5;
      }

      /* Cryptographic Seal Result Banner */
      .rcv-seal-banner {
        border-radius: 10px;
        padding: 0.85rem 1rem;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.18));
        background: rgba(15, 23, 42, 0.6);
        transition: all 0.22s ease;
      }

      .rcv-seal-banner.seal-valid {
        background: rgba(16, 185, 129, 0.11);
        border-color: rgba(16, 185, 129, 0.45);
        box-shadow: 0 0 24px rgba(16, 185, 129, 0.14);
      }

      .rcv-seal-banner.seal-partial {
        background: rgba(245, 158, 11, 0.11);
        border-color: rgba(245, 158, 11, 0.45);
      }

      .rcv-seal-banner.seal-invalid {
        background: rgba(239, 68, 68, 0.11);
        border-color: rgba(239, 68, 68, 0.45);
      }

      .rcv-seal-icon {
        width: 34px;
        height: 34px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-size: 1.05rem;
        font-weight: 800;
        background: rgba(148, 163, 184, 0.12);
        color: var(--text-muted, #94a3b8);
      }

      .rcv-seal-banner.seal-valid .rcv-seal-icon {
        background: rgba(16, 185, 129, 0.2);
        color: var(--accent-emerald, #34d399);
        box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
      }

      .rcv-seal-banner.seal-partial .rcv-seal-icon {
        background: rgba(245, 158, 11, 0.2);
        color: var(--accent-amber, #fbbf24);
      }

      .rcv-seal-banner.seal-invalid .rcv-seal-icon {
        background: rgba(239, 68, 68, 0.2);
        color: #f87171;
      }

      .rcv-seal-title {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.76rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
        margin-bottom: 0.2rem;
      }

      .rcv-seal-banner.seal-valid .rcv-seal-title {
        color: var(--accent-emerald, #34d399);
      }

      .rcv-seal-banner.seal-invalid .rcv-seal-title {
        color: #fca5a5;
      }

      .rcv-seal-sub {
        font-size: 0.77rem;
        color: var(--text-muted, #94a3b8);
        line-height: 1.45;
      }

      .rcv-file-drop {
        border: 1px dashed var(--border-subtle, rgba(148, 163, 184, 0.28));
        border-radius: 8px;
        padding: 0.55rem 0.75rem;
        text-align: center;
        font-size: 0.74rem;
        color: var(--text-muted, #94a3b8);
        cursor: pointer;
        transition: all 0.18s ease;
        background: rgba(15, 23, 42, 0.4);
      }

      .rcv-file-drop:hover,
      .rcv-file-drop.dragover {
        border-color: var(--primary, #3b82f6);
        color: var(--text-main, #f8fafc);
        background: rgba(59, 130, 246, 0.08);
      }

      /* Right Column: Interactive PIN 3910 Security Gate */
      .rcv-pin-gate-window {
        background: var(--bg-deep, #070b14);
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.22));
        border-radius: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 14px 34px rgba(0, 0, 0, 0.4);
      }

      .rcv-pin-titlebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.65rem 0.9rem;
        background: rgba(15, 23, 42, 0.92);
        border-bottom: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.15));
      }

      .rcv-pin-dots {
        display: flex;
        gap: 6px;
      }

      .rcv-pin-dots span {
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }

      .rcv-pin-win-title {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        color: var(--text-muted, #94a3b8);
      }

      .rcv-pin-body {
        padding: 1.2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
      }

      .rcv-pin-status-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.35);
        color: var(--accent-amber, #fbbf24);
      }

      .rcv-pin-status-bar.unlocked {
        background: rgba(16, 185, 129, 0.14);
        border-color: rgba(16, 185, 129, 0.42);
        color: var(--accent-emerald, #34d399);
      }

      .rcv-pin-status-bar.error {
        background: rgba(239, 68, 68, 0.15);
        border-color: rgba(239, 68, 68, 0.45);
        color: #f87171;
      }

      .rcv-pin-slots {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.65rem;
        margin: 0.15rem 0;
      }

      .rcv-pin-slot {
        height: 54px;
        border-radius: 10px;
        background: rgba(15, 23, 42, 0.9);
        border: 1.5px solid var(--border-subtle, rgba(148, 163, 184, 0.25));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 1.35rem;
        font-weight: 800;
        color: var(--text-main, #f8fafc);
        position: relative;
        transition: all 0.18s ease;
      }

      .rcv-pin-slot.filled {
        border-color: var(--primary, #3b82f6);
        box-shadow: 0 0 14px var(--primary-glow, rgba(59, 130, 246, 0.25));
        color: var(--primary, #60a5fa);
      }

      .rcv-pin-slot.unlocked {
        border-color: var(--accent-emerald, #10b981);
        box-shadow: 0 0 16px rgba(16, 185, 129, 0.28);
        color: var(--accent-emerald, #34d399);
      }

      .rcv-pin-slot.error {
        border-color: #ef4444;
        color: #f87171;
      }

      .rcv-pin-slot-hint {
        position: absolute;
        bottom: 3px;
        right: 6px;
        font-size: 0.58rem;
        color: rgba(148, 163, 184, 0.35);
        font-weight: 500;
      }

      .rcv-keypad-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
      }

      .rcv-key-btn {
        height: 42px;
        border-radius: 9px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.2));
        background: rgba(30, 41, 59, 0.72);
        color: var(--text-main, #f8fafc);
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.95rem;
        font-weight: 700;
        cursor: pointer;
        position: relative;
        transition: all 0.15s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
      }

      .rcv-key-btn:hover {
        border-color: var(--primary, #3b82f6);
        background: rgba(59, 130, 246, 0.18);
        transform: translateY(-1px);
      }

      .rcv-key-btn.target-digit {
        border-color: rgba(59, 130, 246, 0.38);
      }

      .rcv-key-btn.active-press {
        background: var(--primary, #3b82f6);
        border-color: var(--primary, #3b82f6);
        color: #ffffff;
        transform: scale(0.96);
        box-shadow: 0 0 18px var(--primary-glow, rgba(59, 130, 246, 0.5));
      }

      .rcv-key-step-badge {
        font-size: 0.58rem;
        font-weight: 700;
        color: var(--accent-amber, #fbbf24);
        background: rgba(245, 158, 11, 0.16);
        padding: 0.05rem 0.3rem;
        border-radius: 4px;
      }

      .rcv-pin-cta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .rcv-btn-autopin {
        flex: 1;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.76rem;
        font-weight: 700;
        padding: 0.6rem 0.9rem;
        border-radius: 9px;
        border: 1px solid var(--primary, #3b82f6);
        background: linear-gradient(135deg, var(--primary, #3b82f6), #2563eb);
        color: #ffffff;
        cursor: pointer;
        transition: all 0.18s ease;
        text-align: center;
      }

      .rcv-btn-autopin:hover {
        filter: brightness(1.1);
        box-shadow: 0 0 20px var(--primary-glow, rgba(59, 130, 246, 0.4));
      }

      .rcv-btn-secondary-pin {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.74rem;
        font-weight: 600;
        padding: 0.6rem 0.85rem;
        border-radius: 9px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.25));
        background: rgba(30, 41, 59, 0.75);
        color: var(--text-main, #f8fafc);
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .rcv-btn-secondary-pin:hover {
        border-color: var(--accent-amber, #f59e0b);
      }

      /* Unlocked Telemetry View */
      .rcv-telemetry-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.6rem;
      }

      .rcv-tel-card {
        background: rgba(15, 23, 42, 0.82);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 9px;
        padding: 0.65rem 0.75rem;
      }

      .rcv-tel-label {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.63rem;
        color: var(--text-muted, #94a3b8);
        letter-spacing: 0.05em;
        margin-bottom: 0.2rem;
      }

      .rcv-tel-val {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--accent-emerald, #34d399);
        margin-bottom: 0.15rem;
      }

      .rcv-tel-meta {
        font-size: 0.69rem;
        color: var(--text-muted, #94a3b8);
        line-height: 1.35;
      }

      .rcv-tel-footer {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        color: var(--accent-emerald, #34d399);
        background: rgba(16, 185, 129, 0.08);
        border: 1px solid rgba(16, 185, 129, 0.24);
        border-radius: 8px;
        padding: 0.55rem 0.75rem;
        line-height: 1.45;
      }

      @media (max-width: 980px) {
        .rcv-manifest-grid,
        .rcv-main-grid {
          grid-template-columns: 1fr;
        }
        .rcv-shell {
          padding: 1.35rem;
        }
      }

      @media (max-width: 560px) {
        .rcv-telemetry-grid {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureMountNode() {
    let mount = document.getElementById('crypto-verifier-mount');
    if (mount) return mount;

    const downloadsContainer =
      document.querySelector('#downloads .container') ||
      document.getElementById('downloads') ||
      document.querySelector('main');

    if (downloadsContainer) {
      mount = document.createElement('div');
      mount.id = 'crypto-verifier-mount';
      downloadsContainer.appendChild(mount);
    }
    return mount;
  }

  function renderSealHtml(evalResult) {
    if (state.fileCheckInfo && state.fileCheckInfo.computing) {
      return `
        <div class="rcv-seal-banner seal-partial">
          <div class="rcv-seal-icon">⏳</div>
          <div>
            <div class="rcv-seal-title">${t('fileComputing')}</div>
            <div class="rcv-seal-sub">${state.fileCheckInfo.fileName}</div>
          </div>
        </div>
      `;
    }

    if (evalResult.status === 'valid-x64') {
      return `
        <div class="rcv-seal-banner seal-valid" role="status">
          <div class="rcv-seal-icon">✓</div>
          <div>
            <div class="rcv-seal-title">${t('sealValidX64Title')}</div>
            <div class="rcv-seal-sub">${t('sealValidX64Sub')}</div>
          </div>
        </div>
      `;
    }

    if (evalResult.status === 'valid-x86') {
      return `
        <div class="rcv-seal-banner seal-valid" role="status">
          <div class="rcv-seal-icon">✓</div>
          <div>
            <div class="rcv-seal-title">${t('sealValidX86Title')}</div>
            <div class="rcv-seal-sub">${t('sealValidX86Sub')}</div>
          </div>
        </div>
      `;
    }

    if (evalResult.status === 'partial') {
      const subText = t('sealPartialSub').replace('{arch}', evalResult.arch.toUpperCase());
      return `
        <div class="rcv-seal-banner seal-partial" role="status">
          <div class="rcv-seal-icon">≈</div>
          <div style="flex:1;">
            <div class="rcv-seal-title">${t('sealPartialTitle')}</div>
            <div class="rcv-seal-sub">${subText}</div>
            <button type="button" class="rcv-pill-btn" data-rcv-action="fill-hash" data-hash="${evalResult.fullHash}" style="margin-top:0.45rem;">
              ${t('sealPartialBtn')}
            </button>
          </div>
        </div>
      `;
    }

    if (evalResult.status === 'invalid') {
      return `
        <div class="rcv-seal-banner seal-invalid" role="alert">
          <div class="rcv-seal-icon">✕</div>
          <div>
            <div class="rcv-seal-title">${t('sealInvalidTitle')}</div>
            <div class="rcv-seal-sub">${t('sealInvalidSub')}</div>
          </div>
        </div>
      `;
    }

    return `
      <div class="rcv-seal-banner" role="status">
        <div class="rcv-seal-icon">#</div>
        <div>
          <div class="rcv-seal-title">${t('sealIdleTitle')}</div>
          <div class="rcv-seal-sub">${t('sealIdleSub')}</div>
        </div>
      </div>
    `;
  }

  function renderPinGateContent() {
    const isUnlocked = state.pinState === 'unlocked';
    const isError = state.pinState === 'error';
    const statusClass = isUnlocked ? 'unlocked' : isError ? 'error' : '';
    const statusText = isUnlocked
      ? t('pinStatusUnlocked')
      : isError
      ? t('pinStatusError')
      : state.enteredPin.length > 0
      ? t('pinStatusTyping')
      : t('pinStatusLocked');

    const expectedDigits = ['3', '9', '1', '0'];
    const slotsHtml = expectedDigits
      .map((hintDigit, idx) => {
        const char = state.enteredPin[idx] || '';
        const slotClasses = [
          'rcv-pin-slot',
          char ? 'filled' : '',
          isUnlocked ? 'unlocked' : '',
          isError ? 'error' : ''
        ]
          .filter(Boolean)
          .join(' ');
        return `
          <div class="${slotClasses}">
            <span>${char || '•'}</span>
            <span class="rcv-pin-slot-hint">${hintDigit}</span>
          </div>
        `;
      })
      .join('');

    if (isUnlocked) {
      return `
        <div class="rcv-pin-status-bar unlocked">
          <span>🔓 ${statusText}</span>
          <span>PIN: 3910 ✓</span>
        </div>
        <div class="rcv-pin-slots">${slotsHtml}</div>
        <div style="margin-top:0.2rem;">
          <div style="font-family:var(--font-mono);font-size:0.74rem;font-weight:700;color:var(--accent-emerald, #34d399);margin-bottom:0.2rem;">
            ${t('telemetryHeader')}
          </div>
          <div style="font-size:0.76rem;color:var(--text-muted, #94a3b8);margin-bottom:0.65rem;">
            ${t('telemetrySub')}
          </div>
          <div class="rcv-telemetry-grid">
            <div class="rcv-tel-card">
              <div class="rcv-tel-label">${t('telItem1Label')}</div>
              <div class="rcv-tel-val">${t('telItem1Val')}</div>
              <div class="rcv-tel-meta">${t('telItem1Meta')}</div>
            </div>
            <div class="rcv-tel-card">
              <div class="rcv-tel-label">${t('telItem2Label')}</div>
              <div class="rcv-tel-val">${t('telItem2Val')}</div>
              <div class="rcv-tel-meta">${t('telItem2Meta')}</div>
            </div>
            <div class="rcv-tel-card">
              <div class="rcv-tel-label">${t('telItem3Label')}</div>
              <div class="rcv-tel-val">${t('telItem3Val')}</div>
              <div class="rcv-tel-meta">${t('telItem3Meta')}</div>
            </div>
            <div class="rcv-tel-card">
              <div class="rcv-tel-label">${t('telItem4Label')}</div>
              <div class="rcv-tel-val">${t('telItem4Val')}</div>
              <div class="rcv-tel-meta">${t('telItem4Meta')}</div>
            </div>
          </div>
        </div>
        <div class="rcv-tel-footer">${t('telFooterNote')}</div>
      `;
    }

    const keypadLayout = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'CLR', '0', 'BACK'];
    const pinStepMap = { '3': '#1', '9': '#2', '1': '#3', '0': '#4' };

    const keysHtml = keypadLayout
      .map((key) => {
        if (key === 'CLR') {
          return `<button type="button" class="rcv-key-btn" data-rcv-action="pin-clear">${t('pinClearKey')}</button>`;
        }
        if (key === 'BACK') {
          return `<button type="button" class="rcv-key-btn" data-rcv-action="pin-back">${t('pinBackKey')}</button>`;
        }
        const stepBadge = pinStepMap[key]
          ? `<span class="rcv-key-step-badge">${pinStepMap[key]}</span>`
          : '';
        const isTarget = Boolean(pinStepMap[key]);
        const isHighlighted = state.activeKeyHighlight === key;
        return `
          <button type="button" class="rcv-key-btn ${isTarget ? 'target-digit' : ''} ${
          isHighlighted ? 'active-press' : ''
        }" data-rcv-action="pin-digit" data-digit="${key}">
            <span>${key}</span>
            ${stepBadge}
          </button>
        `;
      })
      .join('');

    return `
      <div class="rcv-pin-status-bar ${statusClass}">
        <span>🔒 ${statusText}</span>
        <span>PIN: 3910</span>
      </div>
      <div class="rcv-pin-slots">${slotsHtml}</div>
      <div style="font-size:0.76rem;color:var(--text-muted, #94a3b8);">
        ${t('pinInstruction')}
      </div>
      <div class="rcv-keypad-grid">
        ${keysHtml}
      </div>
    `;
  }

  function render() {
    state.lang = getLang();
    injectStyles();
    const mount = ensureMountNode();
    if (!mount) return;

    const termData = getTerminalCommandData(state.activeTermTab);
    const evalResult = evaluateHashInput(state.validatorInput);
    const inputStateClass =
      evalResult.status === 'valid-x64' || evalResult.status === 'valid-x86'
        ? 'valid'
        : evalResult.status === 'invalid'
        ? 'invalid'
        : '';

    const visibleLines = state.isSimulatingTerm
      ? termData.lines.slice(0, state.simProgressLines)
      : termData.lines;

    const outputLinesHtml = visibleLines
      .map((line) => {
        const isHashLine =
          line.includes(RELEASE_DATA.x64.sha256) || line.includes(RELEASE_DATA.x86.sha256);
        return `<div class="rcv-term-output-line ${isHashLine ? 'hash-highlight' : ''}">${line}</div>`;
      })
      .join('');

    mount.innerHTML = `
      <div class="rcv-shell" data-skin="${window.currentRecoilSkin || 'default'}">
        <!-- Header -->
        <div class="rcv-top-header">
          <div>
            <div class="rcv-badge">
              <span class="rcv-badge-dot"></span>
              <span>${t('headerBadge')}</span>
            </div>
            <h3 class="rcv-title">${t('headerTitle')}</h3>
            <p class="rcv-subtitle">${t('headerSubtitle')}</p>
          </div>
          <a href="${RELEASE_DATA.releaseUrl}" class="rcv-release-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>${t('releaseLinkLabel')}</span>
          </a>
        </div>

        <!-- 2-Column Interactive Center -->
        <div class="rcv-main-grid">
          <!-- LEFT COLUMN: PowerShell/CMD Terminal + Live Hash Validator -->
          <div class="rcv-panel">
            <div>
              <div class="rcv-panel-tag">${t('termPanelTag')}</div>
              <h4 class="rcv-panel-title">${t('termPanelTitle')}</h4>
              <p class="rcv-panel-desc">${t('termPanelDesc')}</p>
            </div>

            <!-- Interactive Terminal -->
            <div class="rcv-term-window">
              <div class="rcv-term-topbar">
                <div class="rcv-term-tabs" role="tablist">
                  <button type="button" role="tab" aria-selected="${state.activeTermTab === 'ps64'}" class="rcv-term-tab ${
      state.activeTermTab === 'ps64' ? 'active' : ''
    }" data-rcv-action="switch-tab" data-tab="ps64">
                    ${t('tabPs64')}
                  </button>
                  <button type="button" role="tab" aria-selected="${state.activeTermTab === 'ps86'}" class="rcv-term-tab ${
      state.activeTermTab === 'ps86' ? 'active' : ''
    }" data-rcv-action="switch-tab" data-tab="ps86">
                    ${t('tabPs86')}
                  </button>
                  <button type="button" role="tab" aria-selected="${state.activeTermTab === 'cmd'}" class="rcv-term-tab ${
      state.activeTermTab === 'cmd' ? 'active' : ''
    }" data-rcv-action="switch-tab" data-tab="cmd">
                    ${t('tabCmd')}
                  </button>
                </div>

                <div class="rcv-term-actions">
                  <button type="button" class="rcv-btn-sim-cmd" data-rcv-action="simulate-term">
                    ▶ <span>${state.isSimulatingTerm ? t('runningSimBtn') : t('runSimBtn')}</span>
                  </button>
                  <button type="button" class="rcv-btn-copy-cmd" data-rcv-action="copy-cmd" data-cmd="${termData.command.replace(/"/g, '&quot;')}">
                    📋 <span>${t('copyCmdBtn')}</span>
                  </button>
                </div>
              </div>

              <div class="rcv-term-body">
                <div class="rcv-term-cmd-line">
                  <span class="rcv-term-prompt">${termData.promptPrefix}</span>
                  <span class="rcv-term-cmd-text">${termData.command}</span>
                </div>

                <div class="rcv-term-output-label">${t('termExpectedHeader')}</div>
                <div class="rcv-term-output-box">
                  ${outputLinesHtml}
                  <div class="rcv-term-match-pill">
                    <span>✓</span>
                    <span>${t('termStatusMatch')}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Live Hash Validator Input Box -->
            <div class="rcv-validator-card">
              <div>
                <div class="rcv-panel-tag">${t('validatorTag')}</div>
                <h5 style="font-size:0.98rem;font-weight:700;margin:0.2rem 0 0.25rem 0;color:var(--text-main);">${t('validatorTitle')}</h5>
                <p style="font-size:0.78rem;color:var(--text-muted);margin:0;line-height:1.45;">${t('validatorDesc')}</p>
              </div>

              <div class="rcv-input-wrap">
                <input
                  type="text"
                  id="rcv-live-hash-input"
                  class="rcv-hash-input ${inputStateClass}"
                  placeholder="${t('validatorPlaceholder')}"
                  value="${state.validatorInput.replace(/"/g, '&quot;')}"
                  autocomplete="off"
                  spellcheck="false"
                  aria-label="${t('validatorTitle')}"
                />
                ${
                  state.validatorInput
                    ? `<button type="button" class="rcv-input-clear" data-rcv-action="clear-hash" title="${t('quickClear')}">✕</button>`
                    : ''
                }
              </div>

              <div class="rcv-quick-pills">
                <span class="rcv-quick-label">${t('quickFillLabel')}</span>
                <button type="button" class="rcv-pill-btn" data-rcv-action="fill-hash" data-hash="${RELEASE_DATA.x64.sha256}">
                  ✓ ${t('quickFillX64')}
                </button>
                <button type="button" class="rcv-pill-btn" data-rcv-action="fill-hash" data-hash="${RELEASE_DATA.x86.sha256}">
                  ✓ ${t('quickFillX86')}
                </button>
                <button type="button" class="rcv-pill-btn bad" data-rcv-action="fill-hash" data-hash="0000DEAD99E8A5F73D99A0DE74FD05B463DAA0DC25334E1B4F96CC5FA4F99999">
                  ⚠ ${t('quickFillBad')}
                </button>
              </div>

              <div id="rcv-seal-container">
                ${renderSealHtml(evalResult)}
              </div>

              <label class="rcv-file-drop" id="rcv-file-drop-zone">
                <input type="file" id="rcv-local-file-input" accept=".exe,*/*" style="display:none;" />
                <span>🛡️ ${t('fileDropLabel')}</span>
              </label>
            </div>
          </div>

          <!-- RIGHT COLUMN: Interactive PIN 3910 Unlock Preview Widget -->
          <div class="rcv-panel">
            <div>
              <div class="rcv-panel-tag">${t('pinPanelTag')}</div>
              <h4 class="rcv-panel-title">${t('pinPanelTitle')}</h4>
              <p class="rcv-panel-desc">${t('pinPanelDesc')}</p>
            </div>

            <div class="rcv-pin-cta-row">
              <button type="button" class="rcv-btn-autopin" id="btn-auto-pin-3910" data-rcv-action="auto-pin">
                ${t('pinAutoBtn')}
              </button>
              <button type="button" class="rcv-btn-secondary-pin" data-rcv-action="copy-pin">
                🔑 <span>${t('pinCopyBtn')}</span>
              </button>
              ${
                state.pinState === 'unlocked' || state.enteredPin.length > 0
                  ? `<button type="button" class="rcv-btn-secondary-pin" data-rcv-action="pin-reset">🔄 ${t('pinResetBtn')}</button>`
                  : ''
              }
            </div>

            <div class="rcv-pin-gate-window">
              <div class="rcv-pin-titlebar">
                <div class="rcv-pin-dots">
                  <span style="background:#ef4444;"></span>
                  <span style="background:#f59e0b;"></span>
                  <span style="background:#10b981;"></span>
                </div>
                <span class="rcv-pin-win-title">${t('pinGateWindowTitle')}</span>
                <span style="font-family:var(--font-mono);font-size:0.68rem;color:var(--accent-emerald,#34d399);">PIN: 3910</span>
              </div>

              <div class="rcv-pin-body" id="rcv-pin-body-container">
                ${renderPinGateContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    bindLocalEvents(mount);
    syncLegacyDownloadCards();

    if (typeof window.refreshRecoilMotion === 'function') {
      try {
        window.refreshRecoilMotion();
      } catch (_) {}
    }
  }

  function updateValidatorOnly() {
    const inputEl = document.getElementById('rcv-live-hash-input');
    const sealContainer = document.getElementById('rcv-seal-container');
    if (!inputEl || !sealContainer) {
      render();
      return;
    }
    const evalResult = evaluateHashInput(state.validatorInput);
    inputEl.classList.remove('valid', 'invalid');
    if (evalResult.status === 'valid-x64' || evalResult.status === 'valid-x86') {
      inputEl.classList.add('valid');
    } else if (evalResult.status === 'invalid') {
      inputEl.classList.add('invalid');
    }
    sealContainer.innerHTML = renderSealHtml(evalResult);
  }

  function handlePinDigit(digit) {
    if (state.pinState === 'unlocked') {
      state.enteredPin = '';
      state.pinState = 'locked';
    }
    if (state.pinState === 'error') {
      state.enteredPin = '';
      state.pinState = 'typing';
    }
    if (state.enteredPin.length >= 4) return;

    state.enteredPin += String(digit);
    state.pinState = 'typing';

    if (state.enteredPin.length === 4) {
      if (state.enteredPin === RELEASE_DATA.pin) {
        state.pinState = 'unlocked';
      } else {
        state.pinState = 'error';
        setTimeout(() => {
          if (state.pinState === 'error') {
            state.enteredPin = '';
            state.pinState = 'locked';
            render();
          }
        }, 1100);
      }
    }
    render();
  }

  function runAutoPinDemo() {
    if (state.autoPinTimer) {
      clearInterval(state.autoPinTimer);
      state.autoPinTimer = null;
    }
    state.enteredPin = '';
    state.pinState = 'typing';
    state.activeKeyHighlight = null;
    render();

    const sequence = ['3', '9', '1', '0'];
    let idx = 0;

    state.autoPinTimer = setInterval(() => {
      if (idx >= sequence.length) {
        clearInterval(state.autoPinTimer);
        state.autoPinTimer = null;
        state.activeKeyHighlight = null;
        render();
        return;
      }
      const d = sequence[idx];
      state.activeKeyHighlight = d;
      handlePinDigit(d);
      idx += 1;
    }, 220);
  }

  function runTerminalSimulation() {
    const termData = getTerminalCommandData(state.activeTermTab);
    state.isSimulatingTerm = true;
    state.simProgressLines = 1;
    render();

    const interval = setInterval(() => {
      state.simProgressLines += 1;
      if (state.simProgressLines >= termData.lines.length) {
        clearInterval(interval);
        state.isSimulatingTerm = false;
        state.validatorInput = termData.targetHash;
      }
      render();
    }, 140);
  }

  async function computeLocalFileHash(file) {
    if (!file || !window.crypto || !window.crypto.subtle) return;
    state.fileCheckInfo = { computing: true, fileName: file.name };
    updateValidatorOnly();

    try {
      const arrayBuffer = await file.arrayBuffer();
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();

      state.fileCheckInfo = { computing: false, fileName: file.name };
      state.validatorInput = hashHex;
      render();
    } catch (_) {
      state.fileCheckInfo = null;
      render();
    }
  }

  function bindLocalEvents(mount) {
    const hashInput = mount.querySelector('#rcv-live-hash-input');
    if (hashInput) {
      hashInput.addEventListener('input', (e) => {
        state.fileCheckInfo = null;
        state.validatorInput = e.target.value;
        updateValidatorOnly();
      });
    }

    const fileInput = mount.querySelector('#rcv-local-file-input');
    const dropZone = mount.querySelector('#rcv-file-drop-zone');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const f = e.target.files && e.target.files[0];
        if (f) computeLocalFileHash(f);
      });
    }
    if (dropZone) {
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
      });
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) computeLocalFileHash(f);
      });
    }

    mount.onclick = (e) => {
      const btn = e.target.closest('[data-rcv-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-rcv-action');

      if (action === 'switch-tab') {
        const tab = btn.getAttribute('data-tab');
        if (tab && tab !== state.activeTermTab) {
          state.activeTermTab = tab;
          state.isSimulatingTerm = false;
          render();
        }
        return;
      }

      if (action === 'copy-cmd') {
        const termData = getTerminalCommandData(state.activeTermTab);
        copyToClipboard(termData.command, () => {
          const span = btn.querySelector('span');
          if (span) {
            const orig = span.textContent;
            span.textContent = t('copiedCmdBtn');
            setTimeout(() => {
              span.textContent = orig;
            }, 1600);
          }
        });
        return;
      }

      if (action === 'simulate-term') {
        runTerminalSimulation();
        return;
      }

      if (action === 'copy-hash') {
        const hash = btn.getAttribute('data-hash') || '';
        copyToClipboard(hash, () => {
          const span = btn.querySelector('span');
          if (span) {
            const orig = span.textContent;
            span.textContent = t('copiedHashBtn');
            setTimeout(() => {
              span.textContent = orig;
            }, 1600);
          }
        });
        return;
      }

      if (action === 'fill-hash') {
        const hash = btn.getAttribute('data-hash') || '';
        state.fileCheckInfo = null;
        state.validatorInput = hash;
        render();
        return;
      }

      if (action === 'clear-hash') {
        state.fileCheckInfo = null;
        state.validatorInput = '';
        render();
        return;
      }

      if (action === 'pin-digit') {
        const digit = btn.getAttribute('data-digit');
        if (digit !== null) handlePinDigit(digit);
        return;
      }

      if (action === 'pin-clear' || action === 'pin-reset') {
        if (state.autoPinTimer) {
          clearInterval(state.autoPinTimer);
          state.autoPinTimer = null;
        }
        state.enteredPin = '';
        state.pinState = 'locked';
        state.activeKeyHighlight = null;
        render();
        return;
      }

      if (action === 'pin-back') {
        if (state.pinState === 'unlocked') {
          state.enteredPin = '';
          state.pinState = 'locked';
        } else {
          state.enteredPin = state.enteredPin.slice(0, -1);
          state.pinState = state.enteredPin.length ? 'typing' : 'locked';
        }
        render();
        return;
      }

      if (action === 'auto-pin') {
        runAutoPinDemo();
        return;
      }

      if (action === 'copy-pin') {
        copyToClipboard(RELEASE_DATA.pin, () => {
          const span = btn.querySelector('span');
          if (span) {
            const orig = span.textContent;
            span.textContent = t('pinCopiedBtn');
            setTimeout(() => {
              span.textContent = orig;
            }, 1600);
          }
        });
      }
    };
  }

  // Ensure any existing download cards in #downloads also reflect accurate v1.0.0 hashes, sizes & direct download URLs
  function syncLegacyDownloadCards() {
    const card64 = document.getElementById('card-x64');
    if (card64) {
      const badge64 = card64.querySelector('.arch-title .badge');
      if (badge64) badge64.textContent = RELEASE_DATA.x64.sizeFormatted;
      const hashText64 = card64.querySelector('.hash-text');
      if (hashText64) {
        hashText64.setAttribute('title', RELEASE_DATA.x64.sha256);
        hashText64.textContent = 'SHA256: ' + RELEASE_DATA.x64.sha256.slice(0, 16) + '...';
      }
      const btnHash64 = card64.querySelector('.btn-copy-hash');
      if (btnHash64) btnHash64.setAttribute('data-hash', RELEASE_DATA.x64.sha256);
      const dlLink64 = card64.querySelector('a.btn-download, a[download]');
      if (dlLink64) {
        dlLink64.setAttribute('href', RELEASE_DATA.x64.downloadUrl);
        dlLink64.setAttribute('download', RELEASE_DATA.x64.fileName);
      }
    }

    const card86 = document.getElementById('card-x86');
    if (card86) {
      const badge86 = card86.querySelector('.arch-title .badge');
      if (badge86) badge86.textContent = RELEASE_DATA.x86.sizeFormatted;
      const hashText86 = card86.querySelector('.hash-text');
      if (hashText86) {
        hashText86.setAttribute('title', RELEASE_DATA.x86.sha256);
        hashText86.textContent = 'SHA256: ' + RELEASE_DATA.x86.sha256.slice(0, 16) + '...';
      }
      const btnHash86 = card86.querySelector('.btn-copy-hash');
      if (btnHash86) btnHash86.setAttribute('data-hash', RELEASE_DATA.x86.sha256);
      const dlLink86 = card86.querySelector('a.btn-download, a[download]');
      if (dlLink86) {
        dlLink86.setAttribute('href', RELEASE_DATA.x86.downloadUrl);
        dlLink86.setAttribute('download', RELEASE_DATA.x86.fileName);
      }
    }
  }

  function initDownloadCenter() {
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloadCenter);
  } else {
    initDownloadCenter();
  }

  window.addEventListener('recoil:langchange', (e) => {
    if (e && e.detail && e.detail.lang) {
      window.currentLang = e.detail.lang;
    }
    render();
  });

  window.addEventListener('recoil:skinchange', () => {
    const shell = document.querySelector('#crypto-verifier-mount .rcv-shell');
    if (shell) {
      shell.setAttribute('data-skin', window.currentRecoilSkin || 'default');
    }
  });

  function fillAndValidate(hash, arch) {
    if (arch === 'x86') {
      state.activeTermTab = 'ps86';
    } else if (arch === 'x64') {
      state.activeTermTab = 'ps64';
    }
    state.fileCheckInfo = null;
    state.validatorInput = hash || (arch === 'x86' ? RELEASE_DATA.x86.sha256 : RELEASE_DATA.x64.sha256);
    render();
  }

  // Expose public API for programmatic inspection/testing
  window.RecoilDownloadCenter = {
    RELEASE_DATA,
    BINARY_MANIFEST: RELEASE_DATA,
    refresh: render,
    validateHash: evaluateHashInput,
    triggerAutoPin: runAutoPinDemo,
    fillAndValidate: fillAndValidate,
    selectArchTab: (arch) => {
      state.activeTermTab = arch === 'x86' ? 'ps86' : 'ps64';
      render();
    }
  };
})();

