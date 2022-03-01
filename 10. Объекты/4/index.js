const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const jobName = {
    job: ''
    }

const giveJobToStudent = (student, jobName) => {
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`)
    const obj = {
        ...student,
        jobName
    }
    return obj
}



const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent)