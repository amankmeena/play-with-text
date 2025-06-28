import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked.");
        let newtext = text.toUpperCase();
        setText(newtext);
        // setText("You have clicked on handleUpClick.");
        props.showAlert_var("Converted to UpperCase!","success")
    };
    
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);

        props.showAlert_var("Converted to LowerCase!","success")
    };
    
    const handleClear = () => {
        setText('');
        props.showAlert_var("Textbox content cleared!","success")
    };
    
    const handleExtraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert_var("Extra spaces Removed!","success")
    };
    
    const handleCopyText = () =>{
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert_var("Copied to Clipboard!","success")
    };

    const handleSpeak = () => {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        synth.speak(utterThis);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        let word = document.getElementById('pop')
        console.log(word.innerText)
        
        if (word.innerText === 'Pause') {
            synth.pause();
            word.innerText = 'Resume';
        } else {
            synth.resume();
            word.innerText = 'Pause';
        }
    };
    
    const handleStop = () => {
        const synth = window.speechSynthesis;
        synth.cancel();
    };
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    // const [text, setText] = useState('input text');
    const [text, setText] = useState('');   // We can use undefined or empty string

    // text = 'naya text'       // Wrong way to change the State
    // setText = 'setText se naya text'     // Correct way to change the State
    return (
        <>
            <div className="container my-3">
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label"> Example Text-area </label>
                    <textarea className={`form-control bg-${(props.mode_var === 'light')? 'light':'dark'} text-${(props.mode_var === 'light')? 'dark':'light'}`} id="mybox" value={text} onChange={handleOnChange} rows="8" placeholder='e.g. You are a good boy.'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleLowClick}>convert to lowercase</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleCopyText}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleSpeak}>Text to Speech</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-success" style={{width:"5.25rem"}} id="pop" onClick={handlePause}>Pause</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-success" onClick={handleStop}>Stop</button>
                <button disabled={text.length === 0} className="btn mx-1 my-1 btn-primary" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h2>Your Text Summery...</h2>
                <p> <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong> Words and <strong>{text.length}</strong> Characters. </p>
                <p> <strong>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length}</strong> Minutes to Read. </p>

                <h3>Preview</h3>
                <p>{(text.length > 0)? text:'Nothing to preview.'}</p>

            </div>
        </>
    );
};
