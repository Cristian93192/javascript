function contar() {
    var ini = document.getElementById('ni')
    var fim = document.getElementById('nf')
    var passo = document.getElementById('np')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number (passo.value)
        if (p<= 0){
            window.alert('Passo inválido!Considerando passo 1')
            p=1
        }

        if(i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1f449}`
            }

        } else {
            //Contagem decrescente
            for(var c = i; c>= f; c-=p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`

    }
}