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

// let fullName = prompt("enter the Fullname without space");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

// ----------------Array-------------------//

// collections of items 

// let marks= [97,23,75,64,36];
// console.log(marks);
// console.log(marks.length)   // array lenght


// --------stirng type array ---------------------//

// let student=["ram","surya","siddharth","mehak","rahul","ankit"];
// console.log(student);
// console.log(student[2   ]="Gurjar");

//------------for loop useing array---------------------//
// let names=['ram','surya','siddh','mehak','rahul']

// for (let i = 0; i < names.length; i++) {
//    console.log(names[i]);
//}

//-------- using for of loop -----//

// let cities =['mumbai','pune','hydrabad','gurgaon','dehli']

// for( let city of cities ){
//    console.log(city);
// }

//------------practice----------------------

// Q.1 for a given array with marks of student [85,97,44, 37, 76,60]. FIND THE AVERAGE marks of th entier class 

// let marks = [85, 97, 44, 37, 76, 60];
// let sum =0;
// for (let val of marks){
//    sum += val;

// }
// let avg= sum/ marks.length;
// console.log(`average marks of the class = ${avg}`);
// console.log(sum);

// Q.2 for a given array with price of 5 items [250, 645, 300, 900,50] All items have an offer of 10% off on items ,Change the array to store final after applying the offer ?

let items =[250, 645, 300, 900,50];

for (let i= 0; i<items.length; i++){
   console.log(items[i]); // array ki purani value ko dekhne ke liye use kiya hai 
   let offer= items[i]/10;
   items[i] -= offer ;

}
console.log(items);