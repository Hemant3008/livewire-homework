// let collection=[["a","b","c"],
//                 ["d","e","f"],
//                 ["g","h","i"],
//                 ["j","k","l"]];

//  output ->l,k,j,i,h,g,f,e,d,c,b,a ;

// let bag=" ";

// for(let i=3;i>=0; i--){

//     for(let j=2;j>=0;j--)
//     {
    
//         bag=bag+collection[i][j]+" ";
//     }
// }
// console.log(bag);

let arr=     [["a","b","c"],
              ["d","e","f"],
              ["g","h","i"]];


for(let i=0;i<3;i++){
    let bag=" "
    if(i==0 || i==2)
    {
        for(let j=0;j<3;j++);
        {
            bag=bag+arr[i][j]+" ";
        }
    elseif(i==1)
    {
        for( let j=1;j<2;j++);
        {
            if(j==0 || j==2 )
            {
                bag=bag+" ";
            }
        }
    }

    } console.log(bag);
}