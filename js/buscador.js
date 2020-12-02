let btn = document.getElementById('buscar');
let search = document.getElementById("search");

btn.addEventListener("click", function(event){
    search.classList.remove("borderError");

    let texto = search.value;
    event.preventDefault()

    if(texto != ""){
        if(texto.includes("Maiz")){
            document.getElementById('error').innerHTML = ``
            //Ejecutar foco al enlace 1

        }else if(texto.includes("manzanas")){
            document.getElementById('error').innerHTML = ``
            //Ejecutar foco al enlace 2
            
        }else{
            document.getElementById('error').innerHTML = `<div class="alert alert-danger" role="alert">Upss! no hemos encontrado nada relacionado con <strong>${texto}</strong> </div>`
        }
    }else{
        search.classList.add("borderError");
    }

});