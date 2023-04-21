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


// // #2
// const player={ //object 안에 function을 만들 수 있다.
//     name:"Daniel",
//     sayHello: function(otherPersonsName){
//         console.log("hello", otherPersonsName);
//     }
// }
// console.log(player.name);
// player.sayHello("DK");
//
//
// const names ={
//     name: "Daniel",
//     age: 9,
//     height: 171,
// };
// console.log(names.name);
// console.log(names.height);
//
// names.name="Dounguk";
// console.log(names.name);
// const count=["name", "age","height"];

// const age=94;
// function calculateKrAge(ageOfForeigner){
//     ageOfForeigner+=2;
//     return ageOfForeigner;
// }
//
// console.log(calculateKrAge(age));

const Calc={
    add: function (a,b){
        return a+b;
    },
    subt: function (a,b){
        return a-b
    },
    times: function(a,b){
        return a**b
    },
    div:function (a,b){
        return a/b
    }
}

const added=Calc.add(1,5);
console.log(Calc.subt(12,added));
