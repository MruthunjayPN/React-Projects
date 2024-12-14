
//create a title component and return it with 2 children

import React, { useState } from "react"

//parent component
function App() {

    const [title, setTitle] = useState('harkirat')

    function changeHeading(){
      setTitle('my name is ' + Math.random())
    }
//here button will not be rendered(although it may seem to) coz its not a component, its jst a html element
  return (
    <> 
    <button onClick={changeHeading}>clilck to change 1st heading</button>
      <Header title={title}></Header>
      <Header title='mruthunjay'></Header>
      <br />
      <HeaderwithButton/>

      {/* <HeaderMemo></HeaderMemo>  see video*/ } 
    </>
  )

  //observe above : return cant have 2 things being rendered. they should be wrapped in a div/empty(as above)/ or inside a react.fragment(read the syntax of it)
  //above return is xml, not html
}

function HeaderwithButton(){
  const [firstTitle, setFirstTitle] = useState('this is heading 3')
  
  function changeTitle(){
    setFirstTitle("changed title to " + Math.random())
  }
  //using this method -> only headerwithbutton gets re-rendered
  return <> 
    <button onClick={changeTitle}>click to change this heading</button>
    <Header title={firstTitle}/>
  </>
}

//header component
function Header({title}) {   //object destructing
  return <div>{title}</div>
}
export default App

//using memo -> see video -> 40:00(week 6.1)
// const HeaderMemo = React.memo(function Headers ({title}) {   
//   return <div>{title}</div>
// })

//rerender -> any time the react changes/updates the DOM is called rerender -> observe using react dev tools extension
//thumb rule : minimize number of rerenders

//above : we have used changeheading for rerender example. but by using react tool we can observe that all the elements are rendered, but we want to change 1st title only 
//i.e -> a parent component re-render(when the state changes) triggers all children rerendering 

//solution : we should not declare state variable inside App function. instead we can declare it in specific component. observe headerWithButton using react dev tool in browser

//note: in real world , try to keep the state variable in lowest common ancestor, when multiple childern re-render on state change. this approach minimizes number of re-renders(optimal)
//we can also use -> react.memo (memoization) -> read docs
//react.memo is different from usememo