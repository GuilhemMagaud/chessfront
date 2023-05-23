import { Button } from "@mui/material";
import React from "react";

function ItemShop(props){
    return (
        <div style={{backgroundColor: "#D9D9D9", width: "23em", height: "30em", marginTop:"2em", marginLeft:"4em"}}>
            <h3 style={{textAlign: "center"}}>{props.name}</h3>
            <img src={props.image} style={{height: "23em"}}/>
            <Button>{props.price}</Button>
        </div>
    )
}

export default ItemShop;