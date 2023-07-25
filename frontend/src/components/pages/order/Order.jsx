import { useState, useEffect } from "react"
import { Header } from "../../header/Header"
import { NavBar } from "../../navbar/NavBar"
import "../order/Order.css"
import axios from "axios"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 


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
    const [itemIds,setItemIds]=useState([]);
    const [itemSelectedValue,setItemSelectedValue]=useState('');
    const [itemDetails,setItemDetails]=useState({itemBrand:"",itemColor:"",itemQtyOnHand:"",itemUnitPrice:""})

   const [itemQty,setItemQty]=useState(0);
   const [itemCart,setItemCart]=useState([]);

   //Order
   const [orderId,setOrderId]=useState()
   

   //customerModel

   const setCustomerId=(customer)=>{
    let newCusId;
    if(customer.length==0){
        newCusId="C001";
    }else{

        const lastIndex=customer.length-1;
        const lastId=(customer[lastIndex].cusId);

        let num=lastId.substring(1);
        num++;
       
        if(num<=9){
            newCusId="C00"+num;
        }else if(num>9&&num<100){
            newCusId="C0"+num;
        }else if(num>=100){
            newCusId="C"+num;
        }
    }

    setCusId(newCusId);
}
   
    const handleCustomerSave=()=>{
        axios.post('http://localhost:5000/api/customer',
        {cusId:cusId,cusName:cusName,cusContactNo:cusContactNo,cusAddress:cusAddress})
        .then((res)=>{Swal.fire('Good job!',res.data.message,'success'),clearCusInputFiels(),getCustomerIds()})
        .catch((err)=>{Swal.fire('Bad job!',err,'error')})
    }

    const clearCusInputFiels=()=>{
        setCusId("");
        setCusName("");
        setCusContactNo("");
        setCusAddress("");
    }

    //getOrderId

    const getOrderId=()=>{
        fetch('http://localhost:5000/api/order')
        .then((res)=>res.json())
        .then((id)=>changeOrderId(id))
        .catch((err)=>console.log(err))
    }

    const changeOrderId=(obj)=>{
        let newId;
        if(obj.length==0){
             newId="OR001";

        }else{
        
        const lastIndex=obj.length-1;
        const lastId=(obj[lastIndex].orderId)

        let number=lastId.substring(2)
        number++;
       


        if(number<=9){
            newId="OR00"+number
        }else if(number>9&&number<100){
            newId="OR0"+number
        }else if(number>=100){
            newId="OR"+number
        }

      
        }
      setOrderId(newId)
    }
    
   

    // get customer ids
  

    const getCustomerIds=()=>{
        fetch('http://localhost:5000/api/customer')
        .then((res)=>res.json())
        .then((customerIds)=>{setCustomerIds(customerIds),setCustomerId(customerIds)})
        .catch((err)=>console.log(err))
     
    }

    //get item ids

    const getItemIds=()=>{
        fetch('http://localhost:5000/api/item')
        .then((res)=>res.json())
        .then((data)=>{setItemIds(data)})
        .catch((err)=>console.log(err))
    }



    useEffect(()=>{
        getCustomerIds();
        getItemIds();
        getOrderId();
    },[])

    //get customer details

    const getCustomerDetails=(cId)=>{
        setCusSelectedValue(cId)
  
        fetch(`http://localhost:5000/api/customer/${cId}`)
        .then((res)=>res.json())
        .then((data)=>{setCustomerDetails({cusName:data.cusName,cusContact:data.cusContactNo})})
        .catch((err)=>{console.log(err)})
    }

    //get Item Details

    const getItemDetails=(itemId)=>{
        setItemSelectedValue(itemId)

        fetch(`http://localhost:5000/api/item/${itemId}`)
        .then((res)=>res.json())
        .then((data)=>{setItemDetails({itemBrand:data.itemBrand,itemColor:data.itemColor,itemQtyOnHand:data.itemQtyOnHand,itemUnitPrice:data.itemUnitPrice})})
        .catch((err)=>console.log(err))
    }

    //Add to cart

    const handleAddToCart=()=>{

        if(itemQty<=0){
            Swal.fire('Oops!',"Please Input Values...",'error')
        }else if(itemQty!=null){

            const itemAmount=itemDetails.itemUnitPrice*itemQty;

            const cartDetail={itemId:itemSelectedValue,itemBrand:itemDetails.itemBrand,itemColor:itemDetails.itemColor,itemQty:itemQty,itemUnitPrice:itemDetails.itemUnitPrice,itemAmount:itemAmount};
            setItemCart(prevArray=>[...prevArray,cartDetail])
            
            clearItemInputFields()
            findTotal(itemAmount)
        }    
    }
 


    const [total,setTotal]=useState("0");
   
    const findTotal=(amount)=>{
        let total=amount;
        
        
        itemCart.forEach((item)=>{
            total+=item.itemAmount
        })
        setTotal(total)
    }

    const removeItem=(index)=>{

        let tempCart=[...itemCart]
        tempCart.splice(index,1)
        setItemCart(tempCart)     
        setTotal(total-itemCart[index].itemAmount)
       
    }

    const clearItemInputFields=()=>{
        setItemDetails({itemBrand:"",itemColor:"",itemQtyOnHand:"",itemUnitPrice:""})
        setItemQty("")
    }

    const clearCustomerInputFields=()=>{
       setCustomerDetails({cusName:"",cusContact:""});
        setItemCart([])
        setTotal(0)
    }

    //Place Order
    const handlePlaceOrder=()=>{
        if(itemCart.length==0){
            Swal.fire('Bad job!',"Please Select Items...",'error')
        }else if(customerDetails.cusName==""){
            Swal.fire('Bad job!',"Please Select Customer...",'error')
        }else{
            const d=new Date();
            let currentDate=d.toLocaleDateString()

            let currentTime=d.toLocaleTimeString()
            


            axios.post('http://localhost:5000/api/order',
            {orderId:orderId,cusId:cusSelectedValue,mobile:itemCart,totalAmount:total,date:currentDate,time:currentTime})
            .then((res)=>{Swal.fire('Good job!',res.data.message,'success'),getOrderId(),clearCustomerInputFields()})
            .catch((err)=>Swal.fire('Bad job!',err,'error'))
        }
      
    }


    return(
        <div className="mainDiv">
           <NavBar/>

            <div>
                <h1 className="titleFirst">Order</h1>
                <h1 className="titleSecond">Form</h1>



                <form className="customerInputForm">
              

                <label className="lblOrderId" >Order ID : </label>
                <label className="lblOrderId" >{orderId}</label>
         
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
                            <label for="mobileIdCombo" class="form-label name">Mobile ID</label>
                        
                            <select id="mobileIdCombo" class="form-select comboBrand" value={itemSelectedValue} onChange={(e)=>{getItemDetails(e.target.value)}}>
                               {itemIds.map((item)=>(
                                 <option key={item.itemId} value={item.itemId}>
                                    {item.itemId}
                                 </option>
                              ))}
                                
                            </select>
                       
        

                    </div>
                    <div class="mb-3">
                        <label for="mobileBrandInput" class="form-label name">Brand</label>
                        <input type="text" class="form-control inputField" id="mobileBrandInput" readOnly value={itemDetails.itemBrand}/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput" readOnly value={itemDetails.itemColor}/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyOnHandInput" class="form-label name">QtyOnHand</label>
                        <input type="text" class="form-control inputField" id="mobileQtyOnHandInput" readOnly value={itemDetails.itemQtyOnHand}/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput" readOnly value={itemDetails.itemUnitPrice}/>
                    </div>
                    
                </div>
            </form>

            <form id="qtyInputForm">
            <div className="divFirst">
                <div class="mb-3 ">
                    <label for="mobileQtyInput" class="form-label name">Qty</label>
                        <input type="number" class="form-control inputField" id="mobileQtyInput" value={itemQty}  onChange={(e)=>{setItemQty(e.target.value)}}/>
                    </div>
         
                <div id="btnGroup">
                    <button id="btnAddToCart"  type="button" onClick={handleAddToCart} >Add to Cart</button>
                 </div>
                 </div>
            </form>

            <div id="cartTableDiv">
            <br />

                <table class="table table-striped" id="cartItemTable" >
                    <thead class="text-center">
                        <tr class="table-dark">
                        <th scope="col">Mobile ID</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody class="text-center">

                        {itemCart.map((item,index)=>(
                            <tr key={index}>
                                <td scope="row">{item.itemId}</td>
                                <td>{item.itemBrand}</td>
                                <td>{item.itemColor}</td>
                                <td>{item.itemQty}</td>
                                <td>{item.itemUnitPrice}</td>
                                <td>{item.itemAmount}</td>
                                <td><img id="removeImg" src="../assets/images/remove.png" alt="removeimage"  onClick={()=>{removeItem(index)}}/></td>
                            </tr>    
                           
                        ))}

                       
                        
                    
                    </tbody>
                </table>
                </div>

            </div>

            <div id="totDiv">
                <label id="totLable">Total : </label>
                <h1 id="totAmount">{total}</h1>
            </div>

            
            <button id="btnPlaceOrder" type="button" class="btn btn-success" onClick={handlePlaceOrder}>Place Order</button>
                

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
                                        <input type="text" class="form-control inputField fw-bold" id="customerIDInput"name="cusID" readOnly value={cusId}  />
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