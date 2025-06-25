 // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const closeMenuBtn = document.querySelector('.close-menu');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.overlay');
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenuBtn.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Scroll animations with Intersection Observer
        document.addEventListener('DOMContentLoaded', () => {
            const fadeElements = document.querySelectorAll('.fade-element');
            
            // Options for the observer
            const options = {
                threshold: 0.15, // Trigger when 15% of element is visible
                rootMargin: '0px 0px -50px 0px' // Adjust when elements become visible
            };
            
            // Create the observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        // Remove this else block if you don't want fade-out effect
                        entry.target.classList.remove('visible');
                    }
                });
            }, options);
            
            // Observe each element
            fadeElements.forEach(el => {
                observer.observe(el);
            });
            
            // Immediately show elements that are already in view
            window.addEventListener('load', () => {
                fadeElements.forEach(el => {
                    const rect = el.getBoundingClientRect();
                    const isVisible = (
                        rect.top <= window.innerHeight * 0.85 &&
                        rect.bottom >= window.innerHeight * 0.15
                    );
                    
                    if (isVisible) {
                        el.classList.add('visible');
                    }
                });
            });
        });
        
        // Hover effects for property cards
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            });
        });