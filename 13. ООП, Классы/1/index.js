class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }
    setTechnologies(technologies) {
        return this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }
    setNewStatus(newStatus) {
        return this.status = newStatus
    }
}
const student = new Student('Maxim', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student)
