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
const { useEffect } = require("react");
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
            cookie: { 
                maxAge: 6000000,
                //httpOnly: true,
                sameSite: "lax"
                //secure: true
            }
        }
    )
)

app.get("/", (request, response, next) => {

    console.log('request session user Id :', request.session.userId)
    console.log('true/false: ', !request.session.userId)
    console.log('true/false 2 : ', request.session.userId === undefined)

    //if(!request.session.userId){
    if(request.session.userId===undefined){
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
})


app.post("/user-connexion", (request, response, next) => {
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
            request.session.save()
            response.send('Connected as  ' + request.session.userLogin)
            
        }
    })
})


app.get("/get-products", (request, response, next) => {
    DBManager.getAllProducts(function (error, results, fields){
        console.log('resultat rqt: ', results)
        response.json(results)
    }, 'Retrieve-all-products')
})


app.get("/product-detail/:productId", (request, response, next) => {
    DBManager.getProduct(function (error, results, fields){
        console.log('résultat 1 produit: ', results[0])
        response.json(results[0])
    }, 'Retrieve-one-product', request.params.productId)
})


app.get("/add-product-to-cart/:productId", (request, response, next) => {
    let productId = request.params.productId
    console.log('type de productId: ',typeof(productId))
    console.log('session user: ', request.session)
    request.session.panierUser.push(productId)
    console.log('cookie de session: ', request.session)
    console.log('Panier User: ', request.session.panierUser)
    response.json(request.session.panierUser)
})


app.get("/remove-from-cart/:productId", (request, response, next) => {
    let productId = request.params.productId



    console.log('panier avant suppression: ', request.session.panierUser)

    let positionProduit = request.session.panierUser.indexOf(productId);
    if (positionProduit !== -1) {
        request.session.panierUser.splice(positionProduit, 1);
    }

    console.log('panier après suppression: ', request.session.panierUser)
    response.send('Produit supprimé')
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