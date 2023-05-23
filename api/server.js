const express = require('express');
const cors = require('cors');
const app = express();
const firebase = require('firebase');

app.use(cors());
app.use(express.json());

// Initialisation de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtImVr0Z8s3gieIzCh5ZVfOYhHX1adBGo",
    authDomain: "chess-royal-db.firebaseapp.com",
    projectId: "chess-royal-db",
    storageBucket: "chess-royal-db.appspot.com",
    messagingSenderId: "348704750973",
    appId: "1:348704750973:web:edbe3fd87f7a132f166014"
};

firebase.initializeApp(firebaseConfig);

const usersCollection = firebase.firestore().collection('usersinfo');

app.post('/api/register', async (req, res) => {
    try {
    const { username, email, password } = req.body;
    // Inscription de l'utilisateur avec Firebase Authentication
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

    // Récupérer l'ID d'utilisateur généré par Firebase Authentication
    const userId = userCredential.user.uid;

    // Enregistrer les données de l'utilisateur dans Firestore
    await usersCollection.doc(userId).set({
      username: username,
      email: email,
      nbtotalpart: 0,
      nbwin: 0,
      nbloose: 0,
      nbcredit: 0
    });

    console.log('Utilisateur inscrit avec succès et données enregistrées dans Firestore !');
    res.status(200).send('Inscription réussie');
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error.message);
    res.status(500).send('Une erreur est survenue lors de l\'inscription');
  }
  });

app.listen(3001, () => console.log('Server listening on port 3001!'));