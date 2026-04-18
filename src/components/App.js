
import React,{useState} from "react";


const App = () => {
  let [sum,setSum]=useState(0);
  function suminside(e){
        let number =  e.target.value;
          setSum(prev => prev + number);

        }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={suminside} />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
