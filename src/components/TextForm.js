import React,{useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState("");
    //setText("Write an essay here");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleCountS = () => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === 's' || text[i] === 'S') {
                count++;
            }
        }
        alert("Count of S is: " + count);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }
    const Clear = () => {
        setText("");
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange =  (event) => { 
        //console.log("On change");
        setText(event.target.value);
    }
  return (
    <>
    <div className = "container" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'? 'grey':'white' , color: props.mode === 'dark'? 'white':'#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={Clear}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCountS}>Count S</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'#042743'}}>
        <h2>You text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
