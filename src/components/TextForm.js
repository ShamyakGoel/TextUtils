import React, { useState} from 'react';
import "../index.css"
// import fs from 'fs'
// console.log(fs)
export default function TextForm(props) {
    // let chacheText = document.getElementById("chacheText")
    function init() {
        document.getElementById('idFile').addEventListener('change', handleFileSelect, false);
    }
      
    function handleFileSelect(event) {
        console.log("Hi, i am here")
        const reader = new FileReader()
        reader.onload = handleFileLoad;
        reader.readAsText(event.target.files[0])
    }
      
    function handleFileLoad(event) {
        setText(event.target.result)
        enable()
        props.alert("Restored from a file", "success", "Success")
    }
    function enable(){
        let buttons = document.getElementsByClassName("p")
        console.log(buttons)
        for(let i in buttons){
            buttons[i].classList.remove("disabled")
        }
    }
    // function saRT() {
    //     props.alert("Restored text from chache", "success")

    // }
    // let alertCH = document.getElementsByClassName("alert")[0]
    const handleFileClick = ()=>{
        init()
        document.getElementById("idFile").click()
    }
    const saveFile = ()=>{
        console.log("Save file")
    }
    const handleCopyText = ()=>{
        let text = document.getElementById("myBox").value
        navigator.clipboard.writeText(text)
        props.alert("Copied to clipboard", "success", "Success")
    }
    const handleClearText = ()=>{
        document.getElementById("myBox").value = ""
        props.alert("Cleared text!", "success", "Success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.alert("Extra Spaces removed", "success", "Success")
    }
    const restoreText = ()=> {
        setText(localStorage.getItem("text"))
        enable()
        // saRT()
    }
    const clearChache = ()=>{
        // document.body.classList.add("grey")
        localStorage.clear()
        document.getElementById("chacheText").innerText = localStorage.getItem("text")
        props.alert("Chache cleared", "success", "Success")

    }
    const saveText = ()=>{
        setText(document.getElementById("myBox").value)
        localStorage.setItem("text", text)
        document.getElementById("chacheText").innerText = text
        props.alert("Saved the text to memory", "success", "Success")
    }
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked")
        setText(document.getElementById("myBox").value)
        if(text.toUpperCase() === text){
            props.alert("Can't convert to uppercase. The text is already in uppercase.", "danger", "Error")
            return
        }
        let newText = text.toUpperCase()
        setText(newText)
        props.alert("Converted to uppercase", "success", "Success")
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked")
        setText(document.getElementById("myBox").value)
        if(text.toLowerCase() === text){
            props.alert("Can't convert to lowercase. The text is already in lowercase.", "danger", "Error")
            return
        }
        props.alert("Converted to lowercase", "success", "Success")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnClick = ()=>{
        setText(document.getElementById("myBox").value)
        if(document.getElementById("myBox").value === ""){
        let buttons = document.getElementsByClassName("p")
        console.log(buttons)
        for(let i in buttons){
            buttons[i].classList.add("disabled")
        }
        }
        else{
        let buttons = document.getElementsByClassName("p")
        console.log(buttons)
        for(let i in buttons){
            buttons[i].classList.remove("disabled")
        }
        }

        // console.log("On click")
        setText(document.getElementsByTagName("textarea")[0].value)
        localStorage.setItem("text", text)
        document.getElementById("chacheText").outerText = localStorage.getItem("text")
    }


    const [text,setText] = useState("")
    return ( 
        <>
        <input type="file" id="idFile" accept='.txt' className='none'/>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea onChange={handleOnClick} value={text}  className="form-control" id="myBox" rows="10" placeholder='Enter text here'></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary p">Convert to Upper Case</button>
            <button onClick={handleLoClick} className="btn btn-primary mx-1 p">Convert to Lower Case</button>
            <button onClick={saveText} className="btn btn-primary mx-1 p">Save to memory</button>
            <button onClick={restoreText} className="btn btn-primary mx-1">Restore from memory</button>
            <button onClick={handleFileClick} className="btn btn-primary mx-1">Restore from a file</button>
            <button onClick={handleClearText} className="btn btn-primary mx-1 p">Clear Text</button>
            <button onClick={handleCopyText} className="btn btn-primary mx-1 p">Copy Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-1 p">Remove Extra Spaces</button>
            <button onClick={saveFile} className="btn btn-primary my-3 p">Save to a file</button>
        </div>

        <div className="container my-4">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>You can read this in {0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text === "" ? "Enter something in the textbox above to preivew it here" : text}</p>
        </div>
        <div className="container my-4">
            <h4>Your old text (Restored from chache)</h4>
            <p id='chacheText'>{localStorage.getItem("text") === "" ? "Chache is empty!" : localStorage.getItem("text")}</p>
        </div>
        <div className="container my-4">
        <a  role="button" href='#idFile' onClick={clearChache} className="btn btn-outline-danger mx-1">Clear Cache</a>
        </div>
    </>
    );
}
