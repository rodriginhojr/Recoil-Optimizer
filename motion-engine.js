/**
 * ============================================================================
 * RECOIL OPTIMIZER — 3D TILT, SPOTLIGHT & SCROLL CHOREOGRAPHY ENGINE
 * File: motion-engine.js
 * ============================================================================
 */

(function () {
  'use strict';

  const SPOTLIGHT_SELECTOR = [
    '.feature-card',
    '.download-card',
    '.metric-box',
    '.tweak-card',
    '.agent-card',
    '.os-card',
    '.app-window',
    '.spotlight-card'
  ].join(', ');

  const TILT_SELECTOR = '.feature-card, .download-card';
  const MAGNETIC_SELECTOR = '.btn-primary, .btn-nav-download';
  const REVEAL_CLASS_LIST = ['reveal-up', 'reveal-scale', 'reveal-left', 'reveal-right'];
  const AUTO_REVEAL_SELECTOR = [
    '.feature-card',
    '.download-card',
    '.metric-box',
    '.tweak-card',
    '.agent-card',
    '.os-card',
    '.app-window',
    '.section-header',
    '.hero-badges',
    '.telemetry-strip'
  ].join(', ');

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

  let prefersReducedMotion = reducedMotionQuery.matches;
  let isCoarsePointer = coarsePointerQuery.matches;

  // Track registered elements to guarantee idempotency across refreshRecoilMotion() calls
  const tiltRegistry = new WeakSet();
  const magneticRegistry = new WeakSet();
  const revealRegistry = new WeakSet();
  const countRegistry = new WeakSet();

  let spotlightCards = [];
  let laserBar = null;
  let scrollTicking = false;
  let pointerTicking = false;
  let lastPointerX = window.innerWidth * 0.5;
  let lastPointerY = window.innerHeight * 0.35;

  let revealObserver = null;
  let countObserver = null;

  /* --------------------------------------------------------------------------
     1. TOP VIEWPORT SCROLL PROGRESS LASER BAR (ELIMINATED PER USER DIRECTIVE)
     -------------------------------------------------------------------------- */
  function initScrollLaserBar() {
    const existing = document.getElementById('scroll-laser-bar');
    if (existing) {
      existing.remove();
    }
    laserBar = null;
  }

  function updateScrollLaserBar() {
    scrollTicking = false;
  }

  function onWindowScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollLaserBar);
    }
  }

  /* --------------------------------------------------------------------------
     2. GLOBAL MOUSE SPOTLIGHT TRACKING (--mouse-x, --mouse-y)
     -------------------------------------------------------------------------- */
  function collectSpotlightCards() {
    spotlightCards = Array.from(document.querySelectorAll(SPOTLIGHT_SELECTOR));
  }

  function updateSpotlights() {
    pointerTicking = false;
    if (prefersReducedMotion || isCoarsePointer || spotlightCards.length === 0) return;

    const viewportH = window.innerHeight;
    const proximityRadius = 200;

    for (let i = 0; i < spotlightCards.length; i++) {
      const card = spotlightCards[i];
      if (!card.isConnected) continue;

      const rect = card.getBoundingClientRect();
      // Skip off-screen cards for 60fps+ performance
      if (rect.bottom < -120 || rect.top > viewportH + 120) {
        continue;
      }

      const relX = lastPointerX - rect.left;
      const relY = lastPointerY - rect.top;

      card.style.setProperty('--mouse-x', `${relX.toFixed(1)}px`);
      card.style.setProperty('--mouse-y', `${relY.toFixed(1)}px`);

      // Calculate shortest distance from pointer to card bounding box
      const dx = Math.max(rect.left - lastPointerX, 0, lastPointerX - rect.right);
      const dy = Math.max(rect.top - lastPointerY, 0, lastPointerY - rect.bottom);
      const distance = Math.hypot(dx, dy);

      if (distance === 0) {
        card.style.setProperty('--spotlight-opacity', '1');
        card.style.setProperty('--border-spotlight-opacity', '0.95');
      } else if (distance < proximityRadius) {
        const proximityFactor = 1 - distance / proximityRadius;
        card.style.setProperty('--spotlight-opacity', (proximityFactor * 0.22).toFixed(3));
        card.style.setProperty('--border-spotlight-opacity', (proximityFactor * 0.62).toFixed(3));
      } else {
        card.style.setProperty('--spotlight-opacity', '0');
        card.style.setProperty('--border-spotlight-opacity', '0');
      }
    }
  }

  function onGlobalPointerMove(e) {
    lastPointerX = e.clientX;
    lastPointerY = e.clientY;

    if (!pointerTicking) {
      pointerTicking = true;
      window.requestAnimationFrame(updateSpotlights);
    }
  }

  /* --------------------------------------------------------------------------
     3. 3D PERSPECTIVE TILT ON HOVER (.feature-card, .download-card)
     -------------------------------------------------------------------------- */
  function bindTiltCards() {
    const cards = document.querySelectorAll(TILT_SELECTOR);

    cards.forEach((card) => {
      if (tiltRegistry.has(card)) return;
      tiltRegistry.add(card);
      card.classList.add('recoil-tilt-ready');

      let tiltRaf = null;

      const handleMove = (e) => {
        if (prefersReducedMotion || isCoarsePointer) return;

        const rect = card.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const normX = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        const normY = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));

        const maxTilt = 6.0;
        const liftY = -4;
        const scale = 1.012;

        // RotateX tilts toward/away from user based on Y; RotateY tilts left/right based on X
        const rotateX = (0.5 - normY) * (maxTilt * 2);
        const rotateY = (normX - 0.5) * (maxTilt * 2);

        if (tiltRaf) cancelAnimationFrame(tiltRaf);
        tiltRaf = requestAnimationFrame(() => {
          card.classList.add('recoil-tilt-active');
          card.style.transform = `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, ${liftY}px, 0) scale3d(${scale}, ${scale}, 1)`;
        });
      };

      const handleLeave = () => {
        if (tiltRaf) cancelAnimationFrame(tiltRaf);
        card.classList.remove('recoil-tilt-active');
        card.style.transform = '';
      };

      card.addEventListener('mouseenter', handleMove, { passive: true });
      card.addEventListener('mousemove', handleMove, { passive: true });
      card.addEventListener('mouseleave', handleLeave, { passive: true });
    });
  }

  /* --------------------------------------------------------------------------
     4. MAGNETIC PULL EFFECT FOR PRIMARY CTA BUTTONS (.btn-primary, .btn-nav-download)
     -------------------------------------------------------------------------- */
  function bindMagneticButtons() {
    const buttons = document.querySelectorAll(MAGNETIC_SELECTOR);

    buttons.forEach((btn) => {
      if (magneticRegistry.has(btn)) return;
      magneticRegistry.add(btn);

      let magRaf = null;

      const handleMove = (e) => {
        if (prefersReducedMotion || isCoarsePointer) return;

        const rect = btn.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const centerX = rect.left + rect.width * 0.5;
        const centerY = rect.top + rect.height * 0.5;

        const deltaX = (e.clientX - centerX) * 0.28;
        const deltaY = (e.clientY - centerY) * 0.34;

        if (magRaf) cancelAnimationFrame(magRaf);
        magRaf = requestAnimationFrame(() => {
          btn.classList.add('recoil-magnetic-active');
          btn.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;
        });
      };

      const handleLeave = () => {
        if (magRaf) cancelAnimationFrame(magRaf);
        btn.classList.remove('recoil-magnetic-active');
        btn.style.transform = '';
      };

      btn.addEventListener('mouseenter', handleMove, { passive: true });
      btn.addEventListener('mousemove', handleMove, { passive: true });
      btn.addEventListener('mouseleave', handleLeave, { passive: true });
    });
  }

  /* --------------------------------------------------------------------------
     5. INTERSECTION OBSERVER SCROLL REVEAL CHOREOGRAPHY
     -------------------------------------------------------------------------- */
  function hasRevealClass(el) {
    for (let i = 0; i < REVEAL_CLASS_LIST.length; i++) {
      if (el.classList.contains(REVEAL_CLASS_LIST[i])) return true;
    }
    return false;
  }

  function revealElement(el) {
    el.classList.add('is-revealed', 'revealed');
  }

  function ensureRevealObserver() {
    if (revealObserver || !('IntersectionObserver' in window)) return;

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            revealElement(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -45px 0px',
        threshold: 0.08
      }
    );
  }

  function bindScrollReveals() {
    ensureRevealObserver();

    // Auto-assign .reveal-up and sibling stagger to cards & section blocks if not already tagged
    const autoTargets = document.querySelectorAll(AUTO_REVEAL_SELECTOR);
    autoTargets.forEach((el) => {
      if (!hasRevealClass(el) && !el.hasAttribute('data-no-reveal')) {
        el.classList.add('reveal-up');
      }
    });

    // Calculate clean stagger delays for siblings inside grid containers
    const allRevealNodes = document.querySelectorAll(
      '.reveal-up, .reveal-scale, .reveal-left, .reveal-right'
    );

    allRevealNodes.forEach((el) => {
      if (revealRegistry.has(el)) return;
      revealRegistry.add(el);

      if (prefersReducedMotion) {
        revealElement(el);
        return;
      }

      // Compute natural stagger index among unrevealed siblings in the same parent container
      if (!el.style.getPropertyValue('--reveal-delay') && el.parentElement) {
        const siblings = Array.from(el.parentElement.children).filter((child) =>
          hasRevealClass(child)
        );
        const index = siblings.indexOf(el);
        if (index > 0 && siblings.length > 1) {
          const delayMs = Math.min((index % 6) * 70, 350);
          el.style.setProperty('--reveal-delay', `${delayMs}ms`);
        }
      }

      // Immediately reveal if already visible in or above current viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
        revealElement(el);
      } else if (revealObserver) {
        revealObserver.observe(el);
      } else {
        revealElement(el);
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. ANIMATED NUMBER COUNT-UP FOR [data-count-to]
     -------------------------------------------------------------------------- */
  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function parseCounterConfig(el) {
    const rawTarget = String(el.getAttribute('data-count-to') || '0').trim();
    const cleanedNumeric = rawTarget.replace(/[^0-9.-]/g, '');
    const targetValue = parseFloat(cleanedNumeric);

    if (Number.isNaN(targetValue)) return null;

    if (!el.hasAttribute('data-initial-counter-text')) {
      el.setAttribute('data-initial-counter-text', (el.textContent || '').trim());
    }
    const initialText = el.getAttribute('data-initial-counter-text') || (el.textContent || '').trim();

    // Determine decimal places (supporting both data-decimals and data-count-decimals)
    const rawDecimals = el.getAttribute('data-decimals') ?? el.getAttribute('data-count-decimals');
    let decimals = 0;
    if (rawDecimals !== null) {
      decimals = parseInt(rawDecimals, 10) || 0;
    } else {
      const targetDecimals = cleanedNumeric.includes('.') ? cleanedNumeric.split('.')[1].length : 0;
      const textDecMatch = initialText.match(/\d+\.(\d+)/);
      const textDecimals = textDecMatch ? textDecMatch[1].length : 0;
      decimals = Math.max(targetDecimals, textDecimals);
    }

    // Extract optional prefix & suffix (supporting both data-prefix/suffix and data-count-prefix/suffix)
    let prefix = el.getAttribute('data-prefix') ?? el.getAttribute('data-count-prefix');
    let suffix = el.getAttribute('data-suffix') ?? el.getAttribute('data-count-suffix');

    if (prefix === null) {
      const leadMatch = rawTarget.match(/^[^\d-]+/) || initialText.match(/^[^\d-]+/);
      prefix = leadMatch ? leadMatch[0] : '';
    }
    if (suffix === null) {
      const trailMatch = rawTarget.match(/[^\d.]+$/) || initialText.match(/[^\d.]+$/);
      suffix = trailMatch ? trailMatch[0] : '';
    }

    const startValue = parseFloat(el.getAttribute('data-count-from') || '0') || 0;
    const duration = parseInt(el.getAttribute('data-count-duration') || '1650', 10);

    return {
      targetValue,
      startValue,
      decimals,
      prefix,
      suffix,
      duration
    };
  }

  function animateCounter(el) {
    const config = parseCounterConfig(el);
    if (!config) return;

    const { targetValue, startValue, decimals, prefix, suffix, duration } = config;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${targetValue.toFixed(decimals)}${suffix}`;
      return;
    }

    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutExpo(progress);
      const current = startValue + (targetValue - startValue) * eased;

      el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${targetValue.toFixed(decimals)}${suffix}`;
      }
    }

    window.requestAnimationFrame(tick);
  }

  function ensureCountObserver() {
    if (countObserver || !('IntersectionObserver' in window)) return;

    countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            animateCounter(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -25px 0px',
        threshold: 0.15
      }
    );
  }

  function bindCounters(forceReplay = false) {
    ensureCountObserver();

    const counters = document.querySelectorAll('[data-count-to]');
    counters.forEach((el) => {
      if (countRegistry.has(el) && !forceReplay) return;
      countRegistry.add(el);

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        animateCounter(el);
      } else if (countObserver) {
        countObserver.observe(el);
      } else {
        animateCounter(el);
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. PUBLIC API: window.refreshRecoilMotion() & LIFECYCLE HOOKS
     -------------------------------------------------------------------------- */
  function refreshRecoilMotion() {
    initScrollLaserBar();
    collectSpotlightCards();
    bindTiltCards();
    bindMagneticButtons();
    bindScrollReveals();
    bindCounters(false);
    updateScrollLaserBar();
  }

  // Expose globally for dynamically mounted sections
  window.refreshRecoilMotion = refreshRecoilMotion;

  function bootMotionEngine() {
    refreshRecoilMotion();

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('resize', onWindowScroll, { passive: true });
    window.addEventListener('pointermove', onGlobalPointerMove, { passive: true });

    // Listen to custom bilingual & skin-switching events
    window.addEventListener('recoil:langchange', () => {
      window.requestAnimationFrame(() => {
        refreshRecoilMotion();
        bindCounters(true);
      });
    });

    window.addEventListener('recoil:skinchange', () => {
      window.requestAnimationFrame(() => {
        refreshRecoilMotion();
        updateSpotlights();
      });
    });

    // Listen for accessibility preference changes
    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', (e) => {
        prefersReducedMotion = e.matches;
        if (prefersReducedMotion) {
          document
            .querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right')
            .forEach(revealElement);
        }
      });
    }

    // Observe DOM mutations so dynamically rendered sections automatically register
    if (document.body && 'MutationObserver' in window) {
      let mutationRaf = null;
      const domObserver = new MutationObserver((mutations) => {
        let hasAddedElements = false;
        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes && mutations[i].addedNodes.length > 0) {
            hasAddedElements = true;
            break;
          }
        }
        if (hasAddedElements && !mutationRaf) {
          mutationRaf = window.requestAnimationFrame(() => {
            mutationRaf = null;
            refreshRecoilMotion();
          });
        }
      });

      domObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootMotionEngine, { once: true });
  } else {
    bootMotionEngine();
  }

  window.addEventListener('load', () => {
    refreshRecoilMotion();
  });
})();
