var num = [5,8,2,9,3]
num.push(7)
console.log(num)
console.log(num.length)
console.log(num.sort())

for(let i in num){
  console.log(num[i])
}

let pos = num.indexOf(18)
if(pos == -1){
  console.log(`Valor não encontrado`)
}else{

  console.log(pos)
}