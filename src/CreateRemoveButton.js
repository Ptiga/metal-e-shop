function CreateRemoveButton(props){
    return(
        <div>
            <button className="btn btn-outline-light" href={props.link_ref} onClick={() => props.actionOnClickButton(props.productId)} >
                Retirer
            </button>
        </div>
    )
}

export default CreateRemoveButton