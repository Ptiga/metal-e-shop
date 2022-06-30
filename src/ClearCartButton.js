import Panier from "./Panier"

function ClearCartRequest(){

    console.log('Fonction se lance quand même...')
    console.log('Fonction se lance quand même...')

    let url = `http://localhost:4000/clear-cart-user/`
    fetch(url, {
        method: 'GET',
        credentials: 'include'
        //credentials: "same-origin"
    })
    .then(response => response.json())
}



function ClearCartButton(props){
        return(
            <div>
                <button className="btn btn-outline-secondary btn-sm" href={props.link_ref} onClick={() => {ClearCartRequest() ; props.setCurrentPage(props.currentName)}} >
                    Vider panier
                </button>
            </div>
        )
    }

export default ClearCartButton