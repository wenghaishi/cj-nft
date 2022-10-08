import './App.css';
import Main from './comps/Main';
import NavBar from './comps/NavBar';
import Footer from './comps/Footer';
import { useState } from 'react';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts}/>
      <Main accounts={accounts} setAccounts={setAccounts}/>
      <Footer />
    </div>
  );
}

export default App;
