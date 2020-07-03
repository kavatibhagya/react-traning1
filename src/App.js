import React from 'react';
import './App.css';

 function Validatemessage(props){
   if(!props.valid){
     return (
       <div style={{color:'red'}}>{props.message}</div>
     );
   }
   return null;
 }




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid:false,
      userName: '',
      usernameValid:true,
      email:'',
      emailValid: true

    }
  }
   

  updateUsername = (userName) => {
    this.setState({userName} , this.validateuserName);
  }
  validateuserName =() => {
    const {userName} = this.state; // objecet destructure
    let usernameValid = true;
    if(userName.length < 3){
      usernameValid = false;
    }
    this.setState({usernameValid});
  }

  updateEmail=(email) =>{
    this.setState({email} , this.validateEmail);
  }
  validateEmail=() =>{
    const {email} =this.state;
    let emailValid = true;
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
    }
    this.setState({emailValid});
}

  render() {
    return (
      <div className="App">
        <h1>form and it's validations</h1>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" onChange={(event) => { this.updateUsername(event.target.value) }} />
            <Validatemessage valid = {this.state.usernameValid} message ={ "username must be 3 characters"}/>
          </div>
          <div>
            <label>Email :</label>   
            <input type="text" onChange={(event) => { this.updateEmail(event.target.value) }} />
            <Validatemessage valid = {this.state.emailValid} message ={ "emial must have @"}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" onChange={(event) => { this.updatePassword(event.target.value) }} />
          </div>
          <div>
            <label>Confirmpassword:</label>
            <input type="password" onChange={(event) => { this.updatePassWord(event.target.value)}} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" onChange={(event) => { this.updateAge(event.target.value) }} />
          </div>
          <div>
            <button disabled ={!this.state.formvalid}>submit</button>
          </div>



        </form>
      </div>
    )
  }
}
  export default App;
