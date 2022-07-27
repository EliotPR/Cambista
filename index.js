function convertir () {
    let valore = parseInt (document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 3.91;
    let euro = 4;

    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert ("El cambio de soles a dolares es: $" + resultado.toFixed(2))
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert ("El cambio de soles a euros es: " + resultado.toFixed(2))
    }
    
    else {
        alert ("Necesitas completar los requerimientos")
    }
}


const agente = ['001', '002', '003', '004']
agente.push ('005','006', '007')
// console.log(agente)
agente.shift ()
agente.unshift ('K')
// console.log(agente)




function Agentes (codigo, compañero) { 
    this.codigo = codigo
    this.compañero = compañero
}

const agente1 = new Agentes ('F', 'J')
agente.push (agente1)
console.log(agente)
console.log ('agente: '+ agente[7].codigo +
' compañero: ' + agente[7].compañero)