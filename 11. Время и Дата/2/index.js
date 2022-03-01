function getDaysBeforeBirthday(nextBirthdayDate) { 
    return Math.round((nextBirthdayDate - new Date()) / 1000 / 3600 / 24);
  }
console.log(getDaysBeforeBirthday(new Date(2022, 5, 16)))