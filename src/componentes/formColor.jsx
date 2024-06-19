import { useState } from "react";
import Values from 'values.js'
import './formColor.css'

const FormColor = ({ setList }) =>{

    const [color, setColor] = useState('blue');
    const [error, setError] = useState(false);
    const [size, setSize] = useState(25);
    
    const handleGenerator = e =>{
        e.preventDefault();

        try {
            let colors = new Values(color).all(size);
            setList(colors);
            setError(false);
            console.log(colors);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    

    return(
        <div className="cont-color">
            <form onSubmit={ handleGenerator }>
                <input className="" type="text" placeholder="#fff" onChange={e => setColor(e.target.value)} />
                <input type="submit" value="generar" />
                <div className="cont-size-colors">
                    <span className={`size-colors small-size ${size === 25 ? 'span-active' : ''}`}  onClick={e => setSize(25)}>9</span>
                    <span className={`size-colors medium-size ${size === 12 ? 'span-active' : ''}`} onClick={e => setSize(12)}>17</span>
                    <span className={`size-colors big-size ${size === 7.5 ? 'span-active' : ''}`} onClick={e => setSize(7.5)}>27</span>
                </div>
            </form>
            
            { error ? <p className="error">Nombre De Color Invalido</p> :null }
            { error ? <p className="error error-2">Asegurate de Usar # antes del valor 
            o asegurate que el nombre este bien escrito.</p> :null }
        </div>
    );
}

export default FormColor;

