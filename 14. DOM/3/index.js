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

function renderTask(parent, task) {
    let div1 = document.createElement("div"),
        div2 = document.createElement("div"),
        div3 = document.createElement("div"),
        form = document.createElement("form"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        span = document.createElement("span"),
        button = document.createElement("button");
    div1.className = "task-item";
    div1.dataset.taskId = task.id;
    div2.className = "task-item__main-container";
    div3.className = "task-item__main-content";
    form.className = "checkbox-form";
    input.className = "checkbox-form__checkbox";
    input.type = "checkbox";
    input.id = "task-" + task.id;
    label.htmlFor = "task-" + task.id;
    span.className = "task-item__text";
    span.innerText = task.text;
    button.className = "task-item__delete-button default-button delete-button";
    button.dataset.deleteTaskId = "5";
    button.textContent = " Удалить ";
    form.append(input, " ", label);
    div3.append(form, " ", span);
    div2.append(div3, " ", button);
    div1.append(div2);

    parent.append(div1);
}


for (let task of tasks) {
    renderTask(document.querySelector(".tasks-list"), task);
}

let formTaskBlock = document.querySelector('.create-task-block');
formTaskBlock.addEventListener('submit',(event)=>{
    event.preventDefault();
    let newTask = {}
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskValueInput = taskNameInput.value;
    newTask.id = String(Math.floor(Math.random() * 9999999999999));
    newTask.completed = false;
    newTask.text = taskValueInput;
    if(taskValueInput){    
       tasks.push(newTask);
    } 
    const createTaskList = document.querySelector('.tasks-list');
    renderTask(createTaskList, newTask)
    console.log(tasks)
})
