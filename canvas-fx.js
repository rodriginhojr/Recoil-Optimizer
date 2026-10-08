/**
 * RECOIL OPTIMIZER — 60FPS CANVAS & OSCILLOSCOPE FX ENGINE
 * File: canvas-fx.js
 *
 * Part A: Ambient Cyber-Constellation & Kernel Pulse Backdrop (#recoil-bg-canvas)
 * Part B: Live DPC & Kernel Timer Dual-Trace Oscilloscope (#dpc-oscilloscope-canvas)
 *
 * Features:
 * - Smooth RGB color morphing across all 5 skins (--skin-particle-rgb / --primary)
 * - Bilingual HUD telemetry readouts ('es' / 'en' via window.currentLang & 'recoil:langchange')
 * - Interactive Heavy Load Stress Test spike simulation + precision hover crosshair
 * - Hardware-accelerated 60fps loop with document.hidden pause & prefers-reduced-motion support
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. SKIN PALETTES, COLOR PARSING & BILINGUAL DICTIONARY
     ========================================================================== */

  const SKIN_PRESETS = {
    'antigravity-gold': { primary: [245, 158, 11], accent: [16, 185, 129], amber: [251, 191, 36] },
    'gold':             { primary: [245, 158, 11], accent: [16, 185, 129], amber: [251, 191, 36] },
    'cybernetic-blue':  { primary: [14, 165, 233], accent: [0, 240, 255],  amber: [56, 189, 248] },
    'blue':             { primary: [14, 165, 233], accent: [0, 240, 255],  amber: [56, 189, 248] },
    'cyber':            { primary: [14, 165, 233], accent: [0, 240, 255],  amber: [56, 189, 248] },
    'tactical-graphite':{ primary: [161, 161, 170], accent: [16, 185, 129], amber: [212, 212, 216] },
    'graphite':         { primary: [161, 161, 170], accent: [16, 185, 129], amber: [212, 212, 216] },
    'tactical':         { primary: [161, 161, 170], accent: [16, 185, 129], amber: [212, 212, 216] },
    'crimson-overclock':{ primary: [239, 68, 68],  accent: [249, 115, 22], amber: [251, 113, 133] },
    'crimson':          { primary: [239, 68, 68],  accent: [249, 115, 22], amber: [251, 113, 133] },
    'red':              { primary: [239, 68, 68],  accent: [249, 115, 22], amber: [251, 113, 133] },
    'ultraviolet-quantum': { primary: [168, 85, 247], accent: [6, 182, 212], amber: [217, 70, 239] },
    'ultraviolet':      { primary: [168, 85, 247], accent: [6, 182, 212], amber: [217, 70, 239] },
    'quantum':          { primary: [168, 85, 247], accent: [6, 182, 212], amber: [217, 70, 239] },
    'purple':           { primary: [168, 85, 247], accent: [6, 182, 212], amber: [217, 70, 239] }
  };

  const I18N = {
    es: {
      lockedBadge: '0.500 ms BLOQUEADO',
      dpcLabel: 'DPC ISR',
      jitterLabel: 'JITTER',
      stockTrace: 'TIMER STOCK WINDOWS (15.625 ms · PICOS DPC)',
      recoilTrace: 'KERNEL RECOIL BLOQUEADO (0.500 ms · TRAZO PLANO)',
      stressBtnIdle: '[ CLIC: SIMULAR CARGA PESADA ]',
      stressBtnActive: '[ ESTRÉS ACTIVO · KERNEL ESTABLE ]',
      stressBanner: 'TEST DE ESTRÉS IRQ/DPC EN CURSO — KERNEL RECOIL SIN DESVIACIÓN',
      stockReadout: 'STOCK:',
      recoilReadout: 'RECOIL:',
      deltaSaved: 'LATENCIA -96.8%'
    },
    en: {
      lockedBadge: '0.500 ms LOCKED',
      dpcLabel: 'DPC ISR',
      jitterLabel: 'JITTER',
      stockTrace: 'WINDOWS STOCK TIMER (15.625 ms · DPC SPIKES)',
      recoilTrace: 'RECOIL LOCKED KERNEL TIMER (0.500 ms · FLAT TRACE)',
      stressBtnIdle: '[ CLICK: HEAVY LOAD STRESS TEST ]',
      stressBtnActive: '[ STRESS LOAD ACTIVE · KERNEL CLAMPED ]',
      stressBanner: 'HEAVY DPC/IRQ STRESS LOAD ACTIVE — RECOIL KERNEL LOCK UNSHAKEN',
      stockReadout: 'STOCK:',
      recoilReadout: 'RECOIL:',
      deltaSaved: '-96.8% LATENCY'
    }
  };

  function getLang() {
    const raw = (window.currentLang || document.documentElement.lang || 'es').toLowerCase();
    return raw.startsWith('en') ? 'en' : 'es';
  }

  function parseColorToRGB(str) {
    if (!str || typeof str !== 'string') return null;
    const clean = str.trim();
    if (!clean) return null;

    if (clean.startsWith('#')) {
      let hex = clean.slice(1);
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length >= 6) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r, g, b];
      }
    }

    const nums = clean.match(/\d+(\.\d+)?/g);
    if (nums && nums.length >= 3) {
      const r = Math.min(255, Math.max(0, Math.round(Number(nums[0]))));
      const g = Math.min(255, Math.max(0, Math.round(Number(nums[1]))));
      const b = Math.min(255, Math.max(0, Math.round(Number(nums[2]))));
      return [r, g, b];
    }
    return null;
  }

  function resolveActiveSkinPalette(skinHint) {
    const rootStyle = getComputedStyle(document.documentElement);
    const bodyStyle = document.body ? getComputedStyle(document.body) : null;

    const getVar = (name) => {
      let val = rootStyle.getPropertyValue(name).trim();
      if (!val && bodyStyle) val = bodyStyle.getPropertyValue(name).trim();
      return val;
    };

    const skinKey = String(
      skinHint ||
      window.currentRecoilSkin ||
      document.documentElement.getAttribute('data-skin') ||
      (document.body && document.body.getAttribute('data-skin')) ||
      ''
    ).toLowerCase().trim();

    const preset = SKIN_PRESETS[skinKey] || SKIN_PRESETS['antigravity-gold'];

    const particleRGB = parseColorToRGB(getVar('--skin-particle-rgb'));
    const primaryRGB = parseColorToRGB(getVar('--primary'));
    const emeraldRGB = parseColorToRGB(getVar('--accent-emerald'));
    const amberRGB = parseColorToRGB(getVar('--accent-amber'));

    return {
      primary: particleRGB || primaryRGB || preset.primary.slice(),
      accent: emeraldRGB || preset.accent.slice(),
      amber: amberRGB || preset.amber.slice()
    };
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function lerpRGB(current, target, t) {
    current[0] = lerp(current[0], target[0], t);
    current[1] = lerp(current[1], target[1], t);
    current[2] = lerp(current[2], target[2], t);
  }

  function rgbaStr(rgb, alpha) {
    return `rgba(${Math.round(rgb[0])}, ${Math.round(rgb[1])}, ${Math.round(rgb[2])}, ${alpha})`;
  }

  /* ==========================================================================
     2. GLOBAL ENGINE STATE (Streamlined, No Background Particle Canvas)
     ========================================================================== */

  const Engine = {
    initialized: false,
    rafId: null,
    isHidden: false,
    reducedMotion: false,
    oscVisible: true,
    lastTime: 0,
    elapsed: 0,

    currentPrimary: [245, 158, 11],
    targetPrimary: [245, 158, 11],
    currentAccent: [16, 185, 129],
    targetAccent: [16, 185, 129],
    currentAmber: [251, 191, 36],
    targetAmber: [251, 191, 36],

    osc: null
  };

  /* ==========================================================================
     3. LIVE DPC & KERNEL TIMER OSCILLOSCOPE (#dpc-oscilloscope-canvas)
     ========================================================================== */

  class DPCOscilloscope {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d', { alpha: true });
      this.width = 0;
      this.height = 0;
      this.dpr = 1;

      // Sample buffers (circular/scrolling arrays)
      this.sampleCount = 180;
      this.stockSamples = new Float32Array(this.sampleCount);
      this.recoilSamples = new Float32Array(this.sampleCount);

      // Stress test & interaction states
      this.stressMode = false;
      this.stressAutoTimer = 0;
      this.stressIntensity = 0;
      this.shockwaveProgress = 1;
      this.hoverX = -1;
      this.hoverY = -1;
      this.isHovered = false;

      // Telemetry rolling metrics
      this.sampleAccumulator = 0;
      this.phase = 0;
      this.liveDpcUs = 18;
      this.liveJitterMs = 0.02;
      this.stockPeakMs = 18.4;
      this.optimizationEnabled = true;
      this.isIntersecting = true;

      this.seedInitialWaveform();
      this.bindInteraction();
      this.resize();
    }

    setOptimizationEnabled(enabled) {
      this.optimizationEnabled = Boolean(enabled);
    }

    seedInitialWaveform() {
      for (let i = 0; i < this.sampleCount; i++) {
        this.stockSamples[i] = this.generateStockSample(i * 0.18, false);
        this.recoilSamples[i] = this.generateRecoilSample(i * 0.18, false);
      }
    }

    generateStockSample(t, stress) {
      // Base Windows Stock Timer hovers around 15.625 ms with erratic DPC/ISR spikes
      let val = 15.625 + Math.sin(t * 1.7) * 0.85 + Math.cos(t * 4.3) * 0.65;
      const spikeRoll = Math.random();

      if (stress) {
        // Heavy load stress test: severe erratic IRQ/DPC saturation spikes (19ms - 31ms)
        val += 3.2 + Math.sin(t * 7.5) * 2.8;
        if (spikeRoll > 0.42) {
          val += 5.5 + Math.random() * 9.8;
        }
      } else {
        // Normal stock erratic spikes
        if (spikeRoll > 0.84) {
          val += 3.4 + Math.random() * 5.8;
        } else if (spikeRoll < 0.12) {
          val -= 1.2 + Math.random() * 1.4;
        }
      }
      return Math.max(8.0, Math.min(32.5, val));
    }

    generateRecoilSample(t, stress) {
      if (!this.optimizationEnabled) {
        // Unclamped stock fallback timer when rollback is simulated
        const drift = Math.sin(t * 1.5) * 0.75 + (Math.random() - 0.5) * 0.45;
        return Math.max(12.0, Math.min(18.5, 15.625 + drift));
      }
      // Recoil Optimizer Locked Kernel Timer: 0.500 ms ultra-flat precision line
      const microRipple = Math.sin(t * 3.1) * 0.008 + (Math.random() - 0.5) * 0.016;
      const stressClamp = stress ? (Math.random() - 0.5) * 0.022 : 0;
      return 0.500 + microRipple + stressClamp;
    }

    bindInteraction() {
      this.canvas.style.cursor = 'pointer';
      this.canvas.setAttribute('role', 'region');
      this.canvas.setAttribute(
        'aria-label',
        'Live DPC & Kernel Timer Oscilloscope — Click to toggle Heavy Load Stress Test'
      );

      this._onClick = () => {
        this.toggleStressTest();
      };

      this._onMouseMove = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.hoverX = e.clientX - rect.left;
        this.hoverY = e.clientY - rect.top;
        this.isHovered = true;
      };

      this._onMouseLeave = () => {
        this.isHovered = false;
        this.hoverX = -1;
        this.hoverY = -1;
      };

      this.canvas.addEventListener('click', this._onClick);
      this.canvas.addEventListener('mousemove', this._onMouseMove, { passive: true });
      this.canvas.addEventListener('mouseleave', this._onMouseLeave, { passive: true });

      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(() => this.resize());
        this.resizeObserver.observe(this.canvas);
      }

      if (typeof IntersectionObserver !== 'undefined') {
        this.intersectionObserver = new IntersectionObserver((entries) => {
          if (entries && entries[0]) {
            this.isIntersecting = entries[0].isIntersecting;
          }
        }, { threshold: 0.05 });
        this.intersectionObserver.observe(this.canvas);
      }
    }

    toggleStressTest(forceState) {
      this.stressMode = typeof forceState === 'boolean' ? forceState : !this.stressMode;
      this.shockwaveProgress = 0;
      if (this.stressMode) {
        this.stressAutoTimer = 9.0; // Automatically settles after 9s if left untouched
        // Inject immediate spike burst into recent samples for instant visual feedback
        for (let i = this.sampleCount - 8; i < this.sampleCount; i++) {
          if (i >= 0) {
            this.stockSamples[i] = 22.5 + Math.random() * 8.5;
          }
        }
      }
      window.dispatchEvent(
        new CustomEvent('recoil:stresstest', { detail: { active: this.stressMode } })
      );
    }

    resize() {
      const rect = this.canvas.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Fallback dimensions if container hasn't laid out yet
      this.width = Math.max(280, Math.floor(rect.width || this.canvas.clientWidth || 560));
      this.height = Math.min(110, Math.max(100, Math.floor(rect.height || this.canvas.clientHeight || 100)));
      this.canvas.style.display = 'block';
      this.canvas.width = Math.floor(this.width * this.dpr);
      this.canvas.height = Math.floor(this.height * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }

    /**
     * Maps a millisecond value (0ms .. 32ms) to canvas Y coordinate inside the plot box.
     */
    msToY(ms, plotTop, plotBottom) {
      const maxMs = 31.0;
      const clamped = Math.max(0, Math.min(maxMs, ms));
      const norm = clamped / maxMs;
      return plotBottom - norm * (plotBottom - plotTop);
    }

    update(dt) {
      // Handle automatic stress test countdown
      if (this.stressMode) {
        this.stressAutoTimer -= dt;
        if (this.stressAutoTimer <= 0) {
          this.stressMode = false;
        }
      }

      this.stressIntensity = lerp(
        this.stressIntensity,
        this.stressMode ? 1 : 0,
        Math.min(1, dt * 6.5)
      );

      if (this.shockwaveProgress < 1) {
        this.shockwaveProgress = Math.min(1, this.shockwaveProgress + dt * 1.8);
      }

      // Advance oscilloscope trace at steady 30 samples/sec
      this.sampleAccumulator += dt;
      const stepInterval = 1 / 30;
      while (this.sampleAccumulator >= stepInterval) {
        this.sampleAccumulator -= stepInterval;
        this.phase += 0.24;

        // Shift samples left
        this.stockSamples.copyWithin(0, 1);
        this.recoilSamples.copyWithin(0, 1);

        const nextStock = this.generateStockSample(this.phase, this.stressMode);
        const nextRecoil = this.generateRecoilSample(this.phase, this.stressMode);

        this.stockSamples[this.sampleCount - 1] = nextStock;
        this.recoilSamples[this.sampleCount - 1] = nextRecoil;

        // Update digital HUD numbers smoothly
        this.liveDpcUs = this.stressMode
          ? Math.round(19 + Math.random() * 4)
          : 18;
        this.liveJitterMs = this.stressMode ? 0.02 : 0.01 + Math.round(Math.random() * 1) * 0.01;
        this.stockPeakMs = Math.max(16.8, nextStock);

        const readout = document.getElementById('osc-dom-readout');
        if (readout) {
          if (this.optimizationEnabled) {
            readout.textContent = this.stressMode
              ? `DPC: 0.024 ms (STRESS MITIGADO) | Timer: 0.500 ms`
              : `DPC: 0.018 ms | Timer: 0.500 ms`;
            readout.style.color = 'var(--accent-emerald)';
          } else {
            readout.textContent = `DPC: 15.625 ms (STOCK WINDOWS) | Timer: 15.625 ms`;
            readout.style.color = 'var(--accent-amber)';
          }
        }
      }
    }

    render() {
      if (!this.isIntersecting) return;
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const primary = Engine.currentPrimary;
      const accent = Engine.currentAccent;
      const dangerRGB = [239, 68, 68];
      const copy = I18N[getLang()];

      ctx.clearRect(0, 0, w, h);

      // Layout geometry
      const compact = w < 420 || h < 165;
      const padLeft = compact ? 38 : 46;
      const padRight = 14;
      const padTop = compact ? 30 : 36;
      const padBottom = compact ? 22 : 26;
      const plotLeft = padLeft;
      const plotRight = w - padRight;
      const plotTop = padTop;
      const plotBottom = h - padBottom;
      const plotW = Math.max(60, plotRight - plotLeft);
      const plotH = Math.max(40, plotBottom - plotTop);

      // 1. Subtle technical dark panel fill + stress mode edge glow
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, 'rgba(9, 11, 16, 0.78)');
      bgGrad.addColorStop(1, 'rgba(5, 6, 10, 0.92)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      if (this.stressIntensity > 0.02) {
        const stressGlow = ctx.createRadialGradient(
          w * 0.5,
          plotTop + plotH * 0.35,
          10,
          w * 0.5,
          plotTop + plotH * 0.35,
          w * 0.65
        );
        stressGlow.addColorStop(0, rgbaStr(dangerRGB, 0.14 * this.stressIntensity));
        stressGlow.addColorStop(1, rgbaStr(dangerRGB, 0));
        ctx.fillStyle = stressGlow;
        ctx.fillRect(0, 0, w, h);
      }

      // 2. Swiss Technical HUD Graticule Grid & Y-Axis Labels
      const yMarkers = [
        { ms: 25.0, label: '25ms' },
        { ms: 15.625, label: '15.6ms', highlightDanger: true },
        { ms: 8.0, label: '8.0ms' },
        { ms: 0.5, label: '0.5ms', highlightLock: true }
      ];

      ctx.font = `500 ${compact ? 9 : 10}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < yMarkers.length; i++) {
        const m = yMarkers[i];
        const y = Math.round(this.msToY(m.ms, plotTop, plotBottom)) + 0.5;

        ctx.beginPath();
        if (m.highlightDanger) {
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.20)';
          ctx.setLineDash([3, 4]);
        } else if (m.highlightLock) {
          ctx.strokeStyle = rgbaStr(accent, 0.24);
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.055)';
          ctx.setLineDash([]);
        }
        ctx.lineWidth = 1;
        ctx.moveTo(plotLeft, y);
        ctx.lineTo(plotRight, y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Y-axis tick label
        if (m.highlightDanger) {
          ctx.fillStyle = 'rgba(248, 113, 113, 0.78)';
        } else if (m.highlightLock) {
          ctx.fillStyle = rgbaStr(accent, 0.92);
        } else {
          ctx.fillStyle = 'rgba(161, 161, 170, 0.52)';
        }
        ctx.fillText(m.label, plotLeft - 6, y);
      }

      // Vertical time-division lines
      const vCols = compact ? 6 : 10;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let c = 0; c <= vCols; c++) {
        const x = Math.round(plotLeft + (plotW / vCols) * c) + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, plotTop);
        ctx.lineTo(x, plotBottom);
        ctx.stroke();
      }

      // Sweeping radar scanbar
      const scanX = plotLeft + ((Engine.elapsed * 75) % plotW);
      const scanGrad = ctx.createLinearGradient(scanX - 36, 0, scanX, 0);
      scanGrad.addColorStop(0, rgbaStr(primary, 0));
      scanGrad.addColorStop(1, rgbaStr(primary, 0.11));
      ctx.fillStyle = scanGrad;
      ctx.fillRect(Math.max(plotLeft, scanX - 36), plotTop, Math.min(36, scanX - plotLeft), plotH);

      // 3. TRACE 1: Windows Stock Timer (15.625 ms erratic DPC spikes — Red/Muted dashed)
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < this.sampleCount; i++) {
        const x = plotLeft + (i / (this.sampleCount - 1)) * plotW;
        const y = this.msToY(this.stockSamples[i], plotTop, plotBottom);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      // Subtle danger fill under erratic stock trace
      const stockFillGrad = ctx.createLinearGradient(0, plotTop, 0, plotBottom);
      stockFillGrad.addColorStop(0, rgbaStr(dangerRGB, 0.18 + this.stressIntensity * 0.14));
      stockFillGrad.addColorStop(0.65, rgbaStr(dangerRGB, 0.04));
      stockFillGrad.addColorStop(1, rgbaStr(dangerRGB, 0));

      ctx.save();
      ctx.lineTo(plotRight, plotBottom);
      ctx.lineTo(plotLeft, plotBottom);
      ctx.closePath();
      ctx.fillStyle = stockFillGrad;
      ctx.fill();
      ctx.restore();

      // Dashed red/muted stroke for stock trace
      ctx.strokeStyle = rgbaStr(dangerRGB, 0.78 + this.stressIntensity * 0.2);
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // 4. TRACE 2: Recoil Optimizer Locked Kernel Timer (0.500 ms ultra-flat precision line)
      // Blend primary skin color with emerald accent for signature kernel lock look
      const lockRGB = [
        Math.round(lerp(accent[0], primary[0], 0.35)),
        Math.round(lerp(accent[1], primary[1], 0.35)),
        Math.round(lerp(accent[2], primary[2], 0.35))
      ];

      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < this.sampleCount; i++) {
        const x = plotLeft + (i / (this.sampleCount - 1)) * plotW;
        const y = this.msToY(this.recoilSamples[i], plotTop, plotBottom);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }// Crisp core solid trace
      ctx.strokeStyle = rgbaStr(lockRGB, 0.98);
      ctx.lineWidth = 2.1;
      ctx.stroke();

      // Leading playhead pulse on right edge of Trace 2
      const latestRecoilY = this.msToY(
        this.recoilSamples[this.sampleCount - 1],
        plotTop,
        plotBottom
      );
      ctx.fillStyle = rgbaStr(lockRGB, 0.28);
      ctx.beginPath();
      ctx.arc(plotRight, latestRecoilY, 7 + Math.sin(Engine.elapsed * 8) * 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(plotRight, latestRecoilY, 2.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();// 6. Top Digital HUD Readouts Bar (`0.500 ms LOCKED`, `DPC ISR: 18 µs`, `JITTER: 0.02 ms`)
      this.renderHUDHeader(ctx, w, compact, copy, primary, accent, lockRGB, dangerRGB);

      // 7. Bottom Trace Legend & Stress Banner
      this.renderHUDFooter(ctx, w, h, plotLeft, plotRight, compact, copy, primary, lockRGB, dangerRGB);

      // 8. Interactive Hover Telemetry Crosshair
      if (this.isHovered && this.hoverX >= plotLeft && this.hoverX <= plotRight) {
        this.renderHoverCrosshair(
          ctx,
          plotLeft,
          plotRight,
          plotTop,
          plotBottom,
          plotW,
          copy,
          lockRGB,
          dangerRGB
        );
      }
    }

    renderHUDHeader(ctx, w, compact, copy, primary, accent, lockRGB, dangerRGB) {
      const fontSize = compact ? 9 : 10;
      ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';

      const topY = compact ? 14 : 17;
      let cursorX = 10;

      // Badge 1: 0.500 ms LOCKED
      const badge1Text = `● ${copy.lockedBadge}`;
      const b1W = ctx.measureText(badge1Text).width + 14;
      ctx.fillStyle = rgbaStr(lockRGB, 0.14);
      ctx.strokeStyle = rgbaStr(lockRGB, 0.48);
      ctx.lineWidth = 1;
      this.roundRect(ctx, cursorX, topY - 9, b1W, 18, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = rgbaStr(lockRGB, 1);
      ctx.fillText(badge1Text, cursorX + 7, topY + 0.5);
      cursorX += b1W + 8;

      // Readout 2: DPC ISR: 18 µs
      const dpcText = `${copy.dpcLabel}: ${this.liveDpcUs} µs`;
      ctx.fillStyle = 'rgba(228, 228, 231, 0.88)';
      ctx.fillText(dpcText, cursorX, topY + 0.5);
      cursorX += ctx.measureText(dpcText).width + (compact ? 10 : 14);

      // Readout 3: JITTER: 0.02 ms
      if (!compact || w > 370) {
        const jitterText = `${copy.jitterLabel}: ${this.liveJitterMs.toFixed(2)} ms`;
        ctx.fillStyle = rgbaStr(primary, 0.92);
        ctx.fillText(jitterText, cursorX, topY + 0.5);
      }

      // Right Interactive Pill: [ CLICK: HEAVY LOAD STRESS TEST ]
      const btnLabel = this.stressMode ? copy.stressBtnActive : copy.stressBtnIdle;
      ctx.font = `600 ${compact ? 8.5 : 9}px "JetBrains Mono", monospace`;
      const btnW = ctx.measureText(btnLabel).width + 14;
      const btnX = w - btnW - 10;

      if (btnX > cursorX + 20) {
        const btnRGB = this.stressMode ? dangerRGB : primary;
        ctx.fillStyle = rgbaStr(btnRGB, this.stressMode ? 0.22 : 0.10);
        ctx.strokeStyle = rgbaStr(btnRGB, this.stressMode ? 0.75 : 0.38);
        ctx.lineWidth = 1;
        this.roundRect(ctx, btnX, topY - 9, btnW, 18, 4);
        ctx.fill();
        ctx.stroke();

        ctx.textAlign = 'right';
        ctx.fillStyle = this.stressMode ? '#fecaca' : rgbaStr(primary, 0.95);
        ctx.fillText(btnLabel, w - 17, topY + 0.5);
      }
    }

    renderHUDFooter(ctx, w, h, plotLeft, plotRight, compact, copy, primary, lockRGB, dangerRGB) {
      const bottomY = h - (compact ? 10 : 12);
      ctx.font = `500 ${compact ? 8.5 : 9}px "JetBrains Mono", monospace`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';

      if (this.stressMode) {
        ctx.fillStyle = 'rgba(248, 113, 113, 0.95)';
        ctx.fillText(`▲ ${copy.stressBanner}`, plotLeft, bottomY);
        return;
      }

      // Legend item 1: Stock trace
      ctx.strokeStyle = rgbaStr(dangerRGB, 0.85);
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(plotLeft, bottomY);
      ctx.lineTo(plotLeft + 14, bottomY);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(161, 161, 170, 0.78)';
      const stockLabel = compact ? 'STOCK 15.625ms' : copy.stockTrace;
      ctx.fillText(stockLabel, plotLeft + 19, bottomY);

      const stockLabelW = ctx.measureText(stockLabel).width;
      const leg2X = plotLeft + 19 + stockLabelW + (compact ? 14 : 22);

      if (leg2X + 100 < plotRight) {
        ctx.strokeStyle = rgbaStr(lockRGB, 0.98);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(leg2X, bottomY);
        ctx.lineTo(leg2X + 14, bottomY);
        ctx.stroke();

        ctx.fillStyle = rgbaStr(lockRGB, 0.95);
        const recoilLabel = compact ? 'RECOIL 0.500ms' : copy.recoilTrace;
        ctx.fillText(recoilLabel, leg2X + 19, bottomY);
      }
    }

    renderHoverCrosshair(ctx, plotLeft, plotRight, plotTop, plotBottom, plotW, copy, lockRGB, dangerRGB) {
      const relX = Math.max(0, Math.min(1, (this.hoverX - plotLeft) / plotW));
      const idx = Math.min(
        this.sampleCount - 1,
        Math.max(0, Math.round(relX * (this.sampleCount - 1)))
      );

      const sampleX = plotLeft + (idx / (this.sampleCount - 1)) * plotW;
      const stockVal = this.stockSamples[idx];
      const recoilVal = this.recoilSamples[idx];
      const stockY = this.msToY(stockVal, plotTop, plotBottom);
      const recoilY = this.msToY(recoilVal, plotTop, plotBottom);

      // Vertical inspection hair
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.24)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(sampleX, plotTop);
      ctx.lineTo(sampleX, plotBottom);
      ctx.stroke();
      ctx.setLineDash([]);

      // Highlight dots on both traces
      ctx.fillStyle = rgbaStr(dangerRGB, 1);
      ctx.beginPath();
      ctx.arc(sampleX, stockY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = rgbaStr(lockRGB, 1);
      ctx.beginPath();
      ctx.arc(sampleX, recoilY, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Floating telemetry readout card
      ctx.font = '600 9px "JetBrains Mono", monospace';
      const line1 = `${copy.stockReadout} ${stockVal.toFixed(2)} ms`;
      const line2 = `${copy.recoilReadout} ${recoilVal.toFixed(3)} ms (${copy.deltaSaved})`;
      const boxW = Math.max(ctx.measureText(line1).width, ctx.measureText(line2).width) + 16;
      const boxH = 34;

      let boxX = sampleX + 10;
      if (boxX + boxW > plotRight) {
        boxX = sampleX - boxW - 10;
      }
      const boxY = Math.max(plotTop + 4, Math.min(plotBottom - boxH - 4, stockY - 12));

      ctx.fillStyle = 'rgba(9, 11, 16, 0.92)';
      ctx.strokeStyle = rgbaStr(lockRGB, 0.45);
      ctx.lineWidth = 1;
      this.roundRect(ctx, boxX, boxY, boxW, boxH, 4);
      ctx.fill();
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#fca5a5';
      ctx.fillText(line1, boxX + 8, boxY + 6);
      ctx.fillStyle = rgbaStr(lockRGB, 0.98);
      ctx.fillText(line2, boxX + 8, boxY + 19);
    }

    roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }
  }

  /* ==========================================================================
     5. ENGINE ORCHESTRATION, LIFECYCLE & EVENT LISTENERS
     ========================================================================== */

  function syncTargetSkinColors(skinHint) {
    const palette = resolveActiveSkinPalette(skinHint);
    Engine.targetPrimary = palette.primary;
    Engine.targetAccent = palette.accent;
    Engine.targetAmber = palette.amber;
  }

  let oscObserver = null;
  function observeOscilloscope(canvasEl) {
    if (!canvasEl) return;

    // 1. IntersectionObserver (Primary viewport detection with 120px pre-render buffer)
    if (typeof IntersectionObserver !== 'undefined') {
      if (oscObserver) oscObserver.disconnect();
      oscObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            Engine.oscVisible = entry.isIntersecting;
          });
        },
        { rootMargin: '120px' }
      );
      oscObserver.observe(canvasEl);
    }

    // 2. contentvisibilityautostatechange (Modern web engine lifecycle integration)
    try {
      canvasEl.addEventListener('contentvisibilityautostatechange', (e) => {
        if (typeof e.skipped === 'boolean') {
          Engine.oscVisible = !e.skipped;
        }
      });
    } catch (_) {}
  }

  function tryMountOscilloscope() {
    const oscCanvas = document.getElementById('dpc-oscilloscope-canvas');
    if (oscCanvas && (!Engine.osc || Engine.osc.canvas !== oscCanvas)) {
      Engine.osc = new DPCOscilloscope(oscCanvas);
      observeOscilloscope(oscCanvas);
      if (Engine.reducedMotion) {
        Engine.osc.render();
      }
    }
  }

  function renderSingleStaticFrame() {
    Engine.currentPrimary = Engine.targetPrimary.slice();
    Engine.currentAccent = Engine.targetAccent.slice();
    Engine.currentAmber = Engine.targetAmber.slice();
    if (Engine.osc) Engine.osc.render();
  }

  function tick(now) {
    if (Engine.isHidden || Engine.reducedMotion) {
      Engine.rafId = null;
      return;
    }

    const dt = Math.min(0.05, Math.max(0.001, (now - Engine.lastTime) / 1000));
    Engine.lastTime = now;
    Engine.elapsed += dt;

    // Smoothly morph active skin colors at 60fps
    const colorLerpFactor = Math.min(1, dt * 5.5);
    lerpRGB(Engine.currentPrimary, Engine.targetPrimary, colorLerpFactor);
    lerpRGB(Engine.currentAccent, Engine.targetAccent, colorLerpFactor);
    lerpRGB(Engine.currentAmber, Engine.targetAmber, colorLerpFactor);

    // Efficient Background Processing: Pause CPU/GPU math & draw calls when off-screen
    if (Engine.osc) {
      if (Engine.oscVisible) {
        Engine.osc.update(dt);
        Engine.osc.render();
      }
    } else {
      // Check periodically if #dpc-oscilloscope-canvas was mounted dynamically
      tryMountOscilloscope();
    }

    Engine.rafId = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (Engine.reducedMotion) {
      renderSingleStaticFrame();
      return;
    }
    if (!Engine.rafId && !Engine.isHidden) {
      Engine.lastTime = performance.now();
      Engine.rafId = requestAnimationFrame(tick);
    }
  }

  function stopLoop() {
    if (Engine.rafId) {
      cancelAnimationFrame(Engine.rafId);
      Engine.rafId = null;
    }
  }

  function initCanvasFX() {
    if (Engine.initialized || !document.body) return;
    Engine.initialized = true;

    // Reduced motion query
    const motionQuery = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    Engine.reducedMotion = Boolean(motionQuery && motionQuery.matches);

    // Initialize skin palette immediately without lerp lag on boot
    syncTargetSkinColors();
    Engine.currentPrimary = Engine.targetPrimary.slice();
    Engine.currentAccent = Engine.targetAccent.slice();
    Engine.currentAmber = Engine.targetAmber.slice();

    // Instantiate Part A & Part B
    tryMountOscilloscope();

    // Viewport resize
    window.addEventListener(
      'resize',
      () => {
        if (Engine.osc) Engine.osc.resize();
        if (Engine.reducedMotion) renderSingleStaticFrame();
      },
      { passive: true }
    );

    // Pause when tab is hidden
    document.addEventListener('visibilitychange', () => {
      Engine.isHidden = document.hidden;
      if (Engine.isHidden) {
        stopLoop();
      } else {
        startLoop();
      }
    });

    // Reduced motion preference live listener
    if (motionQuery && typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', (e) => {
        Engine.reducedMotion = e.matches;
        if (Engine.reducedMotion) {
          stopLoop();
          renderSingleStaticFrame();
        } else {
          startLoop();
        }
      });
    }

    // Listen to skin changes ('recoil:skinchange')
    window.addEventListener('recoil:skinchange', (e) => {
      const hint =
        (e && e.detail && (e.detail.skin || e.detail)) || window.currentRecoilSkin || '';
      // Request next frame so CSS variables on :root / body have updated
      requestAnimationFrame(() => {
        syncTargetSkinColors(hint);
        if (Engine.reducedMotion) renderSingleStaticFrame();
      });
    });

    // Listen to bilingual language changes ('recoil:langchange')
    window.addEventListener('recoil:langchange', () => {
      if (Engine.reducedMotion) renderSingleStaticFrame();
    });

    // Watch root attribute changes (data-skin, class, style) & dynamic DOM insertion of #dpc-oscilloscope-canvas
    if (typeof MutationObserver !== 'undefined') {
      const attrObserver = new MutationObserver(() => {
        syncTargetSkinColors();
        if (Engine.reducedMotion) renderSingleStaticFrame();
      });
      attrObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-skin', 'data-theme', 'class', 'style', 'lang']
      });
      attrObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-skin', 'data-theme', 'class', 'style']
      });

      const domObserver = new MutationObserver(() => {
        if (!Engine.osc || !document.body.contains(Engine.osc.canvas)) {
          tryMountOscilloscope();
        }
      });
      domObserver.observe(document.body, { childList: true, subtree: true });
    }

    startLoop();
  }

  // Expose public controller API on window
  window.RecoilCanvasFX = {
    init: initCanvasFX,
    refreshSkin: (skinHint) => {
      syncTargetSkinColors(skinHint);
      if (Engine.reducedMotion) renderSingleStaticFrame();
    },
    toggleStressTest: (forceState) => {
      tryMountOscilloscope();
      if (Engine.osc) Engine.osc.toggleStressTest(forceState);
    },
    triggerStressTest: () => {
      tryMountOscilloscope();
      if (Engine.osc) Engine.osc.toggleStressTest(true);
    },
    setOptimizationEnabled: (enabled) => {
      tryMountOscilloscope();
      if (Engine.osc) Engine.osc.setOptimizationEnabled(enabled);
    },
    isOscilloscopeVisible: () => Engine.oscVisible,
    mountOscilloscope: tryMountOscilloscope
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCanvasFX, { once: true });
  } else {
    initCanvasFX();
  }
})();
