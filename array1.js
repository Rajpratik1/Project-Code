let num=[23,231,123,7764,432,35]
num.forEach((element)=>{
    console.log(element*element)
})
// Array.from
let name ="Harry"
let arr =Array.from(name)
console.log(arr)
//for...of
for(let i of num){
    console.log(i)
}
//for.....in
console.log("  ")
for(let i in num){
    console.log(num[i])
}