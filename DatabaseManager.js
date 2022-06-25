const req = require('express/lib/request');
var mysql = require('mysql');


//Connexion à la BDD
function connexionToMysql() {
  var connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P0stGre_SQL',
    database: 'my_shop'
  });
  connexion.connect();
  return connexion
}


//Fonction pour obtenir des éléments
function getAllProducts(fonctionDeTraitementResultatBDD, updateType) {
    let connexionBdd = connexionToMysql()
    let requete = requestToApply(updateType)
    console.log('Requete : ', requete)
    connexionBdd.query(requete, fonctionDeTraitementResultatBDD)
    connexionBdd.end();
  }


//Fonction pour obtenir des éléments
function getProduct(fonctionDeTraitementResultatBDD, updateType, productId) {
  let connexionBdd = connexionToMysql()
  let requete = requestToApply(updateType)
  console.log('Requete : ', requete)
  //connexionBdd.query(requete, fonctionDeTraitementResultatBDD)
  //connexionBdd.end();
  connexionBdd.query(requete, productId, fonctionDeTraitementResultatBDD)
  connexionBdd.end();;
}

/*  
//Fonction pour obtenir des éléments (OLD FONCTION)
function getProduct(fonctionDeTraitementResultatBDD, updateType, productId, panierUser) {
  let connexionBdd = connexionToMysql()
  let requete = requestToApply(updateType)
  console.log('Requete : ', requete)
  //connexionBdd.query(requete, fonctionDeTraitementResultatBDD)
  //connexionBdd.end();
  connexionBdd.query(requete, productId, function (error, results, fields) {
    if (error) {
      console.log(error)
    }// throw error;
    else {
      // console.log("step 2 - query application")
      console.log("Données insérées");
    }
    //connexionBdd.commit() // Permet d'enregistrer les modifications sur la BDD
    console.log('result rq: ', results)
    panierUser.push(results)
    console.log('insert: ', panierUser)
    connexionBdd.end();
    console.log("step 3 - close query mode")
  });
}
*/


//Fonction pour mettre à jour des éléments
function updateDataBase(requeteBody, updateType) {
  console.log('rqt bd: ', requeteBody)

    let connexionBdd = connexionToMysql()
    //updateType  = adjustUpdateType(requeteBody, updateType)
    let requete = requestToApply(updateType)
    let dataToInsert = dataToApplyForRequest(requeteBody, updateType)
    console.log('rqt to apply: ', requete)
    console.log('data to apply: ', dataToInsert)
    // console.log("step 1 - before query")
    connexionBdd.query(requete, dataToInsert, function (error, results, fields) {
      if (error) {
        console.log(error)
      }// throw error;
      else {
        // console.log("step 2 - query application")
        console.log("Données insérées");
      }
      connexionBdd.commit() // Permet d'enregistrer les modifications sur la BDD
      connexionBdd.end();
      console.log("step 3 - close query mode")
    });  
  }
  
  
  //Fonction pour obtenir des éléments
  function checkLogin(requestBody, updateType, fonctionDeTraitementResultatBDD) {
    let connexionBdd = connexionToMysql()
    let requete = requestToApply(updateType)
    let dataToInsert = dataToApplyForRequest(requestBody, updateType)
    console.log('Requete : ', requete)
    //connexionBdd.query(requete, fonctionDeTraitementResultatBDD)
    //connexionBdd.end();
    connexionBdd.query(requete, dataToInsert, fonctionDeTraitementResultatBDD)
    /* 
    {
      if (error) {
        console.log(error)
      }// throw error;
      else {
        // console.log("step 2 - query application")
        console.log("Données insérées");
      }
      //connexionBdd.commit() // Permet d'enregistrer les modifications sur la BDD
      console.log('result rq: ', results)
      connexionBdd.end();
      console.log("step 3 - close query mode")
    });
    */
  }


//Fonction qui permet d'appliquer la bonne requête en fonction de l'appel
function requestToApply(selection) {
    switch (selection) {
        case 'Retrieve-all-products' :
            return `SELECT * FROM produits`
        case 'Retrieve-one-product' :
            return `SELECT * FROM produits WHERE id_produit = ?`
        case 'Add-product' :
            return `INSERT INTO produits (artiste, album, genre, prix) VALUES (?, ?, ?, ?)`
        case 'Update-product' :
            return `UPDATE produits SET artiste = ?, album = ?, genre = ? , prix = ? WHERE id_produit = ?`
        case 'Remove-product' :
            return `DELETE FROM produits WHERE id_produit = ?`
        default:
            return `Selection not found`
        case 'User-connect' :
            return `SELECT * FROM shop_user WHERE user_email = ?`
    }
  }

//Fonction pour renvoyer les bons ééments qui replaceronts les '?' lors du traitement de la requête
function dataToApplyForRequest(requeteBody, selection){
    switch (selection) {    
        case 'Add-product' :
            return [requeteBody['artiste'], requeteBody['album'],requeteBody['genre'], requeteBody['prix']]
        case 'Update-product' :
            return [requeteBody['artiste'], requeteBody['album'],requeteBody['genre'], requeteBody['prix'], requeteBody['id_produit']]
        case 'Remove-product' :
            return [requeteBody['id_produit']]
        case 'User-connect' :
            return [requeteBody['login']]
        default:
            return ``
    }
  }



module.exports = {
    connexionToMysql: connexionToMysql,
    getAllProducts: getAllProducts,
    getProduct: getProduct,
    updateDataBase: updateDataBase,
    requestToApply: requestToApply,
    dataToApplyForRequest: dataToApplyForRequest,
    checkLogin: checkLogin
  }
  