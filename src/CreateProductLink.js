function checkProductId(productId){
    console.log('PRODUCT ID MOVED: ' , productId)
    if(productId != 0 || productId == null){
        return productId
    }else{
        return 0
    }
}

function CreateProductLink(props){

    return(
        <div>
        {props.isPictureLink==true &&
            <a href={props.link_ref} onClick={() => {
                    props.setCurrentPage(props.currentName); 
                    props.setCurrentProduct(props.productId);
                    props.setCurrentArtist(props.artiste);
                    props.setCurrentAlbum(props.album);
                    props.setCurrentGenre(props.genre);
                    props.setCurrentPrix(props.prix)
                }} >
                <img src={props.pictureName} alt="shop-logo" height="150" /><br />
                {props.link_name}
            </a>
        }
        {props.isPictureLink!=true &&
            <a href={props.link_ref} onClick={() => {
                    props.setCurrentPage(props.currentName); 
                    props.setCurrentProduct(props.productId);
                    props.setCurrentArtist(props.artiste);
                    props.setCurrentAlbum(props.album);
                    props.setCurrentGenre(props.genre);
                    props.setCurrentPrix(props.prix)
                }} >
                {props.link_name}
            </a>
        }
        </div>
    )
}

export default CreateProductLink
