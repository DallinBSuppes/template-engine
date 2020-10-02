// TODO: Write code to define and export the Employee class
class employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id.toString().padStart(3, 0);
    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;