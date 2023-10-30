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
//     let hotelprice=Number(hotelform.hotelprice.value);
//     let checkin=hotelform.checkin.value;
//     let guestno=Number(hotelform.guestno.value);
//     let roomno=Number(hotelform.roomno.value);
//     let roomtype=hotelform.roomtype.value;

//     let obj={
//         id,
//         location,
//         hotelname,
//         hotelprice,
//         checkin,
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
//     let hotelprice=Number(hotelform.hotelprice.value);
//     let checkin=hotelform.checkin.value;
//     let guestno=Number(hotelform.guestno.value);
//     let roomno=Number(hotelform.roomno.value);
//     let roomtype=hotelform.roomtype.value;

//     let obj={
//         id,
//         location,
//         hotelname,
//         hotelprice,
//         checkin,
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




const bUrl=`http://localhost:3000/Hoteldata`;

let hform=document.getElementById("hoteldata");
hform.addEventListener("submit",godata)

async function godata(){
    event.preventDefault ();

   let custdata=document.getElementById("hoteldata");
   let id=custdata.hid.value;
   let hoimage=custdata.himage.value;
   let honame=custdata.hname.value;
   let hoprice=Number(custdata.hprice.value);
  

   let hotobj={
    id,hoimage,honame,hoprice
   }
   console.log(hotobj)
   await fetch(`${bUrl}`,{
    method:"POST",
    body:JSON.stringify(hotobj),
    headers:{
        "Content-Type":"application/json"
    }
   })
}


let delbtn=document.getElementById("delbtn");
delbtn.addEventListener("click",deldata)

async function deldata(){
   
    let delid=document.getElementById("deleteid").value;
   
    await fetch(`http://localhost:3000/Hoteldata/${delid}`,{
        method:"DELETE",
    })
}