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
            {"name": "PDF Combiner & Extractor", "description": "Merge multiple PDF files into one", "url": "https://decomplicate.github.io/decomplicate.github.io/tools/pdfmerge.html"},
            {"name": "Excel Converter", "description": "Convert to .xlsx format", "url": "https://decomplicate.github.io/decomplicate.github.io/tools/excelconverter.html"},
            {"name": "Text Cleaner", "description": "Get formatted text", "url": "https://decomplicate.github.io/decomplicate.github.io/tools/cleaner.html"},
            {"name": "File Rename and Organizer", "description": "Bulk rename all files in your Folder", "url": "https://decomplicate.github.io/decomplicate.github.io/tools/filerenameandorganizer.html"}
        ],
        'business-tools': [
            {"name": "Image Resizer", "description": "Resize any Image for Free!!", "url": "./tools/imageresizer.html"},
            {"name": "Units Converter", "description": "Convert Units easily", "url": "https://decomplicate.github.io/tools/unitsconverter.html"},
            {"name": "Data Extractor", "description": "Extract specific information from Text", "url": "https://decomplicate.github.io/tools/extraction.html"},
            {"name": "Finance Resume Parser", "description": "Generate color schemes for design projects", "url": "https://decomplicate.github.io/tools/financejobmatch.html"},
            {"name": "Hotel Guest Management", "description": "Template to manage Hotel Room Booking", "url": "https://decomplicate.github.io/tools/hotelguestmanagement.html"},
            {"name": "Smartsheet Guard", "description": "Protect Your Data", "url": "https://decomplicate.github.io/tools/smartsheet.html"}
        ],
        'lifestyle-tools': [
            {"name": "Password Remover", "description": "Remove passwords from multiple files in Bulk", "url": "https://decomplicate.github.io/decomplicate.github.io/tools/passwordremover.html"},
            {"name": "Meal Idea", "description": "Get daily meal suggestions", "url": "https://decomplicate.github.io/tools/mealapp.html"},
            {"name": "Habit Tracker", "description": "Build your Habits for better Lifestyle", "url": "https://decomplicate.github.io/tools/habittracker.html"},
            {"name": "Experienced Resume Builder", "description": "Experienced Resumes for Free", "url": "https://decomplicate.github.io/tools/experiencedresumebuilder.html"}        ]
    },
    games: {
        'puzzle-games': [
            {"name": "Wordle Game", "description": "Test your Words Power", "url": "https://docs.google.com/spreadsheets/d/1r8gBRx5Prm-du-VoMfOaW06oCghy8o10G6bMY9FDmEQ/copy"},
            {"name": "Memory Game", "description": "Test your Memory", "url": "https://decomplicate.github.io/games/memory-game.html"},
            {"name": "Tic Tac Toe", "description": "Multiple Level Grid Play", "url": "https://decomplicate.github.io/games/tic-tac-toe.html"}
        ],
        'arcade-games': [
            {"name": "Blocks Game", "description": "Building Bricks", "url": "https://decomplicate.github.io/games/blocks-game.html"},
            {"name": "Billiards Game", "description": "Classic arcade Game", "url": "https://decomplicate.github.io/games/billiard.html"}
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

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    const navLinks = nav.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('mobile-open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mobile-open');
        });
    });
}

// Function to handle opening an item
function openItem(item, type) {
    console.log(`Opening ${type}: ${item.name}`);
    // For now, we'll just open the URL.
    // In a more complex app, this might open a modal or navigate to a dedicated page.
    window.open(item.url, '_blank');
}

// Category toggling
window.toggleCategory = function(categoryId) {
    const itemsContainer = document.getElementById(categoryId + '-items');
    const toggleButton = itemsContainer.nextElementSibling;
    
    if (expandedCategories.has(categoryId)) {
        itemsContainer.classList.remove('expanded');
        toggleButton.textContent = 'View All';
        expandedCategories.delete(categoryId);
    } else {
        itemsContainer.classList.add('expanded');
        toggleButton.textContent = 'View Less';
        expandedCategories.add(categoryId);
    }
};

// Search functionality
function performSearch(query) {
    if (query.length < 3) {
        alert('Please enter at least 3 characters to search.');
        return;
    }
    
    showLoadingOverlay();

    // Clear previous results
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    searchResultsContainer.innerHTML = '';
    currentSearch = query;

    const results = findResults(query);

    setTimeout(() => {
        hideLoadingOverlay();
        displayResults(results);
        showSearchModal();
    }, 1000); // Simulate network delay
}

function findResults(query) {
    const lowerQuery = query.toLowerCase();
    const results = [];

    function searchInObject(obj, type) {
        for (const category in obj) {
            obj[category].forEach(item => {
                if (item.name.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery)) {
                    results.push({ ...item, type: type, category: category });
                }
            });
        }
    }

    searchInObject(data.templates, 'Template');
    searchInObject(data.tools, 'Tool');
    searchInObject(data.games, 'Game');

    return results;
}

function displayResults(results) {
    const container = document.getElementById('searchResultsContainer');
    if (results.length === 0) {
        container.innerHTML = `<p>No results found for "${currentSearch}".</p>`;
    } else {
        results.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result';
            resultElement.innerHTML = `
                <h4>${item.name} <small>(${item.type})</small></h4>
                <p>${item.description}</p>
            `;
            resultElement.addEventListener('click', () => {
                openItem(item, item.type);
                hideSearchModal();
            });
            container.appendChild(resultElement);
        });
    }
}

// Modal functionality
const searchModal = document.getElementById('searchModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideSearchModal);
}

if (searchModal) {
    searchModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            hideSearchModal();
        }
    });
}

function showSearchModal() {
    searchModal.classList.remove('hidden');
}

function hideSearchModal() {
    searchModal.classList.add('hidden');
}

function showLoadingOverlay() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoadingOverlay() {
    loadingOverlay.classList.add('hidden');
}


// Newsletter form submission handler
function handleNewsletterSubmit(event) {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
}

// A generic function for smooth scrolling, used by the CTA buttons
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Scroll spy for navigation
function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.header__nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });
}
