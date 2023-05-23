import React from "react";
import plateau from "../image/plateau.png"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Accueil (){

    return (
        <div style={{textAlign: "center"}}>
            <img style={{ height: '30em', width: '30em'}} src={plateau} />
            <div>
                <Link><Button style={{marginTop: "1em", fontSize: "3em", height: '1.5em', width: '5em', backgroundColor:'#1CB045', color: "black"}}>Jouer</Button></Link>
            </div>
        </div>
    )
}

export default Accueil;