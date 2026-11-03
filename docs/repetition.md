# Repetition: React, router, JSON, filter och API

Den här filen sammanfattar det vi gjort i projektet min-sida. Läs den från början till slut en gång, och gå sedan igenom avsnitten du är osäker på.

## 1. Projektstruktur

- `src/App.jsx` har routes: `/` (Hem), `/om-mig`, `/projekt` och `/kontakt`.
- `src/components/` innehåller återanvändbara delar, till exempel Navbar, Footer och ProjektKort.
- `src/pages/` innehåller sidor, till exempel Hem.jsx.
- `src/data/projekt.json` innehåller projektdata. Komponenter importerar den som vanlig JavaScript.

## 2. Router

- React-appen byter sida utan att ladda om webbläsaren. Routern väljer vilken komponent som visas beroende på webbadressen.
- Länkar gör vi med `<Link to="/projekt">`, inte med vanliga `<a href>`, för att inte ladda om hela sidan.

## 3. Mobilmeny och sticky navbar

- `Navbar.jsx` har en state `oppen` (rad 7) som styr om menyn visas.
- Hamburgaren växlar `oppen` och sätter `aria-expanded` så att skärmläsare vet att menyn är öppen.
- I `Navbar.css` gör `position: sticky; top: 0;` att menyn ligger kvar när man scrollar.
- Under 1000 px byter menyn till hamburgare.

## 4. Vercel och publicering

- Vercel bygger projektet från GitHub och publicerar den senaste versionen från branchen `main`.
- Om den publicerade sidan inte visar senaste ändringarna kan orsaken vara att deployen misslyckades, att Vercel är kopplat till fel repo eller branch, eller att man öppnar en gammal deploy.
- Kontrollera under Deployments att senaste commit finns och har status Ready. Kontrollera under Settings → Git att rätt repo och branch är valda.
- Obekräftat: att det finns en `vercel.json` eller att en direkt URL som `/projekt` fungerar utan extra inställning. Testa det på den publicerade sidan innan du drar slutsatser.

## 5. Kontaktformulär

- `KontaktForm.jsx` har states för namn, e-post, meddelande, skickat och fel.
- Formuläret använder `noValidate`, så att vi själva styr valideringen.
- Obekräftat: var formuläret skickar data. Vi har inte hittat någon Formspree-adress i `src/**/*.jsx`, men vi har inte kontrollerat övriga filer.

## 6. JSON som datakälla

- `projekt.json` är en lista med objekt. Varje objekt har samma fält, till exempel `titel`, `beskrivning`, `bild` och `teknik`.
- JSON måste vara giltig: nycklar och textsträngar ska ha dubbla citattecken, och det får inte finnas ett extra komma efter sista objektet.
- `Projekt.jsx` importerar JSON-filen och använder `bilder[p.bild]` för att koppla bildnamnet i JSON till rätt bild.

## 7. Filter och map

- `map` gör en ny lista av JSX, en per objekt. Varje element i listan behöver en unik `key`, så att React vet vilket element som är vilket.
- `filter` gör en ny lista med bara de objekt som uppfyller ett villkor.
- Filterknapparna sätter state `vald`. Sökrutan sätter state `sok`. Listan `synliga` är resultatet av båda.
- `&&` används för att visa något bara om ett villkor är sant, till exempel ett tomt läge när inget matchar.

## 8. API med fetch och useEffect

- `GitHubRepon.jsx` hämtar repon från GitHubs API med `fetch`.
- `useEffect` körs efter att komponenten visats. Det är rätt plats för att hämta data, eftersom hämtningen är en sidoeffekt och inte en del av renderingen.
- Hämtningen har tre lägen: laddar, fel och klart. Felläget kontrollerar `svar.ok`, eftersom `fetch` inte kastar fel för HTTP-fel som 404.
- GitHubs API utan inloggning tillåter ungefär 60 anrop per timme och IP-adress. Ladda inte om sidan i onödan.

## 9. Vanliga fallgropar

- Glöm inte `key` i `map`.
- Ändra inte state direkt, använd alltid setter-funktionen.
- Kontrollera att JSON är giltig när något oväntat händer. Node visar radnummer i felmeddelandet.
- Rensa webbläsarcache (Ctrl+Shift+R) om gammal kod syns.
