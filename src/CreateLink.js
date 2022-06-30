function checkProductId(productId){
    console.log('PRODUCT ID MOVED: ' , productId)
    if(productId != 0 || productId == null){
        return productId
    }else{
        return 0
    }
}

function CreateLink(props){

    return(
        <div>
        {props.isPictureLink==true &&
            <a href={props.link_ref} onClick={() => {props.setCurrentPage(props.currentName); props.setCurrentProduct(props.productId)}} >
                <img src={props.pictureName} alt="shop-logo" height="150" /><br />
                {props.link_name}
            </a>
        }
        {props.isPictureLink!=true &&
            <a href={props.link_ref} onClick={() => {props.setCurrentPage(props.currentName); props.setCurrentProduct(props.productId)}} >
                {props.link_name}
            </a>
        }
        </div>
    )
}

export default CreateLink