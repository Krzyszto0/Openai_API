const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const OpenAIApi = require('openai');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// Skonfiguruj OpenAI API
const openai = new OpenAIApi({apiKey: process.env.apiKey});

app.post('/generate-html', async (req, res) => {
    console.log("Generating HTML file")
    const { text } = req.body;
    const promptHead = process.env.promptHead;
    const firstArgument = process.env.firstArgument;
    const secondArgument = process.env.secondArgument;
    const thirdArgument = process.env.thirdArgument;
    const fourthArgument = process.env.fourthArgument;
    const fifthArgument = process.env.fifthArgument;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { 
                    role: 'user', 
                    content: `${promptHead}
                                ${firstArgument}
                                ${secondArgument}
                                ${thirdArgument}
                                ${fourthArgument}
                                ${fifthArgument}

                                ${text}` 
                }]
        });

        const htmlContent = completion.choices[0].message.content;

        // Zapisz treść HTML do pliku
        fs.writeFileSync('artykul.html', htmlContent);

        res.download('artykul.html');
    } catch (error) {
        console.error('Błąd:', error);
        res.status(500).send('Błąd podczas komunikacji z OpenAI API');
    }
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});