import { storeToDo } from "./storeToDo";

var daysToGo;

export default function updateForm(selectedToDo) {

    document.getElementById("todo_title").value = document.getElementById("ToDoTitle" + selectedToDo).textContent;
    document.getElementById("todo_desc").value = document.getElementById("ToDoDesc" + selectedToDo).textContent;

    document.getElementById("btnSaveToDo").addEventListener("click", handleUpdateClick, false);

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });

    function handleUpdateClick() {
        document.getElementById("ToDoTitle" + selectedToDo).textContent = document.getElementById("todo_title").value;
        document.getElementById("ToDoDesc" + selectedToDo).textContent = document.getElementById("todo_desc").value;
        calculateDays();
        document.getElementById("ToDoBadge" + selectedToDo).textContent = daysToGo;
        storeToDo(selectedToDo);
        document.getElementById("btnSaveToDo").removeEventListener("click", handleUpdateClick, false);
    }
}

function calculateDays() {
    let today = new Date();
    let date_to_reply = new Date(document.getElementById("ToDoDate").value);
    let timeinmilisec = date_to_reply.getTime() - today.getTime();

    daysToGo = Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
    return daysToGo;
}
