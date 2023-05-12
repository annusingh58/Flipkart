function signup(event){
    event.preventDefault()
    alert("working");



    var name =document.getElementById("fname").value;
    var email =document.getElementById("femail").value;
    var password =document.getElementById("fpassword").value;
    var confirmpassword =document.getElementById("fconfirmpassword").value;


    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password == confirmpassword){
                var ls=JSON.parse(localStorage.getItem ("flipkartusers")) || [] 
                var flag = false;

                 for(i=0;i<ls.length;i++){
                    

                   if (ls[i].uemail == email){
                        flag=true;
                   }
                }
                if(flag==true){
                    alert("email already exist");
                }
                else{
                    var flipkart ={uname:name, uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                       ls.push(flipkart) ;
                    localStorage.setItem("flipkartusers",JSON.stringify(ls));
                        alert("sign up successfully");
                        document.getElementById("fname").value='';
                        document.getElementById("femail").value='';
                        document.getElementById("fpassword").value='';
                        document.getElementById("fconfirmpassword").value='';
                        
                         window.location.href="./login.html"

                    }  
                }
            else{
               console.log ("password not match");
            }
        }
        else{
            console.log("password should be more then 8 digit");
        }
         
        }

     else{
        console.log("all field are required");
    }

}
function Login(event){
    event.preventDefault();

    var email=document.getElementById("lemail").value;
    var pass=document.getElementById("lpassword").value;
    var flipkart_currentuser;

    if(email && pass){
        var farray=JSON.parse(localStorage.getItem("flipkartusers"));
        console.log(farray,"array here");
        var flag=false;
        for(var i=0;i<farray.length;i++){
            if(farray[i].uemail==email){
                flag=true;
                flipkart_currentuser=farray[i];
            }
        }
        if(flag==true){
            localStorage.setItem("flipkart_currentuser",JSON.stringify(flipkart_currentuser));
            alert("login successfully");
            window.location.href="./flipkarthome.html";
        }
    }
    else{
        console.log("both fields are required.")
    }
}