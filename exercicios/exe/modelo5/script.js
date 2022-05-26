    var num = document.getElementById('num')
    var r = document.getElementById('r')
    var resp = document.getElementById('resp')
    var valores = []

    function isnum(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inlist(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
function add() {
  
    if (isnum(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        r.appendChild(item)
        resp.innerHTML = ``
    } else {
        window.alert('ERRO! NÚMERO INVÁLIDO OU JÁ ENCONTRADO NA LISTA!')
    }
    num.value = ``
    num.focus()
}

    function fin() {
        if (valores.length ==0) {
            window.alert('Adicione valores antes de finalizar') 
        } else {
            var tot = valores.length
            var maior = valores[0] 
            var menor = valores[0]
            var soma = 0
            var media = 0
            for (var pos in valores) {
                soma += valores[pos]

                if (valores[pos] > maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            resp.innerHTML = ``
            resp.innerHTML += `<p> Ao todo temos ${tot} números cadastrados </p>`
            resp.innerHTML += `<p> O maior número informado foi ${maior}</p>`
            resp.innerHTML += `<p> O menor número informado foi ${menor}</p>`
            resp.innerHTML += `<p> A soma de todos é ${soma}</p>`
            resp.innerHTML += `<p> A média de todos é ${media}</p>`
        }
    }


