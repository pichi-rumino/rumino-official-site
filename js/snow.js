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

  const numSnowflakes = 50;

  for (let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️'; // 雪の絵文字
    snowflake.style.position = 'absolute';
    snowflake.style.color = '#ffffff'; // 白い雪
    snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}rem`; // サイズをランダムに
    snowflake.style.opacity = `${Math.random() * 0.7 + 0.3}`; // 透明度をランダムに
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.top = `${Math.random() * 100}vh`;
    snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
    snowflake.style.animationDelay = `${Math.random() * 10}s`;
    snowContainer.appendChild(snowflake);
  }

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fall {
      0% {
        transform: translateY(-10vh) translateX(0);
      }
      100% {
        transform: translateY(100vh) translateX(5vw);
      }
    }
  `;
  document.head.appendChild(style);
});