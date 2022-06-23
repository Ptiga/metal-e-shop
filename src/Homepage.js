import CreateLink from "./CreateLink"
import './App.css';
import RandomTrack from "./RandomTrack";
import UserConnexion from "./UserConnexion";
//import { useState, useEffect } from 'react';

function Homepage(props){

    console.log('props user : ', props.user)
    console.log('props role : ', props.role)

    return(
        <div className="Homepage">
            <img src="/shop-logo.png" alt="shop-logo" width="100" /><br />
            <span className="shop-title">
                Metal e-shop
            </span><br />
            <h3 className="user-welcome">
                Bienvenue 
            </h3><br />

            <img src="/caisse-disques.png" alt="shop-logo" width="150" /><br />
            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='product-list' 
                link_ref='#product-list' 
                link_name='Liste des produits' 
                productId={props.id_produit}
                setCurrentProduct={props.setCurrentProduct}
            />
            <br />
            <RandomTrack />


            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='contact' 
                link_ref='#contact' 
                link_name='Contacts'
                productId={props.id_produit} 
                setCurrentProduct={props.setCurrentProduct}
            />
            <CreateLink 
              setCurrentPage={props.setCurrentPage} 
              currentName='add-product' 
              link_ref='#add-product' 
              link_name='Ajouter un produit' 
              productId={props.id_produit}
              setCurrentProduct={props.setCurrentProduct}
            />
            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='user-connexion' 
                link_ref='#login' 
                link_name='Connexion'
                productId={props.id_produit} 
                setCurrentProduct={props.setCurrentProduct}
                user={props.user}
            />
        </div>
    )

}

/*
            import soundfile from "../neure-resources/test.mp
            <div className="count-number-equivelance-audioPlayer">
                <button id="equivalence-audio-button" onClick={() => audio.play()}>Soundclip!</button>
            </div>


                        <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='user-connexion' 
                link_ref='#login' 
                link_name='Connexion'
                productId={props.id_produit} 
                setCurrentProduct={props.setCurrentProduct}
            />
*/

export default Homepage