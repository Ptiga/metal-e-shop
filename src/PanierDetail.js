import PanierSplit from "./PanierSplit"
import CreateRemoveButton from "./CreateRemoveButton"

function RetirerProduit(productId){

    console.log('type envoyé: ', typeof(productId))

    let url = `http://localhost:4000/remove-from-cart/${productId}`

    fetch(url, {
        method: 'GET',
        credentials: 'include'
        //credentials: "same-origin"
    })

}


function CompileDetail(panier, produits){
    let detailCompiled = []
    console.log('panier dans split: ', panier)
    console.log(typeof(panier))
    console.log('taille panier dans split: ', panier.length)
    console.log('produits dans split: ', produits[5])
    console.log(typeof(produits))
    console.log('taille produits dans split: ', produits.length)
    if(panier.length>0){
        for(let i = 0; i<panier.length; i++){
            for(let x = 0; x<produits.length; x++){
                //console.log(panier[i], ' <--> ', produits[x].id_produit)
                //console.log(panier[i] == produits[x].id_produit)
                if(panier[i] == produits[x].id_produit){
                    detailCompiled.push({
                        idProduct: panier[i],
                        artiste: produits[x].artiste,
                        album: produits[x].album,
                        prix: produits[x].prix
                    })
                }
            }
        }
    }
    console.log('détail compilé: ', detailCompiled)
    return detailCompiled
}


function calculTotal(panier){
    let total = 0
    for(let i = 0; i<panier.length; i++){
        total += panier[i].prix
    }
    return parseFloat(total).toFixed(2)
}
/*
function SplitPanier(props){
    console.log('props du split: ', props)
    return (
        <div>
            <span>{props.idProduct}</span>
            <span> - </span>
            <span>{props.artiste}</span>
            <span> - </span>
            <span>{props.album}</span>
            <span> || </span>
            <span>{props.prix}</span>
            <span> €</span>
        </div>
    )
}
*/

function PanierDetail(props){

    console.log('panier user : ',props.panierUser)

    let ElementsPanier = props.panierUser
    console.log("Elements panier: ", ElementsPanier)
    let ElementsProduits = props.allProducts
    console.log("Elements produits: ", ElementsProduits)
/*
    let CompoDuPanier = panier.map(elementDuPanier =>
        <SplitPanier {...elementDuPanier}  />) //Permet de copier l'objet
*/
    //let x
    let compiledPanier = CompileDetail(props.panierUser, props.allProducts)
    let taillePanier = compiledPanier.length
    let totalPanier 
    let compoDuPanier
    console.log('Penier compilé: ',compiledPanier)
    console.log('taille panier C: ',taillePanier)
    console.log('total: ',totalPanier)
/*
    if(taillePanier>1){
        compoDuPanier = compiledPanier.map(elementDuPanier =>
            <SplitPanier {...elementDuPanier} />) //Permet de copier l'objet
    }
*/    
    if(taillePanier>0){
        totalPanier = calculTotal(compiledPanier)
    }
    console.log('Compo du panier: ', compoDuPanier)

    return(
        <div>
            {taillePanier == 0 &&
                <h2>Votre panier est vide</h2>
            }
            {taillePanier == 1 &&
                <div className="row">
                    <div className="col-4">
                        <span>{compiledPanier[0].artiste}</span>
                    </div>
                    <div className="col-4">
                        <span>{compiledPanier[0].album}</span>
                    </div>
                    <div className="col-3">
                        <span>{compiledPanier[0].prix}</span>
                        <span> €</span>
                    </div>
                    <div className="col-1">

                    <CreateRemoveButton 
                        actionOnClickButton={RetirerProduit} 
                        buttonName='Retirer' 
                        link_ref='#detail-panier'
                        link_name='Retirer' 
                        productId={compiledPanier[0].idProduct}
                        setCartUser={props.setCartUser}
                        cartUser={props.cartUser}
                    />


                    </div>
                </div>
            }
            {taillePanier > 1 &&
                <div>
                    {compoDuPanier = compiledPanier.map(elementDuPanier =>
                        <PanierSplit {...elementDuPanier} retraitProduit={RetirerProduit} />)
                    }
                </div>
                
            }

            <br />s
            {taillePanier > 0 &&
                <div>
                    <span>Total du panier : </span>
                    <span>{totalPanier}</span>
                    <span> € </span>
                </div>
            }               
        </div>
    )

}

export default PanierDetail

/*
<button className="btn btn-outline-danger" onClick={RetirerProduit(compiledPanier[0].idProduct)}>
    Retirer
</button>
*/