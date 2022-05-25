var val =  [3, 9, 6, 9, 1]
val.sort()
// console.log(val)

for (var pos in val) {
    console.log(`a posição ${pos} tem valor ${val[pos]}`)
}

var num = val.indexOf(3)
if (num == -1) {
    console.log(`valor não encontrado`)
} else {
    console.log(`o valor 3 está na posição ${num}`)
}


//código tradicional do percurso (pra exibição) em vetores 