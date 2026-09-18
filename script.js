// BACK TO TOP BUTTON
const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// MODAL POPUPS
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};


// SCROLL ANIMATIONS (fade + slide)
const fadeElements = document.querySelectorAll('.fade-in');

function handleScrollAnimation() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);


// DARK MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change icon
    themeToggle.textContent = 
        document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
