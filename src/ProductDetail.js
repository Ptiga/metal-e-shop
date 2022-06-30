import { useState, useEffect } from "react"
import CreateLink from "./CreateLink"
import ProductList from "./ProductList"
import ProductDetailPreview from "./ProductDetailPreview"


function ProductDetail(props){

    console.log('Détail: ', props)
    console.log('Elément : ', props.currentProduct)
    
    let [productDetail, setProductDetail] = useState()


    useEffect(() => {
    fetch(`http://localhost:4000/product-detail/${props.currentProduct}`, {
        method: 'GET',
        credentials: 'include'
    })
            .then(response => response.text())
            .then(productDetail => setProductDetail(productDetail))

    }, [])


    console.log('pro_det: ', productDetail)
    console.log('pro_det type: ', typeof(productDetail))

    console.log('props (detail): ', props)

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
