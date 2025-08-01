document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('.main-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Loading overlay fade out
  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingContent = document.querySelector('.loading-content');
  const walkingCat = document.getElementById('walking-cat');

  window.addEventListener('load', () => {
    if (loadingOverlay) {
      if (loadingContent) {
        loadingContent.style.opacity = 1;
      }

      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.add('hidden');
          loadingOverlay.addEventListener('transitionend', () => {
            loadingOverlay.remove();
          });
        }
      }, 2500);
    }

    // Start cat animation 10 seconds after page load
    setTimeout(() => {
      if (walkingCat) {
        walkingCat.style.visibility = 'visible';
        walkingCat.style.animationPlayState = 'running';
      }
    }, 10000);
  });

  // Scroll progress bar
  const scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';

    // Keep cat visible and animated regardless of scroll
    if (walkingCat) {
      walkingCat.style.visibility = 'visible';
      walkingCat.style.animationPlayState = 'running';
    }
  });
});
