function calcularVuelto(aPagar, pago){
    const vueltoTotal = pago-aPagar
    let vueltoFaltante=vueltoTotal
    let cantidadBilletes500 =0
    let cantidadBilletes100 =0
    let cantidadBilletes50 =0
    let cantidadBilletes20 =0
    let cantidadBilletes10 =0

    while(vueltoFaltante>=500){
        cantidadBilletes500=cantidadBilletes500+1
        vueltoFaltante=vueltoFaltante-500
    }
    
    while (vueltoFaltante>=100){
        cantidadBilletes100=cantidadBilletes100+1
        vueltoFaltante=vueltoFaltante-100    
    }

    while (vueltoFaltante>=50){
        cantidadBilletes50=cantidadBilletes50+1
        vueltoFaltante=vueltoFaltante-50    
    }

    while (vueltoFaltante>=20){
        cantidadBilletes20=cantidadBilletes20+1
        vueltoFaltante=vueltoFaltante-20    
    }
   
    while (vueltoFaltante>=10){
        cantidadBilletes10=cantidadBilletes10+1
        vueltoFaltante=vueltoFaltante-10    
    }

    console.log('El vuelto total es: $'+vueltoTotal + '.')
    console.log('Cantidad de billetes de 500: '+ cantidadBilletes500)
    console.log('Cantidad de billetes de 100: '+ cantidadBilletes100)
    console.log('Cantidad de billetes de 50: '+ cantidadBilletes50)
    console.log('Cantidad de billetes de 20: '+ cantidadBilletes20)
    console.log('Cantidad de billetes de 10: '+ cantidadBilletes10)
    console.log('Vuelto en monedas: $'+ vueltoFaltante)
}

const totalAPagar=185
const dinero=1200

calcularVuelto(totalAPagar,dinero)