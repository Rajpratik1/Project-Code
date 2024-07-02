let a=[23,24,-35,4,45,-767]
delete a[0]
console.log(a,a.length)
let b=[23,34,12,-34,56,-67,78]
console.log(a.concat(b))
let c=[-3,12,-4,56,-332,66,50]
console.log(a.concat(b,c))
let d=[54,51,52,-53]
console.log((a.concat(b,c,d)).sort())
let compare =(a,b)=>{
    return b-a
}
let num=[343,232,435,76,67,12]
num.sort(compare)
console.log(num) 
console.log(num.splice(1,3,487,59,453,35,34,353,))
