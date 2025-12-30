// Navigation functionality for sticky banner and menu toggle
(function() {
    // Add has-banner class to body if not on home page
    const isHomePage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' ||
                       window.location.pathname.endsWith('/');
    
    if (!isHomePage) {
        document.body.classList.add('has-banner');
        
        const nav = document.getElementById('main-nav');
        const menuToggle = document.getElementById('menu-toggle');
        const topBanner = document.querySelector('.top-banner');
        
        let lastScrollTop = 0;
        let isMenuOpen = false;
        let isHoveringBanner = false;
        
        // Toggle menu on click
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    nav.classList.remove('nav-hidden');
                    nav.classList.add('nav-visible');
                } else {
                    nav.classList.remove('nav-visible');
                    nav.classList.add('nav-hidden');
                }
            });
        }
        
        // Show/hide nav on scroll
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                // Don't hide if menu is open via menu toggle
                if (isMenuOpen) {
                    return;
                }
                
                // Don't hide if hovering over banner
                if (isHoveringBanner) {
                    nav.classList.remove('nav-hidden');
                    nav.classList.add('nav-visible');
                    return;
                }
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down - hide nav
                    nav.classList.remove('nav-visible');
                    nav.classList.add('nav-hidden');
                } else if (scrollTop < lastScrollTop) {
                    // Scrolling up - show nav
                    nav.classList.remove('nav-hidden');
                    nav.classList.add('nav-visible');
                }
                
                lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            }, 100);
        });
        
        // Show nav when hovering over top banner
        if (topBanner) {
            topBanner.addEventListener('mouseenter', function() {
                isHoveringBanner = true;
                nav.classList.remove('nav-hidden');
                nav.classList.add('nav-visible');
            });
            
            topBanner.addEventListener('mouseleave', function() {
                isHoveringBanner = false;
                // Hide again if scrolled down and menu not toggled
                if (!isMenuOpen) {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop > 100) {
                        nav.classList.remove('nav-visible');
                        nav.classList.add('nav-hidden');
                    }
                }
            });
        }
        
        // Show nav when hovering over nav itself
        if (nav) {
            nav.addEventListener('mouseenter', function() {
                isHoveringBanner = true;
                nav.classList.remove('nav-hidden');
                nav.classList.add('nav-visible');
            });
            
            nav.addEventListener('mouseleave', function() {
                isHoveringBanner = false;
            });
        }
        
        // Close menu when clicking a nav link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                nav.classList.remove('nav-visible');
                nav.classList.add('nav-hidden');
            });
        });
        
        // Initialize nav as visible
        nav.classList.add('nav-visible');
    }
})();
