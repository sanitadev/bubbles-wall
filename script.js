// Function to create a bubble
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Set random position within the window
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  bubble.style.left = xPos + 'px';
  bubble.style.top = yPos + 'px';

  // Set random color
  const colors = ['#b3e0ff', '#ff9999', '#99ff99', '#ffcc99', '#cc99ff']; // Array of colors
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
  bubble.style.backgroundColor = randomColor;

  // Set random size
  const size = Math.floor(Math.random() * 30) + 10; // Random size between 10px and 40px
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  // Append the bubble to the container
  document.getElementById('bubble-container').appendChild(bubble);

  // Remove the bubble after a certain time
  setTimeout(() => {
    bubble.remove();
  }, 5000);
}

// Create bubbles periodically
setInterval(createBubble, 1000);
