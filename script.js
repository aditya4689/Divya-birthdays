/* ========================================
   Happy Birthday Divya — Interactive Scripts
   (Bootstrap version)
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---------- Floating Hearts Background ----------
    const heartsContainer = document.getElementById('hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💞', '🌹'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 12000);
    }

    setInterval(createHeart, 800);
    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 300);
    }

    // ---------- Navbar scroll effect ----------
    const navbar = document.querySelector('.navbar-custom');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn').forEach(link => {
        link.addEventListener('click', () => {
            const collapse = document.querySelector('.navbar-collapse');
            if (collapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(collapse) || new bootstrap.Collapse(collapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });

    // ---------- Typewriter Effect ----------
    const message = `My dearest Divya,

On this special day, I want you to know how incredibly grateful I am to have you in my life. You fill every day with laughter, warmth, and a love so pure that it still amazes me.

You are my best friend, my greatest adventure, and the most beautiful soul I have ever known. Watching you smile is my favorite thing in the world.

May this birthday bring you all the joy you so effortlessly give to others. I promise to stand by your side, cheer for your dreams, and love you more with every sunrise.

Happy Birthday, my love. Here's to many more years of us.`;

    const typewriterEl = document.getElementById('typewriter');
    let charIndex = 0;
    let hasStarted = false;

    function typeWriter() {
        if (charIndex < message.length) {
            typewriterEl.innerHTML = message.substring(0, charIndex + 1) + '<span class="cursor"></span>';
            charIndex++;
            setTimeout(typeWriter, 28 + Math.random() * 20);
        } else {
            typewriterEl.innerHTML = message + '<span class="cursor"></span>';
        }
    }

    const messageSection = document.getElementById('message');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                setTimeout(typeWriter, 400);
            }
        });
    }, { threshold: 0.3 });
    observer.observe(messageSection);

    // ---------- Wish cards reveal on scroll ----------
    const wishCards = document.querySelectorAll('.wish-card');
    const wishObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.2 });
    wishCards.forEach(card => wishObserver.observe(card));

    // ---------- Heart Button Counter ----------
    const heartBtn = document.getElementById('heartBtn');
    const heartsSentSpan = document.querySelector('#heartsSent span');
    let heartsCount = 0;

    heartBtn.addEventListener('click', () => {
        heartsCount++;
        heartsSentSpan.textContent = heartsCount;

        const rect = heartBtn.getBoundingClientRect();
        const flyHeart = document.createElement('div');
        flyHeart.textContent = '❤️';
        flyHeart.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top}px;
            font-size: 1.8rem;
            pointer-events: none;
            z-index: 9999;
            transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        `;
        document.body.appendChild(flyHeart);

        requestAnimationFrame(() => {
            flyHeart.style.transform = `translate(${(Math.random() - 0.5) * 120}px, -180px) scale(1.5)`;
            flyHeart.style.opacity = '0';
        });

        setTimeout(() => flyHeart.remove(), 1300);

        heartBtn.style.transform = 'scale(0.92)';
        setTimeout(() => {
            heartBtn.style.transform = '';
        }, 150);
    });

    // ---------- Gallery placeholders click hint ----------
    document.querySelectorAll('.placeholder-card').forEach(item => {
        item.addEventListener('click', () => {
            const label = item.dataset.label || 'this moment';
            alert(`📸 To add your photo for "${label}":\n\n1. Put your image in the "images" folder\n2. Replace this card with an <img> tag\n\nExample:\n<img src="images/us1.jpg" class="card-img-top" alt="${label}" style="height:220px;object-fit:cover;">\n\nThen refresh the page!`);
        });
    });
});
