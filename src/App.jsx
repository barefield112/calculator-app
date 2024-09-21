import { useRef, useState } from "react";
import OutputDisplay from "./OutputDisplay";
import UIConsole from "./UIConsole";

function App() {
  
  // Output at the top.
  // UI console on the bottom. Gives more options on landscape.
  const savedValue = useRef(null);
  const savedOperator = useRef(null);
  const operatorSaved = useRef(false);
  const equalClickedLast = useRef(false);
  const [outputText, setOutputText] = useState("0"); //Sets up the useState for the output text
  const getData = (data)=>{ // The function that retrives the data from the UI Console via props
    if(data === "AC"){ // if input is AC, the Output clears
      setOutputText("0");
      savedValue.current = null;
      savedOperator.current = null;
      equalClickedLast.current = false;
    }
    else if(data === "%" || data ==="+/-" || data==="/" || data === "x" || data === "-" || data === "+" || data === "="){
      if(data != "="){
        equalClickedLast.current = false;
      }
      handleOperator(data);
    }
    else if(operatorSaved.current === true){
      operatorSaved.current = false;
      setOutputText(data);
    }
    else if(outputText === "0"){ //if number is 0, it won't keep placing 0s
      setOutputText(data);
    }
    else{ // Otherwise place the next item in the string
      setOutputText(outputText + data);
    }
  }

  const handleOperator = (operator) =>{
    console.log(`Operator Clicked: ` + operator);

    switch(operator){
      case "%":
        setOutputText(outputText / 100);
        break;
      case "+/-":
        setOutputText(outputText * -1);
        break;
      case "=":
        if(savedValue != null && savedOperator != null){
          const b = outputText;
          if(equalClickedLast.current){
            switch(savedOperator.current){
              case "+":
                setOutputText(Number(b) + Number(savedValue.current));
                break;
              case "-":
                setOutputText(Number(b) - Number(savedValue.current));
                break;
              case "x":
                setOutputText(Number(b) * Number(savedValue.current));
                break;
              case "/":
                setOutputText(Number(b) / Number(savedValue.current));
                break;
              default:
                break;
            }
          }

          else if(!equalClickedLast.current){
            switch(savedOperator.current){
              case "+":
                setOutputText(Number(savedValue.current) + Number(b));
                break;
              case "-":
                setOutputText(Number(savedValue.current) - Number(b));
                break;
              case "x":
                setOutputText(Number(savedValue.current) * Number(b));
                break;
              case "/":
                setOutputText(Number(savedValue.current) / Number(b));
                break;
              default:
                break;
            }
            savedValue.current = b;
          }
          
        }
        equalClickedLast.current = true;
        break;
      default:
        savedOperator.current = operator;
        savedValue.current = outputText;
        break;
    }

    if(savedOperator != null){
      operatorSaved.current = true;
    }
  }


  return (
    <>
    <div className="calc-wrapper">
      <OutputDisplay output={outputText}></OutputDisplay>
      <UIConsole interaction={getData}></UIConsole> {/*sets the props to the getData function above*/}
    </div>
    </>
  )
}

export default App
