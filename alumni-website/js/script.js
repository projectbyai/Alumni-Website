// Alumni Website - Main JavaScript File
// Handles navigation, dynamic content loading, and form interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initPortalFormToggle();
    initPasswordToggle();
    initFileUpload();
    initFormHandlers();
    loadDynamicContent();
});

// ==============================================
// NAVIGATION FUNCTIONALITY
// ==============================================

function initMobileNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        });
    }
}

// ==============================================
// PORTAL FORM TOGGLE FUNCTIONALITY
// ==============================================

function initPortalFormToggle() {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginSection = document.getElementById('login');
    const registerSection = document.getElementById('register');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');

    function showLogin() {
        if (loginSection && registerSection) {
            loginSection.classList.remove('hidden');
            registerSection.classList.add('hidden');
        }
        if (loginTab && registerTab) {
            loginTab.classList.add('bg-blue-600', 'text-white');
            loginTab.classList.remove('text-gray-600');
            registerTab.classList.remove('bg-blue-600', 'text-white');
            registerTab.classList.add('text-gray-600');
        }
    }

    function showRegister() {
        if (loginSection && registerSection) {
            loginSection.classList.add('hidden');
            registerSection.classList.remove('hidden');
        }
        if (loginTab && registerTab) {
            registerTab.classList.add('bg-blue-600', 'text-white');
            registerTab.classList.remove('text-gray-600');
            loginTab.classList.remove('bg-blue-600', 'text-white');
            loginTab.classList.add('text-gray-600');
        }
    }

    // Tab click handlers
    if (loginTab) loginTab.addEventListener('click', showLogin);
    if (registerTab) registerTab.addEventListener('click', showRegister);
    if (switchToRegister) switchToRegister.addEventListener('click', showRegister);
    if (switchToLogin) switchToLogin.addEventListener('click', showLogin);

    // Check URL hash for direct navigation
    const hash = window.location.hash;
    if (hash === '#register') {
        showRegister();
    } else if (hash === '#login') {
        showLogin();
    }
}

// ==============================================
// PASSWORD VISIBILITY TOGGLE
// ==============================================

function initPasswordToggle() {
    const passwordToggles = [
        'toggle-login-password',
        'toggle-reg-password',
        'toggle-confirm-password'
    ];

    passwordToggles.forEach(toggleId => {
        const toggle = document.getElementById(toggleId);
        if (toggle) {
            toggle.addEventListener('click', function() {
                const input = toggle.parentElement.querySelector('input');
                const icon = toggle.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    });
}

// ==============================================
// FILE UPLOAD FUNCTIONALITY
// ==============================================

function initFileUpload() {
    const fileInput = document.getElementById('resume-file');
    const dropArea = document.getElementById('file-drop-area');
    const fileName = document.getElementById('file-name');

    if (fileInput && dropArea) {
        // Click to upload
        dropArea.addEventListener('click', () => fileInput.click());

        // File input change
        fileInput.addEventListener('change', function(e) {
            handleFileSelect(e.target.files[0]);
        });

        // Drag and drop functionality
        dropArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            dropArea.classList.add('border-blue-500', 'bg-blue-50');
        });

        dropArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            dropArea.classList.remove('border-blue-500', 'bg-blue-50');
        });

        dropArea.addEventListener('drop', function(e) {
            e.preventDefault();
            dropArea.classList.remove('border-blue-500', 'bg-blue-50');
            handleFileSelect(e.dataTransfer.files[0]);
        });
    }

    function handleFileSelect(file) {
        if (file && fileName) {
            fileName.textContent = `Selected: ${file.name}`;
            fileName.classList.remove('hidden');
        }
    }
}

// ==============================================
// FORM HANDLERS
// ==============================================

function initFormHandlers() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Registration form
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }

    // Event registration form
    const eventForm = document.getElementById('event-registration-form');
    if (eventForm) {
        eventForm.addEventListener('submit', handleEventRegistration);
    }

    // Story submission form
    const storyForm = document.getElementById('story-submission-form');
    if (storyForm) {
        storyForm.addEventListener('submit', handleStorySubmission);
    }

    // Resume upload form
    const resumeForm = document.getElementById('resume-upload-form');
    if (resumeForm) {
        resumeForm.addEventListener('submit', handleResumeUpload);
    }

    // Job filter
    const filterBtn = document.getElementById('filter-jobs-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', handleJobFilter);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Show success message (in real app, this would authenticate)
    showNotification('Login successful! Welcome back.', 'success');
    
    // Clear form
    e.target.reset();
}

function handleRegistration(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Basic validation
    const password = formData.get('reg-password');
    const confirmPassword = formData.get('reg-confirm-password');
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    // Show success message
    showNotification('Registration successful! Welcome to the alumni network.', 'success');
    
    // Clear form
    e.target.reset();
}

function handleEventRegistration(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Event registration submitted successfully!', 'success');
    e.target.reset();
}

function handleStorySubmission(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Your story has been submitted for review. Thank you for sharing!', 'success');
    e.target.reset();
}

function handleResumeUpload(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Resume uploaded successfully to our database!', 'success');
    e.target.reset();
    
    // Hide file name
    const fileName = document.getElementById('file-name');
    if (fileName) fileName.classList.add('hidden');
}

function handleJobFilter(e) {
    e.preventDefault();
    loadJobListings(); // Reload with filters
    showNotification('Jobs filtered successfully!', 'info');
}

// ==============================================
// NOTIFICATION SYSTEM
// ==============================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm transform transition-all duration-300 translate-x-full`;
    
    // Set color based on type
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-600', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-600', 'text-white');
            break;
        case 'warning':
            notification.classList.add('bg-yellow-600', 'text-white');
            break;
        default:
            notification.classList.add('bg-blue-600', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ==============================================
// DYNAMIC CONTENT LOADING
// ==============================================

function loadDynamicContent() {
    loadUpcomingEvents();
    loadFeaturedAlumni();
    loadLatestNews();
    loadAlumniStories();
    loadJobListings();
    populateEventSelect();
}

async function loadUpcomingEvents() {
    const container = document.getElementById('upcoming-events');
    const detailedContainer = document.getElementById('upcoming-events-container');
    
    try {
        const response = await fetch('data/events.json');
        const data = await response.json();
        
        // Load for homepage cards
        if (container) {
            const upcomingEvents = data.events.filter(event => new Date(event.date) > new Date()).slice(0, 3);
            container.innerHTML = upcomingEvents.map(event => `
                <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-calendar text-blue-600"></i>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-900">${event.title}</h4>
                        <p class="text-sm text-gray-500">${formatDate(event.date)}</p>
                    </div>
                </div>
            `).join('');
        }
        
        // Load for events page
        if (detailedContainer) {
            const upcomingEvents = data.events.filter(event => new Date(event.date) > new Date());
            detailedContainer.innerHTML = upcomingEvents.map(event => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-4">
                            <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">${event.category}</span>
                            <span class="text-sm text-gray-500">${formatDate(event.date)}</span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-3">${event.title}</h3>
                        <p class="text-gray-600 mb-4">${event.description}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-sm text-gray-500">
                                <i class="fas fa-map-marker-alt mr-1"></i>
                                ${event.location}
                            </div>
                            <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

async function loadFeaturedAlumni() {
    const container = document.getElementById('featured-alumni');
    const storiesContainer = document.getElementById('alumni-stories-container');
    
    try {
        const response = await fetch('data/alumni.json');
        const data = await response.json();
        
        // Load for homepage cards
        if (container) {
            const featuredAlumni = data.alumni.filter(alum => alum.featured).slice(0, 3);
            container.innerHTML = featuredAlumni.map(alum => `
                <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-user-graduate text-purple-600"></i>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-900">${alum.name}</h4>
                        <p class="text-sm text-gray-500">${alum.position}</p>
                    </div>
                </div>
            `).join('');
        }
        
        // Load for stories page
        if (storiesContainer) {
            const featuredAlumni = data.alumni.filter(alum => alum.featured);
            storiesContainer.innerHTML = featuredAlumni.map(alum => `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div class="lg:col-span-1">
                        <img src="${alum.image}" alt="${alum.name}" class="w-full h-80 object-cover rounded-xl">
                    </div>
                    <div class="lg:col-span-2">
                        <h3 class="text-3xl font-bold text-gray-900 mb-2">${alum.name}</h3>
                        <p class="text-xl text-blue-600 mb-2">${alum.position}</p>
                        <p class="text-lg text-gray-600 mb-4">${alum.company} • Class of ${alum.graduationYear}</p>
                        <p class="text-gray-700 text-lg leading-relaxed mb-6">${alum.story}</p>
                        <div class="flex items-center space-x-4">
                            ${alum.linkedin ? `<a href="${alum.linkedin}" class="text-blue-600 hover:text-blue-800"><i class="fab fa-linkedin text-2xl"></i></a>` : ''}
                            <div class="flex flex-wrap gap-2">
                                ${alum.achievements.map(achievement => `
                                    <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">${achievement}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading alumni:', error);
    }
}

async function loadLatestNews() {
    const container = document.getElementById('latest-news');
    const newsContainer = document.getElementById('news-container');
    
    try {
        const response = await fetch('data/news.json');
        const data = await response.json();
        
        // Load for homepage cards
        if (container) {
            const latestNews = data.news.slice(0, 3);
            container.innerHTML = latestNews.map(article => `
                <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <i class="fas fa-newspaper text-green-600"></i>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-900">${article.title}</h4>
                        <p class="text-sm text-gray-500">${formatDate(article.date)}</p>
                    </div>
                </div>
            `).join('');
        }
        
        // Load for about page
        if (newsContainer) {
            newsContainer.innerHTML = data.news.map(article => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <span class="text-sm text-blue-600 font-medium">${formatDate(article.date)}</span>
                        <h3 class="text-xl font-bold text-gray-900 mt-2 mb-3">${article.title}</h3>
                        <p class="text-gray-600">${article.summary}</p>
                        <a href="#" class="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800">Read More →</a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading news:', error);
    }
}

async function loadAlumniStories() {
    const spotlightContainer = document.getElementById('alumni-spotlight-grid');
    
    if (spotlightContainer) {
        try {
            const response = await fetch('data/alumni.json');
            const data = await response.json();
            
            const spotlightAlumni = data.alumni.filter(alum => !alum.featured).slice(0, 6);
            spotlightContainer.innerHTML = spotlightAlumni.map(alum => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img src="${alum.image}" alt="${alum.name}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${alum.name}</h3>
                        <p class="text-blue-600 mb-2">${alum.position}</p>
                        <p class="text-gray-600 mb-3">${alum.company}</p>
                        <p class="text-gray-700 text-sm">${alum.story.substring(0, 120)}...</p>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error loading alumni stories:', error);
        }
    }
}

async function loadJobListings() {
    const container = document.getElementById('job-listings-container');
    const internshipContainer = document.getElementById('internship-listings-container');
    
    if (container || internshipContainer) {
        try {
            const response = await fetch('data/jobs.json');
            const data = await response.json();
            
            // Load job listings
            if (container) {
                container.innerHTML = data.jobs.map(job => `
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div class="flex items-start justify-between">
                            <div class="flex-grow">
                                <h3 class="text-xl font-bold text-gray-900 mb-2">${job.title}</h3>
                                <p class="text-lg text-blue-600 mb-2">${job.company}</p>
                                <div class="flex flex-wrap gap-2 mb-3">
                                    <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">${job.location}</span>
                                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${job.type}</span>
                                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${job.category}</span>
                                </div>
                                <p class="text-gray-600 mb-4">${job.description}</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-lg font-semibold text-gray-900">${job.salary}</span>
                                    <div class="space-x-2">
                                        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                            Apply Now
                                        </button>
                                        <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
            
            // Load internships
            if (internshipContainer) {
                const internships = data.jobs.filter(job => job.type === 'Internship').slice(0, 6);
                internshipContainer.innerHTML = internships.map(job => `
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${job.title}</h3>
                        <p class="text-blue-600 mb-2">${job.company}</p>
                        <div class="flex items-center text-sm text-gray-500 mb-3">
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            ${job.location}
                        </div>
                        <p class="text-gray-600 mb-4">${job.description.substring(0, 100)}...</p>
                        <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                            Apply Now
                        </button>
                    </div>
                `).join('');
            }
        } catch (error) {
            console.error('Error loading jobs:', error);
        }
    }
}

async function populateEventSelect() {
    const select = document.getElementById('event-select');
    
    if (select) {
        try {
            const response = await fetch('data/events.json');
            const data = await response.json();
            
            const upcomingEvents = data.events.filter(event => new Date(event.date) > new Date());
            
            upcomingEvents.forEach(event => {
                const option = document.createElement('option');
                option.value = event.id;
                option.textContent = `${event.title} - ${formatDate(event.date)}`;
                select.appendChild(option);
            });
        } catch (error) {
            console.error('Error populating event select:', error);
        }
    }
}

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (mobileMenuButton) {
            mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        }
    }
});
