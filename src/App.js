import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
//import Header from "./component/Header";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Addmusic from "./component/Addmusic";
import BrowseMusic from "./component/BrowseMusic";
import PlayMusic from "./component/playMusic";


function App() {
  return (
        <div>
          <BrowserRouter>
            <Navbar></Navbar>
          <Routes>
            <Route element={<Home></Home>} path="/homepage"></Route>
            <Route element={<Login></Login>} path="/loginpage"></Route>
            <Route element={<Signup></Signup>} path="/signuppage"></Route>
            <Route element={<Addmusic></Addmusic>} path="/addmusicpage"></Route>
            <Route element={<BrowseMusic></BrowseMusic>} path="/browsemusicpage"></Route>
            <Route element={<PlayMusic></PlayMusic>} path="/playmusicpage"></Route>          
          </Routes>
          </BrowserRouter>

        </div>

        
  );
}

export default App;
