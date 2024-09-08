import { useState, useEffect } from "react";

const Button2 = () => {
    const initialColor = 'red';
    const [color, setColor] = useState(initialColor);

    // useEffect to update the background color whenever 'color' changes
    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]); // The dependency array contains 'color', so this effect runs whenever 'color' changes

    const changeColor = (anyColor) => {
        setColor(anyColor);
    };

    return (
        <div>
            <button onClick={() => changeColor('blue')} type="button" className="btn btn-primary">
                Blue
            </button>
            <button onClick={() => changeColor('grey')} type="button" className="btn btn-secondary">
                Grey
            </button>
            <button onClick={() => changeColor('green')} type="button" className="btn btn-success">
                Green
            </button>
            <button onClick={() => changeColor('red')} type="button" className="btn btn-danger">
                Red
            </button>
            <button onClick={() => changeColor('yellow')} type="button" className="btn btn-warning">
                Yellow
            </button>
            <button onClick={() => changeColor('cyan')} type="button" className="btn btn-info">
                Cyan
            </button>
            <button onClick={() => changeColor('white')} type="button" className="btn btn-light">
                White
            </button>
            <button onClick={() => changeColor('black')} type="button" className="btn btn-dark">
                Black
            </button>
        </div>
    );
};

export default Button2;


/* Summary of Execution Flow
1.Component Initialization:
-->Initialize color state with 'red'.
-->Render the JSX.

2.First Render:
-->Render the initial UI with all buttons.
-->Run useEffect to set document.body.style.backgroundColor to 'red'.

3.User Interaction:
-->User clicks a button, triggering the onClick handler.
-->changeColor is called, updating the color state.

4.State Update and Re-render:
-->React re-renders the component with the new color state.
-->useEffect runs again due to the color state change.

5.Effect Execution:
-->Update the background color of the document body to match the new color state. */


//above code was according to the best practice but the code below is just for the sake of updating the color just by using the useState
/* import { useState } from "react";

const Button2 = () => {
    
    const [, setColor] = useState('');

    const changeColor = (newColor) => {
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
    };

    return (
        <>
            <button onClick={() => changeColor('blue')} type="button" className="btn btn-primary">
                Blue
            </button>
            <button onClick={() => changeColor('grey')} type="button" className="btn btn-secondary">
                Grey
            </button>
            <button onClick={() => changeColor('green')} type="button" className="btn btn-success">
                Green
            </button>
            <button onClick={() => changeColor('red')} type="button" className="btn btn-danger">
                Red
            </button>
            <button onClick={() => changeColor('yellow')} type="button" className="btn btn-warning">
                Yellow
            </button>
            <button onClick={() => changeColor('cyan')} type="button" className="btn btn-info">
                Cyan
            </button>
            <button onClick={() => changeColor('white')} type="button" className="btn btn-light">
                White
            </button>
            <button onClick={() => changeColor('black')} type="button" className="btn btn-dark">
                Black
            </button>
        </>
    );
};

export default Button2;
 */