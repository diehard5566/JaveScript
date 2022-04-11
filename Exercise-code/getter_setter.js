const person = {
    firstName: "shihyao",
    lastName: "Hung",
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const part = value.split(" ");
        this.firstName = part[0];
        this.lastName = part[1];
    }
};

person.fullName = "John wick"

console.log(person);
