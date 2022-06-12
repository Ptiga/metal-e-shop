import Panier from "./Panier"

function ClearCartRequest(props){

    let url = `http://localhost:4000/clear-cart-user/`

    
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
    //window.location.reload(false)

    //Panier.Panier(props)
    
}



function ClearCartButton(props){
    /*
        console.log('Create button props: ',props)
        console.log('bouton (link ref): ',props.link_ref)
        console.log('Id produit ', props.productId)
    */
        return(
            <div>
                <button onClick={ClearCartRequest(props)} >
                    Vider panier
                </button>
            </div>
        )
    }

export default ClearCartButton