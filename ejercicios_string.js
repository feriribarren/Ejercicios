// Ejercicios String
// 1
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


// 2
 function buscarTweets(mensajes, texto){
    const listaTweets=[]
    for (i=0;i<mensajes.length;i++){
    	if (mensajes[i].includes(texto)){
    		listaTweets.push(mensajes[i])
    	}
    }
    return listaTweets
 	}

 const tweets = [
 'Total de casos desde el comienzo de la pandemia en toda la provincia asciende a 243.',
 'El intendente aseguro que Rosario esta en condiciones de en uno o dos dias flexibilizar algunos sectores.',
 'Rosario sumo una nueva jornada sin registrar nuevos casos de coronavirus.']

console.log(buscarTweets(tweets,'Rosario'))


// 3
function censurarTexto(frase,listaPalabrasCensuradas){
    let fraseCensurada=frase
    
    for (i=0;i<listaPalabrasCensuradas.length;i++){
    	
    	if (frase.includes(listaPalabrasCensuradas[i])){
    		let caracteres=''
    		for (j=0;j<listaPalabrasCensuradas[i].length;j++){
    			caracteres=caracteres+'*'
    		}
                while (fraseCensurada.includes(listaPalabrasCensuradas[i])) {
    		fraseCensurada=fraseCensurada.replace(listaPalabrasCensuradas[i],caracteres)
		}
    	}

    }
    

	return fraseCensurada
}

const citaLibro='Todos tenemos adentro una insospechada reserva de fortaleza que emerge cuando la vida nos pone a prueba'
const censuras=['vida', 'fortaleza', 'prueba']

console.log(censurarTexto(citaLibro,censuras))
