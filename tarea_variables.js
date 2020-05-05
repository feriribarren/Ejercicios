// Ejercicio de variables
// 1
const miComidaPreferida={
	nombre: "Pizza",
	cantidadDeVecesQueComi: 100,
	cantidadDeVecesQueMeCocinaron: 30,
	ingredientes: ["salsa", "queso", "tomate", "rucula", "oregano", "aceituna"],
}

// 2

miComidaPreferida.llevaMasDeCincoIngredientes= miComidaPreferida.ingredientes.length>5

// 3

miComidaPreferida.cantidadDeVecesQueMeCocine= miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

// Ejercicio funciones

function calcularAreaRectangulo (base,altura){
	const area=base*altura
	return area
}

function calcularPrecioTotal (precioUnitario, cantidad, costoEnvio){
	const precioTotal=(precioUnitario*cantidad)+costoEnvio
	return precioTotal
}

function dejarPasar(edad){
	if(edad>=18){
		return true
	}else{
		return false
	}
}

// Ejercicio if
// 1

function calcularResultadoExamen(nota){
	if (nota<4) {
		return 'aplazado'
	} else {
		if (nota<6){
			return 'A recuperar'
		} else {
			if (nota<10){
				return 'Aprobado'
			} else {
				if (nota===10)
					return 'sobresaliente'
			}
		}
	}
}

console.log(calcularResultadoExamen(10))

// 2
// simplificado:

// function sonHermanos(personaUno, personaDos) {
// if (personaUno.madre === personaDos.madre && personaUno.padre === personaDos.padre){
// 	return true
// } else {
// 	return false
// }

function sonHermanos(personaUno, personaDos) {
if (personaUno.madre === personaDos.madre && personaUno.padre === personaDos.padre){
	return true
} else {
	return false
}
}

const personaUno={
	madre:'Ana',
	padre: 'Raul',
}

const personaDos={
	madre:'Ana',
	padre: 'Pablo',
}

console.log(sonHermanos(personaUno, personaDos))

// 3
 function contarEspacios(texto){
 	 let cantidad = 0

 	 for (i=0;i<texto.length;i++){
 	 	if (texto[i]===' '){
 	 		cantidad = cantidad + 1
 	 	}
 	 }
 	 return cantidad 
 }

 console.log(contarEspacios('Este texto tiene que tener 6 espacios'))

 // Para investigar
  //1 
  function obtenerRecetaPorIngrediente(listaComidas, nombreIngrediente){
  	let comidas = []
  	for (i=0; i<listaComidas.length;i++){
  		
  		if (listaComidas[i].ingredientes.includes(nombreIngrediente)){
  			comidas.push(listaComidas[i].nombre)
  		}
    }
  	return comidas	
  	}
 
  const listaComidas = [
  { nombre: 'Tortilla de acelga',
    ingredientes:  ['acelga', 'huevo', 'queso'],
  },
  { nombre: 'pizza',
    ingredientes: ['tomate', 'huevo', 'queso', 'aceituna']
   },
   { nombre: 'ensalada',
    ingredientes: ['tomate', 'lechuga', 'palta', 'zanahoria', 'huevo']
   }
   ]
   console.log(obtenerRecetaPorIngrediente(listaComidas,'huevo'))

   // 2

   function obtenerRecetaPorIngredientes(listaComidas, listaIngredientes){
    let comidas =[]
    for (i=0; i<listaComidas.length;i++){
  		if (listaComidas[i].ingredientes.includes(nombreIngrediente)){
  			comidas.push(listaComidas[i].nombre)
  		}
    }
    
   	return comidas
   }


const listaIngredientes = ['huevo', 'acelga']


