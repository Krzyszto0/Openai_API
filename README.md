# Konwerter pliku tekstowego na artykuł HTML
## Uruchomienie aplikacji

Po pobraniu repozytorum nalezy na komputerze otworzyć terminal/wiersz poleceń i wpisać następujące komendy:

Dla systemu Windows:
```
winget install Schniz.fnm
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 22
```

Dla systemu MacOS/Linux:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 22
```

Sprawdzamy czy node.js zainstalował się poprawnie
```
node -v # powinno wypisać `v22.11.0`

npm -v # powinno wypisać `10.9.0`
```

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

![](/images/Screenshot%202024-11-13%20at%2022.04.27.png)

Następnie klikamy przycisk "Generuj artykuł HTML" i czekamy na pojawienie się informacji o mozliwości pobrania pliku "artykul.html"

![](/images/Screenshot%202024-11-14%20at%2015.50.09.png)

Po stworzeniu pliku mozemy go pobrac klikając przycisk "Pobierz artykul".

![](/images/Screenshot%202024-11-14%20at%2015.51.25.png)

## Wizualizacja artykułu

W pobranym repozytorium znajduje się folder "results" w którym są 3 pliki html. Otwierając plik "szablon.html" i kopiując zawartość stworzonego przez aplikację pliku, mozemy otworzyc plik w przegladarce i zobaczyc prostą wizualizacje otzymanego artukułu.

![](/images/Screenshot%202024-11-14%20at%2015.55.05.png)

W folderze znajdują się dwa dodatkowe pliki "artykul.html", przedstawiający przykładowy plik otrzymany z pomocą tej aplikacji. Drugi plik "podglad.html" zawiera wizualizację pliku "artykul.html" z wykorzysaniem szablonu "szablon.html".