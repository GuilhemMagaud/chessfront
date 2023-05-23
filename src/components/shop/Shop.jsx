import React from "react";
import ItemShop from "./ItemShop";
import Pion from "../../image/pion.png";
import Tour from "../../image/tour.png";
import Cavalier from "../../image/cavalier.png";
import Fou from "../../image/fou.png";
import Reine from "../../image/reine.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Shop (){

    const pieceShop = [
    {
        id: 0,
        name: "vert-blanc",
        image: Pion,
        actif: true,
        c1: "green",
        c2: "white"
    },
    {
        id: 1,
        name: "bleu-blanc",
        image: Tour,
        actif: false,
        c1: "blue",
        c2: "white"
    },
    {
        id: 2,
        name: "noire-blanc",
        image: Cavalier,
        actif: false,
        c1: "black",
        c2: "white"
    },
]


    return(
        <div>
        <Header/>
        <div style={{display: "flex"}}>
            {pieceShop.map((i) =>
                <div key={i.id}>
                    <ItemShop name={i.name} image={i.image} actif={i.actif} c1={i.c1} c2={i.c2}/>
                </div>           
            )}
        </div>
        <Footer/>
        </div>
    )
}

export default Shop;