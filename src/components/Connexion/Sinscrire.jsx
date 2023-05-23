import { Button } from "@mui/material";
import React, { useState }  from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';

function Sinscrire (){

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/register', formData);
            console.log('Utilisateur inscrit avec succès !');
            // Effectuer des actions supplémentaires après l'inscription réussie
          } catch (error) {
            console.error('Erreur lors de l\'inscription :', error.message);
          }
        console.log(formData);
      };

    return (
        <div className="inscriptionDiv" style={{backgroundColor: '#A4A4A4', width: '30%', marginLeft: "35em", borderRadius: "2em"}}>
            <p style={{textAlign: 'center', marginTop: '1em', marginLeft: '0.2em', fontSize: '3vw'}}>Inscrivez-vous dès maintenant</p>
            <form onSubmit={handleSubmit} style={{padding: '1em'}}>
                <label>
                    username:
                    <input
                    type="text"
                    name="username"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </label>
                <br />
                <label>
                    Mot de passe:
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </label>
                <br />
                <Link style={{marginTop: "2em", marginLeft: "2.5em"}} to="/connexion">se connecter</Link>
                <br />
                <Button style={{backgroundColor: 'green', color: 'white', marginTop:"1em", marginLeft:"2.5em", fontSize:"2.5vw"}} type="submit">S'inscrire</Button>
                </form>
        </div>
    )
}

export default Sinscrire;