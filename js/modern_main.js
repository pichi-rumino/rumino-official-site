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

  window.addEventListener('load', () => {
    if (loadingOverlay) {
      // Initial fade-in for loading content (if any, though CSS handles most of it)
      if (loadingContent) {
        loadingContent.style.opacity = 1; // Ensure it's visible before fading out
      }

      // After a short delay, fade out the loading overlay
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.add('hidden');
          loadingOverlay.addEventListener('transitionend', () => {
            loadingOverlay.remove();
          });
        }
      }, 2500); // 画像アニメーション時間(2000ms) + 少しの余裕(500ms)
    }
  });

  // Scroll progress bar
  const scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
});
