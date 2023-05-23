import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function InfoCompte(){
    return(
        <div>
            <Header/>
            <div style={{height:"25em"}}>
            <div style={{backgroundColor: '#A4A4A4', width: '30%', marginLeft: "35em", borderRadius: "2em", padding: "1em"}}>
                <h1 style={{marginLeft: "1em"}}>Information Compte</h1>
                <p style={{marginLeft: "1em"}}>Nombre de partie total : 0</p>
                <p style={{marginLeft: "1em"}}>Partie remporté : 0</p>
                <p style={{marginLeft: "1em"}}>Partie perdu : 0</p>
                <p style={{marginLeft: "1em"}}>nombre de crédit total : 0</p>
                <p style={{marginLeft: "1em"}}>ratio victoire défaite : 0</p>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default InfoCompte