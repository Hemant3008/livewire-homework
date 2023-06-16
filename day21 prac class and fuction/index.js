

// =============================================================================================
// create a  class for mahindra  company where have some properties  such as  power steering , ac , type , name , ......;

class Mahindra{
    constructor(name){
        this.name =name;
        this.powersteering="yes";
        this.ac="yes";
        this.type="4 wheel drive";

    }

}
let thar = new Mahindra("thar");
let xuv700 = new Mahindra("xuv700");
let xuv300 = new Mahindra("xuv300");
let scorpioclassic = new Mahindra("scorpioclassic");
console.log(thar,xuv700,xuv300,scorpioclassic)



//  =============================================================================================
// Print the numbers from 12 to 24

// let arr=[12,13,14,15,16,17,18,19,20,21,22,23,24];
// let bag=" ";
// for(let i=0;i<arr.length;i++){
//     bag=bag+arr[i]+" ";
// }
// console.log(bag);

// (verticlly print)
console.log("-=-=-=-=-=============================================================================================")
//24 to 50    i=24 , 25 ,26______________________________50 51   
// bag=" ";             
// for(let i=24; i<=50;i++){

//     console.log(i)


// }
console.log("-=-=-=-=-=============================================================================================")

//  =============================================================================================
// Print the ODD numbers from 7 to 31

let i=7;
while(i<=31){
    if(i%2==1){
        console.log(i)
    }
    i++;
}

// ========================================================================

//  Print the EVEN numbers from 10 to 20

for ( i=10;i<=20;i++){
   if(i%2==0){
    console.log(i)
   }
}

// =======================================================================
// Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

// for(i=1;i<=45;i++){
//     if(i%3==0){
//         console.log((i)+ " Fizz")
//     }
//     if(i%5==0){
//         console.log((i)+ " Buzz")
//     }
//     if((i%3==0)&&(i%5==0)){
//         console.log((i)+ " FizzBuzz")
//     }
// }

for(let i=1;i<=45;i++){
    if((i%3==0)&&(i%5==0)){
        console.log((i)+ "  FizzBuzz")
    }
    else if(i%3==0){
        console.log((i)+ " Fizz")
    }
    else if(i%5==0){
                console.log((i)+ " Buzz")
       }
    



}






// ========================================================================
// Print all the elements of the following array

var thisIsAnArray = ["element1", "element2", "element3", "element4"];
 bag=" ";

 for(i=0;i<thisIsAnArray.length;i++){
    bag=bag+thisIsAnArray[i]+" ";
 }
 console.log(bag);

// ============================================================================
// Calculate the sum of all the numbers in the following array
bag=0;
var numbersArray = [1,13,22,123,49];
var l=numbersArray.length

for(i=0;i<numbersArray.length;i++){
    bag=bag+numbersArray[i]
}
console.log(bag);

// =============================================================================

// function `isEvenOrOdd()` checks if input number is even or odd by using “%” operator in JavaScript.

// Print “Number is even” if the number is divisible by 2.
// Else print “Number is odd” if the number returns a remainder when divided by 2.

function isEvenOrOdd(i){
    if(i%2==0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }

}
isEvenOrOdd(59)
console.log("-=-=-=-=-=============================================================================================")


// ==============================================================================
//  Find the largest of two number
// Function `findLargest()` finds the largest between two number by using “>” and “=” operator in JavaScript.

// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

function findLargest(num1,num2){
    if(num1>num2){
        console.log(" num1 is the largest");
    }
    else if(num1<num2){
        console.log(" num2 is the largest");
    }else{
   console.log(" num1 and num2 are equal")
    }
}
findLargest(50,50)

// ===================================================================================
// Check if a triangle is equilateral, scalene, or isosceles
// Function `findTriangleType()` finds the type of the triangle for given side values by using “==” and “&&” operator in JavaScript.
// function findTriangleType(side1,side2,side3){

// if ..........else 


// }
//  findTriangleType(8,9,8)


// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.
console.log("-=-=-=-=-=============================================================================================")
function findTriangleType(side1,side2,side3){
    if((side1==side2)&&(side2==side3)){
        console.log("Equilateral triangle.")
    }
    else if((side1==side2)||(side2==side3)||(side1==side3)){
        console.log("Isosceles triangle.")
    }else{
        console.log("Scalene triangle.")
    }
}
findTriangleType(8,7,9);

// ======================================================================================
// Find the a number is present in given range
// Function `checkInRange()` finds if the given number is within the provided start and end range using >=, <= and && operators in JavaScript.

// Print “Between the range” if num is between start and end values
// Else Print “Outside the range” since num is outside start and end values.
 


// function checkInRange(num){

//     if(num<=1){
//         console.log("start value");
//     }
//     if(num==50){
//         console.log("end value");
//     }
//     if((num>=2)&&(num<=49)){
//         console.log("Between the range");
//     }
//     if(num>50){
//         console.log("Outside the range")
//     }
// }
// checkInRange(0)

 // [1-50]

 console.log("-=-=-=-=-=============================================================================================")
function checkInRange(num){

    if(num<=1){
        console.log("start value");
    }
    else if((num>=2)&&(num<=49)){
        console.log("Between the range");
    }
    else if(num==50){
        console.log("end value");
    }
    else{
        console.log("Outside the range")
    }
}
checkInRange(58)


// ======================================================================================
// Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.

// function findGrade(marks){

//     if((marks>90)&&(marks<=100)){
//         console.log("S grade")
//     }
//     if((marks>80)&&(marks<=90)){
//         console.log("A grade")
//     }
//     if((marks>70)&&(marks<=80)){
//         console.log("B grade")
//     }
//     if((marks>60)&&(marks<=70)){
//         console.log("C grade")
//     }
//     if((marks>50)&&(marks<=60)){
//         console.log("D grade")
//     }
//     if((marks>40)&&(marks<=50)){
//         console.log("E grade")
//     }
//     if((marks>=0)&&(marks<=40)){
//         console.log("Student has failed")
//     }
//     if(marks>100){
//         console.log("Invalid marks")
//     }
// }
// findGrade(101)


//100-200
let plot=0;
for(let i=1;i<=10;i++){
  plot= plot+i;

}
console.log(plot);

////24-50 addi con
// plot=0;
// for(let i=24; i<=50; i++){
//     plot=plot+i
//     console.log(plot);
// }
// console.log(plot);


// ======================================================================================
// Find the grade for input marks
// Function `findGrade()` to find the grade of the student based on the input marks.

// Print “S grade” if marks is between 90 and 100.
// Print “A grade” if marks is between 80 and 90.
// Print “B grade” if marks is between 70 and 80.
// Print “C grade” if marks is between 60 and 70.
// Print “D grade” if marks is between 50 and 60.
// Print “E grade” if marks is between 40 and 50.
// Print “Student has failed” if marks is between 0 and 40.
// Else print “Invalid marks”.



// function findgrade(marks){
//     if((marks>=0)&&(marks<=40)){
//     console.log("Student has failed")
//     }
//     else if((marks>40)&&(marks<=50)){
//         console.log("E grade")
//     }
//     else if((marks>50)&&(marks<=60)){
//         console.log("D grade")
//     }
//     else if((marks>60)&&(marks<=70)){
//         console.log("C grade")
//     }
//     else if((marks>70)&&(marks<=80)){
//         console.log("B grade")
//     }
//     else if((marks>80)&&(marks<=90)){
//         console.log("A grade")
//     }
//     else if((marks>90)&&(marks<=100)){
//         console.log("S grade")
//     }
//     else{
//         console.log("Invalid marks")
//     }

// }
// findgrade(110)

// Print the numbers from 12 to 24 horizontally
let pocket=" ";
for(i=12;i<=24;i++){
    pocket=pocket+i+" ";
}
console.log(pocket);