const express = require("express");
const router = express.Router();
const app = express();
const { Cookie } = require('express-session')
// const tache_utils = require("./src/xxxx");
// const _ = require("lodash");
const port = 4000;
const DBManager = require('./DatabaseManager')
var cors = require('cors')
var session = require('express-session')
const { uid } = require('uid');
//app.use(express.static("css"));
app.use(express.static("src"));
app.use(express.json({
    type: ['application/json', 'text/plain']
}))
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true,
}))
//app.use(express.cookieParser());
const cookieParser = require('cookie-parser');
const DatabaseManager = require("./DatabaseManager");
app.use(cookieParser());
/*
let products = []
*/
//let products = productList()
//let monpremiercookie

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


app.use(
    session(
        { 
            secret: 'keyboard cat', 
            cookie: { maxAge: 600000 }
        }
    )
)

//var listeUsers = {}


app.get("/", (request, response, next) => {


    
    //let userId
    //console.log('request: ',request.cookies.userId)


/*
    if(typeof request.cookies.userId === 'undefined'){
        userId = Math.floor(Math.random()*1000000)
        response.cookie('userId', userId, {maxAge: 1000000, httpOnly: true})
        listeUsers[userId] = {
            'panier': []
        }
        console.log('User : ', userId)
    }else{
        userId = request.cookies.userId
    }
*/
    if(! request.session.userId){
        request.session.userId = uid(32)
        request.session.panierUser = []
        request.session.isUserLogged = false 
    }

    

    //console.log('Liste users : ',listeUsers)
    //console.log('User concerné: ', listeUsers[userId])
    //console.log('u ID: ',userId)
    //response.json(listeUsers[userId])
    //response.send("Connecté")
    console.log('cookie de session: ', request.session)
    console.log('cookie de session (id): ', request.cookies)
    console.log('cookie de session (id): ', request.cookies['connect.sid'])
    response.send(request.cookies['connect.sid'])
/*    
    response.send(`
        <h1>Bienvenue ${userId}</h1>
        <a href="ajouter-produit/1" >Ajout produit 1</a><br />
        <a href="ajouter-produit/2" >Ajout produit 2</a><br />
        <a href="ajouter-produit/3" >Ajout produit 3</a><br />
    `)
*/    
    //response.send('Utilisateur connecté')
})
/*
function retourProduits(results){
    return results[0]['id_produit']
}
*/

//Obtenir la liste des produits
app.get("/get-products", (request, response, next) => {
    DBManager.getAllProducts(function (error, results, fields){
        console.log('resultat rqt: ', results)
        response.json(results)
    }, 'Retrieve-all-products')
})



app.get("/add-product-to-cart/:productId", (request, response, next) => {
 

    //let userId = request.cookies.userId
    let productId = request.params.productId
    console.log(typeof(productId))
    //let productToAdd = []
    //listeUsers[userId].panier.push(productId)
    console.log('session user: ', request.session)
    request.session.panierUser.push(productId)
/*
    let requete = `SELECT * FROM produits WHERE id_produit = ?`
    let connexionBdd = DBManager.connexionToMysql()
    connexionBdd.query(requete, productId, function (error, results, fields) {
        if (error) {
          console.log(error)
        }// throw error;
        else {
          // console.log("step 2 - query application")
          console.log("Données insérées");
        }
        //listeUsers[userId].panier.push(results)
        request.session.panierUser.push(results)
        console.log('ajout au cookie: ', request.session.panierUser)
        connexionBdd.commit() // Permet d'enregistrer les modifications sur la BDD
        connexionBdd.end();
    })
*/
/*
    DBManager.getProduct(function (error, results, fields){


        //request.session.panierUser.push(results)
        
        //response.json(results)
        //productToAdd = results
        console.log('resultat rqt: ', results)
        //console.log('produit ajouté: ', productToAdd)
    }, 'Retrieve-one-product', productId, request.session.panierUser)
*/
    //console.log('Panier user : ', listeUsers[userId].panier)
    //response.send('product id: ',productId)
    //productToAdd = results
    //console.log(productToAdd)
    //console.log('Cookie user: ', listeUsers)
    console.log('cookie de session: ', request.session)
   //response.send("Ok")
   //response.json(listeUsers[userId].panier)
   //response.status()
   //response.json(listeUsers[userId])
   response.json(request.session.panierUser)
   //response.send("Ajouté")
})

app.get("/product-detail/:productId", (request, response, next) => {
    /*
    let products = [
        {'name':'Pomme', 'description':'Granny Smith', 'price':3.0, 'image':'pomme-granny.png'}, 
        {'name':'Kiwi', 'description':'jaune', 'price':1.0, 'image':'kiwi-jaune.png'}, 
        {'name':'Chocolat', 'description':'Au lait', 'price':5.3, 'image':'chocolat-lait.png'},
        {'name':'Café', 'description':'Expresso', 'price':7.2, 'image':'cafe-expresso.png'}
    ]
        response.json(products);
    */

    /*
    let userId = request.cookies.userId
    let productId = request.params.productId
    console.log(typeof(productId))

    listeUsers[userId].panier.push(productId)


    console.log(listeUsers)
    console.log('Product ID detail: ', productId)
    //console.log('Panier user : ', listeUsers[userId].panier)
    //response.send('product id: ',productId)

    //response.send("Ok")
    //response.json(listeUsers[userId].panier)
    //response.status()
    response.json(listeUsers[userId])
    */
    let productId = request.params.productId
    console.log('Get prod detail: ', productId)
    response.send(`Détail concernant le produit n°${productId}`)
})



app.get("/cart-user", (request, response, next) => {

    //let userId = request.cookies.userId
    //console.log("détail de l'utilisateur: ", listeUsers[userId])

    //response.json(listeUsers)

    console.log("détail de l'utilisateur: ", request.session)
    response.json(request.session.panierUser)
})


app.get("/clear-cart-user", (request, response, next) => {

    //let userId = request.cookies.userId
    console.log("Panier avant suppr: ", request.session.panierUser)
    request.session.panierUser.splice(0, request.session.panierUser.length)
    console.log("Panier Après suppr: ", request.session.panierUser)
    //response.json(listeUsers)

    console.log("détail de l'utilisateur: ", request.session)
    response.json(request.session.panierUser)
})



app.post("/create-product", (request, response, next) => {
    console.log('req en réception : ',request.body)

    DBManager.updateDataBase(request.body, 'Add-product'),
        function (error, results, fields) {
    }
    setTimeout(function () {
        // console.log("step 4 - redirect")
        response.send('Produit ajouté')
        //response.redirect('/get-remaining-tasks');
    }, 1000);

/*
    console.log('tab products (avant): ', products)
    console.log('create produit:')
    console.log('req : ', request)
    console.log('Req body: ', request.body)
    products.push(request.body)
    console.log('tab products (après): ', products)
    //response.redirect("/get-products")
  */  
})





//Ajouter un élément à la base de données
app.post('/add-task', (requete, reponse) => {
    GestionBDD.updateDataBase(requete.body, 'Add'),
        function (error, results, fields) {
        }
    //Timeout d'une seconde placé pour laisser le temps au serveur d'envoyer sa réponse
    //TODO: voir pour trouver une autre solution plus péreine.
    setTimeout(function () {
        // console.log("step 4 - redirect")
        reponse.redirect('/get-remaining-tasks');
    }, 1000);
})























/*

function productList(){
    return [
        {'id_produit':1, 'artiste':'Iron Maiden', 'album':'The Number of the Beast', 'price':9.9},  
        {'id_produit':2, 'artiste':'Haken', 'album':'Aquarius', 'price':26.7}, 
        {'id_produit':3, 'artiste':'Pink Floyd', 'album':'Wish You Were Here', 'price':10}, 
        {'id_produit':4, 'artiste':'Tool', 'album':'Fear Inoculum', 'price':79.9},  
        {'id_produit':5, 'artiste':'Hans Zimmer', 'album':'The Dark Knight', 'price':136.5}, 
        {'id_produit':6, 'artiste':'Persefone', 'album':'Shin-Ken', 'price':7}, 
        {'id_produit':7, 'artiste':'the Agonist', 'album':'Lullabies for the Dormant Mind', 'price':7}, 
    ]
}
*/


/*
function productList(){
    return [
        {'id_produit':1, 'artiste':'Iron Maiden', 'album':'The Number of the Beast', 'price':9.9}, 
        {'id_produit':2, 'artiste':'Iron Maiden', 'album':'Live After Death', 'price':12}, 
        {'id_produit':3, 'artiste':'Haken', 'album':'Aquarius', 'price':26.7}, 
        {'id_produit':4, 'artiste':'Haken', 'album':'Vector', 'price':12.5}, 
        {'id_produit':5, 'artiste':'Pink Floyd', 'album':'Meddle', 'price':9.9}, 
        {'id_produit':6, 'artiste':'Pink Floyd', 'album':'Wish You Were Here', 'price':10}, 
        {'id_produit':7, 'artiste':'Tool', 'album':'Lateralus', 'price':12}, 
        {'id_produit':8, 'artiste':'Tool', 'album':'Fear Inoculum', 'price':79.9},  
        {'id_produit':9, 'artiste':'La Ruda (Salska)', 'album':"L'art dela Joie", 'price':7}, 
        {'id_produit':10, 'artiste':'La Ruda (Salska)', 'album':'Souviens-toi 2012', 'price':12.9}, 
        {'id_produit':11, 'artiste':'Arch Enemy', 'album':'War Eternal', 'price':9.9}, 
        {'id_produit':12, 'artiste':'the Agonist', 'album':'Lullabies for the Dormant Mind', 'price':7}, 
        {'id_produit':13, 'artiste':'Hans Zimmer', 'album':'The Dark Knight', 'price':136.5}, 
        {'id_produit':14, 'artiste':'Persefone', 'album':'Shin-Ken', 'price':7}, 
    ]
}
*/