import { useState, useEffect } from "react"
import { Header } from "../../header/Header"
import { NavBar } from "../../navbar/NavBar"
import "../order/Order.css"
import axios from "axios"

export const Order=()=>{

    //Customer Save Model
    const [cusId,setCusId]=useState();
    const [cusName,setCusName]=useState();
    const [cusContactNo,setCusContactNo]=useState();
    const [cusAddress,setCusAddress]=useState();

    //Order interface customer fields

    //customer
    const [customerIds,setCustomerIds]=useState([])
    const [cusSelectedValue,setCusSelectedValue]=useState('');
    const [customerDetails,setCustomerDetails]=useState({cusName:"",cusContact:""});

    //item
    const [itemBrands,setItemBrands]=useState([]);


    const handleCustomerSave=()=>{
        axios.post('http://localhost:5000/api/customer',
        {cusId:cusId,cusName:cusName,cusContactNo:cusContactNo,cusAddress:cusAddress})
        .then((res)=>{alert(res.data.message),clearCusInputFiels()})
        .catch((err)=>{alert(err)})
    }

    const clearCusInputFiels=()=>{
        setCusId("");
        setCusName("");
        setCusContactNo("");
        setCusAddress("");
    }



    // get customer ids
  

    const getCustomerIds=()=>{
        fetch('http://localhost:5000/api/customer')
        .then((res)=>res.json())
        .then((customerIds)=>setCustomerIds(customerIds))
        .catch((err)=>console.log(err))
     
    }

    //get item brands

    const getItemBrands=()=>{
        fetch('http://localhost:5000/api/item')
        .then((res)=>res.json())
        .then((data)=>setItemBrands(data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getCustomerIds();
        getItemBrands();
    },[])

    //get customer details


;


    const getCustomerDetails=(cId)=>{
        setCusSelectedValue(cId)
  
        fetch(`http://localhost:5000/api/customer/${cId}`)
        .then((res)=>res.json())
        .then((data)=>{setCustomerDetails({cusName:data.cusName,cusContact:data.cusContactNo})})
        .catch((err)=>{console.log(err)})
    }


    return(
        <div className="mainDiv">
           <NavBar/>

            <div>
                <h1 className="titleFirst">Order</h1>
                <h1 className="titleSecond">Form</h1>



                <form className="customerInputForm">
              

                <label className="lblOrderId" >Order ID : </label>
                <label className="lblOrderId" >OR001</label>
         
                    <div class="mb-3 ">
                        <label for="customerIdCombo" class="form-label name">Customer ID</label>
                        <select id="customerIdCombo" class="form-select combo" value={cusSelectedValue} onChange={(e)=>{getCustomerDetails(e.target.value)}}>
                            {customerIds.map((item)=>(
                                 <option key={item.cusId} value={item.cusId} >
                                 {item.cusId}
                               </option>
                            ))}
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label name">Name</label>
                     
                            <input type="text" class="form-control inputField" id="nameInput" readOnly value={customerDetails.cusName}/>
                      
                    </div>
                    <div class="mb-3 ">
                    <label for="contactNoInput" class="form-label name">Contact No</label>
                        <input type="text" class="form-control inputField" id="contactNoInput" readOnly value={customerDetails.cusContact} />
                    </div>          
            </form>


            <form id="itemSelectForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                         <label for="mobileBrandCombo" class="form-label name">Brand</label>
                            <select id="mobileBrandCombo" class="form-select comboBrand">
                               {itemBrands.map((item)=>(
                                 <option key={item.itemBrand} value={item.itemBrand}>
                                    {item.itemBrand}
                                 </option>
                              ))}
                                
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
                    <thead class="text-center">
                        <tr class="table-dark">
                        <th scope="col">Mobile ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Qty</th>
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

            <div id="totDiv">
                <label id="totLable">Total : </label>
                <h1 id="totAmount">0.00</h1>
            </div>

            
            <button id="btnPlaceOrder" type="button" class="btn btn-success">Place Order</button>
                

            <button id="btnNewCustomer" type="button" class="btn btn-success"> + New Customer</button>
                


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
                                        <input type="text" class="form-control inputField" id="customerIDInput" placeholder="Ex:- C001" name="cusID" value={cusId} onChange={(e)=>{setCusId(e.target.value)}}  />
                                        <span class="control-error"></span>
                                    </div>
                                    <div class="mb-3 col">
                                        <label for="nameInput" class="form-label name">Name</label>
                                        <input type="text" class="form-control inputField" id="nameInput" placeholder="Ex:- Kamal Perera" name="cusName" value={cusName} onChange={(e)=>{setCusName(e.target.value)}}/>
                                        <span class="control-error"></span>
                                    </div>
                                    <div class="mb-3 col">
                                        <label for="contactNoInput" class="form-label name">Contact No</label>
                                        <input type="text" class="form-control inputField" id="contactNoInput" placeholder="Ex:- +94714202287" name="cusContactNo" value={cusContactNo} onChange={(e)=>{setCusContactNo(e.target.value)}}/>
                                        <span class="control-error"></span>
                                    </div>
                                </div>
                           

                                <div class="modal-body  row" style={{paddingTop:0}}>
                                <div class="mb-3 col">
                                        <label for="addressInput" class="form-label name">Address</label>
                                        <input type="text" class="form-control inputField" id="addressInput" placeholder="Ex:-61/4A, Galle Rd, Panadura" name="cusAddress" value={cusAddress} onChange={(e)=>{setCusAddress(e.target.value)}}/>
                                        <span class="control-error"></span>
                                    </div>

                           
                                </div>
                            </form>
                            <div class="modal-footer">
                                <button id="saveCusButton" type="button" class="btn btn-success btn-sm" style={{width: "150px"}} onClick={handleCustomerSave}>Save</button>
                                <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}