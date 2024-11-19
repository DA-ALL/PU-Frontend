const express = require('express');
const path = require('path');
const Bundler = require('parcel-bundler');

const app = express();
const port = 3000;

// Parcel 번들러 설정
const bundler = new Bundler(['public/home.html'], {
outDir: './dist', // 번들된 파일들이 저장될 디렉토리
    watch: true, // 파일 변경 감지
});

app.use(bundler.middleware());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'home.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

