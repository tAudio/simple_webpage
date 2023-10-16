document.querySelector('.hamburger').addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});
