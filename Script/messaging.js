
        // Active conversation data
        let activeConversation = null;
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const searchInput = document.getElementById('searchInput');
        const messageItems = document.querySelectorAll('.message-item');
        const sidebar = document.getElementById('sidebar');

        // Function to render messages for active conversation
        function renderMessages(messages, userName, userImage) {
            chatMessages.innerHTML = '';
            
            messages.forEach(msg => {
                const messageDiv = document.createElement('div');
                
                if (msg.sender === 'them') {
                    messageDiv.className = 'flex items-start space-x-2 lg:space-x-3 animate-fadeIn';
                    messageDiv.innerHTML = `
                        <img src="${userImage}" alt="${userName}" class="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0 object-cover">
                        <div class="flex-1">
                            <div class="bg-white rounded-2xl rounded-tl-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-xs sm:max-w-md">
                                <p class="text-sm lg:text-base text-gray-800">${msg.text}</p>
                            </div>
                            <p class="text-xs text-gray-500 mt-1 ml-2">${msg.time}</p>
                        </div>
                    `;
                } else {
                    messageDiv.className = 'flex items-start space-x-2 lg:space-x-3 justify-end animate-fadeIn';
                    messageDiv.innerHTML = `
                        <div class="flex-1 flex flex-col items-end">
                            <div class="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-xs sm:max-w-md">
                                <p class="text-sm lg:text-base">${msg.text}</p>
                            </div>
                            <p class="text-xs text-gray-500 mt-1 mr-2">${msg.time}</p>
                        </div>
                        <img src="https://i.pravatar.cc/150?img=47" alt="Me" class="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0 object-cover">
                    `;
                }
                
                chatMessages.appendChild(messageDiv);
            });
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Load initial conversation (Sarah Mitchell)
        function loadInitialConversation() {
            const firstItem = document.querySelector('.message-item.active');
            if (firstItem) {
                const messages = JSON.parse(firstItem.dataset.messages);
                const userName = firstItem.dataset.user;
                const userImage = firstItem.querySelector('img').src;
                renderMessages(messages, userName, userImage);
                activeConversation = { messages, userName, userImage };
            }
        }

        // Search functionality
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            
            messageItems.forEach(item => {
                const userName = item.dataset.user.toLowerCase();
                const messageText = item.querySelector('p.truncate').textContent.toLowerCase();
                
                if (userName.includes(searchTerm) || messageText.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Message item click handler
        messageItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                messageItems.forEach(i => {
                    i.classList.remove('bg-indigo-50', 'border-l-4', 'border-indigo-600', 'active');
                });
                
                // Add active class to clicked item
                this.classList.add('bg-indigo-50', 'border-l-4', 'border-indigo-600', 'active');
                
                // Load conversation
                const messages = JSON.parse(this.dataset.messages);
                const userName = this.dataset.user;
                const userImage = this.querySelector('img').src;
                
                renderMessages(messages, userName, userImage);
                activeConversation = { messages, userName, userImage };
                
                // Hide sidebar on mobile after selection
                if (window.innerWidth < 1024) {
                    sidebar.classList.add('hidden');
                    sidebar.classList.remove('flex');
                }
            });
        });

        // Send message functionality
        function sendMessage() {
            const messageText = messageInput.value.trim();
            
            if (messageText === '' || !activeConversation) return;
            
            const currentTime = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            
            // Add message to active conversation
            const newMessage = {
                text: messageText,
                time: currentTime,
                sender: 'me'
            };
            
            activeConversation.messages.push(newMessage);
            
            // Create new message element
            const messageDiv = document.createElement('div');
            messageDiv.className = 'flex items-start space-x-2 lg:space-x-3 justify-end animate-fadeIn';
            
            messageDiv.innerHTML = `
                <div class="flex-1 flex flex-col items-end">
                    <div class="bg-indigo-600 text-white rounded-2xl rounded-tr-none px-3 sm:px-4 py-2 sm:py-3 shadow-sm max-w-xs sm:max-w-md">
                        <p class="text-sm lg:text-base">${messageText}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1 mr-2">${currentTime}</p>
                </div>
                <img src="https://i.pravatar.cc/150?img=47" alt="Me" class="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex-shrink-0 object-cover">
            `;
            
            chatMessages.appendChild(messageDiv);
            messageInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        sendButton.addEventListener('click', sendMessage);
        
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Mobile sidebar toggle
        const sidebarToggleBtn = document.createElement('button');
        sidebarToggleBtn.className = 'lg:hidden fixed bottom-20 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-indigo-700 transition';
        sidebarToggleBtn.innerHTML = '<i class="fas fa-comments text-lg"></i>';
        document.body.appendChild(sidebarToggleBtn);

        sidebarToggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('flex');
            sidebar.classList.toggle('fixed');
            sidebar.classList.toggle('inset-0');
            sidebar.classList.toggle('z-40');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth < 1024 && 
                !sidebar.contains(e.target) && 
                !sidebarToggleBtn.contains(e.target) &&
                !sidebar.classList.contains('hidden')) {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('flex', 'fixed', 'inset-0', 'z-40');
            }
        });

        // Load initial conversation on page load
        window.addEventListener('load', loadInitialConversation);

        // Add fade-in animation style
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 0.3s ease-out;
            }
        `;
        document.head.appendChild(style);
   