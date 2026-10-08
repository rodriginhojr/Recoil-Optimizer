/**
 * Recoil Optimizer — Architecture Showcase Module (Subagent #6 / Wave 2 #9)
 * Part 1: 4-Agent Autonomous Hardware Consensus Engine
 * Part 2: AutoDriver // Microsoft Update Catalog + WHQL Pipeline Simulator
 */
(function () {
  'use strict';

  const STYLE_ID = 'recoil-architecture-showcase-styles';
  const MOUNT_ID = 'architecture-showcase-mount';

  const I18N = {
    es: {
      sectionTag: 'ARQUITECTURA DE INGENIERÍA // SUBSISTEMAS CRÍTICOS',
      sectionTitle: 'Motor de Consenso de 4 Agentes & AutoDriver WHQL',
      sectionSubtitle:
        'A diferencia de los scripts genéricos que aplican cambios a ciegas, Recoil Optimizer ejecuta una auditoría determinista mediante 4 agentes autónomos en C# y un pipeline directo hacia Microsoft Update Catalog sin demonios en segundo plano.',

      // Part 1
      part1Badge: 'SUBSISTEMA 01 // QUORUM DE HARDWARE',
      part1Title: 'El Motor de Consenso de 4 Agentes Autónomos',
      part1Desc:
        'Ninguna modificación del registro, BCD o plan de energía se ejecuta sin la aprobación unánime de 4 agentes especializados. Si un agente detecta riesgo de regresión para tu topología exacta, emite un VETO automático.',
      consensusStatusLabel: 'ESTADO DEL QUORUM',
      consensusStatusValue: '4/4 AGENTES SINCRONIZADOS // PROTECCIÓN ACTIVA',
      presetLabel: 'SIMULAR TOPOLOGÍA DE HARDWARE:',
      quorumPlanLabel: 'PLAN DE EJECUCIÓN DEL QUORUM // VEREDICTO EN VIVO',
      presets: [
        {
          id: 'x3d',
          shortTag: 'PERFIL 01 // DESKTOP EXTREMO X3D',
          label: 'AMD Ryzen 9 7950X3D (Dual-CCD) + RTX 4080 + NVMe 32GB',
          verdict: '3D V-Cache Parking Preservado · MSI High · SysMain Off · VSS Activo'
        },
        {
          id: 'intel_hybrid',
          shortTag: 'PERFIL 02 // INTEL HYBRID P+E',
          label: 'Intel Core i7-14700K (P+E Cores) + RX 7900 XTX + NVMe 32GB',
          verdict: 'Thread Director Activo · MSI High · LargeSystemCache · VSS Activo'
        },
        {
          id: 'legacy_laptop',
          shortTag: 'PERFIL 03 // LAPTOP OPTIMUS + HDD',
          label: 'Laptop Optimus i5-8300H (4C/8T) + GTX 1050 Ti + HDD 8GB',
          verdict: 'VETO Core Unpark Batería · VETO Mux Optimus · SysMain Protegido en HDD'
        }
      ],
      pipelineHeader: 'PIPELINE DE INSPECCIÓN C# EN VIVO',
      guardrailsHeader: 'GUARDRAILS DE SEGURIDAD & REGLAS DE VETO',
      telemetryHeader: 'TELEMETRÍA DE DECISIÓN DEL AGENTE',
      copyCode: 'Copiar C#',
      copiedCode: '¡Copiado!',
      copyCmd: '📋 Copy CMD',
      copiedCmd: '✓ ¡CMD Copiado!',

      agents: [
        {
          id: 'agent-01',
          code: 'AGENTE 01',
          shortTitle: 'Topología de CPU & Caché',
          fullTitle: 'Agente 01 // Topología de CPU & Caché',
          badge: 'RING-0 SCHEDULER GUARD',
          summary:
            'Detecta procesadores AMD Ryzen Dual-CCD X3D (preserva el programador de Core Parking para 3D V-Cache) frente a arquitecturas Intel Hybrid P-Core/E-Core (afinidad Thread Director) y CPUs Legacy de 2/4 núcleos.',
          metrics: [
            { k: 'Detección WMI / CPUID', v: 'L3 Cache & Core Layout' },
            { k: 'Protección X3D', v: 'amd3dvcache.sys Intacto' },
            { k: 'Intel Thread Director', v: 'Hetero Policy Preservada' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'AMD RYZEN X3D DUAL-CCD',
              desc: 'Bloquea la desactivación de Core Parking en 7900X3D/7950X3D/9950X3D para evitar que los juegos salten al CCD sin 3D V-Cache.'
            },
            {
              status: 'OPTIMIZE',
              tag: 'INTEL HYBRID P-CORE / E-CORE',
              desc: 'Configura Short/Long Thread Quantum y respeta las directivas de Windows Thread Director sin forzar afinidad estática dañina.'
            },
            {
              status: 'ADAPT',
              tag: 'LEGACY 2/4-CORE CPUS',
              desc: 'Reduce la presión de subprocesos en segundo plano (svchost split threshold) sin saturar las colas DPC en CPUs de 4 hilos.'
            }
          ],
          csharp: `// Agent01_CpuTopologyInspector.cs — Recoil Consensus Engine
public sealed class CpuTopologyAgent : IConsensusAgent
{
    public AgentVerdict InspectTopology(CpuHardwareSnapshot cpu)
    {
        // 1. Guardrail: AMD Dual-CCD 3D V-Cache (7900X3D / 7950X3D / 9950X3D)
        if (cpu.Vendor == CpuVendor.AuthenticAMD && cpu.HasAsymmetric3DVcacheCcd)
        {
            return AgentVerdict.Protect(
                rule: "PRESERVE_X3D_CORE_PARKING",
                reason: "Dual-CCD 3D V-Cache detectado. Se preserva amd3dvcache.sys " +
                        "y CPM (Core Parking MinCores) para aislar el juego en CCD0."
            );
        }

        // 2. Guardrail: Intel Hybrid Architecture (12th-15th Gen P-Core + E-Core)
        if (cpu.Vendor == CpuVendor.GenuineIntel && cpu.IsHybridArchitecture)
        {
            return AgentVerdict.ApproveWithPolicy(
                rule: "INTEL_THREAD_DIRECTOR_AWARE",
                heteroPolicy: HeteroSchedulerPolicy.PreferPerformantCores
            );
        }

        // 3. Legacy 2/4-Core CPU Adaptation
        if (cpu.PhysicalCores <= 4)
        {
            return AgentVerdict.ApproveWithPolicy(
                rule: "LEGACY_LOW_CORE_CONSERVATIVE_DPC",
                disableCoreParking: !cpu.IsBatteryPoweredLaptop
            );
        }

        return AgentVerdict.ApproveStandard("UNIFORM_DESKTOP_TOPOLOGY");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'GUARDRAIL VETO',
              chipTone: 'veto',
              state: 'VETO PARCIAL // PROTECCIÓN X3D',
              detail: 'Detectado Dual-CCD con 96MB L3 3D V-Cache. Core Unparking global bloqueado para mantener todos los hilos del juego en el CCD0 con V-Cache.'
            },
            intel_hybrid: {
              chip: 'P+E OPTIMIZED',
              chipTone: 'approve',
              state: 'APROBADO // THREAD DIRECTOR',
              detail: 'Arquitectura híbrida 8P+12E detectada. Se optimizan prioridades MMCSS asignando cargas de renderizado críticas exclusivamente a P-Cores.'
            },
            legacy_laptop: {
              chip: 'GUARDRAIL VETO',
              chipTone: 'veto',
              state: 'GUARDRAIL // MODO PORTÁTIL 4C',
              detail: 'CPU móvil de 4 núcleos detectada. Se evita el desbloqueo agresivo de núcleos en batería para prevenir estrangulamiento térmico (Thermal Throttling).'
            }
          }
        },
        {
          id: 'agent-02',
          code: 'AGENTE 02',
          shortTitle: 'Bus PCIe, GPU & Modo MSI',
          fullTitle: 'Agente 02 // Bus PCIe, GPU & Modo MSI',
          badge: 'PCIe & INTERRUPT ARBITER',
          summary:
            'Escanea PCI\\VEN_10DE (NVIDIA), VEN_1002 (AMD) y VEN_8086 (Intel) para activar Message Signaled Interrupts (MSI), prioridad de interrupción alta y HAGS sin romper los conmutadores MUX de portátiles Optimus o AMD SmartAccess Graphics.',
          metrics: [
            { k: 'Enumeración PCI', v: 'VEN_10DE / 1002 / 8086' },
            { k: 'Modo Interrupción', v: 'MSI Supported = 1 (High)' },
            { k: 'Seguridad MUX', v: 'Optimus / Advantage Safe' }
          ],
          guardrails: [
            {
              status: 'OPTIMIZE',
              tag: 'MSI MODE & HIGH PRIORITY',
              desc: 'Migra la GPU dedicada de interrupciones basadas en línea (IRQ compartida) a Message Signaled Interrupts con prioridad High (0x03).'
            },
            {
              status: 'PROTECT',
              tag: 'LAPTOP OPTIMUS / MUX SWITCH',
              desc: 'Detecta topologías híbridas iGPU+dGPU y evita deshabilitar estados de energía ACPI PCIe que causarían pantalla negra al cambiar el MUX.'
            },
            {
              status: 'ADAPT',
              tag: 'HAGS (HW GPU SCHEDULING)',
              desc: 'Habilita HwSchMode=2 solo en arquitecturas WDDM 2.7+ validadas (Turing/RDNA2 o superior) con al menos 6 GB de VRAM dedicada.'
            }
          ],
          csharp: `// Agent02_PcieGpuMsiInspector.cs — Recoil Consensus Engine
public sealed class PcieGpuMsiAgent : IConsensusAgent
{
    private static readonly string[] SupportedVendors = 
        { "PCI\\\\VEN_10DE", "PCI\\\\VEN_1002", "PCI\\\\VEN_8086" };

    public AgentVerdict AuditGpuAndPcieBus(PcieDeviceGraph bus)
    {
        foreach (var gpu in bus.DisplayAdapters.Where(d => d.Matches(SupportedVendors)))
        {
            // Evitar romper conmutadores MUX (NVIDIA Optimus / AMD SmartAccess)
            if (bus.IsHybridLaptopMuxTopology && gpu.IsIntegratedDisplayRouter)
            {
                gpu.PreserveAcpiLinkPowerManagement = true;
            }

            // Activar MSI (Message Signaled Interrupts) si el bus soporta MSI-X/MSI
            if (gpu.SupportsMessageSignaledInterrupts)
            {
                RegistryTransaction.StageDword(
                    $@"{gpu.DeviceParametersKey}\\Interrupt Management\\MessageSignaledInterruptProperties",
                    "MSISupported", 1);
                RegistryTransaction.StageDword(
                    $@"{gpu.DeviceParametersKey}\\Interrupt Management\\Affinity Policy",
                    "DevicePriority", 3); // High Priority
            }
        }
        return AgentVerdict.ApproveStandard("PCIE_MSI_AND_MUX_VALIDATED");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'MSI-X HIGH',
              chipTone: 'approve',
              state: 'APROBADO // MSI-X + HAGS ACTIVO',
              detail: 'PCI\\VEN_10DE (RTX 4080) validada en bus PCIe Gen4 x16. MSISupported=1, DevicePriority=3 (High) y HwSchMode=2 activados.'
            },
            intel_hybrid: {
              chip: 'MSI + ReBAR',
              chipTone: 'approve',
              state: 'APROBADO // MSI + BAR VALIDADO',
              detail: 'PCI\\VEN_1002 (RX 7900 XTX) detectada con Resizable BAR activo. Interrupciones MSI configuradas sin colisión de IRQ.'
            },
            legacy_laptop: {
              chip: 'MUX PROTECTED',
              chipTone: 'protect',
              state: 'PROTECCIÓN MUX // OPTIMUS DETECTADO',
              detail: 'Topología híbrida PCI\\VEN_8086 + PCI\\VEN_10DE detectada. Se activa MSI en dGPU pero se preserva el enlace ACPI del MUX Optimus.'
            }
          }
        },
        {
          id: 'agent-03',
          code: 'AGENTE 03',
          shortTitle: 'Almacenamiento & Memoria',
          fullTitle: 'Agente 03 // Almacenamiento & Memoria',
          badge: 'NVMe / RAM TELEMETRY',
          summary:
            'Diferencia unidades NVMe/SSD frente a discos mecánicos HDD (nunca desactiva SysMain/Superfetch en HDD y configura DisablePagingExecutive únicamente cuando la RAM física es >= 8 GB).',
          metrics: [
            { k: 'MediaType Check', v: 'NVMe/SSD vs Spindle HDD' },
            { k: 'Regla SysMain', v: 'Protegido si MediaType=HDD' },
            { k: 'Kernel Paging', v: 'RAM >= 8192 MB Requerido' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'HDD MECÁNICO // SYSMAIN GUARD',
              desc: 'Si el volumen del SO reside en un HDD rotacional, prohíbe desactivar SysMain (Superfetch) para evitar caídas severas en tiempos de carga.'
            },
            {
              status: 'OPTIMIZE',
              tag: 'NVME & SSD // I/O QUEUE TRIM',
              desc: 'En unidades NVMe/SSD desactiva el prefetching redundante para reducir escrituras de fondo e interrupciones de almacenamiento.'
            },
            {
              status: 'ADAPT',
              tag: 'DISABLEPAGINGEXECUTIVE (RAM >= 8GB)',
              desc: 'Mantiene los drivers y el kernel de Windows residentes en RAM física solo si el sistema dispone de >= 8 GB y margen de commit libre.'
            }
          ],
          csharp: `// Agent03_StorageMemoryInspector.cs — Recoil Consensus Engine
public sealed class StorageMemoryAgent : IConsensusAgent
{
    public AgentVerdict EvaluateStorageAndMemory(StorageProfile disk, MemoryProfile ram)
    {
        // 1. Nunca desactivar SysMain (Superfetch) en discos mecánicos HDD
        if (disk.BootVolumeMediaType == DiskMediaType.RotationalHDD)
        {
            ServiceGuard.LockServiceState("SysMain", ServiceStartMode.Automatic);
        }
        else if (disk.BootVolumeMediaType is DiskMediaType.NVMe or DiskMediaType.SSD)
        {
            // En NVMe/SSD ahorra ciclos de I/O y reduce micro-stuttering
            ServiceGuard.StageServiceOptimization("SysMain", ServiceStartMode.Disabled);
        }

        // 2. DisablePagingExecutive únicamente cuando RAM >= 8 GB (8192 MB)
        if (ram.TotalPhysicalMegabytes >= 8192)
        {
            RegistryTransaction.StageDword(
                @"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management",
                "DisablePagingExecutive", 1);
        }

        return AgentVerdict.ApproveStandard("STORAGE_AND_MEMORY_GUARD_OK");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'NVMe + RAM LOCK',
              chipTone: 'approve',
              state: 'APROBADO // NVMe + 32GB LOCK',
              detail: 'Unidad NVMe Gen4 detectada: SysMain desactivado para eliminar lecturas especulativas. 32 GB RAM: DisablePagingExecutive=1 aplicado.'
            },
            intel_hybrid: {
              chip: 'NVMe + RAM LOCK',
              chipTone: 'approve',
              state: 'APROBADO // NVMe + KERNEL EN RAM',
              detail: 'Baja latencia NVMe verificada. Se fijan las páginas ejecutivas del kernel en RAM física con 0 riesgo de agotamiento de memoria.'
            },
            legacy_laptop: {
              chip: 'SYSMAIN VETO (HDD)',
              chipTone: 'veto',
              state: 'VETO SYSMAIN // HDD DETECTADO',
              detail: 'Disco mecánico HDD detectado en volumen de arranque: el Agente 03 bloquea la desactivación de SysMain/Superfetch para proteger el rendimiento.'
            }
          }
        },
        {
          id: 'agent-04',
          code: 'AGENTE 04',
          shortTitle: 'Zero-Risk Sentinel & Rollback',
          fullTitle: 'Agente 04 // Zero-Risk Sentinel & Rollback',
          badge: 'ATOMIC VSS & UTF-16 LE BOM',
          summary:
            'Crea un Punto de Restauración del Sistema mediante VSS antes del vuelo y genera copias de seguridad atómicas del registro en formato UTF-16 LE BOM (C:\\ProgramData\\RecoilOptimizer\\Backups) antes de aplicar cualquier cambio.',
          metrics: [
            { k: 'Snapshot Pre-Flight', v: 'VSS System Restore Point' },
            { k: 'Codificación Reg', v: 'UTF-16 LE BOM Atómico' },
            { k: 'Ruta de Bóveda', v: 'ProgramData\\RecoilOptimizer\\Backups' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'PRE-FLIGHT VSS RESTORE POINT',
              desc: 'Invoca SRSetRestorePointW / WMI SystemRestore antes de abrir la transacción. Si VSS falla y el modo estricto está activo, aborta la ejecución.'
            },
            {
              status: 'PROTECT',
              tag: 'BACKUPS ATÓMICOS UTF-16 LE BOM',
              desc: 'Serializa cada clave afectada con cabecera Windows Registry Editor Version 5.00 en UTF-16 LE BOM para garantizar importación nativa 100% compatible con regedit.exe.'
            },
            {
              status: 'OPTIMIZE',
              tag: 'REVERSIÓN EN 1 CLIC (EMERGENCY ROLLBACK)',
              desc: 'Registra un manifiesto SHA-256 en C:\\ProgramData\\RecoilOptimizer\\Backups que permite restaurar el estado exacto incluso desde Modo Seguro.'
            }
          ],
          csharp: `// Agent04_ZeroRiskSentinel.cs — Recoil Consensus Engine
public sealed class ZeroRiskSentinelAgent : IConsensusAgent
{
    private const string VaultDir = @"C:\\ProgramData\\RecoilOptimizer\\Backups";

    public AgentVerdict CreatePreFlightSafetyCheckpoint(TransactionPlan plan)
    {
        Directory.CreateDirectory(VaultDir);

        // 1. Punto de Restauración VSS antes de modificar cualquier clave
        bool vssCreated = VssRestorePointManager.CreateRestorePoint(
            description: $"RecoilOptimizer_PreFlight_{DateTime.UtcNow:yyyyMMdd_HHmmss}",
            eventType: RestorePointEventType.BeginSystemChange);

        // 2. Respaldo atómico del registro en UTF-16 LE con Byte Order Mark (BOM)
        string backupFile = Path.Combine(VaultDir, $"Snapshot_{plan.Id}.reg");
        using var writer = new StreamWriter(
            backupFile, append: false, new UnicodeEncoding(bigEndian: false, byteOrderMark: true));

        writer.WriteLine("Windows Registry Editor Version 5.00\\r\\n");
        foreach (var keyPath in plan.TargetRegistryKeys)
        {
            writer.WriteLine(RegistryExporter.ExportKeyTree(keyPath));
        }

        return vssCreated 
            ? AgentVerdict.ApproveStandard("VSS_AND_UTF16LE_VAULT_SEALED")
            : AgentVerdict.Veto("CRITICAL_SNAPSHOT_REQUIRED");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SELLADO // VSS + UTF-16 LE BOM',
              detail: 'Punto VSS creado y snapshot atómico guardado en C:\\ProgramData\\RecoilOptimizer\\Backups\\Snapshot_X3D.reg con firma UTF-16 LE BOM.'
            },
            intel_hybrid: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SELLADO // VSS + UTF-16 LE BOM',
              detail: 'Bóveda de recuperación verificada. Todas las claves HKLM\\SYSTEM y HKCU exportadas antes de ejecutar la transacción.'
            },
            legacy_laptop: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SELLADO // VSS + UTF-16 LE BOM',
              detail: 'Instantánea completa asegurada. Reversión en 1 clic disponible desde la interfaz o mediante importación directa en Modo Seguro.'
            }
          }
        }
      ],

      // Part 2
      part2Badge: 'SUBSISTEMA 02 // CERO BLOATWARE · 0 MB EN SEGUNDO PLANO',
      part2Title: 'AutoDriver // Pipeline Oficial Microsoft Update Catalog + WHQL',
      part2Desc:
        'Olvídate de los actualizadores de terceros llenos de adware, telemetría residente o controladores modificados. AutoDriver consulta directamente el catálogo oficial de Microsoft, respalda tus drivers actuales e instala paquetes firmados WHQL usando herramientas nativas del sistema operativo.',
      simBtnIdle: '▶ Simular Auditoría e Instalación WHQL',
      simBtnRunning: '⟳ Ejecutando Pipeline WHQL en Tiempo Real...',
      simBtnReplay: '↻ Volver a Simular Auditoría e Instalación WHQL',
      zeroRamBadge: '0 MB RAM Residente · Sin Demonios · 100% Firmado WHQL',
      stepInspectorTitle: 'INSPECTOR DE ETAPA & COMANDO NATIVO',
      terminalTitle: 'CONSOLA DE AUDITORÍA AUTODRIVER // TELEMETRÍA EN VIVO',
      stepStatusIdle: 'EN ESPERA',
      stepStatusRunning: 'EJECUTANDO',
      stepStatusDone: 'VERIFICADO WHQL',

      steps: [
        {
          num: '01',
          title: 'Enumeración WMI / PnP de Hardware IDs',
          shortTitle: 'Enumeración WMI / PnP',
          subtitle: 'PCI\\VEN_10DE&DEV_2704 · PCI\\VEN_10EC&DEV_8125',
          command: 'Get-CimInstance Win32_PnPSignedDriver | Select DeviceName, HardwareID, DriverVersion, IsSigned',
          detail:
            'Escanea el árbol PnP mediante consultas WMI de bajo nivel para extraer los identificadores exactos de silicio y revisión (Subsys/Rev), ignorando nombres comerciales ambiguos.',
          highlights: [
            'GPU Detectada: PCI\\VEN_10DE&DEV_2704 (NVIDIA GeForce RTX 4080)',
            'NIC Detectada: PCI\\VEN_10EC&DEV_8125 (Realtek Gaming 2.5GbE Family Controller)',
            'Filtro estricto: excluye dispositivos virtuales y túneles de software.'
          ],
          logs: [
            '[WMI-PNP] Iniciando enumeración de dispositivos PCI/ACPI en el bus local...',
            '[HWID-01] Encontrado: PCI\\VEN_10DE&DEV_2704&SUBSYS_408010DE&REV_A1 (v31.0.15.5186)',
            '[HWID-02] Encontrado: PCI\\VEN_10EC&DEV_8125&SUBSYS_812510EC&REV_05 (v10.068.1001.2023)',
            '[OK] 2 dispositivos críticos candidatos para actualización WHQL verificados.'
          ]
        },
        {
          num: '02',
          title: 'Respaldo Previo de Controladores Actuales',
          shortTitle: 'Respaldo pnputil.exe',
          subtitle: 'pnputil.exe /export-driver * C:\\ProgramData\\RecoilOptimizer\\DriversBackup',
          command: 'pnputil.exe /export-driver oem*.inf "C:\\ProgramData\\RecoilOptimizer\\DriversBackup"',
          detail:
            'Antes de descargar o sustituir un solo binario .sys, Recoil Optimizer exporta los paquetes de controladores activos del DriverStore de Windows hacia una carpeta segura de rollback.',
          highlights: [
            'Utiliza el binario nativo de Microsoft pnputil.exe sin librerías externas.',
            'Conserva archivos .inf, .cat, .sys y DLLs asociadas listas para restauración offline.',
            'Garantiza recuperación inmediata si un nuevo controlador presenta regresiones.'
          ],
          logs: [
            '[BACKUP] Creando directorio C:\\ProgramData\\RecoilOptimizer\\DriversBackup...',
            '[PNPUTIL] Ejecutando: pnputil.exe /export-driver * "C:\\ProgramData\\RecoilOptimizer\\DriversBackup"',
            '[EXPORT] oem42.inf (nv_dispi.inf) -> Exportado correctamente (Firmado Microsoft WHQL).',
            '[EXPORT] oem19.inf (rt640x64.inf) -> Exportado correctamente. Punto de retorno asegurado.'
          ]
        },
        {
          num: '03',
          title: 'Consulta Directa a catalog.update.microsoft.com',
          shortTitle: 'Microsoft Update Catalog',
          subtitle: 'Sin demonios residentes ni adware (0 MB RAM en segundo plano)',
          command: 'GET https://www.catalog.update.microsoft.com/Search.aspx?q=PCI%5CVEN_10EC%26DEV_8125',
          detail:
            'Realiza una consulta HTTPS efímera y directa a los servidores oficiales de Microsoft Update Catalog buscando coincidencias exactas de Hardware ID y arquitectura de SO, cerrando el socket al terminar.',
          highlights: [
            '0 MB de consumo de RAM en segundo plano tras cerrar la aplicación.',
            'Cero servicios residentes, cero anuncios y cero instaladores empaquetados de terceros.',
            'Compara fecha de compilación y versión semántica contra el DriverStore local.'
          ],
          logs: [
            '[CATALOG] Conectando vía TLS 1.3 a catalog.update.microsoft.com (0 demonios activos)...',
            '[QUERY] Buscando paquete WHQL más reciente para PCI\\VEN_10EC&DEV_8125 (Windows 11 x64)...',
            '[MATCH] Encontrado UpdateID: 8f94a2c1-7b1e-4d30-9a10 (Realtek Semiconductor Corp. - Net - 1168.19.904.2024)',
            '[VERIFY] Certificado de origen: Microsoft Windows Hardware Compatibility Publisher.'
          ]
        },
        {
          num: '04',
          title: 'Descarga Oficial .cab y Descompresión Nativa',
          shortTitle: 'Descarga .cab + expand.exe',
          subtitle: 'Descompresión nativa vía expand.exe con validación SHA-256',
          command: 'expand.exe -F:* "C:\\Temp\\RecoilWHQL\\driver_update.cab" "C:\\Temp\\RecoilWHQL\\Extracted"',
          detail:
            'Descarga el archivo .cab directamente desde los CDN oficiales de Windows Update (*.download.windowsupdate.com) y lo descomprime en un sandbox temporal usando expand.exe.',
          highlights: [
            'Descarga exclusiva desde dominios oficiales *.windowsupdate.com.',
            'Descompresión ultrarrápida mediante la utilidad nativa expand.exe -F:*.',
            'Verificación de integridad del catálogo criptográfico (.cat) antes de instalar.'
          ],
          logs: [
            '[CDN] Descargando paquete oficial .cab desde dl.delivery.mp.microsoft.com...',
            '[HASH] Integridad SHA-256 verificada. Tamaño del paquete: 4.82 MB.',
            '[EXPAND] Ejecutando: expand.exe -F:* "update_8125.cab" "C:\\Temp\\RecoilWHQL\\Extracted"',
            '[OK] Extraídos 6 archivos (.inf, .cat, .sys) con firma digital intacta.'
          ]
        },
        {
          num: '05',
          title: 'Inyección Limpia .inf WHQL + Limpieza de Shaders',
          shortTitle: 'Inyección WHQL + Shaders',
          subtitle: 'pnputil /add-driver /install (Win10/11) o pnputil -i -a (Win7) + DirectX/Vulkan Cache',
          command: 'pnputil.exe /add-driver "C:\\Temp\\RecoilWHQL\\Extracted\\*.inf" /install /subdirs',
          detail:
            'Inyecta únicamente el archivo .inf y los binarios del controlador sin instalar paneles pesados ni telemetría. Adapta automáticamente la sintaxis de pnputil según la versión de Windows y purga las cachés de shaders.',
          highlights: [
            'Win10/11: pnputil /add-driver "*.inf" /install · Win7 Legacy: pnputil -i -a "*.inf".',
            'Limpia cachés corruptas de DirectX (D3DSCache) y pipelines Vulkan/NVIDIA/AMD.',
            'Elimina el directorio temporal dejando el sistema 100% limpio y auditado.'
          ],
          logs: [
            '[INSTALL] OS detectado: Windows NT 10.0 -> Usando sintaxis: pnputil /add-driver /install',
            '[WHQL] Publicado e instalado en el dispositivo: PCI\\VEN_10EC&DEV_8125 (0 errores).',
            '[SHADER] Purgando cachés obsoletas DirectX (D3DSCache) y Vulkan Pipeline Cache...',
            '[COMPLETE] Pipeline AutoDriver finalizado con éxito. 0 procesos residentes en memoria.'
          ]
        }
      ]
    },

    en: {
      sectionTag: 'ENGINEERING ARCHITECTURE // CRITICAL SUBSYSTEMS',
      sectionTitle: '4-Agent Hardware Consensus Engine & WHQL AutoDriver',
      sectionSubtitle:
        'Unlike generic tweak scripts that blindly overwrite registry keys, Recoil Optimizer runs a deterministic audit across 4 autonomous C# agents and a direct Microsoft Update Catalog pipeline with zero background daemons.',

      // Part 1
      part1Badge: 'SUBSYSTEM 01 // HARDWARE QUORUM',
      part1Title: 'The 4-Agent Autonomous Hardware Consensus Engine',
      part1Desc:
        'No registry, BCD, or power-plan mutation executes without unanimous clearance from 4 specialized agents. If any agent detects a regression risk for your exact silicon topology, it issues an automatic VETO.',
      consensusStatusLabel: 'QUORUM STATUS',
      consensusStatusValue: '4/4 AGENTS SYNCHRONIZED // GUARDRAILS ACTIVE',
      presetLabel: 'SIMULATE HARDWARE TOPOLOGY:',
      quorumPlanLabel: 'QUORUM EXECUTION PLAN // LIVE VERDICT',
      presets: [
        {
          id: 'x3d',
          shortTag: 'PROFILE 01 // EXTREME X3D DESKTOP',
          label: 'AMD Ryzen 9 7950X3D (Dual-CCD) + RTX 4080 + NVMe 32GB',
          verdict: '3D V-Cache Parking Preserved · MSI High · SysMain Off · VSS Active'
        },
        {
          id: 'intel_hybrid',
          shortTag: 'PROFILE 02 // INTEL HYBRID P+E',
          label: 'Intel Core i7-14700K (P+E Cores) + RX 7900 XTX + NVMe 32GB',
          verdict: 'Thread Director Active · MSI High · LargeSystemCache · VSS Active'
        },
        {
          id: 'legacy_laptop',
          shortTag: 'PROFILE 03 // OPTIMUS LAPTOP + HDD',
          label: 'Optimus Laptop i5-8300H (4C/8T) + GTX 1050 Ti + HDD 8GB',
          verdict: 'VETO Battery Core Unpark · VETO Optimus Mux · SysMain Protected on HDD'
        }
      ],
      pipelineHeader: 'LIVE C# INSPECTION PIPELINE',
      guardrailsHeader: 'SAFETY GUARDRAILS & VETO RULES',
      telemetryHeader: 'AGENT DECISION TELEMETRY',
      copyCode: 'Copy C#',
      copiedCode: 'Copied!',
      copyCmd: '📋 Copy CMD',
      copiedCmd: '✓ CMD Copied!',

      agents: [
        {
          id: 'agent-01',
          code: 'AGENT 01',
          shortTitle: 'CPU & Cache Topology',
          fullTitle: 'Agent 01 // CPU & Cache Topology',
          badge: 'RING-0 SCHEDULER GUARD',
          summary:
            'Detects AMD Ryzen Dual-CCD X3D processors (preserving the 3D V-Cache core parking scheduler) vs Intel Hybrid P-Core/E-Core architectures (Thread Director affinity) vs Legacy 2/4-core CPUs.',
          metrics: [
            { k: 'WMI / CPUID Probe', v: 'L3 Cache & Core Layout' },
            { k: 'X3D Protection', v: 'amd3dvcache.sys Intact' },
            { k: 'Intel Thread Director', v: 'Hetero Policy Preserved' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'AMD RYZEN X3D DUAL-CCD',
              desc: 'Blocks Core Parking removal on 7900X3D/7950X3D/9950X3D so game threads never spill over onto the non-3D V-Cache CCD.'
            },
            {
              status: 'OPTIMIZE',
              tag: 'INTEL HYBRID P-CORE / E-CORE',
              desc: 'Tunes Short/Long Thread Quantum while respecting Windows Thread Director hints without forcing harmful static affinity masks.'
            },
            {
              status: 'ADAPT',
              tag: 'LEGACY 2/4-CORE CPUS',
              desc: 'Reduces background service thread contention (svchost split threshold) without saturating DPC queues on 4-thread processors.'
            }
          ],
          csharp: `// Agent01_CpuTopologyInspector.cs — Recoil Consensus Engine
public sealed class CpuTopologyAgent : IConsensusAgent
{
    public AgentVerdict InspectTopology(CpuHardwareSnapshot cpu)
    {
        // 1. Guardrail: AMD Dual-CCD 3D V-Cache (7900X3D / 7950X3D / 9950X3D)
        if (cpu.Vendor == CpuVendor.AuthenticAMD && cpu.HasAsymmetric3DVcacheCcd)
        {
            return AgentVerdict.Protect(
                rule: "PRESERVE_X3D_CORE_PARKING",
                reason: "Dual-CCD 3D V-Cache detected. Preserving amd3dvcache.sys " +
                        "and CPM (Core Parking MinCores) to isolate game threads on CCD0."
            );
        }

        // 2. Guardrail: Intel Hybrid Architecture (12th-15th Gen P-Core + E-Core)
        if (cpu.Vendor == CpuVendor.GenuineIntel && cpu.IsHybridArchitecture)
        {
            return AgentVerdict.ApproveWithPolicy(
                rule: "INTEL_THREAD_DIRECTOR_AWARE",
                heteroPolicy: HeteroSchedulerPolicy.PreferPerformantCores
            );
        }

        // 3. Legacy 2/4-Core CPU Adaptation
        if (cpu.PhysicalCores <= 4)
        {
            return AgentVerdict.ApproveWithPolicy(
                rule: "LEGACY_LOW_CORE_CONSERVATIVE_DPC",
                disableCoreParking: !cpu.IsBatteryPoweredLaptop
            );
        }

        return AgentVerdict.ApproveStandard("UNIFORM_DESKTOP_TOPOLOGY");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'GUARDRAIL VETO',
              chipTone: 'veto',
              state: 'PARTIAL VETO // X3D PROTECTED',
              detail: 'Dual-CCD with 96MB L3 3D V-Cache detected. Global Core Unparking vetoed to keep game threads pinned to the V-Cache CCD0.'
            },
            intel_hybrid: {
              chip: 'P+E OPTIMIZED',
              chipTone: 'approve',
              state: 'APPROVED // THREAD DIRECTOR',
              detail: 'Hybrid 8P+12E topology detected. MMCSS priorities tuned to route critical rendering threads strictly to P-Cores.'
            },
            legacy_laptop: {
              chip: 'GUARDRAIL VETO',
              chipTone: 'veto',
              state: 'GUARDRAIL // 4C LAPTOP MODE',
              detail: '4-core mobile CPU detected. Aggressive core unparking on battery vetoed to prevent thermal throttling.'
            }
          }
        },
        {
          id: 'agent-02',
          code: 'AGENT 02',
          shortTitle: 'PCIe Bus, GPU & MSI Mode',
          fullTitle: 'Agent 02 // PCIe Bus, GPU & MSI Mode',
          badge: 'PCIe & INTERRUPT ARBITER',
          summary:
            'Scans PCI\\VEN_10DE (NVIDIA), VEN_1002 (AMD), and VEN_8086 (Intel) to enable Message Signaled Interrupts (MSI), high interrupt priority, and HAGS without breaking laptop Optimus or Advantage mux switches.',
          metrics: [
            { k: 'PCI Enumeration', v: 'VEN_10DE / 1002 / 8086' },
            { k: 'Interrupt Mode', v: 'MSI Supported = 1 (High)' },
            { k: 'MUX Safety', v: 'Optimus / Advantage Safe' }
          ],
          guardrails: [
            {
              status: 'OPTIMIZE',
              tag: 'MSI MODE & HIGH PRIORITY',
              desc: 'Migrates the discrete GPU from legacy line-based interrupts (shared IRQ) to Message Signaled Interrupts with High Priority (0x03).'
            },
            {
              status: 'PROTECT',
              tag: 'LAPTOP OPTIMUS / MUX SWITCH',
              desc: 'Detects hybrid iGPU+dGPU laptop topologies and never disables ACPI PCIe link power states that would black-screen MUX handoffs.'
            },
            {
              status: 'ADAPT',
              tag: 'HAGS (HW GPU SCHEDULING)',
              desc: 'Enables HwSchMode=2 only on validated WDDM 2.7+ architectures (Turing/RDNA2 or newer) with at least 6 GB of dedicated VRAM.'
            }
          ],
          csharp: `// Agent02_PcieGpuMsiInspector.cs — Recoil Consensus Engine
public sealed class PcieGpuMsiAgent : IConsensusAgent
{
    private static readonly string[] SupportedVendors = 
        { "PCI\\\\VEN_10DE", "PCI\\\\VEN_1002", "PCI\\\\VEN_8086" };

    public AgentVerdict AuditGpuAndPcieBus(PcieDeviceGraph bus)
    {
        foreach (var gpu in bus.DisplayAdapters.Where(d => d.Matches(SupportedVendors)))
        {
            // Never break laptop MUX switches (NVIDIA Optimus / AMD SmartAccess)
            if (bus.IsHybridLaptopMuxTopology && gpu.IsIntegratedDisplayRouter)
            {
                gpu.PreserveAcpiLinkPowerManagement = true;
            }

            // Enable MSI (Message Signaled Interrupts) when bus supports MSI-X/MSI
            if (gpu.SupportsMessageSignaledInterrupts)
            {
                RegistryTransaction.StageDword(
                    $@"{gpu.DeviceParametersKey}\\Interrupt Management\\MessageSignaledInterruptProperties",
                    "MSISupported", 1);
                RegistryTransaction.StageDword(
                    $@"{gpu.DeviceParametersKey}\\Interrupt Management\\Affinity Policy",
                    "DevicePriority", 3); // High Priority
            }
        }
        return AgentVerdict.ApproveStandard("PCIE_MSI_AND_MUX_VALIDATED");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'MSI-X HIGH',
              chipTone: 'approve',
              state: 'APPROVED // MSI-X + HAGS ACTIVE',
              detail: 'PCI\\VEN_10DE (RTX 4080) verified on PCIe Gen4 x16 bus. MSISupported=1, DevicePriority=3 (High), and HwSchMode=2 enabled.'
            },
            intel_hybrid: {
              chip: 'MSI + ReBAR',
              chipTone: 'approve',
              state: 'APPROVED // MSI + BAR VERIFIED',
              detail: 'PCI\\VEN_1002 (RX 7900 XTX) detected with Resizable BAR active. MSI interrupts configured with zero IRQ sharing.'
            },
            legacy_laptop: {
              chip: 'MUX PROTECTED',
              chipTone: 'protect',
              state: 'MUX PROTECTED // OPTIMUS DETECTED',
              detail: 'Hybrid PCI\\VEN_8086 + PCI\\VEN_10DE topology detected. MSI enabled on dGPU while preserving ACPI link states for Optimus MUX.'
            }
          }
        },
        {
          id: 'agent-03',
          code: 'AGENT 03',
          shortTitle: 'Storage & Memory',
          fullTitle: 'Agent 03 // Storage & Memory',
          badge: 'NVMe / RAM TELEMETRY',
          summary:
            'Differentiates NVMe/SSD drives vs mechanical HDDs (never disables SysMain/Superfetch on HDD, and configures DisablePagingExecutive strictly when physical RAM >= 8 GB).',
          metrics: [
            { k: 'MediaType Check', v: 'NVMe/SSD vs Spindle HDD' },
            { k: 'SysMain Policy', v: 'Protected if MediaType=HDD' },
            { k: 'Kernel Paging', v: 'RAM >= 8192 MB Required' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'MECHANICAL HDD // SYSMAIN GUARD',
              desc: 'If the OS boot volume resides on a rotational HDD, strictly forbids disabling SysMain (Superfetch) to prevent severe loading regressions.'
            },
            {
              status: 'OPTIMIZE',
              tag: 'NVME & SSD // I/O QUEUE TRIM',
              desc: 'On NVMe/SSD drives, disables redundant background prefetching to cut unnecessary write amplification and storage interrupts.'
            },
            {
              status: 'ADAPT',
              tag: 'DISABLEPAGINGEXECUTIVE (RAM >= 8GB)',
              desc: 'Keeps Windows kernel and drivers locked in physical RAM only when the machine has >= 8 GB RAM and sufficient commit headroom.'
            }
          ],
          csharp: `// Agent03_StorageMemoryInspector.cs — Recoil Consensus Engine
public sealed class StorageMemoryAgent : IConsensusAgent
{
    public AgentVerdict EvaluateStorageAndMemory(StorageProfile disk, MemoryProfile ram)
    {
        // 1. Never disable SysMain (Superfetch) on mechanical HDDs
        if (disk.BootVolumeMediaType == DiskMediaType.RotationalHDD)
        {
            ServiceGuard.LockServiceState("SysMain", ServiceStartMode.Automatic);
        }
        else if (disk.BootVolumeMediaType is DiskMediaType.NVMe or DiskMediaType.SSD)
        {
            // On NVMe/SSD saves background I/O cycles and reduces micro-stutter
            ServiceGuard.StageServiceOptimization("SysMain", ServiceStartMode.Disabled);
        }

        // 2. Configure DisablePagingExecutive strictly when RAM >= 8 GB (8192 MB)
        if (ram.TotalPhysicalMegabytes >= 8192)
        {
            RegistryTransaction.StageDword(
                @"HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Memory Management",
                "DisablePagingExecutive", 1);
        }

        return AgentVerdict.ApproveStandard("STORAGE_AND_MEMORY_GUARD_OK");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'NVMe + RAM LOCK',
              chipTone: 'approve',
              state: 'APPROVED // NVMe + 32GB LOCK',
              detail: 'Gen4 NVMe drive detected: SysMain disabled to eliminate background speculative reads. 32 GB RAM: DisablePagingExecutive=1 applied.'
            },
            intel_hybrid: {
              chip: 'NVMe + RAM LOCK',
              chipTone: 'approve',
              state: 'APPROVED // NVMe + KERNEL IN RAM',
              detail: 'Low-latency NVMe verified. Executive kernel pages locked in physical RAM with zero memory exhaustion risk.'
            },
            legacy_laptop: {
              chip: 'SYSMAIN VETO (HDD)',
              chipTone: 'veto',
              state: 'SYSMAIN VETO // HDD DETECTED',
              detail: 'Mechanical HDD detected on boot volume: Agent 03 blocks disabling SysMain/Superfetch to protect application load times.'
            }
          }
        },
        {
          id: 'agent-04',
          code: 'AGENT 04',
          shortTitle: 'Zero-Risk Sentinel & Rollback',
          fullTitle: 'Agent 04 // Zero-Risk Sentinel & Rollback',
          badge: 'ATOMIC VSS & UTF-16 LE BOM',
          summary:
            'Creates a pre-flight VSS System Restore Point and atomic UTF-16 LE BOM registry backups (C:\\ProgramData\\RecoilOptimizer\\Backups) before any system modification takes place.',
          metrics: [
            { k: 'Pre-Flight Snapshot', v: 'VSS System Restore Point' },
            { k: 'Reg Encoding', v: 'Atomic UTF-16 LE BOM' },
            { k: 'Vault Path', v: 'ProgramData\\RecoilOptimizer\\Backups' }
          ],
          guardrails: [
            {
              status: 'PROTECT',
              tag: 'PRE-FLIGHT VSS RESTORE POINT',
              desc: 'Invokes SRSetRestorePointW / WMI SystemRestore prior to opening any transaction. If VSS fails under strict mode, execution aborts safely.'
            },
            {
              status: 'PROTECT',
              tag: 'ATOMIC UTF-16 LE BOM BACKUPS',
              desc: 'Serializes every touched key with a Windows Registry Editor Version 5.00 header in UTF-16 LE BOM for 100% native regedit.exe compatibility.'
            },
            {
              status: 'OPTIMIZE',
              tag: '1-CLICK EMERGENCY ROLLBACK',
              desc: 'Writes a SHA-256 manifest in C:\\ProgramData\\RecoilOptimizer\\Backups enabling instant restoration even from Windows Safe Mode.'
            }
          ],
          csharp: `// Agent04_ZeroRiskSentinel.cs — Recoil Consensus Engine
public sealed class ZeroRiskSentinelAgent : IConsensusAgent
{
    private const string VaultDir = @"C:\\ProgramData\\RecoilOptimizer\\Backups";

    public AgentVerdict CreatePreFlightSafetyCheckpoint(TransactionPlan plan)
    {
        Directory.CreateDirectory(VaultDir);

        // 1. Pre-flight VSS System Restore Point before touching any key
        bool vssCreated = VssRestorePointManager.CreateRestorePoint(
            description: $"RecoilOptimizer_PreFlight_{DateTime.UtcNow:yyyyMMdd_HHmmss}",
            eventType: RestorePointEventType.BeginSystemChange);

        // 2. Atomic UTF-16 LE with Byte Order Mark (BOM) registry backup
        string backupFile = Path.Combine(VaultDir, $"Snapshot_{plan.Id}.reg");
        using var writer = new StreamWriter(
            backupFile, append: false, new UnicodeEncoding(bigEndian: false, byteOrderMark: true));

        writer.WriteLine("Windows Registry Editor Version 5.00\\r\\n");
        foreach (var keyPath in plan.TargetRegistryKeys)
        {
            writer.WriteLine(RegistryExporter.ExportKeyTree(keyPath));
        }

        return vssCreated 
            ? AgentVerdict.ApproveStandard("VSS_AND_UTF16LE_VAULT_SEALED")
            : AgentVerdict.Veto("CRITICAL_SNAPSHOT_REQUIRED");
    }
}`,
          presetVotes: {
            x3d: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SEALED // VSS + UTF-16 LE BOM',
              detail: 'VSS Restore Point created and atomic snapshot written to C:\\ProgramData\\RecoilOptimizer\\Backups\\Snapshot_X3D.reg with UTF-16 LE BOM.'
            },
            intel_hybrid: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SEALED // VSS + UTF-16 LE BOM',
              detail: 'Recovery vault verified. All target HKLM\\SYSTEM and HKCU keys exported prior to committing the transaction.'
            },
            legacy_laptop: {
              chip: 'VAULT SEALED',
              chipTone: 'sealed',
              state: 'SEALED // VSS + UTF-16 LE BOM',
              detail: 'Full pre-flight checkpoint secured. 1-click rollback available from the UI or via direct Safe Mode .reg import.'
            }
          }
        }
      ],

      // Part 2
      part2Badge: 'SUBSYSTEM 02 // ZERO BLOATWARE · 0 MB BACKGROUND RAM',
      part2Title: 'AutoDriver // Official Microsoft Update Catalog + WHQL Pipeline',
      part2Desc:
        'Forget third-party driver updaters bundled with adware, resident telemetry daemons, or repacked installers. AutoDriver queries the official Microsoft Update Catalog directly, backs up your existing drivers, and injects WHQL-signed packages using native OS utilities.',
      simBtnIdle: '▶ Simulate WHQL Audit & Installation',
      simBtnRunning: '⟳ Running Live WHQL Pipeline...',
      simBtnReplay: '↻ Re-run WHQL Audit & Installation',
      zeroRamBadge: '0 MB Resident RAM · Zero Daemons · 100% WHQL Signed',
      stepInspectorTitle: 'STAGE INSPECTOR & NATIVE COMMAND',
      terminalTitle: 'AUTODRIVER AUDIT CONSOLE // LIVE TELEMETRY',
      stepStatusIdle: 'STANDBY',
      stepStatusRunning: 'EXECUTING',
      stepStatusDone: 'WHQL VERIFIED',

      steps: [
        {
          num: '01',
          title: 'WMI / PnP Hardware ID Enumeration',
          shortTitle: 'WMI / PnP Enumeration',
          subtitle: 'PCI\\VEN_10DE&DEV_2704 · PCI\\VEN_10EC&DEV_8125',
          command: 'Get-CimInstance Win32_PnPSignedDriver | Select DeviceName, HardwareID, DriverVersion, IsSigned',
          detail:
            'Scans the PnP device tree via low-level WMI queries to extract exact silicon and revision identifiers (Subsys/Rev), bypassing ambiguous marketing names.',
          highlights: [
            'Detected GPU: PCI\\VEN_10DE&DEV_2704 (NVIDIA GeForce RTX 4080)',
            'Detected NIC: PCI\\VEN_10EC&DEV_8125 (Realtek Gaming 2.5GbE Family Controller)',
            'Strict filter: excludes virtual adapters and software loopback tunnels.'
          ],
          logs: [
            '[WMI-PNP] Starting PCI/ACPI device enumeration on local hardware bus...',
            '[HWID-01] Found: PCI\\VEN_10DE&DEV_2704&SUBSYS_408010DE&REV_A1 (v31.0.15.5186)',
            '[HWID-02] Found: PCI\\VEN_10EC&DEV_8125&SUBSYS_812510EC&REV_05 (v10.068.1001.2023)',
            '[OK] 2 critical hardware devices verified as WHQL update candidates.'
          ]
        },
        {
          num: '02',
          title: 'Pre-Flight Backup of Active Drivers',
          shortTitle: 'pnputil.exe Backup',
          subtitle: 'pnputil.exe /export-driver * C:\\ProgramData\\RecoilOptimizer\\DriversBackup',
          command: 'pnputil.exe /export-driver oem*.inf "C:\\ProgramData\\RecoilOptimizer\\DriversBackup"',
          detail:
            'Before downloading or replacing a single .sys binary, Recoil Optimizer exports your currently active driver packages from the Windows DriverStore into a safe rollback vault.',
          highlights: [
            'Uses the native Microsoft pnputil.exe binary with zero external dependencies.',
            'Preserves .inf, .cat, .sys, and companion DLLs ready for offline restoration.',
            'Guarantees instant recovery if a newer driver introduces frame-pacing regressions.'
          ],
          logs: [
            '[BACKUP] Ensuring vault directory C:\\ProgramData\\RecoilOptimizer\\DriversBackup...',
            '[PNPUTIL] Executing: pnputil.exe /export-driver * "C:\\ProgramData\\RecoilOptimizer\\DriversBackup"',
            '[EXPORT] oem42.inf (nv_dispi.inf) -> Exported successfully (Microsoft WHQL Signed).',
            '[EXPORT] oem19.inf (rt640x64.inf) -> Exported successfully. Rollback checkpoint locked.'
          ]
        },
        {
          num: '03',
          title: 'Direct Query to catalog.update.microsoft.com',
          shortTitle: 'Microsoft Update Catalog',
          subtitle: 'No resident daemons or adware (0 MB background RAM)',
          command: 'GET https://www.catalog.update.microsoft.com/Search.aspx?q=PCI%5CVEN_10EC%26DEV_8125',
          detail:
            'Performs an ephemeral HTTPS query directly against Microsoft Update Catalog servers matching exact Hardware IDs and OS build architecture, closing the socket immediately after.',
          highlights: [
            '0 MB background RAM footprint once the audit completes.',
            'Zero resident services, zero ads, and zero third-party bundled installers.',
            'Compares driver compile date and semantic version against the local DriverStore.'
          ],
          logs: [
            '[CATALOG] Connecting via TLS 1.3 to catalog.update.microsoft.com (0 active daemons)...',
            '[QUERY] Searching latest WHQL package for PCI\\VEN_10EC&DEV_8125 (Windows 11 x64)...',
            '[MATCH] Found UpdateID: 8f94a2c1-7b1e-4d30-9a10 (Realtek Semiconductor Corp. - Net - 1168.19.904.2024)',
            '[VERIFY] Publisher certificate: Microsoft Windows Hardware Compatibility Publisher.'
          ]
        },
        {
          num: '04',
          title: 'Official .cab Download & Native Extraction',
          shortTitle: '.cab Download + expand.exe',
          subtitle: 'Native decompression via expand.exe with SHA-256 verification',
          command: 'expand.exe -F:* "C:\\Temp\\RecoilWHQL\\driver_update.cab" "C:\\Temp\\RecoilWHQL\\Extracted"',
          detail:
            'Downloads the official .cab archive directly from Windows Update CDNs (*.download.windowsupdate.com) and extracts it in a temporary sandbox using native expand.exe.',
          highlights: [
            'Downloads exclusively from official *.windowsupdate.com endpoints.',
            'Ultra-fast decompression via native Windows utility expand.exe -F:*.',
            'Cryptographic security catalog (.cat) verification prior to driver staging.'
          ],
          logs: [
            '[CDN] Downloading official .cab package from dl.delivery.mp.microsoft.com...',
            '[HASH] SHA-256 integrity verified. Package size: 4.82 MB.',
            '[EXPAND] Executing: expand.exe -F:* "update_8125.cab" "C:\\Temp\\RecoilWHQL\\Extracted"',
            '[OK] Extracted 6 driver files (.inf, .cat, .sys) with intact digital signatures.'
          ]
        },
        {
          num: '05',
          title: 'Clean WHQL .inf Injection + Shader Cache Purge',
          shortTitle: 'WHQL Injection + Shaders',
          subtitle: 'pnputil /add-driver /install (Win10/11) or pnputil -i -a (Win7) + DirectX/Vulkan Cache',
          command: 'pnputil.exe /add-driver "C:\\Temp\\RecoilWHQL\\Extracted\\*.inf" /install /subdirs',
          detail:
            'Injects strictly the .inf manifest and core driver binaries without bloated control panels or telemetry. Automatically adapts pnputil flags for Win10/11 vs Win7 and purges stale shader caches.',
          highlights: [
            'Win10/11: pnputil /add-driver "*.inf" /install · Win7 Legacy: pnputil -i -a "*.inf".',
            'Purges stale DirectX (D3DSCache) and Vulkan/NVIDIA/AMD pipeline caches.',
            'Cleans up temporary extraction directories leaving the system 100% lean.'
          ],
          logs: [
            '[INSTALL] Detected OS: Windows NT 10.0 -> Using syntax: pnputil /add-driver /install',
            '[WHQL] Published and installed on device: PCI\\VEN_10EC&DEV_8125 (0 errors).',
            '[SHADER] Purging stale DirectX (D3DSCache) and Vulkan Pipeline Cache...',
            '[COMPLETE] AutoDriver WHQL pipeline finished. 0 background processes remaining.'
          ]
        }
      ]
    }
  };

  // Internal Interactive State
  const state = {
    activeAgentIndex: 0,
    activePresetId: 'x3d',
    activeStepIndex: 0,
    simRunning: false,
    simCompletedSteps: [true, false, false, false, false],
    simCurrentStep: 0,
    simTimers: [],
    terminalLines: []
  };

  function getLang() {
    const raw = (window.currentLang || document.documentElement.lang || 'es').toLowerCase();
    return raw.startsWith('en') ? 'en' : 'es';
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #${MOUNT_ID} {
        position: relative;
        width: 100%;
        padding: 2.25rem 0 !important;
        color: var(--text-main, #f4f6fb);
        font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
      }

      .rc-arch-container {
        width: 100%;
        max-width: 1220px;
        margin: 0 auto;
        padding: 0 24px;
        box-sizing: border-box;
      }

      /* Section Header */
      .rc-arch-header {
        margin-bottom: 1.25rem;
        border-left: 3px solid var(--primary, #f59e0b);
        padding-left: 1.25rem;
      }

      .rc-arch-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.76rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--primary, #f59e0b);
        margin-bottom: 0.45rem;
      }

      .rc-arch-eyebrow-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--primary, #f59e0b);
        box-shadow: 0 0 12px var(--primary-glow, rgba(245, 158, 11, 0.55));
      }

      .rc-arch-title {
        font-family: var(--font-display, var(--font-sans, sans-serif));
        font-size: clamp(1.85rem, 3.2vw, 2.75rem);
        font-weight: 800;
        line-height: 1.12;
        letter-spacing: -0.02em;
        margin: 0 0 0.5rem 0;
        color: var(--text-main, #f4f6fb);
      }

      .rc-arch-subtitle {
        max-width: 820px;
        font-size: 0.95rem;
        line-height: 1.55;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      /* 2-Column Side-by-Side Dashboard Layout */
      .rc-arch-dashboard-layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1.25rem;
        align-items: stretch;
        width: 100%;
      }

      @media (max-width: 1024px) {
        .rc-arch-dashboard-layout {
          grid-template-columns: 1fr;
        }
      }

      /* Panel Shell (Swiss Technical HUD) */
      .rc-arch-panel {
        position: relative;
        background: var(--bg-card, rgba(14, 19, 30, 0.82));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.09));
        border-radius: 14px;
        padding: 1.25rem;
        margin-bottom: 0;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(16px);
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 540px;
        scrollbar-width: thin;
        scrollbar-color: var(--primary, #f59e0b) rgba(255, 255, 255, 0.05);
      }

      .rc-arch-panel::-webkit-scrollbar {
        width: 5px;
      }
      .rc-arch-panel::-webkit-scrollbar-thumb {
        background: var(--primary, #f59e0b);
        border-radius: 999px;
      }

      .rc-arch-panel::before {
        content: '';
        position: absolute;
        inset: 0 0 auto 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          var(--primary, #f59e0b) 35%,
          var(--accent-emerald, #10b981) 70%,
          transparent 100%
        );
        opacity: 0.85;
      }

      .rc-arch-panel-top {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.25rem;
        margin-bottom: 1.5rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
      }

      .rc-arch-subbadge {
        display: inline-block;
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--accent-amber, #f59e0b);
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.3));
        padding: 0.28rem 0.65rem;
        border-radius: 6px;
        margin-bottom: 0.6rem;
      }

      .rc-arch-panel-title {
        font-family: var(--font-display, var(--font-sans, sans-serif));
        font-size: clamp(1.35rem, 2.2vw, 1.85rem);
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        color: var(--text-main, #ffffff);
      }

      .rc-arch-panel-desc {
        max-width: 760px;
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      .rc-arch-quorum-pill {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: var(--bg-surface, rgba(8, 12, 20, 0.9));
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.32));
        border-radius: 10px;
        padding: 0.7rem 1rem;
        min-width: 255px;
      }

      .rc-arch-quorum-label {
        font-family: var(--font-mono, monospace);
        font-size: 0.68rem;
        letter-spacing: 0.12em;
        color: var(--text-muted, #94a3b8);
        margin-bottom: 0.25rem;
      }

      .rc-arch-quorum-val {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.78rem;
        font-weight: 700;
        color: var(--accent-emerald, #10b981);
      }

      .rc-arch-pulse {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-emerald, #10b981);
        box-shadow: 0 0 10px var(--accent-emerald, #10b981);
        animation: rcArchPulse 2s infinite ease-in-out;
      }

      @keyframes rcArchPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.35); opacity: 0.55; }
      }

      /* 3-Column Hardware Topology Preset Bar */
      .rc-arch-preset-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.55rem;
      }

      .rc-arch-preset-title {
        font-family: var(--font-mono, monospace);
        font-size: 0.73rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted, #94a3b8);
      }

      .rc-arch-preset-bar {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.75rem;
        background: var(--bg-surface, rgba(9, 13, 22, 0.75));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        border-radius: 12px;
        padding: 0.85rem;
        margin-bottom: 1rem;
      }

      .rc-arch-preset-btn {
        appearance: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.28rem;
        text-align: left;
        background: var(--bg-deep, rgba(5, 8, 15, 0.85));
        color: var(--text-muted, #94a3b8);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        border-radius: 9px;
        padding: 0.7rem 0.9rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.75rem;
        line-height: 1.4;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 0;
      }

      .rc-arch-preset-btn-tag {
        font-size: 0.64rem;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--primary, #f59e0b);
        opacity: 0.85;
      }

      .rc-arch-preset-btn-label {
        font-weight: 600;
        color: var(--text-main, #f4f6fb);
        word-break: break-word;
      }

      .rc-arch-preset-btn:hover {
        color: var(--text-main, #fff);
        border-color: var(--primary, #f59e0b);
        transform: translateY(-1px);
      }

      .rc-arch-preset-btn.is-active {
        background: linear-gradient(
          160deg,
          var(--primary-soft, rgba(245, 158, 11, 0.14)) 0%,
          var(--bg-deep, rgba(5, 8, 15, 0.95)) 100%
        );
        border-color: var(--primary, #f59e0b);
        box-shadow: 0 0 20px var(--primary-glow, rgba(245, 158, 11, 0.25));
      }

      .rc-arch-preset-btn.is-active .rc-arch-preset-btn-tag {
        color: var(--accent-emerald, #10b981);
        font-weight: 700;
        opacity: 1;
      }

      /* Live Quorum Execution Plan Banner */
      .rc-arch-verdict-banner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.85rem;
        background: linear-gradient(
          90deg,
          var(--primary-soft, rgba(245, 158, 11, 0.14)) 0%,
          rgba(16, 185, 129, 0.08) 100%
        );
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.35));
        border-left: 4px solid var(--primary, #f59e0b);
        border-radius: 10px;
        padding: 0.8rem 1.1rem;
        margin-bottom: 1.4rem;
      }

      .rc-arch-verdict-banner-left {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        color: var(--primary, #f59e0b);
      }

      .rc-arch-verdict-banner-val {
        font-family: var(--font-mono, monospace);
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-main, #ffffff);
        background: var(--bg-deep, rgba(5, 8, 15, 0.78));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        border-radius: 6px;
        padding: 0.38rem 0.75rem;
      }

      /* 4-Agent Switcher Grid */
      .rc-arch-agents-grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 0.9rem;
        margin-bottom: 1.6rem;
      }

      .rc-arch-agent-node {
        position: relative;
        text-align: left;
        background: var(--bg-surface, rgba(10, 15, 25, 0.85));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        border-radius: 12px;
        padding: 1.05rem 1.1rem;
        cursor: pointer;
        transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        color: var(--text-main, #f4f6fb);
        min-width: 0;
      }

      .rc-arch-agent-node:hover {
        transform: translateY(-2px);
        border-color: var(--primary, #f59e0b);
      }

      .rc-arch-agent-node.is-active {
        background: linear-gradient(
          165deg,
          var(--primary-soft, rgba(245, 158, 11, 0.14)) 0%,
          var(--bg-surface, rgba(10, 15, 25, 0.95)) 100%
        );
        border-color: var(--primary, #f59e0b);
        box-shadow: 0 0 25px var(--primary-glow, rgba(245, 158, 11, 0.2));
      }

      .rc-arch-agent-node-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.4rem;
        margin-bottom: 0.5rem;
      }

      .rc-arch-agent-code {
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--primary, #f59e0b);
      }

      .rc-arch-agent-chip {
        font-family: var(--font-mono, monospace);
        font-size: 0.62rem;
        font-weight: 700;
        padding: 0.15rem 0.45rem;
        border-radius: 4px;
        background: rgba(16, 185, 129, 0.14);
        color: var(--accent-emerald, #10b981);
        border: 1px solid rgba(16, 185, 129, 0.32);
        white-space: nowrap;
      }

      .rc-arch-agent-chip.is-veto {
        background: rgba(245, 158, 11, 0.16);
        color: var(--accent-amber, #f59e0b);
        border-color: rgba(245, 158, 11, 0.42);
      }

      .rc-arch-agent-chip.is-protect {
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        color: var(--primary, #f59e0b);
        border-color: var(--border-glow, rgba(245, 158, 11, 0.38));
      }

      .rc-arch-agent-chip.is-sealed {
        background: rgba(16, 185, 129, 0.16);
        color: var(--accent-emerald, #10b981);
        border-color: rgba(16, 185, 129, 0.4);
      }

      .rc-arch-agent-name {
        font-size: 0.96rem;
        font-weight: 700;
        margin: 0 0 0.45rem 0;
        color: var(--text-main, #fff);
      }

      .rc-arch-agent-vote {
        font-family: var(--font-mono, monospace);
        font-size: 0.69rem;
        color: var(--accent-amber, #f59e0b);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Agent Detail Split View */
      .rc-arch-agent-detail {
        display: grid;
        grid-template-columns: 1.05fr 1.15fr;
        gap: 1.35rem;
        align-items: stretch;
      }

      .rc-arch-agent-left,
      .rc-arch-agent-right {
        min-width: 0;
        overflow: hidden;
        background: var(--bg-deep, rgba(6, 9, 16, 0.88));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        border-radius: 12px;
        padding: 1.35rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .rc-arch-detail-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .rc-arch-detail-title {
        font-size: 1.18rem;
        font-weight: 700;
        margin: 0;
        color: var(--text-main, #fff);
      }

      .rc-arch-detail-badge {
        font-family: var(--font-mono, monospace);
        font-size: 0.68rem;
        padding: 0.24rem 0.55rem;
        border-radius: 4px;
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        color: var(--primary, #f59e0b);
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.3));
      }

      .rc-arch-detail-summary {
        font-size: 0.91rem;
        line-height: 1.6;
        color: var(--text-muted, #94a3b8);
        margin: 0 0 1.1rem 0;
      }

      .rc-arch-metrics-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.6rem;
        margin-bottom: 1.15rem;
      }

      .rc-arch-metric-box {
        background: var(--bg-surface, rgba(13, 19, 31, 0.9));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.07));
        border-radius: 8px;
        padding: 0.6rem 0.7rem;
        min-width: 0;
      }

      .rc-arch-metric-k {
        font-family: var(--font-mono, monospace);
        font-size: 0.65rem;
        color: var(--text-muted, #94a3b8);
        margin-bottom: 0.2rem;
      }

      .rc-arch-metric-v {
        font-family: var(--font-mono, monospace);
        font-size: 0.76rem;
        font-weight: 700;
        color: var(--text-main, #fff);
        word-break: break-word;
      }

      .rc-arch-subhead {
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--primary, #f59e0b);
        margin: 0 0 0.65rem 0;
      }

      .rc-arch-guardrails-list {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 1rem;
      }

      .rc-arch-guardrail-item {
        background: var(--bg-surface, rgba(12, 17, 28, 0.85));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.07));
        border-radius: 8px;
        padding: 0.7rem 0.85rem;
      }

      .rc-arch-guardrail-top {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.3rem;
      }

      .rc-arch-status-pill {
        font-family: var(--font-mono, monospace);
        font-size: 0.63rem;
        font-weight: 700;
        padding: 0.12rem 0.45rem;
        border-radius: 4px;
      }

      .rc-arch-status-pill.is-protect {
        background: rgba(245, 158, 11, 0.15);
        color: var(--accent-amber, #f59e0b);
        border: 1px solid rgba(245, 158, 11, 0.35);
      }

      .rc-arch-status-pill.is-optimize {
        background: rgba(16, 185, 129, 0.15);
        color: var(--accent-emerald, #10b981);
        border: 1px solid rgba(16, 185, 129, 0.35);
      }

      .rc-arch-status-pill.is-adapt {
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        color: var(--primary, #f59e0b);
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.35));
      }

      .rc-arch-guardrail-tag {
        font-family: var(--font-mono, monospace);
        font-size: 0.74rem;
        font-weight: 700;
        color: var(--text-main, #fff);
      }

      .rc-arch-guardrail-desc {
        font-size: 0.82rem;
        line-height: 1.5;
        color: var(--text-muted, #94a3b8);
        margin: 0;
      }

      .rc-arch-vote-box {
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.28));
        border-radius: 8px;
        padding: 0.75rem 0.9rem;
      }

      .rc-arch-vote-title {
        font-family: var(--font-mono, monospace);
        font-size: 0.74rem;
        font-weight: 700;
        color: var(--accent-emerald, #10b981);
        margin-bottom: 0.25rem;
      }

      .rc-arch-vote-desc {
        font-size: 0.82rem;
        line-height: 1.48;
        color: var(--text-main, #e2e8f0);
        margin: 0;
      }

      /* Code Viewer */
      .rc-arch-code-topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.75rem;
        margin-bottom: 0.75rem;
        border-bottom: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
      }

      .rc-arch-code-dots {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .rc-arch-code-dots span {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: var(--border-subtle, rgba(255, 255, 255, 0.2));
      }

      .rc-arch-code-dots span:nth-child(1) { background: #ef4444; }
      .rc-arch-code-dots span:nth-child(2) { background: #f59e0b; }
      .rc-arch-code-dots span:nth-child(3) { background: #10b981; }

      .rc-arch-copy-btn {
        appearance: none;
        background: var(--bg-surface, rgba(15, 23, 42, 0.9));
        color: var(--text-main, #fff);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.15));
        border-radius: 6px;
        padding: 0.3rem 0.65rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .rc-arch-copy-btn:hover {
        border-color: var(--primary, #f59e0b);
        color: var(--primary, #f59e0b);
      }

      .rc-arch-pre {
        margin: 0;
        padding: 0.75rem;
        background: rgba(3, 6, 12, 0.92);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.06));
        border-radius: 8px;
        font-family: var(--font-mono, monospace);
        font-size: 0.71rem;
        line-height: 1.5;
        color: #dbeafe;
        overflow-x: auto;
        overflow-y: auto;
        max-height: 180px;
        max-width: 100%;
        flex: 1;
      }

      .rc-arch-pre .kw { color: var(--primary, #f59e0b); font-weight: 600; }
      .rc-arch-pre .str { color: var(--accent-emerald, #10b981); }
      .rc-arch-pre .cmt { color: #64748b; font-style: italic; }
      .rc-arch-pre .typ { color: var(--accent-amber, #f59e0b); }

      /* PART 2: AutoDriver 5-Step Simulator */
      .rc-arch-autodriver-controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .rc-arch-sim-btn {
        appearance: none;
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        background: var(--primary, #f59e0b);
        color: var(--bg-deep, #04070d);
        border: none;
        border-radius: 10px;
        padding: 0.8rem 1.35rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.84rem;
        font-weight: 800;
        letter-spacing: 0.03em;
        cursor: pointer;
        box-shadow: 0 0 25px var(--primary-glow, rgba(245, 158, 11, 0.4));
        transition: transform 0.18s ease, box-shadow 0.18s ease, opacity 0.18s ease;
      }

      .rc-arch-sim-btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 0 34px var(--primary-glow, rgba(245, 158, 11, 0.65));
      }

      .rc-arch-sim-btn:disabled {
        opacity: 0.75;
        cursor: wait;
      }

      .rc-arch-zeroram-pill {
        font-family: var(--font-mono, monospace);
        font-size: 0.75rem;
        color: var(--accent-emerald, #10b981);
        background: rgba(16, 185, 129, 0.1);
        border: 1px solid rgba(16, 185, 129, 0.3);
        padding: 0.5rem 0.9rem;
        border-radius: 8px;
      }

      /* 5-Step Pipeline Track */
      .rc-arch-steps-track {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }

      .rc-arch-step-card {
        position: relative;
        text-align: left;
        background: var(--bg-surface, rgba(10, 15, 25, 0.85));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.1));
        border-radius: 12px;
        padding: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;
        color: var(--text-main, #fff);
        min-width: 0;
      }

      .rc-arch-step-card:hover {
        border-color: var(--primary, #f59e0b);
      }

      .rc-arch-step-card.is-active {
        border-color: var(--primary, #f59e0b);
        background: linear-gradient(
          165deg,
          var(--primary-soft, rgba(245, 158, 11, 0.14)) 0%,
          var(--bg-surface, rgba(10, 15, 25, 0.95)) 100%
        );
        box-shadow: 0 0 22px var(--primary-glow, rgba(245, 158, 11, 0.22));
      }

      .rc-arch-step-card.is-done {
        border-color: rgba(16, 185, 129, 0.45);
      }

      .rc-arch-step-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.45rem;
      }

      .rc-arch-step-num {
        font-family: var(--font-mono, monospace);
        font-size: 0.75rem;
        font-weight: 800;
        color: var(--primary, #f59e0b);
      }

      .rc-arch-step-state {
        font-family: var(--font-mono, monospace);
        font-size: 0.62rem;
        padding: 0.12rem 0.42rem;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.06);
        color: var(--text-muted, #94a3b8);
      }

      .rc-arch-step-card.is-running .rc-arch-step-state {
        background: rgba(245, 158, 11, 0.18);
        color: var(--accent-amber, #f59e0b);
      }

      .rc-arch-step-card.is-done .rc-arch-step-state {
        background: rgba(16, 185, 129, 0.16);
        color: var(--accent-emerald, #10b981);
      }

      .rc-arch-step-name {
        font-size: 0.88rem;
        font-weight: 700;
        margin: 0 0 0.3rem 0;
        line-height: 1.3;
      }

      .rc-arch-step-sub {
        font-family: var(--font-mono, monospace);
        font-size: 0.68rem;
        color: var(--text-muted, #94a3b8);
        line-height: 1.35;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* AutoDriver Lower Split: Inspector + Live Terminal */
      .rc-arch-autodriver-split {
        display: grid;
        grid-template-columns: 1fr 1.1fr;
        gap: 1.25rem;
      }

      .rc-arch-step-inspector,
      .rc-arch-terminal {
        min-width: 0;
        overflow: hidden;
        background: var(--bg-deep, rgba(5, 8, 15, 0.92));
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.08));
        border-radius: 12px;
        padding: 1.25rem;
      }

      .rc-arch-cmd-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.76rem;
        background: var(--primary-soft, rgba(245, 158, 11, 0.14));
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.28));
        color: var(--primary, #f59e0b);
        padding: 0.55rem 0.75rem;
        border-radius: 8px;
        margin-bottom: 0.9rem;
        min-width: 0;
      }

      .rc-arch-cmd-text {
        overflow-x: auto;
        white-space: nowrap;
        flex: 1;
        min-width: 0;
        padding-bottom: 2px;
      }

      .rc-arch-copy-cmd-btn {
        appearance: none;
        flex-shrink: 0;
        background: var(--bg-surface, rgba(15, 23, 42, 0.92));
        color: var(--text-main, #fff);
        border: 1px solid var(--border-glow, rgba(245, 158, 11, 0.35));
        border-radius: 6px;
        padding: 0.28rem 0.6rem;
        font-family: var(--font-mono, monospace);
        font-size: 0.69rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.18s ease;
      }

      .rc-arch-copy-cmd-btn:hover {
        background: var(--primary, #f59e0b);
        color: var(--bg-deep, #05080f);
        border-color: var(--primary, #f59e0b);
      }

      .rc-arch-highlights {
        margin: 0;
        padding-left: 1.1rem;
        color: var(--text-main, #e2e8f0);
        font-size: 0.84rem;
        line-height: 1.6;
      }

      .rc-arch-highlights li {
        margin-bottom: 0.35rem;
      }

      .rc-arch-terminal-log {
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        line-height: 1.55;
        background: rgba(2, 4, 9, 0.95);
        border: 1px solid var(--border-subtle, rgba(255, 255, 255, 0.06));
        border-radius: 8px;
        padding: 0.7rem;
        min-height: 140px;
        max-height: 170px;
        overflow-y: auto;
        color: #cbd5e1;
      }

      .rc-arch-log-line {
        margin-bottom: 0.3rem;
        word-break: break-word;
      }

      .rc-arch-log-line .tag-ok {
        color: var(--accent-emerald, #10b981);
        font-weight: 700;
      }

      .rc-arch-log-line .tag-info {
        color: var(--primary, #f59e0b);
        font-weight: 700;
      }

      .rc-arch-log-line .tag-warn {
        color: var(--accent-amber, #f59e0b);
        font-weight: 700;
      }

      @media (max-width: 1080px) {
        .rc-arch-preset-bar {
          grid-template-columns: 1fr;
        }
        .rc-arch-agents-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .rc-arch-agent-detail,
        .rc-arch-autodriver-split {
          grid-template-columns: 1fr;
        }
        .rc-arch-steps-track {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 640px) {
        .rc-arch-panel {
          padding: 1.25rem;
        }
        .rc-arch-agents-grid,
        .rc-arch-steps-track,
        .rc-arch-metrics-row {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Single-pass combined regex tokenizer for C# syntax highlighting.
   * Prevents sequential .replace() corruption where "class" inside <span class="cmt">
   * would otherwise be matched by a subsequent keyword regex.
   */
  function highlightCSharp(code) {
    const escaped = escapeHtml(code);
    const tokenRegex =
      /(\/\/[^\n]*)|(&quot;[^\n]*?&quot;)|\b(public|private|sealed|class|static|readonly|const|foreach|var|if|else|return|using|new|bool|string|true|false|is|or)\b|\b(AgentVerdict|IConsensusAgent|CpuHardwareSnapshot|PcieDeviceGraph|StorageProfile|MemoryProfile|TransactionPlan|RegistryTransaction|ServiceGuard|VssRestorePointManager|StreamWriter|UnicodeEncoding|CpuVendor|HeteroSchedulerPolicy|DiskMediaType|ServiceStartMode|RestorePointEventType|Directory|Path|DateTime|RegistryExporter)\b/g;

    return escaped.replace(tokenRegex, (match, cmt, str, kw, typ) => {
      if (cmt) return `<span class="cmt">${cmt}</span>`;
      if (str) return `<span class="str">${str}</span>`;
      if (kw) return `<span class="kw">${kw}</span>`;
      if (typ) return `<span class="typ">${typ}</span>`;
      return match;
    });
  }

  function formatLogLine(line) {
    const safe = escapeHtml(line);
    if (safe.includes('[OK]') || safe.includes('[COMPLETE]') || safe.includes('[WHQL]') || safe.includes('[MATCH]')) {
      return safe.replace(/^(\[[^\]]+\])/, '<span class="tag-ok">$1</span>');
    }
    if (safe.includes('[BACKUP]') || safe.includes('[EXPORT]') || safe.includes('[VERIFY]')) {
      return safe.replace(/^(\[[^\]]+\])/, '<span class="tag-warn">$1</span>');
    }
    return safe.replace(/^(\[[^\]]+\])/, '<span class="tag-info">$1</span>');
  }

  function clearSimTimers() {
    while (state.simTimers.length > 0) {
      clearTimeout(state.simTimers.pop());
    }
  }

  function render() {
    const mount = document.getElementById(MOUNT_ID);
    if (!mount) return;

    const lang = getLang();
    const t = I18N[lang];
    const activeAgent = t.agents[state.activeAgentIndex] || t.agents[0];
    const activeStep = t.steps[state.activeStepIndex] || t.steps[0];
    const activePreset = t.presets.find((p) => p.id === state.activePresetId) || t.presets[0];
    const activeVote = activeAgent.presetVotes[state.activePresetId] || activeAgent.presetVotes.x3d;

    // Seed initial terminal lines if empty
    if (state.terminalLines.length === 0) {
      state.terminalLines = activeStep.logs.slice();
    }

    const simBtnLabel = state.simRunning
      ? t.simBtnRunning
      : state.simCompletedSteps.every(Boolean)
      ? t.simBtnReplay
      : t.simBtnIdle;

    mount.innerHTML = `
      <div class="rc-arch-container" data-skin="${escapeHtml(window.currentRecoilSkin || 'default')}">
        <!-- Section Header -->
        <header class="rc-arch-header">
          <div class="rc-arch-eyebrow">
            <span class="rc-arch-eyebrow-dot"></span>
            <span>${escapeHtml(t.sectionTag)}</span>
          </div>
          <h2 class="rc-arch-title">${escapeHtml(t.sectionTitle)}</h2>
          <p class="rc-arch-subtitle">${escapeHtml(t.sectionSubtitle)}</p>
        </header>

        <!-- Swiss Technical 2-Column Dashboard Layout (Consensus & AutoDriver in Parallel) -->
        <div class="rc-arch-dashboard-layout">
        <!-- PART 1: 4-Agent Consensus Engine -->
        <section class="rc-arch-panel" aria-label="${escapeHtml(t.part1Title)}">
          <div class="rc-arch-panel-top">
            <div>
              <span class="rc-arch-subbadge">${escapeHtml(t.part1Badge)}</span>
              <h3 class="rc-arch-panel-title">${escapeHtml(t.part1Title)}</h3>
              <p class="rc-arch-panel-desc">${escapeHtml(t.part1Desc)}</p>
            </div>
            <div class="rc-arch-quorum-pill">
              <span class="rc-arch-quorum-label">${escapeHtml(t.consensusStatusLabel)}</span>
              <span class="rc-arch-quorum-val">
                <span class="rc-arch-pulse"></span>
                ${escapeHtml(t.consensusStatusValue)}
              </span>
            </div>
          </div>

          <!-- 3-Column Hardware Topology Simulator Preset Selector -->
          <div class="rc-arch-preset-header">
            <span class="rc-arch-preset-title">${escapeHtml(t.presetLabel)}</span>
          </div>
          <div class="rc-arch-preset-bar" role="group" aria-label="${escapeHtml(t.presetLabel)}">
            ${t.presets
              .map(
                (p) => `
              <button
                type="button"
                class="rc-arch-preset-btn ${p.id === state.activePresetId ? 'is-active' : ''}"
                data-arch-preset="${escapeHtml(p.id)}"
              >
                <span class="rc-arch-preset-btn-tag">${escapeHtml(p.shortTag)}</span>
                <span class="rc-arch-preset-btn-label">${escapeHtml(p.label)}</span>
              </button>
            `
              )
              .join('')}
          </div>

          <!-- Quorum Execution Plan Banner -->
          <div class="rc-arch-verdict-banner" role="status" aria-live="polite">
            <div class="rc-arch-verdict-banner-left">
              <span class="rc-arch-pulse"></span>
              <span>${escapeHtml(t.quorumPlanLabel)}</span>
            </div>
            <div class="rc-arch-verdict-banner-val">
              ${escapeHtml(activePreset.verdict)}
            </div>
          </div>

          <!-- 4-Agent Interactive Node Switcher -->
          <div class="rc-arch-agents-grid" role="tablist">
            ${t.agents
              .map((ag, idx) => {
                const vote = ag.presetVotes[state.activePresetId] || ag.presetVotes.x3d;
                const isActive = idx === state.activeAgentIndex;
                const toneClass =
                  vote.chipTone === 'veto'
                    ? 'is-veto'
                    : vote.chipTone === 'protect'
                    ? 'is-protect'
                    : vote.chipTone === 'sealed'
                    ? 'is-sealed'
                    : 'is-approve';
                return `
                  <button
                    type="button"
                    role="tab"
                    aria-selected="${isActive ? 'true' : 'false'}"
                    class="rc-arch-agent-node ${isActive ? 'is-active' : ''}"
                    data-arch-agent-index="${idx}"
                  >
                    <div class="rc-arch-agent-node-top">
                      <span class="rc-arch-agent-code">${escapeHtml(ag.code)}</span>
                      <span class="rc-arch-agent-chip ${toneClass}">${escapeHtml(vote.chip || 'ONLINE')}</span>
                    </div>
                    <div class="rc-arch-agent-name">${escapeHtml(ag.shortTitle)}</div>
                    <div class="rc-arch-agent-vote">${escapeHtml(vote.state)}</div>
                  </button>
                `;
              })
              .join('')}
          </div>

          <!-- Selected Agent Detail Split View -->
          <div class="rc-arch-agent-detail">
            <!-- Left: Guardrails & Hardware Consensus Vote -->
            <div class="rc-arch-agent-left">
              <div>
                <div class="rc-arch-detail-head">
                  <h4 class="rc-arch-detail-title">${escapeHtml(activeAgent.fullTitle)}</h4>
                  <span class="rc-arch-detail-badge">${escapeHtml(activeAgent.badge)}</span>
                </div>
                <p class="rc-arch-detail-summary">${escapeHtml(activeAgent.summary)}</p>

                <div class="rc-arch-metrics-row">
                  ${activeAgent.metrics
                    .map(
                      (m) => `
                    <div class="rc-arch-metric-box">
                      <div class="rc-arch-metric-k">${escapeHtml(m.k)}</div>
                      <div class="rc-arch-metric-v">${escapeHtml(m.v)}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>

                <h5 class="rc-arch-subhead">${escapeHtml(t.guardrailsHeader)}</h5>
                <div class="rc-arch-guardrails-list">
                  ${activeAgent.guardrails
                    .map((g) => {
                      const cls =
                        g.status === 'PROTECT'
                          ? 'is-protect'
                          : g.status === 'OPTIMIZE'
                          ? 'is-optimize'
                          : 'is-adapt';
                      return `
                        <div class="rc-arch-guardrail-item">
                          <div class="rc-arch-guardrail-top">
                            <span class="rc-arch-status-pill ${cls}">${escapeHtml(g.status)}</span>
                            <span class="rc-arch-guardrail-tag">${escapeHtml(g.tag)}</span>
                          </div>
                          <p class="rc-arch-guardrail-desc">${escapeHtml(g.desc)}</p>
                        </div>
                      `;
                    })
                    .join('')}
                </div>
              </div>

              <div class="rc-arch-vote-box">
                <div class="rc-arch-vote-title">${escapeHtml(t.telemetryHeader)}: ${escapeHtml(activeVote.state)}</div>
                <p class="rc-arch-vote-desc">${escapeHtml(activeVote.detail)}</p>
              </div>
            </div>

            <!-- Right: Live C# Inspection Pipeline -->
            <div class="rc-arch-agent-right">
              <div class="rc-arch-code-topbar">
                <div class="rc-arch-code-dots">
                  <span></span><span></span><span></span>
                  <strong style="margin-left:8px;font-family:var(--font-mono,monospace);font-size:0.74rem;color:var(--text-muted,#94a3b8);">
                    ${escapeHtml(t.pipelineHeader)}
                  </strong>
                </div>
                <button type="button" class="rc-arch-copy-btn" data-arch-copy-csharp="1">
                  ${escapeHtml(t.copyCode)}
                </button>
              </div>
              <pre class="rc-arch-pre"><code>${highlightCSharp(activeAgent.csharp)}</code></pre>
            </div>
          </div>
        </section>

        <!-- PART 2: AutoDriver // Official Microsoft Update Catalog + WHQL Pipeline -->
        <section class="rc-arch-panel" aria-label="${escapeHtml(t.part2Title)}">
          <div class="rc-arch-panel-top">
            <div>
              <span class="rc-arch-subbadge">${escapeHtml(t.part2Badge)}</span>
              <h3 class="rc-arch-panel-title">${escapeHtml(t.part2Title)}</h3>
              <p class="rc-arch-panel-desc">${escapeHtml(t.part2Desc)}</p>
            </div>
            <div class="rc-arch-zeroram-pill">
              ${escapeHtml(t.zeroRamBadge)}
            </div>
          </div>

          <div class="rc-arch-autodriver-controls">
            <button
              type="button"
              class="rc-arch-sim-btn"
              data-arch-run-sim="1"
              ${state.simRunning ? 'disabled' : ''}
            >
              ${escapeHtml(simBtnLabel)}
            </button>
          </div>

          <!-- 5-Step Pipeline Cards -->
          <div class="rc-arch-steps-track" role="tablist">
            ${t.steps
              .map((step, idx) => {
                const isCurrent = idx === state.activeStepIndex;
                const isRunning = state.simRunning && state.simCurrentStep === idx;
                const isDone = state.simCompletedSteps[idx] && !isRunning;
                const statusText = isRunning
                  ? t.stepStatusRunning
                  : isDone
                  ? t.stepStatusDone
                  : t.stepStatusIdle;
                return `
                  <button
                    type="button"
                    role="tab"
                    aria-selected="${isCurrent ? 'true' : 'false'}"
                    class="rc-arch-step-card ${isCurrent ? 'is-active' : ''} ${isRunning ? 'is-running' : ''} ${isDone ? 'is-done' : ''}"
                    data-arch-step-index="${idx}"
                  >
                    <div class="rc-arch-step-top">
                      <span class="rc-arch-step-num">STEP ${escapeHtml(step.num)}</span>
                      <span class="rc-arch-step-state">${escapeHtml(statusText)}</span>
                    </div>
                    <div class="rc-arch-step-name">${escapeHtml(step.shortTitle)}</div>
                    <div class="rc-arch-step-sub">${escapeHtml(step.subtitle)}</div>
                  </button>
                `;
              })
              .join('')}
          </div>

          <!-- Inspector + Live Telemetry Console -->
          <div class="rc-arch-autodriver-split">
            <div class="rc-arch-step-inspector">
              <h4 class="rc-arch-subhead">${escapeHtml(t.stepInspectorTitle)} // STEP ${escapeHtml(activeStep.num)}</h4>
              <h5 style="margin:0 0 0.5rem 0;font-size:1.08rem;color:var(--text-main,#fff);">
                ${escapeHtml(activeStep.title)}
              </h5>
              <p class="rc-arch-detail-summary" style="margin-bottom:0.85rem;">
                ${escapeHtml(activeStep.detail)}
              </p>
              <div class="rc-arch-cmd-box">
                <span class="rc-arch-cmd-text">&gt; ${escapeHtml(activeStep.command)}</span>
                <button type="button" class="rc-arch-copy-cmd-btn" data-arch-copy-cmd="1">
                  ${escapeHtml(t.copyCmd)}
                </button>
              </div>
              <ul class="rc-arch-highlights">
                ${activeStep.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}
              </ul>
            </div>

            <div class="rc-arch-terminal">
              <div class="rc-arch-code-topbar">
                <div class="rc-arch-code-dots">
                  <span></span><span></span><span></span>
                  <strong style="margin-left:8px;font-family:var(--font-mono,monospace);font-size:0.72rem;color:var(--text-muted,#94a3b8);">
                    ${escapeHtml(t.terminalTitle)}
                  </strong>
                </div>
              </div>
              <div class="rc-arch-terminal-log" id="rc-arch-terminal-log">
                ${state.terminalLines
                  .map((line) => `<div class="rc-arch-log-line">${formatLogLine(line)}</div>`)
                  .join('')}
              </div>
            </div>
          </div>
        </section>
        </div> <!-- /.rc-arch-dashboard-layout -->
      </div>
    `;

    const logEl = document.getElementById('rc-arch-terminal-log');
    if (logEl) {
      logEl.scrollTop = logEl.scrollHeight;
    }

    if (typeof window.refreshRecoilMotion === 'function') {
      window.refreshRecoilMotion();
    }
  }

  function runWhqlSimulation() {
    if (state.simRunning) return;
    clearSimTimers();

    const lang = getLang();
    const steps = I18N[lang].steps;

    state.simRunning = true;
    state.simCompletedSteps = [false, false, false, false, false];
    state.simCurrentStep = 0;
    state.activeStepIndex = 0;
    state.terminalLines = [];
    render();

    const stepDuration = 950;

    steps.forEach((step, idx) => {
      const startTimer = setTimeout(() => {
        const currentSteps = I18N[getLang()].steps;
        const localizedStep = currentSteps[idx];
        state.simCurrentStep = idx;
        state.activeStepIndex = idx;
        state.terminalLines.push(...localizedStep.logs);
        render();
      }, idx * stepDuration);

      const doneTimer = setTimeout(() => {
        state.simCompletedSteps[idx] = true;
        if (idx === steps.length - 1) {
          state.simRunning = false;
        }
        render();
      }, (idx + 1) * stepDuration - 120);

      state.simTimers.push(startTimer, doneTimer);
    });
  }

  function bindEvents() {
    const mount = document.getElementById(MOUNT_ID);
    if (!mount || mount.dataset.archBound === '1') return;
    mount.dataset.archBound = '1';

    mount.addEventListener('click', (e) => {
      const agentBtn = e.target.closest('[data-arch-agent-index]');
      if (agentBtn) {
        const idx = parseInt(agentBtn.getAttribute('data-arch-agent-index'), 10);
        if (!Number.isNaN(idx)) {
          state.activeAgentIndex = idx;
          render();
        }
        return;
      }

      const presetBtn = e.target.closest('[data-arch-preset]');
      if (presetBtn) {
        const presetId = presetBtn.getAttribute('data-arch-preset');
        if (presetId) {
          state.activePresetId = presetId;
          render();
        }
        return;
      }

      const stepBtn = e.target.closest('[data-arch-step-index]');
      if (stepBtn) {
        const idx = parseInt(stepBtn.getAttribute('data-arch-step-index'), 10);
        if (!Number.isNaN(idx)) {
          clearSimTimers();
          state.simRunning = false;
          state.activeStepIndex = idx;
          state.simCompletedSteps = state.simCompletedSteps.map((_, i) => i <= idx);
          state.terminalLines = I18N[getLang()].steps[idx].logs.slice();
          render();
        }
        return;
      }

      const simBtn = e.target.closest('[data-arch-run-sim]');
      if (simBtn) {
        runWhqlSimulation();
        return;
      }

      const copyBtn = e.target.closest('[data-arch-copy-csharp]');
      if (copyBtn) {
        const lang = getLang();
        const code = I18N[lang].agents[state.activeAgentIndex].csharp;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).catch(() => {});
        }
        copyBtn.textContent = I18N[lang].copiedCode;
        setTimeout(() => {
          copyBtn.textContent = I18N[getLang()].copyCode;
        }, 1400);
        return;
      }

      const copyCmdBtn = e.target.closest('[data-arch-copy-cmd]');
      if (copyCmdBtn) {
        const lang = getLang();
        const cmd = I18N[lang].steps[state.activeStepIndex].command;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(cmd).catch(() => {});
        }
        copyCmdBtn.textContent = I18N[lang].copiedCmd;
        setTimeout(() => {
          copyCmdBtn.textContent = I18N[getLang()].copyCmd;
        }, 1400);
      }
    });

    window.addEventListener('recoil:langchange', () => {
      const lang = getLang();
      state.terminalLines = I18N[lang].steps[state.activeStepIndex].logs.slice();
      render();
    });

    window.addEventListener('recoil:skinchange', () => {
      render();
    });
  }

  function initArchitectureShowcase() {
    injectStyles();
    bindEvents();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArchitectureShowcase);
  } else {
    initArchitectureShowcase();
  }
})();
