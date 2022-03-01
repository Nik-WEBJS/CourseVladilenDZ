const URL = 'https://jsonplaceholder.typicode.com/users'; 
 
const dataContainer = document.querySelector('#data-container');
 
const loader = document.createElement('span');
loader.textContent = 'Загрузка...'
 
function createUser(userName){
    const user = document.createElement('li');
    const userAnchor = document.createElement('a');
    userAnchor.href = '#';
    userAnchor.textContent = userName;
    user.append(userAnchor)
    return user
};
 
const getAllUsers = () => {
    dataContainer.prepend(loader)

    const result = fetch(URL,{ method: 'GET' })
    result
        .then((response)=>{
            if(!response.ok){
                throw new Error('Ошибка')
            }
            return response.json()
        })
        .then((users)=>{
            users.forEach((user)=>{
                const userHTML = createUser(user.name);
                dataContainer.append(userHTML)
            })
        })
        .catch(error => {
            console.error(error)
            })
        .finally(() => {
            loader.remove()
        });
}
getAllUsers()