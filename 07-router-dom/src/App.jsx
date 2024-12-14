import {BrowserRouter , Routes, Route, useNavigate} from "react-router-dom"
import React, { Suspense } from "react"
import Landing from './components/Landing.jsx'
const Dashboard = React.lazy(()=> import('./components/Dashboard.jsx'))

//the header and the footer always stays
function App() {
  
  return (
    <>
    <header style={{background : "yellow"}}>this is header</header>
    <button onClick={()=> {
      window.location.href = '/landing'
    }}>landing page</button>
    <button onClick={()=> {
      // window.location.href = '/dashboard'  
    }}>dashboard</button>   
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/dashboard" element= {<Suspense fallback={'loading...'} ><Dashboard/></Suspense>}/>
        <Route path="/landing" element= {<Landing/>}/>
      </Routes>
    </BrowserRouter>
    <footer style={{background : "grey"}}>this is footer</footer>
    </>
    
  )
}
function Appbar(){
  const navigate = useNavigate();
  return <>
  <button onClick={() => {
    navigate('/landing')
  }}>
    landing page using Navigate.
    </button>
    <button onClick={() => {
      navigate('/dashboard')  
    }}>
    Dashboard page using Navigate.
    </button>
    </>
}

export default App


//explore the location object used above - > window.location.href : observe in console
//this is the wrong way to access the loactions, coz everytime the button is clicked, the whole thing(all files) loads up again, at the client side. this is opp of how react-router-dom works
//so, useNavigate hook is the correct way to do it. -> but the thing is we have to use it inside the browserRouter : IMP -> this is known as clinet side routing
//i have used both the methods above. obsereve the refresh thing in loction button and in navigate button. (location button makes refresh whole thing -> i.e files bundle reload; useNavigate jst updatess the render) 

//lazy loading : if the person is just on the landing page , why r we loading dashboard page even before user is using it ? so incremently giving the client files(website) is better optimized approach -> so while importing , wrap the component we want to lazy load in react.lazy -> and we have to wrap tht element inside suspense