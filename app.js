// EffortlesslyDone - Complete JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('EffortlesslyDone initialized');
    initializeApp();
});

// Your actual data structure with real URLs
const data = {
    templates: {
        productivity: [
            {"name": "Drive Folder/File Listing Tool", "description": "List All Files from Any Folder in Seconds!", "url": "./template/filelister.html"},
            {"name": "Task Tracker Reminder", "description": "Organize daily tasks with time tracking", "url": "./template/tasktracker.html"},
            {"name": "Change Log Tracker", "description": "Monitor Cell-Level Edits Automatically!", "url": "./template/changelog.html"},
            {"name": "Gmail Search & Organize Tool", "description": "Search, Export, and Clean Your Inbox in One Click!", "url": "./template/gmailsearch.html"},
            {"name": "Gmail To Sheet Extractor Tool", "description": "Filter, Search & Export Emails in Seconds!", "url": "./template/gmailtosheet.html"},
            {"name": "Send Email from Sheet", "description": "Personalized Emails Directly from Google Sheets", "url": "./template/sendmail.html"},
            {"name": "GSheet Keywords Search", "description": "Search Made Easy", "url": "https://docs.google.com/spreadsheets/d/1fcBaqxUPFsEfkw8dJWv_jdIArzBsBsYLeb0KwOTdBUc/copy"},
            {"name": "Pre-Filled GForm", "description": "Create Prefilled Google Form Links in Bulk","url": "./template/gform.html"}
        ],
        business: [
            {"name": "Precious Metal Transaction Sheet", "description": "Aggregation for a combined invoice", "url": "./template/preciousmetal.html"},
            {"name": "Real-Time NSE Dashboard", "description": "Easy way to Track your Stock Portfolio", "url": "https://docs.google.com/spreadsheets/d/170G-ir3p0u3LYGcjCf0f_HPxDgn7CwFrGfMfhhZcNIs/copy"},
            {"name": "Inventory Management System with Reminder", "description": "Smart Inventory Management with Daily Alerts", "url": "./template/inventory.html"},
            {"name": "Bulk Invoice Generator", "description": "Generative Invoices in a Click!", "url": "https://docs.google.com/spreadsheets/d/1hQnOOubhbWVSGcJ_6RAao7aBSZugitMmzubGMxwMO50/copy"},
            {"name": "Smart Tab Generator", "description": "Instantly Split Data by Column Values in Google Sheets", "url": "./template/smarttab.html"},
            {"name": "Shared Materials Tracker", "description": "Manage and Track Shared Resources with Ease", "url": "./template/sharedmaterial.html"},
            {"name": "YouTube Link Generator", "description": "Get Bulk Youtube Links at a GO!!", "url": "https://docs.google.com/spreadsheets/d/1EC_j8F0TtvgbLCrvPlasmllI8Dgo2-2MP0too_2hgQM/copy"}
        ],
        personal: [
            {"name": "WhatsApp Messaging Tool", "description": "Reminders to send messages/ wishes to friends and family", "url": "./template/whatsapp.html"},
            {"name": "BarCode & QRCode Generator", "description": "Create Barcodes or QR codes for your Products", "url": "./template/barcode.html"},
            {"name": "Change Font Template", "description": "Change Fonts Across Multiple Sheets in One Click!", "url": "./template/changefont.html"},
            {"name": "Conditional Formatting", "description": "Simple way to format your Sheets", "url": "https://docs.google.com/spreadsheets/d/10YbpPdUNXxFRTSPUOwERzFX7_4hRdTVd9SbBqLhNKOw/copy"}
        ],
        education: [
            {"name": "Student Progress Tracker", "description": "Plan and Track my progress", "url": "https://docs.google.com/spreadsheets/d/1gMUTkvIuvqs4CDsOeldcvbnoGwEPKdrSJLoRHcdYgCo/copy"},
            {"name": "Resume Template Builder", "description": "Entry Level Resumes for Free", "url": "https://docs.google.com/spreadsheets/d/1laxbDjTNP5JEdxvJtBgMnJyHai3nChMl1Py-mgqSUeA/copy"}
        ]
    },
    tools: {
        'file-tools': [
            {"name": "PDF Combiner & Extractor", "description": "Merge multiple PDF files into one", "url": "./tools/pdfmerge/index.html"},
            {"name": "Excel Converter", "description": "Convert to .xlsx format", "url": "./tools/excelconverter/index.html"},
            {"name": "Text Cleaner", "description": "Get formatted text", "url": "./tools/cleaner/index.html"},
            {"name": "File Rename and Organizer", "description": "Bulk rename all files in your Folder", "url": "./tools/filerenameandorganizer/index.html"}
        ],
        'business-tools': [
            {"name": "Image Resizer", "description": "Resize any Image for Free!!", "url": "./tools/imageresizer/index.html"},
            {"name": "Units Converter", "description": "Convert Units easily", "url": "./tools/unitsconverter/index.html"},
            {"name": "Data Extractor", "description": "Extract specific information from Text", "url": "./tools/extraction/index.html"},
            {"name": "Finance Resume Parser", "description": "Generate color schemes for design projects", "url": "./tools/financejobmatch/index.html"},
            {"name": "Hotel Guest Management", "description": "Template to manage Hotel Room Booking", "url": "./tools/hotelguestmanagement/index.html"},
            {"name": "Smartsheet Guard", "description": "Protect Your Data", "url": "./tools/smartsheet.html"}
        ],
        'lifestyle-tools': [
            {"name": "Password Remover", "description": "Remove passwords from multiple files in Bulk", "url": "./tools/passwordremover/index.html"},
            {"name": "Meal Idea", "description": "Get daily meal suggestions", "url": "./tools/mealapp/index.html"},
            {"name": "Habit Tracker", "description": "Build your Habits for better Lifestyle", "url": "./tools/habittracker/index.html"},
            {"name": "Experienced Resume Builder", "description": "Experienced Resumes for Free", "url": "./tools/experiencedresumebuilder/index.html"}
        ]
    },
    games: {
        'puzzle-games': [
            {"name": "Wordle Game", "description": "Test your Words Power", "url": "https://docs.google.com/spreadsheets/d/1r8gBRx5Prm-du-VoMfOaW06oCghy8o10G6bMY9FDmEQ/copy"},
            {"name": "Memory Game", "description": "Test your Memory", "url": "./games/memory-game/index.html"},
            {"name": "Tic Tac Toe", "description": "Multiple Level Grid Play", "url": "./games/tic-tac-toe/index.html"}
        ],
        'arcade-games': [
            {"name": "Blocks Game", "description": "Building Bricks", "url": "./games/blocks-game/index.html"},
            {"name": "Billiards Game", "description": "Classic arcade Game", "url": "./games/billiards-game/index.html"}
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
