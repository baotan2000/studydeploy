
const express = require("express");
// const open = require("open").default;

const app = express();

const loveQuotes = [
  "🥰 Yêu bé Cải nhiều nhiều 💖💞",
  "💘 Mỗi ngày đều là ngày đặc biệt với bé Cải 💝",
  "💗 Chúc bé Cải luôn cười thật tươi 😘",
  "🌷 Bé Cải là ánh sáng trong tim anh 💕",
  "💖 Bạn gái đẹp nhất vũ trụ 🌸"
];

function getRandomQuote() {
  return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
}

app.get("/", (req, res) => {
  const quote = getRandomQuote();
  res.setHeader("Cache-Control", "no-store");

  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Yêu bé Cải 💖</title>

      <!-- Google Fonts cho đồng bộ PC & Mobile -->
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Patrick+Hand&display=swap" rel="stylesheet">

      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        body {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
          font-family: 'Comic Neue', 'Patrick Hand', cursive, sans-serif;
          color: #fff;
          text-align: center;
          overflow: hidden;
        }
        h1 {
          font-size: 4vw; /* responsive */
          animation: float 3s ease-in-out infinite;
          margin: 0;
        }
        p {
          font-size: 4vw; /* responsive */
          margin-top: 1em;
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
        @media (max-width: 600px) {
          h1 { font-size: 12vw; }
          p { font-size: 6vw; }
        }
      </style>
    </head>
    <body>
      <h1>${quote}</h1>
      <p>Mỗi ngày đều là ngày đáng yêu với bé Cải 💘</p>
      <div class="hearts"></div>

      <audio autoplay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-sunny.mp3" type="audio/mpeg">
      </audio>

      <script>
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
  // open(`http://localhost:${PORT}`);
});
