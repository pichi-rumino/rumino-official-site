document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingContent = document.querySelector('.loading-content');
  const mainContent = document.querySelector('main'); // main要素を取得

  // ページの読み込みが完了したらアニメーションを開始
  window.addEventListener('load', () => {
    if (loadingContent) {
      loadingContent.style.opacity = 1; // アニメーション開始
    }

    // アニメーションの完了を待ってからオーバーレイを非表示にする
    setTimeout(() => {
      if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
        loadingOverlay.addEventListener('transitionend', () => {
          loadingOverlay.remove();
          if (mainContent) {
            mainContent.style.display = 'block'; // main要素を表示
          }
        });
      }
    }, 2500); // 画像アニメーション時間(2000ms) + 少しの余裕(500ms)
  });
});