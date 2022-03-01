const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

const giveParcel = () => {
    for(let i = 0; i <= 2;i++){
        const DeletedPeople = peopleWaiting.shift()
        alert(`${DeletedPeople} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
    }
    alert(`Cкоро обеденный перерыв, успеваем обслужить только последнего поситителя`)

    
}
const leaveQueueWithoutParcel  = () => {
    for(let i=3; i = peopleWaiting.length; i++){
        const DeletedPeoples = peopleWaiting.shift()
        alert(`${DeletedPeoples} не получил(а) посылку и ушел(ла) из очереди`)
    } 
}


console.log(giveParcel(),leaveQueueWithoutParcel())