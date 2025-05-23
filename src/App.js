import './App.css';

import Navbar from './component/Navbar/Navbar';
import Login from './view/login.jsx';
import SignUp from './view/signUp.jsx';
import Products from './view/ProductPage.jsx';
import About from './view/About/About';
import Feedback from './view/FeedbackPage.jsx';


function App() {
  return (
    <>
    <Navbar/>
    <Login/>
    <SignUp/>
    <Products/>
    <About/>
    <Feedback/>
    </>
  );
}

export default App;
