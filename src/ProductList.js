import CreateLink from "./CreateLink"
import CreateProductLink from "./CreateProductLink";
import { useState, useEffect } from 'react';
import ProductPreview from "./ProductPreview";
import Panier from "./Panier";


function ProductList(props){

    let[listeProduits, setListeProduits] = useState([])
    let[cartUser, setCartUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/get-products', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(productListRetrieved => {
                setListeProduits(productListRetrieved)
            })
    }, [])

    let composantProduits = listeProduits.map(elementDeLaListe => 
        <ProductPreview 
            {...elementDeLaListe} 
            setCurrentPage={props.setCurrentPage} 
            setCurrentProduct={props.setCurrentProduct} 
            setCurrentArtist={props.setCurrentArtist} 
            setCurrentAlbum={props.setCurrentAlbum} 
            setCurrentGenre={props.setCurrentGenre} 
            setCurrentPrix={props.setCurrentPrix} 
            setCartUser={setCartUser} 
            cartUser={cartUser} 
            productId={props.id_produit} 
        />) 



    return(
        <div className="container">
            <div className="row">
                <div className="product-list-head">
                    <CreateLink 
                        setCurrentPage={props.setCurrentPage} 
                        currentName='detail-panier' 
                        link_ref='#detail-panier' 
                        link_name='Détail panier' 
                        productId={props.id_produit}
                        setCurrentProduct={props.setCurrentProduct}
                    />
                </div>
            </div>
            <div className="row">
                <div className="product-list">
                    <div className="row">
                        <h1>
                            Liste des produits
                        </h1>
                    </div>
                    <div className="row">
                        <h3>
                            C'est moche mais ça fonctionne à peu près (mais pas sur tout) !
                        </h3>
                    </div>
                    <div className="row">
                        {composantProduits}
                    </div>
                    <div className="row">
                        <CreateProductLink 
                            setCurrentPage={props.setCurrentPage} 
                            currentName='homepage' 
                            link_ref='#' 
                            link_name='Accueil' 
                            productId={props.id_produit}
                            setCurrentProduct={props.setCurrentProduct}
                            setCurrentArtist={props.setCurrentArtist}
                            setCurrentAlbum={props.setCurrentAlbum}
                            setCurrentGenre={props.setCurrentGenre}
                            setCurrentPrix={props.setCurrentPrix}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductList