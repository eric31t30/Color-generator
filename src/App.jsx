import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './componentes/formColor';
import DisplayColors from './componentes/displayColors';

import lunaGrande from './imagenes/luna-grande.png'
import lunaPequeña from './imagenes/luna-pequeña.png'
import estrellaGrande from './imagenes/estrella-grande.png'
import estrellaPequeña from './imagenes/estrella-pequeña.png'
import github from './imagenes/github.png'



function App() {
  
  const [list, setList] = useState(new Values('red').all(25));

  return (
    <div className='App'>
      <header className='header'>
        <h1>Color Palette Generator
          <img className='deco-header big-moon' src={lunaGrande} alt="luna" />
          <img className='deco-header small-moon' src={lunaPequeña} alt="luna" />
          <img className='deco-header big-star' src={estrellaGrande} alt="estrella" />
          <img className='deco-header small-star' src={estrellaPequeña} alt="estrella" />
        </h1>
      </header>
      <FormColor setList={setList} />
      <DisplayColors list={list} />
      <footer className='footer'>
        <a className='author' href='https://github.com/eric31t30' target='_blank'>eric31t30</a>
        <img src={ github } alt="" className='github-icon'/>
      </footer>
    </div>
  )
}

export default App
