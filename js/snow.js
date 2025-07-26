document.addEventListener('DOMContentLoaded', () => {
  const snowContainer = document.createElement('div');
  snowContainer.style.position = 'fixed';
  snowContainer.style.top = '0';
  snowContainer.style.left = '0';
  snowContainer.style.width = '100%';
  snowContainer.style.height = '100%';
  snowContainer.style.pointerEvents = 'none';
  snowContainer.style.overflow = 'hidden';
  snowContainer.style.zIndex = '9999';
  document.body.appendChild(snowContainer);

  const numSnowflakes = 100; // 雪の数を増やす

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowContainer.appendChild(snowflake);

    const size = Math.random() * 3 + 2; // サイズをランダムに (2px - 5px)
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.background = '#ffffff'; // 白い雪
    snowflake.style.borderRadius = '50%'; // 丸い雪の結晶
    snowflake.style.opacity = `${Math.random() * 0.8 + 0.2}`; // 透明度をランダムに
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animation = `fall ${Math.random() * 15 + 5}s linear infinite`; // 落下速度をランダムに
    snowflake.style.animationDelay = `${Math.random() * 15}s`;

    // 横方向の揺れを追加
    const sway = Math.random() * 10 + 5; // 揺れの幅をランダムに
    const direction = Math.random() > 0.5 ? 1 : -1; // 揺れる方向をランダムに
    snowflake.style.animationName = `fall, sway${direction > 0 ? 'Right' : 'Left'}`;
    snowflake.style.animationDuration = `${Math.random() * 15 + 5}s, ${Math.random() * 5 + 2}s`;
    snowflake.style.animationTimingFunction = `linear, ease-in-out`;
    snowflake.style.animationIterationCount = `infinite, infinite`;
    snowflake.style.animationDelay = `${Math.random() * 15}s, ${Math.random() * 5}s`;
  }

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fall {
      0% {
        transform: translateY(-10vh);
      }
      100% {
        transform: translateY(100vh);
      }
    }
    @keyframes swayRight {
      0% { transform: translateX(0); }
      50% { transform: translateX(15vw); } /* 揺れの幅を広げる */
      100% { transform: translateX(0); }
    }
    @keyframes swayLeft {
      0% { transform: translateX(0); }
      50% { transform: translateX(-15vw); } /* 揺れの幅を広げる */
      100% { transform: translateX(0); }
    }
  `;
  document.head.appendChild(style);
});