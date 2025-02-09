const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const result = document.getElementById('result');

flipButton.addEventListener('click', () => {
  // Disable button during animation
  flipButton.disabled = true;

  // Randomly choose heads or tails
  const random = Math.random();
  const isHeads = random < 0.5;

  // Add flip animation
  coin.classList.add('flip-animation');

  // Wait for animation to finish
  setTimeout(() => {
    coin.classList.remove('flip-animation');

    // Set the result
    if (isHeads) {
      coin.style.transform = 'rotateY(0deg)';
      result.textContent = 'Heads!';
    } else {
      coin.style.transform = 'rotateY(180deg)';
      result.textContent = 'Tails!';
    }

    // Re-enable button
    flipButton.disabled = false;
  }, 2000); // Match the duration of the animation
});