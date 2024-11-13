const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const OpenAIApi = require('openai');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// Skonfiguruj OpenAI API
const openai = new OpenAIApi({apiKey: process.env.apiKey});

app.post('/generate-html', async (req, res) => {
    console.log("Generating HTML file")
    const { text } = req.body;
    const prompt = "Podany tekst przekształć na artykuł w formacie HTML, wypisz jedynie kod w pomiędzy tagami <body> </body>, nie dołączaj znaczników <html>, <head> ani <body>. Zwróć uwagę na wykorzystanie odpowiednich tagów języka html, rozróżnij nagłówki, akapity i podziały strony. Określ miejsca w których będą dobrze wpasowywać się grafiki, w takie miejsce wstaw tag </img> z atrybutem src=\"image_placeholder.jpg\". Dodaj atrybut alt do każdego obrazka z dokładnym promptem, który możemy użyć do wygenerowania grafiki. Umieść podpisy pod grafikami używając odpowiedniego tagu HTML."

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-4',
            messages: [
                { 
                    role: 'user', 
                    content: `${prompt}: 
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