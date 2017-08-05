function load() {
     alert("La página esta cargada");
}
window.onload = load;

function demo(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("¡HOLA MUNDO!");
	})
}

load();
demo();

