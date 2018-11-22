/* Targets the 'click to edit' */

var editText = document.querySelector('small');

var inputText = document.querySelector('input');

var span = document.querySelectorAll('span');

var input = document.querySelector('input[type="text"]');


/* Displays input field when clicked on 'click to edit' */

editText.addEventListener('click', function(){

   inputText.style.display ='block';
  });



/* Displays what is typed into input field and adds it to list */

input.onkeypress = (function(_event){
  if(_event.which == 13){

   var todo = document.createElement('LI');
   var todoText = document.createTextNode(this.value);
   todo.appendChild(todoText);
   document.getElementById('text-holder').appendChild(todo);
  }
  });



/* To make the red 'x' disappear when clicked
   Also, it makes the words in the list disappear
 */

for(var i=0; i < span.length; i++){

  span[i].addEventListener('click', function(){

     this.parentElement.style.display = 'none';
    });
}
