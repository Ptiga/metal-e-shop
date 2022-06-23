//import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage'
import Contact from './Contact';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Panier from './Panier';
import AddProduct from './AddProduct';
import UserConnexion from './UserConnexion';
import { useState, useEffect } from 'react';
//import CreateLink from './CreateLink';

function App(props) {

  let [currentPage, setCurrentPage] = useState('homepage')
  let [currentProduct, setCurrentProduct] = useState(0)
  let[userId, setuserId] = useState()

  let contactList={
    adresse: '666 Highway to Hell (MORDOR)',
    mail: 'auro@mon-shop.fr',
    telephone: '06-22-05-19-80'
  }


  useEffect(() => {
      fetch('http://localhost:4000/', {
          method: 'GET',
          credentials: 'include'
          //credentials: "same-origin"
      })
            .then(response => response.json())
            .then(userIdRetrieved => {
              console.log('u retr ', userIdRetrieved)
              setuserId({
                login: userIdRetrieved.userLogin, 
                isLogged: userIdRetrieved.isUserLogged, 
                role: userIdRetrieved.userRole
              })
              //setuserId(userIdRetrieved.userLogin)
              console.log('user id: ', userId)
            })
      fetch('http://localhost:4000/', {
        method: 'GET',
        credentials: 'include'
        //credentials: "same-origin"
    })
          .then(response => response.json())
          .then(userIdRetrieved => {
            console.log('u retr ', userIdRetrieved)
            setuserId({
              login: userIdRetrieved.userLogin, 
              isLogged: userIdRetrieved.isUserLogged, 
              role: userIdRetrieved.userRole
            })
            //setuserId(userIdRetrieved.userLogin)
            console.log('user id: ', userId)
          })
    }, [])



    

  return (
    <div className="App">
      <header className="App-header">
        {currentPage==='homepage' &&
          <Homepage 
            setCurrentPage={setCurrentPage} 
            setCurrentProduct={setCurrentProduct} 
            user={userId} 
            productId={currentProduct} />
        }
        {currentPage==='contact' &&
          <Contact setCurrentPage={setCurrentPage} contactList={contactList} />
        }
        {currentPage==='product-list' &&
          <div>
            <ProductList setCurrentPage={setCurrentPage} setCurrentProduct={setCurrentProduct} />
          </div> 
        }
        {currentPage==='add-product' &&
          <AddProduct setCurrentPage={setCurrentPage} />
        }
        {currentPage==='product-detail' &&
          <div>
            {console.log('Je passe par ici voici le props : ', props)}
            {console.log('Le current produit : ', currentProduct)}
            <ProductDetail setCurrentPage={setCurrentPage} currentProduct={currentProduct} />
          </div> 
        }
        {currentPage==='detail-panier' &&
          <Panier setCurrentPage={setCurrentPage} userId={userId} />
        }
        {currentPage==='user-connexion' &&
          <UserConnexion setCurrentPage={setCurrentPage} />
        }
      </header>
    </div>
  );
}

export default App;


/*
*/