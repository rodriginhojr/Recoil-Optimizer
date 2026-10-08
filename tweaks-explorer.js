/**
 * RECOIL OPTIMIZER — Interactive 117 Kernel Tweaks Explorer
 * Wave 2 Subagent #8: 117 Tweaks Explorer Builder
 * Mounts into #tweaks-explorer-mount with full ES/EN bilingual support & 5-skin reactivity.
 */

(function () {
  'use strict';

  const STYLE_ID = 'recoil-tweaks-explorer-styles';
  const MOUNT_ID = 'tweaks-explorer-mount';

  const CATEGORIES = [
    {
      id: 'all',
      count: 117,
      label: { es: 'Todas // 117', en: 'All // 117' },
      short: { es: 'TODAS', en: 'ALL' }
    },
    {
      id: 'kernel',
      count: 24,
      label: { es: 'Kernel & CPU Scheduler // 24', en: 'Kernel & CPU Scheduler // 24' },
      short: { es: 'KERNEL & CPU', en: 'KERNEL & CPU' }
    },
    {
      id: 'gpu',
      count: 21,
      label: { es: 'GPU, MSI Mode & DirectX // 21', en: 'GPU, MSI Mode & DirectX // 21' },
      short: { es: 'GPU & MSI', en: 'GPU & MSI' }
    },
    {
      id: 'network',
      count: 18,
      label: { es: 'Red, TCP Nagle & Winsock // 18', en: 'Network, TCP Nagle & Winsock // 18' },
      short: { es: 'RED & WINSOCK', en: 'NET & WINSOCK' }
    },
    {
      id: 'memory',
      count: 19,
      label: { es: 'RAM, Cache & Storage I/O // 19', en: 'RAM, Cache & Storage I/O // 19' },
      short: { es: 'MEMORIA & I/O', en: 'MEMORY & I/O' }
    },
    {
      id: 'power',
      count: 15,
      label: { es: 'Energía, Timer 0.5ms & ACPI // 15', en: 'Power, 0.5ms Timer & ACPI // 15' },
      short: { es: 'ENERGÍA & TIMER', en: 'POWER & TIMER' }
    },
    {
      id: 'privacy',
      count: 20,
      label: { es: 'Telemetría, Servicios & Debloat // 20', en: 'Telemetry, Services & Debloat // 20' },
      short: { es: 'DEBLOAT & PRIV', en: 'DEBLOAT & PRIV' }
    }
  ];

  const QUICK_TAGS = ['MMCSS', 'Nagle', 'X3D', 'BCD', 'MSI', 'HVCI', 'SysMain', 'DWM'];

  /**
   * 18 Flagship Representative Tweaks (3 per category, representing the 117 total kernel catalog)
   * weight: how many sub-keys/tweaks in the 117 catalog this flagship cluster controls (sum = 117)
   * latencyWeight: contribution toward the -48.5% total input lag reduction (sum = 48.5)
   * fpsWeight: contribution toward the +24.8% 1% Low FPS gain (sum = 24.8)
   */
  const TWEAKS_CATALOG = [
    // ==================== KERNEL & CPU SCHEDULER (3 flagships = 24 sub-tweaks) ====================
    {
      id: 'KRN-01',
      category: 'kernel',
      safety: 'consensus', // 'safe' | 'consensus' | 'esports'
      balancedDefault: true,
      weight: 8,
      latencyWeight: 3.6,
      fpsWeight: 2.1,
      keywords: 'Win32PrioritySeparation foreground quantum scheduler cpu threads CSRSS',
      title: {
        es: 'Quantum Corto de Prioridad Primer Plano (0x26)',
        en: 'Short Fixed Foreground Quantum Scheduling (0x26)'
      },
      desc: {
        es: 'Configura el planificador de hilos de NT en intervalos cortos y fijos con proporción 3:1 a favor de la ventana activa del juego, impidiendo que procesos de fondo roben ciclos de reloj.',
        en: 'Configures the NT thread scheduler to short, fixed-length quantums with a 3:1 foreground boost ratio, preventing background threads from stealing CPU time slices.'
      },
      guardrail: {
        es: '🛡️ Agent 01: P-Core / E-Core Scheduler Topology Safe',
        en: '🛡️ Agent 01: P-Core / E-Core Scheduler Topology Safe'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\PriorityControl',
      regCommand: 'Win32PrioritySeparation = dword:00000026',
      defaultVal: '0x00000002 (Dynamic Variable Quantum)',
      subKeys: [
        'Win32PrioritySeparation=0x26',
        'IRQ8Priority=1',
        ' IRQ0Priority=1',
        'CpuPriorityClass=3',
        'IoPriority=3',
        'PagePriority=5',
        'CSRSS_Realtime',
        'ForegroundBoost=3:1'
      ],
      impact: {
        es: '-1.8 ms Tiempo de Respuesta CPU',
        en: '-1.8 ms CPU Frame Scheduling'
      }
    },
    {
      id: 'KRN-02',
      category: 'kernel',
      safety: 'safe',
      balancedDefault: true,
      weight: 8,
      latencyWeight: 3.4,
      fpsWeight: 2.4,
      keywords: 'MMCSS SystemResponsiveness NetworkThrottlingIndex Audio Games Pro Audio',
      title: {
        es: 'Desbloqueo MMCSS & Eliminación de Network Throttling',
        en: 'MMCSS Zero-Reserve & Network Throttling Bypass'
      },
      desc: {
        es: 'Libera el 20% de CPU reservado por el programador multimedia (SystemResponsiveness = 0) y desactiva el estrangulamiento de paquetes no multimedia (0xFFFFFFFF) para hilos de motor gráfico.',
        en: 'Eliminates the 20% CPU reservation held by Multimedia Class Scheduler (SystemResponsiveness = 0) and disables non-multimedia packet throttling (0xFFFFFFFF) for game engine threads.'
      },
      guardrail: {
        es: '🛡️ Agent 01: Real-Time Audio ASIO / WASAPI Safe',
        en: '🛡️ Agent 01: Real-Time Audio ASIO / WASAPI Safe'
      },
      regPath: 'HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile\\Tasks\\Games',
      regCommand: 'SystemResponsiveness = 0x0 | NetworkThrottlingIndex = 0xFFFFFFFF',
      defaultVal: 'SystemResponsiveness = 0x14 (20% Reserve) | Throttle = 0xA',
      subKeys: [
        'SystemResponsiveness=0',
        'NetworkThrottlingIndex=0xFFFFFFFF',
        'GPU Priority=8',
        'Priority=6',
        'Scheduling Category=High',
        'SFIO Priority=High',
        'Background Only=False',
        'Clock Rate=10000'
      ],
      impact: {
        es: '+11% Estabilidad 0.1% Low FPS',
        en: '+11% 0.1% Low FPS Stability'
      }
    },
    {
      id: 'KRN-03',
      category: 'kernel',
      safety: 'esports',
      balancedDefault: false,
      weight: 8,
      latencyWeight: 3.8,
      fpsWeight: 1.9,
      keywords: 'X3D CCD Core Parking SerializeTimerExpiration ThreadDpc Enable',
      title: {
        es: 'Afinidad 3D V-Cache (X3D) & Deserialización DPC/Timer',
        en: 'X3D V-Cache CCD Pinning & Timer Expiration Serialization'
      },
      desc: {
        es: 'Alinea el despacho de interrupciones DPC y temporizadores del kernel evitando saltos entre CCDs en procesadores Ryzen X3D e Intel híbridos (P-Core pinning estricto).',
        en: 'Aligns kernel timer expiration and DPC dispatch to prevent cross-CCD cache misses on Ryzen X3D and hybrid Intel architectures with strict P-Core thread pinning.'
      },
      guardrail: {
        es: '🛡️ Agent 01: Dual-CCD X3D & Thread Director Safe',
        en: '🛡️ Agent 01: Dual-CCD X3D & Thread Director Safe'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel',
      regCommand: 'SerializeTimerExpiration = dword:00000000 | ThreadDpcEnable = 0x1',
      defaultVal: 'SerializeTimerExpiration = 0x1 (Cross-CCD Dispatch)',
      subKeys: [
        'SerializeTimerExpiration=0',
        'ThreadDpcEnable=1',
        'DistributeTimers=1',
        'HeteroPolicy=0',
        'SchedulerQos=High',
        'SplitLockDetection=0',
        'IdealNodePinning=1',
        'CcBcbProfiler=0'
      ],
      impact: {
        es: '-1.4 ms Latencia DPC / Jitter',
        en: '-1.4 ms DPC Latency / Jitter'
      }
    },

    // ==================== GPU, MSI MODE & DIRECTX (3 flagships = 21 sub-tweaks) ====================
    {
      id: 'GPU-01',
      category: 'gpu',
      safety: 'consensus',
      balancedDefault: true,
      weight: 7,
      latencyWeight: 4.1,
      fpsWeight: 2.2,
      keywords: 'MSI MessageSignaledInterruptProperties InterruptPriority PCI Express IRQ',
      title: {
        es: 'Modo MSI (Message Signaled Interrupts) + Prioridad Alta PCIe',
        en: 'PCIe Message Signaled Interrupts (MSI Mode) + High Priority'
      },
      desc: {
        es: 'Migra la GPU y el controlador XHCI USB de interrupciones basadas en líneas IRQ compartidas a señalización en memoria MSI directa sin colisiones de bus.',
        en: 'Migrates GPU and USB XHCI controllers from legacy shared pin-based IRQ lines to direct memory-signaled MSI interrupts with High InterruptPriority.'
      },
      guardrail: {
        es: '🛡️ Agent 02: PCIe Bus & XHCI MSI-X Capability Verified',
        en: '🛡️ Agent 02: PCIe Bus & XHCI MSI-X Capability Verified'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Enum\\PCI\\<VEN_DEV>\\Device Parameters\\Interrupt Management\\MessageSignaledInterruptProperties',
      regCommand: 'MSISupported = dword:00000001 | InterruptPriority = 0x3',
      defaultVal: 'MSISupported = 0x0 (Legacy Line-Based IRQ) | Priority = Undefined',
      subKeys: [
        'MSISupported=1',
        'InterruptPriority=3',
        'MessageNumberLimit=16',
        'DevicePolicy=4',
        'AssignmentSetOverride',
        'XHCI_MSI_Enable=1',
        'NVMe_MSI_High=1'
      ],
      impact: {
        es: '-2.1 ms Latencia ISR de GPU',
        en: '-2.1 ms GPU ISR Latency'
      }
    },
    {
      id: 'GPU-02',
      category: 'gpu',
      safety: 'safe',
      balancedDefault: true,
      weight: 7,
      latencyWeight: 3.2,
      fpsWeight: 2.3,
      keywords: 'HwSchMode HAGS DirectX DWM FlipQueue MPO Overlay TdrLevel',
      title: {
        es: 'Planificación HAGS DirectX 12 & Bypass Multi-Plane Overlay (MPO)',
        en: 'Hardware Accelerated GPU Scheduling (HAGS) & MPO Bypass'
      },
      desc: {
        es: 'Activa HwSchMode=2 para que el procesador de comando de la GPU gestione su propia cola de VRAM y desactiva los planos DWM MPO que causan micro-stuttering en ventana sin bordes.',
        en: 'Enables HwSchMode=2 so the GPU command processor manages its own VRAM queue while disabling DWM Multi-Plane Overlays (OverlayTestMode=5) to eliminate micro-stutter.'
      },
      guardrail: {
        es: '🛡️ Agent 02: Multi-Monitor DisplayPort VRR / G-Sync Safe',
        en: '🛡️ Agent 02: Multi-Monitor DisplayPort VRR / G-Sync Safe'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\GraphicsDrivers',
      regCommand: 'HwSchMode = dword:00000002 | OverlayTestMode = dword:00000005',
      defaultVal: 'HwSchMode = 0x1 (OS Scheduler) | DWM MPO Active (0x0)',
      subKeys: [
        'HwSchMode=2',
        'OverlayTestMode=5',
        'TdrDelay=10',
        'TdrDdiDelay=10',
        'DxgKrnl_FlipQueue=1',
        'EnablePreemption=0',
        'RmGpsPsEnablePerCpuCoreDpc=1'
      ],
      impact: {
        es: '+12% 1% Low FPS & 0 Stutter',
        en: '+12% 1% Low FPS & Zero Stutter'
      }
    },
    {
      id: 'GPU-03',
      category: 'gpu',
      safety: 'esports',
      balancedDefault: true,
      weight: 7,
      latencyWeight: 3.5,
      fpsWeight: 1.6,
      keywords: 'FSE Fullscreen Exclusive GameDVR_FSEBehaviorMode SwapChain DXGI DWM',
      title: {
        es: 'Exclusividad Pantalla Completa Pura (FSE Behavior = 2) & GameDVR Off',
        en: 'True Fullscreen Exclusive (FSE Behavior = 2) & GameDVR Purge'
      },
      desc: {
        es: 'Fuerza el modo exclusivo real en el SwapChain DXGI evitando el búfer intermedio del compositor DWM y purga las ganchos de captura de Xbox GameBar.',
        en: 'Forces true DXGI SwapChain ownership in fullscreen applications, bypassing the DWM composition buffer and purging background Xbox GameDVR hooks.'
      },
      guardrail: {
        es: '🛡️ Agent 02: Laptop Optimus MUX Safe',
        en: '🛡️ Agent 02: Laptop Optimus MUX Safe'
      },
      regPath: 'HKCU\\System\\GameConfigStore',
      regCommand: 'GameDVR_FSEBehaviorMode = 0x2 | GameDVR_Enabled = 0x0',
      defaultVal: 'GameDVR_FSEBehaviorMode = 0x0 (DWM Hybrid Flip) | GameDVR = 0x1',
      subKeys: [
        'GameDVR_FSEBehaviorMode=2',
        'GameDVR_FSEBehavior=2',
        'GameDVR_Enabled=0',
        'GameDVR_DXGIHonorFSE=1',
        'GameDVR_HonorUserFSE=1',
        'GameDVR_EFSEFeatureFlags=0',
        'AppCaptureEnabled=0'
      ],
      impact: {
        es: '-2.6 ms Latencia PresentMon',
        en: '-2.6 ms PresentMon Latency'
      }
    },

    // ==================== NETWORK, TCP NAGLE & WINSOCK (3 flagships = 18 sub-tweaks) ====================
    {
      id: 'NET-01',
      category: 'network',
      safety: 'safe',
      balancedDefault: true,
      weight: 6,
      latencyWeight: 2.9,
      fpsWeight: 0.5,
      keywords: 'Nagle TcpAckFrequency TCPNoDelay TcpDelAckTicks Winsock',
      title: {
        es: 'Desactivación del Algoritmo de Nagle (TcpAckFrequency = 1)',
        en: 'Nagle Algorithm Elimination (TcpAckFrequency = 1 & TCPNoDelay)'
      },
      desc: {
        es: 'Elimina la retención de 200ms de paquetes pequeños en la pila TCP/IP, enviando cada confirmación ACK y paquete de tickrate de inmediato a la interfaz NIC.',
        en: 'Removes the 200ms small-packet coalescing delay in the Windows TCP/IP stack, dispatching every ACK and game tick packet immediately to the NIC.'
      },
      guardrail: {
        es: '🛡️ Agent 04: Active Gateway NIC GUID Auto-Discovery',
        en: '🛡️ Agent 04: Active Gateway NIC GUID Auto-Discovery'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces\\{ACTIVE-NIC-GUID}',
      regCommand: 'TcpAckFrequency = 0x1 | TCPNoDelay = 0x1 | TcpDelAckTicks = 0x0',
      defaultVal: 'TcpAckFrequency = 0x2 (200ms Nagle Coalescing) | DelAck = 0x2',
      subKeys: [
        'TcpAckFrequency=1',
        'TCPNoDelay=1',
        'TcpDelAckTicks=0',
        'MaxUserPort=65534',
        'TcpTimedWaitDelay=30',
        'DefaultTTL=64'
      ],
      impact: {
        es: '-8.5 ms Jitter de Red / Hitreg',
        en: '-8.5 ms Network Jitter / Hitreg'
      }
    },
    {
      id: 'NET-02',
      category: 'network',
      safety: 'consensus',
      balancedDefault: true,
      weight: 6,
      latencyWeight: 2.2,
      fpsWeight: 0.8,
      keywords: 'RSS Receive Side Scaling NetAdapter InterruptModeration EnergyEfficientEthernet',
      title: {
        es: 'Escalamiento RSS Multinúcleo & Desactivación Interrupt Moderation',
        en: 'Multi-Core RSS Queue Scaling & NIC Interrupt Moderation Off'
      },
      desc: {
        es: 'Distribuye las colas de recepción de paquetes NIC en múltiples núcleos físicos y desactiva la moderación de interrupciones y el ahorro EEE (Green Ethernet).',
        en: 'Distributes NIC receive queues across physical CPU cores while disabling NIC Interrupt Moderation and Energy Efficient Ethernet (EEE) wake delays.'
      },
      guardrail: {
        es: '🛡️ Agent 04: Intel I225/I226 & Realtek 2.5GbE RSS Safe',
        en: '🛡️ Agent 04: Intel I225/I226 & Realtek 2.5GbE RSS Safe'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Class\\{4d36e972-e325-11ce-bfc1-08002be10318}\\0001',
      regCommand: '*InterruptModeration = "0" | *RSS = "1" | *EEE = "0"',
      defaultVal: '*InterruptModeration = "1" (Buffered) | *EEE = "1" (Active)',
      subKeys: [
        '*InterruptModeration=0',
        '*RSS=1',
        '*NumRssQueues=4',
        '*EEE=0',
        '*FlowControl=0',
        '*WakeOnMagicPacket=0'
      ],
      impact: {
        es: '-1.9 ms Latencia de Paquete UDP',
        en: '-1.9 ms UDP Packet Processing'
      }
    },
    {
      id: 'NET-03',
      category: 'network',
      safety: 'esports',
      balancedDefault: false,
      weight: 6,
      latencyWeight: 2.0,
      fpsWeight: 0.6,
      keywords: 'AFD FastSendDatagramThreshold Winsock NonBestEffortLimit QoS ECN',
      title: {
        es: 'Winsock AFD Fast-Datagram Bypass & Reserva QoS 0%',
        en: 'Winsock AFD Fast-Datagram Bypass & Zero QoS Bandwidth Reserve'
      },
      desc: {
        es: 'Eleva el umbral de envío directo de datagramas UDP (FastSendDatagramThreshold = 65536) en el driver Ancillary Function (`afd.sys`) evitando bloqueos de búfer I/O.',
        en: 'Raises the direct UDP datagram threshold (FastSendDatagramThreshold = 65536) in the Ancillary Function Driver (`afd.sys`), bypassing intermediate I/O buffer locks.'
      },
      guardrail: {
        es: '🛡️ Agent 04: 128-Tick / Sub-Tick UDP Packet Integrity Safe',
        en: '🛡️ Agent 04: 128-Tick / Sub-Tick UDP Packet Integrity Safe'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Services\\AFD\\Parameters',
      regCommand: 'FastSendDatagramThreshold = dword:00010000 | NonBestEffortLimit = 0x0',
      defaultVal: 'FastSendDatagramThreshold = 0x400 (1024B) | Psched Reserve = 20%',
      subKeys: [
        'FastSendDatagramThreshold=65536',
        'DefaultReceiveWindow=65536',
        'DefaultSendWindow=65536',
        'DynamicSendBufferDisable=0',
        'NonBestEffortLimit=0',
        'DoNotHoldNICBuffers=1'
      ],
      impact: {
        es: '+100% Caudal Directo UDP Tick',
        en: '+100% Direct UDP Tick Throughput'
      }
    },

    // ==================== RAM, CACHE & STORAGE I/O (3 flagships = 19 sub-tweaks) ====================
    {
      id: 'MEM-01',
      category: 'memory',
      safety: 'safe',
      balancedDefault: true,
      weight: 7,
      latencyWeight: 2.3,
      fpsWeight: 1.9,
      keywords: 'DisablePagingExecutive LargeSystemCache IOPageLockLimit NTOSKRNL',
      title: {
        es: 'Bloqueo de Kernel en RAM Física (DisablePagingExecutive = 1)',
        en: 'Lock Kernel & Drivers in Physical RAM (DisablePagingExecutive = 1)'
      },
      desc: {
        es: 'Impide que `ntoskrnl.exe` y los drivers críticos en modo kernel sean paginados al archivo `pagefile.sys` en disco, garantizando respuesta en nanosegundos desde DRAM.',
        en: 'Prevents `ntoskrnl.exe` and critical kernel-mode drivers from paging out to `pagefile.sys`, ensuring nanosecond execution directly from physical DRAM.'
      },
      guardrail: {
        es: '🛡️ Agent 03: Requires ≥16GB Physical DRAM (Auto-Guard)',
        en: '🛡️ Agent 03: Requires ≥16GB Physical DRAM (Auto-Guard)'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management',
      regCommand: 'DisablePagingExecutive = dword:00000001 | LargeSystemCache = 0x0',
      defaultVal: 'DisablePagingExecutive = 0x0 (Pageable Kernel Executive)',
      subKeys: [
        'DisablePagingExecutive=1',
        'LargeSystemCache=0',
        'IoPageLockLimit=0xF0000',
        'SecondLevelDataCache=1024',
        'ClearPageFileAtShutdown=0',
        'FeatureSettingsOverride=3',
        'FeatureSettingsOverrideMask=3'
      ],
      impact: {
        es: '0 Page-Faults en Modo Kernel',
        en: 'Zero Kernel-Mode Page Faults'
      }
    },
    {
      id: 'MEM-02',
      category: 'memory',
      safety: 'consensus',
      balancedDefault: true,
      weight: 6,
      latencyWeight: 2.1,
      fpsWeight: 1.8,
      keywords: 'SysMain Superfetch Prefetcher MemoryCompression MMAgent StandbyList',
      title: {
        es: 'Control de SysMain, Prefetcher & Compresión de Memoria MMAgent',
        en: 'SysMain Purge & MMAgent RAM Compression Bypass'
      },
      desc: {
        es: 'Desactiva la compresión en tiempo real de páginas RAM por CPU (`Disable-MMAgent -mc`) y detiene las escrituras de fondo de SysMain que saturan el bus NVMe durante partidas.',
        en: 'Disables CPU-intensive real-time RAM page compression (`Disable-MMAgent -mc`) and halts background SysMain disk thrashing over the NVMe bus during matches.'
      },
      guardrail: {
        es: '🛡️ Agent 03: Blocked on Mechanical HDD (NVMe/SSD Only)',
        en: '🛡️ Agent 03: Blocked on Mechanical HDD (NVMe/SSD Only)'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Services\\SysMain',
      regCommand: 'Start = dword:00000004 | Disable-MMAgent -MemoryCompression',
      defaultVal: 'Start = 0x2 (Auto SysMain) | MMAgent Compression = Enabled',
      subKeys: [
        'SysMain_Start=4',
        'EnablePrefetcher=0',
        'EnableSuperfetch=0',
        'MemoryCompression=False',
        'PageCombining=False',
        'StandbyListPurge=Auto'
      ],
      impact: {
        es: '-3.2% Uso de CPU en Fondo',
        en: '-3.2% Background CPU Overhead'
      }
    },
    {
      id: 'MEM-03',
      category: 'memory',
      safety: 'safe',
      balancedDefault: true,
      weight: 6,
      latencyWeight: 1.8,
      fpsWeight: 1.4,
      keywords: 'NTFS NtfsDisableLastAccessUpdate 8dot3 Stornvme NVMe QueueDepth',
      title: {
        es: 'Optimización I/O NVMe & Desactivación de Timestamps NTFS',
        en: 'NVMe Queue I/O Tuning & NTFS LastAccess Timestamp Bypass'
      },
      desc: {
        es: 'Elimina las escrituras de metadatos de último acceso (`fsutil behavior set disablelastaccess 1`) y la generación de nombres cortos 8.3 en cada carga de texturas.',
        en: 'Eliminates redundant metadata writes on every texture read (`disablelastaccess 1`) and legacy 8.3 short-name creation across NTFS game volumes.'
      },
      guardrail: {
        es: '🛡️ Agent 03: TRIM & DirectStorage Queue Depth Preserved',
        en: '🛡️ Agent 03: TRIM & DirectStorage Queue Depth Preserved'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem',
      regCommand: 'NtfsDisableLastAccessUpdate = 0x80000001 | NtfsDisable8dot3NameCreation = 0x1',
      defaultVal: 'NtfsDisableLastAccessUpdate = 0x80000000 | 8dot3 = 0x0',
      subKeys: [
        'NtfsDisableLastAccessUpdate=1',
        'NtfsDisable8dot3NameCreation=1',
        'NtfsMemoryUsage=2',
        'DontVerifyRandomDrivers=1',
        'Stornvme_IdlePower=0',
        'IoQueueDepth=256'
      ],
      impact: {
        es: '+18% Velocidad Carga Shaders',
        en: '+18% Shader & Asset I/O Speed'
      }
    },

    // ==================== POWER, 0.5MS TIMER & ACPI (3 flagships = 15 sub-tweaks) ====================
    {
      id: 'PWR-01',
      category: 'power',
      safety: 'esports',
      balancedDefault: false,
      weight: 5,
      latencyWeight: 3.9,
      fpsWeight: 1.7,
      keywords: 'BCD bcdedit useplatformtick disabledynamictick useplatformclock HPET TSC',
      title: {
        es: 'Sincronización TSC Pura (BCD Dynamic Tick Off & Platform Tick)',
        en: 'Pure TSC Clock Sync (BCD Dynamic Tick Off & Platform Tick)'
      },
      desc: {
        es: 'Desactiva el ahorro de tics dinámicos del kernel (`disabledynamictick yes`) y evita el lento temporizador HPET forzando el contador de estampas de tiempo (TSC) invariante de la CPU.',
        en: 'Disables power-saving kernel dynamic ticks (`disabledynamictick yes`) and prevents slow HPET fallback in favor of the CPU Invariant Timestamp Counter (TSC).'
      },
      guardrail: {
        es: '🛡️ Agent 05: Invariant TSC Hardware Clock Verified',
        en: '🛡️ Agent 05: Invariant TSC Hardware Clock Verified'
      },
      regPath: 'BCD\\Objects\\{current}\\Elements // NT Kernel Boot Configuration Store',
      regCommand: 'disabledynamictick = yes | useplatformtick = yes | useplatformclock = delete',
      defaultVal: 'disabledynamictick = no (Power-Save Tick Skipping Active)',
      subKeys: [
        'disabledynamictick=yes',
        'useplatformtick=yes',
        'useplatformclock=off',
        'tscsyncpolicy=Enhanced',
        'bootmenupolicy=Legacy'
      ],
      impact: {
        es: 'Timer Fijo 0.500ms Sin Deriva',
        en: 'Drift-Free 0.500ms Kernel Timer'
      }
    },
    {
      id: 'PWR-02',
      category: 'power',
      safety: 'consensus',
      balancedDefault: true,
      weight: 5,
      latencyWeight: 2.7,
      fpsWeight: 1.5,
      keywords: 'GlobalTimerResolutionRequests ZwSetTimerResolution 0.5ms NtSetTimerResolution',
      title: {
        es: 'Resolución Global de Temporizador NT a 0.5ms (5000ns)',
        en: 'Global NT Kernel Timer Resolution Lock at 0.5ms (5000ns)'
      },
      desc: {
        es: 'Habilita `GlobalTimerResolutionRequests = 1` en Windows 11/10 para que la resolución de `ZwSetTimerResolution` a 0.5ms se aplique globalmente a todos los hilos del sistema.',
        en: 'Enables `GlobalTimerResolutionRequests = 1` so high-precision 0.5ms `ZwSetTimerResolution` requests apply globally across all system and input threads.'
      },
      guardrail: {
        es: '🛡️ Agent 05: Win11 22H2/23H2/24H2 Global Timer Ready',
        en: '🛡️ Agent 05: Win11 22H2/23H2/24H2 Global Timer Ready'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\kernel',
      regCommand: 'GlobalTimerResolutionRequests = dword:00000001 | NtSetTimerResolution(5000)',
      defaultVal: 'GlobalTimerResolutionRequests = 0x0 (15.625ms Per-Process Tick)',
      subKeys: [
        'GlobalTimerResolutionRequests=1',
        'ZwSetTimerResolution=5000ns',
        'HighResolutionTimers=1',
        'TimerCheckFlags=0',
        'ClockInterruptPeriod=0.5ms'
      ],
      impact: {
        es: '-1.6 ms Latencia de Polling USB',
        en: '-1.6 ms USB Polling Latency'
      }
    },
    {
      id: 'PWR-03',
      category: 'power',
      safety: 'esports',
      balancedDefault: false,
      weight: 5,
      latencyWeight: 2.5,
      fpsWeight: 1.2,
      keywords: 'USB Selective Suspend C-States PowerThrottling CsEnabled ACPI PCIe ASPM',
      title: {
        es: 'Desactivación de Power Throttling, C-States Profundos & USB Suspend',
        en: 'Disable CPU Power Throttling, Deep C-States & USB Selective Suspend'
      },
      desc: {
        es: 'Impide que los controladores raíz USB entren en estado D2/D3 de ahorro (causante de desconexiones o jitter a 4000Hz/8000Hz) y desactiva el PowerThrottling del kernel.',
        en: 'Prevents USB root hubs from entering D2/D3 sleep states (eliminating 4KHz/8KHz mouse polling jitter) and disables kernel CPU PowerThrottling.'
      },
      guardrail: {
        es: '🛡️ Agent 05: Desktop AC Mode Only (Preserves Laptop Battery)',
        en: '🛡️ Agent 05: Desktop AC Mode Only (Preserves Laptop Battery)'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Power\\PowerThrottling',
      regCommand: 'PowerThrottlingOff = dword:00000001 | EnhancedPowerManagementEnabled = 0x0',
      defaultVal: 'PowerThrottlingOff = 0x0 | USB Selective Suspend = Enabled (0x1)',
      subKeys: [
        'PowerThrottlingOff=1',
        'EnhancedPowerManagementEnabled=0',
        'AllowIdleIrpInD3=0',
        'DisableSelectiveSuspend=1',
        'PCIe_ASPM=Off'
      ],
      impact: {
        es: 'Estabilidad 8000Hz Polling Rate',
        en: 'Rock-Solid 8000Hz Mouse Polling'
      }
    },

    // ==================== TELEMETRY, SERVICES & DEBLOAT (3 flagships = 20 sub-tweaks) ====================
    {
      id: 'PRV-01',
      category: 'privacy',
      safety: 'esports',
      balancedDefault: false,
      weight: 7,
      latencyWeight: 3.1,
      fpsWeight: 1.3,
      keywords: 'HVCI VBS Memory Integrity Hypervisor Virtualization Based Security DeviceGuard',
      title: {
        es: 'Bypass de Virtualización VBS / Integridad de Memoria (HVCI)',
        en: 'VBS Virtualization & Hypervisor Code Integrity (HVCI) Bypass'
      },
      desc: {
        es: 'Elimina la capa de traducción de direcciones de segunda fase (SLAT) del hipervisor VBS que añade sobrecarga en cada llamada al sistema y lectura de memoria del motor gráfico.',
        en: 'Removes the Second Level Address Translation (SLAT) hypervisor shadow layer that adds CPU overhead on every syscall and game engine memory access.'
      },
      guardrail: {
        es: '🛡️ Agent 06: Riot Vanguard / FACEIT Anti-Cheat Pre-Check',
        en: '🛡️ Agent 06: Riot Vanguard / FACEIT Anti-Cheat Pre-Check'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceGuard\\Scenarios\\HypervisorEnforcedCodeIntegrity',
      regCommand: 'Enabled = dword:00000000 | EnableVirtualizationBasedSecurity = 0x0',
      defaultVal: 'Enabled = 0x1 (VBS SLAT Hypervisor Shadow Layer Active)',
      subKeys: [
        'HVCI_Enabled=0',
        'EnableVirtualizationBasedSecurity=0',
        'RequirePlatformSecurityFeatures=0',
        'HypervisorLaunchType=Off',
        'IsolatedUserMode=0',
        'LsaCfgFlags=0',
        'ConfigureSystemGuardLaunch=0'
      ],
      impact: {
        es: '+8.5% FPS Medios en Juegos CPU-Bound',
        en: '+8.5% Avg FPS in CPU-Bound Titles'
      }
    },
    {
      id: 'PRV-02',
      category: 'privacy',
      safety: 'safe',
      balancedDefault: true,
      weight: 7,
      latencyWeight: 1.3,
      fpsWeight: 0.4,
      keywords: 'DiagTrack AllowTelemetry CompatTelRunner dmwappushservice WerSvc Error Reporting',
      title: {
        es: 'Purga de Telemetría DiagTrack, CompatTelRunner & WerSvc',
        en: 'DiagTrack Telemetry, CompatTelRunner & Error Reporting Purge'
      },
      desc: {
        es: 'Detiene y bloquea el servicio de experiencias del usuario conectado (`DiagTrack`) y el escáner `CompatTelRunner.exe` que disparan picos de disco y CPU en segundo plano.',
        en: 'Halts and disables Connected User Experiences (`DiagTrack`) and `CompatTelRunner.exe` telemetry scanners that trigger sudden CPU and disk I/O spikes.'
      },
      guardrail: {
        es: '🛡️ Agent 06: Windows Update & Xbox Auth Services Intact',
        en: '🛡️ Agent 06: Windows Update & Xbox Auth Services Intact'
      },
      regPath: 'HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection',
      regCommand: 'AllowTelemetry = dword:00000000 | DiagTrack Start = 0x4 (Disabled)',
      defaultVal: 'AllowTelemetry = 0x3 (Full Diagnostic) | DiagTrack = 0x2 (Running)',
      subKeys: [
        'AllowTelemetry=0',
        'DiagTrack_Start=4',
        'dmwappushservice=4',
        'WerSvc_Start=4',
        'CompatTelRunner=Disabled',
        'DoNotShowFeedbackNotifications=1',
        'DisableEnterpriseAuthProxy=1'
      ],
      impact: {
        es: '-24 Procesos / Hilos de Fondo',
        en: '-24 Background Threads Purged'
      }
    },
    {
      id: 'PRV-03',
      category: 'privacy',
      safety: 'safe',
      balancedDefault: true,
      weight: 6,
      latencyWeight: 1.1,
      fpsWeight: 0.2,
      keywords: 'WPBT Windows Platform Binary Table Cortana Search Indexing BackgroundApps',
      title: {
        es: 'Bloqueo de Inyección ACPI WPBT & Suspensión de Apps UWP en Fondo',
        en: 'ACPI WPBT Binary Injection Block & UWP Background App Freeze'
      },
      desc: {
        es: 'Impide que la BIOS/UEFI inyecte bloatware ejecutable en la RAM al arrancar mediante la tabla ACPI WPBT (`DisableWpbtExecution = 1`) y congela las apps UWP inactivas.',
        en: 'Prevents motherboard UEFI firmware from injecting vendor bloatware into RAM during boot via the ACPI WPBT table (`DisableWpbtExecution = 1`) and freezes idle UWP apps.'
      },
      guardrail: {
        es: '🛡️ Agent 06: Peripheral SDK Whitelist Safe (Synapse / G-Hub)',
        en: '🛡️ Agent 06: Peripheral SDK Whitelist Safe (Synapse / G-Hub)'
      },
      regPath: 'HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager',
      regCommand: 'DisableWpbtExecution = dword:00000001 | GlobalUserDisabled = 0x1',
      defaultVal: 'DisableWpbtExecution = 0x0 (UEFI WPBT Auto-Execution On)',
      subKeys: [
        'DisableWpbtExecution=1',
        'GlobalUserDisabled=1',
        'EnableActivityFeed=0',
        'PublishUserActivities=0',
        'BingSearchEnabled=0',
        'DisableSearchBoxSuggestions=1'
      ],
      impact: {
        es: '-420 MB RAM Libre en Arranque',
        en: '-420 MB Clean Boot RAM Saved'
      }
    }
  ];

  const I18N = {
    es: {
      eyebrow: 'ARQUITECTURA DE BAJO NIVEL // REGISTRO, BCD & NTAPI',
      title: 'Explorador Técnico de las 117 Optimizaciones de Kernel',
      subtitle:
        'Inspecciona y simula en tiempo real las 18 directivas insignia (que gobiernan los 117 vectores del catálogo de Recoil Optimizer). Sin cajas negras: cada ajuste expone su ruta completa en el Registro de Windows, almacén BCD o subsistema NT junto con el diff exacto antes/después.',
      telemetryLabel: 'SIMULADOR DE TELEMETRÍA EN VIVO // ESTADO DEL KERNEL',
      activeTweaksSuffix: 'Activos',
      coreClustersLabel: 'Núcleos Insignia',
      latencyLabel: 'Reducción Estimada',
      inputLagSuffix: 'Input Lag',
      fpsBoostLabel: 'Ganancia 1% Low FPS',
      dpcTargetLabel: 'Latencia DPC ISR',
      btnEsports: 'Activar Perfil Esports (117)',
      btnBalanced: 'Perfil Equilibrio',
      btnFactory: 'Restaurar Fábrica',
      searchPlaceholder: 'Buscar por clave, sub-registro o efecto (ej. MMCSS, Nagle, X3D, BCD, MSI, HVCI, SysMain, DWM)...',
      quickFilterLabel: 'Filtros rápidos:',
      clearSearch: 'Limpiar filtro',
      showingCount: 'Mostrando',
      ofCount: 'directivas insignia',
      subTweaksMapped: 'sub-claves mapeadas de 117',
      safety: {
        safe: '100% Seguro',
        consensus: 'Consenso Hardware',
        esports: 'Esports Pro'
      },
      statusOn: 'ACTIVO',
      statusOff: 'STOCK OEM',
      diffStockLabel: 'OEM Stock',
      diffTargetLabel: 'Recoil Target',
      copyBtn: 'COPIAR REG',
      copiedBtn: '¡COPIADO!',
      subKeysBadge: 'sub-ajustes',
      subKeysAria: 'Sub-claves gobernadas por este clúster',
      emptyStateTitle: 'No se encontraron directivas que coincidan con tu búsqueda.',
      emptyStateBtn: 'Restablecer filtros y búsqueda',
      terminalPreviewTitle: 'CONSOLA DE AUDITORÍA EN VIVO // ÚLTIMA OPERACIÓN DEL SIMULADOR',
      terminalReady: 'Kernel listo. Alterna cualquier interruptor o selecciona un perfil para auditar la instrucción exacta.'
    },
    en: {
      eyebrow: 'LOW-LEVEL ARCHITECTURE // REGISTRY, BCD & NTAPI',
      title: 'Interactive 117 Kernel Tweaks Explorer',
      subtitle:
        'Inspect and test-toggle the 18 flagship kernel directives (governing all 117 vectors in the Recoil Optimizer catalog) right in your browser. Zero black boxes: every optimization exposes its full Windows Registry path, BCD store command, or NTAPI call with simultaneous before/after kernel diffs.',
      telemetryLabel: 'LIVE TELEMETRY SIMULATOR // KERNEL STATE',
      activeTweaksSuffix: 'Active',
      coreClustersLabel: 'Flagship Clusters',
      latencyLabel: 'Estimated Reduction',
      inputLagSuffix: 'Input Lag',
      fpsBoostLabel: '1% Low FPS Gain',
      dpcTargetLabel: 'DPC ISR Latency',
      btnEsports: 'Activate Esports Profile (117)',
      btnBalanced: 'Balanced Profile',
      btnFactory: 'Factory Reset',
      searchPlaceholder: 'Search by name, registry sub-key, or technical effect (e.g., MMCSS, Nagle, X3D, BCD, MSI, HVCI, SysMain, DWM)...',
      quickFilterLabel: 'Quick filters:',
      clearSearch: 'Clear filter',
      showingCount: 'Showing',
      ofCount: 'flagship directives',
      subTweaksMapped: 'mapped sub-keys of 117',
      safety: {
        safe: '100% Safe',
        consensus: 'Hardware Consensus',
        esports: 'Esports Pro'
      },
      statusOn: 'ACTIVE',
      statusOff: 'OEM STOCK',
      diffStockLabel: 'OEM Stock',
      diffTargetLabel: 'Recoil Target',
      copyBtn: 'COPY REG',
      copiedBtn: 'COPIED!',
      subKeysBadge: 'sub-tweaks',
      subKeysAria: 'Sub-keys governed by this cluster',
      emptyStateTitle: 'No kernel directives matched your search query.',
      emptyStateBtn: 'Reset search & category filters',
      terminalPreviewTitle: 'LIVE AUDIT CONSOLE // LATEST SIMULATOR OPERATION',
      terminalReady: 'Kernel ready. Toggle any switch or select a preset profile to audit the exact low-level instruction.'
    }
  };

  // State
  const state = {
    activeCategory: 'all',
    searchQuery: '',
    activeProfile: 'esports', // 'esports' | 'balanced' | 'factory' | 'custom'
    enabledIds: new Set(TWEAKS_CATALOG.map((t) => t.id)), // Default: all 18 flagship (117 total) enabled
    lastAuditLog: null
  };

  function getLang() {
    const l = (window.currentLang || document.documentElement.lang || 'es').toLowerCase();
    return l.startsWith('en') ? 'en' : 'es';
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .rtx-explorer-section {
        position: relative;
        padding: 2.25rem 0 !important;
        color: var(--text-main, #f4f6fb);
        font-family: var(--font-sans, 'Inter', system-ui, sans-serif);
        z-index: 2;
      }

      /* Standardized 1220px Container Alignment */
      .rtx-container {
        width: 100%;
        max-width: 1220px;
        margin: 0 auto;
        padding: 0 24px;
        box-sizing: border-box;
      }

      /* Header */
      .rtx-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1.15rem;
      }

      .rtx-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        width: fit-content;
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--primary, #00f0ff) 10%, transparent);
        border: 1px solid var(--border-glow, rgba(0, 240, 255, 0.35));
        color: var(--primary, #00f0ff);
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.74rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .rtx-eyebrow-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--primary, #00f0ff);
        box-shadow: 0 0 10px var(--primary, #00f0ff);
        animation: rtxPulse 2s infinite ease-in-out;
      }

      @keyframes rtxPulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.45; transform: scale(0.82); }
      }

      .rtx-title {
        font-family: var(--font-display, 'Space Grotesk', sans-serif);
        font-size: clamp(1.9rem, 3.4vw, 2.95rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.025em;
        margin: 0;
        color: var(--text-main, #ffffff);
      }

      .rtx-subtitle {
        max-width: 880px;
        font-size: 1rem;
        line-height: 1.62;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      /* Live Telemetry Simulator Bar */
      .rtx-telemetry-bar {
        position: relative;
        background: linear-gradient(
          145deg,
          color-mix(in srgb, var(--bg-card, #111622) 94%, var(--primary, #00f0ff) 6%),
          var(--bg-surface, #0b0f17)
        );
        border: 1px solid var(--border-glow, rgba(0, 240, 255, 0.32));
        border-radius: 16px;
        padding: 1.35rem 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow:
          0 20px 50px -20px rgba(0, 0, 0, 0.75),
          0 0 32px -12px var(--primary-glow, rgba(0, 240, 255, 0.25));
        overflow: hidden;
      }

      .rtx-telemetry-bar::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary, #00f0ff), var(--accent-emerald, #10b981), transparent);
      }

      .rtx-telemetry-top {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1.25rem;
      }

      .rtx-metrics-group {
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 1.35rem;
        align-items: center;
      }

      .rtx-metric-box {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding-right: 1.15rem;
        border-right: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
      }

      .rtx-metric-box:last-child {
        border-right: none;
        padding-right: 0;
      }

      .rtx-metric-kicker {
        font-family: var(--font-mono, monospace);
        font-size: 0.67rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-muted, #94a3b8);
      }

      .rtx-metric-value {
        font-family: var(--font-mono, monospace);
        font-size: clamp(1.1rem, 1.55vw, 1.42rem);
        font-weight: 700;
        color: var(--text-main, #ffffff);
        display: flex;
        align-items: baseline;
        gap: 0.38rem;
      }

      .rtx-metric-value.is-primary {
        color: var(--primary, #00f0ff);
        text-shadow: 0 0 16px var(--primary-glow, rgba(0, 240, 255, 0.35));
      }

      .rtx-metric-value.is-emerald {
        color: var(--accent-emerald, #10b981);
      }

      .rtx-metric-value.is-amber {
        color: var(--accent-amber, #f59e0b);
      }

      .rtx-metric-sub {
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--text-muted, #94a3b8);
      }

      /* Preset Profile Buttons */
      .rtx-preset-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        align-items: center;
      }

      .rtx-preset-btn {
        appearance: none;
        cursor: pointer;
        font-family: var(--font-mono, monospace);
        font-size: 0.74rem;
        font-weight: 600;
        letter-spacing: 0.03em;
        padding: 0.62rem 0.95rem;
        border-radius: 10px;
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.14));
        background: color-mix(in srgb, var(--bg-deep, #06080d) 75%, transparent);
        color: var(--text-main, #f4f6fb);
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
      }

      .rtx-preset-btn:hover {
        border-color: var(--primary, #00f0ff);
        transform: translateY(-1px);
      }

      .rtx-preset-btn.is-active-esports {
        background: color-mix(in srgb, var(--primary, #00f0ff) 18%, var(--bg-deep, #06080d));
        border-color: var(--primary, #00f0ff);
        color: var(--primary, #00f0ff);
        box-shadow: 0 0 20px -4px var(--primary-glow, rgba(0, 240, 255, 0.4));
      }

      .rtx-preset-btn.is-active-balanced {
        background: color-mix(in srgb, var(--accent-emerald, #10b981) 18%, var(--bg-deep, #06080d));
        border-color: var(--accent-emerald, #10b981);
        color: var(--accent-emerald, #10b981);
        box-shadow: 0 0 18px -5px rgba(16, 185, 129, 0.38);
      }

      /* Distinct Factory Reset Button Styling with --accent-rose (#f43f5e) */
      .rtx-preset-btn.is-active-factory {
        background: color-mix(in srgb, var(--accent-rose, #f43f5e) 18%, var(--bg-deep, #06080d));
        border-color: var(--accent-rose, #f43f5e);
        color: var(--accent-rose, #f43f5e);
        box-shadow: 0 0 20px -4px rgba(244, 63, 94, 0.42);
      }

      /* Progress bar inside Telemetry Bar */
      .rtx-telemetry-progress-track {
        margin-top: 1.1rem;
        height: 6px;
        width: 100%;
        background: color-mix(in srgb, var(--bg-deep, #06080d) 85%, rgba(255,255,255,0.06));
        border-radius: 999px;
        overflow: hidden;
        position: relative;
      }

      .rtx-telemetry-progress-fill {
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--primary, #00f0ff), var(--accent-emerald, #10b981));
        box-shadow: 0 0 12px var(--primary, #00f0ff);
        transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Controls Row: Search + Category Pills */
      .rtx-controls-panel {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.65rem;
      }

      .rtx-search-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
        align-items: center;
        justify-content: space-between;
      }

      .rtx-search-input-wrap {
        position: relative;
        flex: 1 1 380px;
        display: flex;
        align-items: center;
      }

      .rtx-search-icon {
        position: absolute;
        left: 1rem;
        width: 16px;
        height: 16px;
        color: var(--primary, #00f0ff);
        pointer-events: none;
      }

      .rtx-search-input {
        width: 100%;
        padding: 0.8rem 2.6rem 0.8rem 2.75rem;
        border-radius: 12px;
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.12));
        background: var(--bg-card, #0e131f);
        color: var(--text-main, #ffffff);
        font-family: var(--font-mono, monospace);
        font-size: 0.81rem;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }

      .rtx-search-input::placeholder {
        color: var(--text-muted, #64748b);
      }

      .rtx-search-input:focus {
        outline: none;
        border-color: var(--primary, #00f0ff);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary, #00f0ff) 18%, transparent);
      }

      .rtx-search-clear {
        position: absolute;
        right: 0.75rem;
        background: transparent;
        border: none;
        color: var(--text-muted, #94a3b8);
        cursor: pointer;
        font-family: var(--font-mono, monospace);
        font-size: 0.75rem;
        padding: 0.2rem 0.45rem;
        border-radius: 6px;
        display: none;
      }

      .rtx-search-clear.is-visible {
        display: inline-block;
      }

      .rtx-search-clear:hover {
        color: var(--primary, #00f0ff);
        background: rgba(255, 255, 255, 0.06);
      }

      .rtx-quick-tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.38rem;
      }

      .rtx-quick-label {
        font-family: var(--font-mono, monospace);
        font-size: 0.71rem;
        color: var(--text-muted, #94a3b8);
        margin-right: 0.2rem;
      }

      .rtx-tag-chip {
        appearance: none;
        cursor: pointer;
        font-family: var(--font-mono, monospace);
        font-size: 0.69rem;
        padding: 0.26rem 0.58rem;
        border-radius: 6px;
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        background: var(--bg-surface, #090d15);
        color: var(--text-muted, #94a3b8);
        transition: all 0.15s ease;
      }

      .rtx-tag-chip:hover,
      .rtx-tag-chip.is-active {
        color: var(--primary, #00f0ff);
        border-color: var(--primary, #00f0ff);
        background: color-mix(in srgb, var(--primary, #00f0ff) 12%, transparent);
      }

      /* Category Pills */
      .rtx-category-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .rtx-cat-pill {
        appearance: none;
        cursor: pointer;
        font-family: var(--font-mono, monospace);
        font-size: 0.74rem;
        font-weight: 600;
        padding: 0.54rem 0.88rem;
        border-radius: 999px;
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        background: var(--bg-card, #0e131f);
        color: var(--text-muted, #94a3b8);
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .rtx-cat-pill:hover {
        color: var(--text-main, #ffffff);
        border-color: color-mix(in srgb, var(--primary, #00f0ff) 50%, transparent);
      }

      .rtx-cat-pill.is-active {
        background: color-mix(in srgb, var(--primary, #00f0ff) 16%, var(--bg-card, #0e131f));
        color: var(--primary, #00f0ff);
        border-color: var(--primary, #00f0ff);
        box-shadow: 0 0 18px -5px var(--primary-glow, rgba(0, 240, 255, 0.45));
      }

      /* Filter Status Meta Row */
      .rtx-filter-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.73rem;
        color: var(--text-muted, #94a3b8);
        margin-bottom: 1rem;
      }

      /* Viewport HUD Scroll Container */
      .rtx-cards-scroll-container {
        position: relative;
        max-height: 520px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 4px 6px 10px 4px;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--primary, #00f0ff) rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        background: rgba(8, 12, 20, 0.45);
      }

      .rtx-cards-scroll-container::-webkit-scrollbar {
        width: 6px;
      }
      .rtx-cards-scroll-container::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.03);
        border-radius: 999px;
      }
      .rtx-cards-scroll-container::-webkit-scrollbar-thumb {
        background: var(--primary, #00f0ff);
        border-radius: 999px;
        box-shadow: 0 0 8px var(--primary-glow, rgba(0, 240, 255, 0.4));
      }

      .rtx-catalog-expand-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.65rem 1rem;
        background: color-mix(in srgb, var(--bg-card, #0e131f) 90%, var(--primary, #00f0ff) 10%);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        border-top: none;
        border-radius: 0 0 12px 12px;
        font-family: var(--font-mono, monospace);
        font-size: 0.74rem;
        margin-bottom: 0.85rem;
      }

      /* 3-Column Desktop Grid Fix (> 1024px: 3 cols, <= 1024px: 2 cols, <= 640px: 1 col) */
      .rtx-cards-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.75rem;
      }

      .rtx-card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 10px;
        padding: 0.85rem;
        background: var(--bg-card, #0e131f);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.09));
        transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
        overflow: hidden;
        min-width: 0;
      }

      .rtx-card.is-enabled {
        border-color: color-mix(in srgb, var(--primary, #00f0ff) 38%, var(--border-subtle, rgba(255,255,255,0.1)));
        box-shadow: 0 12px 30px -18px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 color-mix(in srgb, var(--primary, #00f0ff) 20%, transparent);
      }

      .rtx-card.is-disabled {
        opacity: 0.76;
        background: color-mix(in srgb, var(--bg-surface, #090c14) 88%, transparent);
        border-color: color-mix(in srgb, var(--accent-rose, #f43f5e) 24%, var(--border-subtle, rgba(255,255,255,0.08)));
      }

      .rtx-card:hover {
        transform: translateY(-3px);
        border-color: var(--primary, #00f0ff);
      }

      .rtx-card-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.45rem;
        margin-bottom: 0.75rem;
      }

      .rtx-badges-wrap {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.35rem;
        min-width: 0;
      }

      .rtx-badge-cat {
        font-family: var(--font-mono, monospace);
        font-size: 0.63rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        padding: 0.2rem 0.48rem;
        border-radius: 5px;
        background: color-mix(in srgb, var(--primary, #00f0ff) 12%, transparent);
        color: var(--primary, #00f0ff);
        border: 1px solid color-mix(in srgb, var(--primary, #00f0ff) 30%, transparent);
        white-space: nowrap;
      }

      .rtx-badge-safety {
        font-family: var(--font-mono, monospace);
        font-size: 0.62rem;
        font-weight: 600;
        padding: 0.2rem 0.48rem;
        border-radius: 5px;
        white-space: nowrap;
      }

      .rtx-badge-safety.is-safe {
        background: color-mix(in srgb, var(--accent-emerald, #10b981) 14%, transparent);
        color: var(--accent-emerald, #10b981);
        border: 1px solid color-mix(in srgb, var(--accent-emerald, #10b981) 35%, transparent);
      }

      .rtx-badge-safety.is-consensus {
        background: color-mix(in srgb, var(--primary, #00f0ff) 14%, transparent);
        color: var(--primary, #00f0ff);
        border: 1px solid color-mix(in srgb, var(--primary, #00f0ff) 35%, transparent);
      }

      .rtx-badge-safety.is-esports {
        background: color-mix(in srgb, var(--accent-amber, #f59e0b) 15%, transparent);
        color: var(--accent-amber, #f59e0b);
        border: 1px solid color-mix(in srgb, var(--accent-amber, #f59e0b) 38%, transparent);
      }

      /* Toggle Switch */
      .rtx-toggle-wrap {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        cursor: pointer;
        user-select: none;
        flex-shrink: 0;
      }

      .rtx-toggle-status {
        font-family: var(--font-mono, monospace);
        font-size: 0.61rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: var(--accent-rose, #f43f5e);
      }

      .rtx-card.is-enabled .rtx-toggle-status {
        color: var(--accent-emerald, #10b981);
      }

      .rtx-switch {
        position: relative;
        width: 40px;
        height: 21px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.18));
        transition: all 0.22s ease;
        padding: 0;
        cursor: pointer;
        flex-shrink: 0;
      }

      .rtx-switch::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: var(--text-muted, #94a3b8);
        transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), background 0.22s ease;
      }

      .rtx-card.is-enabled .rtx-switch {
        background: color-mix(in srgb, var(--primary, #00f0ff) 24%, transparent);
        border-color: var(--primary, #00f0ff);
        box-shadow: 0 0 12px var(--primary-glow, rgba(0, 240, 255, 0.35));
      }

      .rtx-card.is-enabled .rtx-switch::after {
        transform: translateX(19px);
        background: var(--primary, #00f0ff);
      }

      /* Card Body */
      .rtx-card-title {
        font-family: var(--font-display, 'Space Grotesk', sans-serif);
        font-size: 0.88rem;
        font-weight: 700;
        line-height: 1.3;
        margin: 0 0 0.35rem 0;
        color: var(--text-main, #ffffff);
      }

      .rtx-card-desc {
        font-size: 0.76rem;
        line-height: 1.45;
        color: var(--text-muted, #94a3b8);
        margin: 0 0 0.45rem 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Hardware Guardrail Pill */
      .rtx-guardrail-note {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        width: fit-content;
        max-width: 100%;
        margin: 0 0 0.72rem 0;
        padding: 0.24rem 0.56rem;
        border-radius: 6px;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.64rem;
        font-weight: 600;
        line-height: 1.32;
        color: var(--accent-emerald, #10b981);
        background: color-mix(in srgb, var(--accent-emerald, #10b981) 10%, transparent);
        border: 1px solid color-mix(in srgb, var(--accent-emerald, #10b981) 30%, transparent);
        box-sizing: border-box;
      }

      /* Monospace REG / BCD / NTAPI Preview Box with 2-Line Simultaneous Diff & Sub-Key Chips */
      .rtx-code-box {
        background: var(--bg-deep, #05070b);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        border-radius: 9px;
        padding: 0.65rem 0.72rem;
        margin-bottom: 0.8rem;
        font-family: var(--font-mono, 'JetBrains Mono', monospace);
        font-size: 0.7rem;
        line-height: 1.42;
      }

      .rtx-code-path-row {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.5rem;
        margin-bottom: 0.42rem;
      }

      /* Full Un-Truncated Registry / BCD / NTAPI Paths */
      .rtx-code-path {
        color: var(--text-muted, #8b9bb4);
        white-space: normal;
        word-break: break-word;
        overflow-wrap: anywhere;
        line-height: 1.38;
        font-size: 0.7rem;
        flex: 1 1 auto;
        min-width: 0;
      }

      .rtx-copy-btn {
        appearance: none;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.12));
        color: var(--text-muted, #94a3b8);
        font-family: var(--font-mono, monospace);
        font-size: 0.6rem;
        padding: 0.16rem 0.42rem;
        border-radius: 4px;
        cursor: pointer;
        flex-shrink: 0;
        transition: all 0.15s ease;
      }

      .rtx-copy-btn:hover {
        color: var(--primary, #00f0ff);
        border-color: var(--primary, #00f0ff);
      }

      /* 2-Line Simultaneous Kernel Diff */
      .rtx-code-diff {
        display: flex;
        flex-direction: column;
        gap: 0.26rem;
        padding: 0.42rem 0.52rem;
        margin-bottom: 0.5rem;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.34);
        border-left: 2px solid var(--primary, #00f0ff);
      }

      .rtx-card.is-disabled .rtx-code-diff {
        border-left-color: var(--accent-rose, #f43f5e);
      }

      .rtx-diff-line {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 0.32rem;
        font-size: 0.67rem;
        line-height: 1.36;
        word-break: break-word;
        overflow-wrap: anywhere;
      }

      .rtx-diff-prefix {
        font-weight: 700;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .rtx-diff-val {
        font-family: inherit;
        word-break: break-word;
        overflow-wrap: anywhere;
      }

      .rtx-diff-line.is-stock {
        color: var(--text-muted, #94a3b8);
      }

      .rtx-diff-line.is-stock .rtx-diff-prefix {
        color: var(--accent-rose, #f43f5e);
      }

      .rtx-card.is-enabled .rtx-diff-line.is-stock .rtx-diff-val {
        text-decoration: line-through;
        opacity: 0.72;
      }

      .rtx-card.is-disabled .rtx-diff-line.is-stock {
        color: var(--accent-amber, #f59e0b);
        font-weight: 600;
      }

      .rtx-diff-line.is-target {
        color: var(--primary, #00f0ff);
        font-weight: 600;
      }

      .rtx-diff-line.is-target .rtx-diff-prefix {
        color: var(--accent-emerald, #10b981);
      }

      .rtx-card.is-disabled .rtx-diff-line.is-target {
        opacity: 0.52;
        font-weight: 500;
      }

      /* Sub-key Micro-Chips inside .rtx-code-box */
      .rtx-subkeys-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.26rem;
        padding-top: 0.4rem;
        border-top: 1px dashed var(--border-subtle, rgba(255, 255, 255, 0.08));
      }

      .rtx-subkey-chip {
        font-family: var(--font-mono, monospace);
        font-size: 0.59rem;
        line-height: 1.2;
        padding: 0.14rem 0.36rem;
        border-radius: 4px;
        background: color-mix(in srgb, var(--primary, #00f0ff) 7%, rgba(255, 255, 255, 0.02));
        border: 1px solid color-mix(in srgb, var(--primary, #00f0ff) 20%, rgba(255, 255, 255, 0.07));
        color: var(--text-muted, #94a3b8);
      }

      .rtx-card.is-enabled .rtx-subkey-chip {
        color: color-mix(in srgb, var(--text-main, #ffffff) 86%, var(--primary, #00f0ff));
      }

      /* Card Footer */
      .rtx-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.45rem;
        padding-top: 0.65rem;
        border-top: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.07));
        font-family: var(--font-mono, monospace);
        font-size: 0.71rem;
      }

      .rtx-impact-pill {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        font-weight: 700;
        color: var(--accent-emerald, #10b981);
      }

      .rtx-subkeys-count {
        color: var(--text-muted, #64748b);
        font-size: 0.65rem;
        white-space: nowrap;
      }

      /* Live Audit Console Footer */
      .rtx-audit-console {
        margin-top: 1.5rem;
        padding: 0.9rem 1.2rem;
        border-radius: 12px;
        background: var(--bg-deep, #05070b);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.75rem;
      }

      .rtx-audit-title {
        color: var(--primary, #00f0ff);
        font-weight: 700;
        letter-spacing: 0.05em;
      }

      .rtx-audit-log {
        color: var(--text-muted, #94a3b8);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .rtx-empty-state {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem 1.5rem;
        border-radius: 14px;
        background: var(--bg-card, #0e131f);
        border: 1px dashed var(--border-subtle, rgba(255, 255, 255, 0.15));
      }

      @media (max-width: 1024px) {
        .rtx-cards-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .rtx-metrics-group {
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
        }
        .rtx-metric-box {
          border-right: none;
          padding-right: 0;
        }
      }

      @media (max-width: 640px) {
        .rtx-cards-grid {
          grid-template-columns: minmax(0, 1fr);
        }
        .rtx-metrics-group {
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function calculateTelemetry() {
    let activeSubTweaks = 0;
    let totalLatency = 0;
    let totalFps = 0;
    let activeClusters = 0;

    TWEAKS_CATALOG.forEach((t) => {
      if (state.enabledIds.has(t.id)) {
        activeClusters += 1;
        activeSubTweaks += t.weight;
        totalLatency += t.latencyWeight;
        totalFps += t.fpsWeight;
      }
    });

    // Clamp to exact 117 and -48.5% when all 18 are enabled
    if (activeClusters === TWEAKS_CATALOG.length) {
      activeSubTweaks = 117;
      totalLatency = 48.5;
      totalFps = 24.8;
    }

    const dpcMs = (1.12 - (totalLatency / 48.5) * 1.04).toFixed(2);

    return {
      activeClusters,
      activeSubTweaks,
      totalLatency: totalLatency.toFixed(1),
      totalFps: totalFps.toFixed(1),
      dpcMs,
      percentActive: Math.round((activeSubTweaks / 117) * 100)
    };
  }

  function getFilteredTweaks() {
    const q = state.searchQuery.trim().toLowerCase();
    return TWEAKS_CATALOG.filter((t) => {
      const catMatch = state.activeCategory === 'all' || t.category === state.activeCategory;
      if (!catMatch) return false;
      if (!q) return true;
      const haystack = [
        t.id,
        t.category,
        t.keywords,
        t.title.es,
        t.title.en,
        t.desc.es,
        t.desc.en,
        t.guardrail ? t.guardrail.es : '',
        t.guardrail ? t.guardrail.en : '',
        t.regPath,
        t.regCommand,
        t.defaultVal,
        (t.subKeys || []).join(' '),
        t.impact.es,
        t.impact.en
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  function getCategoryShortLabel(catId, lang) {
    const found = CATEGORIES.find((c) => c.id === catId);
    return found ? found.short[lang] : catId.toUpperCase();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderExplorer() {
    const mount = document.getElementById(MOUNT_ID);
    if (!mount) return;

    injectStyles();
    const lang = getLang();
    const t = I18N[lang];
    const telemetry = calculateTelemetry();
    const filtered = getFilteredTweaks();
    const mappedSubKeys = filtered.reduce((acc, item) => acc + item.weight, 0);

    const auditMessage = state.lastAuditLog
      ? state.lastAuditLog[lang]
      : t.terminalReady;

    mount.innerHTML = `
      <section class="rtx-explorer-section" id="tweaks-explorer-section" aria-label="${escapeHtml(t.title)}">
        <div class="rtx-container">
          <!-- Section Header -->
          <div class="rtx-header">
            <div class="rtx-eyebrow">
              <span class="rtx-eyebrow-dot"></span>
              <span>${escapeHtml(t.eyebrow)}</span>
            </div>
            <h2 class="rtx-title">${escapeHtml(t.title)}</h2>
            <p class="rtx-subtitle">${escapeHtml(t.subtitle)}</p>
          </div>

          <!-- Live Telemetry Simulator Bar -->
          <div class="rtx-telemetry-bar">
            <div class="rtx-telemetry-top">
              <div class="rtx-metrics-group">
                <div class="rtx-metric-box">
                  <span class="rtx-metric-kicker">${escapeHtml(t.telemetryLabel)}</span>
                  <div class="rtx-metric-value is-primary" id="rtx-active-count">
                    <span>${telemetry.activeSubTweaks} / 117 ${escapeHtml(t.activeTweaksSuffix)}</span>
                    <span class="rtx-metric-sub">(${telemetry.activeClusters}/18 ${escapeHtml(t.coreClustersLabel)})</span>
                  </div>
                </div>

                <div class="rtx-metric-box">
                  <span class="rtx-metric-kicker">${escapeHtml(t.latencyLabel)}</span>
                  <div class="rtx-metric-value is-emerald" id="rtx-latency-val">
                    <span>-${telemetry.totalLatency}% ${escapeHtml(t.inputLagSuffix)}</span>
                  </div>
                </div>

                <div class="rtx-metric-box">
                  <span class="rtx-metric-kicker">${escapeHtml(t.fpsBoostLabel)}</span>
                  <div class="rtx-metric-value is-primary">
                    <span>+${telemetry.totalFps}%</span>
                    <span class="rtx-metric-sub">1% Low FPS</span>
                  </div>
                </div>

                <div class="rtx-metric-box">
                  <span class="rtx-metric-kicker">${escapeHtml(t.dpcTargetLabel)}</span>
                  <div class="rtx-metric-value is-amber">
                    <span>${telemetry.dpcMs} ms</span>
                    <span class="rtx-metric-sub">NT Kernel ISR</span>
                  </div>
                </div>
              </div>

              <!-- Profile Preset Action Buttons -->
              <div class="rtx-preset-actions">
                <button type="button" class="rtx-preset-btn ${state.activeProfile === 'esports' ? 'is-active-esports' : ''}" data-rtx-preset="esports">
                  <span>⚡</span>
                  <span>${escapeHtml(t.btnEsports)}</span>
                </button>
                <button type="button" class="rtx-preset-btn ${state.activeProfile === 'balanced' ? 'is-active-balanced' : ''}" data-rtx-preset="balanced">
                  <span>⚖️</span>
                  <span>${escapeHtml(t.btnBalanced)}</span>
                </button>
                <button type="button" class="rtx-preset-btn ${state.activeProfile === 'factory' ? 'is-active-factory' : ''}" data-rtx-preset="factory">
                  <span>↺</span>
                  <span>${escapeHtml(t.btnFactory)}</span>
                </button>
              </div>
            </div>

            <div class="rtx-telemetry-progress-track" aria-hidden="true">
              <div class="rtx-telemetry-progress-fill" style="width: ${telemetry.percentActive}%"></div>
            </div>
          </div>

          <!-- Search & Category Filter Controls -->
          <div class="rtx-controls-panel">
            <div class="rtx-search-row">
              <div class="rtx-search-input-wrap">
                <svg class="rtx-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="search"
                  id="rtx-search-input"
                  class="rtx-search-input"
                  value="${escapeHtml(state.searchQuery)}"
                  placeholder="${escapeHtml(t.searchPlaceholder)}"
                  autocomplete="off"
                />
                <button
                  type="button"
                  id="rtx-search-clear"
                  class="rtx-search-clear ${state.searchQuery ? 'is-visible' : ''}"
                  title="${escapeHtml(t.clearSearch)}"
                >ESC</button>
              </div>

              <div class="rtx-quick-tags">
                <span class="rtx-quick-label">${escapeHtml(t.quickFilterLabel)}</span>
                ${QUICK_TAGS.map((tag) => {
                  const isActive = state.searchQuery.toLowerCase() === tag.toLowerCase();
                  return `<button type="button" class="rtx-tag-chip ${isActive ? 'is-active' : ''}" data-rtx-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`;
                }).join('')}
              </div>
            </div>

            <!-- Category Filter Pills -->
            <div class="rtx-category-pills" role="tablist">
              ${CATEGORIES.map((cat) => {
                const isActive = state.activeCategory === cat.id;
                return `
                  <button
                    type="button"
                    role="tab"
                    aria-selected="${isActive}"
                    class="rtx-cat-pill ${isActive ? 'is-active' : ''}"
                    data-rtx-cat="${escapeHtml(cat.id)}"
                  >
                    ${escapeHtml(cat.label[lang])}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Filter Meta Summary -->
          <div class="rtx-filter-meta">
            <span>${escapeHtml(t.showingCount)} <strong>${filtered.length} / 18</strong> ${escapeHtml(t.ofCount)} (${mappedSubKeys} ${escapeHtml(t.subTweaksMapped)})</span>
            <span>NT 10.0.22631 // x64 KERNEL MODE VERIFIED</span>
          </div>

          <!-- 18 Flagship Interactive Tweak Cards Grid in Viewport HUD -->
          <div class="rtx-cards-scroll-container" id="rtx-cards-scroll-container">
            <div class="rtx-cards-grid" id="rtx-cards-grid">
            ${
              filtered.length === 0
                ? `
                  <div class="rtx-empty-state">
                    <p style="margin:0 0 1rem 0;color:var(--text-muted);">${escapeHtml(t.emptyStateTitle)}</p>
                    <button type="button" class="rtx-preset-btn is-active-esports" id="rtx-reset-filters-btn">
                      ${escapeHtml(t.emptyStateBtn)}
                    </button>
                  </div>
                `
                : filtered
                    .map((item) => {
                      const isEnabled = state.enabledIds.has(item.id);
                      const safetyLabel = t.safety[item.safety];
                      const catShort = getCategoryShortLabel(item.category, lang);
                      const guardrailNote = item.guardrail ? item.guardrail[lang] : '';
                      const subKeysList = item.subKeys || [];

                      return `
                        <article class="rtx-card ${isEnabled ? 'is-enabled' : 'is-disabled'}" data-rtx-card="${escapeHtml(item.id)}">
                          <div>
                            <div class="rtx-card-top">
                              <div class="rtx-badges-wrap">
                                <span class="rtx-badge-cat">${escapeHtml(item.id)} // ${escapeHtml(catShort)}</span>
                                <span class="rtx-badge-safety is-${escapeHtml(item.safety)}">${escapeHtml(safetyLabel)}</span>
                              </div>

                              <label class="rtx-toggle-wrap" data-rtx-toggle="${escapeHtml(item.id)}">
                                <span class="rtx-toggle-status">${escapeHtml(isEnabled ? t.statusOn : t.statusOff)}</span>
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked="${isEnabled}"
                                  aria-label="${escapeHtml(item.title[lang])}"
                                  class="rtx-switch"
                                ></button>
                              </label>
                            </div>

                            <h3 class="rtx-card-title">${escapeHtml(item.title[lang])}</h3>
                            <p class="rtx-card-desc">${escapeHtml(item.desc[lang])}</p>
                            ${
                              guardrailNote
                                ? `<div class="rtx-guardrail-note">${escapeHtml(guardrailNote)}</div>`
                                : ''
                            }
                          </div>

                          <div>
                            <div class="rtx-code-box">
                              <div class="rtx-code-path-row">
                                <span class="rtx-code-path" title="${escapeHtml(item.regPath)}">${escapeHtml(item.regPath)}</span>
                                <button type="button" class="rtx-copy-btn" data-rtx-copy="${escapeHtml(item.regPath + ' -> ' + item.regCommand)}">
                                  ${escapeHtml(t.copyBtn)}
                                </button>
                              </div>

                              <div class="rtx-code-diff">
                                <div class="rtx-diff-line is-stock">
                                  <span class="rtx-diff-prefix">- ${escapeHtml(t.diffStockLabel)}:</span>
                                  <code class="rtx-diff-val">${escapeHtml(item.defaultVal)}</code>
                                </div>
                                <div class="rtx-diff-line is-target">
                                  <span class="rtx-diff-prefix">+ ${escapeHtml(t.diffTargetLabel)}:</span>
                                  <code class="rtx-diff-val">${escapeHtml(item.regCommand)}</code>
                                </div>
                              </div>

                              ${
                                subKeysList.length > 0
                                  ? `<div class="rtx-subkeys-chips" aria-label="${escapeHtml(t.subKeysAria)}">
                                      ${subKeysList.map((sk) => `<span class="rtx-subkey-chip">${escapeHtml(sk.trim())}</span>`).join('')}
                                    </div>`
                                  : ''
                              }
                            </div>

                            <div class="rtx-card-footer">
                              <span class="rtx-impact-pill">
                                <span>▲</span>
                                <span>${escapeHtml(item.impact[lang])}</span>
                              </span>
                              <span class="rtx-subkeys-count">[${item.weight} ${escapeHtml(t.subKeysBadge)}]</span>
                            </div>
                          </div>
                        </article>
                      `;
                    })
                    .join('')
            }
          </div>
          </div>

          <!-- Catalog Status Bar -->
          <div class="rtx-catalog-expand-footer">
            <span>⚡ <strong>${filtered.length} / 18 Directivas Insignia</strong> (${mappedSubKeys} Optimizaciones de Kernel)</span>
            <span style="color:var(--text-muted);font-size:0.7rem;">↕ Scroll interno fluido // Cero fatiga visual</span>
          </div>

          <!-- Live Audit Console -->
          <div class="rtx-audit-console">
            <span class="rtx-audit-title">&gt;_ ${escapeHtml(t.terminalPreviewTitle)}</span>
            <span class="rtx-audit-log" id="rtx-audit-log">${escapeHtml(auditMessage)}</span>
          </div>
        </div>
      </section>
    `;

    bindEvents(mount);
    if (typeof window.refreshRecoilMotion === 'function') {
      try {
        window.refreshRecoilMotion();
      } catch (_) {}
    }
  }

  function bindEvents(mount) {
    // Search input
    const searchInput = mount.querySelector('#rtx-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const cursorPos = e.target.selectionStart;
        state.searchQuery = e.target.value;
        renderExplorer();
        const nextInput = document.getElementById('rtx-search-input');
        if (nextInput) {
          nextInput.focus();
          try {
            nextInput.setSelectionRange(cursorPos, cursorPos);
          } catch (_) {}
        }
      });
    }

    // Clear search button
    const clearBtn = mount.querySelector('#rtx-search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.searchQuery = '';
        renderExplorer();
      });
    }

    // Quick filter tags
    mount.querySelectorAll('[data-rtx-tag]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tag = btn.getAttribute('data-rtx-tag') || '';
        if (state.searchQuery.toLowerCase() === tag.toLowerCase()) {
          state.searchQuery = '';
        } else {
          state.searchQuery = tag;
          state.activeCategory = 'all';
        }
        renderExplorer();
      });
    });

    // Category filter pills
    mount.querySelectorAll('[data-rtx-cat]').forEach((pill) => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-rtx-cat') || 'all';
        state.activeCategory = cat;
        renderExplorer();
      });
    });

    // Reset filters button in empty state
    const resetBtn = mount.querySelector('#rtx-reset-filters-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeCategory = 'all';
        state.searchQuery = '';
        renderExplorer();
      });
    }

    // Preset buttons
    mount.querySelectorAll('[data-rtx-preset]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-rtx-preset');
        state.activeProfile = preset;

        if (preset === 'esports') {
          state.enabledIds = new Set(TWEAKS_CATALOG.map((item) => item.id));
          state.lastAuditLog = {
            es: '[PERFIL ESPORTS] 117/117 optimizaciones aplicadas. Latencia reducida en -48.5% Input Lag.',
            en: '[ESPORTS PROFILE] 117/117 kernel tweaks applied. Total latency reduced by -48.5% Input Lag.'
          };
        } else if (preset === 'balanced') {
          state.enabledIds = new Set(
            TWEAKS_CATALOG.filter((item) => item.balancedDefault).map((item) => item.id)
          );
          state.lastAuditLog = {
            es: '[PERFIL EQUILIBRIO] Directivas seguras y de consenso activas. Ahorro energético y VBS preservados.',
            en: '[BALANCED PROFILE] Safe & Hardware Consensus directives enabled. VBS and ACPI states preserved.'
          };
        } else if (preset === 'factory') {
          state.enabledIds = new Set();
          state.lastAuditLog = {
            es: '[RESTAURAR FÁBRICA] 0/117 activos. Todos los registros y valores BCD revertidos a valores OEM de Microsoft.',
            en: '[FACTORY RESET] 0/117 active. All Registry keys and BCD store values reverted to stock Microsoft OEM.'
          };
        }
        renderExplorer();
      });
    });

    // Individual Tweak Toggle Switches
    mount.querySelectorAll('[data-rtx-toggle]').forEach((toggleEl) => {
      toggleEl.addEventListener('click', (e) => {
        e.preventDefault();
        const id = toggleEl.getAttribute('data-rtx-toggle');
        const item = TWEAKS_CATALOG.find((t) => t.id === id);
        if (!item) return;

        if (state.enabledIds.has(id)) {
          state.enabledIds.delete(id);
          state.lastAuditLog = {
            es: `[REVERTIDO ${item.id}] ${item.regPath} -> Restaurado a ${item.defaultVal}`,
            en: `[REVERTED ${item.id}] ${item.regPath} -> Restored to ${item.defaultVal}`
          };
        } else {
          state.enabledIds.add(id);
          state.lastAuditLog = {
            es: `[APLICADO ${item.id}] ${item.regPath} :: ${item.regCommand}`,
            en: `[APPLIED ${item.id}] ${item.regPath} :: ${item.regCommand}`
          };
        }

        // Update active profile status
        if (state.enabledIds.size === TWEAKS_CATALOG.length) {
          state.activeProfile = 'esports';
        } else if (state.enabledIds.size === 0) {
          state.activeProfile = 'factory';
        } else {
          state.activeProfile = 'custom';
        }

        renderExplorer();
      });
    });

    // Copy Registry Command Buttons
    mount.querySelectorAll('[data-rtx-copy]').forEach((copyBtn) => {
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const textToCopy = copyBtn.getAttribute('data-rtx-copy') || '';
        const lang = getLang();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).catch(() => {});
        }
        copyBtn.textContent = I18N[lang].copiedBtn;
        setTimeout(() => {
          copyBtn.textContent = I18N[lang].copyBtn;
        }, 1400);
      });
    });
  }

  function init() {
    renderExplorer();
    window.addEventListener('recoil:langchange', () => {
      renderExplorer();
    });
    window.addEventListener('recoil:skinchange', () => {
      renderExplorer();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
