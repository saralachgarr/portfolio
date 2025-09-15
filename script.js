// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = 'none';
    }
  });
  
  // Form submission
  const contactForm = document.getElementById('messageForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would normally handle form submission with AJAX
      alert('Merci pour votre message ! Je vous répondrai très bientôt.');
      this.reset();
    });
  }
  
  // Animate elements on scroll
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animation
  const animatedElements = document.querySelectorAll('.project-card, .skill-category, .contact-item');
  animatedElements.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  // Trigger once on load
  animateOnScroll();
});