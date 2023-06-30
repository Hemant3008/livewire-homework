let arr=[]
document.getElementById("loginform").addEventListener("submit",function(){
event.preventDefault();
// document.getElementById("loginform").addEventListener("Log in",function(){
//     event.preventDefault();
let user={}
let uname=document.getElementById("uname").value
let pass=document.getElementById("pass").value

user["username"]=uname;
user["Password"]=pass;
console.log(uname, pass)
// console.log(user)
})

// arr.push(user);
// console.log(arr)
// // localStorage.clear()
// localStorage.setItem("userdata")