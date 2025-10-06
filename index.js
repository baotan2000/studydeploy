
const express = require("express");
const cors = require("cors");
const open = require("open").default;

const app = express();
app.use(cors());

// Endpoint test
app.get("/", (req, res) => {
  console.log("💗 Đang gửi yêu thương đến chị Cải...");
  res.setHeader("Cache-Control", "no-store");

  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Yêu bé Cải 💖</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
          font-family: 'Comic Sans MS', cursive, sans-serif;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }
        h1 {
          font-size: 3em;
          animation: float 3s ease-in-out infinite;
        }
        p {
          font-size: 1.5em;
          margin-top: 20px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .heart {
          position: absolute;
          color: #ff69b4;
          font-size: 1.5em;
          animation: rise 5s linear infinite;
        }
        @keyframes rise {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-50vh) scale(1); opacity: 0; }
        }
      </style>
    </head>
    <body>
      <h1>🥰 Yêu bé Cải nhiều nhiều 💖💞</h1>
      <p>Mỗi ngày đều là ngày đặc biệt với bé Cải 💘</p>

      <div class="hearts"></div>

      <script>
        // Tạo tim rơi random
        const heartsContainer = document.querySelector('.hearts');
        function createHeart() {
          const heart = document.createElement('div');
          heart.className = 'heart';
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.fontSize = (10 + Math.random() * 20) + 'px';
          heart.textContent = '💖';
          heartsContainer.appendChild(heart);
          setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);
      </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  open(`http://localhost:${PORT}`);
});
