function carregar() {
var horas = window.document.getElementById('horas')
var img = window.document.getElementById('imagem')

var agora = new Date()
var hora = agora.getHours()

horas.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#CCBB8D'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#A77961'
    } else {
        //BOA NOITE
        img.src = 'fotonoite2.png'
        document.body.style.background = '#00142E'
    }
}