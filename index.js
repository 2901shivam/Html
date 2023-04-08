
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