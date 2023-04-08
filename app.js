const num=2; // 값이 바뀔 수 없음
let num2="5";

// console.log(124304);
// console.log("hello, world");
//
// console.log(5+2);
// console.log(5*2);
// console.log(5/2);

const a=undefined;
const b=null;

let something;
console.log(something,a);

// Array

const nunsense=[true,"d","v",1,2];

// GET Item from Array
console.log(nunsense[4]);

// ADD Item from Array
nunsense.push("Sunday");
console.log(nunsense)


//Object
const playerName="Daniel";
const playerPoints=88;
const playerHandson=true;

const player= {
    name:"Daniel",
    number: 88,
    handson:true,
};


console.log("Am I handsom?: x",player.handson);
player.number=player.number+12;
player.food="potato";
console.log(player);



