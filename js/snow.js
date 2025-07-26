document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  let W, H;
  const snowflakes = [];
  const numSnowflakes = 200; // 雪の数を増やす

  function resizeCanvas() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function Snowflake() {
    this.x = Math.random() * W; // 画面全体にランダムな初期位置
    this.y = Math.random() * H;
    this.r = Math.random() * 4 + 1; // 半径 (1px - 5px)
    this.d = Math.random() * numSnowflakes; // 密度
    this.velocity = Math.random() * 2 + 1; // 落下速度 (1px/frame - 3px/frame)
    this.opacity = Math.random() * 0.8 + 0.2; // 透明度

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
      ctx.shadowBlur = this.r / 2;
      ctx.fill();
    };

    this.update = function() {
      this.y += this.velocity; // 落下

      // 画面下部に到達したら上に戻す
      if (this.y > H) {
        this.y = -this.r; // 画面上部に戻す
        this.x = Math.random() * W; // 新しいX座標
        this.velocity = Math.random() * 2 + 1; // 新しい落下速度
        this.opacity = Math.random() * 0.8 + 0.2; // 新しい透明度
      }
    };
  }

  for (let i = 0; i < numSnowflakes; i++) {
    snowflakes.push(new Snowflake());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H); // キャンバスをクリア

    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = snowflakes[i];
      snowflake.draw();
      snowflake.update();
    }

    requestAnimationFrame(animate);
  }

  animate();
});