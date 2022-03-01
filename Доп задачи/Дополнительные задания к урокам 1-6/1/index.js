const javaScriptDescription = "javaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."

const centerIndexString = javaScriptDescription.length / 2

const trimmedString = javaScriptDescription.slice(1, centerIndexString)

const capitalLetters = trimmedString.replaceAll("а", "А")

const continuation = capitalLetters.trim().repeat(3)

const updatedMiddleIndex = Math.floor(continuation.length / 2)

const finishString = continuation + continuation[updatedMiddleIndex]

console.log(finishString)