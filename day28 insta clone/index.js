
document.getElementById("loginform").addEventListener("submit",function(){
event.preventDefault();
// document.getElementById("loginform").addEventListener("Log in",function(){
//     event.preventDefault();
let user={}
let username=document.getElementbyId("username").value
let Password=document.getElementbyId("Password").value

user["username"]=username;
user["Password"]=Password;
console.log(username, Password)
console.log(user)
})