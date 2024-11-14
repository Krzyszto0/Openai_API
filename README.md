# Konwerter pliku tekstowego na artykuł HTML
## Uruchomienie aplikacji

Po pobraniu/sklonowaniu repozytorium nalezy pobrać środowisko node.js, jeśli nie jest zainstalowne na urządzeniu:

https://nodejs.org/en/download/prebuilt-installer/current


Następnie nalezy przejść do pobranego folderu:
```
cd <ścieka do folderu>
```

i zainstalować pakiety aplikcji:
```
npm install
```

oraz uruchomić lokalny serwer:
```
node server.js
```

Teraz aby uruchomić aplikację otwieramy plik index.html

## Działanie aplikacji
Aby korzystać z aplikacji potrzebujemy pliku tekstowego o rozszerzeniu .txt, plik z artykułem z zadania znajduje się w pobranym folderze nazwany text.txt.
Nalezy go przeciągnąć w miejsce oznczone "Choose file" lub manualnie wybrać z folderu po kliknięciu "Choose file"

![](/images/image1.png)

Następnie klikamy przycisk "Generuj artykuł HTML" i czekamy na pojawienie się informacji o mozliwości pobrania pliku "artykul.html"

![](/images/image2.png)

Po stworzeniu pliku mozemy go pobrac klikając przycisk "Pobierz artykul".

![](/images/image3.png)

## Wizualizacja artykułu

W pobranym repozytorium znajduje się folder "results" w którym są 3 pliki html. Otwierając plik "szablon.html" i kopiując do niego zawartość stworzonego przez aplikację pliku, mozemy otworzyc plik w przegladarce i zobaczyc prostą wizualizacje otzymanego artukułu.

W folderze znajdują się dwa dodatkowe pliki "artykul.html", przedstawiający przykładowy plik otrzymany z pomocą tej aplikacji. Drugi plik "podglad.html" zawiera wizualizację pliku "artykul.html" z wykorzysaniem szablonu "szablon.html".

![](/images/image4.png)