import React from 'react'
import { useState } from 'react'
import { TbSquareRoot } from "react-icons/tb";
import { IoIosBackspace } from "react-icons/io";
import { IconContext } from 'react-icons';
//cos tan sin abs
export default function Calculator() {
  const [answer, setAnswer] = useState("");
  const handlecalculate = (e) => {
    setAnswer(eval(answer).toString())
  }
  const handleClear = (e) => {
    setAnswer("");
  }
  const handleClick = (e) => {
    setAnswer(answer.concat(e.target.value))
  }
  const handleDelete = () => {
    setAnswer(answer.slice(0, -1))
  }
  const handlePower = (e) => {
    setAnswer(answer.concat(e.target.value))
  }
  const handleSqrt = () => {
    setAnswer(Math.sqrt(answer))
  }
  const handleRound = () => {
    setAnswer(Math.round(answer))
  }
  return (

    <div className="calculator-functions">
      <input type="text" size="100" placeholder='0' id="result" value={answer} />
      <input type="button" id="clear" value="Clear" onClick={handleClear} className='function' />
      <IconContext.Provider value={{ size: '58px', color: "black" }}>
        <div className="function" id="d">
          <IoIosBackspace onClick={handleDelete} />
        </div>
      </IconContext.Provider>
      <input type="button" id="d" value="/" onClick={handleClick} className='function' />
      <input type="button" value="9" onClick={handleClick} className='function' />
      <input type="button" value="8" onClick={handleClick} className='function' />
      <input type="button" value="7" onClick={handleClick} className='function' />
      <input type="button" id="m" value="*" onClick={handleClick} className='function' />
      <input type="button" value="6" onClick={handleClick} className='function' />
      <input type="button" value="5" onClick={handleClick} className='function' />
      <input type="button" value="4" onClick={handleClick} className='function' />
      <input type="button" id="p" value="+" onClick={handleClick} className='function' />
      <input type="button" value="3" onClick={handleClick} className='function' />
      <input type="button" value="2" onClick={handleClick} className='function' />
      <input type="button" value="1" onClick={handleClick} className='function' />
      <input type="button" id="s" value="-" onClick={handleClick} className='function' />
      <input type="button" value="0" onClick={handleClick} className='function' />
      <input type="button" value="%" onClick={handleClick} className='function' />
      <input type="button" value="." onClick={handleClick} className='function' />
      <IconContext.Provider value={{ size: '58px', color: "black" }}>
        <div className="function" id="d">
          <TbSquareRoot onClick={handleSqrt} />
        </div>
      </IconContext.Provider>

      <input type="button" id="round" value="Roundoff" onClick={handleRound} className='function' />
      <input type="button" id="equal" value="=" onClick={handlecalculate} className='function' />

    </div>
  )
}
