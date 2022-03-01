const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]

function render(parent, task) {
    let taskItem = document.createElement("div"),
        taskItemMainContainer = document.createElement("div"),
        taskItemMainContent = document.createElement("div"),
        checkboxForm = document.createElement("form"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        button = document.createElement("button");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = task.id;
    taskItemMainContainer.className = "task-item__main-container";
    taskItemMainContent.className = "task-item__main-content";
    checkboxForm.className = "checkbox-form";
    input.className = "checkbox-form__checkbox";
    input.type = "checkbox";
    input.id = "task-" + task.id;
    label.htmlFor = "task-" + task.id;
    span.className = "task-item__text";
    span.innerText = task.text;
    button.className = "task-item__delete-button default-button delete-button";
    button.dataset.deleteTaskId = "5";
    button.textContent = " Удалить ";
    checkboxForm.append(input, " ", label);
    taskItemMainContent.append(checkboxForm, " ", span);
    taskItemMainContainer.append(taskItemMainContent, " ", button);
    taskItem.append(taskItemMainContainer);

    parent.append(taskItem);
}

for (let task of tasks) {
    render(document.querySelector(".tasks-list"), task);
}



let formTaskBlock = document.querySelector('.create-task-block');
let createTaskBlock = document.querySelector('.create-task-block')

formTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();
  
    createTaskBlock.querySelector(".error-message-block")?.remove();

    let newTask = {}
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskValueInput = taskNameInput.value;

    let searchIdenticalValue = tasks.find(e => e.text === taskValueInput);
   
    if (searchIdenticalValue) {
        //Мысль: можно создать функцию при создании спана без дубликата кода
        let spanMessageError = document.createElement("span");
        spanMessageError.className = "error-message-block";
        message = 'Задача с таким названием уже существует';
        spanMessageError.textContent = message;
        createTaskBlock.append(spanMessageError);
        return;
    } else if (!(taskValueInput)) {
        let spanMessageError = document.createElement("span");
        spanMessageError.className = "error-message-block";
        message = 'Название задачи не должно быть пустым';
        spanMessageError.textContent = message;
        createTaskBlock.append(spanMessageError);
        return;
    } 

    newTask.id = String(Math.floor(Math.random() * 9999999999999));
    newTask.completed = false;
    newTask.text = taskValueInput;
    if (taskValueInput) {
        tasks.push(newTask);
    }
    const createTaskList = document.querySelector('.tasks-list');
    render(createTaskList, newTask);

})
