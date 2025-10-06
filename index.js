const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Endpoint test
app.get("/", (req, res) => {
  res.send("🚀 Server chạy ngon lành!");
});

// Lưu ý: Render sẽ tự cấp PORT qua biến môi trường
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
