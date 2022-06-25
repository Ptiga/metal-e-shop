import './App.css';
import logo from './logo.svg';
import CreateLink from './CreateLink';
import CreateButton from './CreateButton';
import CreateDetailButton from './CreateDetailButton';
import { useState } from 'react';






function AddToCartClick(productId, setCartUser, cartUser){


    
    //let [productAdded, setProductAdded] = useState()

    //productId = String(productId)

    
    


    let url = `http://localhost:4000/add-product-to-cart/${productId}`

    
    //fetch('http://localhost:4000/add-product-to-cart/:productId', {
    //fetch(`http://localhost:4000/add-product-to-cart/:${productId}`, {
        //fetch("http://localhost:4000/add-product-to-cart/6", {
    fetch(url, {
        method: 'GET',
        credentials: 'include'
        //credentials: "same-origin"
    })
    .then(response => response.json())
    /*
    .then(cartResponse => {
        console.log('cart resp: ', cartResponse)
        setCartUser(cartResponse)
    })
    .then(console.log('panier utilisateur: ',cartUser))

    /*
    .then(productAddedToCart => {
        setProductAdded(productAddedToCart)
    })
    
    console.log('Produit ajouté: ', productAdded)
*/
    
}


function ProductPreview(props) {

    let divClassName = `product id-produit-${props.id_produit}`
    //let image = `album-covers/${props.id_produit}.jpg`
    //let image = `album-covers-off/${props.id_produit}.jpg`
    let image = `album-covers/${props.id_produit}.jpg`
/*
    if (fs.existsSync(image)) {
        console.log('existe')
    }else{
        console.log('nexiste pas')
    }
*/
    
    let ref_bouton = `add-product-to-cart/${props.id_produit}`
    let ref_lien = `#product-detail/${props.id_produit}`
    //let ref_lien = '#product-detail'
    props.setCurrentPage('product-list')

    

    console.log('pros à la créa du detail: ', props)

    return (
        <div className="col-2">
            <div className={divClassName}>
                <div className="product-image">
                    <img src={image} alt="Album cover" height="200" width="200"/>
                </div>
                <div className="product-description">
                    <div className="artist-name">
                        <h2><b>{props.artiste}</b></h2>
                    </div>
                    <div className="album-name">
                        <p><i>{props.album}</i></p>
                    </div>
                    <span><b>Genre</b> : {props.genre}</span>
                </div>
                <div className="product-price">
                    <p><b>prix</b> : {props.prix} €</p>
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
                        prix={props.prix}
                        setCurrentProduct={props.setCurrentProduct}
                        setCurrentArtist={props.setCurrentArtist} 
                        setCurrentAlbum={props.setCurrentAlbum} 
                        setCurrentGenre={props.setCurrentGenre} 
                        setCurrentPrix={props.setCurrentPrix} 
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


//{...productData}
//-> Permet de faire la copie d'un objet
/*
NOT WORKING
                    <CreateDetailButton 
                        setCurrentPage={props.setCurrentPage} 
                        currentName='product-detail' 
                        link_ref={ref_lien} 
                        link_name='Album detail' 
                        productId={props.id_produit}
                        artiste={props.artiste}
                        album={props.album}
                        genre={props.genre}
                        prix={props.prix}
                        setCurrentProduct={props.setCurrentProduct}
                    />
*/

/*
<span>ref : </span><span id="ref">{props.id_produit}</span>
{console.log("Référence ID: ",document.getElementById("ref"))}


<CreateLink 
    setCurrentPage={props.setCurrentPage} 
    currentName='product-detail' 
    link_ref={ref_lien} 
    link_name='Album detail' 
    productId={props.id_produit}
    setCurrentProduct={props.setCurrentProduct}
/>


                            setCurrentProduct={props.setCurrentProduct}
                            setCurrentArtist={props.setCurrentArtist}
                            setCurrentAlbum={props.setCurrentAlbum}
                            setCurrentGenre={props.setCurrentGenre}
                            setCurrentPrix={props.setCurrentPrix}

*/

export default ProductPreview;