let amigoSorteado = 0;
let listaDeAmigosIngresados = [];
let listaNumerosGenerados = [];
let numeroMaximoDeAmigos = 3;
let botonSorteo = document.querySelector("#sortearAmigo");

/*funcion asignar texto*/
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    for (let i = 0; i < numeroMaximoDeAmigos; i++) {
       if (listaDeAmigosIngresados.length === numeroMaximoDeAmigos){
            let desactivar = document.querySelector("#desactivar");
            desactivar.innerHTML= `<b> Ingresaste el numero maximo de amigos (${numeroMaximoDeAmigos})</b> <br> ¡Es hora del sorteo! <br><br> ${texto}`;
            document.querySelector("#Añadir").setAttribute("disabled", "true");
            break;
       } else{
        if (listaDeAmigosIngresados.includes(texto)) {
            let nuevoElemnto = document.createElement(elemento);
            document.getElementById("listaAmigos1").appendChild(nuevoElemnto);

            nuevoElemnto.innerHTML = texto;
            return elementoHTML;
        }else {
            elementoHTML.innerHTML = texto;
            return;
        }
        }  
    }
}


       //Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/
function generarNumero() {
    //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximoDeAmigos)+1;

        console.log(numeroGenerado);

    if (listaNumerosGenerados.includes(numeroGenerado)){
        return generarNumero;
    }else {
        listaNumerosGenerados.push(numeroGenerado);
        return numeroGenerado;
    }
}


//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
function nombreSorteado(){
    let resultado = (document.getElementById("resultado1"));
    //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    if (listaDeAmigosIngresados.length === numeroMaximoDeAmigos){
        resultado.innerHTML=`El amigo secreto sorteado es: ${listaDeAmigosIngresados[amigoSorteado]}`;
        let remove = document.querySelector("#listaAmigos")
        remove.remove();
        botonSorteo.setAttribute("disabled", "true");
    

    }else {
        alert (`Todavia no ingresas suficientes amigos :c  Ingresa al menos ${numeroMaximoDeAmigos}`);
    } 
}


function sortearAmigo(){
    botonSorteo.addEventListener("click", nombreSorteado);
}


/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
function agregarAmigo() {
    let ingresoUsuario = (document.getElementById('amigo').value);
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
            console.log (listaDeAmigosIngresados.length);
    //Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
            console.log (ingresoUsuario);
            console.log (listaDeAmigosIngresados);

            asignarTextoElemento("li",`${ingresoUsuario}`);
            sortearAmigo();

            limpiarCaja();
            botonSorteo.removeAttribute("disabled");
            return;
        }
    }
}


            
/*limpiar caja*/
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
    document.querySelector("#amigo").focus();
}