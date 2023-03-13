

export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    getAge() {
        console.log(`Customer is ${this.age} years old`)
    }
}

// object = instance of class
// let customer = new Customer("John", "Smith");
// customer.greeter();
