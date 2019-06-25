# Coding Challenge

## Aufgabe 1

Unter `src/data/forecast.json` findest du ein JSON-File mit Wetterdaten für eine Voraussage von 4 Tagen.
Lade diese Wetterdaten asynchron in der App.js Komponente und rendere die Beschreibung, die Temperatur sowie das zugehörige Datum (zu finden unter `item.weather[0].main`, `item.dt_text` und `item.main.temp`) in einer einfachen Liste.

### Kommentar Tibor: Die forecast.json vielleicht in 'public' verschieben sodass es einfach ist, die per http://localhost:3000/forecast.json zu laden.

## Aufgabe 2

Sortiere die Daten nach Timestamp - relevante Property hierzu ist `item.dt`.

### Kommentar Tibor: Die Daten vorher in eine zufaellige Reihenfolge bringen.

## Aufgabe 3

Zeige für jedes Wetter das entsprechende Icon an - die Icons findest du unter `src/icons/*.svg`. Den Name des Icons findest du in den Daten unter `item.weather[0].icon`.

### Kommentar Tibor: Die Icons vielleicht auch in 'public/icons' verschieben.

## Aufgabe 4

Grundsätzlich sollen in der Liste pro Zeitpunkt nur Uhrzeit, Temperatur und Wetter-Icon angezeigt werden. Da es aber noch deutlich mehr Daten gibt, die angezeigt werden sollen, soll es möglich sein, bei einem Klick auf ein Wetter-Icon mehr Details darunter anzuzeigen. Wichtig sind dabei:
- Luftfeuchtigkeit
- Luftdruck
- Min. Temperatur
- Max. Temperatur

##  Aufgabe 5

Erstelle eine Komponente mit Radio-Buttons, die es ermöglicht, die Liste nach verschiedenen Kriterien zu filtern. Kriterien:
- Wann wird es sonnig?
- Wann brauche ich einen Regenschirm? 

## Hinweise

Wichtig bei der Umsetzung sind vor allem:

- Einfachheit (keep it simple, kein Over-engineering)
- Modularität / Wiederverwendbarkeit / Wartbarkeit
- Es ist die neueste React-Version installiert - nutze die Vorteile falls nötig :-)

Das CSS kann erstmal außer acht gelassen werden, Fokus bei der Aufgabe sind JavaScript und React.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
