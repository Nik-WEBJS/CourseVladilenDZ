const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию:')

let searchCoffeesIndex = coffees.findIndex((items) => {
    if (coffeeName.toLowerCase() === items.toLowerCase()) {
        return items
    }
})

let searchCoffeesName = coffees.find((items) => {
    if (coffeeName.toLowerCase() === items.toLowerCase()) {
        return items
    }
})

alert(`Держите ваш любимый кофе ${searchCoffeesName}. Он ${searchCoffeesIndex} по популярности в нашей кофейне.`)

console.log(searchCoffeesName)
console.log(searchCoffeesIndex)