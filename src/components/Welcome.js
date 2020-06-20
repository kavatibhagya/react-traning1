import React from 'react';
import './Welcome.css'

function MyApp(){
     return (
         <div className ="friutes-header">
             <img src={require('../images/apple.jpg')}  alt="apple" className ="friut" />
             <img src={require('../images/Lemon.png')} alt="Lemon"className ="friut" />
             <img src={require('../images/Orange.jpeg')} alt="Orange" className ="friut" />
             <img src={require('../images/strawberry.png')} alt="strawerry" className ="friut" />
             <img src={require('../images/Kiwi.jpg')} alt="kiwi" className ="friut" />
         </div>

     );
}
export default MyApp;