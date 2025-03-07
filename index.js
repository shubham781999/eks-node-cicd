const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('pipeline running on 6th of march running ccooddee'));
app.listen(3000, () => console.log('Server running on port 3000'));
