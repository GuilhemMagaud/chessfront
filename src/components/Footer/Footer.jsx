import shop from "../../image/shop.png";
import React from "react";
import { NavLink } from "react-router-dom";


function Footer (){
    return(
        <footer style={{backgroundColor: "#232121"}}>
            <div>
                <NavLink to="/shop"><img style={{padding: "0.5em", marginLeft: "90%", marginTop: "2em", marginBottom: "1em", borderRadius: 5, height: '4em', width: '5em', backgroundColor: "#FBFF22"}} src={shop} /></NavLink>
            </div>
        </footer>
    )
}

export default Footer;