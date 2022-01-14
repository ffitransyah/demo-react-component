import { useState } from 'react';

export default function ContentFn() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Functional Component</h2>
      <h3>{counter}</h3>
      <button onClick={decrement}>-</button>{"  "}
      <button onClick={increment}>+</button>
    </div>
  )
}


// const ContentFn = () => {
//   return (
//     <div>
//       <h2>Functional Component</h2>
//     </div>
//   )
// }
