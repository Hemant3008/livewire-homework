function navbar(){
    return`
    <div class="navbar1">
            <img class="logoimg" src="../images/makemy_trip_logo.png" alt="logoimg">
            <div class="percentimg">
                <div class="a1">
                    <a href=""><img class="disc" src="../images/discount.png"  alt="discimg"></a>

                </div>  
               
                <div class="discount">
                    <a class="d1" href="">Super Offers</a>
                    <a class="d2" href="">Explore great deals & offers</a>
                </div>
            </div>
            <div class="biz">
                <div class="b1">
                    <a href=""><img class="bizlogo" src="../images/myBizLogo_light.avif" alt=""></a>
                </div>
                <div class="b2">
                    <a class="b2a" href="">Introducing myBiz</a>
                    <a class="b2b" href="">Business Travel Solution</a>
                </div>
                
            </div>
            <div class="sprite">
                <div class="c1">
                    <a href=""><img class="c1a" src="../images/sprite.jpg" alt=""></a>
                </div>
                <div class="c2">
                    <a class="c2a" href="">My Trips</a>
                    <a class="c2b" href="">Manage your bookings</a>
                </div>
            </div>
            <div class="a3">
                <a class="a3a" href="../pages/signup.html"><img src="../images/mycircle.png" alt=""></a>
                <a class="a3b" href="../pages/signup.html">Login or Create Account</a>
                <a class="a3c" href="../pages/signup.html"><i class="fa-solid fa-chevron-down"></i></a>

            </div>
            
            <div class="dropdown">
                
                <button  onclick="show()" class="dropbtn1"><img class="indiaflag" src="./images/india flag.png" alt=""> IN | ENG | INR  <i class="fa-solid fa-chevron-down" style="color: white;"></i></button>
                <form action="" id="rform">
                    <div class="selectcount" >
                        <select type="text" name="Select Country" id="country">
                            <option value="">Select Country</option>
                            <option value="">India</option>
                            <option value="">UAE</option>
                            <option value="">USA</option>
                        </select>
                   
                    </div>
                    <div class="f111">
                        <div class="language">
                            <h4>Select Language</h4>
                            <input class="f13" type="radio" name="language" value="">
                            <label for="">English</label><br>
                            <input class="f13" type="radio" name="language" value="">
                            <label for="">हिंदी</label><br>
                            <input class="f13" type="radio" name="language" value="">
                            <label for="">தமிழ்</label>
                           
                            
                        </div>
                        <div class="currency">
                            <h4>Select Currency</h4>
                            <input class="f13" type="radio" name="" value="">
                            <label for="">INR</label>
                        </div>
            
                    </div>
                    
                    
                    <div id="applybtn">
                        <button id="apply">Apply</button>
            
                    </div>
            
            
            </form>
            </div>

        </div>
`

}
export default navbar;