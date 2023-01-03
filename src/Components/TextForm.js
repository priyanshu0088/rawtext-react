
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("success","text converted to uppercasse");
    }
    const handleLoClick =()=>{
        let newtext = text.toLowerCase();
        setText(newtext)
       props.showAlert("success","text converted to lowercase");
    }
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    const handlespeakclick =(event)=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const cleartext =(event)=>{
        setText("")
        props.showAlert("success","text cleared");
    }

    const [text,setText] = useState('')
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2  my-2" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handlespeakclick}>speak</button>
<button className="btn btn-primary mx-2 my-2" onClick={cleartext}>Clear</button>

    </div>
    <div className="container">
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read </p>
        <h2>preview</h2>
        <p>{text}</p>
        </div>
  </>
  )
}
