var take_name=document.getElementById("name");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var button=document.getElementById('btn')
button.addEventListener('click',function(){
//    localStorage.setItem("name",take_name.value);
//    localStorage.setItem("email",email.value);
//    localStorage.setItem("phone",phone.value);
  let myobject={
     name:take_name.value,
     email:email.value,
     phone:phone.value,
  };
  let myobject_serialize=JSON.stringify(myobject);
  localStorage.setItem('myobject',myobject_serialize);

});