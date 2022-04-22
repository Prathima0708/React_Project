import './Header.css'

const Header=()=>{
    return(
       <header>
         <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" />
         <div className="inputBox">
           <i className="fa fa-search"> 
           <input type="text" placeholder="Search" />
            </i>
         </div>

        <div className="shoppingCart">
        <i class="fa fa-cart-plus" aria-hidden="true"></i>
        <div className="cart-content">
          <p>2</p>
        </div>
        </div>

        <div className="profile">
          <div className="imgBox">
          <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt="" />
          </div>
         
      <h2 className="userName">React</h2>
        </div>

        <div className="toggleIcon">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

       </header>
    )
}

export default Header