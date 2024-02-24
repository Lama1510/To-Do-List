

var addButton = document.getElementById("add");
addButton.onclick= function () {
  var taskInput = document.getElementById("task");
  var taskValue = taskInput.value;

  document.querySelector("ul").innerHTML=display_task(taskValue); 
  taskInput.value = "";



  var delete_task = document.getElementById("checkbox");
 delete_task.onclick=function (){

  if (delete_task.checked == true){
    document.querySelector(".tasks").classList.add("demo");
  } else {
    document.querySelector(".tasks").classList.remove("demo");
  }
 }

}
 function display_task(task) {




  return ` 
  <input type="checkbox"  id ="checkbox" >
  <li class ="tasks"> ${task} </li>
       
  
  
  `
 }

 
 