import { Header } from "../../header/Header";

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

            <div>
            <form id="itemInputForm">
                <div class="mb-3">
                    <label for="mobileIdInput" class="form-label">Mobile ID</label>
                    <input type="text" class="form-control" id="mobileIdInput"/>
                </div>
                <div class="mb-3">
                    <label for="mobileNameInput" class="form-label">Mobile Name</label>
                    <input type="text" class="form-control" id="mobileNameInput"/>
                </div>
                <div class="mb-3 ">
                <label for="mobileColorInput" class="form-label">Mobile Color</label>
                    <input type="text" class="form-control" id="mobileColorInput"/>
                </div>
                <div class="mb-3 ">
                <label for="mobileQtyInput" class="form-label">Qty</label>
                    <input type="text" class="form-control" id="mobileQtyInput"/>
                </div>
                <div class="mb-3 ">
                <label for="mobileUnitPriceInput" class="form-label">Unit Price</label>
                    <input type="text" class="form-control" id="mobileUnitPriceInput"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
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