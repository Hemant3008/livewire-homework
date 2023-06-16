// print the pattern 
// use for and if else
// * * * *  *
// *        *
// *        *
// *        *
// * * * *  *
 

for(let i=1;i<=5;i++){
    let pattern=""
  if(i==1||i==5){
      
    for( let j=0;j<=5;j++){
        pattern=pattern+"* "

    }

  }else{
      
    for (let j=0;j<=5;j++){
     if(j==2||j==3||j==4){
        pattern=pattern+"  "
     }else{
        pattern=pattern+"* "

     }
          
    }
    

  }
  console.log(pattern);
  
  
 
}

// find the factorial of 15 using ascending loop

// let num=1;
// for(i=1; i<=15; i++){
//     num=num*i
// }
// console.log(num);


// arrays 

let car="volvo"
let car2="ford"
let car3="tata"

let k=0 ;
do{

    console.log(car[k])
  k++;
}while(k<lenArr);
 console.log(car);


 