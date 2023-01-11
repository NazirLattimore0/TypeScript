var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Encapsulation
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance - amount < 0) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(123456, 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(2000);
console.log(account.getBalance()); // "Insufficient funds." 1500
// Abstraction
var Payment = /** @class */ (function () {
    function Payment(amount) {
        this.amount = amount;
    }
    return Payment;
}());
var CashPayment = /** @class */ (function (_super) {
    __extends(CashPayment, _super);
    function CashPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashPayment.prototype.makePayment = function () {
        console.log("Cash Payment of ".concat(this.amount, " is made"));
    };
    return CashPayment;
}(Payment));
var CardPayment = /** @class */ (function (_super) {
    __extends(CardPayment, _super);
    function CardPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPayment.prototype.makePayment = function () {
        console.log("Card Payment of ".concat(this.amount, " is made"));
    };
    return CardPayment;
}(Payment));
var cashPayment = new CashPayment(1000);
cashPayment.makePayment(); //Cash Payment of 1000 is made
var cardPayment = new CardPayment(800);
cardPayment.makePayment(); //Card Payment of 800 is made
// Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () { };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("bark");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("meow");
    };
    return Cat;
}(Animal));
var d = new Dog("doggy");
var c = new Cat("kitty");
d.makeSound(); // "bark"
c.makeSound(); // "meow"
// Polymorphism
var Shape = /** @class */ (function () {
    function Shape(sides) {
        this.sides = sides;
    }
    Shape.prototype.getInfo = function () {
        return "I am a shape";
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.getInfo = function () {
        return "I am a triangle with ".concat(this.sides, " sides");
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.getInfo = function () {
        return "I am a square with ".concat(this.sides, " sides");
    };
    return Square;
}(Shape));
var shape1 = new Triangle(3);
var shape2 = new Square(4);
console.log(shape1.getInfo()); // "I am a triangle with 3 sides"
console.log(shape2.getInfo()); // "I am a square with 4 sides"
var shapes = [
    new Triangle(3),
    new Square(4),
    new Triangle(4),
    new Square(3),
];
shapes.forEach(function (shape) {
    console.log(shape.getInfo());
});
