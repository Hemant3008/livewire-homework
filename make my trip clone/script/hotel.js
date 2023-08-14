import navbar from "../components/navbar.js";
let nav_div=document.getElementById("container1");
let logoimg=document.getElementsByClassName("logoimg");
logoimg.src="./images/makemy trip logo.png";
nav_div.innerHTML=navbar();


const baseUrl=`http://localhost:3000/hoteldata`

async function getdata(){
    event.preventDefault()
    let hotelform=document.getElementById("hotel_form");
    let location=hotelform.location.value;
    let hotelname=hotelform.hotelname.value;
    let custname=hotelform.custname.value;
    let hotelprice=Number(hotelform.hotelprice.value);
    let checkin=hotelform.checkin.value;
    let checkout=hotelform.checkout.value;
    let guestno=Number(hotelform.guestno.value);
    let roomno=Number(hotelform.roomno.value);

}