import { useState, useEffect } from "react"
import CreateLink from "./CreateLink"
import ProductList from "./ProductList"
import ProductDetailPreview from "./ProductDetailPreview"
/*
function splitJs(listToSplit){
    let x = JSON.parse("[" + listToSplit + "]");
    console.log('split: ', x)
    return x
}
*/

function ProductDetail(props){

    console.log('Détail: ', props)
    console.log('Elément : ', props.currentProduct)
    
    let [productDetail, setProductDetail] = useState()


    useEffect(() => {
    fetch(`http://localhost:4000/product-detail/${props.currentProduct}`, {
        method: 'GET',
        //method: 'POST',
        credentials: 'include'
        //headers: {'Content-Type':'application/json'},
        //body: JSON.stringify(createJson)
        //credentials: "same-origin"
    })
            .then(response => response.text())
            //.then(response => response.json())
            //.then(productDetail => setProductDetail(productDetail))
            .then(productDetail => setProductDetail(productDetail))

    }, [])

/*
    console.log('prod detzil: ',productDetail)
    
    console.log('prod detzil1: ',productDetail.id_produit)
    console.log('prod detzil2: ',productDetail.artiste)
    console.log('prod detzil3: ',productDetail.album)
    console.log('prod detzil4: ',productDetail.genre)
    console.log('prod detzil5: ',productDetail.prix)
    */

    /*
    console.log('Détail produit : ', props.currentProduct)
*/



    console.log('pro_det: ', productDetail)
    console.log('pro_det type: ', typeof(productDetail))

    console.log('props (detail): ', props)
/*
    let sp = splitJs(productDetail)
    console.log('spl: ', sp)
*/
/*
    let rendu = <ProductDetailPreview detail={productDetail} />
    console.log('rendu: ',rendu)
*/
    let image = `album-covers/${props.currentProduct}.jpg`

    return (
        <div>
            <h1>
                Détail produit {props.currentProduct}
            </h1>

            <p>
                Bla bla bli
            </p>

            <img src={image} alt="Album cover" height="500" width="500"/>

            <p>
                {props.currentArtist}
            </p>
            <p>
                {props.currentAlbum}
            </p>
            <p>
                {props.currentGenre}
            </p>
            <p>
                {props.currentPrix} €
            </p>
            <p>
                Bla bla bla
            </p>
            <p>
                {productDetail}
            </p>
            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='product-list' 
                link_ref='#product-list' 
                link_name='Liste des produits' 
            />
            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='homepage' 
                link_ref='#' 
                link_name='Accueil' 
            />
        </div>
    )
    
}






export default ProductDetail
