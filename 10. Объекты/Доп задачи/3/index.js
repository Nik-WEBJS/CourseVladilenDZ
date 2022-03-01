let theCrime1 = {
   'James': ['Jacob', 'Bill', 'Lucas'],
   'Johnny': ['David', 'Kyle', 'Lucas'],
   'Peter': ['Lucy', 'Kyle'],
}

let deadPeople1 = 'Bill'

let theСrime2 = {
   'Brad': [],
   'Megan': ['Ben', 'Kevin'],
   'Finn': [],
}

let deadPeople2 = 'Ben'

function getKiller(suspectInfo, deadPeople) {
   for (let key of Object.keys(suspectInfo)) {
      if (deadPeople.every(e => suspectInfo[key].includes(e)))
         return key;
   }
}

console.log(getKiller(theСrime2, deadPeople2))
console.log(getKiller(theCrime1, deadPeople1))