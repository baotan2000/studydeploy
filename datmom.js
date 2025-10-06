const express = require("express");
// const open = require("open").default;
const app = express();

// Quotes troll hài hước
const trollQuotes = [
  "😎 Anh Đạt bốn lù 😆",
  "😂 Đạt ơi, nhớ uống nước nha 💦",
  "🤣 Anh Đạt siêu nhân lười biếng 💪",
  "😜 Không có ai troll nổi anh Đạt đâu 😏",
  "😝 Anh Đạt = huyền thoại lầy lội 💥"
];

function getRandomQuote() {
  return trollQuotes[Math.floor(Math.random() * trollQuotes.length)];
}

app.get("/", (req, res) => {
  const quote = getRandomQuote();
  res.setHeader("Cache-Control", "no-store");

  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Troll Anh Đạt 😎</title>

      <!-- Google Fonts -->
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
          background: linear-gradient(135deg, #ffec4f 0%, #ff6f61 100%);
          font-family: 'Comic Neue', 'Patrick Hand', cursive, sans-serif;
          color: #000;
          text-align: center;
          overflow: hidden;
        }
        h1 {
          font-size: 6vw;
          animation: bounce 2s ease-in-out infinite;
          margin: 0;
        }
        p {
          font-size: 3vw;
          margin-top: 1em;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
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
          font-size: 1.5em;
          animation: rise 4s linear infinite;
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
      <p>Trang troll đặc biệt dành cho anh Đạt 😝</p>
      <div class="hearts"></div>

      <!-- Nhạc nền troll -->
      <audio autoplay loop>
        <source src="https://www.bensound.com/bensound-music/bensound-funny.mp3" type="audio/mpeg">
      </audio>

      <script>
        const heartsContainer = document.querySelector('.hearts');
        function createHeart() {
          const heart = document.createElement('div');
          heart.className = 'heart';
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.fontSize = (15 + Math.random() * 25) + 'px';
          const emojis = ['😂','🤣','😎','😝','💥'];
          heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          heartsContainer.appendChild(heart);
          setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 200);
      </script>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Troll server running on port ${PORT}`);
//   open(`http://localhost:${PORT}`);
});
