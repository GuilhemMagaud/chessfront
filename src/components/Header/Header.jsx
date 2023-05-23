import userprofil from "../../image/icons8-utilisateur-90.jpg"
import home from "../../image/home.png"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getAuth } from 'firebase/auth';

function Header (){
    const auth = getAuth();

    const UserComponent = () => {
        const [userData, setUserData] = useState(null);
        const user = auth.currentUser;
      
        useEffect(() => {
          const fetchUserData = async () => {
            try {
              const idToken = user.getIdToken();
              const response = await axios.get('/api/user', {
                headers: {
                  Authorization: idToken,
                },
              });
              setUserData(response.data);
            } catch (error) {
              console.error('Erreur lors du chargement des données utilisateur :', error);
            }
          };
      
          fetchUserData();
        }, []);

    return(
        <header style={{backgroundColor: "#232121"}}>
            {userData ? (
                <div style={{display: "flex"}}>
                <Link to="/"> <img style={{marginLeft: "1em", marginTop: "1em", height: '4em', width: '4em'}} src={home} /></Link>
                <p style={{color: "yellow", marginTop: "1em", marginLeft: "1em", fontSize: "2em"}} >Crédit : {userData.nbcredit}</p>
                <div style={{display: "flex", marginLeft: "69%", paddingTop: "1em"}}>
                    <p style={{fontSize: "1.5em", color: "white"}}>username</p>
                    <Link to="/infocompte"><img style={{marginLeft: "1em", borderRadius: 50, height: '4em', width: '4em'}} src={userprofil} /></Link>
                </div>
            </div>
            ) : (
                <p>Chargement des données utilisateur...</p>
            )}
            
        </header>
    )

}

export default Header;