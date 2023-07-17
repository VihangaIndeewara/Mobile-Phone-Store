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
        
            <section id="imageSection">
            <div id="imageDiv">
                
                <div >
                    <img className="imageShow" src="../assets/images/iphone14pro.jpg" alt="14pro"/>
                </div>   
                <div >
                    <img className="imageShow" src="../assets/images/iphoneXS.jpg" alt="xs"/>
                </div> 
                <div >
                    <img className="imageShow" src="../assets/images/samsungS23.jpg" alt="S23"/>
                </div>
                <div >
                     <img className="imageShow" src="../assets/images/redmi.jpg" alt="redmi"/>
                </div>
                <div >
                    <img className="imageShow" src="../assets/images/samsungNote20.jpg" alt="Note20"/>
                </div>
                <div >
                    <img className="imageShow" src="../assets/images/iphoneSE.jpg" alt="SE"/>
                </div>
           
           
            </div>
            </section>
        
        </div>
    )
}