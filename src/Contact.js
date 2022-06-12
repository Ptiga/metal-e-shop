import CreateLink from "./CreateLink"

function Contact(props){

    return(
        <div className="Contact">
            <h1>
                <u>Informations utiles</u> 
            </h1>
            <img src="/Conan-Contact.png" alt="shop-logo" width="100" /><br />
            <p>Adresse : {props.contactList.adresse}</p>
            <p>Mail : {props.contactList.mail}</p>
            <p>Téléphone : {props.contactList.telephone}</p>
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