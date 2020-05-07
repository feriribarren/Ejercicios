function triangulo(base){
  let contador=1
  const mitad=base/2
  let asteriscosArriba=''
  let asteriscosAbajo=''

if (base%2==0){
  while (contador<=base/2){
    asteriscosArriba=asteriscosArriba+'*'
    console.log(asteriscosArriba)
    contador=contador+1

  }

  asteriscosAbajo=asteriscosArriba

  for (i=0;i<base/2;i++){
    console.log(asteriscosAbajo)
    asteriscosAbajo=asteriscosAbajo.slice(1)
    contador=contador-1
  }

} else {
    while (contador<=(base+1)/2){
      asteriscosArriba=asteriscosArriba+'*'
      console.log(asteriscosArriba)
      contador=contador+1
    }
    
    contador=contador-1
    asteriscosAbajo=asteriscosArriba

  for (i=0;i<(base-1)/2;i++){
    asteriscosAbajo=asteriscosAbajo.slice(1)
    console.log(asteriscosAbajo)
    contador=contador-1
  }   
  }
}


const base=5

triangulo(base)


