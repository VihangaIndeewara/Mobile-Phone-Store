import { Header } from "../../header/Header";
import {Footer} from "../../footer/Footer"
import "../item/Item.css"
import { NavBar } from "../../navbar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 

export const Item=()=>{

    const[id,setId]=useState();
    const[brand,setBrand]=useState("");
    const[color,setColor]=useState();
    const[qtyOnHand,setQtyOnHand]=useState();
    const[unitPrice,setUnitPrice]=useState();

    const handleSaveItem=()=>{
        if(brand==""){
            Swal.fire('Oops...',"Please add values...",'error')
        }else{
            axios.post('http://localhost:5000/api/item',
            {itemId:id,itemBrand:brand,itemColor:color,itemQtyOnHand:qtyOnHand,itemUnitPrice:unitPrice})
            .then((res)=>{Swal.fire('Good job!',res.data.message,'success'),loadTableData(),clearInputFiels()})
            .catch((err)=>Swal.fire('Bad job!',err,'error'))
        }
    }

    const [tableData,setTableData]=useState([]);

    const loadTableData=()=>{
        fetch('http://localhost:5000/api/item')
        .then(res=>res.json())
        .then((tableData)=>{setTableData(tableData),setItemId(tableData)})
        .catch(err=>console.log(err))
    }


    //set item id
    const setItemId=(item)=>{
        let newItemId;
        if(item.length==0){
            newItemId="M001";
        }else{
            let lastIndex=item.length-1;
            let lastId=item[lastIndex].itemId;

            let num=lastId.substring(1);
            num++;
           
            if(num<=9){
                newItemId="M00"+num;
            }else if(num>9&&num<100){
                newItemId="M0"+num;
            }else if(num>=100){
                newItemId="M"+num;
            }
        }

        setId(newItemId);
        
    }


    useEffect(()=>{
        loadTableData();
    },[])


    const handleTableRowClick=(row)=>{
        setId(row.itemId);
        setBrand(row.itemBrand);
        setColor(row.itemColor);
        setQtyOnHand(row.itemQtyOnHand);
        setUnitPrice(row.itemUnitPrice)
    }

    const handleUpdateItem=()=>{
        if(brand==""){
            Swal.fire('Oops...',"Please select item...",'error')
        }else{
            axios.put('http://localhost:5000/api/item',
            {itemId:id,itemBrand:brand,itemColor:color,itemQtyOnHand:qtyOnHand,itemUnitPrice:unitPrice})
            .then((res)=>{Swal.fire('Good job!',res.data.message,'success'),loadTableData(),clearInputFiels()})
            .catch((err)=>Swal.fire('Bad job!',err,'error'))
        }
        
    }

    const handleDeleteItem=()=>{
        if(brand==""){
            Swal.fire('Oops...',"Please select item...",'error')
        }else{
            axios.delete(`http://localhost:5000/api/item/${id}`)
            .then((res)=>{Swal.fire('Good job!',res.data.message,'success'),loadTableData(),clearInputFiels()})
            .catch((err)=>Swal.fire('Bad job!',err,'error'))
        }
    }

    const clearInputFiels=()=>{
        setId("");
        setBrand("");
        setColor("");
        setQtyOnHand("");
        setUnitPrice("");
    }

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
                    <div class="mb-3 col-3">
                        <label for="mobileIdInput" class="form-label name">Mobile ID</label>
                        <input type="text" class="form-control inputField fw-bold" id="mobileIdInput" readOnly placeholder="M001" name="itemId" value={id} />
                    </div>
                    <div class="mb-3">
                        <label for="brandInput" class="form-label name">Brand</label>
                        <input type="text" class="form-control inputField" id="brandInput" placeholder="Samsung S5" name="itemBrand" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput" placeholder="Black" name="itemColor" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyOnHandInput" class="form-label name">QtyOnHand</label>
                        <input type="number" class="form-control inputField" id="mobileQtyOnHandInput" placeholder="5" name="itemQtyOnHand" value={qtyOnHand} onChange={(e)=>{setQtyOnHand(e.target.value)}}/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput" placeholder="35000.00" name="itemUnitPrice"value={unitPrice} onChange={(e)=>{setUnitPrice(e.target.value)}}/>
                    </div>
                </div>  
         
                <div id="btnGroup">
                    <button id="btnSave" type="button" onClick={handleSaveItem}>Save</button>
            
                    <button id="btnUpdate" type="button" onClick={handleUpdateItem}>Update</button>
                
                    <button id="btnDelete" type="button" onClick={handleDeleteItem}>Delete</button>
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
                        {tableData.map((item,i)=>(
                            <tr key={i} onClick={()=>{handleTableRowClick(item)}}>
                                <td scope="row">{item.itemId}</td>
                                <td>{item.itemBrand}</td>
                                <td>{item.itemColor}</td>
                                <td>{item.itemQtyOnHand}</td>
                                <td>{item.itemUnitPrice}</td>
                            </tr>
                        ))}
                        
                     
                    </tbody>
                </table>
            </div>
            </div>
  
        </div>
    );
}