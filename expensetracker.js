function saveToLocalstorage(event){
   event.preventDefault();
   const amount=event.target.amount.value;
   const description=event.target.description.value;
   const category=event.target.category.value;
   const key = new Date().getTime();

  
   const myObject={
    amount:amount,
    description:description,
    category:category,
    key,

   }
   localStorage.setItem(key,JSON.stringify(myObject));
   showExpenseOntheScreen(myObject);
  }
   function showExpenseOntheScreen(myObject){
    const parentElement=document.getElementById("list");
    const childElement=document.createElement('li');
   
    childElement.textContent=myObject.amount+'-'+myObject.description+'-'+myObject.category;  
    parentElement.appendChild(childElement);
    
    const deleteButton=document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    deleteButton.addEventListener('click',function(){
        localStorage.removeItem(myObject.key);
        parentElement.removeChild(childElement);
    });
    const editButton=document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    editButton.addEventListener('click',function(){
      localStorage.removeItem(myObject.key);
      parentElement.removeChild(childElement);
      document.getElementById("am").value=myObject.amount;
      document.getElementById("dm").value=myObject.description;
      document.getElementById("ca").value=myObject.category;

    })

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);

  }




    
 

 
