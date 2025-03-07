const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('pipeline running on 8th of march running on morning'));
app.listen(3000, () => console.log('Server running on port 3000'));
