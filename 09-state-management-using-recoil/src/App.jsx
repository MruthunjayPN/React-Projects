import { countatom, evenSelector } from './store/atoms/count'
import { useMemo } from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
  return (
    <>
    <RecoilRoot>
        <Count />
    </RecoilRoot>
    </>
  )
}

function Count(){
  console.log("Count rendered");
  
  return (
    <div>
      <CountRenderer />
      < Buttons />
    </div>
  )
}
function CountRenderer(){
  const count = useRecoilValue(countatom)
  return <div>
    <b>{count}</b>
    <EventCountRenderer/>
  </div>
}

//this is added to show how we can use selectors instead of below logic
function EventCountRenderer(){
  // const count = useRecoilValue(countatom)
  // //study why usememo is used here
  // const isEven =useMemo (() => {
  //   return count%2 == 0
  // }, [count] )
  // return <div>
  //   <p>{ isEven? "it is even" :"it is odd"}</p>
  // </div>

  const isEven = useRecoilValue(evenSelector)
  return <div>
    <p>{isEven? "it is even" :"it is odd"}</p>
  </div>
}
function Buttons(){
  console.log("buttons re-rendered");
  
  const setCount = useSetRecoilState(countatom)
  //if we use useRecoilState buttons will ger re-render evertime the count changes
  return <div>
    <button onClick={() => setCount(count => count+1 )}>Increase</button>
    <button onClick={() => setCount(count => count-1)}>decrease</button>
  </div>
}
export default App
