import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { RouteHandler } from './components/route/RouteHandler';
import { Header } from './components/header/Header';
import { Home } from './components/pages/home/Home';

function App() {
  return (
    <div className="App" >
     <Home/>
    </div>
  );
}

export default App;
