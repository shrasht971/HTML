function returnFunc(){
const x = () =>{
    let a = 1
    console.log(a)
    const y = ()=>{
        let a=2
        console.log(a)
          const z =()=>{
            let a=3
          console.log(a)
          }
          z()
    }
    y()
}
return x
}
let a = returnFunc()
a()