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

        // Trailing sweep sectors
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

        // Sweep line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
        ctx.strokeStyle = 'rgba(159,252,223,0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Tip glow
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
});
