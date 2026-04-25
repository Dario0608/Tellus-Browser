console.log("Tellus UI cargada correctamente");

const barra = document.getElementById("adress-bar");

barra.addEventListener("keydown", (e) =>{

if(e.key == "Enter"){
    const texto = barra.value;

    if(esURL(texto)){
        console.log("La búsqueda es un enlace: " + barra.value);
    }else{
        console.log("Es una búsqueda normal");
    }
}
});

function esURL(texto){
    return texto.startsWith("http://") || texto.startsWith("https://") || texto.includes("."); 
}

