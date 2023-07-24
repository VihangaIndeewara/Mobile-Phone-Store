import "../orderDetails/OrderDetails.css"
import { Header } from "../../header/Header"
import { NavBar } from "../../navbar/NavBar"
import { useEffect, useState } from "react"

export const OrderDetails=()=>{

    const [tableData,setTableData]=useState([])

    const getOrderDetails=()=>{
        fetch('http://localhost:5000/api/order')
        .then(res=>res.json())
        .then((data)=>{setTableData(data)})
        .catch(err=>console.log(err))
    }


    useEffect(()=>{
        getOrderDetails();
    },[])



    return(
        <div className="OrderDetailsMainDiv">
            <NavBar/>
         

            <h1 className="titleFirst">Order </h1>
            <h1 className="titleSecond">Details</h1>
            <h1 className="titleThird">Form</h1>

            <div id="orderDetailsDiv">
                <table class="table table-striped" id="orderDetailsTable">
                    <thead class="text-center">
                        <tr class="table-dark">
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        {tableData.map((order,index)=>(
                            <tr key={index}>
                                <td scope="row">{order.orderId}</td>
                                <td>{order.cusId}</td>
                                <td>{order.totalAmount}</td>
                                <td>{order.date}</td>
                                <td>{order.time}</td>
                                
                            </tr>
                        ))}


                        
                    
                    </tbody>
                </table>
            </div>

        </div>
    )
}