class Developer {
    constructor(fullName, age, position){
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = []
    }
    code(){}
    learnNewTechnology(technology){
      let array = this.technologies.push(technology)
      return this.technologies.indexOf(array)
    }
}

class JuniorDeveloper extends Developer{
    constructor(fullName, age, position = 'Junior'){
        super(fullName, age, position )
    }
    code(){
        console.log('Junior разработчик пишет код...')
    }
}

class MiddleDeveloper extends Developer{
    constructor(fullName, age, position = 'Middle'){
        super(fullName, age, position )
    }
    code(){
        console.log('Middle разработчик пишет код...')
    }
}

class SeniorDeveloper extends Developer{
    constructor(fullName, age, position = 'Senior'){
        super(fullName, age, position )
    }
    code(){
        console.log('Senior разработчик пишет код...')
    }
    
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code(); // Junior разработчик пишет код... 
middleDeveloper.code(); // Middle разработчик пишет код…
seniorDeveloper.code(); // Senior разработчик пишет код... 

juniorDeveloper.learnNewTechnology('HTML')
juniorDeveloper.learnNewTechnology('CSS')
juniorDeveloper.learnNewTechnology('JS')


middleDeveloper.learnNewTechnology('HTML')
middleDeveloper.learnNewTechnology('CSS')
middleDeveloper.learnNewTechnology('JS')
middleDeveloper.learnNewTechnology('React')


seniorDeveloper.learnNewTechnology('HTML')
seniorDeveloper.learnNewTechnology('CSS')
seniorDeveloper.learnNewTechnology('JS')
seniorDeveloper.learnNewTechnology('React')
seniorDeveloper.learnNewTechnology('NodeJS')


console.log(juniorDeveloper.fullName, juniorDeveloper.age,
juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
seniorDeveloper.position); // 'Максим', 30, 'Senior'
