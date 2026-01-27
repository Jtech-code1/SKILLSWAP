
        let milestoneCount = 2;

        function addMilestone() {
            milestoneCount++;
            const container = document.getElementById('milestonesContainer');
            const milestoneHTML = `
                <div class="milestone-item mb-6 p-4 border border-gray-200 rounded-lg relative">
                    <button onclick="removeMilestone(this)" class="absolute top-4 right-4 text-gray-400 hover:text-red-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <h3 class="text-base font-semibold text-gray-900 mb-4">Milestone ${milestoneCount}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Description</label>
                            <input 
                                type="text" 
                                placeholder="Enter your project title" 
                                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            >
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Milestone Due Date</label>
                            <div class="relative">
                                <input 
                                    type="text" 
                                    placeholder="Enter your project title" 
                                    class="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', milestoneHTML);
        }

        function removeMilestone(button) {
            const milestoneItem = button.closest('.milestone-item');
            milestoneItem.remove();
            
            // Renumber remaining milestones
            const milestones = document.querySelectorAll('.milestone-item');
            milestones.forEach((milestone, index) => {
                const heading = milestone.querySelector('h3');
                heading.textContent = `Milestone ${index + 1}`;
            });
            
            milestoneCount = milestones.length;
        }

        function submitRequest() {
            const projectTitle = document.getElementById('projectTitle').value;
            const projectType = document.getElementById('projectType').value;
            
            if (!projectTitle) {
                alert('Please enter a project title');
                return;
            }
            
            if (!projectType) {
                alert('Please select a project type');
                return;
            }
            
            alert('Skill Swap Request submitted successfully!');
            // Here you would normally send the data to a server
        }

        function cancelRequest() {
            if (confirm('Are you sure you want to cancel? All entered data will be lost.')) {
                window.history.back();
            }
        }
   