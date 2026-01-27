
        // Collaboration data
        const collaborations = [
            {
                
                id: 1,
                title:  "UI/UX Designer Needed for a website Design",
                description: "We are seeking an experienced UI/UX designer to create a visually appealing and user-friendly landing page for our upcoming product launch. The ideal candidate will have a strong portfolio showcasing their design skills and an understanding of user experience principles.",
                tags: ["UI/UX Design", "Product Design", "Figma", "E-Commerce"],
                rating: 4,
                collaborationsCompleted: 34,
                location: "Lagos, Nigeria",
                postedTime: "2 Hours Ago"
            },
            {
                id: 2,
                title: "UI/UX Designer Needed for a website Design",
                description: "We are seeking an experienced UI/UX designer to create a visually appealing and user-friendly landing page for our upcoming product launch. The ideal candidate will have a strong portfolio showcasing their design skills and an understanding of user experience principles.",
                tags: ["UI/UX Design", "Product Design", "Figma", "E-Commerce"],
                rating: 4,
                collaborationsCompleted: 34,
                location: "Lagos, Nigeria",
                postedTime: "2 Hours Ago"
            },
            {
                id: 3,
                title: "UI/UX Designer Needed for a website Design",
                description: "We are seeking an experienced UI/UX designer to create a visually appealing and user-friendly landing page for our upcoming product launch. The ideal candidate will have a strong portfolio showcasing their design skills and an understanding of user experience principles.",
                tags: ["UI/UX Design", "Product Design", "Figma", "E-Commerce"],
                rating: 4,
                collaborationsCompleted: 34,
                location: "Lagos, Nigeria",
                postedTime: "2 Hours Ago"
            }
        ];

        // Generate stars HTML
        function generateStars(rating) {
            let starsHTML = '';
            for (let i = 0; i < 5; i++) {
                const color = i < rating ? 'text-orange-400' : 'text-gray-300';
                starsHTML += `<span class="${color} text-lg">★</span>`;
            }
            return starsHTML;
        }

        // Generate tags HTML
        function generateTags(tags) {
            return tags.map(tag => 
                `<span class="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm">${tag}</span>`
            ).join('');
        }

        // Generate collaboration card
        function generateCard(collab) {
            return `
                <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex-1">
                            <p class="text-sm text-gray-500 mb-2">Posted: ${collab.postedTime}</p>
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                ${collab.title}
                            </h3>
                        </div>
                        <div class="flex gap-2 ml-4">
                            <button class="p-2 hover:bg-gray-100 rounded-full">
                                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                </svg>
                            </button>
                            <button class="heart-btn p-2 hover:bg-gray-100 rounded-full" data-id="${collab.id}">
                                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p class="text-gray-700 mb-4 leading-relaxed">
                        ${collab.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${generateTags(collab.tags)}
                    </div>

                    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div class="flex items-center gap-1">
                            ${generateStars(collab.rating)}
                        </div>
                        <span>${collab.collaborationsCompleted} Collaboration Completed</span>
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <span>${collab.location}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // Render collaborations
        function renderCollaborations() {
            const listContainer = document.getElementById('collaborationList');
            listContainer.innerHTML = collaborations.map(collab => generateCard(collab)).join('');
            
            // Add heart button listeners
            document.querySelectorAll('.heart-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const svg = this.querySelector('svg');
                    if (svg.classList.contains('text-gray-600')) {
                        svg.classList.remove('text-gray-600');
                        svg.classList.add('text-red-500');
                        svg.setAttribute('fill', 'currentColor');
                    } else {
                        svg.classList.remove('text-red-500');
                        svg.classList.add('text-gray-600');
                        svg.setAttribute('fill', 'none');
                    }
                });
            });
        }

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active state from all tabs
                document.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600');
                    b.classList.add('text-gray-500');
                });
                
                // Add active state to clicked tab
                this.classList.remove('text-gray-500');
                this.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
            });
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Add your search logic here
        });

        // Field filter
        document.getElementById('fieldFilter').addEventListener('change', function(e) {
            console.log('Filter changed to:', e.target.value);
            // Add your filter logic here
        });

        // Initial render
        renderCollaborations();
    