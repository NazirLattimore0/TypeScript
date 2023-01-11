// Encapsulation
class BankAccount {
  private accountNumber: number;
  private balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance - amount < 0) {
      console.log("Insufficient funds.");
      return;
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

let account = new BankAccount(123456, 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
account.withdraw(2000);
console.log(account.getBalance()); // "Insufficient funds." 1500

// Abstraction
abstract class Payment {
  constructor(public amount: number) {}
  abstract makePayment(): void;
}
class CashPayment extends Payment {
  makePayment() {
    console.log(`Cash Payment of ${this.amount} is made`);
  }
}
class CardPayment extends Payment {
  makePayment() {
    console.log(`Card Payment of ${this.amount} is made`);
  }
}
let cashPayment = new CashPayment(1000);
cashPayment.makePayment(); //Cash Payment of 1000 is made
let cardPayment = new CardPayment(800);
cardPayment.makePayment(); //Card Payment of 800 is made

// Inheritance
class Animal {
  constructor(public name: string) {}
  makeSound(): void {}
}
class Dog extends Animal {
  makeSound() {
    console.log("bark");
  }
}
class Cat extends Animal {
  makeSound() {
    console.log("meow");
  }
}
let d = new Dog("doggy");
let c = new Cat("kitty");
d.makeSound(); // "bark"
c.makeSound(); // "meow"

// Polymorphism

class Shape {
  constructor(public sides: number) {}
  getInfo(): string {
    return "I am a shape";
  }
}

class Triangle extends Shape {
  getInfo(): string {
    return `I am a triangle with ${this.sides} sides`;
  }
}
class Square extends Shape {
  getInfo() {
    return `I am a square with ${this.sides} sides`;
  }
}

let shape1: Shape = new Triangle(3);
let shape2: Shape = new Square(4);

console.log(shape1.getInfo()); // "I am a triangle with 3 sides"
console.log(shape2.getInfo()); // "I am a square with 4 sides"

let shapes: Shape[] = [
  new Triangle(3),
  new Square(4),
  new Triangle(4),
  new Square(3),
];

shapes.forEach((shape) => {
  console.log(shape.getInfo());
});
