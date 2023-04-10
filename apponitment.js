var take_name=document.getElementById("name");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var button=document.getElementById('btn')
// var list=document.getElementById('add-list')

button.addEventListener('click',function(){
 let myobject={
     name:take_name.value,
     email:email.value,
     phone:phone.value,
  };
  let myobject_serialize=JSON.stringify(myobject);
  localStorage.setItem('myobject',myobject_serialize);

});

button.addEventListener('click',function(){
    var list=document.getElementById('add-list');
    var childElement=document.createElement('li');
    childElement.textContent=take_name.value+'-'+email.value+'-'+phone.value
    
    list.appendChild(childElement);

});