import React, {useState} from 'react'
import './Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import './Sais.css';

export default function TextBox(props) {

    const [text1, setText] = useState("");

     const handleOnChange = (event) => {
        setText(event.target.value)
     }
     const ucOnClick = () => {
        let n1 = text1.toUpperCase();
        setText(n1);
       props.showAlert(": Converted to Uppercase!!", "Success");
     }
     const lcOnClick = () => {
        let n1 = text1.toLowerCase();
        setText(n1);
        props.showAlert(": Converted to Lowercase!!", "Success");
     }
     
     const clear1 = () => {
       let  n1 = "";
        setText(n1);
        props.showAlert(": Cleared the text!!", "Success");
     }
const titleOnClick = () => {
    let n1 = text1.split(' ').map(function (word, index) {
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join(' ');
  setText(n1);
  props.showAlert(": Converted to Title Case!!", "Success");
}

const copyOnClick = () => { 
    let n1 = text1;
    navigator.clipboard.writeText(n1);
    props.showAlert(": Copied the text!!", "Success");
}
     const resOnClick = () => {
           let n1 = text1.replace(/\s+/g, ' ').trim()
           setText(n1);
           props.showAlert(": Extra spaces have been removed!!", "Success");
}

     


    return(
        <>
      <center>


<h1 className={`my-5 mx-auto text-${props.mode1==='dark'?'light':'dark'}`}><i>Welcome to TextUtils</i></h1>
</center>
        <div className="ss2">
     
        </div>
          <center>
            
                  <textarea className='form-control my-2 ss3' placeholder="Enter the text" id="My-box" rows="10" value={text1} onChange={handleOnChange}>
        </textarea>
        <div>
        <button disabled = {text1.length===0} className='btn btn-primary my-2' onClick={ucOnClick} style={{backgroundColor:props.mode1==='light'?'dodgerblue':'lightseagreen'}}>Convert to Uppercase</button>
        <button disabled = {text1.length===0} className='btn btn-primary my-2 mx-2' onClick={lcOnClick} style={{backgroundColor:props.mode1==='light'?'dodgerblue':'lightseagreen'}}>Convert to Lowercase</button>
        <button disabled = {text1.length===0} className='btn btn-primary my-2' onClick={titleOnClick} style={{backgroundColor:props.mode1==='light'?'dodgerblue':'lightseagreen'}}>Title case</button>
        <button disabled = {text1.length===0} className='btn btn-primary my-2 mx-2' onClick = {copyOnClick} style={{backgroundColor:props.mode1==='light'?'dodgerblue':'lightseagreen'}}>Copy Text</button>
        <button disabled = {text1.length===0} className='btn btn-primary my-2' onClick={resOnClick} style={{backgroundColor:props.mode1==='light'?'dodgerblue':'lightseagreen'}}>Remove extra spaces</button>
        <button disabled = {text1.length===0} className='btn btn-success my-2 mx-2' onClick={clear1} style={{backgroundColor:props.mode1==='light'?'black':'gray'}}>Clear Text</button>
        


    
        </div>
        
        <hr></hr>
<br></br>
<h2 style={{color:props.mode1==='light'?'#008456':'cornsilk'}}>TEXT SUMMARY:</h2>
<br></br>
<div className='summary'>
    
    <br></br>
<b>TIME TAKEN TO COUNT: {"   "}</b><span>{0.008*text1.split(/\s+/).filter(Boolean).length} minutes</span><br></br>

<b>NO. OF WORDS: {"  "}</b><span>{text1.split(/\s+/).filter(Boolean).length} words</span>
<br></br>
<b>NO. OF CHARACTERS: {"  "}</b><span>{text1.length} characters</span>

</div>


<hr>
</hr>
<h2 style={{color:props.mode1==='light'?'#008456':'cornsilk'}}>PREVIEW:</h2>
<p  style={{color:props.mode1==='light'?'black':'white'}}>{text1.length>0?text1:'Nothing to preview!!!'}</p>
<br></br>
</center> 
         
     
     
        </>

    )
}
