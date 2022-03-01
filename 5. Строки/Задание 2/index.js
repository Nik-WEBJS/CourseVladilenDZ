let myInfoText = "Всем привет! Меня зовут, Nikita. Сейчас я изучаю язык программирования JavaScript на курсе по JavaScript у Vladilena.Я хочу стать веб-разработчиком, потому что dream. До этого я изучал(а) JavaScript 6 месяцев. Я уверен(а), что пройду данный курс до конца!"

myInfoText = myInfoText.replaceAll("JavaScript", "JavaScript".toUpperCase())

console.log(myInfoText)

console.log(myInfoText.length)

console.log(myInfoText.slice(0, 1), myInfoText.slice(myInfoText.length-1,myInfoText.length))