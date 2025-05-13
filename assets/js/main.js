// Main JavaScript file for JuggleTech Dashboard

// Progress bar animation
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });
});

// Module card hover effect
document.addEventListener('DOMContentLoaded', function() {
    const moduleCards = document.querySelectorAll('.module-card');
    
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('transform', 'scale-[1.02]');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('transform', 'scale-[1.02]');
        });
    });
});

// Achievement tooltip
document.addEventListener('DOMContentLoaded', function() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    achievementItems.forEach(item => {
        const tooltip = item.querySelector('.achievement-tooltip');
        
        if (tooltip) {
            item.addEventListener('mouseenter', function() {
                tooltip.classList.remove('hidden');
            });
            
            item.addEventListener('mouseleave', function() {
                tooltip.classList.add('hidden');
            });
        }
    });
});
