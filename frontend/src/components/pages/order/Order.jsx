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

            <button id="btnNewCustomer" type="button" class="btn btn-success"> + New Customer</button>
                

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
            </form>

            <form id="qtyInputForm">
            <div className="divFirst">
                <div class="mb-3 ">
                    <label for="mobileQtyInput" class="form-label name">Qty</label>
                        <input type="number" class="form-control inputField" id="mobileQtyInput" />
                    </div>
         
                <div id="btnGroup">
                    <button id="btnAddToCart" type="button">Add to Cart</button>
                 </div>
                 </div>
            </form>

            <div id="cartTableDiv">
            <br />

                <table class="table table-striped" id="cartItemTable">
                    <thead >
                        <tr class="table-dark">
                        <th scope="col">Mobile ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td scope="row">M001</td>
                            <td>Samsung S5</td>
                            <td>Black</td>
                            <td>12</td>
                            <td>36000</td>
                        </tr>
                        <tr>
                            <td>M001</td>
                            <td>Samsung S5</td>
                            <td>Black</td>
                            <td>12</td>
                            <td>36000</td>
                        </tr>
                        <tr>
                            <td>M001</td>
                            <td>Samsung S5</td>
                            <td>Black</td>
                            <td>12</td>
                            <td>36000</td>
                        </tr>
                        <tr>
                            <td>M001</td>
                            <td>Samsung S5</td>
                            <td>Black</td>
                            <td>12</td>
                            <td>36000</td>
                        </tr>
                        <tr>
                            <td>M001</td>
                            <td>Samsung S5</td>
                            <td>Black</td>
                            <td>12</td>
                            <td>36000</td>
                        </tr>
          
                

                    </tbody>
                </table>
                </div>

            </div>

            <div id="totDiv">
                <label id="totLable">Total : </label>
                <h1 id="totAmount">0.00</h1>
            </div>

            
            <button id="btnPlaceOrder" type="button" class="btn btn-success">Place Order</button>
                



        <div>
            <button id="btnNewCustomer" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#customerRegistrationModal" >+ New Customer</button>


                <div class="modal  modal-dialog modal-lg  " id="customerRegistrationModal" tabindex="-10" aria-labelledby="customerRegistration"  aria-hidden="true" >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header " style={{background: "#3A4D85", color: "white",height:"50px"}}>
                                <h5 class="modal-title" id="saveModalTitle" style={{fontSize:"14px"}}>Add New Customer</h5>
                            </div>

                            <form id="customerRegistrationForm">
                                <div class="modal-body  row">

                                    <div class="mb-3 col">
                                        <label for="customerIDInput" class="form-label name">Customer Id</label>
                                        <input type="text" class="form-control inputField" id="customerIDInput" placeholder="Ex:- C001" name="customerID" />
                                        <span class="control-error"></span>
                                    </div>
                                    <div class="mb-3 col">
                                        <label for="nameInput" class="form-label name">Name</label>
                                        <input type="text" class="form-control inputField" id="nameInput" placeholder="Ex:- Kamal Perera" name="customerName"/>
                                        <span class="control-error"></span>
                                    </div>
                                    <div class="mb-3 col">
                                        <label for="contactNoInput" class="form-label name">Contact No</label>
                                        <input type="text" class="form-control inputField" id="contactNoInput" placeholder="Ex:- +94714202287" name="customerContactNo"/>
                                        <span class="control-error"></span>
                                    </div>
                                </div>
                           

                                <div class="modal-body  row" style={{paddingTop:0}}>
                                <div class="mb-3 col">
                                        <label for="addressInput" class="form-label name">Address</label>
                                        <input type="text" class="form-control inputField" id="addressInput" placeholder="Ex:-61/4A, Galle Rd, Panadura" name="customerAddress"/>
                                        <span class="control-error"></span>
                                    </div>

                           
                                </div>
                            </form>
                            <div class="modal-footer">
                                <button id="saveCusButton" type="button" class="btn btn-success btn-sm" style={{width: "150px"}}>Save</button>
                                <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}