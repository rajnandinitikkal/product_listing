import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './view/Home/Home';
import About from './view/About/About';
import Cart from './view/Cart/Cart';
import Login from './view/Login/login';
import SignUp from './view/Sign-up/signUp';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Cart/>
    <Login/>
    <SignUp/>
    </>
  );
}

export default App;
