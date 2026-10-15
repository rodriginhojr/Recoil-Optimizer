/**
 * Recoil Optimizer — Multi-OS Compatibility Matrix Specialist (Subagent #7 / Wave 2 #10)
 * Interactive Universal Windows Matrix (Windows 7 to Windows 11)
 * Zero-dependency, skin-adaptive, bilingual (ES/EN) Swiss Technical HUD module.
 */
(function () {
  'use strict';

  const STYLE_ID = 'recoil-os-matrix-styles';
  const MOUNT_ID = 'os-matrix-mount';

  // Complete bilingual dataset for the 4 Windows generations
  const OS_MATRIX_DATA = {
    win7: {
      id: 'win7',
      code: 'NT 6.1 · Build 7601',
      shortTab: 'Windows 7',
      archBadge: 'x86 / x64',
      defaultArch: 'x86',
      supportedArchs: ['x86', 'x64'],
      releaseSpan: 'Platform Update (KB2670838)',
      binaryX86: {
        name: 'RecoilOptimizer_x86.exe',
        size: '63.8 MB',
        archLabel: '32-Bit (x86) Native PE32',
        targetCardId: 'card-x86'
      },
      binaryX64: {
        name: 'RecoilOptimizer_x64.exe',
        size: '69.0 MB',
        archLabel: '64-Bit (x64) Native PE32+',
        targetCardId: 'card-x64'
      },
      es: {
        editionTag: 'Edición Legacy Verificada',
        title: 'Windows 7 (x86 / x64)',
        subtitle:
          'Compatibilidad retrospectiva real en 32 y 64 bits con cargador nativo y cero errores de runtime.',
        statusBadge: 'VERIFICADO SIN ERRORES PE32/PE32+',
        archNote:
          'Soporte nativo real de 32 bits (RecoilOptimizer_x86.exe, 63.8 MB) y 64 bits (69.0 MB) con cargador C NativeShim.',
        ctaPrimaryX86: 'Seleccionar RecoilOptimizer_x86.exe (32-Bit Win7)',
        ctaPrimaryX64: 'Seleccionar RecoilOptimizer_x64.exe (64-Bit Win7)',
        ctaSecondaryArch: 'Cambiar arquitectura objetivo',
        highlights: [
          {
            badge: 'x86 / x64',
            title: 'Binario Nativo 32/64-Bit',
            desc: 'Compilaciones autónomas x86 y x64 que evitan el error 0xc000007b y dependencias rotas.'
          },
          {
            badge: 'C SHIM',
            title: 'C NativeShim & D3DCompiler',
            desc: 'Pre-carga local de D3DCompiler_47 para renderizado DirectX sin cuelgues.'
          },
          {
            badge: 'DRIVERS',
            title: 'pnputil Legacy & TLS 1.2',
            desc: 'Sintaxis clásica de drivers y cifrado seguro SHA-256 para catálogos modernos.'
          },
          {
            badge: 'TIMER',
            title: 'Timer 0.500 ms en NT 6.1',
            desc: 'Ajuste directo de resolución de reloj NtSetTimerResolution y purga de servicios obsoletos.'
          }
        ]
      },
      en: {
        editionTag: 'Verified Legacy Edition',
        title: 'Windows 7 (x86 / x64)',
        subtitle:
          'True native 32-bit and 64-bit execution with dedicated C launcher and zero runtime errors.',
        statusBadge: 'ZERO PE32/PE32+ FORMAT ERRORS',
        archNote:
          'True native 32-bit (`RecoilOptimizer_x86.exe`, 63.8 MB) & 64-bit (`RecoilOptimizer_x64.exe`, 69.0 MB) support powered by our custom C `NativeShim` launcher.',
        ctaPrimaryX86: 'Select RecoilOptimizer_x86.exe (32-Bit Win7)',
        ctaPrimaryX64: 'Select RecoilOptimizer_x64.exe (64-Bit Win7)',
        ctaSecondaryArch: 'Switch target architecture',
        highlights: [
          {
            badge: 'x86 / x64',
            title: 'Native 32/64-Bit Binaries',
            desc: 'Self-contained x86 & x64 builds eliminating 0xc000007b and missing image errors.'
          },
          {
            badge: 'C SHIM',
            title: 'C NativeShim & D3DCompiler',
            desc: 'Bundled D3DCompiler_47 preloader prevents DirectX shader crashes.'
          },
          {
            badge: 'DRIVERS',
            title: 'Legacy pnputil & TLS 1.2',
            desc: 'Adaptive legacy driver flags and SHA-256 handshakes for secure catalog queries.'
          },
          {
            badge: 'TIMER',
            title: 'NT 6.1 Kernel Timer 0.500 ms',
            desc: 'Direct NtSetTimerResolution clock lock and safe legacy service trimming.'
          }
        ]
      },
      metrics: {
        processes: {
          stockVal: 54,
          recoilVal: 36,
          stockPct: 100,
          recoilPct: 67,
          delta: '-33.3%',
          unitEs: 'procesos',
          unitEn: 'processes'
        },
        ram: {
          stockVal: '1.5 GB',
          recoilVal: '1.0 GB',
          stockPct: 100,
          recoilPct: 67,
          delta: '-33.3%'
        },
        timer: {
          stockVal: '15.625 ms',
          recoilVal: '0.500 ms',
          stockPct: 100,
          recoilPct: 4,
          delta: '-96.8%'
        },
        dpc: {
          stockVal: '200 µs',
          recoilVal: '45 µs',
          stockPct: 100,
          recoilPct: 23,
          delta: '-77.5%'
        }
      }
    },

    win8: {
      id: 'win8',
      code: 'NT 6.3 · Build 9600',
      shortTab: 'Windows 8 / 8.1',
      archBadge: 'x86 / x64',
      defaultArch: 'x64',
      supportedArchs: ['x64', 'x86'],
      releaseSpan: 'NT 6.2 / NT 6.3 Update 3',
      binaryX86: {
        name: 'RecoilOptimizer_x86.exe',
        size: '63.8 MB',
        archLabel: '32-Bit (x86) Native PE32',
        targetCardId: 'card-x86'
      },
      binaryX64: {
        name: 'RecoilOptimizer_x64.exe',
        size: '69.0 MB',
        archLabel: '64-Bit (x64) Native PE32+',
        targetCardId: 'card-x64'
      },
      es: {
        editionTag: 'Kernel NT 6.3 Optimizado',
        title: 'Windows 8 / 8.1 (x86 / x64)',
        subtitle:
          'Ajustes de latencia baja sobre el kernel NT 6.3 con timer fijo y pila de red optimizada.',
        statusBadge: 'KERNEL NT 6.3 ULTRA-LIGERO',
        archNote:
          'Compatible con ediciones de 32 y 64 bits. Anula la fluctuación del reloj dinámico introducida en NT 6.2/6.3.',
        ctaPrimaryX86: 'Seleccionar RecoilOptimizer_x86.exe (32-Bit Win8.1)',
        ctaPrimaryX64: 'Seleccionar RecoilOptimizer_x64.exe (64-Bit Win8.1)',
        ctaSecondaryArch: 'Cambiar arquitectura objetivo',
        highlights: [
          {
            badge: 'TICKLESS',
            title: 'Dynamic Tick Purge',
            desc: 'Anula la fluctuación del reloj dinámico para interrupciones deterministas.'
          },
          {
            badge: 'NDIS 6.4',
            title: 'Pila TCP NDIS 6.4',
            desc: 'Priorización de paquetes de red y desactivación de batching Nagle.'
          },
          {
            badge: 'APPX',
            title: 'Debloat Modern UI',
            desc: 'Suspende brokers de fondo AppX y telemetría heredada de Microsoft.'
          },
          {
            badge: 'DWM FLIP',
            title: 'DWM DirectFlip',
            desc: 'Minimiza la cola de pre-renderizado del compositor de escritorio.'
          }
        ]
      },
      en: {
        editionTag: 'Optimized NT 6.3 Kernel',
        title: 'Windows 8 / 8.1 (x86 / x64)',
        subtitle:
          'Low-latency tuning for the lightweight NT 6.3 kernel with fixed-tick timers.',
        statusBadge: 'ULTRA-LIGHT NT 6.3 KERNEL',
        archNote:
          'Supports both 32-bit and 64-bit installs. Eliminates dynamic tick clock jitter introduced in NT 6.2/6.3.',
        ctaPrimaryX86: 'Select RecoilOptimizer_x86.exe (32-Bit Win8.1)',
        ctaPrimaryX64: 'Select RecoilOptimizer_x64.exe (64-Bit Win8.1)',
        ctaSecondaryArch: 'Switch target architecture',
        highlights: [
          {
            badge: 'TICKLESS',
            title: 'Dynamic Tick Purge',
            desc: 'Disables tick coalescing for deterministic hardware interrupt delivery.'
          },
          {
            badge: 'NDIS 6.4',
            title: 'NDIS 6.4 TCP Stack',
            desc: 'Tunes packet queuing and disables Nagle latency batching.'
          },
          {
            badge: 'APPX',
            title: 'Modern UI Debloat',
            desc: 'Suspends AppX background brokers and legacy Microsoft telemetry.'
          },
          {
            badge: 'DWM FLIP',
            title: 'DWM DirectFlip',
            desc: 'Reduces compositor frame queues and enforces 1:1 mouse input.'
          }
        ]
      },
      metrics: {
        processes: {
          stockVal: 72,
          recoilVal: 46,
          stockPct: 100,
          recoilPct: 64,
          delta: '-36.1%',
          unitEs: 'procesos',
          unitEn: 'processes'
        },
        ram: {
          stockVal: '1.9 GB',
          recoilVal: '1.3 GB',
          stockPct: 100,
          recoilPct: 68,
          delta: '-31.6%'
        },
        timer: {
          stockVal: '15.625 ms',
          recoilVal: '0.500 ms',
          stockPct: 100,
          recoilPct: 4,
          delta: '-96.8%'
        },
        dpc: {
          stockVal: '220 µs',
          recoilVal: '50 µs',
          stockPct: 100,
          recoilPct: 23,
          delta: '-77.3%'
        }
      }
    },

    win10: {
      id: 'win10',
      code: 'NT 10.0',
      shortTab: 'Windows 10',
      archBadge: 'x64 / x86',
      defaultArch: 'x64',
      supportedArchs: ['x64', 'x86'],
      releaseSpan: 'Builds 17763 – 19045 (LTSC & Pro)',
      binaryX86: {
        name: 'RecoilOptimizer_x86.exe',
        size: '63.8 MB',
        archLabel: '32-Bit (x86) Native PE32',
        targetCardId: 'card-x86'
      },
      binaryX64: {
        name: 'RecoilOptimizer_x64.exe',
        size: '69.0 MB',
        archLabel: '64-Bit (x64) Native PE32+',
        targetCardId: 'card-x64'
      },
      es: {
        editionTag: 'Estándar Competitivo Esports',
        title: 'Windows 10 (x86 / x64)',
        subtitle:
          'Ajuste competitivo para esports: scanout directo FSE y prioridad de hilos en tiempo real.',
        statusBadge: 'ESTÁNDAR OFICIAL ESPORTS',
        archNote:
          'Optimizado para Windows 10 y ediciones LTSC (64 bits recomendado, 32 bits soportado).',
        ctaPrimaryX86: 'Seleccionar RecoilOptimizer_x86.exe (32-Bit Win10)',
        ctaPrimaryX64: 'Seleccionar RecoilOptimizer_x64.exe (64-Bit Win10)',
        ctaSecondaryArch: 'Cambiar arquitectura objetivo',
        highlights: [
          {
            badge: 'FSE DIRECT',
            title: 'Fullscreen Exclusive (FSE)',
            desc: 'Scanout directo a la GPU eliminando la latencia del compositor.'
          },
          {
            badge: 'DVR OFF',
            title: 'Purga GameBar & DVR',
            desc: 'Elimina captura en segundo plano y hooks que causan caídas de 1% Low.'
          },
          {
            badge: 'MMCSS',
            title: 'Scheduler MMCSS',
            desc: 'Prioridad GPU 8 y eliminación de LazyMode para hilos del juego.'
          },
          {
            badge: 'MSI MODE',
            title: 'Caché DX12 & MSI Mode',
            desc: 'Optimización de shader cache y cola MSI de interrupciones PCIe.'
          }
        ]
      },
      en: {
        editionTag: 'Esports Competitive Standard',
        title: 'Windows 10 (x86 / x64)',
        subtitle:
          'Esports tournament tuning: direct FSE scanout and real-time thread scheduling.',
        statusBadge: 'TOURNAMENT ESPORTS STANDARD',
        archNote:
          'Engineered for Windows 10 & Enterprise LTSC (64-bit recommended, 32-bit supported).',
        ctaPrimaryX86: 'Select RecoilOptimizer_x86.exe (32-Bit Win10)',
        ctaPrimaryX64: 'Select RecoilOptimizer_x64.exe (64-Bit Win10)',
        ctaSecondaryArch: 'Switch target architecture',
        highlights: [
          {
            badge: 'FSE DIRECT',
            title: 'Fullscreen Exclusive (FSE)',
            desc: 'Direct GPU scanout ownership, bypassing desktop composition lag.'
          },
          {
            badge: 'DVR OFF',
            title: 'GameBar & DVR Purge',
            desc: 'Removes background recording hooks that degrade 1% Low frametimes.'
          },
          {
            badge: 'MMCSS',
            title: 'MMCSS Scheduler',
            desc: 'Sets GPU Priority 8 and eliminates LazyMode yielding for game threads.'
          },
          {
            badge: 'MSI MODE',
            title: 'DX12 Cache & MSI Mode',
            desc: 'Flushes stale shader caches and enables PCIe Message Signaled Interrupts.'
          }
        ]
      },
      metrics: {
        processes: {
          stockVal: 120,
          recoilVal: 78,
          stockPct: 100,
          recoilPct: 65,
          delta: '-35.0%',
          unitEs: 'procesos',
          unitEn: 'processes'
        },
        ram: {
          stockVal: '3.2 GB',
          recoilVal: '2.1 GB',
          stockPct: 100,
          recoilPct: 66,
          delta: '-34.4%'
        },
        timer: {
          stockVal: '15.625 ms',
          recoilVal: '0.500 ms',
          stockPct: 100,
          recoilPct: 4,
          delta: '-96.8%'
        },
        dpc: {
          stockVal: '260 µs',
          recoilVal: '60 µs',
          stockPct: 100,
          recoilPct: 23,
          delta: '-76.9%'
        }
      }
    },

    win11: {
      id: 'win11',
      code: 'NT 10.0',
      shortTab: 'Windows 11',
      archBadge: 'x64 NEXT-GEN',
      defaultArch: 'x64',
      supportedArchs: ['x64'],
      releaseSpan: 'Builds 22000 – 26100+',
      binaryX86: {
        name: 'RecoilOptimizer_x86.exe',
        size: '63.8 MB',
        archLabel: '32-Bit (x86) Legacy',
        targetCardId: 'card-x86'
      },
      binaryX64: {
        name: 'RecoilOptimizer_x64.exe',
        size: '69.0 MB',
        archLabel: '64-Bit (x64) Native PE32+',
        targetCardId: 'card-x64'
      },
      es: {
        editionTag: 'Arquitectura Next-Gen',
        title: 'Windows 11 (x64)',
        subtitle:
          'Optimización para silicio híbrido Intel P/E-Core y AMD Ryzen X3D en builds modernas.',
        statusBadge: 'SOPORTE COMPLETO',
        archNote:
          'Diseñado para sistemas modernos de 64 bits (`RecoilOptimizer_x64.exe`, 69.0 MB), procesadores Intel Core Ultra / Hybrid y AMD Ryzen X3D.',
        ctaPrimaryX86: 'Seleccionar RecoilOptimizer_x86.exe (x86)',
        ctaPrimaryX64: 'Seleccionar RecoilOptimizer_x64.exe (64-Bit Win11)',
        ctaSecondaryArch: 'Arquitectura x64 Nativa',
        highlights: [
          {
            badge: 'P-CORE / X3D',
            title: 'Thread Director & X3D',
            desc: 'Fija hilos del juego en núcleos P (Intel) o en el CCD con 3D V-Cache (AMD).'
          },
          {
            badge: 'FLIP MODEL',
            title: 'DXGI Flip Model',
            desc: 'Presentación DirectFlip sin bordes y eliminación de micro-stutter MPO.'
          },
          {
            badge: 'HVCI SAFE',
            title: 'VBS / HVCI Seguro',
            desc: 'Audita la latencia de aislamiento de núcleo sin afectar Vanguard ni EAC.'
          },
          {
            badge: 'AI DEBLOAT',
            title: 'Debloat Copilot & Recall',
            desc: 'Desactiva telemetría de fondo, indexación de Recall y widgets residentes.'
          }
        ]
      },
      en: {
        editionTag: 'Next-Gen Architecture',
        title: 'Windows 11 (x64)',
        subtitle:
          'Precision tuning for Intel Hybrid P/E-Cores and AMD Ryzen X3D on modern builds.',
        statusBadge: 'VERIFIED READY',
        archNote:
          'Built for modern 64-bit systems (`RecoilOptimizer_x64.exe`, 69.0 MB), Intel Hybrid P/E-Core CPUs, and AMD Ryzen 3D V-Cache processors.',
        ctaPrimaryX86: 'Select RecoilOptimizer_x86.exe (x86)',
        ctaPrimaryX64: 'Select RecoilOptimizer_x64.exe (64-Bit Win11)',
        ctaSecondaryArch: 'Native x64 Architecture',
        highlights: [
          {
            badge: 'P-CORE / X3D',
            title: 'Thread Director & X3D',
            desc: 'Pins game threads to P-Cores (Intel) or 3D V-Cache CCDs (AMD).'
          },
          {
            badge: 'FLIP MODEL',
            title: 'DXGI Flip Model',
            desc: 'Windowed DirectFlip presentation and MPO micro-stutter removal.'
          },
          {
            badge: 'HVCI SAFE',
            title: 'VBS / HVCI Safe',
            desc: 'Audits kernel isolation overhead without impacting Vanguard or EAC.'
          },
          {
            badge: 'AI DEBLOAT',
            title: 'Copilot & Recall Debloat',
            desc: 'Disables background AI telemetry, Recall indexing, and idle widgets.'
          }
        ]
      },
      metrics: {
        processes: {
          stockVal: 145,
          recoilVal: 98,
          stockPct: 100,
          recoilPct: 68,
          delta: '-32.4%',
          unitEs: 'procesos',
          unitEn: 'processes'
        },
        ram: {
          stockVal: '4.1 GB',
          recoilVal: '2.9 GB',
          stockPct: 100,
          recoilPct: 71,
          delta: '-29.3%'
        },
        timer: {
          stockVal: '15.625 ms',
          recoilVal: '0.500 ms',
          stockPct: 100,
          recoilPct: 4,
          delta: '-96.8%'
        },
        dpc: {
          stockVal: '290 µs',
          recoilVal: '75 µs',
          stockPct: 100,
          recoilPct: 26,
          delta: '-74.1%'
        }
      }
    }
  };

  // UI Chrome copy in Spanish & English
  const UI_COPY = {
    es: {
      sectionTag: 'COMPATIBILIDAD UNIVERSAL DE KERNEL · NT 6.1 A NT 10.0',
      sectionTitle: 'Matriz Universal Multi-Windows (Windows 7 a 11)',
      sectionDesc:
        'Compatibilidad nativa desde Windows 7 hasta Windows 11 en un solo motor.',
      detectedPillPrefix: 'TU SO DETECTADO:',
      inspectingKernelPrefix: 'INSPECCIONANDO KERNEL:',
      selectOsPrompt: 'SELECCIONA GENERACIÓN DE WINDOWS:',
      archSelectorLabel: 'ARQUITECTURA DE BINARIO:',
      comparatorTag: 'TELEMETRÍA COMPARATIVA EN REPOSO',
      comparatorTitle: 'Comparador de Recursos: Antes vs Después',
      comparatorSub: 'Mediciones de latencia y procesos antes y después de optimizar.',
      stockLegend: 'Windows Stock (Fábrica)',
      recoilLegend: 'Con Recoil Optimizer',
      metricProcessesTitle: 'Procesos de Fondo en Reposo',
      metricProcessesSub: 'Servicios residentes tras el arranque',
      metricRamTitle: 'Consumo de RAM en Reposo',
      metricRamSub: 'Memoria física en escritorio sin juegos',
      metricTimerTitle: 'Resolución de Timer del Kernel',
      metricTimerSub: 'Precisión del reloj NTAPI (NtSetTimerResolution)',
      metricDpcTitle: 'Interrupciones DPC Promedio',
      metricDpcSub: 'Latencia DPC de controladores (µs)',
      quickSelectBadge: 'DESCARGA DIRECTA VERIFICADA',
      scrollHint: 'Resalta el ejecutable según tu arquitectura',
      targetHighlightBanner: 'BINARIO SELECCIONADO DESDE LA MATRIZ DE COMPATIBILIDAD',
      simulateBtnIdle: 'Simular Purga en Vivo',
      simulateBtnActive: 'Optimizando Kernel...'
    },
    en: {
      sectionTag: 'UNIVERSAL KERNEL COMPATIBILITY · NT 6.1 TO NT 10.0',
      sectionTitle: 'Universal Multi-Windows Matrix (Windows 7 to 11)',
      sectionDesc:
        'Native compatibility from Windows 7 to Windows 11 in a single engine.',
      detectedPillPrefix: 'YOUR DETECTED OS:',
      inspectingKernelPrefix: 'INSPECTING KERNEL:',
      selectOsPrompt: 'SELECT WINDOWS GENERATION:',
      archSelectorLabel: 'BINARY ARCHITECTURE:',
      comparatorTag: 'IDLE SYSTEM TELEMETRY BENCHMARK',
      comparatorTitle: 'Resource Comparator: Before vs After',
      comparatorSub: 'Latency and process measurements before and after optimization.',
      stockLegend: 'Windows Stock (Default)',
      recoilLegend: 'With Recoil Optimizer',
      metricProcessesTitle: 'Idle Background Processes',
      metricProcessesSub: 'Resident services after boot',
      metricRamTitle: 'Idle RAM Consumption',
      metricRamSub: 'Committed physical memory at desktop',
      metricTimerTitle: 'Kernel Timer Resolution',
      metricTimerSub: 'NTAPI clock precision (NtSetTimerResolution)',
      metricDpcTitle: 'Average DPC Interrupt Latency',
      metricDpcSub: 'Driver DPC latency (µs)',
      quickSelectBadge: 'VERIFIED DIRECT BINARY MATCH',
      scrollHint: 'Highlights the binary for your architecture',
      targetHighlightBanner: 'BINARY SELECTED FROM OS COMPATIBILITY MATRIX',
      simulateBtnIdle: 'Simulate Live Purge',
      simulateBtnActive: 'Optimizing Kernel...'
    }
  };

  // State
  let activeOsKey = 'win11';
  let activeArchByOs = {
    win7: 'x86',
    win8: 'x64',
    win10: 'x64',
    win11: 'x64'
  };
  let detectedOsSummary = null;
  let isSimulating = false;
  let userManuallySwitchedTab = false;

  function getLang() {
    const raw = (window.currentLang || document.documentElement.lang || 'es').toLowerCase();
    return raw.startsWith('en') ? 'en' : 'es';
  }

  function detectClientOs() {
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const is64 = /WOW64|Win64|x64|amd64|x86_64/i.test(ua) || /Win64|x86_64/i.test(platform);
    const arch = is64 ? 'x64' : 'x86';

    if (/Windows NT 6\.1/i.test(ua)) {
      return {
        osKey: 'win7',
        arch,
        labelEs: `Windows 7 (${arch})`,
        labelEn: `Windows 7 (${arch})`
      };
    }
    if (/Windows NT 6\.[23]/i.test(ua)) {
      return {
        osKey: 'win8',
        arch,
        labelEs: `Windows 8 / 8.1 (${arch})`,
        labelEn: `Windows 8 / 8.1 (${arch})`
      };
    }
    if (/Windows NT 10\.0/i.test(ua)) {
      // 32-bit Windows NT 10.0 is always Windows 10 (Windows 11 has no 32-bit OS release)
      if (!is64) {
        return {
          osKey: 'win10',
          arch: 'x86',
          labelEs: 'Windows 10 (x86 32-Bit)',
          labelEn: 'Windows 10 (x86 32-Bit)'
        };
      }
      return {
        osKey: 'win11',
        arch: 'x64',
        labelEs: 'Windows 10 / 11 (x64)',
        labelEn: 'Windows 10 / 11 (x64)'
      };
    }
    return {
      osKey: is64 ? 'win11' : 'win10',
      arch,
      labelEs: is64 ? 'Windows 11 / 10 (x64)' : 'Windows 10 / 7 (x86)',
      labelEn: is64 ? 'Windows 11 / 10 (x64)' : 'Windows 10 / 7 (x86)'
    };
  }

  function syncDetectedOsState(summary) {
    if (!summary || !OS_MATRIX_DATA[summary.osKey]) return;
    activeOsKey = summary.osKey;
    activeArchByOs[summary.osKey] = summary.arch;
    if (summary.arch === 'x86') {
      activeArchByOs.win7 = 'x86';
      activeArchByOs.win8 = 'x86';
      activeArchByOs.win10 = 'x86';
    }
  }

  function refineOsDetectionWithHighEntropy() {
    const uaData = navigator.userAgentData;
    if (!uaData || typeof uaData.getHighEntropyValues !== 'function') return;

    uaData
      .getHighEntropyValues(['platformVersion', 'bitness'])
      .then((entropy) => {
        if (!entropy) return;
        const ua = navigator.userAgent || '';
        const isWin = /Windows/i.test(ua) || /Windows/i.test(uaData.platform || '');
        if (!isWin) return;

        const bitnessStr = String(entropy.bitness || '');
        const is32Bit =
          bitnessStr === '32' ||
          (!bitnessStr && !/WOW64|Win64|x64|amd64|x86_64/i.test(ua));
        const arch = is32Bit ? 'x86' : 'x64';

        // Keep Win7 / Win8 if explicitly in UA
        if (/Windows NT 6\.1/i.test(ua)) {
          detectedOsSummary = {
            osKey: 'win7',
            arch,
            labelEs: `Windows 7 (${arch})`,
            labelEn: `Windows 7 (${arch})`
          };
        } else if (/Windows NT 6\.[23]/i.test(ua)) {
          detectedOsSummary = {
            osKey: 'win8',
            arch,
            labelEs: `Windows 8 / 8.1 (${arch})`,
            labelEn: `Windows 8 / 8.1 (${arch})`
          };
        } else {
          const rawVer = String(entropy.platformVersion || '0');
          const majorPlatformVersion = parseInt(rawVer.split('.')[0], 10) || 0;

          if (is32Bit) {
            // 32-bit systems lock to x86 and land on win10 (or legacy)
            detectedOsSummary = {
              osKey: 'win10',
              arch: 'x86',
              labelEs: 'Windows 10 (x86 32-Bit)',
              labelEn: 'Windows 10 (x86 32-Bit)'
            };
          } else if (majorPlatformVersion >= 13) {
            detectedOsSummary = {
              osKey: 'win11',
              arch: 'x64',
              labelEs: 'Windows 11 (x64)',
              labelEn: 'Windows 11 (x64)'
            };
          } else if (majorPlatformVersion > 0 && majorPlatformVersion < 13) {
            detectedOsSummary = {
              osKey: 'win10',
              arch: 'x64',
              labelEs: 'Windows 10 (x64)',
              labelEn: 'Windows 10 (x64)'
            };
          }
        }

        if (detectedOsSummary) {
          activeArchByOs[detectedOsSummary.osKey] = detectedOsSummary.arch;
          if (is32Bit) {
            activeArchByOs.win7 = 'x86';
            activeArchByOs.win8 = 'x86';
            activeArchByOs.win10 = 'x86';
          }
          if (!userManuallySwitchedTab) {
            activeOsKey = detectedOsSummary.osKey;
          }
          renderMatrix();
        }
      })
      .catch(() => {});
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      /* ==========================================================================
         Recoil Optimizer — Multi-OS Compatibility Matrix (Scoped Styles)
         Adapts automatically to all 5 skins via CSS Custom Properties
         ========================================================================== */
      #${MOUNT_ID} {
        position: relative;
        z-index: 2;
        padding: 2.25rem 0 !important;
        font-family: var(--font-sans, 'Inter', system-ui, sans-serif);
        color: var(--text-main, #f8fafc);
      }

      .os-matrix-wrap {
        max-width: 1240px;
        margin: 0 auto;
        padding: 0 1.5rem;
      }

      /* Header HUD */
      .os-matrix-header {
        text-align: center;
        max-width: 860px;
        margin: 0 auto 1.25rem;
      }

      .os-matrix-kicker-row {
        display: inline-flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.38rem 0.9rem;
        border-radius: 999px;
        background: var(--bg-card, rgba(15, 23, 42, 0.75));
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.35));
        box-shadow: 0 0 24px var(--primary-glow, rgba(59, 130, 246, 0.16));
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--primary, #3b82f6);
        margin-bottom: 1rem;
      }

      .os-matrix-kicker-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-emerald, #10b981);
        box-shadow: 0 0 10px var(--accent-emerald, #10b981);
        animation: osMatrixPulse 2.2s infinite ease-in-out;
      }

      @keyframes osMatrixPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.28); opacity: 0.55; }
      }

      .os-matrix-title {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: clamp(1.85rem, 3.4vw, 2.75rem);
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.025em;
        color: var(--text-main, #f8fafc);
        margin: 0 0 0.9rem;
      }

      .os-matrix-desc {
        font-size: 1.02rem;
        line-height: 1.65;
        color: var(--text-muted, #94a3b8);
        margin: 0 auto 1.25rem;
      }

      /* Dual Status Pills inside .os-matrix-detected-bar (Client OS + Inspected Kernel) */
      .os-matrix-detected-bar {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.65rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.75rem;
      }

      .os-detected-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.42rem 0.9rem;
        border-radius: 8px;
        background: var(--bg-surface, rgba(15, 23, 42, 0.68));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.18));
        color: var(--text-muted, #94a3b8);
      }

      .os-detected-pill.client-pill strong {
        color: var(--accent-emerald, #10b981);
        font-weight: 700;
      }

      .os-detected-pill.inspect-pill {
        border-color: var(--border-glow, rgba(59, 130, 246, 0.35));
        background: var(--bg-card, rgba(15, 23, 42, 0.82));
      }

      .os-detected-pill.inspect-pill strong {
        color: var(--primary, #3b82f6);
        font-weight: 700;
      }

      /* OS Selector Tabs Bar */
      .os-tabs-bar {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.85rem;
        margin-bottom: 1.75rem;
      }

      .os-tab-btn {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.45rem;
        padding: 1.05rem 1.15rem;
        border-radius: 14px;
        background: var(--bg-card, rgba(15, 23, 42, 0.7));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.16));
        color: var(--text-main, #f8fafc);
        cursor: pointer;
        text-align: left;
        transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
        overflow: hidden;
      }

      .os-tab-btn::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, var(--primary-glow, rgba(59, 130, 246, 0.2)), transparent 68%);
        opacity: 0;
        transition: opacity 0.24s ease;
        pointer-events: none;
      }

      .os-tab-btn:hover {
        border-color: var(--border-glow, rgba(59, 130, 246, 0.45));
        transform: translateY(-2px);
      }

      .os-tab-btn.active {
        border-color: var(--primary, #3b82f6);
        background: var(--bg-surface, rgba(15, 23, 42, 0.92));
        box-shadow: 0 10px 30px -10px var(--primary-glow, rgba(59, 130, 246, 0.35)),
                    inset 0 0 0 1px var(--primary, #3b82f6);
      }

      .os-tab-btn.active::before {
        opacity: 1;
      }

      .os-tab-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }

      .os-tab-ntcode {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: var(--text-muted, #94a3b8);
      }

      .os-tab-arch-pill {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.66rem;
        font-weight: 700;
        padding: 0.15rem 0.5rem;
        border-radius: 999px;
        background: rgba(59, 130, 246, 0.14);
        color: var(--primary, #3b82f6);
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.35));
      }

      .os-tab-btn[data-os="win7"] .os-tab-arch-pill {
        background: rgba(245, 158, 11, 0.16);
        color: var(--accent-amber, #f59e0b);
        border-color: rgba(245, 158, 11, 0.4);
      }

      .os-tab-btn[data-os="win11"] .os-tab-arch-pill {
        background: rgba(16, 185, 129, 0.16);
        color: var(--accent-emerald, #10b981);
        border-color: rgba(16, 185, 129, 0.4);
      }

      .os-tab-name {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
      }

      .os-tab-edition {
        font-size: 0.78rem;
        color: var(--text-muted, #94a3b8);
        display: flex;
        align-items: center;
        gap: 0.35rem;
      }

      .os-tab-btn.active .os-tab-edition {
        color: var(--primary, #3b82f6);
        font-weight: 600;
      }

      /* Main 2-Column Technical Cockpit */
      .os-matrix-cockpit {
        display: grid;
        grid-template-columns: 1.12fr 0.88fr;
        gap: 1.5rem;
        align-items: stretch;
      }

      .os-panel-card {
        position: relative;
        border-radius: 18px;
        background: var(--bg-card, rgba(15, 23, 42, 0.78));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.16));
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        backdrop-filter: blur(14px);
      }

      .os-panel-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary, #3b82f6), var(--accent-emerald, #10b981), transparent);
        opacity: 0.75;
      }

      /* Left Panel: OS Architecture Details */
      .os-detail-header {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.15rem;
        padding-bottom: 1.1rem;
        border-bottom: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
      }

      .os-detail-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--accent-amber, #f59e0b);
        margin-bottom: 0.35rem;
      }

      .os-detail-title {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text-main, #f8fafc);
        margin: 0 0 0.4rem;
      }

      .os-detail-subtitle {
        font-size: 0.92rem;
        line-height: 1.55;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      .os-status-seal {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        font-weight: 700;
        padding: 0.38rem 0.75rem;
        border-radius: 8px;
        background: rgba(16, 185, 129, 0.14);
        color: var(--accent-emerald, #10b981);
        border: 1px solid rgba(16, 185, 129, 0.38);
        white-space: nowrap;
      }

      /* Feature Highlights 2x2 Grid */
      .os-highlights-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.9rem;
        margin-bottom: 1.25rem;
      }

      .os-highlight-item {
        padding: 1rem;
        border-radius: 12px;
        background: var(--bg-surface, rgba(15, 23, 42, 0.6));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
        transition: border-color 0.2s ease, transform 0.2s ease;
      }

      .os-highlight-item:hover {
        border-color: var(--border-glow, rgba(59, 130, 246, 0.4));
        transform: translateY(-2px);
      }

      .os-hl-meta {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 0.45rem;
      }

      .os-hl-badge {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.64rem;
        font-weight: 700;
        padding: 0.14rem 0.5rem;
        border-radius: 4px;
        background: rgba(59, 130, 246, 0.15);
        color: var(--primary, #3b82f6);
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.3));
      }

      .os-hl-title {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
        margin: 0 0 0.35rem;
        line-height: 1.3;
      }

      .os-hl-desc {
        font-size: 0.8rem;
        line-height: 1.5;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      /* Architecture Quick-Select Footer */
      .os-cta-box {
        padding: 1rem 1.15rem;
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(16, 185, 129, 0.07));
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.35));
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }

      .os-cta-top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
      }

      .os-arch-toggle-group {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--bg-deep, rgba(2, 6, 23, 0.8));
        padding: 0.25rem;
        border-radius: 8px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.2));
      }

      .os-arch-switch-btn {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        padding: 0.32rem 0.7rem;
        border-radius: 6px;
        border: none;
        background: transparent;
        color: var(--text-muted, #94a3b8);
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .os-arch-switch-btn.active {
        background: var(--primary, #3b82f6);
        color: #ffffff;
        box-shadow: 0 0 12px var(--primary-glow, rgba(59, 130, 246, 0.4));
      }

      .os-arch-switch-btn[data-arch="x86"].active {
        background: var(--accent-amber, #f59e0b);
        color: #090d16;
        box-shadow: 0 0 12px rgba(245, 158, 11, 0.45);
      }

      .os-binary-meta {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.75rem;
        color: var(--text-main, #f8fafc);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .os-binary-size {
        padding: 0.15rem 0.5rem;
        border-radius: 4px;
        background: rgba(16, 185, 129, 0.16);
        color: var(--accent-emerald, #10b981);
        font-weight: 700;
      }

      .os-cta-buttons-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.65rem;
      }

      .os-quick-select-btn {
        flex: 1;
        min-width: 240px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        padding: 0.85rem 1.2rem;
        border-radius: 10px;
        border: 1px solid var(--primary, #3b82f6);
        background: var(--primary, #3b82f6);
        color: #ffffff;
        font-family: var(--font-sans, 'Inter', sans-serif);
        font-size: 0.9rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.22s ease;
        box-shadow: 0 8px 24px -6px var(--primary-glow, rgba(59, 130, 246, 0.5));
      }

      .os-quick-select-btn:hover {
        transform: translateY(-2px);
        filter: brightness(1.08);
      }

      .os-quick-select-btn.arch-x86 {
        background: var(--accent-amber, #f59e0b);
        border-color: var(--accent-amber, #f59e0b);
        color: #090d16;
        box-shadow: 0 8px 24px -6px rgba(245, 158, 11, 0.45);
      }

      .os-quick-select-alt {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding: 0.85rem 0.95rem;
        border-radius: 10px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.28));
        background: var(--bg-surface, rgba(15, 23, 42, 0.75));
        color: var(--text-main, #f8fafc);
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.76rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .os-quick-select-alt:hover {
        border-color: var(--primary, #3b82f6);
        color: var(--primary, #3b82f6);
      }

      /* Right Panel: Interactive Before vs After Comparator */
      .os-comp-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 1rem;
        padding-bottom: 0.95rem;
        border-bottom: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
      }

      .os-comp-tag {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: var(--accent-emerald, #10b981);
        text-transform: uppercase;
        margin-bottom: 0.25rem;
      }

      .os-comp-title {
        font-family: var(--font-display, var(--font-sans, 'Inter', sans-serif));
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--text-main, #f8fafc);
        margin: 0 0 0.25rem;
      }

      .os-comp-sub {
        font-size: 0.8rem;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      .os-sim-btn {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.72rem;
        font-weight: 700;
        padding: 0.45rem 0.8rem;
        border-radius: 8px;
        border: 1px solid var(--border-glow, rgba(59, 130, 246, 0.4));
        background: var(--bg-surface, rgba(15, 23, 42, 0.8));
        color: var(--primary, #3b82f6);
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s ease;
      }

      .os-sim-btn:hover {
        background: var(--primary, #3b82f6);
        color: #ffffff;
      }

      .os-comp-legend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.55rem 0.85rem;
        border-radius: 8px;
        background: var(--bg-deep, rgba(2, 6, 23, 0.55));
        margin-bottom: 1rem;
        font-size: 0.75rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
      }

      .os-legend-item {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        color: var(--text-muted, #94a3b8);
      }

      .os-legend-swatch {
        width: 10px;
        height: 10px;
        border-radius: 3px;
      }

      .os-legend-swatch.stock {
        background: rgba(148, 163, 184, 0.45);
        border: 1px solid rgba(148, 163, 184, 0.7);
      }

      .os-legend-swatch.recoil {
        background: var(--accent-emerald, #10b981);
        box-shadow: 0 0 8px var(--accent-emerald, #10b981);
      }

      /* 4 Side-by-Side Gauges List */
      .os-gauges-stack {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
      }

      .os-gauge-card {
        padding: 0.9rem 1rem;
        border-radius: 12px;
        background: var(--bg-surface, rgba(15, 23, 42, 0.62));
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.14));
      }

      .os-gauge-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
        margin-bottom: 0.65rem;
      }

      .os-gauge-title {
        font-size: 0.86rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
      }

      .os-gauge-sub {
        font-size: 0.72rem;
        color: var(--text-muted, #94a3b8);
      }

      .os-gauge-delta {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.74rem;
        font-weight: 700;
        padding: 0.18rem 0.55rem;
        border-radius: 999px;
        background: rgba(16, 185, 129, 0.15);
        color: var(--accent-emerald, #10b981);
        border: 1px solid rgba(16, 185, 129, 0.35);
      }

      /* Side-by-side Before vs After Comparison Columns inside each Gauge */
      .os-gauge-sbs {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 0.65rem;
      }

      .os-gauge-col {
        background: var(--bg-deep, rgba(2, 6, 23, 0.55));
        padding: 0.55rem 0.7rem;
        border-radius: 8px;
        border: 1px solid var(--border-subtle, rgba(148, 163, 184, 0.12));
      }

      .os-gauge-col.after {
        border-color: rgba(16, 185, 129, 0.35);
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.09), rgba(59, 130, 246, 0.05));
      }

      .os-gauge-col-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.35rem;
        margin-bottom: 0.38rem;
      }

      .os-gauge-tag {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.62rem;
        text-transform: uppercase;
        color: var(--text-muted, #94a3b8);
      }

      .os-gauge-val {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.84rem;
        font-weight: 700;
        color: var(--text-main, #f8fafc);
        font-variant-numeric: tabular-nums;
      }

      .os-gauge-col.after .os-gauge-val {
        color: var(--accent-emerald, #10b981);
      }

      .os-gauge-track {
        width: 100%;
        height: 7px;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.14);
        overflow: hidden;
      }

      .os-gauge-fill {
        height: 100%;
        border-radius: 999px;
        transition: width 0.65s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .os-gauge-fill.stock {
        background: linear-gradient(90deg, #64748b, #94a3b8);
      }

      .os-gauge-fill.recoil {
        background: linear-gradient(90deg, var(--primary, #3b82f6), var(--accent-emerald, #10b981));
        box-shadow: 0 0 10px var(--accent-emerald, #10b981);
      }

      .os-gauge-arrow {
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.8rem;
        color: var(--primary, #3b82f6);
        font-weight: 700;
      }

      /* Download Card Highlight Animation when scrolled from OS Matrix */
      .os-matrix-card-pulse {
        outline: 2px solid var(--accent-emerald, #10b981) !important;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25),
                    0 20px 50px -10px var(--primary-glow, rgba(59, 130, 246, 0.55)) !important;
        transform: translateY(-4px) scale(1.015) !important;
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
      }

      .os-matrix-beacon {
        margin-bottom: 0.75rem;
        padding: 0.4rem 0.75rem;
        border-radius: 6px;
        background: rgba(16, 185, 129, 0.18);
        border: 1px solid var(--accent-emerald, #10b981);
        color: var(--accent-emerald, #10b981);
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        font-weight: 700;
        text-align: center;
        letter-spacing: 0.06em;
        animation: osMatrixPulse 1.4s infinite ease-in-out;
      }

      /* Responsive Design */
      @media (max-width: 1024px) {
        .os-tabs-bar {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .os-matrix-cockpit {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .os-tabs-bar {
          grid-template-columns: 1fr;
        }
        .os-highlights-grid {
          grid-template-columns: 1fr;
        }
        .os-gauge-sbs {
          grid-template-columns: 1fr;
        }
        .os-gauge-arrow {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureMountElement() {
    let mount = document.getElementById(MOUNT_ID);
    if (!mount) {
      mount = document.createElement('section');
      mount.id = MOUNT_ID;
      const downloadsSection = document.getElementById('downloads');
      if (downloadsSection && downloadsSection.parentNode) {
        downloadsSection.parentNode.insertBefore(mount, downloadsSection);
      } else {
        const main = document.querySelector('main') || document.body;
        main.appendChild(mount);
      }
    }
    return mount;
  }

  function scrollToDownloadBinary(arch, osKey) {
    const lang = getLang();
    const copy = UI_COPY[lang];
    const osItem = OS_MATRIX_DATA[osKey] || OS_MATRIX_DATA.win11;
    const binInfo = arch === 'x86' ? osItem.binaryX86 : osItem.binaryX64;

    const downloadsEl = document.getElementById('downloads');
    const targetCard = document.getElementById(binInfo.targetCardId);
    const otherCard = document.getElementById(arch === 'x86' ? 'card-x64' : 'card-x86');

    // Synchronize Cryptographic Terminal tab in Download Center
    window.RecoilDownloadCenter?.selectArchTab(arch);

    if (downloadsEl) {
      downloadsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Clear previous beacons & synchronize .recommended card state
    document.querySelectorAll('.os-matrix-beacon').forEach((el) => el.remove());
    if (otherCard) {
      otherCard.classList.remove('os-matrix-card-pulse');
      otherCard.classList.remove('recommended');
    }

    if (targetCard) {
      targetCard.classList.add('recommended');
      targetCard.classList.add('os-matrix-card-pulse');

      const exactSize = arch === 'x86' ? '63.8 MB' : '69.0 MB';
      const beacon = document.createElement('div');
      beacon.className = 'os-matrix-beacon';
      beacon.textContent = `${copy.targetHighlightBanner}: ${binInfo.name} (${exactSize})`;
      targetCard.insertBefore(beacon, targetCard.firstChild);

      const downloadBtn = targetCard.querySelector('a.btn, button.btn');
      if (downloadBtn) {
        setTimeout(() => {
          downloadBtn.focus({ preventScroll: true });
        }, 650);
      }

      setTimeout(() => {
        targetCard.classList.remove('os-matrix-card-pulse');
        if (beacon.parentNode) beacon.remove();
      }, 6500);
    }
  }

  function triggerLivePurgeSimulation(mount) {
    if (isSimulating) return;
    isSimulating = true;

    const lang = getLang();
    const copy = UI_COPY[lang];
    const simBtn = mount.querySelector('#os-matrix-sim-btn');
    if (simBtn) {
      simBtn.textContent = copy.simulateBtnActive;
    }

    const recoilFills = mount.querySelectorAll('.os-gauge-fill.recoil');
    const stockFills = mount.querySelectorAll('.os-gauge-fill.stock');
    const afterValNodes = mount.querySelectorAll('.os-gauge-col.after .os-gauge-val');

    // Reset bars to stock levels briefly, then animate down to Recoil optimized values
    recoilFills.forEach((el, idx) => {
      const stockWidth = stockFills[idx] ? stockFills[idx].style.width : '95%';
      el.style.transition = 'none';
      el.style.width = stockWidth;
    });

    // Prepare numeric interpolation descriptors for all 4 gauges over 800ms
    const numericTargets = Array.from(afterValNodes).map((valEl) => {
      const fromVal = parseFloat(valEl.getAttribute('data-stock-num') || '0');
      const toVal = parseFloat(valEl.getAttribute('data-recoil-num') || '0');
      const decimals = parseInt(valEl.getAttribute('data-decimals') || '0', 10);
      const unit = valEl.getAttribute('data-unit') || '';
      const finalLabel = valEl.getAttribute('data-final-label') || valEl.textContent;
      return { valEl, fromVal, toVal, decimals, unit, finalLabel };
    });

    // Set initial stock numbers before starting 800ms rAF countdown
    numericTargets.forEach((item) => {
      item.valEl.textContent = `${item.fromVal.toFixed(item.decimals)}${item.unit}`;
    });

    const durationMs = 800;
    const startTime = performance.now();

    requestAnimationFrame(() => {
      recoilFills.forEach((el) => {
        const targetWidth = el.getAttribute('data-target-width') || '20%';
        el.style.transition = `width ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`;
        el.style.width = targetWidth;
      });

      function stepNumbers(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, Math.max(0, elapsed / durationMs));
        // Cubic ease-out
        const eased = 1 - Math.pow(1 - progress, 3);

        numericTargets.forEach((item) => {
          if (progress < 1) {
            const current = item.fromVal + (item.toVal - item.fromVal) * eased;
            item.valEl.textContent = `${current.toFixed(item.decimals)}${item.unit}`;
          } else {
            item.valEl.textContent = item.finalLabel;
          }
        });

        if (progress < 1) {
          requestAnimationFrame(stepNumbers);
        } else {
          isSimulating = false;
          if (simBtn) {
            simBtn.textContent = UI_COPY[getLang()].simulateBtnIdle;
          }
        }
      }

      requestAnimationFrame(stepNumbers);
    });
  }

  function renderMatrix() {
    injectStyles();
    const mount = ensureMountElement();
    const lang = getLang();
    const copy = UI_COPY[lang];

    if (!detectedOsSummary) {
      detectedOsSummary = detectClientOs();
      syncDetectedOsState(detectedOsSummary);
    }

    const osData = OS_MATRIX_DATA[activeOsKey] || OS_MATRIX_DATA.win11;
    const osCopy = osData[lang];
    const currentArch = activeArchByOs[activeOsKey] || osData.defaultArch;
    const activeBinary = currentArch === 'x86' ? osData.binaryX86 : osData.binaryX64;
    const m = osData.metrics;

    const procUnit = lang === 'en' ? m.processes.unitEn : m.processes.unitEs;
    const procStockLabel = `${m.processes.stockVal} ${procUnit}`;
    const procRecoilLabel = `${m.processes.recoilVal} ${procUnit}`;

    const ramStockNum = parseFloat(m.ram.stockVal);
    const ramRecoilNum = parseFloat(m.ram.recoilVal);
    const timerStockNum = parseFloat(m.timer.stockVal);
    const timerRecoilNum = parseFloat(m.timer.recoilVal);
    const dpcStockNum = parseFloat(m.dpc.stockVal);
    const dpcRecoilNum = parseFloat(m.dpc.recoilVal);

    // Build OS Tabs HTML
    const tabsHtml = Object.keys(OS_MATRIX_DATA)
      .map((key) => {
        const item = OS_MATRIX_DATA[key];
        const itemCopy = item[lang];
        const isActive = key === activeOsKey;
        return `
          <button
            type="button"
            class="os-tab-btn ${isActive ? 'active' : ''}"
            data-os="${key}"
            role="tab"
            aria-selected="${isActive ? 'true' : 'false'}"
          >
            <div class="os-tab-top">
              <span class="os-tab-arch-pill">${item.archBadge}</span>
            </div>
            <div class="os-tab-name">${item.shortTab}</div>
            <div class="os-tab-edition">
              <span>●</span>
              <span>${itemCopy.editionTag}</span>
            </div>
          </button>
        `;
      })
      .join('');

    // Build Highlights HTML
    const highlightsHtml = osCopy.highlights
      .map(
        (hl) => `
        <div class="os-highlight-item">
          <div class="os-hl-meta">
            <span class="os-hl-badge">${hl.badge}</span>
          </div>
          <h4 class="os-hl-title">${hl.title}</h4>
          <p class="os-hl-desc">${hl.desc}</p>
        </div>
      `
      )
      .join('');

    // Build Architecture Switcher Pills
    const archButtonsHtml = osData.supportedArchs
      .map((arch) => {
        const isArchActive = arch === currentArch;
        const label = arch === 'x86' ? '32-Bit (x86)' : '64-Bit (x64)';
        return `
          <button
            type="button"
            class="os-arch-switch-btn ${isArchActive ? 'active' : ''}"
            data-arch="${arch}"
          >
            ${label}
          </button>
        `;
      })
      .join('');

    const primaryCtaLabel = currentArch === 'x86' ? osCopy.ctaPrimaryX86 : osCopy.ctaPrimaryX64;
    const altArch = currentArch === 'x86' ? 'x64' : 'x86';
    const hasDualArch = osData.supportedArchs.length > 1;

    mount.innerHTML = `
      <div class="os-matrix-wrap">
        <div class="os-matrix-header">
          <h2 class="os-matrix-title">${copy.sectionTitle}</h2>
          <p class="os-matrix-desc">${copy.sectionDesc}</p>
          <div class="os-matrix-detected-bar">
            <div class="os-detected-pill client-pill">
              <span>${copy.detectedPillPrefix}</span>
              <strong>${lang === 'en' ? detectedOsSummary.labelEn : detectedOsSummary.labelEs}</strong>
            </div>
          </div>
        </div>

        <!-- 4 Interactive OS Selector Tabs -->
        <div class="os-tabs-bar" role="tablist" aria-label="${copy.selectOsPrompt}">
          ${tabsHtml}
        </div>

        <!-- Main Technical Cockpit -->
        <div class="os-matrix-cockpit">
          <!-- Left Column: Selected OS Architecture Breakdown -->
          <div class="os-panel-card">
            <div>
              <div class="os-detail-header">
                <div>
                  <div class="os-detail-eyebrow">
                    <span>◆ ${osCopy.editionTag}</span>
                    <span>&middot; ${osData.code}</span>
                  </div>
                  <h3 class="os-detail-title">${osCopy.title}</h3>
                  <p class="os-detail-subtitle">${osCopy.subtitle}</p>
                </div>
                <span class="os-status-seal">${osCopy.statusBadge}</span>
              </div>

              <div class="os-highlights-grid">
                ${highlightsHtml}
              </div>
            </div>

            <!-- Direct Quick-Select Binary Hub -->
            <div class="os-cta-box">
              <div class="os-cta-top">
                <div style="display: flex; align-items: center; gap: 0.55rem; flex-wrap: wrap;">
                  <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">
                    ${copy.archSelectorLabel}
                  </span>
                  <div class="os-arch-toggle-group">
                    ${archButtonsHtml}
                  </div>
                </div>
                <div class="os-binary-meta">
                  <span>${activeBinary.name}</span>
                  <span class="os-binary-size">${activeBinary.size}</span>
                </div>
              </div>

              <div class="os-cta-buttons-row">
                <button
                  type="button"
                  class="os-quick-select-btn ${currentArch === 'x86' ? 'arch-x86' : 'arch-x64'}"
                  id="os-matrix-quick-select-primary"
                  data-target-arch="${currentArch}"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <span>${primaryCtaLabel}</span>
                </button>
                ${
                  hasDualArch
                    ? `<button
                        type="button"
                        class="os-quick-select-alt"
                        id="os-matrix-quick-select-alt"
                        data-target-arch="${altArch}"
                        title="${copy.scrollHint}"
                      >
                        <span>⚡ ${altArch.toUpperCase()}</span>
                      </button>`
                    : ''
                }
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Before vs After System Resource Comparator -->
          <div class="os-panel-card">
            <div>
              <div class="os-comp-header">
                <div>
                  <div class="os-comp-tag">${copy.comparatorTag} &middot; ${osData.shortTab}</div>
                  <h3 class="os-comp-title">${copy.comparatorTitle}</h3>
                  <p class="os-comp-sub">${copy.comparatorSub}</p>
                </div>
                <button type="button" class="os-sim-btn" id="os-matrix-sim-btn">
                  ${copy.simulateBtnIdle}
                </button>
              </div>

              <div class="os-comp-legend">
                <div class="os-legend-item">
                  <span class="os-legend-swatch stock"></span>
                  <span>${copy.stockLegend}</span>
                </div>
                <div class="os-legend-item">
                  <span class="os-legend-swatch recoil"></span>
                  <strong style="color: var(--text-main);">${copy.recoilLegend}</strong>
                </div>
              </div>

              <!-- 4 Side-by-Side Resource Gauges -->
              <div class="os-gauges-stack">
                <!-- Gauge 1: Idle Background Processes -->
                <div class="os-gauge-card">
                  <div class="os-gauge-top">
                    <div>
                      <div class="os-gauge-title">${copy.metricProcessesTitle}</div>
                      <div class="os-gauge-sub">${copy.metricProcessesSub}</div>
                    </div>
                    <span class="os-gauge-delta">${m.processes.delta}</span>
                  </div>
                  <div class="os-gauge-sbs">
                    <div class="os-gauge-col before">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">STOCK</span>
                        <span class="os-gauge-val">${procStockLabel}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill stock" style="width: ${m.processes.stockPct}%;"></div>
                      </div>
                    </div>
                    <div class="os-gauge-arrow">→</div>
                    <div class="os-gauge-col after">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">RECOIL</span>
                        <span
                          class="os-gauge-val"
                          data-stock-num="${m.processes.stockVal}"
                          data-recoil-num="${m.processes.recoilVal}"
                          data-decimals="0"
                          data-unit=" ${procUnit}"
                          data-final-label="${procRecoilLabel}"
                        >${procRecoilLabel}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill recoil" data-target-width="${m.processes.recoilPct}%" style="width: ${m.processes.recoilPct}%;"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Gauge 2: Idle RAM Consumption -->
                <div class="os-gauge-card">
                  <div class="os-gauge-top">
                    <div>
                      <div class="os-gauge-title">${copy.metricRamTitle}</div>
                      <div class="os-gauge-sub">${copy.metricRamSub}</div>
                    </div>
                    <span class="os-gauge-delta">${m.ram.delta}</span>
                  </div>
                  <div class="os-gauge-sbs">
                    <div class="os-gauge-col before">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">STOCK</span>
                        <span class="os-gauge-val">${m.ram.stockVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill stock" style="width: ${m.ram.stockPct}%;"></div>
                      </div>
                    </div>
                    <div class="os-gauge-arrow">→</div>
                    <div class="os-gauge-col after">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">RECOIL</span>
                        <span
                          class="os-gauge-val"
                          data-stock-num="${ramStockNum}"
                          data-recoil-num="${ramRecoilNum}"
                          data-decimals="1"
                          data-unit=" GB"
                          data-final-label="${m.ram.recoilVal}"
                        >${m.ram.recoilVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill recoil" data-target-width="${m.ram.recoilPct}%" style="width: ${m.ram.recoilPct}%;"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Gauge 3: Kernel Timer Resolution -->
                <div class="os-gauge-card">
                  <div class="os-gauge-top">
                    <div>
                      <div class="os-gauge-title">${copy.metricTimerTitle}</div>
                      <div class="os-gauge-sub">${copy.metricTimerSub}</div>
                    </div>
                    <span class="os-gauge-delta">${m.timer.delta}</span>
                  </div>
                  <div class="os-gauge-sbs">
                    <div class="os-gauge-col before">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">STOCK</span>
                        <span class="os-gauge-val">${m.timer.stockVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill stock" style="width: ${m.timer.stockPct}%;"></div>
                      </div>
                    </div>
                    <div class="os-gauge-arrow">→</div>
                    <div class="os-gauge-col after">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">RECOIL</span>
                        <span
                          class="os-gauge-val"
                          data-stock-num="${timerStockNum}"
                          data-recoil-num="${timerRecoilNum}"
                          data-decimals="3"
                          data-unit=" ms"
                          data-final-label="${m.timer.recoilVal}"
                        >${m.timer.recoilVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill recoil" data-target-width="${m.timer.recoilPct}%" style="width: ${m.timer.recoilPct}%;"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Gauge 4: Average DPC Interrupts -->
                <div class="os-gauge-card">
                  <div class="os-gauge-top">
                    <div>
                      <div class="os-gauge-title">${copy.metricDpcTitle}</div>
                      <div class="os-gauge-sub">${copy.metricDpcSub}</div>
                    </div>
                    <span class="os-gauge-delta">${m.dpc.delta}</span>
                  </div>
                  <div class="os-gauge-sbs">
                    <div class="os-gauge-col before">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">STOCK</span>
                        <span class="os-gauge-val">${m.dpc.stockVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill stock" style="width: ${m.dpc.stockPct}%;"></div>
                      </div>
                    </div>
                    <div class="os-gauge-arrow">→</div>
                    <div class="os-gauge-col after">
                      <div class="os-gauge-col-head">
                        <span class="os-gauge-tag">RECOIL</span>
                        <span
                          class="os-gauge-val"
                          data-stock-num="${dpcStockNum}"
                          data-recoil-num="${dpcRecoilNum}"
                          data-decimals="0"
                          data-unit=" µs"
                          data-final-label="${m.dpc.recoilVal}"
                        >${m.dpc.recoilVal}</span>
                      </div>
                      <div class="os-gauge-track">
                        <div class="os-gauge-fill recoil" data-target-width="${m.dpc.recoilPct}%" style="width: ${m.dpc.recoilPct}%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    bindMatrixEvents(mount);
    window.refreshRecoilMotion?.();
  }

  function bindMatrixEvents(mount) {
    // OS Tab selection
    mount.querySelectorAll('.os-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextOs = btn.getAttribute('data-os');
        if (nextOs && OS_MATRIX_DATA[nextOs]) {
          userManuallySwitchedTab = true;
          activeOsKey = nextOs;
          renderMatrix();
        }
      });
    });

    // Architecture switcher pills (x86 / x64)
    mount.querySelectorAll('.os-arch-switch-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextArch = btn.getAttribute('data-arch');
        if (nextArch === 'x86' || nextArch === 'x64') {
          activeArchByOs[activeOsKey] = nextArch;
          window.RecoilDownloadCenter?.selectArchTab(nextArch);
          renderMatrix();
        }
      });
    });

    // Primary Quick-Select Download button
    const primaryBtn = mount.querySelector('#os-matrix-quick-select-primary');
    if (primaryBtn) {
      primaryBtn.addEventListener('click', () => {
        const targetArch = primaryBtn.getAttribute('data-target-arch') || 'x64';
        scrollToDownloadBinary(targetArch, activeOsKey);
      });
    }

    // Secondary Alternate Architecture Quick-Select button
    const altBtn = mount.querySelector('#os-matrix-quick-select-alt');
    if (altBtn) {
      altBtn.addEventListener('click', () => {
        const targetArch = altBtn.getAttribute('data-target-arch') || 'x86';
        activeArchByOs[activeOsKey] = targetArch;
        renderMatrix();
        scrollToDownloadBinary(targetArch, activeOsKey);
      });
    }

    // Live Purge Comparator Animation Trigger
    const simBtn = mount.querySelector('#os-matrix-sim-btn');
    if (simBtn) {
      simBtn.addEventListener('click', () => {
        triggerLivePurgeSimulation(mount);
      });
    }
  }

  function initOsMatrix() {
    detectedOsSummary = detectClientOs();
    if (detectedOsSummary && OS_MATRIX_DATA[detectedOsSummary.osKey]) {
      syncDetectedOsState(detectedOsSummary);
    }
    renderMatrix();

    // Refine Windows 10 (< 13) vs Windows 11 (>= 13) and 32-bit bitness via User-Agent Client Hints
    refineOsDetectionWithHighEntropy();

    // Listen for bilingual switch events
    const onLangChange = () => {
      renderMatrix();
    };
    window.addEventListener('recoil:langchange', onLangChange);
    document.addEventListener('recoil:langchange', onLangChange);

    // Listen for skin switch events
    const onSkinChange = () => {
      window.refreshRecoilMotion?.();
    };
    window.addEventListener('recoil:skinchange', onSkinChange);
    document.addEventListener('recoil:skinchange', onSkinChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOsMatrix);
  } else {
    initOsMatrix();
  }
})();
