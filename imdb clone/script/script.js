import navbar from "../components/navbar.js";

let nav_div =document.getElementById("navbar_div");
nav_div.innerHTML=navbar();

let input= document.getElementById("input");
input.addEventListener("input",debounce)


let container1=document.getElementById("container1")

async function submited(){
    container1.innerHTML="";
  let inputval =document.getElementById("input").value;
  try{
    let mydata= await fetch(`https://www.omdbapi.com/?s=${inputval}&apikey=681b4d2b`);
    let finaldata= await mydata.json();
    finaldata.Search.forEach(display);
  }
  catch{
    console.log("error")
  }


  
}


function display(el,i,arr){
    
    console.log("elements----"+"  "+el.Title+el.Year+"   index"+i)
    let card=document.createElement("div");
    card.setAttribute("class","card");
    let poster=document.createElement("img");
    poster.src=el.Poster;
    poster.setAttribute("class","poster");
    let title=document.createElement("h3");
    title.innerText="Title: "+el.Title;
    title.setAttribute("class","title");
    let year=document.createElement("h3");
    year.innerText="Year: "+el.Year;
    year.setAttribute("class","year");
    let ID=document.createElement("h3");
    ID.innerText="ID: "+el.imdbID;
    ID.setAttribute("class","imdbID");
    let type=document.createElement("h3");
    type.innerText="Type: "+el.Type;
    type.setAttribute("class","type")


    card.append(poster,title,year,ID,type);
    container1.append(card);

}

let id;
function debounce(){

    if (id){
        clearTimeout(id);
    }

    id= setTimeout(function(){

        submited();

    },3000)


}



