function gerar() {
    var num = document.getElementById('num')
    var r = document.getElementById('r')

    if (num.value.length == 0) {
        window.alert('erro. digite um número')
    } else {
        var n = Number(num.value)
        c = 0
        r.innerHTML = ``
        while (c < 10) {
            c++
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            r.appendChild(item)
        }
    }
  
}