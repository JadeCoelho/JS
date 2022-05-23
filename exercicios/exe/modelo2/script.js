function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // é o mesmo que escrever na parte de html: img id="foto" 
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 13) {
                img.setAttribute('src', 'menino.jpg')
            } else if (idade>=13 && idade<18) {
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade >= 18 && idade <60) {
                img.setAttribute('src', 'adulto.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 13) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade>=13 && idade<18) {
                img.setAttribute('src', 'garota.jpg')
            } else if (idade >= 18 && idade <60) {
                img.setAttribute('src', 'adulta.jpg')
            } else if (idade >= 60) {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

