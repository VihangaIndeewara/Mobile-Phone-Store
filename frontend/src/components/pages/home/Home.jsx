import { Header } from "../../header/Header"
import "../home/Home.css"

export const Home=()=>{
    return(
        <div>
              <Header>
                <div id="navList">
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link active" aria-current="page" href="#" className="navItem">Home</a>
                            <a class="nav-link" href="#" className="navItem">Customer</a>
                            <a class="nav-link" href="#" className="navItem">Item</a>
                            <a class="nav-link" href="#" className="navItem">Order</a>
                            <a class="nav-link" href="#" className="navItem">Order Details</a>
                        </div>
                    </div>
                </div>

                {/* <Link to={'/login'}> */}
                     <button className="btnLogout" type="button"  >Log Out</button>
               {/* </Link> */}
            </Header>

            <h1 className="titleFirst">Home </h1>
        
            <div id="imageDiv">
                <div >
                    <img src="../assets/images/iphoneXS.jpeg" alt="xs"/>
                </div>
                <div >
                    <img src="../assets/images/iphone14pro.jpeg" alt="14pro"/>
                </div>    
                <div >
                    <img src="../assets/images/samsungNote20.jpeg" alt="Note20"/>
                </div>
                <div >
                    <img src="../assets/images/iphoneSE.jpeg" alt="SE"/>
                </div>
                <div >
                     <img src="../assets/images/redmi.jpeg" alt="redmi"/>
                </div>
                <div >
                    <img src="../assets/images/samsungS23.jpeg" alt="S23"/>
                </div>
            </div>
        
        </div>
    )
}