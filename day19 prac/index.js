// let mat= [ ["a","b","c","d","e"], 
//            ["f","g","h","i","j"],
//            ["k","l","m","n","o"],
//            ["p","q","r","s","t"],
//            ["u","v","w","x","y"]]



//  traverse z 
//  output - e d c b a g m s y x w v u 

// let i=0;
// let j=4;
// let p=mat[0].length-1
// let bag=" ";
// while(j>=0){
//     bag=bag+mat[i][j]+" "
//     j--;
// }
// i=1;
// j=mat.length-4;
// while(i>=0 && j<=p){
//     bag=bag+mat[i][j]+" ";
//     i++; j++;
// }
// i=mat.length-1;
// j=mat.length-2;
// while(j>=0){
//     bag=bag+mat[i][j]+" ";
//     j--;
// }
// console.log(bag);




// let mat= [ ["a","b","c","d","e"], 
//            ["f","g","h","i","j"],
//            ["k","l","m","n","o"],
//            ["p","q","r","s","t"],
//            ["u","v","w","x","y"]]

// // output -abcde joty xwvu pkf

// let i=0;
// let j=0;
// let p= mat[0].length-1;
// let bag=" ";
// while(j<=p){
//     bag=bag+mat[i][j]+" ";
//     j++;
// }
// i=1;
// j=p;
// while(i<=p){
//     bag=bag+mat[i][j]+" ";
//     i++;
// }
// i=p;
// j=mat.length-2;
// while(j>=0){
//     bag=bag+mat[i][j]+" ";
//     j--;
// }
// i=p-1;
// j=0;
// while(i>0){
//     bag=bag+mat[i][j]+" ";
//     i--;
// }
// console.log(bag);


let mat= [["a", "b", "c", "d"],
          ["e", "f", "g", "h"],
          ["i", "j", "k", "l"]]

let i=0;
let j=0;
let p=mat[0].length-1;
let bag=" ";

while(j<=p){
    bag=bag+mat[i][j]+" ";
    j++;
}
i=1;
j=p;
while(i<=2){
    bag=bag+mat[i][j]+" ";
    i++;
}
i=2;
j=p-1;
while(j>=0){
    bag=bag+mat[i][j]+" ";
    j--;
}
i=1;
j=0;
while(i>0){
    bag=bag+mat[i][j]+" ";
    i--;
}
console.log(bag);


let arr= ["1","0","2","3","4","5"] ;
 
 //% operator give output as 1 if num is odd else if number is even it gives outputn as 0


 let l=arr.length;
let even=0;
let odd=0;


for(let i=0;i<l;i++){
    
   if(arr[i]%2==0){
        even+=+arr[i];
        

    }else{
        odd+=+arr[i];
    
    
     }
    }
    console.log(even,odd)
