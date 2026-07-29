document.addEventListener("DOMContentLoaded", () => {
    // Configuration for the Intersection Observer
    const observerOptions = {
        root: null, // use the viewport as the bounding box
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                
                // Stop observing the element once it has animated in
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the 'animate-on-scroll' class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    animatedElements.forEach(el => observer.observe(el));
});