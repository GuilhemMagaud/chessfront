import { Button } from "@mui/material";
import React from "react";

function ItemShop(props){
    console.log(props.actif);
    if(props.actif == true){
        return (
            <div style={{backgroundColor: "#D9D9D9", width: "23em", height: "25em", marginTop:"2em", marginLeft:"4em"}}>
                <h3 style={{ textAlign: "center"}}>{props.name}</h3>
                <div style={{marginLeft: "5em"}}>
                    <div style={{display: "flex"}}><div style={{backgroundColor: props.c1, height: "6.5em", width: "6.5em"}}></div><div style={{backgroundColor: props.c2, height: "6.5em", width: "6.5em"}}></div></div>
                    <div style={{display: "flex"}}><div style={{backgroundColor: props.c2, height: "6.5em", width: "6.5em"}}></div><div style={{backgroundColor: props.c1, height: "6.5em", width: "6.5em"}}></div></div>
                </div>
                <Button style={{marginTop:"2em", marginLeft: "7em", backgroundColor: "green", color: "white"}}>est sélectionné</Button>
            </div>
        )
    }
    else{
        return (
            <div style={{backgroundColor: "#D9D9D9", width: "23em", height: "25em", marginTop:"2em", marginLeft:"4em"}}>
                <h3 style={{textAlign: "center"}}>{props.name}</h3>
                <div style={{marginLeft: "5em"}}>
                    <div style={{display: "flex"}}><div style={{backgroundColor: props.c1, height: "6.5em", width: "6.5em"}}></div><div style={{backgroundColor: props.c2, height: "6.5em", width: "6.5em"}}></div></div>
                    <div style={{display: "flex"}}><div style={{backgroundColor: props.c2, height: "6.5em", width: "6.5em"}}></div><div style={{backgroundColor: props.c1, height: "6.5em", width: "6.5em"}}></div></div>
                </div>
                <Button style={{marginTop:"2em", marginLeft: "7em", backgroundColor: "gray", color: "#D9D9D9"}}>pas possédé</Button>
            </div>
        )
    }
}

export default ItemShop;