// Force scroll to top on first tab open (first session visit),
// but let the browser naturally restore scroll position on page refresh.
if (!sessionStorage.getItem('visited_session')) {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });
    sessionStorage.setItem('visited_session', 'true');
} else {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
    }
}

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
