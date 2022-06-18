import CreateLink from "./CreateLink";


function ConnectUser(event){
    console.log('fonction à créer pour connecter user')
    event.preventDefault()
}





function UserConnexion(props){
    //<form id="create-product" method="post" enctype="application/x-www-form-urlencoded" onSubmit={ActionSurSubmit}>
    //Pourquoi est-ce que la fonction 'ActionSurSubmit' ne fonctionne pas sans les '()' ????
      return(
          <div>
              <h1>
                  Ajouter un produit
              </h1>
              <form id="user-connexion" encType="application/x-www-form-urlencoded" onSubmit={ConnectUser}>
                  <label htmlFor="user-login">login : </label>
                  <input className="form-control" name="login" id="user-login" minLength="4" maxLength="16" required />
                  <label htmlFor="user-password">mot de passe : </label>
                  <input className="form-control" type="password" name="user-password" id="user-password" minLength="8" maxLength="16" required />
                  <br />
                  <input type="submit" value="Connexion" />
              </form>
              <CreateLink 
                setCurrentPage={props.setCurrentPage} 
                currentName='homepage' 
                link_ref='#' 
                link_name='Accueil' 
              />
          </div>
      )
    }
    
/*    
    <label htmlFor="album-type">Genre : </label>
    <input className="form-control" name="genre" id="album-type" />
    <label htmlFor="product-price">Prix : </label>
    <input className="form-control" type="number" step="0.01" name="prix" id="product-price" />
*/  
  
  export default UserConnexion;