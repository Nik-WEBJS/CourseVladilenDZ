function getDivisors(number = 1) {
   if (!Number.isInteger(number) || number < 1) {
       alert("number должен быть целым числом и больше нуля!");
       return;
   }

   let ost = Math.floor(number / 2)
   let sum = 1
   for (let i = 1; i <= ost; i++) {
       if (!(number % i))
           ++sum
   }

   return sum
}

console.log(getDivisors(4))
console.log(getDivisors(5))
console.log(getDivisors(12))
console.log(getDivisors(30))