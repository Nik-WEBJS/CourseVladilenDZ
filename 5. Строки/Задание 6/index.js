const userText = prompt('Введите текст');
const wordFromText = prompt('Введите слово из текста');

const indexOfWord = userText.trim().indexOf(wordFromText)

console.log(indexOfWord)

alert(userText.trim().slice(0, indexOfWord))