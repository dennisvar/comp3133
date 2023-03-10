"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("Customer is ".concat(this.age, " years old"));
    };
    return Customer;
}());
exports.Customer = Customer;
// object = instance of class
// let customer = new Customer("John", "Smith");
// customer.greeter();
