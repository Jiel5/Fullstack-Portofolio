// Add this script to your script.js file
// Make sure to include typed.js library in your HTML:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    // Typed.js initialization
    const typed = new Typed('.typed-text', {
        strings: [
            'Fullstack Developer',
            'Web Designer',
            'UI/UX Enthusiast',
            'Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
});