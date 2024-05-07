import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './components/login';
import { useState } from 'react';
import Signup from './components/signup';

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pharmaco</h1>
      </header>
      <main className="main">
        {page === 0 && <Login setPage={setPage}/>}
        {page === 1 && <Signup setPage={setPage}/>}
      </main>
    </div>
  );
}

export default App;
