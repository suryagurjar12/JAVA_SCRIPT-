// let num = prompt("enter a number");

// if (num % 5 ===0){
//     console.log(num ,"is a multiple 5");
// }
// else{
//     console.log(num ,"is not a multiple of 5");
// }

//-----loops ------------------------//

//for (let i =1; i<=10; i++){
   // console.log("surya Gurjar");
//}

// sum =0;
// for (let i =1; i<=5; i ++) {
//     sum = sum +i;
// }
// console.log("sum=",sum);

// ----------while loop ---------------------//

// let i = 1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// ----------------Do while Loop ---------------------//

// let i= 10;
// do{
//     console.log("i=",i);
//     i++;

// }while (i<=20);
//   --------------for of loopds ---------------------//

// let str = "surya Gurjar";
// for (let i of str){
//     console.log(i);
// }

// --------size of lenght----for of loops-------//

// let str = "javaScript_Programmming";
// let size =0;
// for (let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("size=", size);

// ---------------for in loop---------------------//
// let student={
//     name :"rahul kumar",
//     age:22,
//     rollno:101,
//     cgpa:7.4,
//     ispass:true,
// }
// for (let key in student){
//     // console.log("key=",key,);
//     console.log("key=",key,"values=",student[key]);    //value check karne key liye yese use karte hai 

// }


// ----------practice Questions-------//
// Q.1 - print all even numbers from 0 to 100

//solve --
// for (let num=0; num<=100; num++){
//     if (num%2===0){
//         console.log("num=",num );
//     }
// }

//-----------Quiestions no 2---------------------//
//  create a game where you start with any random game number . Ask the user to keep guessing the number until the user enter correct value ...

// let game_num =25;
// let user_num= prompt("Guess the game number :");
// while (user_num != game_num){
//     user_num= prompt("your entered number wrong . guess again :");

// }
// console.log ("congratulation your entered number is correct number :");


// -----unlock the your lock code   practice  --------//

// let Lock_num =2535;
// let user_num= prompt("enter unclock the  number :");
// while (user_num != Lock_num){
//     user_num= prompt("your entered number wrong . guess again :");

// }
// console.log ("congratulation your entered number is correct number :Enjoy your day");

// -------------------string-------------//
//Q.1 prompt the user to enter thair fulll name .
 //generate a username for them based on the input .
  //start username with @ followed by thair fullname and ending whith  the full name lenght 

let fullName = prompt("enter the Fullname without space");
let userName = "@" + fullName + fullName.length;
console.log(userName);