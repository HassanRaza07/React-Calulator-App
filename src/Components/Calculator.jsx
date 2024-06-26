import React, { useState } from 'react'
import "./Calculator.css"
const Calculator = () => {

    const  [display, setDisplay] = useState("");
   
    
  return (
    <div className="container">
        <div className="calculator">
            <form action=''>
                <div className='display'>
                    <input type='text' value={display}/>
                </div>
                <div>
                    <input type='button' value='AC' onClick={(e)=>setDisplay("")}/>
                    <input type='button' value='DC' onClick={(e)=>setDisplay( display.slice(0,-1))}/>
                    <input type='button' value='.' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='/' onClick={(e)=>setDisplay(display + e.target.value)}/>
                </div>
                <div>
                    <input type='button' value='7' onClick={(e)=>setDisplay(display + e.target.value)} />
                    <input type='button' value='8' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='9' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='*' onClick={(e)=>setDisplay(display + e.target.value)}/>
                </div>
                <div>
                    <input type='button' value='4' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='5' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='6' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='+' onClick={(e)=>setDisplay(display + e.target.value)}/>
                </div>
                <div>
                    <input type='button' value='1' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='2' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='3' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='-' onClick={(e)=>setDisplay(display + e.target.value)}/>
                </div>
                <div>
                    <input type='button' value='00' onClick={(e)=>setDisplay(display + e.target.value)} />
                    <input type='button' value='0' onClick={(e)=>setDisplay(display + e.target.value)}/>
                    <input type='button' value='=' className='equal'onClick={(e)=>setDisplay(eval(display))} />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Calculator
