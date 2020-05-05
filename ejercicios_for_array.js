// Ejercicios for
// 1
function imprimirNumeros(numero){
  for (i=1;i<=numero;i++){
  	console.log(i)
  }

}

// console.log(imprimirNumeros(3))

// 2
function imprimirOtrosNumeros(numero1,numero2){
	if (numero1<=numero2){
		for (i=numero1;i<=numero2;i++){
			console.log(i)
		}
	    } else {
			console.log('El primer numero es mayor que el segundo')
    }
}

// console.log(imprimirOtrosNumeros(14,5))

// Ejercicios array

function duplicarNumeros(listaNumeros){
 const listaDuplicados =[]
 for (i=0;i<listaNumeros.length;i++){
 	const numeroduplicado = listaNumeros[i]*2
 	listaDuplicados.push(numeroduplicado)
 }
 return listaDuplicados
}

console.log(duplicarNumeros([1,5,8,10]))

function multiplicar(numeros){
	let total=1
	for (i=0;i<numeros.length;i++){
     	total= total * numeros[i]
	}
     
	return total
}

console.log(multiplicar([1,4,12]))

// 3

function calcularPromedio(lista){
	let suma=0
    for (i=0;i<lista.length;i++){
 		suma = suma+lista[i]

    }
    const promedio=suma/lista.length

	return promedio
}

console.log(calcularPromedio([10,6,8]))