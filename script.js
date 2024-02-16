// Function to toggle header visibility based on scroll position
function toggleHeaderVisibility() {
    var header = document.getElementById('header');
    var imageContainer = document.querySelector('.fullscreen-image');
    
    // Check if the image container exists
    if (!imageContainer) {
        console.error("Image container not found!");
        return;
    }
    
    var imageContainerHeight = imageContainer.offsetHeight;

    // Listen for scroll events
    window.addEventListener("scroll", function() {
        // Get the current scroll position
        var scrollPosition = window.scrollY || window.pageYOffset;

        // Check if the scroll position is below the image container
        if (scrollPosition > imageContainer.offsetTop + imageContainerHeight) {
            // Add a class to the header to make it visible
            header.classList.add('header-visible');
        } else {
            // Remove the class from the header to hide it
            header.classList.remove('header-visible');
        }
    });
}

// Function to generate random digital rain-like characters
function getRandomDigitalRainCharacter() {
    // Custom set of characters resembling digital rain
    const characters = ['0', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']; // More space characters for gaps
    return characters[Math.floor(Math.random() * characters.length)];
}

// Function to generate randomized time intervals
function getRandomInterval() {
    return Math.floor(Math.random() * 300) + 100; // Adjust for different speeds
}

// Function to create and animate text for a single line
function animateText(y) {
    const textGroup = document.getElementById('textGroup');
    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute("fill", "#7d9ddf");
    textElement.setAttribute("style", "font-size: 20px; text-anchor: middle; dominant-baseline: hanging; white-space: pre;");
    textElement.setAttribute("y", y);
    textGroup.appendChild(textElement);

    const textContent = Array.from({ length: 150 }, () => getRandomDigitalRainCharacter()).join(''); // Reduced number of characters
    const characters = textContent.trim().split('');
    let x = 500 - characters.length * 5; // Center the text horizontally
    const offset = 10; // Adjust for spacing between characters
    characters.forEach(char => {
        const charElement = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
        charElement.textContent = char;
        charElement.setAttribute("x", x);
        textElement.appendChild(charElement);
        // Toggle visibility at random intervals
        setInterval(() => {
            charElement.textContent = getRandomDigitalRainCharacter(); // Change character randomly
        }, getRandomInterval());
        x += offset; // Update x position with fixed offset
    });
}

// Call the function to toggle header visibility
toggleHeaderVisibility();

// Call animateText function for each text line
for (let i = 0; i < 50; i++) {
    animateText(i * 20); // Adjust the multiplier for vertical spacing
}
