const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const brainfuckInterpreter = require('./brainfuckInterpreter');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post('/execute', (req, res) => {
    const { script } = req.body;
    try {
        const output = brainfuckInterpreter(script);
        res.json({ success: true, output });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Brainfuck Script Backend running on port ${PORT}`);
});