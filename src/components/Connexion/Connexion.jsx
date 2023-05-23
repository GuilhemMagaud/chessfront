import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseconfig';
import { useNavigate } from "react-router-dom";

function Connexion (){
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
        await auth.signInWithEmailAndPassword(formData.email, formData.password);
        console.log('Successfully logged in!');
        navigate('/');
    } catch (error) {
        console.log(error);
    }
    console.log(formData);
  };

  return (
    <div className="inscriptionDiv" style={{backgroundColor: '#A4A4A4', width: '30%', marginLeft: "35em", borderRadius: "2em"}}>
        <p style={{textAlign: 'center', marginTop: '1em', marginLeft: '0.2em', fontSize: '3vw'}}>Connectez vous à votre compte</p>
        <form onSubmit={handleSubmit} style={{padding: '1em'}}>
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
        <Link style={{marginTop: "2em", marginLeft: "2.5em"}} to="/inscription">s'inscrire</Link>
        <br />
        <Button style={{backgroundColor: 'green', color: 'white', marginTop:"1em", marginLeft:"1.5em", fontSize:"2.5vw"}} type="submit">Se connecter</Button>
        </form>
    </div>
  );
};

export default Connexion;