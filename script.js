// Анимация счетчиков на главной странице
document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'stat-players', target: 1400000, suffix: 'M+' }, // Условно
        { id: 'stat-maps', target: 7, suffix: '' },
        { id: 'stat-rank', target: 25000, suffix: '' }
    ];

    counters.forEach(counter => {
        const el = document.getElementById(counter.id);
        if (!el) return;

        let current = 0;
        const increment = counter.target / 60; // ~1 секунда при 60fps
        const timer = setInterval(() => {
            current += increment;
            if (current >= counter.target) {
                current = counter.target;
                clearInterval(timer);
            }
            // Форматирование чисел
            let displayValue = Math.floor(current);
            if (counter.target > 1000) {
                displayValue = (displayValue / 1000).toFixed(1) + 'K';
            }
            el.textContent = displayValue + counter.suffix;
        }, 16);
    });

    // Подсветка активной страницы (дополнительная страховка)
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});