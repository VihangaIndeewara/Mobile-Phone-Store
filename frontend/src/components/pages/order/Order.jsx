import { Header } from "../../header/Header"
import "../order/Order.css"

export const Order=()=>{
    return(
        <div id="mainDiv">
            <Header>
            <div id="navList">
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link active" aria-current="page" href="#" className="navItem">Home</a>
                            <a class="nav-link" href="#" className="navItem">Item</a>
                            <a class="nav-link" href="#" className="navItem">Order</a>
                            <a class="nav-link disabled" className="navItem">Order Details</a>
                        </div>
                    </div>
                </div>

                {/* <Link to={'/login'}> */}
                     <button className="btnLogout" type="button"  >Log Out</button>
               {/* </Link> */}
            </Header>

            <div>
                <h1 className="titleFirst">Order</h1>
                <h1 className="titleSecond">Form</h1>


            </div>
        </div>
    )
}