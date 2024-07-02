let arr=[45,23,90]
let a=arr.map((value,index,Array)=>{
    console.log(value,index,Array)
    return value+index
})
console.log(a)

//Array filter method
let arr2=[45,23,21,0,3,5]
let b=arr2.filter((a)=>{
    return a%5==0
})
console.log(b)
// Array reduce method
let arr3 =[23,44,45,56,89]
let c=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(c) 