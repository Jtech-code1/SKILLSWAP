
        function goBack() {
            window.history.back();
        }

        function copyLink() {
            const linkInput = document.getElementById('taskLink');
            linkInput.select();
            linkInput.setSelectionRange(0, 99999); // For mobile devices
            
            navigator.clipboard.writeText(linkInput.value).then(() => {
                // Show a temporary success message
                const button = event.target.closest('button');
                const originalHTML = button.innerHTML;
                
                button.innerHTML = `
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                `;
                
                setTimeout(() => {
                    button.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        }

        // Apply button functionality
        document.querySelector('.bg-indigo-700').addEventListener('click', function() {
            alert('Application submitted successfully!');
        });

        // Save button functionality
        document.querySelector('.border-indigo-700').addEventListener('click', function() {
            const currentText = this.textContent.trim();
            if (currentText === 'Save Skill Swap Request') {
                this.textContent = 'Saved';
                this.classList.add('bg-indigo-50');
            } else {
                this.textContent = 'Save Skill Swap Request';
                this.classList.remove('bg-indigo-50');
            }
        });
   