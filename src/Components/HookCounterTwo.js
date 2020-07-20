import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
   const[count, setCount] = useState(initialCount)
   const incrementFive = () =>
   {
       for(let i=0 ; i< 5 ; i++)
       {
           setCount(prevCount => prevCount + 1)
       }
   } 
   return (
        <div>
            count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment By One</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement By One</button>
            <button onClick = {incrementFive}>InCrement by 5</button>
        </div>
    )
}

export default HookCounterTwo
