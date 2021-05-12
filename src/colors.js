import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Colors = () => {
    const [colorNames] = React.useState(['#E91E63','#880E4F','#F50057','#7B1FA2','#BA68C8','#536DFE','#1A237E','#00897B','#66BB6A','#00C853','#FBC02D','#F57F17','#FF8A65','#FF3D00','#3E2723','#607D8B','#263238','#03A9F4','#01579B','#512DA8',]);

    const copyColor = (e) => {
        let color = e.target.innerText;
        if(navigator.clipboard){
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();
            toast.success(`You have copied ${color} value successfully`, {position: toast.POSITION.TOP_RIGHT})
        }
    }
    return(
        <div className="row">
            {colorNames.map(color => (
                <div className="item" key={color} style={{background: color}} onClick={copyColor}>
                    <div>{color}</div>
                </div>
            ))}
        </div>
    );
}

export default Colors;