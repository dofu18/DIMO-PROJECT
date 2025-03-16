const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Chỉ định thư mục static (ví dụ 'public' là nơi chứa index.html, css, js)
app.use(express.static('public'));

// Nếu user truy cập trang không tồn tại ➜ trả về index.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
