// Shared content loader — fetches content.json once and caches the result.
// Call loadContent(callback) from any page script.
const _contentPromise = fetch('/content.json').then(r => r.json());

function loadContent(callback) {
    _contentPromise
        .then(callback)
        .catch(error => console.error('Error loading content:', error));
}

// Auto-update copyright year on every page
const _yearEl = document.getElementById('copyright-year');
if (_yearEl) _yearEl.textContent = new Date().getFullYear();
