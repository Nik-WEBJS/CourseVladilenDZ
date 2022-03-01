const time = n => (n > 9 ? "" : "0") + n
const getDateFormat = (date, separator = ".") =>
    time(date.getDate()) + separator +
    time(date.getMonth() + 1) + separator +
    date.getFullYear();
let date = new Date()
console.log(getDateFormat(date))