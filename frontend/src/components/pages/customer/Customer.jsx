import "../customer/Customer.css"
import { NavBar } from "../../navbar/NavBar"
import { useEffect, useState } from "react"
import axios from "axios";

export const Customer=()=>{
    const [id,setId]=useState();
    const [name, setName]=useState("");
    const [conatct, setConatct]=useState();
    const [address,setAddress]=useState();

    const saveCustomer=()=>{
        if(name==""){
            alert("Please add values...")
        }else{
            axios.post('http://localhost:5000/api/customer',
            {cusId:id,cusName:name,cusContactNo:conatct,cusAddress:address})
            .then((res)=>{alert(res.data.message), loadData(),clearInputFiels()})
            .catch((err)=>alert(err))
        }    
       
    }

    const updateCustomer=()=>{
        if(name==""){
            alert("Please select customer...")
        }else{
            axios.put('http://localhost:5000/api/customer',
            {cusId:id,cusName:name,cusContactNo:conatct,cusAddress:address})
            .then((res)=>{alert(res.data.message),loadData(),clearInputFiels()})
            .catch((err)=>alert(err))
        }    
    }

    const deleteCustomer=()=>{
        if(name==""){
            alert("Please select customer...")
        }else{
            axios.delete(`http://localhost:5000/api/customer/${id}`)

            .then((res)=>{alert(res.data.message),loadData(),clearInputFiels()})
            .catch((err)=>alert(err))
        }
    }

    const clearInputFiels=()=>{
        setId("");
        setName("");
        setAddress("");
        setConatct("");
    }

    //load table data
   

    const [data,setData]=useState([]);

    const loadData=()=>{
        fetch('http://localhost:5000/api/customer')
        .then(res=>res.json())
        .then((data)=>{setData(data),setCusId(data)})
        .catch(err=>console.log(err))
     
    }

    const setCusId=(customer)=>{
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

        setId(newCusId);
    }

    useEffect(()=>{
        loadData();
    },[])


    const handleRowClick=(row)=>{
        setId(row.cusId);
        setName(row.cusName);
        setAddress(row.cusAddress);
        setConatct(row.cusContactNo);
    }

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
                    <div class="mb-3  col-3">
                        <label for="customerIdInput" class="form-label name">Customer ID</label>
                        <input type="text" class="form-control inputField fw-bold" id="customerIdInput" placeholder="C001" name="cusId" readOnly value={id}/>
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
                
                    <button id="btnDelete" type="button" onClick={deleteCustomer}>Delete</button>
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
                         <tr key={i} onClick={()=>{handleRowClick(item)}}>
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