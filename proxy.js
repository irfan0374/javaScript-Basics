
// let person={
//     name:"irfan",
//     age:22
// }
// let handler={
//     get:function(key ,value){
//         return key[value]
//     },
//     set:function(key ,value,newValue){
      
//             key[value]=newValue
        
//     }
// }
// let proxy=new Proxy(person,handler)
// proxy.name="iqbal"
// console.log(proxy.name)
 

let obj={
    name:"irfan",
    age:22
}
let handler={
    get:function(key,value){
        return key[value]
    },
    set:function (key,value,newValue){
        return key[value]=newValue
    }
}
let proxy=new Proxy(obj,handler)

proxy.name="new value"
console.log(obj)

