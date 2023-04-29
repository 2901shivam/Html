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
    axios.post("https://crudcrud.com/api/dd446bc34723413ab0672e78634c6052/appointmentData",myObject)
    .then((response)=>{
      alert(`Congrats! ${name} has been added!`)
        showExpenseOntheScreen(response.data);
       console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
        
    
    // showExpenseOntheScreen(myObject);
   }
    window.addEventListener("DOMContentLoaded",()=>{
      axios.get("https://crudcrud.com/api/dd446bc34723413ab0672e78634c6052/appointmentData")
      .then((response)=>{
        
        console.log(response.data[0]);

        for(var i=0;i<response.data.length;i++){
          showExpenseOntheScreen(response.data[i]);
        }

      })
      .catch((err)=>{
        console.log(err);
      })

    })
    function showExpenseOntheScreen(user){
     const parentElement=document.getElementById("list");
     const childElement=document.createElement('li');
    
     childElement.textContent=user.name+'-'+user.email+'-'+user.phoneNumber;  
     parentElement.appendChild(childElement);
     
     const deleteButton=document.createElement('input');
     deleteButton.type='button';
     deleteButton.value='Delete';
     deleteButton.onclick=()=>{
      axios.delete(`https://crudcrud.com/api/dd446bc34723413ab0672e78634c6052/appointmentData/${user._id}`)
      .then((response)=>{
    confirm(`DO you want to delete appointment????`)
    parentElement.removeChild(childElement);
        console.log(response.data[0]);
        window.location.reload();         
      })
      .catch((err)=>{
        console.log(err);
      })
          // localStorage.removeItem(myObject.email);
     };
     const editButton=document.createElement('input');
     editButton.type='button';
     editButton.value='Edit';
    //  editButton.addEventListener('click',function(){
    //   //delete data from crud crud 
    //   //delete data from the screen
    //   //submit the edited data
    //    localStorage.removeItem(myObject.email);
    //    parentElement.removeChild(childElement);
    //    document.getElementById("am").value=myObject.name;
    //    document.getElementById("dm").value=myObject.email;
    //    document.getElementById("ca").value=myObject.phoneNumber;
 
    //  })
    editButton.onclick=()=>{

      axios.delete(`https://crudcrud.com/api/dd446bc34723413ab0672e78634c6052/appointmentData/${user._id}`)
      .then((response)=>{
    //confirm(`DO you want to delete appointment????`)
      parentElement.removeChild(childElement);
        console.log(response.data[0]);
        //window.location.reload();         
      })
      .catch((err)=>{
        console.log(err);
      })
     // parentElement.removeChild(childElement);
      document.getElementById("am").value=user.name;
      document.getElementById("dm").value=user.email;
      document.getElementById("ca").value=user.phoneNumber;
 

    }
 
     childElement.appendChild(deleteButton);
     childElement.appendChild(editButton);
     parentElement.appendChild(childElement);
 
   }