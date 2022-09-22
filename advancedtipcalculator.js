let noOfperson = document.getElementById('person--')
let noOfpeople = Number(noOfperson.innerText)
let result = document.getElementById('result--')
let res = Number(result.innerText)

const input=()=>{
    let billtotal = document.getElementById('bill--total--input').value;
    document.getElementById("result--").innerHTML = billtotal
}
const tipInput=()=>{
    const tip = document.getElementById('tip--input').value
    let billtotal = document.getElementById('bill--total--input').value;
    document.getElementById('result--').innerHTML=Math.floor((Number(billtotal)+Number(tip))/noOfpeople)
}
const increase=()=>{
    noOfpeople++
    noOfperson.innerText=`${noOfpeople}`
    tipInput()
}
const decrease=()=>{
    if(noOfpeople<=1){
        return
    }
    noOfpeople--
    noOfperson.innerText=`${noOfpeople}`
    tipInput()
}