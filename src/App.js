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
        }
      ],
      vegitables: [
        {
          id: 'v1',
          name: 'Tomato',
          image: '/images/apple.jpg'
        },
        {
          id: 'v2',
          name: 'Carrots',
          image: '/images/Kiwi.jpg'
        },
        {
          id: 'v3',
          name: 'Beans',
          image: '/images/Orange.jpeg'
        },
        {
          id: 'v4',
          name: 'Potato',
          image: '/images/strawberry.png'
        },
        {
          id: 'v5',
          name: 'Cucumber',
          image: '/images/Lemon.png'
        }
      ]


    })
  }

  render() {
    return (
      <>
    <div className="App friutes-header">
      
          {this.state.friuts.map( friut =>
            <MyApp name={friut.name} image={friut.image} id={friut.id} />
          )}

    </div>
    <div className="App friutes-header">     
          {this.state.vegitables.map( veggies  =>
            <MyApp name={veggies.name} image={veggies.image} id={veggies.id} />
          )}
        
      </div>
      </>
      );
    }
  }


export default App;
