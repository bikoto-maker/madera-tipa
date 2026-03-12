// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// CTA Button Scroll to Products
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#galeria').scrollIntoView({ behavior: 'smooth' });
    });
}

// Form Submission
const contactForm = document.querySelector('.contacto-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        
        // Show success message
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all gallery items and product cards
document.querySelectorAll('.galeria-item, .producto-card, .caracteristica, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add active class to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth Scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Image lazy loading (if needed)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
    });
});

// Form validation
const formInputs = document.querySelectorAll('.contacto-form input, .contacto-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email' && input.value) {
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
            input.style.borderColor = isValid ? '#2C5F2D' : '#e74c3c';
        } else if (input.value) {
            input.style.borderColor = '#8B4513';
        }
    });
});

// Efecto de parpadeo en elementos al hover
document.querySelectorAll('.producto-card, .galeria-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// Colores dinámicos para los botones
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
    });
});

// Log analytics (optional)
console.log('Tipa - Madera de Bolivia - Website Loaded Successfully');
console.log('Version: 2.0 - Enhanced Design with FOB Exports');
console.log('Export Method: FOB Bolivia');
