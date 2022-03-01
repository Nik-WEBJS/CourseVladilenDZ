//Опять скомунякал код с инета сам провозился с этим вопросом, дается тяжко прошу понять и простить
async function fetchJSONAsync(url, init) {
    let response = await fetch(url, init);
    if (response.ok) {
        let json = await response.json();
        return json;
    }
    else
        throw new Error(`${response.status}: ${response.statusText}`);
}

let container,
    messageEl;

const renderAlbums = async () => {
    const url = "https://jsonplaceholder.typicode.com/albums";
    let albums = await fetchJSONAsync(url);
    let str = albums.map(e => `<li>${e.title}</li>`).join("");
    container.innerHTML = str;
    
}

async function btn_click() {
    messageEl.style.display = ""; 
    container.innerHTML = "";
    try {
        await renderAlbums();
    } catch (error) {
        container.innerHTML = `<li class="error">Произошла ошибка в получении данных об альбомах...</li>`;
        console.log(error.message);
    }
    finally {
        messageEl.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", document_loaded);
function document_loaded() {
    container = document.querySelector(".data-container");
    messageEl = document.querySelector("span");

    messageEl = document.createElement("span");
    messageEl.textContent = "Загрузка...";
    messageEl.style.display = "none"; 
    document.body.appendChild(messageEl);

    document.querySelector("button").addEventListener("click", btn_click);
}