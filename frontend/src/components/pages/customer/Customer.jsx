import "../customer/Customer.css"
import { NavBar } from "../../navbar/NavBar"
import { useEffect, useState } from "react"
import axios from "axios";

export const Customer=()=>{
    const [id,setId]=useState();
    const [name, setName]=useState();
    const [conatct, setConatct]=useState();
    const [address,setAddress]=useState();

    const saveCustomer=()=>{
        axios.post('http://localhost:5000/api/customer',
        {cusId:id,cusName:name,cusContactNo:conatct,cusAddress:address})
        .then((res)=>alert(res.data.message), loadData())
        .catch((err)=>alert(err))
       
    }

    const updateCustomer=()=>{
        axios.put('http://localhost:5000/api/customer',
        {cusId:id,cusName:name,cusContactNo:conatct,cusAddress:address})
        .then((res)=>alert(res.data.message))
        .catch((err)=>alert(err))
    }


    //load table data

    

    const [data,setData]=useState([]);

    const loadData=()=>{
        fetch('http://localhost:5000/api/customer')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
     
    }
    useEffect(()=>{
        loadData();
    },[])

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
                        <input type="text" class="form-control inputField" id="customerIdInput" placeholder="C001" name="cusId" value={id} onChange={(e)=>{setId(e.target.value)}}/>
                    </div>
                    <div class="mb-3">
                        <label for="nameInput" class="form-label name">Name</label>
                        <input type="text" class="form-control inputField" id="nameInput" placeholder="Kamal Perera" name="cusName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div class="mb-3 ">
                    <label for="conatctNoInput" class="form-label name">Conatct No</label>
                        <input type="text" class="form-control inputField" id="conatctNoInput" placeholder="+94714203555" name="cusContactNo" value={conatct} onChange={(e)=>{setConatct(e.target.value)}}/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 col-8">
                    <label for="addressInput" class="form-label name">Address</label>
                        <input type="text" class="form-control inputField " id="addressInput" placeholder="86, Galle Rd, Dehiwala" name="cusAddress" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                    </div>
            
                </div>  
         
                <div id="btnGroup">
                    <button id="btnSave" type="button" onClick={saveCustomer}>Save</button>
            
                    <button id="btnUpdate" type="button" onClick={updateCustomer}>Update</button>
                
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
                        {data.map((item,i)=>(
                         <tr key={i}>
                            <td scope="row">{item.cusId}</td>
                            <td>{item.cusName}</td>
                            <td>{item.cusContactNo}</td>
                            <td>{item.cusAddress}</td>
                         </tr>

                        ))}

                    </tbody>
                </table>
            </div>

        </div>
        </div>
    )
}