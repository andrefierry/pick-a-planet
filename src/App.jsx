import SelectorBtn from './components/SelectorBtn'
import { planetsData } from './planets'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  
  function handleClick(selectedButton){
    setShow(selectedButton);
  }
  
  return (
    <>

    <h1>Welcome to the Milky Way</h1>
    <div className='display-items'>
      <div>
        <menu className='menu'>
          <SelectorBtn onClick={() => handleClick(0)}>Mercury</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(1)}>Venus</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(2)}>Earth</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(3)}>Mars</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(4)}>Jupiter</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(5)}>Saturn</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(6)}>Uranus</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(7)}>Neptune</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(8)}>Pluto</SelectorBtn>
          <SelectorBtn onClick={() => handleClick(9)}>Ceres</SelectorBtn>
        </menu>
      </div>

    <div>
      {show === false ? <h2>Select a planet</h2> : (
        <div>
          <h2>{planetsData[show].name}</h2>
          <h4>{planetsData[show].title}</h4>
          <p>{planetsData[show].description}</p>
          <p>Distance from the Sun: {planetsData[show].distanceFromSun}</p>
          <p>Diameter: {planetsData[show].diameter}</p>
          <p>Gravity: {planetsData[show].gravity}</p>
          <img src={planetsData[show].image} width='150px' height='150px' alt={planetsData[show].description} />  
        </div>
        )}
      </div>
    </div>

    </>
    )
    }
    
    export default App
    