import userprofil from "../../image/icons8-utilisateur-90.jpg"
import home from "../../image/home.png"
import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return(
        <header style={{backgroundColor: "#232121"}}>
            <div style={{display: "flex"}}>
                <Link to="/"> <img style={{marginLeft: "1em", marginTop: "1em", height: '4em', width: '4em'}} src={home} /></Link>
                <p style={{color: "yellow", marginTop: "1em", marginLeft: "1em", fontSize: "2em"}} >Crédit : 600</p>
                <div style={{display: "flex", marginLeft: "69%", paddingTop: "1em"}}>
                    <p style={{fontSize: "1.5em", color: "white"}}>username</p>
                    <Link to="/infocompte"><img style={{marginLeft: "1em", borderRadius: 50, height: '4em', width: '4em'}} src={userprofil} /></Link>
                </div>
            </div>
        </header>
    )

}

export default Header;