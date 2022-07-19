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

