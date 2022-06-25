function CreateDetailButton(props){

    console.log('Create button props: ',props)
    console.log('bouton (link ref): ',props.link_ref)
    console.log('Id produit ', props.productId)

    return(
        <div>
            <button className="btn btn-outline-light" href={props.link_ref} 
                onClick={() => {
                    props.setCurrentPage(props.currentName); 
                    props.setCurrentProduct(props.productId);
                    props.setCurrentArtist(props.artiste);
                    props.setCurrentAlbum(props.album);
                    props.setCurrentGenre(props.genre);
                    props.setCurrentPrix(props.prix)
                    }} >
                {props.link_name}
            </button>
        </div>
    )
}

/*
<button href={props.link_ref} onClick={() => props.actionOnClickButton} >
<button className="btn btn-outline-light" href={props.link_ref} onClick={() => props.actionOnClickButton(props.productId, props.setCartUser, props.cartUser)} >
*/



export default CreateDetailButton


/*
NOT WORKING
        <div>
            <button className="btn btn-outline-light" href={props.link_ref} 
                onClick={() => {
                    props.setCurrentPage(props.currentName); 
                    props.setCurrentProduct(props.productId);
                    props.setCurrentArtist(props.artiste);
                    props.setCurrentAlbum(props.album);
                    props.setCurrentGenre(props.genre);
                    props.setCurrentPrix(props.prix)
                    }} >
                {props.link_name}
            </button>
        </div>

*/