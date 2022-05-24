function verificar(){

  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('#res')
  if(fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src','images/homem-crianca.png')
      } else if( idade >= 10 && idade < 21){
        img.setAttribute('src','images/homem-adulto.png')


      } else if(idade >= 21 && idade < 50 ){
        img.setAttribute('src','images/homem-adulto.png')

      } else {
        img.setAttribute('src','images/homem-idoso.png')

      }

    } else if (fsex[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        img.setAttribute('src','images/mulher-crianca.png')


      } else if( idade >= 10 && idade < 21){
        img.setAttribute('src','images/mulher-adulta.png')


      } else if(idade >= 21 && idade < 50 ){
        img.setAttribute('src','images/mulher-adulta.png')


      } else {
        img.setAttribute('src','images/mulher-idosa.png')


      }
      
    }
    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
  
}