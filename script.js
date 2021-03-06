let initPart = document.getElementById("initPart");
let doneList = document.getElementById("donePart");
let todoList = document.getElementById("todoPart");

initPart.addEventListener('submit', function(e){
    e.preventDefault();
    let addedInput = document.getElementById("initialInput");
    if(addedInput.value == ""){
        return alert("You cannot add empty to do items.");
    }
    addTodoItem(addedInput.value);
    addedInput.value = "";
});

function addTodoItem(theItem){
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
    let thisDoneItem = event.target.parentElement;
    thisDoneItem.innerHTML += addRegretButton();
    thisDoneItem.children[3].remove();
    doneList.appendChild(thisDoneItem);
}

function regretPressed(event){
    let thisTodoItem = event.target.parentElement;
    thisTodoItem.innerHTML += addDoneButton();
    thisTodoItem.children[3].remove();
    todoList.appendChild(thisTodoItem);
}

function changePressed(event){
    let thisChangedItem = event.target.parentElement.firstElementChild;    
    if(thisChangedItem.hasAttribute("readonly")){
        makeInputFieldPulse(thisChangedItem);
        event.target.value = "Save";
        return thisChangedItem.removeAttribute("readonly");
    }else{
        stopInputFieldPulse(thisChangedItem);
        if(thisChangedItem.value == ""){
            event.target.value = "Edit"
            return emptyInputError(thisChangedItem);
        }
        thisChangedItem.removeAttribute("id", "alertItem");
        thisChangedItem.setAttribute("value", thisChangedItem.value);
        event.target.value = "Edit"
        return thisChangedItem.setAttribute("readonly", "readonly");
    } 
}

function emptyInputError(thisChangedItem){
    thisChangedItem.setAttribute("id", "alertItem");
    thisChangedItem.value = "Add a task or remove the line";
    thisChangedItem.setAttribute("value", "Add a task or remove the line");
    alert("You cannot empty the todo task. Fill it in or remove it completely");
    return thisChangedItem.setAttribute("readonly", "readonly");
}

function removePressed(event){    
    event.target.parentElement.remove();
}

function makeInputFieldPulse(thisChangedItem){
    thisChangedItem.setAttribute("id", "pulser");
}

function stopInputFieldPulse(thisChangedItem){
    thisChangedItem.removeAttribute("id", "pulser");
}