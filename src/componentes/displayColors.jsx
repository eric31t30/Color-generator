import SingleColor from "./singleColor";


const DisplayColors  = ({ list }) =>{

    return(
        <div className="colors-container">
            {
                list.map((color, index) => (
                    <SingleColor key={index} hexColor={color.hex}/>
                ))
            }
        </div>
    );
}

export default DisplayColors;