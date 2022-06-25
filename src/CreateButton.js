/*
import {useState}from 'react'

function TestClick(IdProduit){
    console.log("Ca marche !")
    console.log(IdProduit)

    let [productAdded, setProductAdded] = useState('')

    console.log('Click sur bouton')
    //fetch('http://localhost:4000/add-product-to-cart/:productId', {
        fetch(`http://localhost:4000/add-product-to-cart/${IdProduit}`, {
        method: 'GET',
        credentials: 'include'
        //credentials: "same-origin"
    })
    .then(response => response.text())
    .then(productAdded => {
        setProductAdded(productAdded)
    })
    
    console.log('Produit ajouté: ', productAdded)

}
*/

function CreateButton(props){
/*
    console.log('Create button props: ',props)
    console.log('bouton (link ref): ',props.link_ref)
    console.log('Id produit ', props.productId)
*/
    return(
        <div>
            <button className="btn btn-outline-light" href={props.link_ref} onClick={() => props.actionOnClickButton(props.productId, props.setCartUser, props.cartUser)} >
                Ajouter au panier
            </button>
        </div>
    )
}

/*
<button href={props.link_ref} onClick={() => props.actionOnClickButton} >
*/



export default CreateButton