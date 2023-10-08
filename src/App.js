import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay ] = useState(0)
  const [input, setInput ] = useState("0")

  return (
    <div id='container'>
      <div id='input'>{display}</div>
      <div id='display'>{input}</div>

      <button onClick={() => {setInput(0); setDisplay(0)}} id="clear" className='clear-button'>AC</button>
      <button onClick={() => {setInput('/'); setDisplay(0)}} className='container-button' id="divide">/</button>
      <button onClick={() => {setInput('x'); setDisplay(0)}} className='container-button' id="multiply">x</button>

      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='seven'>7</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='eight'>8</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='nine'>9</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='container-button' id="subtract">-</button>

      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='four'>4</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='five'>5</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='six'>6</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='container-button' id="add">+</button>

      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='one'>1</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='two'>2</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='three'>3</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='container-button' id="equals">=</button>

      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id='zero'>0</button>
      <button onClick={() => {setInput(0); setDisplay(0)}} className='number-button' id="decimal">.</button>
      
    </div>
  );
}

export default App;
