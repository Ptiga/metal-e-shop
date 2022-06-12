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
            <a href={props.link_ref} onClick={() => {props.setCurrentPage(props.currentName); props.setCurrentProduct(props.productId)}} >
                {props.link_name}
            </a>
        </div>
    )
}

export default CreateLink