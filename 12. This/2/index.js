const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  }
}

const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  }
}

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  return Object.assign(this, { isDomestic });
}

const callMakeDomestic1 = makeDomestic.bind(dog, true)
const callMakeDomestic2 = makeDomestic.call(bird, false)
const callMakeDomestic3 = makeDomestic.apply(bird, ['false'])

console.log(callMakeDomestic1())
console.log(callMakeDomestic2)
console.log(callMakeDomestic3)
/*
Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"

domesticDog = {
 name: 'Чарли',
 type: 'Собака',
 isDomestic: true, 
 makeSound() {
   return 'Гав-Гав' 
 }
} 
*/