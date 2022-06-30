import './App.css';
import logo from './logo.svg';
import CreateLink from './CreateLink';
import CreateButton from './CreateButton';
import CreateDetailButton from './CreateDetailButton';
import { useState } from 'react';






function AddToCartClick(productId, setCartUser, cartUser){

    let url = `http://localhost:4000/add-product-to-cart/${productId}`

    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => response.json())
    
}


function ProductPreview(props) {

    let divClassName = `product id-produit-${props.id_produit}`
    let image = `album-covers/${props.id_produit}.jpg`

    let ref_bouton = `add-product-to-cart/${props.id_produit}`
    let ref_lien = `#product-detail/${props.id_produit}`
    let prixProduit = parseFloat(props.prix).toFixed(2)
    props.setCurrentPage('product-list')

    console.log('pros à la créa du detail: ', props)

    return (
        <div className="col-2">
            <div className={divClassName}>
                <acronym title={props.artiste + " - " + props.album}> 
                    <div className="product-image">
                        <img src={image} alt="Album cover" height="200" width="200"/>
                    </div>
                </acronym>
                <div className="product-price">
                    <p>{prixProduit} €</p>
                </div>
                <div className="product-detail-link">
                    <CreateDetailButton 
                        setCurrentPage={props.setCurrentPage} 
                        currentName='product-detail' 
                        link_ref={ref_lien} 
                        link_name='Album detail' 
                        productId={props.id_produit}
                        artiste={props.artiste}
                        album={props.album}
                        genre={props.genre}
                        prix={prixProduit}
                        setCurrentProduct={props.setCurrentProduct}
                        setCurrentArtist={props.setCurrentArtist} 
                        setCurrentAlbum={props.setCurrentAlbum} 
                        setCurrentGenre={props.setCurrentGenre} 
                        setCurrentPrix={props.setCurrentPrix}
                        actionOnClickButton={AddToCartClick} 
                        link_ref_button={ref_bouton}
                        setCartUser={props.setCartUser}
                        cartUser={props.cartUser}
                    />
                    <CreateButton 
                        actionOnClickButton={AddToCartClick} 
                        buttonName='Ajouter au panier' 
                        link_ref={ref_bouton} 
                        link_name='Acheter' 
                        productId={props.id_produit}
                        setCartUser={props.setCartUser}
                        cartUser={props.cartUser}
                        />
                </div>
            </div>
        </div>
    );
}

export default ProductPreview;