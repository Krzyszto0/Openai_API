document.getElementById('generateBtn').addEventListener('click', async function() {
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
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(blob);
                downloadLink.download = 'artykul.html';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                status.textContent = 'Gotowe!';
            } else {
                status.textContent = 'Wystąpił błąd podczas generowania artykułu.';
            }
        } catch (error) {
            console.error('Błąd:', error);
            status.textContent = 'Wystąpił błąd podczas połączenia z API.';
        }
    };

    reader.readAsText(file);
});