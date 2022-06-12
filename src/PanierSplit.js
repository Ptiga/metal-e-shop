function PanierSplit(props){

    return (
        <div>
            <span>ref#{props.idProduct}</span>
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

export default PanierSplit