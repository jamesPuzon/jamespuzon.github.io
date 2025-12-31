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
        let isHoveringHeader = false;
        let navHideAmount = 0; // Pixels the nav is hidden (0 = fully visible, navHeight = fully hidden)
        
        // Check if device is mobile (width <= 768px)
        function isMobile() {
            return window.innerWidth <= 768;
        }
        
        // Get nav height
        function getNavHeight() {
            return nav.offsetHeight;
        }
        
        // Update nav transform based on hide amount
        function updateNavTransform() {
            nav.style.transform = `translateY(-${navHideAmount}px)`;
            
            if (navHideAmount >= getNavHeight()) {
                nav.style.pointerEvents = 'none';
                nav.classList.remove('nav-visible');
                nav.classList.add('nav-hidden');
            } else {
                nav.style.pointerEvents = 'auto';
                if (navHideAmount === 0) {
                    nav.classList.remove('nav-hidden');
                    nav.classList.add('nav-visible');
                }
            }
        }
        
        // Show nav (slide down)
        function showNav() {
            navHideAmount = 0;
            updateNavTransform();
        }
        
        // Hide nav (slide up)
        function hideNav() {
            navHideAmount = getNavHeight();
            updateNavTransform();
        }
        
        // Toggle menu on click
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    showNav();
                } else {
                    hideNav();
                }
            });
        }
        
        // Scroll handler with synchronized navbar hiding
        window.addEventListener('scroll', function() {
            // On mobile, nav should only be visible when menu is toggled
            if (isMobile()) {
                if (!isMenuOpen) {
                    hideNav();
                }
                lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return;
            }
            
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = scrollTop - lastScrollTop;
            
            // If menu is open via menu toggle, close it on scroll
            if (isMenuOpen && scrollDelta !== 0) {
                isMenuOpen = false;
                // Don't immediately hide, let scroll behavior handle it
            }
            
            // Don't hide if hovering over header
            if (isHoveringHeader) {
                showNav();
                lastScrollTop = scrollTop;
                return;
            }
            
            // Update hide amount based on scroll - synchronized movement
            if (scrollDelta > 0) {
                // Scrolling down - increase hide amount by scroll delta
                navHideAmount = Math.min(getNavHeight(), navHideAmount + scrollDelta);
            } else if (scrollDelta < 0) {
                // Scrolling up - decrease hide amount by scroll delta
                navHideAmount = Math.max(0, navHideAmount + scrollDelta);
            }
            
            updateNavTransform();
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
        
        // Show nav when hovering over top banner (desktop only)
        if (topBanner) {
            topBanner.addEventListener('mouseenter', function() {
                if (isMobile()) return;
                isHoveringHeader = true;
                showNav();
            });
            
            topBanner.addEventListener('mouseleave', function() {
                if (isMobile()) return;
                isHoveringHeader = false;
            });
        }
        
        // Show nav when hovering over nav itself (desktop only)
        if (nav) {
            nav.addEventListener('mouseenter', function() {
                if (isMobile()) return;
                isHoveringHeader = true;
                showNav();
            });
            
            nav.addEventListener('mouseleave', function() {
                if (isMobile()) return;
                isHoveringHeader = false;
            });
        }
        
        // Close menu when clicking below header/navbar
        document.addEventListener('click', function(e) {
            if (!isMenuOpen) return;
            
            const bannerRect = topBanner ? topBanner.getBoundingClientRect() : null;
            const navRect = nav.getBoundingClientRect();
            
            // Check if click is below both banner and nav
            const clickY = e.clientY;
            const maxY = Math.max(
                bannerRect ? bannerRect.bottom : 0,
                navRect.bottom > 0 ? navRect.bottom : 0
            );
            
            // Also check if click is outside the banner and nav elements
            const clickedBanner = topBanner && topBanner.contains(e.target);
            const clickedNav = nav && nav.contains(e.target);
            
            if (clickY > maxY && !clickedBanner && !clickedNav) {
                isMenuOpen = false;
                hideNav();
            }
        });
        
        // Close menu when clicking a nav link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMenuOpen) {
                    isMenuOpen = false;
                    hideNav();
                }
            });
        });
        
        // Initialize nav state - always start visible
        showNav();
        
        // Handle window resize with debouncing
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                if (isMobile()) {
                    // Switched to mobile - hide nav unless menu is toggled
                    if (!isMenuOpen) {
                        hideNav();
                    }
                } else {
                    // Switched to desktop - show nav if not manually closed
                    if (!isMenuOpen) {
                        showNav();
                    }
                }
            }, 100);
        });
    }
})();
