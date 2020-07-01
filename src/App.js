import React from 'react';
import './App.css';
import MyApp from './components/Welcome';
import axios from 'axios';
import Comment from './components/Comments';

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
      showVegitables: true,
      comments: [],
      firstname:'',
      lastname:''


    })
  }
  // handleButtonF() {
  //   const showOrNot = this.state.showFriuts;
  //   this.setState({ showFriuts: !showOrNot });
  // }
  // handleButtonV() {
  //   const showOrNot = this.state.showVegitables;
  //   this.setState({ showVegitables: !showOrNot });
  // }
  // deleteHandler(friutIndex) {
  //   const delFriut = this.state.friuts.slice();
  //   delFriut.splice(friutIndex, 2);
  //   console.log("friut clicked", friutIndex);
  //   this.setState({ friuts: delFriut });
  // }
  
    
 

   

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("api response", response);
        const topRecords = response.data.slice(0, 10);
        const updatedRecords = topRecords.map((comment) => {
          return {
            ...comment,
            author: "Bhagi"

          }
        })
        this.setState({ comments: updatedRecords });
      });
  }

  handlePostCalls(){
    const userData= {
      firstName:this.state.firstname,
      lastName:this.state.lastname

    }
    axios.post("https://jsonplaceholder.typicode.com/comments",userData)
    .then(response =>{
      console.log("res", response.data);
    })
  }


  render() {

    const listofComments = this.state.comments.map((p) => {
      return (

        <>
          <Comment name={p.name} email={p.email} author={p.author} />
         
        </>)
    });

    return (

      <>
        <button className="button" onClick={() => this.handleButtonF()}>click for friuts</button>
        {this.state.showFriuts ?
          <div className="App friutes-header">
            {this.state.friuts.map((friut, index) =>
              <MyApp name={friut.name} image={friut.image} key={friut.id} click={() => this.deleteHandler(index)} />
            )}</div> : null}

        <br></br>
        <button className="button" onClick={() => this.handleButtonV()}>click for vegitables</button>
        {this.state.showVegitables ? <div className="App friutes-header">
          {this.state.vegitables.map((veggies, index) =>
            <MyApp name={veggies.name} image={veggies.image} key={veggies.id} />
          )}

        </div> : null}

       
          <input type="text"  onChange={(event) => this.setState({firstname:event.target.value})}/>
          <input type="text" onChange={(event) => this.setState({lastname:event.target.value})}/>
          <button onClick={() =>this.handlePostCalls()}>signup</button>
         
        <div className="App-comments">
          {listofComments}
         </div>

      </>
    );
  }
}


export default App;
