import React, { useState } from 'react'
import clip from '../imagenes/copiar.png'
import './singleColor.css'

const SingleColor = ({ hexColor}) => {

    const [copy, setCopy] = useState(false);
  
  
  const handleCopy = (color)=> () =>{
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    setCopy(true)
    

    setTimeout(() => {
        setCopy(false)
    }, 2000);
  }
  
    return (
    <div className='single-card' style={{backgroundColor: `#${hexColor}` }}>
        <div className='content'>
            <p>#{ hexColor }</p> 
            <button onClick={ handleCopy(hexColor) }>
                <img src={ clip } alt=''/>
            </button>
            { copy ? <p className='copy-alert'>copy to clipboard</p> :null}
        </div>
    </div>
  )
}

export default SingleColor