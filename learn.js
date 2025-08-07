// var, let, const
// var a;
// a = 1;
// a = 2.2;
// console.log(a+ " value of a");
// let b = 3;
// console.log(b,"value of b");

// const c = 2;
// c = 3;   //Error: Assignment to constant variable.
// console.log(c, " value of c");

// var i = 0;
// i++;
// console.log(i--);
// console.log(--i);

// >, <, >=, <=, ==, ===, !=

// let arr = [1,2,['ram',["shyam"]],3,4,5];
// console.log(arr[2][1][0]);
// console.log(arr[2][1].length);

// let obj = {name:"Himanshu", age: 21, address: "Indore"};
// console.log(obj["name"]);
// console.log(obj.name);

// let arrObj = [{name:"Himanshu", age: 21, address: "Indore"}, {name:"Vishal", age: 22, address: "Ujjain"}, {name:"Ram", age: 23, address: "Bhopal"}];
// console.log(arrObj[1].name);

// if ("abc") {
//     console.log("iff");
// }

// if (0) {
//     console.log("iff");
//     if (0) {
//         console.log("iff");
//     }else{

//     }
// } else {
//     if (0) {
//         console.log("iff");
//     } else {
//         console.log("else");
//     }
// }

// if (0) {
//     console.log("iff");
// } else if(0){
//     console.log("else");
// }
// let a = 5;
// for(i=1;i<=a;i++)
// {
//         let str=''
//     for(j=1;j<=a;j++)
//     {
//         if(i==1 || i == a)
//         {
//             str += "*"
//         }
//         else
//         {
//             if(j==1 || j == a)
//             {
//                 str += "*"
//             }
//             else
//             {
//                 str += " "
//             }  
//         }
//     }
//     console.log(str);
// }

// let arr = [1,2,3,4,5];
// arr.forEach((val,i)=>{
//     console.log(val,"=====",i);
// });

// let arr = [1,2,3,4,5];
// let newArr = arr.map(val=>val*2);
// let newArr = arr.map(val => {
//     let res = val*3;
//     return res;
// });
// console.log(newArr);

// let arrObj = [{name: "Himanshu", age: 21, address: "Mangliya"}, {name: "Vishal", age: 23, address: "Ujjain"},{name: "Yamini", age: 29, address: "Kutlya khedi"}]
// let newArr = arrObj.map(val=>{
//     return val.name+" "+val.age;
// });
// console.log(newArr);

// let arr = [1,2,3,4,5];
// let newArr = arr.filter(val => val > 3);
// let newArr = arr.filter(val => {
//     if(val > 3){
//         return val*2;
//     }
// });
// console.log(newArr);

// let arrObj = [{name: "Himanshu", age: 21, address: "Mangliya"}, {name: "Vishal", age: 23, address: "Ujjain"},{name: "Yamini", age: 29, address: "Kutlya khedi"}]

// let newArr = arrObj.filter(val => val.age>22);
// console.log(newArr);


// let arrObj = [{name: "Himanshu", last_name: "Bhadoriya", age: 21, address: "Mangliya"}, {name: "Vishal", last_name: "Sharma", age: 23, address: "Ujjain"},{name: "Yamini", last_name: "Chouhan", age: 29, address: "Kutlya khedi"}]

// let newArr = arrObj.filter(val => val.age>22);
// let newArr1 = newArr.map(val => val.name+" "+val.last_name);

// let newArr = arrObj.filter(val => val.age>22).map(val => val.name+" "+val.last_name);
// console.log(newArr);