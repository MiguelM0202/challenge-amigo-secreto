let amigoSorteado = 0;
//let amigosIngresados = 0;//
let listaDeAmigosIngresados = [];
let numeroMaximoDeAmigos = 5;


/*funcion asignar texto*/
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
function agregarAmigo() {
    let ingresoUsuario = (document.getElementById('amigo').value);
    
    console.log(ingresoUsuario);
    console.log(listaDeAmigosIngresados);
/*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.*/
    if (ingresoUsuario == ("")) {
        alert ("Por favor, inserte un nombre.");
    } else {
        //Si el nombre ingresado está incluido en la lista 
        if (listaDeAmigosIngresados.includes(ingresoUsuario)) {
            asignarTextoElemento("amigoRepetido","Nombre ya ingresado, ingresa otro o intenta con el segundo nombre de tu amigo c:");
            return;
            //Si el nombre ingresado no está incluido en la lista 
        } else {
            listaDeAmigosIngresados.push(ingresoUsuario);
            /*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.*/
            listaDeAmigosIngresados.forEach(ingresoUsuario => {
                let listado = document.getElementById("listaAmigos");
                let nombreAmigo = (document.createElement("li"));
                nombreAmigo.textContent = ingresoUsuario;
                listado.appendChild(nombreAmigo);
            });
            limpiarCaja();
            return;
        }
    }
}



/*limpiar caja*/
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    asignarTextoElemento("amigoRepetido", "");
    document.querySelector("#amigo").focus();
}

/*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.