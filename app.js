// EffortlesslyDone - Complete JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('EffortlesslyDone initialized');
    initializeApp();
});

// Your actual data structure with real URLs
const data = {
    templates: {
        productivity: [
            {"name": "Drive Folder/File Listing Tool", "description": "Track and manage action items with priority levels", "url": "https://docs.google.com/spreadsheets/d/1hQAUfsITf9PabBQ8hQGvDjNKXSH0ot9hy_92G_kRyGs/copy"},
            {"name": "Task Tracker Reminder", "description": "Organize daily tasks with time tracking", "url": "./template/tasktracker.html"},
            {"name": "Change Log Tracker", "description": "Monitor Cell-Level Edits Automatically!", "url": "./template/changelog.html"},
            {"name": "Gmail Search & Organize Tool", "description": "Track employee work hours and overtime", "url": "https://docs.google.com/spreadsheets/d/1pBYwtRYjd6SFXaZ6O9JkrcJzc96vfH_z9eHrG1zJWGg/copy"},
            {"name": "Gmail To Sheet Extractor Tool", "description": "Search, Export, and Clean Your Inbox in One Click!", "url": "./template/gmailtosheet.html"},
            {"name": "Send Email from Sheet", "description": "Plan your day with time blocks and priorities", "url": "https://docs.google.com/spreadsheets/d/1mSACwzIh69jN7UkacGdh7wscNAW5yr6uGYiBMAljXoQ/copy"},
            {"name": "GSheet Keywords Search", "description": "Collaborative task management for teams", "url": "https://docs.google.com/spreadsheets/d/1fcBaqxUPFsEfkw8dJWv_jdIArzBsBsYLeb0KwOTdBUc/copy"},
            {"name": "Pre-Filled GForm", "description": "Basic task tracking with status updates","url": "./template/gform.html"}
        ],
        business: [
            {"name": "Precious Metal Transaction Sheet", "description": "Track sales performance and pipeline", "url": "https://docs.google.com/spreadsheets/d/1_Q0z5tQDbGX5-8uAPHsudvYH8uxFdjHx/copy"},
            {"name": "Real-Time NSE Dashboard", "description": "Monitor business expenses by category", "url": "https://docs.google.com/spreadsheets/d/170G-ir3p0u3LYGcjCf0f_HPxDgn7CwFrGfMfhhZcNIs/copy"},
            {"name": "Inventory Management System with Reminder", "description": "Professional invoice generation template", "url": "./template/inventory.html"},
            {"name": "Bulk Invoice Generator", "description": "Create and manage purchase orders", "url": "https://docs.google.com/spreadsheets/d/1hQnOOubhbWVSGcJ_6RAao7aBSZugitMmzubGMxwMO50/copy"},
            {"name": "Smart Tab Generator", "description": "Calculate employee payroll and deductions", "url": "./template/smarttab.html"},
            {"name": "Shared Materials Tracker", "description": "Track assets, liabilities, and equity", "url": "./template/sharedmaterial.html"},
            {"name": "YouTube Link Generator", "description": "Monitor income and expenses over time", "url": "https://docs.google.com/spreadsheets/d/1EC_j8F0TtvgbLCrvPlasmllI8Dgo2-2MP0too_2hgQM/copy"}
        ],
        personal: [
            {"name": "WhatsApp Messaging Tool", "description": "Reminders to send messages/ wishes to friends and family", "url": "./template/whatsapp.html"},
            {"name": "BarCode & QRCode Generator", "description": "Track monthly budget vs actual spending", "url": "./template/barcode.html"},
            {"name": "Change Font Template", "description": "Track attendance for events or meetings", "url": "./template/changefont.html"},
            {"name": "Conditional Formatting", "description": "Manage guest lists for events", "url": "https://docs.google.com/spreadsheets/d/10YbpPdUNXxFRTSPUOwERzFX7_4hRdTVd9SbBqLhNKOw/copy"}
        ],
        education: [
            {"name": "Student Progress Tracker", "description": "Organize class schedules and assignments", "url": "https://docs.google.com/spreadsheets/d/1gMUTkvIuvqs4CDsOeldcvbnoGwEPKdrSJLoRHcdYgCo/copy"},
            {"name": "Resume Template Builder", "description": "Teacher gradebook for student assessment", "url": "https://docs.google.com/spreadsheets/d/1laxbDjTNP5JEdxvJtBgMnJyHai3nChMl1Py-mgqSUeA/copy"}
        ]
    },
    tools: {
        'file-tools': [
            {"name": "PDF Combiner & Extractor", "description": "Merge multiple PDF files into one", "url": "./tools/pdfmerge/index.html"},
            {"name": "Excel Converter", "description": "Extract specific pages from PDF files", "url": "./tools/excelconverter/index.html"},
            {"name": "Text Cleaner", "description": "Split PDF files into separate documents", "url": "./tools/cleaner/index.html"},
            {"name": "File Rename and Organizer", "description": "Reduce PDF file size while maintaining quality", "url": "./tools/filerenameandorganizer/index.html"}
        ],
        'business-tools': [
            {"name": "Image Resizer", "description": "Convert text to natural speech audio", "url": "./tools/imageresizer/index.html"},
            {"name": "Units Converter", "description": "Generate QR codes for text, URLs, and data", "url": "./tools/unitsconverter/index.html"},
            {"name": "Data Extractor", "description": "Create secure passwords with custom options", "url": "./tools/extraction/index.html"},
            {"name": "Finance Resume Parser", "description": "Generate color schemes for design projects", "url": "./tools/financejobmatch/index.html"},
            {"name": "Hotel Guest Management", "description": "Convert between different units of measurement", "url": "./tools/hotelguestmanagement/index.html"},
            {"name": "Smartsheet Guard", "description": "Protect Your Data", "url": "./tools/smartsheet.html"}
        ],
        'lifestyle-tools': [
            {"name": "Password Remover", "description": "Convert files between different formats", "url": "./tools/passwordremover/index.html"},
            {"name": "Meal Idea", "description": "Remove backgrounds from images automatically", "url": "./tools/mealapp/index.html"},
            {"name": "Habit Tracker", "description": "Create short links for long URLs", "url": "./tools/habittracker/index.html"},
            {"name": "Experienced Resume Builder", "description": "Generate various types of barcodes", "url": "./tools/experiencedresumebuilder/index.html"}
        ]
    },
    games: {
        'puzzle-games': [
            {"name": "Wordle Game", "description": "Slide numbered tiles to reach 2048", "url": "https://docs.google.com/spreadsheets/d/1r8gBRx5Prm-du-VoMfOaW06oCghy8o10G6bMY9FDmEQ/copy"},
            {"name": "Memory Game", "description": "Classic number puzzle game", "url": "./games/memory-game/index.html"},
            {"name": "Tic Tac Toe", "description": "Find hidden words in letter grid", "url": "./games/tic-tac-toe/index.html"}
        ],
        'arcade-games': [
            {"name": "Blocks Game", "description": "Guide the snake to eat food and grow", "url": "./games/blocks-game/index.html"},
            {"name": "Billiards Game", "description": "Classic arcade maze game", "url": "./games/billiards-game/index.html"}
        ]
    }
};

// Global variables
let expandedCategories = new Set();
let currentSearch = '';

// Initialize the application
function initializeApp() {
    populateCategories();
    setupEventListeners();
    setupScrollSpy();
    setupMobileMenu();
}

// Populate category items
function populateCategories() {
    console.log('Populating categories...');

    // Templates
    populateCategory('productivity', data.templates.productivity, 'template');
    populateCategory('business', data.templates.business, 'template');
    populateCategory('personal', data.templates.personal, 'template');
    populateCategory('education', data.templates.education, 'template');

    // Tools
    populateCategory('file-tools', data.tools['file-tools'], 'tool');
    populateCategory('business-tools', data.tools['business-tools'], 'tool');
    populateCategory('lifestyle-tools', data.tools['lifestyle-tools'], 'tool');

    // Games
    populateCategory('puzzle-games', data.games['puzzle-games'], 'game');
    populateCategory('arcade-games', data.games['arcade-games'], 'game');
}

function populateCategory(categoryId, items, type) {
    const container = document.getElementById(`${categoryId}-items`);
    if (!container) {
        console.warn(`Container not found for ${categoryId}`);
        return;
    }

    container.innerHTML = '';
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <div class="item__name">${item.name}</div>
            <div class="item__description">${item.description}</div>
        `;

        itemElement.addEventListener('click', () => openItem(item, type));
        container.appendChild(itemElement);
    });
}

// Event listeners setup
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', () => performSearch(searchInput.value));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value);
        });
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length > 2) {
                performSearch(e.target.value);
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Smooth scroll for CTA buttons
    setupSmoothScroll();
}

// Search functionality
function performSearch(query) {
    if (!query.trim()) {
        closeSearchModal();
        return;
    }

    currentSearch = query.toLowerCase();
    const results = [];

    // Search through all categories
    Object.keys(data.templates).forEach(category => {
        data.templates[category].forEach(item => {
            if (item.name.toLowerCase().includes(currentSearch) || 
                item.description.toLowerCase().includes(currentSearch)) {
                results.push({
                    ...item,
                    category: 'Templates',
                    subcategory: category
                });
            }
        });
    });

    Object.keys(data.tools).forEach(category => {
        data.tools[category].forEach(item => {
            if (item.name.toLowerCase().includes(currentSearch) || 
                item.description.toLowerCase().includes(currentSearch)) {
                results.push({
                    ...item,
                    category: 'Tools',
                    subcategory: category
                });
            }
        });
    });

    Object.keys(data.games).forEach(category => {
        data.games[category].forEach(item => {
            if (item.name.toLowerCase().includes(currentSearch) || 
                item.description.toLowerCase().includes(currentSearch)) {
                results.push({
                    ...item,
                    category: 'Games',
                    subcategory: category
                });
            }
        });
    });

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const modal = document.getElementById('searchModal');
    const resultsContainer = document.getElementById('searchResults');

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h4>No results found for "${query}"</h4>
                <p>Try searching with different keywords.</p>
            </div>
        `;
    } else {
        resultsContainer.innerHTML = results.map(item => `
            <div class="search-result" onclick="openItemFromSearch('${item.url}', '${item.name}', '${item.category}')">
                <div class="search-result__title">${item.name}</div>
                <div class="search-result__category">${item.category} - ${item.subcategory}</div>
                <div class="search-result__description">${item.description}</div>
            </div>
        `).join('');
    }

    modal.classList.remove('hidden');
}

// Category toggle functionality
function toggleCategory(categoryId) {
    const container = document.getElementById(`${categoryId}-items`);
    const button = document.querySelector(`[data-category="${categoryId}"] .category-card__toggle`);

    if (!container || !button) return;

    if (expandedCategories.has(categoryId)) {
        container.classList.remove('expanded');
        button.textContent = 'View All';
        expandedCategories.delete(categoryId);
    } else {
        container.classList.add('expanded');
        button.textContent = 'Hide';
        expandedCategories.add(categoryId);
    }
}

// Item opening functionality
function openItem(item, type) {
    showLoadingOverlay(`Opening ${item.name}...`);

    setTimeout(() => {
        hideLoadingOverlay();

        if (item.url.includes('docs.google.com')) {
            // Open Google Sheets template
            window.open(item.url, '_blank');
        } else if (item.url.startsWith('./')) {
            // Open local webapp/game
            window.location.href = item.url;
        } else {
            // Handle other URLs
            window.open(item.url, '_blank');
        }
    }, 1000);
}

function openItemFromSearch(url, name, category) {
    closeSearchModal();
    showLoadingOverlay(`Opening ${name}...`);

    setTimeout(() => {
        hideLoadingOverlay();

        if (url.includes('docs.google.com')) {
            window.open(url, '_blank');
        } else if (url.startsWith('./')) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }, 1000);
}

// Modal functionality
function closeSearchModal() {
    const modal = document.getElementById('searchModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Loading overlay
function showLoadingOverlay(message = 'Loading...') {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.querySelector('p').textContent = message;
        overlay.classList.remove('hidden');
    }
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// Smooth scroll functionality
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Update active nav link
        updateActiveNavLink(sectionId);
    }
}

function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// Scroll spy functionality
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveNavLink(id);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
            mobileBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('mobile-open');
                mobileBtn.classList.remove('active');
            });
        });
    }
}

// Newsletter functionality
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (email) {
        showLoadingOverlay('Subscribing...');

        // Simulate API call
        setTimeout(() => {
            hideLoadingOverlay();
            alert('Thank you for subscribing! You will receive updates about new templates and tools.');
            e.target.reset();
        }, 2000);
    }
}

// Global functions for onclick handlers
window.toggleCategory = toggleCategory;
window.scrollToSection = scrollToSection;
window.closeSearchModal = closeSearchModal;
window.openItemFromSearch = openItemFromSearch;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}