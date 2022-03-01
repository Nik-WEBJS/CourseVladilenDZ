const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
 
function giveTalonsInOrder(patients, orders) {
   let array = [];
   for (let id of orders) {
       let patient = patients.find(patient => patient.id === id);
       array.push(patient);
   }
   return array;
}
const result = giveTalonsInOrder(people, ordersArr);
console.log(result);