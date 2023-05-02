function saveToLocalstorage(event){
   event.preventDefault();
   const amount=event.target.amount.value;
   const description=event.target.description.value;
   const category=event.target.category.value;
  // const key = new Date().getTime();

  
   const myObject={
    amount:amount,
    description:description,
    category:category,
   // key,

   }
  //  localStorage.setItem(key,JSON.stringify(myObject));
  axios.post("https://crudcrud.com/api/56384ad716a44f5788fede44cb38f56f/expense",myObject)
  .then((response)=>{
    //alert(`Congrats! ${description} has been added!`)
    showExpenseOntheScreen(response.data);
    console.log(response.data);
  })
  .catch((err)=>{
    console.log(err)
  })

  }

  window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/56384ad716a44f5788fede44cb38f56f/expense")
    .then((response)=>{
      
      console.log(response.data);

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
   
    childElement.textContent=user.amount+'-'+user.description+'-'+user.category;  
    parentElement.appendChild(childElement);
    
    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    // deleteButton.addEventListener('click',function(){
    //     localStorage.removeItem(myObject.key);
    //     parentElement.removeChild(childElement);
    // });
    deleteButton.onclick=()=>{
      axios.delete(`https://crudcrud.com/api/56384ad716a44f5788fede44cb38f56f/expense/${user._id}`)
      .then((response)=>{
        confirm('Do you want to delete the expense');
        parentElement.removeChild(childElement);
        console.log(response.data);
        //window.location.reload();
      })
      .catch((err)=>{
        console.log(err);
      })
       //parentElement.removeChild(childElement);
    }
    const editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    editButton.onclick=()=>{
      // localStorage.removeItem(myObject.key);
      // parentElement.removeChild(childElement);
      axios.delete(`https://crudcrud.com/api/56384ad716a44f5788fede44cb38f56f/expense/${user._id}`)
      .then((response)=>{
        confirm('do you want to edit the data');
        parentElement.removeChild(childElement);
        console.log(response.data);
        //window.location.reload();  
      })
      .catch((err)=>{
        console.log(err);
      })
      //parentElement.removeChild(childElement);
      document.getElementById("am").value=user.amount;
      document.getElementById("dm").value=user.description;
      document.getElementById("ca").value=user.category;

    }

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);

  }




    
 

 
