import React from 'react';
import './Welcome.css'

function MyApp(props) {
     return (
     
               <div >
                    <img src={props.image} alt={props.name} className="friut" />
                   <p className="p"> {props.name} </p>
               </div>
              

          //  <div className ="friutes-header">
          //    <div><img src={require('../images/apple.jpg')}  alt="apple" className ="friut" />
          //    <p>Apple</p>
          //    </div>
          //     <div> <img src={require('../images/Lemon.png')} alt="Lemon"className ="friut" /><p>Lemon</p></div>
          //     <div> <img src={require('../images/Orange.jpeg')} alt="Orange" className ="friut" /><p>Orange</p></div>
          //     <div> <img src={require('../images/strawberry.png')} alt="strawerry" className ="friut" /><p>strawberry</p></div>
          //     <div>  <img src={require('../images/Kiwi.jpg')} alt="kiwi" className ="friut" /><p>Kiwi</p></div>
          //  </div>

     );
}
export default MyApp;