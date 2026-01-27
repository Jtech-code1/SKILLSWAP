
        // User profiles for different fields
        const userProfiles = {
            '': {
                name: 'Ogunusi Babatunde O.',
                skill: 'Product Designer (UX Design)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1769273636/Frame_2147258844_fcumnu.png',
                progress: 75,
                gradient: 'from-blue-400 to-indigo-400'
            },
            'uiux': {
                name: 'Adeyemi Chioma T.',
                skill: 'UI/UX Designer (Mobile Apps)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1768977153/Frame_90_nedzzq.png',
                progress: 85,
                gradient: 'from-indigo-400 to-purple-400'
            },
            'webdev': {
                name: 'Okonkwo Emeka J.',
                skill: 'Full Stack Developer (React & Node.js)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1768977607/Frame_90_1_frwzqs.png',
                progress: 90,
                gradient: 'from-green-400 to-emerald-400'
            },
            'marketing': {
                name: 'Ibrahim Fatima A.',
                skill: 'Digital Marketing Specialist (SEO & Content)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1769525997/e930d9716f3b2adcad4147fe369fdbf9619a93f1_oycg4d.jpg',
                progress: 80,
                gradient: 'from-amber-400 to-orange-400'
            },
            'graphicdesign': {
                name: 'Nwosu Chiamaka M.',
                skill: 'Graphic Designer (Brand Identity)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1769525959/white_guy_passport_mxpkpb.png',
                progress: 88,
                gradient: 'from-pink-400 to-rose-400'
            },
            'dataanalytics': {
                name: 'Adeleke Oluwaseun K.',
                skill: 'Data Analyst (Business Intelligence)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1769525925/girl_passport_kt7nmi.png',
                progress: 92,
                gradient: 'from-blue-400 to-cyan-400'
            },
            'contentwriting': {
                name: 'Bello Aisha R.',
                skill: 'Content Writer (Technical & Marketing)',
                image: 'https://res.cloudinary.com/dezoqbzim/image/upload/v1768977923/Frame_90_2_l0d76y.png',
                progress: 78,
                gradient: 'from-violet-400 to-purple-400'
            }
        };

        // Collaboration data with field and niche information
        const collaborations = [
            // UI/UX Design
            {
                id: 1,
                field: "uiux",
                fieldName: "UI/UX Design",
                niche: "Mobile App Design",
                title: "UI/UX Designer Needed for Mobile App Design",
                description: "We are seeking an experienced UI/UX designer to create a visually appealing and user-friendly mobile application. The ideal candidate will have a strong portfolio showcasing their design skills and an understanding of user experience principles for iOS and Android platforms.",
                tags: ["UI/UX Design", "Mobile App Design", "Figma", "User Research"],
                rating: 5,
                collaborationsCompleted: 42,
                location: "Lagos, Nigeria",
                postedTime: "2 Hours Ago"
            },
            {
                id: 2,
                field: "uiux",
                fieldName: "UI/UX Design",
                niche: "Web Interface Design",
                title: "UI/UX Designer Needed for Website Design",
                description: "We are seeking an experienced UI/UX designer to create a visually appealing and user-friendly landing page for our upcoming product launch. The ideal candidate will have a strong portfolio showcasing their design skills and an understanding of user experience principles.",
                tags: ["UI/UX Design", "Product Design", "Figma", "E-Commerce"],
                rating: 4,
                collaborationsCompleted: 34,
                location: "Lagos, Nigeria",
                postedTime: "3 Hours Ago"
            },
            {
                id: 3,
                field: "uiux",
                fieldName: "UI/UX Design",
                niche: "User Research",
                title: "UX Researcher for Product Development",
                description: "Looking for a skilled UX researcher to conduct user interviews, usability testing, and create detailed user personas for our SaaS product. Experience with both qualitative and quantitative research methods required.",
                tags: ["UI/UX Design", "User Research", "Usability Testing", "Analytics"],
                rating: 5,
                collaborationsCompleted: 28,
                location: "Remote",
                postedTime: "5 Hours Ago"
            },

            // Web Development
            {
                id: 4,
                field: "webdev",
                fieldName: "Web Development",
                niche: "Frontend Development",
                title: "React Developer for Modern Web Application",
                description: "Seeking a talented React developer to build responsive and interactive web interfaces. Must have expertise in React, TypeScript, and modern frontend development practices. Experience with state management and API integration is essential.",
                tags: ["Web Development", "React", "TypeScript", "Frontend"],
                rating: 5,
                collaborationsCompleted: 56,
                location: "Remote",
                postedTime: "1 Hour Ago"
            },
            {
                id: 5,
                field: "webdev",
                fieldName: "Web Development",
                niche: "Backend Development",
                title: "Backend Engineer for API Development",
                description: "We need an experienced backend developer to design and implement RESTful APIs for our web platform. Strong knowledge of Node.js, Express, and database design required. Must be comfortable working with microservices architecture.",
                tags: ["Web Development", "Node.js", "API Design", "Database"],
                rating: 4,
                collaborationsCompleted: 38,
                location: "Abuja, Nigeria",
                postedTime: "4 Hours Ago"
            },
            {
                id: 6,
                field: "webdev",
                fieldName: "Web Development",
                niche: "Full Stack Development",
                title: "Full Stack Developer for E-commerce Platform",
                description: "Looking for a versatile full stack developer to build an e-commerce platform from scratch. Must be proficient in both frontend (React) and backend (Node.js) technologies, with experience in payment gateway integration.",
                tags: ["Web Development", "Full Stack", "E-commerce", "Payment Integration"],
                rating: 5,
                collaborationsCompleted: 45,
                location: "Lagos, Nigeria",
                postedTime: "6 Hours Ago"
            },

            // Marketing
            {
                id: 7,
                field: "marketing",
                fieldName: "Marketing",
                niche: "Digital Marketing",
                title: "Digital Marketing Specialist for Brand Growth",
                description: "Seeking a creative digital marketing specialist to develop and execute comprehensive marketing strategies. Must have proven experience with SEO, content marketing, and conversion optimization for B2B and B2C audiences.",
                tags: ["Marketing", "Digital Marketing", "SEO", "Content Strategy"],
                rating: 4,
                collaborationsCompleted: 31,
                location: "Remote",
                postedTime: "2 Hours Ago"
            },
            {
                id: 8,
                field: "marketing",
                fieldName: "Marketing",
                niche: "Social Media Marketing",
                title: "Social Media Manager for Brand Campaigns",
                description: "We are looking for an experienced social media manager to create engaging content and manage our social media presence across multiple platforms. Must have experience with Facebook, Instagram, LinkedIn, and Twitter advertising.",
                tags: ["Marketing", "Social Media", "Content Creation", "Advertising"],
                rating: 5,
                collaborationsCompleted: 52,
                location: "Lagos, Nigeria",
                postedTime: "3 Hours Ago"
            },
            {
                id: 9,
                field: "marketing",
                fieldName: "Marketing",
                niche: "Email Marketing",
                title: "Email Marketing Specialist for Lead Nurturing",
                description: "Need an email marketing expert to design and implement automated email campaigns. Experience with Mailchimp, HubSpot, or similar platforms required. Must understand customer journey mapping and segmentation strategies.",
                tags: ["Marketing", "Email Marketing", "Automation", "Lead Generation"],
                rating: 4,
                collaborationsCompleted: 29,
                location: "Remote",
                postedTime: "7 Hours Ago"
            },

            // Graphic Design
            {
                id: 10,
                field: "graphicdesign",
                fieldName: "Graphic Design",
                niche: "Brand Identity",
                title: "Brand Identity Designer for Startup Rebranding",
                description: "Seeking a talented graphic designer to create a complete brand identity including logo, color palette, typography, and brand guidelines. Must have a portfolio demonstrating strong conceptual thinking and visual design skills.",
                tags: ["Graphic Design", "Brand Identity", "Logo Design", "Branding"],
                rating: 5,
                collaborationsCompleted: 36,
                location: "Lagos, Nigeria",
                postedTime: "1 Hour Ago"
            },
            {
                id: 11,
                field: "graphicdesign",
                fieldName: "Graphic Design",
                niche: "Illustration",
                title: "Digital Illustrator for Marketing Materials",
                description: "Looking for a creative illustrator to produce custom illustrations for our marketing campaigns and website. Experience with both digital and traditional illustration techniques preferred. Adobe Illustrator and Procreate proficiency required.",
                tags: ["Graphic Design", "Illustration", "Digital Art", "Marketing"],
                rating: 4,
                collaborationsCompleted: 27,
                location: "Remote",
                postedTime: "4 Hours Ago"
            },

            // Data Analytics
            {
                id: 12,
                field: "dataanalytics",
                fieldName: "Data Analytics",
                niche: "Business Intelligence",
                title: "BI Analyst for Dashboard Development",
                description: "We need a skilled Business Intelligence analyst to create interactive dashboards and reports using Tableau or Power BI. Must have experience with data visualization best practices and the ability to translate complex data into actionable insights.",
                tags: ["Data Analytics", "Business Intelligence", "Tableau", "Power BI"],
                rating: 5,
                collaborationsCompleted: 33,
                location: "Abuja, Nigeria",
                postedTime: "2 Hours Ago"
            },
            {
                id: 13,
                field: "dataanalytics",
                fieldName: "Data Analytics",
                niche: "Data Science",
                title: "Data Scientist for Predictive Modeling",
                description: "Seeking an experienced data scientist to build machine learning models for customer behavior prediction. Strong Python skills and experience with scikit-learn, TensorFlow, or PyTorch required. Background in statistical analysis is essential.",
                tags: ["Data Analytics", "Data Science", "Machine Learning", "Python"],
                rating: 5,
                collaborationsCompleted: 41,
                location: "Remote",
                postedTime: "5 Hours Ago"
            },

            // Content Writing
            {
                id: 14,
                field: "contentwriting",
                fieldName: "Content Writing",
                niche: "Technical Writing",
                title: "Technical Writer for Documentation",
                description: "Looking for a technical writer to create comprehensive documentation for our software products. Must have experience writing API documentation, user guides, and tutorials. Familiarity with developer tools and platforms is a plus.",
                tags: ["Content Writing", "Technical Writing", "Documentation", "API"],
                rating: 4,
                collaborationsCompleted: 25,
                location: "Remote",
                postedTime: "3 Hours Ago"
            },
            {
                id: 15,
                field: "contentwriting",
                fieldName: "Content Writing",
                niche: "Copywriting",
                title: "Copywriter for Marketing Campaigns",
                description: "We need a creative copywriter to craft compelling copy for our marketing campaigns, website, and social media. Experience with persuasive writing, SEO optimization, and brand voice development required. Portfolio showcasing conversion-focused copy is essential.",
                tags: ["Content Writing", "Copywriting", "Marketing", "SEO"],
                rating: 5,
                collaborationsCompleted: 39,
                location: "Lagos, Nigeria",
                postedTime: "6 Hours Ago"
            }
        ];

        // Update user profile in sidebar
        function updateUserProfile(fieldKey) {
            const profile = userProfiles[fieldKey] || userProfiles[''];
            
            // Update profile name
            document.getElementById('profileName').textContent = profile.name;
            
            // Update profile skill
            document.getElementById('profileSkill').textContent = profile.skill;
            
            // Update profile images
            document.getElementById('sidebarProfileImage').src = profile.image;
            document.getElementById('headerProfileImage').src = profile.image;
            
            // Update profile progress
            document.getElementById('profileProgress').style.width = profile.progress + '%';
            
            // Update gradient background
            const imageContainer = document.getElementById('sidebarProfileImageContainer');
            imageContainer.className = `w-12 h-12 rounded-full bg-gradient-to-br ${profile.gradient} overflow-hidden flex-shrink-0`;
        }

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
                            <div class="flex items-center gap-2 mb-2">
                                <p class="text-sm text-gray-500">Posted: ${collab.postedTime}</p>
                            </div>
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

                    <!-- Field and Niche Tags -->
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                            ${collab.fieldName}
                        </span>
                        <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            ${collab.niche}
                        </span>
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

        // State variables
        let currentFilter = '';
        let searchTerm = '';

        // Render collaborations
        function renderCollaborations() {
            const listContainer = document.getElementById('collaborationList');
            
            // Filter collaborations
            let filteredCollabs = collaborations;
            
            // Apply field filter
            if (currentFilter) {
                filteredCollabs = filteredCollabs.filter(collab => collab.field === currentFilter);
            }
            
            // Apply search filter
            if (searchTerm) {
                filteredCollabs = filteredCollabs.filter(collab => 
                    collab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    collab.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    collab.fieldName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    collab.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    collab.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                );
            }
            
            listContainer.innerHTML = filteredCollabs.map(collab => generateCard(collab)).join('');
            
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
            searchTerm = e.target.value;
            renderCollaborations();
        });

        // Field filter
        document.getElementById('fieldFilter').addEventListener('change', function(e) {
            currentFilter = e.target.value;
            updateUserProfile(currentFilter);
            renderCollaborations();
        });

        // Initial render
        renderCollaborations();
    