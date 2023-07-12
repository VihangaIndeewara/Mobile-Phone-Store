import { Header } from "../../header/Header";
import {Footer} from "../../footer/Footer"
import "../item/Item.css"

export const Item=()=>{
    return(
        <div>
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
         

            <h1 className="titleFirst">Item </h1>
            <h1 className="titleSecond">Form</h1>

            <div>
            <form id="itemInputForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                        <label for="mobileIdInput" class="form-label name">Mobile ID</label>
                        <input type="text" class="form-control inputField" id="mobileIdInput"/>
                    </div>
                    <div class="mb-3">
                        <label for="brandInput" class="form-label name">Brand</label>
                        <input type="text" class="form-control inputField" id="brandInput"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput"/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyInput" class="form-label name">Qty</label>
                        <input type="text" class="form-control inputField" id="mobileQtyInput"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput"/>
                    </div>
                </div>  
         
                <div id="btnGroup">
                    <button id="btnSave" type="button">Save</button>
            
                    <button id="btnUpdate" type="button" >Update</button>
                
                    <button id="btnDelete" type="button" >Delete</button>
                 </div>
            </form>
            </div>


            <div id="tableDiv">
                <table class="table table-striped" id="itemTable">
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
  
        </div>
    );
}