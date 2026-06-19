  
    // Stars
    const starsEl = document.getElementById('stars');
    for (let i = 0; i < 70; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const size = Math.random() > 0.7 ? 3 : 2;
      s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${size}px;height:${size}px;animation-delay:${Math.random()*4}s;animation-duration:${2+Math.random()*3}s;`;
      starsEl.appendChild(s);
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    revealEls.forEach(el => {
      revealObs.observe(el);
      // Immediately reveal if already in viewport
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });

    // ── SLIDESHOW ──
    /*const carouselTrack = document.getElementById('slidesTrack');
    const slides = document.querySelectorAll('.slide');
    const total = slides.length;
    let current = 0;
    let autoTimer;

    document.querySelectorAll('.slide-dots, #slideDots').forEach(container => {
      for (let i = 0; i < total; i++) {
        const d = document.createElement('button');
        d.className = 'slide-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', `Go to slide ${i + 1}`);
        d.addEventListener('click', () => goTo(i));
        container.appendChild(d);
      }
    });

    function updateUI() {
      track.style.transform = `translateX(-${current * 100}%)`;
      slides.forEach((s, i) => s.classList.toggle('active', i === current));
      document.querySelectorAll('.slide-dot').forEach((d, i) => {
        d.classList.toggle('active', i % total === current);
      });
      document.querySelectorAll('.slide-counter, .s-counter').forEach(el => {
        el.textContent = `${current + 1} / ${total}`;
      });
    }

    function goTo(idx) {
      current = (idx + total) % total;
      updateUI();
      resetAuto();
    }

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(() => goTo(current + 1), 5000);
    }

    document.querySelectorAll('#prevBtn, .s-prev').forEach(btn => btn.addEventListener('click', () => goTo(current - 1)));
    document.querySelectorAll('#nextBtn, .s-next').forEach(btn => btn.addEventListener('click', () => goTo(current + 1)));

    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    resetAuto();
    updateUI();
    */

    // Counter animation
    function animateCount(el) {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      let val = 0;
      const inc = target / 60;
      const timer = setInterval(() => {
        val = Math.min(val + inc, target);
        el.textContent = (target >= 1000 ? Math.round(val).toLocaleString() : Math.round(val)) + suffix;
        if (val >= target) clearInterval(timer);
      }, 25);
    }
    const statObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-number[data-target]').forEach(animateCount);
          statObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    const achSection = document.getElementById('achievements');
    if (achSection) statObs.observe(achSection);
