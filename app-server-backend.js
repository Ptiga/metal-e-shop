const express = require("express");
const router = express.Router();
const app = express();
const { Cookie } = require('express-session')
const port = 4000;
const DBManager = require('./DatabaseManager')
var cors = require('cors')
var session = require('express-session')
const { uid } = require('uid');

app.use(express.static("src"));
app.use(express.json({
    type: ['application/json', 'text/plain']
}))
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true,
}))

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


app.use(
    session(
        { 
            secret: 'keyboard cat', 
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 600000 }
        }
    )
)

const checkSession = (request, response, next) => {
    console.log('rq ss: ', request.session)
    console.log('rq logged: ', request.session.isUserLogged)
    console.log('rq userId: ', request.session.userId)
    if(request.session && request.session.isUserLogged == true){
        response.send(request.session.userLogin)  
    }
    next()
}


/*
app.get("/", (request, response, next) => {
    response.redirect("/#")
})
*/
app.get("/", checkSession, (request, response, next) => {

    if(! request.session.userId){
        console.log('je passe par là')
        request.session.userId = uid(32),
        request.session.panierUser = [],
        request.session.isUserLogged = false,
        request.session.userLogin = '' ,
        request.session.userRole = 'client'  
    }
    /*
    let retourJson = {
        login: request.session.userLogin,
        isLogged: request.session.isUserLogged,
        role: request.session.userRole,
        panier: request.session.panierUser
    }
    */
    console.log('cookie de session: ', request.session)
    console.log('cookie de session (id): ', request.cookies)
    console.log('cookie de session (id): ', request.cookies['connect.sid'])
    response.send(request.cookies['connect.sid'])
    //response.json(request.session)
    //response.cookie(request.session)
})


app.post("/user-connexion", (request, response, next) => {
    //let passewordReceived = request.body.password
    console.log('req en réception : ',request.body)
    console.log('req en réception : ',request.body.login)
    console.log('req en réception : ',request.body.password)
    DBManager.checkLogin(request.body, 'User-connect', function (error, results, fields) {
        console.log('result de la requête après traitement: ', results)
        console.log('taille : ', results.length)
        if(results.length == 0 || request.body.password != results[0].user_password){
            request.session.isUserLogged = false
            request.session.userLogin = '' 
            request.session.userRole = ''
            console.log("not connected")
            console.log('cookie de session: ', request.session)
            response.send("not connected")
        }else{
            request.session.isUserLogged = true
            request.session.userLogin = results[0].user_login 
            request.session.userRole = results[0].user_role
            console.log("connected")
            console.log('cookie de session: ', request.session)
            //response.send("connected")
            response.send('Connected as  ' + request.session.userLogin)
            //response.json(request.session)

        }
        
        /*
        console.log('mail user: ', results[0].user_email)
        console.log('login user: ', results[0].user_login)
        console.log('password user: ', results[0].user_password)
        console.log('role user: ', results[0].user_role)

        console.log('req en réception : ',request.body.password)
        console.log('password user: ', results[0].user_password)
        console.log(request.body.password == results[0].user_password)
        */
        //response.json(results)
    })
})
    
    //.then(console.log('result: ', res))
    /*
    setTimeout(function () {
        console.log(request.session)
        response.json()
    }, 1000);
    */
    //console.log('Resultat en sortie: ',results)
    /*
    DBManager.updateDataBase(request.body, 'User-connect'),
        function (error, results, fields) {
    }
    */   





app.get("/get-products", (request, response, next) => {
    DBManager.getAllProducts(function (error, results, fields){
        console.log('resultat rqt: ', results)
        response.json(results)
    }, 'Retrieve-all-products')
})


app.get("/product-detail/:productId", (request, response, next) => {
    //let productId = request.params.productId
    DBManager.getProduct(function (error, results, fields){
        //console.log('Get prod detail: ', productId)
        //response.send(`Détail concernant le produit n°${productId}`)
        //console.log('résultat 1 produit: ', results[0])
        //response.send('retour ok')
        response.json(results)
    }, 'Retrieve-one-product', request.params.productId)
})


app.get("/add-product-to-cart/:productId", (request, response, next) => {
    let productId = request.params.productId
    console.log(typeof(productId))
    console.log('session user: ', request.session)
    request.session.panierUser.push(productId)
    console.log('cookie de session: ', request.session)
   response.json(request.session.panierUser)
})


app.get("/cart-user", (request, response, next) => {
    console.log("détail de l'utilisateur: ", request.session)
    response.json(request.session.panierUser)
})


app.get("/clear-cart-user", (request, response, next) => {
    console.log("Panier avant suppr: ", request.session.panierUser)
    request.session.panierUser.splice(0, request.session.panierUser.length)
    console.log("Panier Après suppr: ", request.session.panierUser)
    console.log("détail de l'utilisateur: ", request.session)
    response.json(request.session.panierUser)
})


app.post("/create-product", (request, response, next) => {
    console.log('req en réception : ',request.body)
    DBManager.updateDataBase(request.body, 'Add-product'),
        function (error, results, fields) {
    }
    setTimeout(function () {
        response.send('Produit ajouté')
    }, 1000);
})


app.get("/logout", (request, response, next) => {
    request.session.destroy()
    response.send("You're now logout")
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