//Functions
let x = 10;
let y = 20;


function sum(x,y,disp){
  
 let a = x+y ;
 disp(a);
}

function display(total){
 console.log(`this is ${total}`)
}
sum(a,b,display);


//NUMBER METHODS
let num = 10;
let num2 = 99.9;

console.log(typeof num);
console.log(typeof num2);

let res = num2.toString();
console.log(typeof res);


let num3 = 99.9;
let res1 = num3.toFixed(0);
console.log( res1);


let n = 10;
let res2 = n.toFixed(0);

let r = parseInt(res2)
console.log( typeof res2);


let res3 = Math.round(4.8);

console.log(  res3);

let res4 = Math.trunc(4.8);

console.log(  res4);

let res5 = Math.sign(4.8);

console.log(  res5);

let resp = Math.pow(4,2);

console.log(  resp);

let respo = Math.sqrt(36);

console.log(  respo);

let result = Math.min(36,25,36,78,96);
console.log(  result);

let res6 = Math.max(36,98,56,70,45);
console.log(  res6);

let res7 = Math.random();
console.log(  res7);

let res8 = math.floorMath.random();
console.log(  res8);

let res9 = new Date(2011);
console.log(  res9);

let res0 = new Date();
console.log(  res0.getFullYear());

let res01 = new Date();
console.log(  res01.getMilliseconds());