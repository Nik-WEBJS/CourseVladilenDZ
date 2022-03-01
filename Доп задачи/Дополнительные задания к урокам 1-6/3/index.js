let clientName = prompt('Введите имя клиента')
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')

let clientSpentToday = prompt('Сколько клиент потратил сегодня?')

let discount = 0

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
    discount = 10
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
    discount = 20
} else if (clientSpentForAllTime >= 500){
    discount = 30
}

if (!String(clientName)){
    alert('Имя не буквы, перезагрузите страницу') 
}

if (!Number(clientSpentForAllTime) && !Number(clientSpentToday)){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
}


alert(`Вам предоставляется скидка в ${discount}%!`)

alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday - (clientSpentToday / 100 * discount)}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)