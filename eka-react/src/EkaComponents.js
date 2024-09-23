// 4kpl termejä

// 1. Components
// Kaikki Reactissa rakentuu componenteista
// Vähän sama idea kuin elementit perus HTML koodissa
// React-sovellus on kokoelma componentteja
// Poikkeuksena, että React componentti on usein yhdistelmä
// HTML, CSS ja JS koodeja
// Esim: App.js (HTML ja JS) App.css (css)
// Kaksi sääntö componentilla:
//  1. Alkaa isolla kirjaimella ja uudet sanat isolla yhteen
//      PascalCase esim: NewComponent.js
//  2. Palauttaa jotakin, jonka voi renderöidä UI:n
// Componentteja voi olla kahta erilaista
//  1. Funcional component, tehty functiona
//  2. Class component, tehty luokkana/objectina (vanha)

// Functional component
const EkaComponent = () => {
    // Palauttaa renderöinnin
    return <h1>Hello, world!</h1>;
}

export default EkaComponent; // Jotta voidaan käyttää muualla

// 2. JSX
// (JavaScript XML)
// React tiedostoissa kirjoitetaan js-koodia
// vaikka osa näyttää HTML -koodiltam se on oikeasti JavaScriptiä
// React kääntää js/jsx tiedostot HTML muotoon selaimelle.
// Selain ei ymmärrä JSX syntaxia.

// Esim: <h1>Hello, world!</h1>
// on oikeasti: React.createElement('h1', null, 'Hello, world!');

// 3. ReactDOM
// ReactComponentit => ReactDOM => DOM
// Muutokset tapahtuu ensin ReactDOM:iin ja sitten tarvittaessa oikeaan DOM:iin

// 4. State
// react:in UI päivitys perustuu state:n muutoksiin
// Jokin muuttuja vaihtaa arvoa, silloin suoritetaan uusi render
// render päivittää käyttöliittymän
// React huolehtii state:n olemassa olosta ja sen muutokest täytyy
// suorittaa React:n kautta.

// 5. Hooks - 
// Eli state päivitykset (funcional components)
// useState
// useEffect
// luokka componenteilla eri systeemi