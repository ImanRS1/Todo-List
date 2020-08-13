let initPart = document.getElementById("initPart");

initPart.addEventListener('submit', function(e){
    e.preventDefault();
    let addedInput = document.getElementById("initialInput");

    if(addedInput.value == ""){
        return alert("You cannot add empty to do items.");
    }

    addedTodoItem(addedInput.value);
    document.getElementById("initialInput").value = "";
});

function addedTodoItem(theItem){
    return document.getElementById("todoPart").innerHTML += "<li><input type='text' readonly='readonly' value= '" + theItem + "'>" + "</input>" + addChangeButton() + addRemoveButton()  + addDoneButton() +"</li>";

}

function addChangeButton(){
    return "<input type='button' value='Edit' id='changeButton' onclick='changePressed(event)'></input>";
}
function addDoneButton(){
    return "<input type='button' value='Done' id='doneButton' onclick='donePressed(event)'></input>";
}
function addRemoveButton(){
    return "<input type='button' value='Delete' id='removeButton' onclick='removePressed(event)'></input>";
}
function addRegretButton(){
    return "<input type='button' value='Regret' id='regretButton' onclick='regretPressed(event)'></input>";
}


function donePressed(event){
    let doneList = document.getElementById("donePart");
    let thisDoneItem = event.target.parentElement;
    thisDoneItem.innerHTML += addRegretButton();
    thisDoneItem.children[3].remove();
    doneList.appendChild(thisDoneItem);
}

function regretPressed(event){
    let todoList = document.getElementById("todoPart");
    let thisTodoItem = event.target.parentElement;
    thisTodoItem.innerHTML += addDoneButton();
    thisTodoItem.children[3].remove();
    todoList.appendChild(thisTodoItem);
}

function changePressed(event){
    let currentTodoItem = event.target;    
    if(currentTodoItem.parentElement.firstElementChild.hasAttribute("readonly")){
        makeWindowPulse(currentTodoItem);
        return currentTodoItem.parentElement.firstElementChild.removeAttribute("readonly");
    }else{
        stopWindowPulse(currentTodoItem);
        if(currentTodoItem.parentElement.firstElementChild.value == ""){
            currentTodoItem.parentElement.firstElementChild.setAttribute("id", "alertItem");
            currentTodoItem.parentElement.firstElementChild.value = "Add a task or remove the line";
            alert("You cannot empty the todo task. Fill it in or remove it completely");
            return currentTodoItem.parentElement.firstElementChild.setAttribute("readonly", "readonly");
        }
        currentTodoItem.parentElement.firstElementChild.removeAttribute("id", "alertItem");
        return currentTodoItem.parentElement.firstElementChild.setAttribute("readonly", "readonly");
    } 
}

function removePressed(event){    
    event.target.parentElement.remove();
}

function makeWindowPulse(currentTodoItem){
    var thisInputField = currentTodoItem.parentElement.firstElementChild;
    thisInputField.setAttribute("id", "pulser");
}

function stopWindowPulse(currentTodoItem){
    var thisInputField = currentTodoItem.parentElement.firstElementChild;
    thisInputField.removeAttribute("id", "pulser");
}