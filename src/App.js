import './App.css';
import Main from './comps/Main';
import NavBar from './comps/NavBar';
import Footer from './comps/Footer';
import { useState } from 'react';
import About from './comps/About';
import Utility from './comps/Utility';
import Roadmap from './comps/Roadmap';

function App() {
  const [accounts, setAccounts] = useState([]);

  let Component
  switch (window.location.pathname) {
    case "/main":
      Component = Main
      break
    case "/about":
      Component = About
      break
    case "/roadmap":
      Component = Roadmap
      break
    case "/utility":
      Component = Utility
      break
    default:
      Component = Main
  }

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <Component accounts={accounts} setAccounts={setAccounts}/>
      <Footer />
    </div>
  );
}

export default App;
