import CreateLink from "./CreateLink";


function ConnectUser(event){
    console.log('fonction à créer pour connecter user')
    let createJson = { 
        login: document.getElementById("user-login").value,
        password: document.getElementById("user-password").value,
  }

    console.log('Json: ', createJson)

    const url = "http://localhost:4000/user-connexion"
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(createJson)
    }
    console.log('req opt: ', requestOptions)
    console.log('url: ', url)

    fetch(url, requestOptions)
    .then(response => response.text())
    .then(data => 
        alert(data))

}





function UserConnexion(props){
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
                link_ref='http://localhost:3000/#' 
                link_name='Accueil' 
             />
          </div>
      )
    }

  export default UserConnexion;