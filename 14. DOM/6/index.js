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
let form = document.querySelector('.checkbox-form')

formTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();

    
    form.querySelector(".error-message-block")?.remove();

    let newTask = {}
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskValueInput = taskNameInput.value;

    let searchIdenticalValue = tasks.find(e => e.text === taskValueInput);
   
    if (searchIdenticalValue) {
        let spanMessageError = document.createElement("span");
        spanMessageError.className = "error-message-block";
        message = 'Задача с таким названием уже существует';
        spanMessageError.textContent = message;
        form.append(spanMessageError);
        return;
    } else if (!(taskValueInput)) {
        let spanMessageError = document.createElement("span");
        spanMessageError.className = "error-message-block";
        message = 'Название задачи не должно быть пустым';
        spanMessageError.textContent = message;
        form.append(spanMessageError);
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

const createDeleteModal = (text) => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay modal-overlay_hidden';
  
    const deleteModal = document.createElement('div');
    deleteModal.className = 'delete-modal';
  
    modalOverlay.append(deleteModal);
  
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'delete-modal__question';
    modalTitle.innerText = text;
    const modalButtons = document.createElement('div');
    modalButtons.className = 'delete-modal__buttons';
  
    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.innerText = 'Отмена'
    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.innerText = 'Удалить';
  
    deleteModal.append(modalTitle, modalButtons);
    modalButtons.append(cancelButton, confirmButton);
  
    return {
      deleteModal,
      cancelButton,
      confirmButton,
      modalOverlay,
    };
  }
  
  let targetTaskIdToDelete = null
  
  const { deleteModal, cancelButton, confirmButton, modalOverlay, } = createDeleteModal('Вы действительно хотите удалить эту задачу?');
  document.body.prepend(modalOverlay);
  
  cancelButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
  });
  
  confirmButton.addEventListener('click', () => {
    const deleteIndex = tasks.findIndex((task) => task.id === targetTaskIdToDelete);
    if (deleteIndex >= 0) {
      tasks.splice(deleteIndex, 1);
      const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
      taskItemHTML.remove();
      modalOverlay.classList.add('modal-overlay_hidden');
    }
  });

  const tasksList = document.querySelector('.tasks-list')

tasksList.addEventListener('click', (event) => {
  const { target } = event;
  const closestTarget = target.closest('.task-item__delete-button');
  if (closestTarget) {
    const closestTask = closestTarget.closest('.task-item');
    if (closestTask) {
      const taskId = closestTask.dataset.taskId;
      targetTaskIdToDelete = taskId;
      modalOverlay.classList.remove('modal-overlay_hidden');
    }
  }
});

const switchDarkTheme= function(){
    document.body.style.background = '#24292E';
    document.body.style.color = '#ffffff';
   document.body.style.button = '1px solid #ffffff';
   
};

const switchWhiteTheme = function(){
    document.body.style.background = 'initial';
    document.body.style.color = 'initial';
   document.body.style.button = 'none';
   
}

const changeBackgroundColor = document.addEventListener('keydown', (event) => {
    const {key} = event
    if(key == 'Tab'){
        if(document.body.style.background == 'initial'){
            switchDarkTheme(); 
        } else {
            switchWhiteTheme();
        }
    }
  
  });
