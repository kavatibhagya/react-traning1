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
      errorMsg: {},
      formValid:false,
      userName: '',
      usernameValid:false,
      email:'',
      emailValid: false,
      password:'',
      passwordValid:false,
      confirmpassword:'',
      confirmpasswordValid:false,
      validateForm:false


    }
  }
   
  validateForm = () => {
    const { usernameValid,emailValid,passwordValid,confirmpasswordValid} = this.state;
    this.setState({
      formValid:usernameValid&&emailValid&&passwordValid&&confirmpasswordValid,
    })
  }

  updateUsername = (userName) => {
    this.setState({userName} , this.validateuserName);
  }
  validateuserName =() => {
    const {userName} = this.state; // objecet destructure
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg};
    
    if(userName.length < 3){
      usernameValid = false;
      errorMsg.userName = "uN must be three charactres";
    }
    this.setState({usernameValid,errorMsg},this.validateForm);
  }

  updateEmail=(email) =>{
    this.setState({email} , this.validateEmail);
  }
  validateEmail=() =>{
    const {email} =this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg};
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = "wrong email"
    }
    this.setState({emailValid, errorMsg},this.validateForm);
}


updatePassword = (password) => {
  this.setState({password} , this.validatePassword);
}
validatePassword =() => {
  const {password} = this.state; // objecet destructure
  let passwordValid = true;
  let errorMsg = {...this.state.errorMsg};
  
  if(password.length < 6){
    passwordValid = false;
    errorMsg.password = "pwd must be six charactres";
  }
  else if(!/\d/.test(password)){
    passwordValid = false;
    errorMsg.password = "pwd must have a digit";
  }
  else if (!/[!@#$%^&*]/.test(password)){
    passwordValid = false;
    errorMsg.password = "pwd must have one special char"
  }
  this.setState({passwordValid,errorMsg},this.validateForm);
}



updateconfirmPassWord = (confirmpassword) => {
  this.setState({confirmpassword} , this.validateconfirmPassword);
}
validateconfirmPassword =() => {
  const {password,confirmpassword} = this.state; // objecet destructure
  let confirmpasswordValid = true;
  let errorMsg = {...this.state.errorMsg};
  
  if(password!==confirmpassword){
    confirmpasswordValid = false;
    errorMsg.confirmpassword = "password must match";
  }
  this.setState({confirmpasswordValid,errorMsg},this.validateForm);
}

  render() {
    return (
      <div className="App">
        <h1>form and it's validations</h1>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" onChange={(event) => { this.updateUsername(event.target.value) }} />
            <Validatemessage valid = {this.state.usernameValid} message ={ this.state.errorMsg.userName}/>
          </div>
          <div>
            <label>Email :</label>   
            <input type="text" onChange={(event) => { this.updateEmail(event.target.value) }} />
            <Validatemessage valid = {this.state.emailValid} message ={ this.state.errorMsg.email}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" onChange={(event) => { this.updatePassword(event.target.value) }} />
            <Validatemessage valid = {this.state.passwordValid} message ={ this.state.errorMsg.password}/>
          </div>
          <div>
            <label>Confirmpassword:</label>
            <input type="password" onChange={(event) => { this.updateconfirmPassWord(event.target.value)}} />
            <Validatemessage valid = {this.state.confirmpasswordValid} message ={ this.state.errorMsg.confirmpassword}/>
          </div>
          <div>
            <label>Age:</label>
            <input type="number" onChange={(event) => { this.updateAge(event.target.value) }} />
          </div>
          <div>
            <button disabled ={!this.state.formValid}>submit</button>
          </div>



        </form>
      </div>
    )
  }
}
  export default App;
