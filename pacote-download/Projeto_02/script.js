function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '_imagens/manhã.jpg'
        document.body.style.background = '#ff9c4a'
    } else if (hora >= 12 && hora < 18) {
        img.src = '_imagens/tarde.jpg'
        document.body.style.background = '#1ed9fa'
    } else {
        img.src = '_imagens/noite.jpg'
        document.body.style.background = 'black'
    }
}