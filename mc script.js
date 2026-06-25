// Loader
window.onload = () => {
  document.getElementById('loader').style.display = 'none';
};

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Counters
function animateCounter(id, target) {
  let count = 0;
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      element.textContent = count; // update the number on screen
    } else {
      clearInterval(interval); // stop when target is reached
    }
  }, 50); // speed of counting (ms)
}

// Example usage: animateCounter("visitors", 100);

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.85)";
    navbar.style.boxShadow = "0 0 15px rgba(255,215,0,0.4)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.boxShadow = "none";
  }
});
