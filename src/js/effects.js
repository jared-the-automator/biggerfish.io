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

// ── Cursor wake (Kelvin V-wake) ───────────────────────────────────────────────

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

    const particles = [];
    let prevX = -1, prevY = -1;

    // Kelvin wake: constant ~19.47° half-angle regardless of speed
    const WAKE_ANGLE = 19.47 * Math.PI / 180;
    const cosA = Math.cos(WAKE_ANGLE);
    const sinA = Math.sin(WAKE_ANGLE);

    document.addEventListener('mousemove', (e) => {
        if (prevX < 0) { prevX = e.clientX; prevY = e.clientY; return; }

        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 6) return;

        // Backward unit vector
        const bx = -dx / dist;
        const by = -dy / dist;

        // Rotate backward by ±WAKE_ANGLE to get the two wake arms
        const speed = 1.1;
        particles.push({
            x: e.clientX, y: e.clientY,
            vx: (bx * cosA - by * sinA) * speed,
            vy: (bx * sinA + by * cosA) * speed,
            alpha: 0.5,
        });
        particles.push({
            x: e.clientX, y: e.clientY,
            vx: (bx * cosA + by * sinA) * speed,
            vy: (-bx * sinA + by * cosA) * speed,
            alpha: 0.5,
        });

        prevX = e.clientX;
        prevY = e.clientY;
    });

    (function loop() {
        ctx.clearRect(0, 0, W, H);
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.010;
            if (p.alpha <= 0) { particles.splice(i, 1); continue; }
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(159,252,223,${p.alpha})`;
            ctx.fill();
        }
        requestAnimationFrame(loop);
    })();
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
});
