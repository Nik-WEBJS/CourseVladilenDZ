const divContainer = document.querySelector('.container');
const userForm = document.createElement('form');
const labelForm1 = document.createElement('label');
const labelForm2 = document.createElement('label');
const labelForm3 = document.createElement('label');
const inputForm1 = document.createElement('input');
const inputForm2 = document.createElement('input');
const buttonLabel3 = document.createElement('button');

userForm.className = "create-user-form";

labelForm1.textContent = ' Имя: '
labelForm2.textContent = ' Пароль: '
buttonLabel3.textContent = 'Подтвердить!'

inputForm1.type = 'text';
inputForm1.name = 'userName';
inputForm1.placeholder = 'Введите ваше имя';

inputForm2.type = 'password';
inputForm2.name = 'password';
inputForm2.placeholder = 'Придумайте Пароль';

buttonLabel3.type = 'submit';

divContainer.insertAdjacentElement('afterbegin', userForm);


userForm.append(labelForm1);
userForm.append(labelForm2);
userForm.append(labelForm3);
labelForm1.append(inputForm1);
labelForm2.append(inputForm2);
labelForm3.append(buttonLabel3);
