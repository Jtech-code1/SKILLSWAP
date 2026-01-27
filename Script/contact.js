
        // FAQ Toggle Function
        function toggleFAQ(id) {
            for (let i = 1; i <= 5; i++) {
                const content = document.getElementById(`content-${i}`);
                const icon = document.getElementById(`icon-${i}`);

                if (i === id) {
                    const isHidden = content.classList.contains("hidden");
                    content.classList.toggle("hidden", !isHidden);
                    icon.textContent = isHidden ? "−" : "+";
                } else {
                    content.classList.add("hidden");
                    icon.textContent = "+";
                }
            }
        }

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
    