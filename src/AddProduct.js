import CreateLink from "./CreateLink"

  
function ActionSurSubmit(){

    let createJson = { 
        artiste: document.getElementById("artiste-name").value,
        album: document.getElementById("album-name").value,
        genre: document.getElementById("album-type").value,
        prix: parseFloat(document.getElementById("product-price").value,),
  }

    console.log('Json: ', createJson)
    //alert()
    const url = "http://localhost:4000/create-product"
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      //body: JSON.stringify({ title: 'React POST Request Example' }),
      body: JSON.stringify(createJson)
      }
      console.log('req opt: ', requestOptions)
      console.log('url: ', url)
      
      fetch(url, requestOptions)
          .then(response => response.json())
          //.then(data => this.setState({ postId: data.id }));
          .then(data => console.log('data: ',data))
          //.catch(e => alert('error: ' + e));    
          
      
  }



function AddProduct(props){
  //<form id="create-product" method="post" enctype="application/x-www-form-urlencoded" onSubmit={ActionSurSubmit}>
  //Pourquoi est-ce que la fonction 'ActionSurSubmit' ne fonctionne pas sans les '()' ????
    return(
        <div>
            <h1>
                Ajouter un produit
            </h1>
            <form id="create-product" encType="application/x-www-form-urlencoded" onSubmit={ActionSurSubmit}>
                <label htmlFor="artiste-name">Artiste : </label>
                <input className="form-control" name="artiste" id="artiste-name"/>
                <label htmlFor="album-name">Album : </label>
                <input className="form-control" name="description" id="album-name" />
                <label htmlFor="album-type">Genre : </label>
                <input className="form-control" name="genre" id="album-type" />
                <label htmlFor="product-price">Prix : </label>
                <input className="form-control" type="number" step="0.01" name="prix" id="product-price" />
                <br />
                <input type="submit" value="Ajouter produit au catalogue" />
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
  


export default AddProduct;
/*
module.exports = {
    FormCreateProduct: FormCreateProduct,
    SimpleButton: SimpleButton
}










function AddProduct(props){


















    return(
        <div>
            <h1>
                Ajouter un produit
            </h1>

            <p>
                Page en cours de construction.
            </p>

            <CreateLink 
              setCurrentPage={props.setCurrentPage} 
              currentName='homepage' 
              link_ref='#' 
              link_name='Accueil' 
            />

        </div>
    )
}

export default AddProduct
*/