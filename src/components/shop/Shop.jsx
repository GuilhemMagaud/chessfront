import React from "react";
import ItemShop from "./ItemShop";
import Pion from "../../image/pion.png";
import Tour from "../../image/tour.png";
import Cavalier from "../../image/cavalier.png";
import Fou from "../../image/fou.png";
import Reine from "../../image/reine.png";

function Shop (){

    const pieceShop = [
    {
        id: 0,
        name: "pion",
        image: Pion,
        price : 100
    },
    {
        id: 1,
        name: "tour",
        image: Tour,
        price : 350
    },
    {
        id: 2,
        name: "cavalier",
        image: Cavalier,
        price : 200
    },
    {
        id: 3,
        name: "fou",
        image: Fou,
        price : 300
    },
    {
        id: 4,
        name: "reine",
        image: Reine,
        price : 750
    },
]


    return(
        <div style={{display: "flex"}}>
            {pieceShop.map((i) =>
                <div key={i.id}>
                    <ItemShop name={i.name} image={i.image} price={i.price}/>
                </div>           
            )}
        </div>
    )
}

export default Shop;