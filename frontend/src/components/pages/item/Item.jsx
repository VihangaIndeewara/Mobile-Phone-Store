import { Header } from "../../header/Header";
import "../item/Item.css"

export const Item=()=>{
    return(
        <div>
            <Header>
                <div id="navList">
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <a class="nav-link active" aria-current="page" href="#" className="navItem">Home</a>
                            <a class="nav-link" href="#" className="navItem">Item</a>
                            <a class="nav-link" href="#" className="navItem">Order</a>
                            <a class="nav-link disabled" className="navItem">Order Details</a>
                        </div>
                    </div>
                </div>

                {/* <Link to={'/login'}> */}
                     <button className="btnLogout" type="button"  >Log Out</button>
               {/* </Link> */}
            </Header>

            <h1 className="titleFirst">Item </h1>
            <h1 className="titleSecond">Form</h1>

            <div>
            <form id="itemInputForm">
                <br />
                <div className="divFirst">
                    <div class="mb-3">
                        <label for="mobileIdInput" class="form-label name">Mobile ID</label>
                        <input type="text" class="form-control inputField" id="mobileIdInput"/>
                    </div>
                    <div class="mb-3">
                        <label for="mobileNameInput" class="form-label name">Mobile Name</label>
                        <input type="text" class="form-control inputField" id="mobileNameInput"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileColorInput" class="form-label name">Mobile Color</label>
                        <input type="text" class="form-control inputField" id="mobileColorInput"/>
                    </div>
                </div>
                <div className="divFirst">
                    <div class="mb-3 ">
                    <label for="mobileQtyInput" class="form-label name">Qty</label>
                        <input type="text" class="form-control inputField" id="mobileQtyInput"/>
                    </div>
                    <div class="mb-3 ">
                    <label for="mobileUnitPriceInput" class="form-label name">Unit Price</label>
                        <input type="text" class="form-control inputField" id="mobileUnitPriceInput"/>
                    </div>
                </div>  
         
                <div id="btnGroup">
                    <button id="btnSave" type="button">Save</button>
            
                    <button id="btnUpdate" type="button" >Update</button>
                
                    <button id="btnDelete" type="button" >Delete</button>
                 </div>
            </form>
            </div>
            
{/* 
            <form id="itemInputForm">
            <br/>
            <div className="divFirst">
                <div className="divFirstChild">
                    <label className="name" htmlFor='mobileId'>Mobile Id</label>
                    <br />
                    <input type="text" id='mobileId' name='mobileId' value={mobileId} />
                </div>

                <div className="divFirstChild">
                    <label className="name" htmlFor='bookTitle'>Mobile Name</label>
                    <br />
                    <input type="text" id='bookTitle' name='bookTitle' value={bookTitle} onChange={(e)=>{setBookTitle(e.target.value)}} />
                </div>

                <div className="divFirstChild">
                    <label className="name" htmlFor='bookAuthor'>Author</label>
                    <br />
                    <input type="text" id='bookAuthor'name='bookAuthor' value={bookAuthor} onChange={(e)=>{setBookAuthor(e.target.value)}}/>
                </div>

           </div>
           <br/>

           <div className="divFirst">
                <div className="divSecondChild">
                   <label className="name" htmlFor='bookLanguage'>Language</label>
                    <br />
                    <input type="text" id='bookLanguage' name='bookLanguage' value={bookLanguage} onChange={(e)=>{setBookLanguage(e.target.value)}}/>
                </div>

                <div className="divSecondChild">
                    <label className="name" htmlFor='bookPrice'>Price</label>
                    <br />
                    <input type="text" id='bookPrice' name='bookPrice' value={bookPrice} onChange={(e)=>{setBookPrice(e.target.value)}}/>
                </div>
            </div>    

            <br/>
            <br/>

            <div id="btnGroup">
                <button id="btnSave" type="button" onClick={saveBook}>Save</button>
           
                <button id="btnUpdate" type="button" onClick={updateBook}>Update</button>
            
                <button id="btnDelete" type="button" onClick={deleteBook}>Delete</button>
            </div>
           </form> */}
           <br/>

        </div>
    );
}