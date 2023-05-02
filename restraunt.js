function saveToLocalstorage(event){
    event.preventDefault();
    const price=event.target.price.value;
    const dish=event.target.dish.value;
    const table=event.target.table.value;
    
 
   
    const myObject={
     price:price,
     dish:dish,
     table:table,
    
 
    }
    
    axios.post("https://crudcrud.com/api/b611af6439a14ed8b8c6cf0e9216fac4/or",myObject)
    .then((response)=>{
      alert(`Congrats! ${dish} has been added!`)
        showOrderOntheScreen(response.data);
       console.log(response.data);
    })
    .catch((err)=>{
        console.log(err);
    })
        
    
    
   }
    window.addEventListener("DOMContentLoaded",()=>{
      axios.get("https://crudcrud.com/api/b611af6439a14ed8b8c6cf0e9216fac4/or")
      .then((response)=>{
        
        console.log(response.data);

        for(var i=0;i<response.data.length;i++){
          showOrderOntheScreen(response.data[i]);
        }

      })
      .catch((err)=>{
        console.log(err);
      })

    })
    function showOrderOntheScreen(user){
     const parentElement=document.getElementById("list");
     const childElement=document.createElement('li');
     childElement.textContent=user.price+'-'+user.dish+'-'+user.table;  
     parentElement.appendChild(childElement);
     
     const deleteButton=document.createElement('input');
     deleteButton.type='button';
     deleteButton.value='DeleteOrder';
     deleteButton.onclick=()=>{
      axios.delete(`https://crudcrud.com/api/b611af6439a14ed8b8c6cf0e9216fac4/or/${user._id}`)
      .then((response)=>{
    confirm(`DO you want to delete order????`)
    parentElement.removeChild(childElement);
        console.log(response.data);
        window.location.reload();         
      })
      .catch((err)=>{
        console.log(err);
      })
         
     };
   
 
     childElement.appendChild(deleteButton);
   
     parentElement.appendChild(childElement);
 
   }