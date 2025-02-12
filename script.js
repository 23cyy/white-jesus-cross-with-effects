const cross = document.querySelector('.cross');

cross.addEventListener('click', () => {
  // Add a class to trigger the pulse animation
  cross.classList.add('clicked');

  // Remove the class after animation finishes so it can be retriggered
  setTimeout(() => {
    cross.classList.remove('clicked');
  }, 600); // slightly longer than pulse transition
});
