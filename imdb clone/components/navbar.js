function navbar(){
    return `
    <div id="navbar">
        <img class="imdimg" src="./img/im .png" alt="imdb img">
        <div class="menubar">
            <i class="fa-solid fa-bars fa-xl"></i>
            <a href="">Menu</a>

        </div>
        <div class="searchbar">
            <p >All</p>
            <input type="text" id="input"  placeholder="Search IMDb">
            <button onclick="submited()"> <i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
           

        </div>
        <div class="iimg">
            <img class="im" src="./img/imdb img.png" alt="imdbpro img">

        </div>
        <div class="watchlist">
     
            <i class="fa-solid fa-bookmark fa-xl"></i>
            <a href="">Watchlist</a>
        
        </div>
        <div class="sign">
            <a class="sa" href="../pages/signup.html">Sign in</a>
            <a class="sb" href="">EN</a>
            
        </div>

    </div>

    
    
    `
}

export default navbar ;