import CreateLink from "./CreateLink"
import './App.css';
import RandomTrack from "./RandomTrack";
//import { useState, useEffect } from 'react';

function Homepage(props){

    return(
        <div className="Homepage">
            <img src="/shop-logo.png" alt="shop-logo" width="100" /><br />
            <span className="shop-title">
                Metal e-shop
            </span><br />
            <h3 className="user-welcome">
                Bienvenue {props.user}
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
        </div>
    )

}

/*
            import soundfile from "../neure-resources/test.mp
            <div className="count-number-equivelance-audioPlayer">
                <button id="equivalence-audio-button" onClick={() => audio.play()}>Soundclip!</button>
            </div>
*/

export default Homepage