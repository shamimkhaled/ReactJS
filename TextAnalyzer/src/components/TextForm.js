import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppClick = ()=>{
   // console.log('Uppercase was clicked!', +text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to the uppercase", "Success")

  }
  const handleLowClick = ()=>{
    // console.log('Uppercase was clicked!', +text);
     let newText= text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to the lowercase", "Success")
 
   }//
   const handleCapClick = ()=>{
    // console.log('Uppercase was clicked!', +text);
     let newText= text.toLowerCase();
     setText(text[0].toUpperCase() + newText.slice(1));
 
   }
   const handleTextCopy = ()=>{
      let textCopy = document.getElementById("textBox");
      textCopy.select();
      navigator.clipboard.writeText(textCopy.value);
      props.showAlert("Copied to the clipboard", "Success")
   }
   const handleTextClearClick = ()=>{
    // console.log('Uppercase was clicked!', +text);
     let newText= '';
     setText(newText);
 
   }
  const handleOnChange = (event)=>{
    //console.log('On change!');
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{ color: props.mode==='dark'?'white':'black' }}>
      <h4> {props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'black' }} onChange={handleOnChange}   id="textBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-info mx-3" style={{ color: props.mode==='dark'?'white':'black' }} onClick={handleUppClick}>Convert to Uppercase</button>
      <button className="btn btn-info mx-3" style={{ color: props.mode==='dark'?'white':'black' }} onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-info mx-3" style={{ color: props.mode==='dark'?'white':'black' }} onClick={handleCapClick}>Capitilized Case</button>
      <button className="btn btn-info mx-3" style={{ color: props.mode==='dark'?'white':'black' }} onClick={handleTextCopy}>Copy Text</button>
      <button className="btn btn-info mx-3" style={{ color: props.mode==='dark'?'white':'black' }} onClick={handleTextClearClick}>Clear Text</button>
    </div>

    <div className="container my-2" style={{ color: props.mode==='dark'?'white':'black' }}>
        <h6>Your text summary</h6>
        <p>{text.split(" ").length-1} words and {text.length} characters and {text.split(/[".!?"]/).length-1} sentences </p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the above texbox to preview it here.'}</p>
    </div>
    


    </>
  );
}
