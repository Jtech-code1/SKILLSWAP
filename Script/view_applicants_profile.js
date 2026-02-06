// User Profile Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Search Toggle
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const mobileSearchBar = document.getElementById('mobileSearchBar');
    
    if (mobileSearchToggle && mobileSearchBar) {
        mobileSearchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileSearchBar.classList.toggle('hidden');
            mobileSearchBar.classList.add('mobile-menu-enter');
        });
    }
    
    // Profile Picture Upload Functionality
    const uploadBtn = document.getElementById('uploadBtn');
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePreview = document.getElementById('profilePreview');
    const profileIcon = document.getElementById('profileIcon');
    
    if (uploadBtn && profilePictureInput) {
        uploadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            profilePictureInput.click();
        });
        
        profilePictureInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePreview.src = event.target.result;
                    profilePreview.classList.remove('hidden');
                    profileIcon.classList.add('hidden');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Edit Skills Button Functionality
    const editSkillsBtn = document.getElementById('editSkillsBtn');
    const skillsContainer = document.getElementById('skillsContainer');
    
    if (editSkillsBtn) {
        editSkillsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const newSkill = prompt('Enter a new skill:');
            if (newSkill && newSkill.trim() !== '') {
                const skillTag = document.createElement('span');
                skillTag.className = 'px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm cursor-pointer hover:bg-teal-200';
                skillTag.textContent = newSkill.trim();
                
                // Add click to remove functionality
                skillTag.addEventListener('click', function() {
                    if (confirm('Remove this skill?')) {
                        skillTag.remove();
                    }
                });
                
                skillsContainer.appendChild(skillTag);
            }
        });
    }
    
    // Add remove functionality to existing skills
    const existingSkills = skillsContainer.querySelectorAll('span');
    existingSkills.forEach(skill => {
        skill.classList.add('cursor-pointer', 'hover:bg-teal-200');
        skill.addEventListener('click', function() {
            if (confirm('Remove this skill?')) {
                skill.remove();
            }
        });
    });
    
    // Responsive handling for touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // Add touch-friendly classes
        document.body.classList.add('touch-device');
        
        // Increase tap target size for small buttons
        const smallButtons = document.querySelectorAll('button, a, .cursor-pointer');
        smallButtons.forEach(btn => {
            if (!btn.classList.contains('min-h-12')) {
                btn.style.minHeight = '44px'; // iOS recommended tap target size
            }
        });
    }
    
    // Handle orientation changes
    let previousOrientation = window.orientation;
    
    window.addEventListener('orientationchange', function() {
        const currentOrientation = window.orientation;
        
        // Collapse mobile search on orientation change
        if (mobileSearchBar && !mobileSearchBar.classList.contains('hidden')) {
            mobileSearchBar.classList.add('hidden');
        }
        
        // Scroll to top smoothly
        if (previousOrientation !== currentOrientation) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        previousOrientation = currentOrientation;
    });
    
    // Viewport height fix for mobile browsers (especially iOS Safari)
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Update Profile Button Handler
    const updateProfileBtn = document.getElementById('updateProfileBtn');
    if (updateProfileBtn) {
        updateProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get all form data
            const fullName = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const gender = document.querySelector('select').value;
            const phone = document.querySelector('input[type="tel"]').value;
            const bio = document.querySelector('textarea').value;
            
            // Validation
            if (!fullName || !email || !phone) {
                alert('Please fill in all required fields!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
            }
            
            // Phone validation (basic)
            if (phone.length < 10) {
                alert('Please enter a valid phone number!');
                return;
            }
            
            // Show success message
            alert('Profile updated successfully!');
            
            // Optional: You can add API call here to save data
            console.log('Profile Data:', {
                fullName,
                email,
                gender,
                phone,
                bio
            });
        });
    }
    
    // Cancel Button Handler
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
                // Reset form or redirect
                window.location.reload();
            }
        });
    }
    
    // Auto-save functionality (optional)
    let autoSaveTimeout;
    const formInputs = document.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Clear previous timeout
            clearTimeout(autoSaveTimeout);
            
            // Set new timeout for auto-save
            autoSaveTimeout = setTimeout(function() {
                console.log('Auto-saving draft...');
                // You can implement local storage or API call here
                localStorage.setItem('profileDraft', JSON.stringify({
                    timestamp: new Date().toISOString(),
                    data: 'Form data here'
                }));
            }, 2000); // Auto-save after 2 seconds of no input
        });
    });
    
    // Load draft from localStorage on page load
    const savedDraft = localStorage.getItem('profileDraft');
    if (savedDraft) {
        console.log('Draft found:', savedDraft);
        // You can restore the draft data here if needed
    }
    
    // Form field validations
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.classList.add('border-red-500');
                this.classList.remove('border-gray-300');
            } else {
                this.classList.remove('border-red-500');
                this.classList.add('border-gray-300');
            }
        });
    }
    
    const phoneInput = document.querySelector('input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Remove non-numeric characters except +
            this.value = this.value.replace(/[^\d+]/g, '');
        });
        
        phoneInput.addEventListener('blur', function() {
            if (this.value && this.value.length < 10) {
                this.classList.add('border-red-500');
                this.classList.remove('border-gray-300');
            } else {
                this.classList.remove('border-red-500');
                this.classList.add('border-gray-300');
            }
        });
    }
    
    // Character counter for bio
    const bioTextarea = document.querySelector('textarea');
    if (bioTextarea) {
        const maxLength = 500;
        
        // Create character counter element
        const counterDiv = document.createElement('div');
        counterDiv.className = 'text-sm text-gray-500 text-right mt-1';
        counterDiv.textContent = `${bioTextarea.value.length}/${maxLength}`;
        bioTextarea.parentNode.insertBefore(counterDiv, bioTextarea.nextSibling);
        
        bioTextarea.addEventListener('input', function() {
            const currentLength = this.value.length;
            counterDiv.textContent = `${currentLength}/${maxLength}`;
            
            if (currentLength > maxLength) {
                counterDiv.classList.add('text-red-500');
                this.classList.add('border-red-500');
            } else {
                counterDiv.classList.remove('text-red-500');
                this.classList.remove('border-red-500');
            }
        });
    }
    
    // Handle notification bell click
    const notificationBell = document.querySelector('.fa-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', function() {
            alert('No new notifications');
        });
    }
    
    // Handle message icon click
    const messageIcon = document.querySelector('.fa-comment');
    if (messageIcon && !messageIcon.closest('a')) {
        messageIcon.addEventListener('click', function() {
            window.location.href = 'messaging.html';
        });
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            updateProfileBtn.click();
        }
        
        // Escape to cancel
        if (e.key === 'Escape') {
            // Close mobile search first if open
            if (mobileSearchBar && !mobileSearchBar.classList.contains('hidden')) {
                mobileSearchBar.classList.add('hidden');
            } else {
                cancelBtn.click();
            }
        }
    });
    
    // Prevent double-tap zoom on buttons (iOS)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
    });
    
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Lazy load images for better performance
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Network status indicator
    function updateOnlineStatus() {
        const isOnline = navigator.onLine;
        if (!isOnline) {
            // Show offline notification
            const offlineNotice = document.createElement('div');
            offlineNotice.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm';
            offlineNotice.textContent = 'You are offline. Changes will be saved locally.';
            offlineNotice.id = 'offline-notice';
            document.body.appendChild(offlineNotice);
        } else {
            const notice = document.getElementById('offline-notice');
            if (notice) {
                notice.remove();
            }
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Warn before leaving page with unsaved changes
    let formChanged = false;
    formInputs.forEach(input => {
        input.addEventListener('change', function() {
            formChanged = true;
        });
    });
    
    window.addEventListener('beforeunload', function(e) {
        if (formChanged) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });
    
    // Reset formChanged flag when form is submitted
    updateProfileBtn.addEventListener('click', function() {
        formChanged = false;
    });
    
    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Hide/show header on scroll (mobile only)
            if (window.innerWidth < 768) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling up
                    header.style.transform = 'translateY(0)';
                }
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, 100);
    });
    
    // Close mobile search when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileSearchBar && !mobileSearchBar.classList.contains('hidden')) {
            if (!mobileSearchBar.contains(e.target) && e.target !== mobileSearchToggle) {
                mobileSearchBar.classList.add('hidden');
            }
        }
    });
    
    // Add loading states for buttons
    function setButtonLoading(button, isLoading) {
        if (isLoading) {
            button.disabled = true;
            button.dataset.originalText = button.textContent;
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Loading...';
            button.classList.add('opacity-75', 'cursor-not-allowed');
        } else {
            button.disabled = false;
            button.textContent = button.dataset.originalText;
            button.classList.remove('opacity-75', 'cursor-not-allowed');
        }
    }
    
    // Example usage (you can integrate this with actual API calls)
    updateProfileBtn.addEventListener('click', function() {
        // Simulate loading state
        // setButtonLoading(this, true);
        // setTimeout(() => setButtonLoading(this, false), 2000);
    });
    
    // Focus management for better accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('.modal'); // If you have modals
    
    // Trap focus in modal when open
    if (modal) {
        modal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const focusables = Array.from(modal.querySelectorAll(focusableElements));
                const firstFocusable = focusables[0];
                const lastFocusable = focusables[focusables.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
    
    // Responsive image handling
    function updateImageSources() {
        const images = document.querySelectorAll('img[data-mobile][data-desktop]');
        images.forEach(img => {
            if (window.innerWidth < 768) {
                img.src = img.dataset.mobile;
            } else {
                img.src = img.dataset.desktop;
            }
        });
    }
    
    updateImageSources();
    window.addEventListener('resize', updateImageSources);
    
    // Performance monitoring (optional - can be removed in production)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', pageLoadTime + 'ms');
            }, 0);
        });
    }
    
    console.log('User Profile page loaded successfully!');
    console.log('Viewport:', window.innerWidth + 'x' + window.innerHeight);
    console.log('Touch device:', isTouchDevice);
});