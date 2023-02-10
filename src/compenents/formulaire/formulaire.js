import React, {useState} from 'react'
import './public/formulaire.css'


export const Formulaire = () => {
    //declaration de constantes avec fonction pour pouvoir changer les  valeur 
    const [id, setid] = useState("");
    const [email, setEmail] = useState("");
    const [mdp, setMdp] = useState("");
    const [mdp2, setMdp2] = useState("");
    const [erreurs, setErreurs] = useState({});

    //FONCTION QUI VALIDE LES ENTREE DE L'UTILISATEUR ET VERIFIE SI TOUS LES CHAMPS SONT REMPLIS CORRECTEMENT SINON MSG D'ERREUR
    const Validation = () => {
        let form = []
        //Vérification de l'identifiant
        if (!id) {
            form.id = "Il manque votreidentifiant";
        }
        //Vérification de l'email

        if (!email) {
            form.email = "Il manque votre e-mail ";
        } 
        //Vérification du  mot de passe

        if (!mdp) {
            form.mdp = "Il manque un mot de passe";
        } else if (mdp.length < 8) {
            form.mdp = "Le mot de passe doit contenir au moins 8 caractères";
        }
        //Vérification du mot de passe 
        if (!mdp2) {
            form.mdp2 = "La confirmation du mot de passe est requise";
        } else if (mdp !== mdp2) {
            form.mdp2 = "Les mots de passe ne correspondent pas";
        }
        //verifie si la longeur du tableau d'erreur = 0 
        setErreurs(form);
            return Object.keys(form).length === 0;
    };
    //la fonction relié au bouton inscrire si aucune erreur  
    const Ajout = (event) => {
        event.preventDefault();
        if (Validation()) {
        alert("Formulaire soumis avec succès");
        }
    };
    
    return (
        <div className='divForm'>
            <h1>Formulaire d'inscription</h1>
        <form className='formulaire' onSubmit={Ajout}>
            <div className='info'>
            <div className='ligne'>
                <label>Veuillez saisir un identifiant: </label>
                <input
                    type='text'
                    className ='id' 
                    value={id}
                    onChange={(event)=> setid(event.target.value)}>
                </input>
                </div>
                <div className='erreur'>{erreurs.id && <div>{erreurs.id}</div>}</div>
            </div>
            <div className='info'>
            <div className='ligne'>

                <label >Veuillez saisir une adresse mail: </label>
                <input
                    type='email'
                    className ='email' 
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}>
                </input>
                </div>
                <div className='erreur'>{erreurs.email && <div>{erreurs.email}</div>}</div>
            </div>
            <div className='info'>
                <div className='ligne'>
                <label>Veuillez saisir un mot de passe: </label>
                <input
                    type='password'
                    className ='mdp' 
                    value={mdp}
                    onChange={(event)=> setMdp(event.target.value)}>
                </input>
                </div>
                <div className='erreur'>{erreurs.mdp && <div>{erreurs.mdp}</div>}</div>
            </div>
            <div className='info'>
            <div className='ligne'>
                <label>Veuillez confirmer le mot de passe: </label>
                <input
                    type='password'
                    className ='mdp2' 
                    value={mdp2}
                    onChange={(event)=> setMdp2(event.target.value)}>
                </input>
                </div>
                <div className='erreur'>{erreurs.mdp2 && <div>{erreurs.mdp2}</div>}</div>
            </div>
            <button className='button' type='submit'>S'inscrire</button>
        </form>
        </div>
    )
}
