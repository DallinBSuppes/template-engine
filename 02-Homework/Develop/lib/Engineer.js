// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "engineer";
        this.github = github;
    }

    get Github() {
        return this.github;
    }
}

module.exports = Engineer;