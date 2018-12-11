 
var username = document.getElementById("userName");
username.addEventListener("keyup",validate)

function validate()
{    
  
    var regex=/^[A-Z][a-z]{3,8}$/
   
    if(regex.test(username.value)== true)
        { 
           username.className="form-control is-valid"
            
        }
    else
        {
            
             username.className="form-control is-invalid"
        }
}
