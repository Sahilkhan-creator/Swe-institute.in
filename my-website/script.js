// Menu and Navigation Functions

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('overlay');
    
    // Close settings if open
    settingsSidebar.classList.remove('active');
    
    // Toggle main menu
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleSettings() {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('overlay');
    
    // Close main menu if open
    sidebar.classList.remove('active');
    
    // Toggle settings menu
    settingsSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeAll() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('settingsSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Close menus
    closeAll();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function goHome() {
    navigateTo('home');
}

// Search Functions

function searchClasses(query) {
    const cards = document.querySelectorAll('.class-card');
    query = query.toLowerCase();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = query === '' ? 'block' : 'none';
        }
    });
}

function searchNotes(query, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const cards = container.querySelectorAll('.card');
    query = query.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag'))
            .map(t => t.textContent.toLowerCase())
            .join(' ');

        if (title.includes(query) || description.includes(query) || tags.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = query === '' ? 'block' : 'none';
        }
    });
}

function searchContent(query, pageId) {
    const container = document.getElementById(pageId + '-chapters');
    if (!container) return;
    
    const cards = container.querySelectorAll('.card');
    query = query.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag'))
            .map(t => t.textContent.toLowerCase())
            .join(' ');

        if (title.includes(query) || description.includes(query) || tags.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = query === '' ? 'block' : 'none';
        }
    });
}

// FAQ Functions

function toggleFaq(element) {
    const answer = element.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-question span:last-child');
    
    if (answer && icon) {
        answer.classList.toggle('active');
        icon.textContent = answer.classList.contains('active') ? '▲' : '▼';
    }
}

// Form Handling

function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent successfully. We will get back to you at ${email} soon.`);
    
    // Reset form
    event.target.reset();
    
    // You can add actual form submission logic here
    // For example, sending data to a server via fetch/ajax
}

// Smooth Scrolling for Anchor Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Card Click Handlers

document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log('Card clicked:', title);
            // You can add navigation or modal display logic here
        });
    });
    
    // Add click handlers to post cards
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            console.log('Post clicked:', title);
            // You can add navigation to full post logic here
        });
    });
});

// Close menu when clicking outside

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const menuBtn = document.querySelector('.header-right');
    const settingsBtn = document.querySelector('.header-left');
    
    // Check if click is outside sidebars and not on menu buttons
    if (!sidebar.contains(event.target) && 
        !settingsSidebar.contains(event.target) &&
        event.target !== menuBtn && 
        event.target !== settingsBtn) {
        
        if (sidebar.classList.contains('active') || 
            settingsSidebar.classList.contains('active')) {
            closeAll();
        }
    }
});

// Keyboard shortcuts

document.addEventListener('keydown', function(event) {
    // ESC key to close menus
    if (event.key === 'Escape') {
        closeAll();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Console welcome message

console.log('%c🎓 Welcome to SWE Institute!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cEmpowering students with quality education', 'color: #764ba2; font-size: 14px;');
console.log('%c
Developed with ❤️ by Sahil Swe', 'color: #666; font-size: 12px;');
