import { Header } from "../../header/Header";
import {Footer} from "../../footer/Footer"
import "../item/Item.css"
import { NavBar } from "../../navbar/NavBar";

export const Item=()=>{
    return(
        <div>
            <div className="mainDiv">
            
            <NavBar/>

            <h1 className="titleFirst">Item </h1>
            <h1 className="titleSecond">Form</h1>

            <div>
            <form id="itemInputForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                        <label for="mobileIdInput" class="form-label name">Mobile ID</label>
                        <input type="text" class="form-control inputField" id="mobileIdInput" placeholder="M001"/>
                    </div>
                    <div class="mb-3">
                        <label for="brandInput" class="form-label name">Brand</label>
                        <input type="text" class="form-control inputField" id="brandInput" placeholder="Samsung S5"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput" placeholder="Black"/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyOnHandInput" class="form-label name">QtyOnHand</label>
                        <input type="number" class="form-control inputField" id="mobileQtyOnHandInput" placeholder="5"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput" placeholder="35000.00"/>
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
                    <thead class="text-center">
                        <tr class="table-dark">
                        <th scope="col">Mobile ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">QtyOnHand</th>
                        <th scope="col">Unit Price</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
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