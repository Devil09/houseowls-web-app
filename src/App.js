import logo from './logo.svg';
import './App.css';
import Main from './Component/Home/Main.js';
import NavBar from '../src//Component/Home/NavBar.js';
import ContactUs from './Component/contactus/ContactUs.js';
// import privacy from './Component/privacy/privacy.js';
import FooTer from '../src/Component/Home/FooTer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivacyMain from './Component/privacy/PrivacyMain.js';
import TermMain from './Component/Yerm condition/TermMain.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path='/privacy' element={<PrivacyMain />} />
          <Route path='/terms' element={<TermMain />} />
        </Routes>
        <FooTer />
      </BrowserRouter>


    </div>
  )
}

export default App;
