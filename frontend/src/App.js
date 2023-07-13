import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Header } from './components/header/Header';
import { Login } from './components/pages/login/Login';
import { Footer } from './components/footer/Footer';
import { Item } from './components/pages/item/Item';
import { Order } from './components/pages/order/Order';


function App() {
  return (
    <div className="App" >
     {/* <Header/>
     <Login/> 
     <Footer/>*/}
     {/* <Item/> */}
     <Order/>
    </div>
  );
}

export default App;
