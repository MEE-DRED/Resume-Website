// Toggle navigation for main-toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Toggle dark mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    const emailPattern = /^\S+@\S+\.\S+$/;

    if (!name || !email || !message) {
        alert('All fields are required.');
        e.preventDefault();
    } else if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    } else {
        alert('Form submitted successfully!');
        // Optional: form.reset();
    }
});
