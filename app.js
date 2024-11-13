/*document.getElementById('generateBtn').addEventListener('click', async function() {
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');

    if (fileInput.files.length === 0) {
        alert('Wybierz plik tekstowy.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function(event) {
        const text = event.target.result;
        status.textContent = 'Tworzenie artykułu...';

        try {
            const response = await fetch('http://localhost:3000/generate-html', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (response.ok) {
                const blob = await response.blob();
                const downloadContainer = document.getElementById('downloadContainer');
                const downloadLink = document.getElementById('downloadLink');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = 'artykul.html';
                downloadContainer.style.display = 'block';
                status.textContent = 'Gotowe! Pobierz artykuł';
            } else {
                status.textContent = 'Wystąpił błąd podczas generowania artykułu.';
            }
        } catch (error) {
            console.error('Błąd:', error);
            status.textContent = 'Wystąpił błąd podczas połączenia z API.';
        }
    };

    reader.readAsText(file);
});*/

document.getElementById('generateBtn').addEventListener('click', function () {
    // Symulacja generowania artykułu (w prawdziwej aplikacji zamieść logikę API)
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Wybierz plik przed generowaniem artykułu.');
        return;
    }

    // Pokazuje, że generowanie artykułu jest w trakcie
    document.getElementById('status').innerText = 'Tworzenie artykułu...';

    // Symulacja odebrania pliku z serwera (zastąp to faktycznym API)
    setTimeout(() => {
        // Tutaj odbierzemy plik (symulacja adresu pliku)
        const articleBlob = new Blob(["<html><body><h1>Przykładowy Artykuł</h1><p>Treść artykułu...</p></body></html>"], { type: 'text/html' });
        const url = URL.createObjectURL(articleBlob);

        // Wyświetlanie przycisku pobierania
        const downloadContainer = document.getElementById('downloadContainer');
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.download = 'artykul.html';
        downloadContainer.style.display = 'grid';

        // Czyszczenie statusu
        document.getElementById('status').innerText = '';
    }, 2000); // Symulacja opóźnienia serwera
});