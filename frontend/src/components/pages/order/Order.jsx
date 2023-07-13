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


                <form id="customerInputForm">
                <br />
         
                    <div class="mb-3">
                        <label for="customerIdCombo" class="form-label name">Customer ID</label>
                        <select id="customerIdCombo" class="form-select combo">
                            <option></option>
                            <option>C001</option>
                            <option>C002</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label name">Name</label>
                        <input type="text" class="form-control inputField" id="nameInput" disabled/>
                    </div>
                    <div class="mb-3 ">
                    <label for="contactNoInput" class="form-label name">Contact No</label>
                        <input type="text" class="form-control inputField" id="contactNoInput" disabled/>
                    </div>          
            </form>

            <form id="itemSelectForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                         <label for="mobileBrandCombo" class="form-label name">Brand</label>
                            <select id="mobileBrandCombo" class="form-select comboBrand">
                                <option></option>
                            </select>
                       
                    </div>
                    <div class="mb-3">
                        <label for="mobileIdInput" class="form-label name">Mobile ID</label>
                        <input type="text" class="form-control inputField" id="mobileIdInput" disabled/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput" disabled/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyOnHandInput" class="form-label name">QtyOnHand</label>
                        <input type="text" class="form-control inputField" id="mobileQtyOnHandInput" disabled/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput" disabled/>
                    </div>
                </div>  
         
                <div id="btnGroup">
                    <button id="btnAddToCart" type="button">Add to Cart</button>
            
               
                 </div>
            </form>


            </div>
        </div>
    )
}