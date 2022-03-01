const URL = 'https://jsonplaceholder.typicode.com/users'; 
 
const dataContainer = document.querySelector('#data-container');
 
const loader = document.createElement('span');
loader.textContent = 'Загрузка...';
 
function createUser(userName){
    const user = document.createElement('li');
    const userAnchor = document.createElement('a');
    userAnchor.href = '#';
    userAnchor.textContent = userName;
    user.append(userAnchor);
    return user;
};
 
const userIdArr = [5, 6, 2, 1];
 
const getUsersById = (idUsers) => {
    const requests = idUsers.map(id => fetch(`${URL}/${id}`));
  
  Promise.all(requests)
    .then(response => {
        const dataResult = response.map(responce => responce.json());
        return Promise.all(dataResult);
    })
   .then(response => {
    response.forEach(user => {
      const userId = createUser(user.name);
      dataContainer.append(userId);
      })
    }) 
    .catch(error => {
        console.error(error);
    })
    .finally(response => { 
      loader.remove();
    })
};
 
getUsersById(userIdArr);

