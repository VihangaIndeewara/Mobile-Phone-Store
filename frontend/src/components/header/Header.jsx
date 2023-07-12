

import "./Header.css"

export const Header=(props)=>{
    return(
  
        <div>
            <nav class="navbar navbar-expand-lg " id="mainNav">
            {props.children}
                <div class="container-fluid ">
                    <a class="navbar-brand " >
                    <img src="../assets/images/logo1.jpg" alt="Logo" width="50" height="50" class="d-inline-block align-text-center " style={{marginRight: "20px"}}/>
            
                    <h2 class="text-white " id="ShopName">       Mobile Phone Store</h2>
                    </a>
                </div>
            </nav>
        </div>

    );
}