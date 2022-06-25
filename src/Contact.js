import CreateLink from "./CreateLink"

function Contact(props){

    return(
        <div className="Contact">
            <img src="/contact-band.png" alt="shop-logo" width="750" /><br />
            <h1>Notre équipe de choc est disponible du lundi au samedi de 9h à 18h.</h1>
            <br />
            <div className="row">
                <div className="col-3">
                <img src="/contact-icone.png" alt="shop-logo" width="200" />
                </div>
                <div className="col-9">
                <div className="row contact-info">
                    <p><b>Magasin</b> : {props.contactList.adresse}</p>
                </div>
                <div className="row contact-info">
                    <p><b>Mail</b> : {props.contactList.mail}</p>
                </div>
                <div className="row contact-info">
                    <p><b>Téléphone</b> : {props.contactList.telephone}</p>
                </div>
                </div>
            </div>


            
            
            <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='homepage' 
                link_ref='#' 
                link_name='Retour' 
            />
        </div>
    )
}

export default Contact