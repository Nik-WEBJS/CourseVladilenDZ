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
  
  
  const spanMessageError = document.createElement("span");
  spanMessageError.className = "error-message-block";
  
  formTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault();
    let newTask = {}
    const { target } = event;
    const taskNameInput = target.taskName;
    const taskValueInput = taskNameInput.value;
  
    let searchIdenticalValue = tasks.find(el => el.text === taskValueInput);
  
    if (searchIdenticalValue) {
  
      spanMessageError.textContent = 'Задача с таким названием уже существует';
      formTaskBlock.append(spanMessageError);
  
    } else if (!(taskValueInput)) {
      spanMessageError.textContent = 'Введите название задачи!'
    } else {
      spanMessageError.remove()
      let newTask = {
        id: Date.now().toString(),
        completed: false,
        text: taskValueInput,
      }
      if (taskValueInput) {
        tasks.push(newTask);
      }
      const createTaskList = document.querySelector('.tasks-list');
      render(createTaskList, newTask);
    }
  
  })
  
  function renderModal(parent) {
    const modalOverlay = `<div class="modal-overlay modal-overlay_hidden">
  <div class="delete-modal">
  <h3 class="delete-modal__question">
    Вы действительно хотите удалить эту задачу?
  </h3>
  <div class="delete-modal__buttons">
    <button class="delete-modal__button delete-modal__cancel-button">
      Отмена
    </button>
    <button class="delete-modal__button delete-modal__confirm-button">
      Удалить
    </button>
  </div>
  </div>
  </div>`;
    parent.insertAdjacentHTML("beforeend", modalOverlay);
  }
  renderModal(document.body)
  
  
  const tasksList = document.querySelector('.tasks-list');
  let delModal = document.body.lastElementChild;
  
  function taskListClick(event) {
    let takeTarget = event.target;
    if (takeTarget.matches("button.task-item__delete-button")) {
      deleteTaskId = +takeTarget.dataset.deleteTaskId;
      delModal.classList.remove("modal-overlay_hidden");
    }
    else if (takeTarget.matches("input.checkbox-form__checkbox")) {
      let takeTargetid = +takeTarget.id.match(/^task-(\d+)$/)[1];
      tasks.find(el => el.id === takeTargetid).completed = takeTarget.checked;
    }
  }
  
  function deleteCancelClick(event) {
    event.preventDefault();
    delModal.classList.add("modal-overlay_hidden");
  }
  
  function deleteConfirmClick(event) {
    event.preventDefault();
    let index = tasks.findIndex(el => el.id === deleteTaskId);
    tasks.splice(index);
    tasksList.querySelector(`div[data-task-id="${deleteTaskId}"]`).remove();
    console.log(tasks);
    delModal.classList.add("modal-overlay_hidden");
  }
  
  tasksList.addEventListener("click", taskListClick);
  delModal.querySelector(".delete-modal__cancel-button").onclick = deleteCancelClick;
  delModal.querySelector(".delete-modal__confirm-button").onclick = deleteConfirmClick;
  
  