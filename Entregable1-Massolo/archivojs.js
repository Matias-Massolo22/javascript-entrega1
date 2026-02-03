//Saludo de bienvenida

alert("Bienvenido a Racing Club - Nuevos Socios");

//Comentar precio y consultar si continua
function confirmarSocio() {
    return (confirm("El precio de la cuota es te $32.500. Desea continuar?"))
};


//Precio por cuota
const precioCuota = 32500;


//socio confirmado guarda su es true o false

let socioConfirmado = confirmarSocio();

//ciclo if que guarda la cantidad de socios si es verdadero
let cantidadSocios

//Array de socios
let socios = [];




if (socioConfirmado == true) {
    cantidadSocios = parseInt(prompt("Ingrese la cantidad de socios a asociar"))
    console.log(cantidadSocios)
} else {
    alert("¡Saludos!")

}


//funcion agregarSocio()

function agregarSocio() {
    // Crear el objeto socio
    let nuevoSocio = {
        nombre: prompt("Ingrese su nombre completo"),
        apellido: prompt("Ingrese su apellido"),
        dni: prompt("Ingrese su DNI"),
        edad: prompt("Ingrese su edad")
    };

    // Agregar el nuevo socio al array usando push
    socios.push(nuevoSocio);
}

//For para asociar la cantidad de socios mencionada

for (let i = 0; i < cantidadSocios; i++) {
    agregarSocio()
};


console.log(socios);

//Confirmar si desea avanzar al pago
function confirmarPago() {
    return (confirm("¡Desea avanzar para el pago?"));
};

let confirmacionPago = confirmarPago();

//Calculo sobre el monto total a abonar
    
function calculoPago(numeroSocios, precio){
    return (numeroSocios * precio);
}



//registro de pago

let pagos = [];

function registrarPago(precioTotal){
    let datosPago = {
        numeroTarjeta : prompt("Ingrese el numero de su tarjeta"),
        titularTarjeta :prompt("Ingrese el nombre del titular de la tarjeta"),
        codigoSeguridad: prompt("Ingrese el codigo de seguridad de su tarjeta"),
        cantidadCuotas: prompt("Ingrese la cantidad de cuotas 3/6/9"),
    };
    pagos.push(datosPago);
    let pago = confirm ("¿Ejecutar el pago?");

    if (pago == true){
        alert("Usted abonó $" + precioTotal);  
    }

}
if (confirmacionPago == true) {
    let precioTotal = calculoPago(cantidadSocios, precioCuota);
    alert("El monto total a abonar es de $" + precioTotal)

    registrarPago(precioTotal)
} else {
    alert("Asociación cancelada")
}

console.log (pagos);