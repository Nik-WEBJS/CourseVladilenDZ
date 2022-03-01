function getWinner(applicants, winnerObject) {
   let keys = Object.keys(applicants);
   return Object.assign(winnerObject, applicants[keys[getRandomNumberInRange(0, keys.length)]]);
}

const todaysWinner = {
   prize: '10 000$',
}

const winnerApplicants = {
   '001': {
      name: 'Максим',
      age: 25,
   },
   '201': {
      name: 'Светлана',
      age: 20,
   },
   '304': {
      name: 'Екатерина',
      age: 35,
   },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);

function getRandomNumberInRange(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}