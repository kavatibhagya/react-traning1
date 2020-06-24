import React from 'react';
import './App.css';
import MyApp from './components/Welcome';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      friuts: [
        {
          id: 'f1',
          name: 'Apple',
          image: '/images/apple.jpg'
        },
        {
          id: 'f2',
          name: 'Kiwi',
          image: '/images/Kiwi.jpg'
        },
        {
          id: 'f3',
          name: 'Orange',
          image: '/images/Orange.jpeg'
        },
        {
          id: 'f4',
          name: 'Strawberry',
          image: '/images/strawberry.png'
        },
        {
          id: 'f5',
          name: 'Lemon',
          image: '/images/Lemon.png'
        },

      ],

      vegitables: [
        {
          id: 'v1',
          name: 'Tomato',
          image: '/images/tomato.jpg'
        },
        {
          id: 'v2',
          name: 'Carrots',
          image: '/images/carrot.jpg'
        },
        {
          id: 'v3',
          name: 'Beans',
          image: '/images/beans.jpg'
        },
        {
          id: 'v4',
          name: 'Potato',
          image: '/images/potato.jpg'
        },
        {
          id: 'v5',
          name: 'Cucumber',
          image: '/images/cucumber.jpg'
        }
      ],
      showFriuts: true,
      showVegitables:true


    })
  }
  handleButtonF() {
     const showOrNot = this.state.showFriuts;
    this.setState({ showFriuts: !showOrNot });
  }
  handleButtonV() {
    const showOrNot = this.state.showVegitables;
   this.setState({ showVegitables: !showOrNot });
 }

  render() {
    return (

      <>
        <button className="Frbutton" onClick={() => this.handleButtonF()}>click for friuts</button>
        {this.state.showFriuts ? 
        <div className="App friutes-header">
          {this.state.friuts.map((friut, index) =>
            <MyApp name={friut.name} image={friut.image} key={friut.id} />
          )}</div> : null}

        <br></br>
        <button className="Vgbutton" onClick={() => this.handleButtonV()}>click for vegitables</button>
        {this.state.showVegitables ?<div className="App friutes-header">
          {this.state.vegitables.map((veggies, index) =>
            <MyApp name={veggies.name} image={veggies.image} key={veggies.id} />
          )}

        </div> : null }
        
      </>
    );
  }
}


export default App;
