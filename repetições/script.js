function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (i < f) {
            for(let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F603}`
            } 
            
            } else {
                for(let c = i; c >= f; c+=p) {
                    res.innerHTML += `${c} \u{1F603}`
                }
        }
    }
}

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}

let numer = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resu = document.querySelector('div#resul')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numer.value) && !inLista(numer.value, valores)) {
        valores.push(Number(numer.value))
        let itens = document.createElement('option')
        itens.text = `Valor ${numer.value} adicionado`
        lista.appendChild(itens)
        resu.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    numer.value = ''
    numer.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores')
    } else {
    let tot = valores.length //para saber quantos elementos meu vetor tem
    let maior = valores[0]
    let menor = valores[0]
    let some = 0
    let media = 0
    for (let posi in valores) {
        some += valores[posi]
        if (valores[posi] > maior)
            maior = valores[posi]
        if (valores[posi] < menor)
            menor = valores[posi]
    }

    media = some / tot

    resu.innerHTML = ''
    resu.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    resu.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    resu.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    resu.innerHTML += `<p>Somando todos os valores, temos ${some}</p>`
    resu.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}