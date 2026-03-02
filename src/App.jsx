import ColorPicker from "./color.jsx";
import ProfilePic from "./pic.jsx";
import Button from "./clickBtn.jsx";
import MyForm from "./Form.jsx";
import Counter from "./counter.jsx";
import DigitalClock from "./digitalClock.jsx";
import OTPGenerator  from "./otpGenerator.jsx";
import {BrowserRouter , Routes , Route, Link} from 'react-router-dom';
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";


function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;