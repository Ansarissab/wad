//============================================
//-----------  STEP - 1 ----------------------
//============================================

//
// var todos = [];
// function add() {
//     var task = document.getElementById("task").value;
//     todos.push(task);
//     document.getElementById('todos').innerText = todos;
// }
// it adds the text , content of text field to the div with id todos and don't remove text field content after adding
// adding it in the div and continue adding the content if we go on pressing add button continuously


//============================================
//-----------  STEP - 2 ----------------------
//============================================

/*
var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}

function show() {
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i] + '</li>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
*/

// it adds content of text field to the un-ordered list after pressing add button and clear the text field content
// and also add the previous content ( no matters how many lines are there in the array )to the un-ordered list if we press add buttom

//============================================
//-----------  STEP - 3 ----------------------
//============================================


/*
function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}


function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();
*/

// it add a new li element with content the user typed in the text field and also add a delete button and continue doing this
// it stops user to add empty content in text field and shows a warning
//  it shows all the content evne if we refresh the page  it is due to the show() function call at the end


//============================================
//-----------  STEP - 4 ----------------------
//============================================



function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i =0 ; i, li.length; i ++){
        li[i].addEventListener('click',line_through);
    }
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.text.style.textAlign ="line-through";
    localStorage.setItem('todo',JSON.stringify(todos));
show();

// it does the same work as the step 3 but with additional work of deleting a li permanently from the local storage and array
// and also from our todos-lis which is displayed to the user


//============================================
//-----------  STEP - 5 ----------------------
//============================================


//
// CLASS ACTIVITY (HOME WORK) :
//
// 1- Enable State of todos by clicking on the text completed, started etc
// HINT: use text-decoration:line-through; property of CSS

// function line_through(e){}
// $("ul").on("click", "li", function(){
//     $(this).toggleClass("completed");
// });
// }

//
// 2- Enable Editing todos in text field to update text
//
//
// var editTask=function(){
//     var listItem=this.parentNode;
//     var editInput=listItem.querySelector('input[type=text]');
//     var label=listItem.querySelector("label");
//     var containsClass=listItem.classList.contains("editMode");
//     if(containsClass){
//         label.innerText=editInput.value;
//     }else{
//         editInput.value=label.innerText;
//     }
//     listItem.classList.toggle("editMode");
// }

//
//
//


