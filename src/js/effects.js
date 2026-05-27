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

// ── Cursor wake (Kelvin V — path-history spread) ──────────────────────────────
//
// Each point the cursor passes through is a disturbance that spreads outward
// over time. Older points have had more time to spread, so their perpendicular
// width is greater. The accumulated pattern forms the V naturally.

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
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W; canvas.height = H;
    });

    // Each trail point stores position + the perpendicular direction at that point
    const trail = [];
    const MAX_POINTS = 90;   // how far back the wake extends
    const MAX_SPREAD = 55;   // max perpendicular width at the oldest point

    let prevX = -1, prevY = -1;

    document.addEventListener('mousemove', (e) => {
        if (prevX < 0) { prevX = e.clientX; prevY = e.clientY; return; }
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 4) return;

        // Perpendicular unit vector (90° from travel direction)
        trail.unshift({ x: e.clientX, y: e.clientY, nx: -dy / dist, ny: dx / dist });
        if (trail.length > MAX_POINTS) trail.pop();
        prevX = e.clientX;
        prevY = e.clientY;
    });

    (function loop() {
        ctx.clearRect(0, 0, W, H);

        // Faint center trail
        if (trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) ctx.lineTo(trail[i].x, trail[i].y);
            ctx.strokeStyle = 'rgba(159,252,223,0.07)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Wake arms: spread grows with age, alpha fades with age
        trail.forEach((pt, i) => {
            const t = i / MAX_POINTS;              // 0 = newest, 1 = oldest
            const spread = t * MAX_SPREAD;
            const alpha = (1 - t) * 0.5;
            if (spread < 1.5) return;

            // Wave-crest oscillation along the arms
            const wave = 1 + 0.3 * Math.sin(i * 0.5);
            const r = 1.8 * wave;
            const a = Math.min(alpha * wave, 0.65);

            ctx.beginPath();
            ctx.arc(pt.x + pt.nx * spread, pt.y + pt.ny * spread, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(159,252,223,${a})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(pt.x - pt.nx * spread, pt.y - pt.ny * spread, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(159,252,223,${a})`;
            ctx.fill();
        });

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
