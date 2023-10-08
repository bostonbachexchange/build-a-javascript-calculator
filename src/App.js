import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [display, setDisplay ] = useState()
  const [input, setInput ] = useState("0")
  const [operationsArray, setOperationsArray] = useState([])

  useEffect(() => {
    console.log("operationsArray", operationsArray);
  }, [operationsArray]);

  function calculate() {
    let finalArray
    if(["-", "+", "x", '/'].includes(input)) {
      operationsArray.pop()
      // setOperationsArray([...(operationsArray)]);
      finalArray = [...operationsArray];
    }
    else {
      finalArray = [...operationsArray, input];
    }

    let total = parseInt(finalArray[0])

    for(let i = 0; i < finalArray.length; i++){
      let currentNum = finalArray[i]
      let nextNum = finalArray[i + 1]
      // if(!["-", "+", "x", '/'].includes(currentNum)) {
      //   console.log("currentNum", currentNum)
      //   !total && (total = parseInt(finalArray[i]))
      // }
      switch(currentNum) {
        case "-":
          total = total - parseInt(nextNum);
          console.log("total", total)
          break;
        case "+":
          total = total + parseInt(nextNum);
          console.log("total", total)
          break;
        case "/":
          total = total / parseInt(nextNum);
          console.log("total", total)
          break;
        case "x":
          total = total * parseInt(nextNum);
          console.log("total", total)
          break;
      }
      console.log("total before set", total);
    }
    setDisplay(total)
  }

  function concatInput (num) {
    switch(num) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (["0", "+", "-", "/", "x"].includes(input)) {
          setInput(num);
        }
        else {setInput(input.concat(num))};
        break;
      case "-":
      case "+":
      case "x":
      case '/':
        console.log("operations Array End", operationsArray[operationsArray.length - 1])
        console.log("operationsArray before pop", operationsArray)
        if(["-", "+", "x", '/'].includes(input)) {
          operationsArray.pop()
          // console.log("operationsArray after pop", operationsArray)
          setOperationsArray([...operationsArray, num]);
        }
        else {
          setOperationsArray([...operationsArray, input, num]);
        }
        setInput(num)
        break;
    }
  }
  return (
    <div id='container'>
      <div id='input'>{display}</div>
      <div id='display'>{input}</div>

      <button onClick={() => {setInput("0"); setDisplay(0); setOperationsArray([]);}} id="clear" className='clear-button'>AC</button>
      <button onClick={() => {concatInput('/'); setDisplay(0)}} className='container-button' id="divide">/</button>
      <button onClick={() => {concatInput('x'); setDisplay(0)}} className='container-button' id="multiply">x</button>

      <button onClick={() => {concatInput('7'); setDisplay(0)}} className='number-button' id='seven'>7</button>
      <button onClick={() => {concatInput('8'); setDisplay(0)}} className='number-button' id='eight'>8</button>
      <button onClick={() => {concatInput('9'); setDisplay(0)}} className='number-button' id='nine'>9</button>
      <button onClick={() => {concatInput('-'); setDisplay(0)}} className='container-button' id="subtract">-</button>

      <button onClick={() => {concatInput('4'); setDisplay(0)}} className='number-button' id='four'>4</button>
      <button onClick={() => {concatInput('5'); setDisplay(0)}} className='number-button' id='five'>5</button>
      <button onClick={() => {concatInput('6'); setDisplay(0)}} className='number-button' id='six'>6</button>
      <button onClick={() => {concatInput('+'); }} className='container-button' id="add">+</button>

      <button onClick={() => {concatInput('1'); setDisplay(0)}} className='number-button' id='one'>1</button>
      <button onClick={() => {concatInput('2'); setDisplay(0)}} className='number-button' id='two'>2</button>
      <button onClick={() => {concatInput("3"); setDisplay(0)}} className='number-button' id='three'>3</button>
      <button onClick={() => {calculate(); }} className='container-button' id="equals">=</button>

      <button onClick={() => {concatInput('0'); setDisplay(0)}} className='number-button' id='zero'>0</button>
      <button onClick={() => {concatInput('.'); setDisplay(0)}} className='number-button' id="decimal">.</button>
      
    </div>
  );
}

export default App;
