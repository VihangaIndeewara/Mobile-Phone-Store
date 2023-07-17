import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { RouteHandler } from './components/route/RouteHandler';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App" >
       <Header/>
       <RouteHandler/>
    </div>
  );
}

export default App;
