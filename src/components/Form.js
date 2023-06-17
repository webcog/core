import React, {useState} from 'react'
// import React, {useState, useEffect} from 'react'


export default function Form(props) {
    const handleUpClick = ()=>{
        // console.log("Button Clicked Uppercase")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        // console.log("Testin")
        setText(event.target.value);
    }
    const [text, setText] = useState("");

    return (
    <div className='container'>
        <div className="mt-5 mb-4">
            <h1>{props.heading}  </h1>
        <textarea className="form-control" value={text} onChange={handelOnChange} placeholder='Enter Text here' rows="8"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>

      <h3>Text Summary</h3>
      <p>Total No of Chracters "<b>{text.length}</b>"" </p>
      <p>Total No of Words "<b>{text.split(" ").length}</b>"" </p>
      
    </div>
  )
}
