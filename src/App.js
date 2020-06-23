import React from 'react';
import './App.css';
import MyApp from './components/Welcome';

function App() {
  return (
    <>
      <div className="App friutes-header">
        <MyApp name="Apple" image="/images/apple.jpg" />
        <MyApp name="kiwi" image="/images/Kiwi.jpg" />
        <MyApp name="Orange" image="/images/Orange.jpeg" />
        <MyApp name="Strawberry" image="/images/strawberry.png" />
        <MyApp name="Lemon" image="/images/Lemon.png" />

      </div>
      <br></br>
      <div className="App friutes-header">
        <MyApp name="Tomato" image="/images/apple.jpg" />
        <MyApp name="Carrots" image="/images/Kiwi.jpg" />
        <MyApp name="Beans" image="/images/Orange.jpeg" />
        <MyApp name="Potato" image="/images/strawberry.png" />
        <MyApp name="Cucumber" image="/images/Lemon.png" />

      </div>
    </>
  );
}

export default App;
