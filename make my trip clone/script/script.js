let dropbtn=document.getElementsByClassName("dropbtn1");

function show(){
    let rform=document.getElementById("rform");

    if(rform.style.display=="none")
    {
        rform.style.display="block";
    }
    else{
        rform.style.display="none";
    }
    
}



let images=[`https://hblimg.mmtcdn.com/content/hubble/img/delhi_hotels_tiow/mmt/activities/m_Le%20ROI%20Floating%20Huts_Eco%20Rooms_Tehri_Uttarakhand_l_550_821.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/seo_img/mmt/activities/m_Radisson_blu_image_seo_l_550_821.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/bangalore_hotel_tiow/mmt/activities/m_Waterwoods%20Lodges%20&%20Resorts_Kabini_l_550_821.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/collections/m_beach44_p_540_417.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/collections/m_hill_stations11_p_540_417.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/Australia/mmt/destination/m_Australia_destination_6_l_361_641.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/amritsar/mmt/destination/m_Amritsar_activity_heritage_l_684_1026.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com/content/hubble/img/collections/m_pilgrimage44_p_540_417.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/alleppey/mmt/destination/m_destination-alleppey-landscape_l_400_640.jpg?im=Resize=(400,462)`]
let card5=document.getElementById("card5");
let image1=document.createElement("img");
image1.setAttribute("class","hhh");
image1.src=images[0];

let image2=document.createElement("img");
image2.setAttribute("class","hhh");
image2.src=images[1];

let image3=document.createElement("img");
image3.setAttribute("class","hhh");
image3.src=images[2];

let image4=document.createElement("img");
image4.setAttribute("class","hhh");
image4.src=images[3];

let image5=document.createElement("img");
image5.setAttribute("class","hhh");
image5.src=images[4];
card5.append(image1,image2,image3,image4,image5);
let i=1


let setint=setInterval(mycarousel,4000);
function mycarousel(){
    card5.innerHTML="";
    if(i>images.length)
    {
        i=0
    }
    image1=document.createElement("img");
    image1.setAttribute("class","hhh");
    image1.src=images[i++];

    if(i>images.length)
    {
        i=0
    }
    image2=document.createElement("img");
    image2.setAttribute("class","hhh");
    image2.src=images[i++];

    if(i>images.length)
    {
        i=0
    }
    image3=document.createElement("img");
    image3.setAttribute("class","hhh");
    image3.src=images[i++];

    if(i>images.length)
    {
        i=0
    }
    image4=document.createElement("img");
    image4.setAttribute("class","hhh");
    image4.src=images[i++];

    if(i>images.length)
    {
        i=0
    }
    image5=document.createElement("img");
    image5.setAttribute("class","hhh");
    image5.src=images[i++];

    i=i-4;
    if(i<0)
    {
       i=0 
    }
    card5.append(image1,image2,image3,image4,image5);


}


function upbuttonoperated(i){
    card5.innerHTML="";
   clearInterval(setint);
    if(i>=images.length)
    {
        i=0
    }
let image1=document.createElement("img");
image1.setAttribute("class","hhh");
image1.src=images[i++];
if(i>=images.length)
{
    i=0
}


let image2=document.createElement("img");
image2.setAttribute("class","hhh");
image2.src=images[i++];
if(i>=images.length)
{
    i=0
}

let image3=document.createElement("img");
image3.setAttribute("class","hhh");
image3.src=images[i++];
if(i>=images.length)
{
    i=0
}

let image4=document.createElement("img");
image4.setAttribute("class","hhh");
image4.src=images[i++];
if(i>=images.length)
{
    i=0
}

let image5=document.createElement("img");
image5.setAttribute("class","hhh");
image5.src=images[i++];
if(i>=images.length)
{
    i=0
}
i=i-4;
if(i<0)
{
    i=images.length  
}
 card5.append(image1,image2,image3,image4,image5)
}

function prev5(){
 
    clearInterval(setint)
    i++
    if(i>=images.length)
    {
     i=0
    }
    upbuttonoperated(i)
}

function next5(){
    clearInterval(setint)
    i--
    if(i<0)
    {
     i=images.length-1
    }
    

    upbuttonoperated(i)
}



let photos=[`https://hblimg.mmtcdn.com//content/hubble/img/narkanda/mmt/destination/m_Narkanda_l_372_902.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/yercaud/mmt/destination/m_destination-yercaud-landscape_l_400_640.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/dooars/mmt/destination/m_Dooars_l_457_685.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/saputara/mmt/destination/m_destination-saputara-landscape_l_400_640.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/dhanaulti/mmt/destination/m_Destination_Dhanaulti_l_534_801.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/mandarmani/mmt/destination/m_destination-mandarmoni-landscape_l_400_640.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/malvan/mmt/destination/m_Malvan_l_636_847.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/yelagiri/mmt/destination/m_destination_yelagiri_landscape_l_340_544.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/araku/mmt/destination/m_destination_Araku%20Valley_landscape_l_400_640.jpg?im=Resize=(400,462)`,`https://hblimg.mmtcdn.com//content/hubble/img/sasan/mmt/destination/m_destination_sasan_gir_l_400_640.jpg?im=Resize=(400,462)`]
let card6=document.getElementById("card6");
let photo1=document.createElement("img");
photo1.setAttribute("class","hhh");
photo1.src=images[0];

let photo2=document.createElement("img");
photo2.setAttribute("class","hhh");
photo2.src=images[1];

let photo3=document.createElement("img");
photo3.setAttribute("class","hhh");
photo3.src=images[2];

let photo4=document.createElement("img");
photo4.setAttribute("class","hhh");
photo4.src=images[3];

let photo5=document.createElement("img");
photo5.setAttribute("class","hhh");
photo5.src=images[4];
card5.append(photo1,photo2,photo3,photo4,photo5);
i=1;
let setinter=setInterval(carousel,4000);
function carousel(){
    card6.innerHTML="";
    if(i>photos.length)
    {
        i=0
    }
    photo1=document.createElement("img");
    photo1.setAttribute("class","hhh");
    photo1.src=photos[i++];

    if(i>photos.length)
    {
        i=0
    }
    photo2=document.createElement("img");
    photo2.setAttribute("class","hhh");
    photo2.src=photos[i++];

    if(i>photos.length)
    {
        i=0
    }
    photo3=document.createElement("img");
    photo3.setAttribute("class","hhh");
    photo3.src=photos[i++];

    if(i>photos.length)
    {
        i=0
    }
    photo4=document.createElement("img");
    photo4.setAttribute("class","hhh");
    photo4.src=photos[i++];

    if(i>photos.length)
    {
        i=0
    }
    photo5=document.createElement("img");
    photo5.setAttribute("class","hhh");
    photo5.src=photos[i++];

    i=i-4;
    if(i<0)
    {
       i=0 
    }
    card6.append(photo1,photo2,photo3,photo4,photo5);


}


function lowbuttonoperated(i){
    card6.innerHTML="";
    if(i>=photos.length)
    {
        i=0
    }
let photo1=document.createElement("img");
photo1.setAttribute("class","hhh");
photo1.src=photos[i++];
if(i>=photos.length)
{
    i=0
}


let photo2=document.createElement("img");
photo2.setAttribute("class","hhh");
photo2.src=photos[i++];
if(i>=photos.length)
{
    i=0
}

let photo3=document.createElement("img");
photo3.setAttribute("class","hhh");
photo3.src=photos[i++];
if(i>=photos.length)
{
    i=0
}

let photo4=document.createElement("img");
photo4.setAttribute("class","hhh");
photo4.src=photos[i++];
if(i>=photos.length)
{
    i=0
}

let photo5=document.createElement("img");
photo5.setAttribute("class","hhh");
photo5.src=photos[i++];
if(i>=photos.length)
{
    i=0
}
i=i-4;
if(i<0)
{
    i=photos.length  
}
 card6.append(photo1,photo2,photo3,photo4,photo5)
}

function prev6(){
 

    clearInterval(setint)
    i++
    if(i>=photos.length)
    {
     i=0
    }
    lowbuttonoperated(i)
}

function next6(){
    
    clearInterval(setint)
    i--
    if(i<0)
    {
     i=photos.length-1
    }
    

    lowbuttonoperated(i)
}