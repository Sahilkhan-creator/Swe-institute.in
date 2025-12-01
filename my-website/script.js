// Define all functions in global scope FIRST
window.toggleMenu = function() {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('overlay');
    
    if (settingsSidebar) settingsSidebar.classList.remove('active');
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

window.toggleSettings = function() {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) sidebar.classList.remove('active');
    if (settingsSidebar) settingsSidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
}

window.closeAll = function() {
    const sidebar = document.getElementById('sidebar');
    const settingsSidebar = document.getElementById('settingsSidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) sidebar.classList.remove('active');
    if (settingsSidebar) settingsSidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

window.navigateTo = function(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    closeAll();
    window.scrollTo(0, 0);
}

window.goHome = function() {
    navigateTo('home');
}

window.searchClasses = function(query) {
    const cards = document.querySelectorAll('.class-card');
    query = query.toLowerCase();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query) || query === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.searchNotes = function(query, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const cards = container.querySelectorAll('.card');
    query = query.toLowerCase();

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query) || query === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

window.toggleFaq = function(element) {
    const answer = element.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-question span:last-child');
    
    if (answer && icon) {
        answer.classList.toggle('active');
        icon.textContent = answer.classList.contains('active') ? '▲' : '▼';
    }
}

window.handleSubmit = function(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    
    alert('Thank you, ' + name + '! Your message has been sent successfully.');
    form.reset();
}

// Wait for page to load completely
document.addEventListener('DOMContentLoaded', function() {
    console.log('SWE Institute loaded successfully!');
    
    // Add click handler to overlay
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeAll);
    }
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAll();
        }
    });
});
