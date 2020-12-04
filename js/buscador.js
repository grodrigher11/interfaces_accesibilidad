let btn = document.getElementById('buscar');
let search = document.getElementById("search");

btn.addEventListener("click", function(event){
    search.classList.remove("borderError");

    let texto = search.value.toLocaleLowerCase();
    alert(search.value.toLocaleLowerCase());
    event.preventDefault()
    console.log(document.getElementsByClassName("maiz"));
    
    if(texto != ""){
        if(texto.includes("maiz") ){
            document.getElementById('error').innerHTML = ``
            //Ejecutar foco al enlace 1
            //hace focus normal de navegador con su borde y un color de fondo añadido que igual sobra
            document.getElementsByClassName("maiz")[0].focus();
          
            document.getElementsByClassName("maiz")[0].style.backgroundColor = "#00B6F1";
            

        }else if(texto.includes("manzana")){
            document.getElementById('error').innerHTML = ``
            //Ejecutar foco al enlace 2
            document.getElementsByClassName("manzana")[0].focus();
            
        }else{
            document.getElementById('error').innerHTML = `<div class="alert alert-danger" role="alert">Upss! no hemos encontrado nada relacionado con <strong>${texto}</strong> </div>`
        }
    }else{
        search.classList.add("borderError");
    }

});