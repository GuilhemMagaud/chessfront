import userprofil from "../../image/icons8-utilisateur-90.jpg"
import React from "react";

function Header (){
    return(
        <header style={{backgroundColor: "#232121"}}>
            <div style={{display: "flex"}}>
                <p style={{color: "yellow", marginTop: "1em", marginLeft: "1em", fontSize: "2em"}} >Crédit : 600</p>
                <div style={{display: "flex", marginLeft: "75%", paddingTop: "1em"}}>
                    <p style={{fontSize: "1.5em", color: "white"}}>username</p>
                    <img style={{marginLeft: "1em", borderRadius: 50, height: '4em', width: '4em'}} src={userprofil} />
                </div>
            </div>
        </header>
    )

}

export default Header;