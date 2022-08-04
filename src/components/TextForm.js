import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const handleUpClick = function(){
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase","success")
        
    }
    const handleDownClick = function(){
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into lowercase","success")
    }
    const clearText = function(){
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared","success")
    }
    const copyText = function(){
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied into clipboard","success")
    }
    
    const removeXtraSpace = function(){
        let newText = text.split(/[" "]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces successfully","success")
    }
    
    
    const handler = function(event){
        // console.log("on change");
        setText(event.target.value)
    }
    
  return (
    <>
    
          <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="form-group" >
                  <textarea className="form-control" onChange={handler} style={{ backgroundColor: props.mode === "dark" ? "#07121c" : "white", color: props.mode === "dark" ? "white" : "black" }} value={text} id="myBox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary my-4' onClick={handleUpClick} >Click to Uppercase</button>
        <button className='btn btn-primary my-4 mx-2' onClick={handleDownClick} >Click to Lowercase</button>
        <button className='btn btn-primary my-4 mx-2' onClick={clearText} >Clear Text</button>
        <button className='btn btn-primary my-4 mx-2' onClick={copyText} >Copy Text</button>
        <button className='btn btn-primary my-4 mx-2' onClick={removeXtraSpace} >Remove Extra Space</button>
    </div>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>Your text summary</h1>
         
        <p>{text.length===0?0:text.split(' ').length} words and {text.length} characters</p>
        <p>{text.length===0?0:0.008*text.split(' ').length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
    
  )
}
