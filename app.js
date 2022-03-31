const express = require('express');
const app = express();
const path = require('path')
const port = 3030

app.use(express.static(path.resolve(__dirname, "public")))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views', 'home.html')))

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));


