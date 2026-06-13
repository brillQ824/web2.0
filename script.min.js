/**
 * LASTHUMAN Foundation - Interactive JavaScript
 * Modern, accessible, and performant interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initScrollEffects();
    initAnimations();
    initContactForm();
    initSmoothScroll();
    initParticles();
    initStatCounters();
    init3DCardEffects();
    initCommunityStats();
    initLanguageSwitcher();
    // initCustomCursor(); // Function not implemented
    // initScrollProgress(); // Function not implemented
    // initFloatingElements(); // Function not implemented
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

/**
 * Scroll-based effects and active section highlighting
 */
function initScrollEffects() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    // Update active nav link on scroll
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

/**
 * Scroll-triggered animations
 */
function initAnimations() {
    const animatedElements = document.querySelectorAll(
        '.work-card, .value-item, .stat, .section-header'
    );

    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    animationObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index % 4 * 0.1}s, transform 0.6s ease ${index % 4 * 0.1}s`;
        animationObserver.observe(el);
    });

    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        try {
            await simulateFormSubmission(data);

            // Success state
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
        } catch (error) {
            // Error state
            showNotification('Sorry, there was an error. Please try again later.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Form field animations
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

/**
 * Simulate form submission (for demo purposes)
 */
function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // In production, this would be sent to a server
            resolve();
        }, 1500);
    });
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element (XSS-safe)
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const messageSpan = document.createElement('span');
    messageSpan.textContent = message; // Use textContent to prevent XSS

    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.setAttribute('aria-label', 'Close notification');
    closeButton.textContent = '×';

    notification.appendChild(messageSpan);
    notification.appendChild(closeButton);

    // Add styles
    const styles = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            opacity: 0.8;
        }
        .notification-close:hover {
            opacity: 1;
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;

    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'notification-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideInRight 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Parallax effect for hero section (subtle)
 */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}, { passive: true });

/**
 * Typing effect for hero (optional enhancement)
 */
// Performance optimization: Debounce resize events
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

// Handle resize events efficiently
window.addEventListener('resize', debounce(() => {
    // Reset mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}, 250));

/**
 * Animated Particle System
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
            // Updated colors: Navy Blue & Gold (brighter)
            this.color = Math.random() > 0.5 ? '30, 64, 175' : '245, 158, 11';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around edges
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

    // Create particles - OPTIMIZED for performance
    function createParticles() {
        // Reduce particle count for better performance (50-120 instead of 200)
        const particleCount = Math.min(Math.floor(canvas.width / 10), 120);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    createParticles();
    window.addEventListener('resize', debounce(createParticles, 250));

    // Connect particles - OPTIMIZED with distance check first
    function connectParticles() {
        const maxDistance = 200;
        const maxDistanceSquared = maxDistance * maxDistance; // Avoid sqrt for performance

        for (let i = 0; i < particles.length; i++) {
            let connectionsDrawn = 0;
            const maxConnections = 5; // Limit connections per particle

            for (let j = i + 1; j < particles.length && connectionsDrawn < maxConnections; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distanceSquared = dx * dx + dy * dy;

                if (distanceSquared < maxDistanceSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const opacity = 0.4 * (1 - distance / maxDistance);
                    // Updated to Navy Blue
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

    // Animation loop with performance optimization
    let isAnimating = true;
    let frameCount = 0;
    function animate() {
        if (!isAnimating) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Only draw connections every other frame for better performance
        frameCount++;
        if (frameCount % 2 === 0) {
            connectParticles();
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Pause animation when page is hidden (performance optimization)
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

    // Start animation immediately - now visible on entire page
    animate();

    // Update canvas size on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Animated Statistics Counters
 */
function initStatCounters() {
    const stats = [
        { element: document.querySelectorAll('.stat')[0], endValue: 50, suffix: '+', label: 'Countries' },
        { element: document.querySelectorAll('.stat')[1], endValue: 200, suffix: '+', label: 'Experts' },
        { element: document.querySelectorAll('.stat')[2], endValue: 15, suffix: '+', label: 'Disciplines' }
    ];

    stats.forEach((stat, index) => {
        if (!stat.element) return;

        const statLabel = stat.element.querySelector('.stat-label');
        if (!statLabel) return;

        // Create number display
        const numberEl = document.createElement('div');
        numberEl.className = 'stat-number';
        numberEl.style.cssText = `
            font-family: var(--font-heading);
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--color-accent-light);
            margin-bottom: 0.5rem;
        `;
        numberEl.textContent = '0';
        stat.element.querySelector('.stat-icon').after(numberEl);

        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    animateCounter(numberEl, 0, stat.endValue, stat.suffix, 2000);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat.element);
    });

    function animateCounter(element, start, end, suffix, duration) {
        const startTime = performance.now();
        const range = end - start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + range * easeOutQuart);

            element.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
}

/**
 * Language Switcher and i18n
 */
function initLanguageSwitcher() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');
    const langOptions = document.querySelectorAll('.lang-option');

    // Get saved language or default to English
    let currentLang = localStorage.getItem('language') || 'en';

    // Toggle dropdown
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });

    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });

    // Set language function
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update current language display
        currentLangSpan.textContent = lang.toUpperCase();

        // Highlight active language
        langOptions.forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
        });

        // Update all translatable elements
        updateTranslations(lang);
    }

    // Update translations on page
    function updateTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);

            if (translation) {
                // Use innerHTML for translations that contain HTML tags (like <strong>)
                element.innerHTML = translation;
            }
        });
    }

    // Helper to get nested translation values
    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }

    // Initialize with saved or default language
    setLanguage(currentLang);
}

/**
 * 3D Card Tilt Effect
 */
function init3DCardEffects() {
    const cards = document.querySelectorAll('.work-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
    }

    function handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = '';
    }
}

/**
 * Community Stats Counter Animation
 */
function initCommunityStats() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');

    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let hasAnimated = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    animateCommunityCounter(stat, 0, target, 2500);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(stat);
    });

    function animateCommunityCounter(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function - ease out cubic
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + range * easeOutCubic);

            // Format number with commas for thousands
            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                // Add + suffix for final value if needed
                if (end >= 1000) {
                    element.textContent = (end / 1000) + 'K+';
                } else {
                    element.textContent = end + '+';
                }
            }
        }

        requestAnimationFrame(update);
    }
}
