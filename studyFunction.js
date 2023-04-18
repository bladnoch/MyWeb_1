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


const names ={
    name: "Daniel",
    age: 9,
    height: 171,
};
console.log(names.name);
console.log(names.height);

names.name="Dounguk";
console.log(names.name);
const count=["name", "age","height"];


const calculator={
    add: function(a,b){
        console.log("add ",a+b);
    },
    subtract: function (a,b){
        console.log("subtract ",a-b);
    },
    divide: function (a,b){
        console.log("divide ",a/b);
    },
    times: function (a,b){
        console.log("times ", a**b);
    }
}
calculator.add(1,2);
calculator.subtract(1,2)
calculator.divide(1,2)
calculator.times(1,2)
