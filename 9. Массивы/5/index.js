let clientsEstimations = []

let askClientToGiveEstimation = () => {
   let message = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
   return message
}

for (let i = 1; i <= 5; i++) {
    clientsEstimations.push(Number(askClientToGiveEstimation()))
}

const notGoodEstimations = clientsEstimations.filter((Estimat) => {
    return Estimat <= 5
})

const goodEstimations = clientsEstimations.filter((Estimat) => {
    return Estimat > 5
})


alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)
