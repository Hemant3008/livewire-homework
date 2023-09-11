
import navbar from "../components/navbar.js";
let nav_div=document.getElementById("navbar_div");

nav_div.innerHTML=navbar();



let rr=document.getElementById("rform")
rr.addEventListener("submit",show)
function show(){
    console.log('indise')
    let rform=document.getElementById("rform");

    if(rform.style.display=="none")
    {
        rform.style.display="block";
    }
    else{
        rform.style.display="none";
    }
    
}


// const baseUrl=`http://localhost:3000/hoteldata`;

// let form=document.getElementById("hotel_form")
// form.addEventListener("submit",gdata)
// async function gdata()
// {
    
//     event.preventDefault()
//     let hotelform=document.getElementById("hotel_form");
//     let id=hotelform.fid.value;
//     let location=hotelform.location.value;
//     let hotelname=hotelform.hotelname.value;
//     let custname=hotelform.custname.value;
//     let hotelprice=Number(hotelform.hotelprice.value);
//     let checkin=hotelform.checkin.value;
//     let checkout=hotelform.checkout.value;
//     let guestno=Number(hotelform.guestno.value);
//     let roomno=Number(hotelform.roomno.value);
//     let roomtype=hotelform.roomtype.value;

//     let obj={
//         id,
//         location,
//         hotelname,
//         custname,
//         hotelprice,
//         checkin,
//         checkout,
//         guestno,
//         roomno,
//         roomtype
//     }
//     console.log(obj)
//     await fetch(`${baseUrl}`,{
//         method:"POST",
//         body:JSON.stringify(obj),
//         headers:{
//             "Content-Type":"application/json"
//         }
        
//     })


// }
//  let data=document.getElementById("hotelupdate");
//  data.addEventListener("submit",updata)

// async function updata()
// {

//     event.preventDefault()
//     let hotelform=document.getElementById("hotelupdate");
//     let id=hotelform.fid.value;
//     let location=hotelform.location.value;
//     let hotelname=hotelform.hotelname.value;
//     let custname=hotelform.custname.value;
//     let hotelprice=Number(hotelform.hotelprice.value);
//     let checkin=hotelform.checkin.value;
//     let checkout=hotelform.checkout.value;
//     let guestno=Number(hotelform.guestno.value);
//     let roomno=Number(hotelform.roomno.value);
//     let roomtype=hotelform.roomtype.value;

//     let obj={
//         id,
//         location,
//         hotelname,
//         custname,
//         hotelprice,
//         checkin,
//         checkout,
//         guestno,
//         roomno,
//         roomtype
//     }
//     console.log(obj)
//     await fetch(`${baseUrl}/${id}`,{
//         method:"PATCH",
//         body:JSON.stringify(obj),
//         headers:{
//             "Content-Type":"application/json"
//         }
        
//     })

// }


// let delbtn=document.getElementById("delbtn");
// delbtn.addEventListener("click",deldata)

// async function deldata(){
   
//     let delid=document.getElementById("deleteid").value;
   
//     await fetch(`http://localhost:3000/hoteldata/${delid}`,{
//         method:"DELETE",
//     })
// }

const bUrl=`http://localhost:3000/Customerdata`;

let containbox= document.getElementById("containbox");
window.onload= paginate(1)

let button=document.getElementById("allhotel")
button.addEventListener("click",submitted)
async function submitted(){
    containbox.innerHTML=" ";
     try{
        let mydata=await fetch(`${bUrl}`)
        let finaldata=await mydata.json();
        finaldata.forEach(display);

     }
     catch{
        console.log("error")
     }
}

function display(el,i,arr){
    let card = document.createElement("div");
    card.setAttribute("class","card");
    let hotelimage= document.createElement("img");
    hotelimage.src=el.hoimage;
    hotelimage.setAttribute("class","himage");
    let hotelname= document.createElement("h1");
    hotelname.innerText=el.honame;
    hotelname.setAttribute("class","hotelname");
    let hotelprice = document.createElement("h2");
    hotelprice.innerText= el.hoprice+"/day";
    hotelprice.setAttribute("class","hoprice")
    let button=document.createElement("button");
    button.innerText="Book Now"
    button.addEventListener("click",loadfun);
    card.append(hotelimage,hotelname,hotelprice,button);
    containbox.append(card);
}


let button2=document.getElementById("htlbtn");
let button3=document.getElementById("lthbtn");
button2.addEventListener("click",sort_htl)
async function sort_htl(){
    console.log("btn1");
    containbox.innerHTML=" ";

    try{
        let mydata=await fetch(`${bUrl}?_sort=hoprice&_order=desc`);
        let finaldata= await mydata.json();
        finaldata.forEach(display)
    }
    catch{
        console.log("error")
    }
}
button3.addEventListener("click",sort_lth)
async function sort_lth(){
    containbox.innerHTML= " ";
    console.log("btn2");
    try{
        let mydata= await fetch(`${bUrl}?_sort=hoprice&_order=asc`)
        let finaldata = await mydata.json();
        finaldata.forEach(display)
    }
    catch{
        console.log("error")
    }
}

function loadfun(){
window.location.href="https://www.makemytrip.com/"
}
let paginateb=document.getElementById("paginatebox");
paginateb.addEventListener("click",paginate)
async function paginate(value){
    containbox.innerHTML= "";
    console.log("inside")

    try{
        let mydata= await fetch(`${bUrl}?_page=${value}&_limit=10`)
        let finaldata= await mydata.json();
        finaldata.forEach(display);
    }
    catch{
        console.log("error")
    }
}

