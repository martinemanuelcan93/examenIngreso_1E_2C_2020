/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let productos;
  let marca;
  let precio;
  let pesokg;
  let tipo;
  let pesototal = 0;
  let marcaliquidocaro;
  let solidobarato;
  let flag = 0;
  let flag1 = 0;
  let precioliquidocaro;
  let preciosolidocaro;
  let rta;

  rta=prompt(" quiere ingresar productos?")
  do {
    productos = prompt("Ingresar productos")
    
    marca = prompt("Ingresa una marca")
    while (!(isNaN(marca)){
      marca = prompt("Dato invalido. ingresa una marca")
    }
    precio = parseInt(prompt("Ingrese un preecio"));
    while (precio > 0 || precio < 3000 || isNaN(precio)) {
      precio = prompt("Dato o numero invalido. Ingrese precio")
    }
    pesokg = parseInt(prompt("Ingrese el peso en kg"))
    while (isNaN(pesokg) || pesokg > 100 || peso < 0) {
      pesokg = parseInt(prompt("Dato invalido. Por favor Ingrese el peso  "))
    }
    tipo = prompt("tipo liquido o solido")
    while (tipo == "Liquido" || tipo == "Solido") {
      tipo = prompt("Recuerda que solo debes ingresar el tipo:  o liquido o solido")

    }

    if (flag == 0 || tipo == "liquido" && precio > precioliquidocaro) {

      precioliquidocaro = precio;
      marcaliquidocaro = marca;

    }
    if (flago == 0 || tipo == "solido" && preciosolidocaro > precio) {
      marcasolidobarato = marca;
      preciosolidocaro = precio

    }




    rta = prompt("desea seguir ingresando articulos?")
  }
}
while(rta == "si");

pesototal = peso + pesototal
document.writeln("") marcaliquidocaro
document.writeln("marcasolidobarato")
}
