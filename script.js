// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Perform form submission logic here
    // For example, you can send the data to a server using AJAX or display a success message
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Reset the form
    e.target.reset();
});