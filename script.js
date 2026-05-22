document.addEventListener('DOMContentLoaded', () => {
    const a11yToggle = document.getElementById('a11y-toggle');
    const htmlEl = document.documentElement;
    
    // Check local storage for preference
    const a11yPref = localStorage.getItem('a11yMode');
    if (a11yPref === 'true') {
        htmlEl.classList.add('a11y-mode');
        updateToggleBtn(true);
    }

    a11yToggle.addEventListener('click', () => {
        htmlEl.classList.toggle('a11y-mode');
        const isActive = htmlEl.classList.contains('a11y-mode');
        localStorage.setItem('a11yMode', isActive);
        updateToggleBtn(isActive);
    });

    function updateToggleBtn(isActive) {
        const span = a11yToggle.querySelector('.a11y-text');
        if (isActive) {
            span.textContent = 'Обычная версия';
        } else {
            span.textContent = 'Версия для слабовидящих';
        }
    }
});
