// let val = prompt("enter a number =");
// for(i=0; i<=val; i++){
//     if(i%2===0){
//         console.log(`${i} is a even number`)
//     }else{
//     console.log(`${i} is a odd number`)}
// }


// function //

sasa();  // hoisting is possible

function sasa(){
    console.log("a")  // function decleartion & statements-----------------------------------

}

// function expression ----------------------------------------------------------------------

aa(); // hoisting is not possible

let aa = function(){
    console.log("a")

}

//arrow function------------------------------------------------------------------- 

let ds = (a,b)=> {    // a b is parameter
    console.log(a+b)
}

ds(1,1);  // 1 1 is arguments


// parameter & argument------------------------------------------------------
  // with statement & decleration
function sum(a,b){
    console.log(a+b)

}
sum(1,1);   // same as arrow fxn

// with fxn expression ---------------------------------------------------------

let asdf = function(v1){ // v1 is parameter
    console.log(`${v1} i am learing javascript `)

}
asdf("today") //  today is arguments


//












