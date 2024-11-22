import React, {useState} from 'react'
import ComponentB from './ComponentB';

const ComponentA = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrementCounter = () => {
       setCounter(counter + 1);
    }

    const handleDecrementCounter = () => {
        setCounter(counter - 1);
    }


  return (
    <div>
        <h1>Component A</h1>
          
        {/* <ComponentB count = {counter}/> */}

         <button onClick={handleIncrementCounter}>+</button>
         <button onClick={handleDecrementCounter}>-</button>
    </div>
  )
}

export default ComponentA