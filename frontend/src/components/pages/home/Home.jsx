import { Header } from "../../header/Header"
import "../home/Home.css"
import { NavBar } from "../navbar/NavBar"


export const Home=()=>{
    return(
        <div className="mainDiv">
             <NavBar/>

            <section id="imageSection">
            <div id="imageDiv">
                
                <div >
                    <img className="imageShow" src="../assets/images/iphone14pro.jpg" alt="14pro"/>
                </div>   
                <div >
                    <img className="imageShow" src="../assets/images/iphoneXS.jpg" alt="xs"/>
                </div> 
                <div >
                    <img className="imageShow" src="../assets/images/samsungS23.jpg" alt="S23"/>
                </div>
                <div >
                     <img className="imageShow" src="../assets/images/redmi.jpg" alt="redmi"/>
                </div>
                <div >
                    <img className="imageShow" src="../assets/images/samsungNote20.jpg" alt="Note20"/>
                </div>
                <div >
                    <img className="imageShow" src="../assets/images/iphoneSE.jpg" alt="SE"/>
                </div>
           
           
            </div>
            </section>

            <section id="aboutSection">
                <h1>About</h1>
                <br />
                 <p>Moblie Phone Store is the prestigious dealer in smartphones to hold the category of 150 Million sales Club for Samsung smartphones and tablet sales in Sri Lanka! Your No.1 Retailer in Smartphones!
                        We hold the major awards from all famous smartphone brands in Sri Lanka. The most awarded mobile partner in Sri Lanka. We specialize in major brands of mobiles and mobile accessories and bring you only the best in quality.
                        We thank all our customers for the love and support which helped us to achieve our milestones.
                        </p>
                        <div class="container text-center">
                <br />
            <div class="row align-items-start">
             
                <div class="col">
                
                    <h5>Address</h5>
                    <h6 >
                            No:25,
                            Main Road,
                            Nugegoda.
                    </h6>
                </div>
                <div class="col">
                    <h5>Hotline</h5>
                    <h6>  +94716669999</h6>
                    <h6>  +94116669999</h6>
                </div>
                <div class="col">
                    <h5>Email</h5>
                    <h6>mobilephonestore@gmail.com</h6>
                </div>
                
              
            </div>
            <br />
          </div>
            </section>
        
        </div>
    )
}