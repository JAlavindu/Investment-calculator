import { useState } from "react";
import CalculatorBox from "./component/CalculatorBox"
import Header from "./component/Header"
import Table from "./component/Table";

function App() {
  const [details, setDetails] = useState({
    initialInvestment:1000,
    annualInvestment:1000,
    expectedReturn:60,
    duration:5,
  })

 function handleChangeDetails(value, updateItem){
  setDetails(prevValues =>{
    return{
      ...prevValues,
      [updateItem] : +value,
    }
  }
  )
 }

 const detailIsValid = details.duration >= 1;

  return (
    <>
      <Header/>
      <CalculatorBox onChangeDetails={handleChangeDetails} inputs={details}/>
      {detailIsValid ? <Table id="result" results={details}/> : <p className="center">please enter a duration greater than zero</p>}
    </>
  )
}

export default App
