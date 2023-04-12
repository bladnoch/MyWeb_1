// console.log("hello");

// #1
// function sayHello(inName,age){
//     let name=inName;
//     let ag=age;
//     console.log("hello my name is",name,"I am",ag);
// }
//
// // alert(sayHello());
// sayHello("Daniel",29);


// #2
const player={ //object 안에 function을 만들 수 있다.
    name:"Daniel",
    sayHello: function(otherPersonsName){
        console.log("hello", otherPersonsName);
    }
}
console.log(player.name);
player.sayHello("DK");