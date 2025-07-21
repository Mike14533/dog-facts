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
const handleClick = async () => {
  try {const response = await fetch('https://dogapi.dog/api/v2/facts');
        const json = await response.json();
     
        setFact(json.data);
        
  }
catch (err){
  console.log(err.message);
}}
const printFact = fact.map((item) => {
  return <p className="factText" >   *Barks* {item.attributes.body} *Barks*</p>;
});

 function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className = "main">
      <img className = "bg" src="Dog.png"/>
          

              {printFact}
            <button className = "bonk"  onClick={handleClick}>this a button</button>
    </div>
      
          
     
        
   
  )
}

export default App



