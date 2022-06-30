import { useState, useEffect } from "react"
import CreateLink from "./CreateLink"
import PanierDetail from "./PanierDetail"
import ClearCartButton from "./ClearCartButton"

function Panier(props){

    let [panierUser, setPanierUser] = useState([])
    let [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cart-user', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(panierRetrieved => {
                setPanierUser(panierRetrieved)
            })  
        fetch('http://localhost:4000/get-products', {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(productListRetrieved => {
                setAllProducts(productListRetrieved)
            })

    }, [])

    console.log('Liste produits du panier: ',panierUser)
    console.log('All products: ',allProducts)

return(
    <div className="Detail-panier">
        <h1>
            Détail du panier de {props.userId}
        </h1>


        <PanierDetail 
            panierUser={panierUser}
            allProducts={allProducts} 
        />

        <CreateLink 
            setCurrentPage={props.setCurrentPage} 
            currentName='product-list' 
            link_ref='#product-list' 
            link_name='Retour catalogue' 
            productId={props.id_produit}
            setCurrentProduct={props.setCurrentProduct}
        />
        <CreateLink 
            setCurrentPage={props.setCurrentPage} 
            currentName='homepage' 
            link_ref='#' 
            link_name='Accueil' 
            productId={props.id_produit}
            setCurrentProduct={props.setCurrentProduct}
        />

        <ClearCartButton 
            setCurrentPage={props.setCurrentPage} 
            currentName = 'product-list'
            link_ref='#product-list'
            props={props} 
        />   

    </div>
)

}

export default Panier