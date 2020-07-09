export default function loop() {
    whileLoop() // 0 es5
    doWhileLoop() // 1 es5
    forLoop() // 2 es5
    forInArrayLoop() // 3
    forInObjectLoop() // 4
    forOfArrayLoop() //5
    // forOfMapLoop() // 6
    forOfSetLoop()  // 7
    forOfStringLoop() // 8
    symbolIterator() // 9
}
function whileLoop() {//먼저 컨디션을 체크한후 진행
    console.log(`------ 0. while-loop ------`)//무한루핑(infinit)걸때 -끝이없는
    let sum=0;
    let i=1;
    while (i<=100){
        sum+=i
        i++
        
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function doWhileLoop() {//먼저 식을 넣고 진행. -끝이있는
    console.log(`------ 1. do-while-loop ------`)
    let count: number = 0
    let sum =0
    do{
        sum+=count;
        count++;
    }while (count <= 100)
    console.log(`1부터 100까지 합: ${sum}`)
}
function forLoop() {//유한(finite)
    console.log(`------ 2. for-loop ------`)
    let i =0
    let z =0
    let sum =0
    for(i=0;i<=100;i++){
        sum+=i
    }
    console.log(`1부터 100까지 합: ${sum}`)

}//2015년 이후로 아래식으로 전격교체
function forInArrayLoop() {//[] array으로 적용
    console.log(`------ 3. for-In-Array-loop ------`)
    let arr = ["a","b","c","d"]
    for (let i in arr){
        console.log(i, arr[i])
    }
}
function forInObjectLoop() {//{} JSON으로 적용
    console.log(`------ 4. for-In-Object-loop ------`)
    let fruits = {"a":"apple","b":"banana","c":"cherry"}
    for (let i in fruits){
        console.log(i, fruits[i])
    }
}
function forOfArrayLoop() {// of = Collection, Vector
    console.log(`------ 5. for-Of-Array-loop ------`)
    for (const i of [1,2,3]){
        console.log(i)
    }
}
// function forOfMapLoop() {
//     console.log(`------ 6. for-Of-Map-loop ------`)
//     let map = new Map([["a", 1], ["b", 2]])
//     map.set()
// }
function forOfSetLoop() {
    console.log(`------ 7. for-Of-Set-loop ------`)
    let set = new  Set(["a","b","c","d","a","b","c"])

}
function forOfStringLoop() {
    console.log(`------ 8. for-Of-String-loop ------`)
    for (let i of "Hello"){
        console.log(i)
    }
}
function symbolIterator() {
    console.log(`------ 9. symbol-Iterator ------`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof obj}`)
    console.log(`2. ${obj.next()}`)
    console.log(`3. ${obj.next()}`)
    console.log(`4. ${obj.next()}`)

}