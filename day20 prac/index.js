// 1-push
//  2-pop
//  3-top print 
let stk=[10,20,30,40,50,60];

// if 1 is pressed push the element 
// if 2 is pressed pop the element form arr
// if 3 is pressed print top 

// 1 12
// 1 5
// 1 6
// 2 
// 3
// 1 89
// 3
// 2
// 1 98 
// print arr

// output-{10,20,30,40,50,60,12,5,98}
let leng=stk.length

stk.push(12);
stk.push(5);
stk.push(6);
console.log("stk.push() ex"+stk);
stk.pop();
console.log("stk.pop() ex"+stk);
let topp=stk[stk.length-1];
console.log(topp);
stk.push(89);
console.log("stk.push() ex"+stk);
topp=stk[stk.length-1];
console.log(topp);
stk.pop();
console.log("stk.pop() ex"+stk);
stk.push(98);
console.log("stk.push() ex"+stk);


// if else
num1=25
num2 =65
num3 =20


// if num1 is greater than num2 print num1 is greate
// if num2 is greater than num1 print num2 is greate
// if addition  of num1 and num2 is greater than num 3  print "addition num1 and num2  is greater than num3"

if(num1>num2){
    console.log("num1 is greater than num2")
}
else if (num2>num1) {
    console.log("num2 is greater than num1")
}
if(num1+num2>num3){
    console.log("addition num1 and num2  is greater than num3")
}
else{
    console.log("addition num1 and num2  is less than num3")
}



// let mat= [ ["a","b","c"], 
//            ["f","g","h"],
//            ["k","l","m"]
//          ]

// //  traverse z 
// //  output - a g m c g k 

//  let i=0;
//  let j=0;
//  let bag=" ";
//  p=mat[0].length-1

//  while(j<=p){
//     bag=bag+mat[i][j]+" ";
//     i++;j++;
//  }
//  i=0;
//  j=2;
//  while(j>=0){
//     bag=bag+mat[i][j]+" ";
//     i++;j--;
//  }

//  console.log(bag);
