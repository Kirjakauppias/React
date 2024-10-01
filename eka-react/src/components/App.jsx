import './App.css';
import EkaComponent from './EkaComponents';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Product from './Product/Product';
import {PRODUCTS} from '../data/data'; // dummy data
import HeaderTest from './Header/HeaderTest';
import TabButton from './TabButton/TabButton';
import { useState } from 'react';
import { CATEGORIES } from '../data/categories';

function App() {

  // Täällä eläisi Products state

  console.log("APP EXECUTING");

  function handleSelectApp(selectedButton) {
    // selectedCategoryWrong = selectedButton; // Ei UI päivitystä
    setSelectedCategory(selectedButton);
    console.log(`Category clicked! - ${selectedCategory.title}`);
  }

  // Tämän muokkaus ei suorita käyttöliittymän päivitystä.
  // let selectedCategoryWrong = "Kategoria 1";

  // Jotta käyttöliittymä päivittyy, tarvitaan komponenttiin state.
  // useState pitää luoda komponentin juureen.
  // useState() palauttaa taulukon, jossa on:
  //      state muuttuja,   funktio, opäivittää state     (oletus arvo)
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  // Kuvitteellisesti haettu tietokannasta tähän stateen
  const [categories, setCategories] = useState(CATEGORIES);


  return (
    <div className="App">
      <header className="App-header">
        <HeaderTest />
        <Counter />
        {/*
        <EkaComponent />
        <ClassComponent />*/}
        <section>
          <h2>Tuotteet</h2>
          <ul>
            {/* 1. vaihtoehto props, properties */}
            <Product 
              img={PRODUCTS[0].img} 
              title={PRODUCTS[0].title} 
              description={PRODUCTS[0].description} 
            />
            <Product
              {...PRODUCTS[1]}
            />
            <Product 
              {...PRODUCTS[2]}
            />
          </ul>
        </section>
        <section>
          <h2>Kategoriat</h2>
          <menu>
            {/*2. tapa:Component composition*/
            /* kaikkea lapsi dataa ei tarvitse pyörittää propsien kautta 
              Nappien on tarkoitus päivittää jotakin state arvoa
              ja tämä state päivittää komponenttia napin ulkopuolella.
              Tämän vuoksi state ei elä napin sisällä, vaan sinne lähetetään
              viittaus funktioon, joka suoritetaan korkeammalla tasolla.
              */}
            {/*<TabButton onSelect={() => {handleSelectApp('Kategoria 1')}}>Kategoria 1</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 2')}}>Kategoria 2</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 3')}}>Kategoria 3</TabButton>
            <TabButton onSelect={() => {handleSelectApp('Kategoria 4')}}>Kategoria 4</TabButton> */}

            {/**Generoidaan napit "haetun" datan perusteella */}
            {/*taulukon map()-funktiolla leivotaan data toiseen muotoon */}
            {CATEGORIES.map((category, index) =>(
              // Tässä koodi, jonka map toteuttaa joka kierroksella
              <TabButton onSelect={() =>{handleSelectApp(category)}}>
                {category.title}
              </TabButton>
            ))}
          </menu>
          {/* Tähän päivittyy uusi sisältö */}
          {selectedCategory ? <div>
            <h3>{selectedCategory.title}</h3>
            <p>{selectedCategory.description}</p>
          </div>
          : <p>Please select a category!</p>
          }
        </section>
      </header>
    </div>
  );
}

export default App;
