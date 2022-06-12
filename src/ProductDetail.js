
import { useState } from "react"
import CreateLink from "./CreateLink"

function ProductDetail(props){

    console.log('Détail: ', props)
    console.log('Elément : ', props.currentProduct)
    
    let [productDetail, setProductDetail] = useState('')


    fetch(`http://localhost:4000/product-detail/${props.currentProduct}`, {
        method: 'GET',
        //method: 'POST',
        credentials: 'include'
        //headers: {'Content-Type':'application/json'},
        //body: JSON.stringify(createJson)
        //credentials: "same-origin"
    })
            .then(response => response.text())
            .then(productDetail => setProductDetail(productDetail))

    console.log('prod detzil: ',productDetail)
    console.log('Détail produit : ', props.currentProduct)


    return (
        <div>
            <h1>
                Détail produit {props.currentProduct}
            </h1>

            <p>
                Bla bla bli
            </p>
            <p>
                Retour requête backend : {productDetail}
            </p>
            <p>
                Bla bla bla
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
