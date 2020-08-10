/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let dias;
	let sexo;
	let lugar;
	let temporada;
	let cantidadpersonas;
	
	let promediopersonasinv;

	let contadorbari;
	let contadorcata;
	let contadorsalta;
	let contador;
	let nombregan;
do{
	dias = parseInt(prompt("ingrese dias de vacas"))

	sexo = prompt("ingresa tu sexo F/M")
	lugar = prompt("Ingresa tu destino bariloche cataratas o salta")
	temporada = prompt("ingresa estacion del año")
	cantidadpersonas = parseInt(prompt("cuantas personas van a ser?"))

	switch (lugar) {

		case "Bariloche":
			{
				contadorbari++
			}
		case "cataratas": {
			contadorcata++
		}
		case "salta": {
			contadorsalta++

		}

			if (estacion == "invierno") {
				contador++
				contadorpersonas = cantidadpersonas + contadorpersonas;
			}

			if (contadorbari > contadorcata && contadorbari > salta) {
				ganador = contadorbari
			}
			else if (contadorcata > contadorbari || contadorcata > contadorsalta) {
				ganador = contadorcata
			}
			else {
				ganador = contadorsalta
				nombregan=nombre
			}}
			while(rta=="si")



			promediopersonasinv = contadorpersonas / contador

			document.writeln("el mas elegido es"+ganador+"<br>")
			document.writeln(ganador+nombregan+"<br>")
			document.writeln("El promedio en invierno es: " + promediopersonasinv)

	}
}
