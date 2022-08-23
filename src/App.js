import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
//import Header from "./component/Header";
import Home from "./component/Home";
import Signup from "./component/Signup";
import { MusicProvider } from "./MusicContext";
import Addmusic from "./component/Addmusic";
import BrowseMusic from "./component/BrowseMusic";
import PlayMusic from "./component/playMusic";
import Header from "./component/Header";


function App() {
  return (
        <div>
          <MusicProvider>
          <BrowserRouter>
            {/* <Navbar></Navbar> */}
            <Header></Header>
          <Routes>
            
            <Route element={<Home></Home>} path="/homepage"/>
            <Route element={<Home></Home>} path="/"/>
            <Route element={<Login></Login>} path="/loginpage"/>
            <Route element={<Signup></Signup>} path="/signuppage"/>
            <Route element={<Addmusic></Addmusic>} path="/addmusicpage"/>
            <Route element={<BrowseMusic></BrowseMusic>} path="/browsemusicpage"/>
            <Route element={<PlayMusic></PlayMusic>} path="/playmusicpage"/>  

          </Routes>
          </BrowserRouter>
          </MusicProvider>

        </div>

        
  );
}

export default App;