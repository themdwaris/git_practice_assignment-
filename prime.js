

let num=9
let flag=true

for(let i=2; i<num; i++){
    if(num%i==1){
        flag=false
    }
}
if(flag){
    console.log(num,"Prime")
}else{
    console.log(num,"Not Prime")
}