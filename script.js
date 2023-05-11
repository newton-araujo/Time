function carregar(){
    var text = document.getElementById('txt');
    var imagem = document.getElementById('img')
    var date = new Date();
    var hora = date.getHours();
    var minuto = date.getMinutes();
    //text.innerHTML = `${hora}:${minuto}`

    if (hora > 0 && hora < 12){
        imagem.src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        text.innerHTML = `BOM DIA - ${hora}:${minuto}`

    } else if(hora >= 12 && hora <18){
        imagem.src = "https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=400"
        document.body.style.background = '#5B1C42'
        document.body.style.color = 'white'
        text.innerHTML = `BOA TARDE - ${hora}:${minuto}`

    }else if(hora >= 18 && hora <24 ){
        imagem.src = "https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=400"
        document.body.style.background = '#15364E'
        document.body.style.color = 'white'
        text.innerHTML = `BOA NOITE - ${hora}:${minuto}`
    }
}