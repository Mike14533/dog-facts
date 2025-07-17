import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fact, setFact] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  useEffect(() => {
      fetch("https://dogapi.dog/api/v2/facts")
      .then((res) => res.json())
      .then((json) =>{
        setFact(json.data);
        setDataIsLoaded(true);
      });
},[]);


 function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div>
      <img className = "bg" src="Dog.png"/>
          

            {fact.map((item, index) => {
              return(
                 <p className="factText" key={index}>*Barks* {item.attributes.body} *Barks*</p>
              )
            })}
            <button className = "bonk"  onClick={refreshPage}>this a button</button>
    </div>
      
          
     
        
   
  )
}

export default App



