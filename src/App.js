
import Home from "./pages/Home/Home";
import  Login  from './pages/Home/login/Login';
import Profile from './pages/Home/profile/Profile'
import Register from './pages/Home/register/Register'
import {
  BrowserRouter,Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (
      <div className="app">
       <BrowserRouter>
       
          
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/profile/:username" element={<Profile/>}/>
             

               

        </Routes>

        </BrowserRouter>

        </div>
        
      
    
  );
}

export default App;
