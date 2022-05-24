function contar(){
  var inicio = window.document.getElementById('inicio')
  var fim = window.document.getElementById('fim')
  var passo = window.document.getElementById('passo')
  var res = window.document.getElementById('resp')

  console.log(passo)

  if(inicio.value.length  == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Faltam dados!');
    res.innerHTML = `Impossível contar`
  } else {
    res.innerText = `Contando: `;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    
    if(p <=0 ){
      window.alert('Passo Inválido! Considerando passo 1')
      p=1
    }

    if (i < f){
      for(let c = i; c < f; c+=p){
        res.innerHTML += `${c} \u{1F449}`
      }

    } else {
      for(c = i; c >= f; c-=p){
        res.innerHTML += `${c} \u{1F449}`
      }

    }
    res.innerHTML += ` \u{1F3C1}`

  }


}