var take_name=document.getElementById("name");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var button=document.getElementById('btn')
button.addEventListener('click',function(){
   localStorage.setItem("name",take_name.value);
   localStorage.setItem("email",email.value);
   localStorage.setItem("phone",phone.value);

});