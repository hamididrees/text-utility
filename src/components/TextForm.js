import React, { useState } from 'react'

export const TextForm = (props) => {

    // you can only change the text with the help of setText state
    const [text, setText] = useState();

    //wrong way to change the state
    //text="my name is hamid";
    //right way to change the state
    //setText("my name is hamid");

    const handleUpperClick = () =>{
        console.log("uppercase was clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowerClick = () =>{
        console.log("lowercase was clicked");
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpacesClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpperClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleCopyClick}>Copy All Text</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
    </div>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
