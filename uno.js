/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()

{

	let nombre;
	let peso;
	let sexo;
	let edad;
	let flag=0
	let contadorm=0;
	let sumaedades=0;
	let maspesado=0;
	let promediom=0;
	let nombremaspesado;

   for(let vueltas= 1;vueltas<4;vueltas++){

	   nombre=prompt("Ingrese el nombre"+ "   vuelta nro:"+vueltas)
	   while(!(isNaN(nombre))){
		nombre=prompt("Error ingresa un dato valido. Ingrese el nombre")
	   }

	   peso=prompt("Ingrese su peso")
	   while((peso>300||peso<0)){
		peso=prompt("Error ingresa un peso valido. Ingrese su peso")
	   }

	   sexo =prompt("Ingrese su sexo: h/m")
	   while(!(sexo=="h"||sexo=="m")){
		sexo =prompt("error. Ingrese su sexo: h/m")
	   }

	   edad= parseInt(prompt("Ingrese su edad"))
	   while(edad<0||edad>120){
		edad= parseInt(prompt("error . Ingrese su edad"))
	   }
  

	   if(sexo=="m"){
		   contadorm++
		   sumaedades=sumaedades+edad;
	   }
	   else if(sexo=="h"||flag==0||peso>maspesado){
		   maspesado=peso;
		   nombremaspesado= nombre
	   }   

	 }
	 alert(sumaedades)

	 promediom=(sumaedades/contadorm).toFixed(2);
	 document.writeln("La cantidad de mujeres es: "+contadorm+"<br>")
	 document.writeln("La edad promedio de mujeres es: "+promediom+"<br>")
	 document.writeln("El hombre mas pesado es: "+nombremaspesado+ " con un peso de : "+maspesado+"Kgs."+"<br>")
	
}
