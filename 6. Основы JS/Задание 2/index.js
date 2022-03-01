const question1 = 4
const question2 = 4
const question3 = 1
const question4 = 12
const question5 = 6

let correctAnswers = 0
let incorrectAnswers  = 0

const userAnswer1 = prompt("Сколько будет 2 + 2?")

if(Number(userAnswer1) === question1) {
    correctAnswers += 1
    alert("Ответ верный")
} else {
    incorrectAnswers += 1
    alert("Ответ неверный")
} 

const userAnswer2 = prompt("Сколько будет 2 * 2?")

if(Number(userAnswer2) === question2) {
    correctAnswers += 1
    alert("Ответ верный")
} else {
    incorrectAnswers += 1
    alert("Ответ неверный")
} 

const userAnswer3 = prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?")
if(Number(userAnswer3) === question3) {
    correctAnswers += 1
    alert("Ответ верный")
} else {
    incorrectAnswers += 1
    alert("Ответ неверный")
} 

const userAnswer4 = prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?")
if(Number(userAnswer4) === question4) {
    correctAnswers += 1
    alert("Ответ верный")
} else {
    incorrectAnswers += 1
    alert("Ответ неверный")
} 

const userAnswer5 = prompt("Сколько будет 2 + 2 * 2?")
if(Number(userAnswer5) === question5) {
    correctAnswers += 1
    alert("Ответ верный")
} else {
    incorrectAnswers += 1
    alert("Ответ неверный")
} 

console.log(correctAnswers, incorrectAnswers)
alert(`Количество верных ответов: ${correctAnswers}`)
alert(`Количество неверных ответов: ${incorrectAnswers}`)