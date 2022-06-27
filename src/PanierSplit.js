function PanierSplit(props){

    return (
        <div className="row">
            <div className="col-1">
                <span>ref#{props.idProduct}</span>
            </div>
            <div className="col-4">
                <span>{props.artiste}</span>
            </div>
            <div className="col-4">
                <span>{props.album}</span>
            </div>
            <div className="col-2">
                <span>{props.prix}</span>
                <span> €</span>
            </div>
            <div className="col-1">
                <button className="btn btn-outline-danger">Retirer</button>
            </div>
        </div>
    )
}

export default PanierSplit