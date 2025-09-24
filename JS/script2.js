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


//closure -------------------------------------------------------------------

let qwe = ()=> {
    let aa= 12;
    return ()=>{
        console.log(aa);

    }
}

let result = qwe();
result();

// ek function jo ek aur function return kre aur return krne walaa function hamesha use kre parent function kk variable ko.
// that is know as closure.


//Array ====================================================

//create--------------- square braket 

let asd = [ 1,2,3,4,5,6,7,8,9,]

//acces------------ by index 0,1,2

console.log(asd[0]);

//Methods

push() //last mai add krta hai 
pop() // last se remove krta hai 
shift () // starting se remove krta hai
unshift() // starting mai add krta hai 
slice() // (kha se , kitne remove krne hai) impotant---isme duplicate copy pr kaam hota hai
splice() // (kha se , kha tak) imp -- isme original data pr he kaam hota hai 











