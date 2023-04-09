
var button=document.getElementById('btn')
undefined
button.addEventListener('click',function(){
    alert('Submit');
});
var header=document.getElementById("main-header")
header.style.border='solid 2px black';

var item=document.getElementsByClassName("list-group-item")

item[0].style.fontWeight='bold';


var item=document.getElementsByClassName("list-group-item")

item[1].style.fontWeight='bold';
//var item=document.getElementsByClassName("list-group-item")

//item[2].style.fontWeight='bold';
var item=document.getElementsByClassName("list-group-item")

 item[3].style.fontWeight='bold';
var items=document.getElementsByClassName("list-group-item")
undefined
items[2].style.backgroundColor='green'
// var item=document.getElementsByClassName("group-item")
// item[0].style.fontWeight='bold'
var secondItem=document.querySelector(".list-group-item:nth-child(2)")
undefined
secondItem.style.backgroundColor='green'
var thirdItem=document.querySelector(".list-group-item:nth-child(3)")
thirdItem.style.fontWeight='light'

var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
// var itemss=document.querySelector("#items")
// items.parentElement.style.backgroundColor="grey";

var itemList=document.querySelector('#items')
undefined
itemList.parentElement.style.backgroundColor='#f4f4f4'
'grey'
itemList.lastElementChild.style.backgroundColor='yellow'
'yellow'
itemList.firstElementChild.style.backgroundColor='blue'
'blue'
itemList.previousElementSibling.style.color='red'

var newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hello1'
newDiv.setAttribute('title','Hello div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

// var list=document.createElement('li')
// //newDiv.className='hello'
// list.id='list'
// list.setAttribute('title','Hello');
// var newlist=document.createTextNode('Hello');
// list.appendChild(newlist);
// var container=document.querySelector('li .list-group');
// var l1=document.querySelector('li ');
// container.insertBefore(newlist,l1);

