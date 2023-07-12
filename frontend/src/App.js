import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/header/Header';
import { Login } from './components/pages/login/Login';
import { Footer } from './components/footer/Footer';
import { Item } from './components/pages/item/Item';


function App() {
  return (
    <div className="App">
     {/* <Header/>
     <Login/> 
     <Footer/>*/}
     <Item/>
    </div>
  );
}

export default App;
