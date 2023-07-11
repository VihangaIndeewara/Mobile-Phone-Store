import "./Header.css"

export const Header=()=>{
    return(
  
        <div>
            <nav class="navbar navbar-expand-lg " id="mainNav">
            <div class="container-fluid ">
               

                <a class="navbar-brand " >
                <img src="../assets/images/logo1.jpg" alt="Logo" width="50" height="50" class="d-inline-block align-text-center " style={{marginRight: "20px"}}/>
           
                  <h2 class="text-white " id="ShopName">       Mobile Phone Store</h2>
                </a>



                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav ">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                </div>
                </div> */}
            </div>
            </nav>
        </div>

    );
}