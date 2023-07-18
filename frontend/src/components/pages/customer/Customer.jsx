import "../customer/Customer.css"
import { NavBar } from "../../navbar/NavBar"

export const Customer=()=>{
    return (
        <div>
            <div className="mainDiv">
            <NavBar/>
         

            <h1 className="titleFirst">Customer </h1>
            <h1 className="titleSecond">Form</h1>


            <div>
            <form id="customerInputForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                        <label for="customerIdInput" class="form-label name">Customer ID</label>
                        <input type="text" class="form-control inputField" id="customerIdInput" placeholder="C001"/>
                    </div>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label name">Name</label>
                        <input type="text" class="form-control inputField" id="nameInput" placeholder="Kamal Perera"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="conatctNoInput" class="form-label name">Conatct No</label>
                        <input type="text" class="form-control inputField" id="conatctNoInput" placeholder="+94714203555"/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 col-8">
                    <label for="addressInput" class="form-label name">Address</label>
                        <input type="text" class="form-control inputField " id="addressInput" placeholder="86, Galle Rd, Dehiwala" />
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
                        <th scope="col">Customer ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <tr>
                            <td scope="row">C001</td>
                            <td>Kamal Perera</td>
                            <td>+94714203555</td>
                            <td>86, Galle Rd, Dehiwala</td>
                        </tr>
                        <tr>
                            <td scope="row">C001</td>
                            <td>Kamal Perera</td>
                            <td>+94714203555</td>
                            <td>86, Galle Rd, Dehiwala</td>
                        </tr>
                        <tr>
                            <td scope="row">C001</td>
                            <td>Kamal Perera</td>
                            <td>+94714203555</td>
                            <td>86, Galle Rd, Dehiwala</td>
                        </tr>
                        <tr>
                            <td scope="row">C001</td>
                            <td>Kamal Perera</td>
                            <td>+94714203555</td>
                            <td>86, Galle Rd, Dehiwala</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
        </div>
    )
}