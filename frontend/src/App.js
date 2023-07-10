import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/header/Header';
import { Login } from './components/pages/login/Login';


function App() {
  return (
    <div className="App">
     <Header/>
     <Login/>
    </div>
  );
}

export default App;
