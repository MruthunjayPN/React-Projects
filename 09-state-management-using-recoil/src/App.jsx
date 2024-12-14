import { countatom } from './store/atoms/count'
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
  return <div>{count}</div>
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
