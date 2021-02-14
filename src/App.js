import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const APP__ID = 'f84edde2';
  const APP__KEY = '1e02f7113e375e6b33f9348b036ec5cd';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP__ID}&app_key=${APP__KEY}`

  useEffect(() => {
getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP__ID}&app_key=${APP__KEY}`);
    const data = await response.json() 
    console.log(data)
  }




  return (
    <div className="App">
      <h1>Hello World</h1>
        <form className="search-form">
          <input type="text" className="search-bar"/>
          <button type="submit" value="search" className="search-button">Click</button>
        </form>
    </div>
  );
}

export default App;
