function CreateButton(props){
    return(
        <div>
            <button className="btn btn-outline-light" href={props.link_ref} onClick={() => props.actionOnClickButton(props.productId, props.setCartUser, props.cartUser)} >
                Ajouter au panier
            </button>
        </div>
    )
}

export default CreateButton