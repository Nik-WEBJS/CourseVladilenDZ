const getSumOfNumbersOdd = (number) => {
   let sum = 0

   for (let i = 1; i <= number; i++) {
      if (i % 2) {
         sum += i
      }
   }
   return sum
}

const getSumOfNumbersEven = (number) => {
   let sum = 0
   for (let i = 1; i <= number; i++) {
      if (!(i % 2)) {
         sum += i
      }
   }
   return sum
}
const getSumOfNumbersDefault = (number) => {
   let sum = 0
   for (let i = 1; i <= number; i++) {
      sum += i
   }
   return sum
}

const Samurai = {
   "odd": getSumOfNumbersOdd,
   "even": getSumOfNumbersEven,
   "default": getSumOfNumbersDefault
}

function getSumOfNumbers(number, type = 'odd') {
   const handler = Samurai[type]
   if (!handler) {
      throw new Error("Обработчик для данного типа не найден")
   }
   return handler(number)
}


console.log(getSumOfNumbers(10, "odd"));
console.log(getSumOfNumbers(10, "even"));
console.log(getSumOfNumbers(10, "default"));