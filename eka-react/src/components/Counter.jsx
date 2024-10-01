import React, {useState} from 'react';
import CounterButton from './CounterButton';

// Nuoli -funktio "Counter"
const Counter = () => {

    // Tämä ei käytä React state:a
    // let count = 0;

    // Oikea state
    const [count, setCount] = useState(0);

    // Koodissa kaiken ei tarvitse olla state:a
    // Ainoastaan se, joka halutaan näyttää käyttäjälle ja päivittyy

    function increment() {
        // Count++
        // Tämä ei päivitä state:a
        // count++;
        // console.log("++", count);

        // Oikea state update - Hook
        //       vanha => uusi
        setCount(count => count + 1);
    }

    function decrement() {
        // Count--
        // count--;
        // console.log("--", count);
        setCount(count => count - 1);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            {/* Harjoitus, käytetään uutta CounterButton komponenttia 
            <button onClick={increment}>++</button>
            <button onClick={decrement}>--</button>*/}
            <CounterButton onSelect={increment}>++</CounterButton>
            <CounterButton onSelect={decrement}>--</CounterButton>
        </div>
    );
}

export default Counter;