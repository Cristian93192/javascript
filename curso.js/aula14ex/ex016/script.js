function verificar(){
    var start = document.getElementById('n1')
    var end = document.getElementById('n2')
    var step = document.getElementById('passo')
}

if (start < 1) {
    console.log('Impossivel de executar')
} else if (end <= start) {
    console.log('Impossível de executar')
} else if (step < 1) {
    console.log('Impossível de executar')
}

while(end<=start) {
    console.log('start')
    start = start + step
}