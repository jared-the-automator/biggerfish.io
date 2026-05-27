const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Radar sweep canvas ────────────────────────────────────────────────────────

function initRadarSweep() {
    if (reducedMotion) return;

    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.width = 900;
    canvas.height = 900;
    Object.assign(canvas.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        height: '900px',
        pointerEvents: 'none',
        zIndex: '1',
    });

    const sonarRings = hero.querySelector('.sonar-rings');
    sonarRings ? hero.insertBefore(canvas, sonarRings) : hero.prepend(canvas);

    const ctx = canvas.getContext('2d');
    const cx = 450, cy = 450, maxR = 415;
    let angle = -Math.PI / 2;
    const TRAIL = Math.PI * 0.44;
    const STEPS = 22;
    const SPEED = 0.0065;

    function draw() {
        ctx.clearRect(0, 0, 900, 900);

        for (let i = STEPS; i >= 1; i--) {
            const a0 = angle - TRAIL * ((i - 1) / STEPS);
            const a1 = angle - TRAIL * (i / STEPS);
            const alpha = (1 - (i - 1) / STEPS) * 0.11;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, maxR, a1, a0);
            ctx.closePath();
            ctx.fillStyle = `rgba(159,252,223,${alpha})`;
            ctx.fill();
        }

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
        ctx.strokeStyle = 'rgba(159,252,223,0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const tx = cx + Math.cos(angle) * maxR;
        const ty = cy + Math.sin(angle) * maxR;
        const grd = ctx.createRadialGradient(tx, ty, 0, tx, ty, 8);
        grd.addColorStop(0, 'rgba(159,252,223,0.3)');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(tx, ty, 8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        angle += SPEED;
    }

    (function loop() { draw(); requestAnimationFrame(loop); })();
}

// ── Cursor wake ───────────────────────────────────────────────────────────────

function initCursorWake() {
    if (reducedMotion) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const canvas = document.createElement('canvas');
    Object.assign(canvas.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        pointerEvents: 'none',
        zIndex: '9997',
    });
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    window.addEventListener('resize', () => {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    });

    const ripples = [];
    let lastX = -1, lastY = -1;

    document.addEventListener('mousemove', (e) => {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        if (Math.sqrt(dx * dx + dy * dy) > 10) {
            ripples.push({ x: e.clientX, y: e.clientY, r: 1, alpha: 0.45 });
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    (function loop() {
        ctx.clearRect(0, 0, W, H);
        for (let i = ripples.length - 1; i >= 0; i--) {
            const p = ripples[i];
            p.r += 1.4;
            p.alpha -= 0.014;
            if (p.alpha <= 0) { ripples.splice(i, 1); continue; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(159,252,223,${p.alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        requestAnimationFrame(loop);
    })();
}

// ── Rolling text wave ─────────────────────────────────────────────────────────

function initTextWave(selector) {
    if (reducedMotion) return;
    document.querySelectorAll(selector).forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        text.split('').forEach((ch, i) => {
            if (ch === ' ') {
                el.appendChild(document.createTextNode(' '));
            } else {
                const span = document.createElement('span');
                span.className = 'wave-char';
                span.style.animationDelay = `${(i * 0.065).toFixed(3)}s`;
                span.textContent = ch;
                el.appendChild(span);
            }
        });
    });
}

// ── Intersection Observer reveal ──────────────────────────────────────────────

function initRevealAnimations() {
    if (reducedMotion) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

    document.querySelectorAll('.section-container, .captain-plate').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initRadarSweep();
    initRevealAnimations();
    initCursorWake();
    initTextWave('.brand-name');
});
