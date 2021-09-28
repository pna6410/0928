const http = require('http');
const port = process.env.PORT || 3000;

// 웹 서버를 실행해주는 코드
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

// 해당 포트가 들어올 때까지 기다려라 (들어오는 순간 위 코드를 실행)
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
