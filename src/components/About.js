import React, { useState } from 'react'

export default function About() {

const [myStyle, SetStyle ] = useState({
    color:'#fff',
    backgroundColor:'#000',
    padding:'5px',
})

const [modeText, setModeText] = useState("This is Dark Mode")
const [btnText, setBtnText] = useState("Enable Light Mode")

const toggleMode= ()=>{
    if(myStyle.color == "#fff"){
        SetStyle({
            color:'#000',
            backgroundColor:'#fff',
            padding:'5px',
        })
        setModeText("This is Light Mode")
        setBtnText("Enable Dark Mode")
    }
    else{
        SetStyle({
            color:'#fff',
            backgroundColor:'#000',
            padding:'5px',
        })
        setModeText("This is Dark Mode")
        setBtnText("Enable Light Mode")
    }
}

  return (
    <div style={myStyle}>
      <h1 className="text-center my-5">About Us</h1>
      <div className="container">
        <div className="p-4">
            <h1 className='text-center '>{modeText}</h1>
            <p className='text-center '>For shifting mode please Click on he button</p>
        </div>
        
        <button onClick={toggleMode} className='btn btn-dark mb-5 d-block m-auto' >{btnText}</button>
      </div>
    </div>
  )
}
