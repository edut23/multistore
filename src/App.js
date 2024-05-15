import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fontsource/montserrat/400.css'
import Login from './components/login';
import Signup from './components/signup';
import Logo from './assets/multistoreLogo';
import List from './components/list';
import useApp from './hooks/useApp';

function App() {
  
  const{
    page,
    setPage,
    data,
    setData
  } = useApp();

  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
      </header>
      <main className="main">
        {page === 0 && <Login setPage={setPage} data={data}/>}
        {page === 1 && <Signup setPage={setPage} setData={setData}/>}
        {page === 2 && <List setPage={setPage} data={data} setData={setData}/>}
      </main>
    </div>
  );
}

export default App;
