import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Veg from "./Veg"
import NonVeg from "./NonVeg"
import Cart from "./Cart"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import PurchaseHistory from "./PurchaseHistory"

import "./App.css"
import { useSelector } from "react-redux"
import GoogleLoginComponent from "./GoogleLoginComponent"
import { GoogleOAuthProvider } from "@react-oauth/google"
import FacebookLoginComponent from "./FacebookLoginCode"

function App(){
const cart = useSelector((state)=>state.cart);
const totalItems = cart.reduce((sum, item)=>sum+item.quantity,0);

  return (
    <>
    
    <FacebookLoginComponent/>
    <GoogleOAuthProvider clientId="1041251575179-3c5188vi8249g6j7g5fqgb44vne02er0.apps.googleusercontent.com">
    <GoogleLoginComponent />
    </GoogleOAuthProvider>
    
    <BrowserRouter>
    <Link to ="/home">Home</Link>
    <Link to="/veg">Veg</Link>
    <Link to="/nonveg">NonVeg</Link>
    <Link to="/cart">Cart ({totalItems})</Link>
    <Link to="/contactus">ContactUs</Link>
    <Link to="/aboutus">AboutUs</Link>
    <Link to="/purchasehistory">PurchaseHistory</Link>

    

    <Routes>
      <Route path="/home" element={<Home />} />
       <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/cart" element={<Cart />} />
            <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
                <Route path="/purchasehistory" element={<PurchaseHistory />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}export default App