let amigoSorteado = 0;
let amigosIngresados = 0;
let listaDeAmigosIngresados = [];
let numeroMaximoDeAmigos = 3;

/*funcion asignar texto*/
function asignarTextoElemento(elemnto,texto) {
    let elementoHTML = document.querySelector(elemnto);
    for (let i = 0; i < numeroMaximoDeAmigos; i++) {
       if (listaDeAmigosIngresados.length === numeroMaximoDeAmigos+1){
            alert("Ingresaste el numero maximo de amigos");
            document.querySelector("#Añadir").setAttribute("disabled", "true");
            break;
       } else{
        if (listaDeAmigosIngresados.includes(texto)) {
            let nuevoElemnto = document.createElement("li");
            document.getElementById("listaAmigos1").appendChild(nuevoElemnto);
            nuevoElemnto.innerHTML = texto;
            return elementoHTML;
        } else{
            elementoHTML.innerHTML = texto;
            return;
        }
       }}}


/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
function agregarAmigo() {
    let ingresoUsuario = (document.getElementById('amigo').value);
    
    console.log(ingresoUsuario);
    console.log(listaDeAmigosIngresados);
/*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.*/
    if (ingresoUsuario == ("")||ingresoUsuario >= parseInt(0/1)) {
        alert ("Por favor, inserte un nombre.");
        limpiarCaja();
    }else{
    //Si el nombre ingresado está incluido en la lista 
        if (listaDeAmigosIngresados.includes(ingresoUsuario)) {
            alert ("Ya ingresaste ese nombre. Intenta con otro por favor c:");
            limpiarCaja();
            return;
        }else{
    //Si el nombre ingresado no está incluido en la lista 
            listaDeAmigosIngresados.push(ingresoUsuario);
    //Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
            console.log (ingresoUsuario);
            asignarTextoElemento("li",`${ingresoUsuario}`);

            limpiarCaja();
            amigosIngresados++;
            return;
        }
      }
}
    


            
/*limpiar caja*/
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.querySelector("#amigo").focus();
}

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/
/*let listaLista = Math.floor(Math.random()*numeroMaximoDeAmigos)+1;
    
console.log(listaLista);*/

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.