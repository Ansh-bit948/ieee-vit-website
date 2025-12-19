// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const slider = document.querySelector('.slides');

slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
});

// Contact form submission handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const domain = document.getElementById('domain').value;
    const message = document.getElementById('message').value;
    
    // Display success message
    alert(`Thank you for your interest, ${name}! We will get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
    
    // Here you can add code to send the form data to a server
    // Example: fetch('/submit-form', { method: 'POST', body: formData })
});

// Animate domain cards on scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all domain cards
document.querySelectorAll('.domain-card').forEach(card => {
    observer.observe(card);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});