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
        </div>
    )
}