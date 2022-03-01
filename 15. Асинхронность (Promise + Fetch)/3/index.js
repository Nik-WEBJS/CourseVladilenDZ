const URL = 'https://jsonplaceholder.typicode.com/photos';

const dataContainer = document.querySelector('#data-container');

const loader = document.createElement('span');
loader.textContent = 'Загрузка...';

function createPhotoItem(obj) {
    const photoItem = document.createElement('li');
    const photoItemImage = document.createElement('img');
    const photoItemTitle = document.createElement('h3');

    photoItem.className = 'photo-item';
    photoItemImage.className = 'photo-item__image';
    photoItemTitle.className = 'photo-item__title';

    photoItemImage.src = obj.url;
    photoItemTitle.textContent = obj.title;
    photoItem.append(photoItemImage);
    photoItem.append(photoItemTitle);
    console.log(obj)
    dataContainer.append(photoItem);

};

const foto = [60, 12, 55];

function getFastestLoadedPhoto(ids) {
    const imagePromises = ids.map(id => fetch(`${URL}/${id}`));
    Promise.race(imagePromises)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка');
            }
            return response.json();
        })
        .then(image => {
            createPhotoItem(image);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(response => {
            loader.remove();
        })
};

getFastestLoadedPhoto(foto);