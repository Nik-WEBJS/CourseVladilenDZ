const addDays = (date, days) => {
  const day = 86400000
  return new Date(date.getTime() + days * day)
}
console.log(addDays(new Date(), 2));
