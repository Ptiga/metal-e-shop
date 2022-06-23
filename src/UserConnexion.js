import CreateLink from "./CreateLink";


function ConnectUser(event){
    console.log('fonction à créer pour connecter user')
    //event.preventDefault()

    let createJson = { 
        login: document.getElementById("user-login").value,
        password: document.getElementById("user-password").value,
  }




    console.log('Json: ', createJson)
    //alert()
    const url = "http://localhost:4000/user-connexion"
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        //body: JSON.stringify({ title: 'React POST Request Example' }),
        body: JSON.stringify(createJson)
    }
    console.log('req opt: ', requestOptions)
    console.log('url: ', url)

    fetch(url, requestOptions)
    .then(response => 
        //response.json())
        //console.log('réponse log: ', response.json()))
        console.log('réponse log: ', response.text()))
    //.then(data => this.setState({ postId: data.id }));
    .then(data => 
        console.log('data: ',data))
    //.catch(e => alert('error: ' + e));   


}





function UserConnexion(props){
    //<form id="create-product" method="post" enctype="application/x-www-form-urlencoded" onSubmit={ActionSurSubmit}>
    //Pourquoi est-ce que la fonction 'ActionSurSubmit' ne fonctionne pas sans les '()' ????

    console.log('pros  connexion: ', props)

      return(
          <div>
              <h1>
                  Connectez-vous
              </h1>
              <form id="user-connexion" encType="application/x-www-form-urlencoded" onSubmit={ConnectUser}>
                  <label htmlFor="user-login">e-mail : </label>
                  <input className="form-control" type="email" name="login" id="user-login" minLength="4" maxLength="64" required />
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