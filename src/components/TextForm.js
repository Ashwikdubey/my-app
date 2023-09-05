import React,{useState} from 'react'
export default function TextForm(props) {
  const convupcase=()=>{
    console.log("button was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase","success");
  }
  const convlocase=()=>{
    console.log("button was clicked"+text)
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowercase","success")
  }
  const clrtxt=()=>{
    let newtext2="";
    setText(newtext2);
    props.showalert("text cleared","success")
  }

  const handlechange=(event)=>{
    console.log("changed");
    setText(event.target.value);
  }  
  const[text,setText]=useState("");
    return (
      <>
    <div>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"whitesmoke":"#343a40",color:props.mode==="light"?"black":"white"}} onChange={handlechange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className={`btn btn-${props.Red==="light"?"primary":"danger"} mx-1`} onClick={convupcase} >convert to uppercase</button>
<button className={`btn btn-${props.Red==="light"?"primary":"danger"} mx-1`} onClick={convlocase} >convert to lowercasecase</button>
<button className={`btn btn-${props.Red==="light"?"primary":"danger"} mx-1`} onClick={clrtxt}>clear text</button>
    </div>
    <div className="container my-2">
      <h1>Text Summary</h1>
      <p>No. of words-{(text.split(" ").length)} no.of characters-{text.length}</p>
    </div>
    <div className="container my-2">
      <h2>Preview</h2>
      {text}
    </div>
    
    </>
  )
} 
