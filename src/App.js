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
      finalArray = [...operationsArray];
      setOperationsArray(finalArray)
    }
    else {
      finalArray = [...operationsArray, input];
      setOperationsArray(finalArray)
    }

    let total = Number(finalArray[0])

    for(let i = 0; i < finalArray.length; i++){
      let currentNum = finalArray[i]
      let nextNum = finalArray[i + 1]
  
      switch(currentNum) {
        case "-":
          total = total - Number(nextNum);
          console.log("total", total)
          break;
        case "+":
          total = total + Number(nextNum);
          console.log("total", total)
          break;
        case "/":
          total = total / Number(nextNum);
          console.log("total", total)
          break;
        case "x":
          console.log('nextNum', Number(nextNum))
          total = total * Number(nextNum);
          console.log("total", total)
          break;
      }
      console.log("total before set", total);
    }
    setDisplay(total)
  }

  // version 1
  // function concatInput (num) {
  //   switch(num) {
  //     case "0":
  //     case "1":
  //     case "2":
  //     case "3":
  //     case "4":
  //     case "5":
  //     case "6":
  //     case "7":
  //     case "8":
  //     case "9":
  //       if (["0", "+", "-", "/", "x"].includes(input)) {
  //         setInput(num);
  //         // setOperationsArray(num);
  //       }
  //       else {
  //         setInput(input.concat(num));
  //         // setOperationsArray(input.concat(num));
  //       };
  //       break;
      
  //     case ".":
  //       if (input.includes('.')) {
  //         console.log("input includes .")
  //       } else {setInput(input.concat(num))};
  //       break;
  //     case "-":
  //       // setInput(input.concat(num));
  //       // break;
  //     case "+":
  //     case "x":
  //     case '/':
  //       console.log("operations Array End", operationsArray[operationsArray.length - 1])
  //       console.log("operationsArray before pop", operationsArray)
  //       if(['-', "+", "x", '/'].includes(input)) {
  //         operationsArray.pop()
  //         setOperationsArray([...operationsArray, num]);
  //       }
  //       else {
  //         setOperationsArray([...operationsArray, num]);
  //       }
  //       setInput(num)
  //       break;
  //   }
  // }


  // version 2
  // function concatInput(num) {
  //   if (num === "0" && input === "0") {
  //     // If the current input is "0" and "0" is pressed again, do nothing.
  //     return;
  //   }
  //   // if (num === "-") {
  //   //   setInput('-')
  //   //   console.log('changed input', input)
  //   //   return
  //   // }
  //   if(num === '.'){
  //   if (input.includes('.')) {
  //         console.log("input includes .")
  //         return
  //       } else {setInput(input.concat(num))}; 
  //       return
  //     }
  //   if (["+", "-", "/", "x"].includes(num)) {
  //     if (input === "0") {
  //       if (num === "-") {
  //     setInput('-')
  //     console.log('changed input', input)
  //     return
  //   }
  //       // If the current input is "0" and an operator is pressed, update the last element in operationsArray.
  //       if (operationsArray.length > 0) {
  //         const updatedArray = [...operationsArray];
  //         updatedArray[operationsArray.length - 1] = num;
  //         setOperationsArray(updatedArray);
  //       }
       
  //     } else {
  //       // If the current input is not "0" and an operator is pressed, add the input to operationsArray.
  //       setOperationsArray([...operationsArray, input, num]);
  //     }
  //     setInput("0");
  //   } else {
  //     // If a digit or "." is pressed, continue appending to the input.
  //     setInput((prevInput) => prevInput === "0" ? num : prevInput + num);
  //   }
  // }
  
  // Version 3
  function concatInput(num) {

    const lastOperation = operationsArray[operationsArray.length - 1]
    if (num === "0" && input === "0") {
      // If the current input is "0" and "0" is pressed again, do nothing.
      return;
    }
  
    if (num === "." && input.includes(".")) {
      // If "." is pressed and the current input already contains ".", do nothing.
      return;
    }
  
    if (["+", "-", "/", "x"].includes(num)) {
      if (input === "0") {
        if (num === "-") {
          // Handle negative sign "-"
          setInput("-");
          return;
        } else {
          // If the current input is "0" and an operator is pressed, update the last element in operationsArray.
          
          if (operationsArray.length > 0 && !["-", "+", "/", "x"].includes(operationsArray[operationsArray.length - 1])) {
            const updatedArray = [...operationsArray];
            updatedArray[operationsArray.length - 1] = num;
            setOperationsArray(updatedArray);
          }
        }
      } else {
        // If the current input is not "0" and an operator is pressed, add the input to operationsArray.
        console.log('here it comes')
        if(lastOperation === 'x' && num === '+'){operationsArray.pop()}
        if(input === '-' && num === '+'){setOperationsArray([...operationsArray, num])}
        // console.log(...operationsArray, input, num)
        else {setOperationsArray([...operationsArray, input, num]);}
      }
      setInput("0");
    } else {
      // If a digit or "." is pressed, continue appending to the input.
      setInput((prevInput) => prevInput === "0" ? num : prevInput + num);
    }
  }
  
  
  return (
    <div id='container'>
      <div id='input'>{operationsArray} {display? `= ${display}` : null} </div>
      <p id='display'>{display? display.toString() : input}</p>

      <button onClick={() => {setInput("0"); setDisplay(0); setOperationsArray([]);}} id="clear" className='clear-button'>AC</button>
      <button onClick={() => {concatInput('/')}} className='container-button' id="divide">/</button>
      <button onClick={() => {concatInput('x')}} className='container-button' id="multiply">x</button>

      <button onClick={() => {concatInput('7')}} className='number-button' id='seven'>7</button>
      <button onClick={() => {concatInput('8')}} className='number-button' id='eight'>8</button>
      <button onClick={() => {concatInput('9')}} className='number-button' id='nine'>9</button>
      <button onClick={() => {concatInput('-')}} className='container-button' id="subtract">-</button>

      <button onClick={() => {concatInput('4')}} className='number-button' id='four'>4</button>
      <button onClick={() => {concatInput('5')}} className='number-button' id='five'>5</button>
      <button onClick={() => {concatInput('6')}} className='number-button' id='six'>6</button>
      <button onClick={() => {concatInput('+'); }} className='container-button' id="add">+</button>

      <button onClick={() => {concatInput('1')}} className='number-button' id='one'>1</button>
      <button onClick={() => {concatInput('2')}} className='number-button' id='two'>2</button>
      <button onClick={() => {concatInput("3")}} className='number-button' id='three'>3</button>
      <button onClick={() => {calculate(); }} className='container-button' id="equals">=</button>

      <button onClick={() => {concatInput('0'); }} className='number-button' id='zero'>0</button>
      <button onClick={() => {concatInput('.'); }} className='number-button' id="decimal">.</button>
      
    </div>
  );
}

export default App;
