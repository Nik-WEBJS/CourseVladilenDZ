import './index.css';


    function render (parent){
        const bodyElement = `<div class="cookie-consent">
        <p class="cookie-consent__text">
            Мы используем файлы cookie для наилучшего представления нашего сайта
        </p>
        <button class="cookie-consent__button">Прекрасно</button>
    </div>`
    parent.insertAdjacentHTML("beforeend", bodyElement);
}
 const localStorageItem = localStorage.getItem('falses');
 
if(localStorageItem != '1'){
    render(document.body)
}

    const button = document.querySelector('.cookie-consent__button');
    const cocckie = document.querySelector('.cookie-consent')
    button.addEventListener('click', ()=>{
        cocckie.remove();
        localStorage.setItem('falses', 1)    
    }) 

   

    console.log(localStorageItem)
    
    
   
