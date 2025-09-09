import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [mydata, setData] = useState();

  function handleClick(){
    setIsActive(true);
  }

  useEffect(()=>{
    if(isActive){
      fetch(`https://djgh1w1f3j.execute-api.ap-south-1.amazonaws.com/Prod/hello/`)
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        setData(data);
      })
    }
  },[isActive])

  return (
    <>
      <button onClick={handleClick}>Activate</button>
      {mydata && 
      <div>{mydata.message}</div>
      }
    </>
  )
}

export default App
