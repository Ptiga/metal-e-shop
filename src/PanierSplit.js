import CreateRemoveButton from "./CreateRemoveButton"

function PanierSplit(props){

    return (
        <div className="row">
            <div className="col-4">
                <span>{props.artiste}</span>
            </div>
            <div className="col-4">
                <span>{props.album}</span>
            </div>
            <div className="col-3">
                <span>{props.prix}</span>
                <span> €</span>
            </div>
            <div className="col-1">
                <CreateRemoveButton 
                        actionOnClickButton={props.retraitProduit} 
                        buttonName='Retirer' 
                        link_ref='#detail-panier'
                        link_name='Retirer' 
                        productId={props.idProduct}
                />
            </div>
        </div>
    )
}

export default PanierSplit