
import './App.css';
import React,{useState,useEffect} from "react"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './component/NavBar';
import Home from './component/Home';
import Travellerform from './component/Travellerform';
import Gallery from './component/Gallery';
import Signup from './component/Signup';
import Login  from './component/Login';
import Traveller from './component/Traveller';
import About from './component/About';




// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch("/hello")
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }





  function App(){

    const [login, onLogin] = useState(null)
    const [user, setUser] = useState(null)
    return (
        <div>
        <NavBar/>
        
        <Routes>
          <Route exact path='/' element={<Home  />}  />
          <Route exact path='/signup' element={<Signup onLogin={()=>onLogin(login)}/>} />
          <Route exact path='/traveller' element={<Traveller />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/login' element={<Login user={user} setUser={setUser} />} />
          <Route exact path='/about' element={<About />} />
          
        </Routes>

        
        

      
        
        <Travellerform />

    
      </div>
    )
    }


export default App;
