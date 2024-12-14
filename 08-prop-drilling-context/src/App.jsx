import { useContext, useState } from 'react'
import { ContextCount } from './context.jsx';

//prop drilling
// function App() {
//   const [count, setCount] = useState(0)

//   return ( <div>
//     <Count count={count} setCount={setCount}/>
//   </div>
//   )
// }

// function Count({count, setCount}) {
//   return (<div>
//     <CountRender count={count}/>
//     <Buttons count = {count} setCount={setCount}/>
//   </div>
// )
// }

// function CountRender({count}) {
//   return (
//     <div>{count}</div>
//   )
// }

// function Buttons({count, setCount}){
//   return<div>
//     <button onClick={()=> {
//       setCount(count+1);
//     }}>Increase</button>
//     <button onClick={()=> {
//       setCount(count-1);
//     }}>Decrease</button>
//   </div>
// }


//context api

function App () {
  const [count, setCount] = useState(0);

  //wrap anyone that want to use the teleported value inside a provider
  return(
    <div>
      <ContextCount.Provider value = {count}>
        <Count  setCount= {setCount}/>
      </ContextCount.Provider>
    </div>
  )
}
function Count({setCount}){
  console.log("count rerendered")
  return (<div>
      <CountRender/>
      <Buttons setCount={setCount}/>
    </div>)
}
function CountRender() {
  const count = useContext(ContextCount)
    return (
      <div>{count}</div>
    )
}
  
function Buttons({setCount}){
  const count = useContext(ContextCount)
  return<div>
    <button onClick={()=> {
        setCount(count+1);
      }}>Increase</button>
    <button onClick={()=> {
        setCount(count-1);
      }}>Decrease</button>
    </div>
}

export default App

//see video & slides for prop drilling -> passing the props to subsequent childern unitl it reaches the destination where it will be useable -> soln for prop drilling -> context api -> teleport the props

//what is the short coming of the above context approach, that state management approach fixes? the context api rerenders the parent where the context was sent(int the above approach, the Count function doesnt change, when the count or setCount changes), still it gets rerendered., which is unnecessary

//context api only solves syntax (prop drilling), but state management using recoil solves both syntax and unnecessary rerendering: other state management libraries: redux, zustand  