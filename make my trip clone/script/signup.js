const baseUrl=` http://localhost:3000/usersignupdata`;

async function signupdata(){
    event.preventDefault();

    let signcont=document.getElementById("accform");
    let name=signcont.name.value;
    let password=signcont.password.value;
    let todayd=signcont.date.value;
    let gend=signcont.gender.value;

    let obj={
        name,password,todayd,gend
    }
    try{
        await fetch(`${baseUrl}`,{
            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        alert ("sign up successfull please Login")
    }
    catch(error){
        alert("Enter correct Details")
    }
    
}

async function deletedata(){

    let deleteid=document.getElementById("deleteid").value;

    await fetch (`http://localhost:3000/usersignupdata/${deleteid}`,{
        method:"DELETE"
    })
    
}

formlogin.addEventListener("submit",function(){
    event.preventDefault();
    let formlogin=document.getElementById("formlogin");
    
    let name=formlogin.name.value;
    let pass=formlogin.password.value;

   let object={name,pass}
   console.log(object)

   check(object);
})

async function check(object){

    try{
        let data=await fetch (`http://localhost:3000/usersignupdata?name=${object.name}`)
        let realdata=await data.json();
        console.log(realdata);
        console.log(object);

        if(realdata.length==0)
        {
            alert("wrong username and password")
        }
        else if(realdata[0].password==object.pass)
        {
            alert("login success")
        }
        else{
            console.log(realdata.password+"       "+object.pass);
            alert("wrong password")
        }
    }

    catch(error){

    }
}




