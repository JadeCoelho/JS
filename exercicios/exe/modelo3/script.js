function contar() {
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var pas = Number(document.getElementById('txtpasso').value)
    var r = document.getElementById('r')
    if (inicio.length == 0 || fim.length == 0 || pas.length == 0) {
        r.innerHTML= 'erro: dados insuficientes'
    } else {
        r.innerHTML= ''
    if (inicio < fim) {
    for (c = inicio; c <= fim; c += pas) {
        r.innerHTML += ` ${c} \u{1F449}`
    }
    } else if (inicio > fim) {
        for (c = inicio; c >= fim; c -= pas) {
            r.innerHTML += ` ${c} \u{1F449}`
    }
    
    }
    r.innerHTML += `\u{1F3C1}`
    }
    }