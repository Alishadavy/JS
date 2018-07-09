var abc = [];

var divs = ["signin", "signup", "contact"];
var visibleDivId = null;
function toggleVisibility(divId) 
{
  if(visibleDivId === divId) { }
   else 
   {
    visibleDivId = divId;
    }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

function validateUser() 
{
            document.getElementById("m1").innerHTML='';
            document.getElementById("m2").innerHTML='';
          	var userid= document.getElementById('email');
          	var password = document.getElementById('password');
             var x=ValidateEmail(userid,"m1");
             var y=ValidatePassword(password,"m2");
            if(x && y)
            {
              abc = JSON.parse(localStorage["abc"]);
              valid=0;
              for(var i=0;i<abc.length;i++)
             {
              var checkmail =JSON.parse(localStorage["abc"])[i].email;
              var checkpassword =JSON.parse(localStorage["abc"])[i].password;
      
              if ((checkmail==document.getElementById("email").value) && (checkpassword==document.getElementById("password").value))
              {
                valid=1;
                break;
              }
            }

              if(valid==1)
               {
                 alert("Login Successfull");
               }
                  
             else
             {
              alert("Incorrect username or password");
             }



              }

}

function register()
 {
              document.getElementById("m3").innerHTML='';
              document.getElementById("m4").innerHTML='';
              document.getElementById("m5").innerHTML='';

          	var sname= document.getElementById('sname');
          	var semail= document.getElementById('semail');
            var spassword=document.getElementById('spassword');
            var p=ValidateUsername(sname,"m3");
            var q=ValidateEmail(semail,"m4");
            var r=ValidatePassword(spassword,"m5");
            if(p && q && r)
            { 
                localStorage.resultname = sname.value
                localStorage.resultPassword = spassword.value;
                localStorage.resultMail = semail.value;
                user = {
                  name: sname.value,
                  email: semail.value,
                  password: spassword.value,
                };
                if (localStorage.firstentry)
                {
                  abc = JSON.parse(localStorage["abc"]);
                }

                abc.push(user);
                localStorage.setItem("abc",JSON.stringify(abc));
                localStorage.firstentry += 1;
                   alert("Signup Successfull");
           }
    
}
function usercontact() 
{
           document.getElementById("m6").innerHTML='';
           document.getElementById("m7").innerHTML='';
           document.getElementById("m8").innerHTML='';
           var cusername= document.getElementById('cname');
      	   var cemail= document.getElementById('cemail');
           var cquestion= document.getElementById('cquestion');
           var m=ValidateUsername(cusername,"m6");
           var n=ValidateEmail(cemail,"m7");
           var o=ValidatePhone(cphone,"m8");
           if(m&&n&&o)
           {
            alert("Submitted Successfully");
            } 
}

function ValidatePassword(password,msg)
                 {
                   
                          if(password.value.trim().length<6 || password.value.trim().length>15)
                              {
                                  document.getElementById(msg).innerHTML+="Enter password ranging 6-15 word";
                                  return 0;
                               }
                               else  return 1;
} 

function ValidateEmail(userid,msg) 
              {
                   if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userid.value)))
                    { 
                       document.getElementById(msg).innerHTML+="Enter a valid user id";
                       return 0; 
                     }
                    else return 1; 
              }  
     

function ValidateQuestion(question,msg)
          {
              if(question.value.trim()=="" || question.value.length<1 || question.value.length>200)
              {
                  document.getElementById(msg).innerHTML+="Enter question in less than 200 letters"; 
                  return 0;
              }   
              else return 1;
         }

function ValidateUsername(username,msg)
          {           

                 if(username.value.length<1 || username.value.length>20)
                {
                    document.getElementById(msg).innerHTML+="Enter a valid username"; 
                    return 0;
                }
                else return 1;
           }          

   
