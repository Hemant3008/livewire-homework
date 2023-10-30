import React from 'react'

export default function Navbar() {
  return (
    <div>
       <div id="container">
        <div class="logo">
         <img  class="logoimg" src="myntra img.jpg" alt="logoimg"/>
        </div>
        <div class="links">
            <a href="">MEN</a>
            <a href="">WOMEN</a>
            <a href="">KIDS</a>
            <a href="">HOME & LIVING</a>
            <a href="">BEAUTY</a>
            <a href="">STUDIO</a>

        </div>
        <div class="search">
          <button class="searchbtn" onclick="welcome()"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
          <input class="searchbox" type="text" placeholder=" search for products, brands and more..... " />
        </div>
        <div class="icons">
          <div class="iconsa">
            <i id="ic" class="fa-regular fa-user"></i>
           <p class="icontxt" >profile</p>
          </div>
          <div class="iconsa">
            <i id="ic" class="fa-regular fa-heart"></i>
            <p class="icontxt">wishlist</p>

          </div>
          <div class="iconsa">
            <i id="ic" class="fa-sharp fa-solid fa-bag-shopping"></i>
            <p class="icontxt">Bag</p>

          </div>
        </div>
    </div>
    </div>
  )
}
