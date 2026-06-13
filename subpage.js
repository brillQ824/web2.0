/**
 * LASTHUMAN Foundation - Subpage Internationalization
 * Synchronize language with main page
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get saved language from localStorage (same as main page)
    const currentLang = localStorage.getItem('language') || 'en';

    // Apply translations
    updateTranslations(currentLang);

    // Initialize particles effect
    initParticles();
});

/**
 * Update all translatable elements
 */
function updateTranslations(lang) {
    // Check if translations object is available
    if (typeof translations === 'undefined') {
        console.error('Translations object not found. Make sure translations.js is loaded.');
        return;
    }

    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            // Use innerHTML for translations that may contain HTML tags
            element.innerHTML = translation;
        }
    });
}

/**
 * Helper to get nested translation values
 */
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Debounce helper function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Particles Background Effect
 */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // Set canvas size to full window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', debounce(resizeCanvas, 250));

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.color = Math.random() > 0.5 ? '30, 64, 175' : '245, 158, 11';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    function createParticles() {
        const particleCount = Math.min(Math.floor(canvas.width / 10), 120);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    createParticles();
    window.addEventListener('resize', debounce(createParticles, 250));

    // Connect particles
    function connectParticles() {
        const maxDistance = 200;
        const maxDistanceSquared = maxDistance * maxDistance;

        for (let i = 0; i < particles.length; i++) {
            let connectionsDrawn = 0;
            const maxConnections = 5;

            for (let j = i + 1; j < particles.length && connectionsDrawn < maxConnections; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distanceSquared = dx * dx + dy * dy;

                if (distanceSquared < maxDistanceSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const opacity = 0.4 * (1 - distance / maxDistance);
                    ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    connectionsDrawn++;
                }
            }
        }
    }

    // Animation loop
    let isAnimating = true;
    let frameCount = 0;
    function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        frameCount++;
        if (frameCount % 2 === 0) {
            connectParticles();
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Pause animation when page is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isAnimating = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        } else {
            isAnimating = true;
            animate();
        }
    });

    animate();
}
