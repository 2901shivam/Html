function saveToLocalstorage(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phoneNumber=event.target.number.value;
    //const key = new Date().getTime();
 
   
    const myObject={
     name:name,
     email:email,
     phoneNumber:phoneNumber,
    // key,
 
    }
    // localStorage.setItem(email,JSON.stringify(myObject));
    axios.post("https://crudcrud.com/api/119d6f851ce741f496d940a053c64ee1/appointmentData",myObject)
    .then((response)=>{
        showExpenseOntheScreen(response.data);
       console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    })
        
    
    // showExpenseOntheScreen(myObject);
   }
    window.addEventListener("DOMContentLoaded",()=>{
      axios.get("https://crudcrud.com/api/119d6f851ce741f496d940a053c64ee1/appointmentData")
      .then((response)=>{
        console.log(response);

        for(var i=0;i<response.data.length;i++){
          showExpenseOntheScreen(response.data[i]);
        }

      })
      .catch((err)=>{
        console.log(err);
      })

    })
    function showExpenseOntheScreen(myObject){
     const parentElement=document.getElementById("list");
     const childElement=document.createElement('li');
    
     childElement.textContent=myObject.name+'-'+myObject.email+'-'+myObject.phoneNumber;  
     parentElement.appendChild(childElement);
     
     const deleteButton=document.createElement('input');
     deleteButton.type='button';
     deleteButton.value='Delete';
     deleteButton.addEventListener('click',function(){
         localStorage.removeItem(myObject.email);
         parentElement.removeChild(childElement);
     });
     const editButton=document.createElement('input');
     editButton.type='button';
     editButton.value='Edit';
     editButton.addEventListener('click',function(){
       localStorage.removeItem(myObject.email);
       parentElement.removeChild(childElement);
       document.getElementById("am").value=myObject.name;
       document.getElementById("dm").value=myObject.email;
       document.getElementById("ca").value=myObject.phoneNumber;
 
     })
 
     childElement.appendChild(deleteButton);
     childElement.appendChild(editButton);
     parentElement.appendChild(childElement);
 
   }