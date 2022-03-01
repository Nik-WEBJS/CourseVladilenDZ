console.log(getName3('Стас'))


const getName1 = name => `Имя равно ${name}`

const getName2 = function(name){
    return `Имя равно ${name}`
}

function getName3 (name){
    return `Имя равно ${name}`
}

console.log(getName1('Никита'))
console.log(getName2('Олег'))
