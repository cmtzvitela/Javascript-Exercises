class Client {
  constructor(name, alias, accountID, ownMoney, balance) {
    this.name = name,
      this.alias = alias,
      this.accountID = accountID,
      this.ownMoney = ownMoney,
      this.balance = balance;
  }
  accountInfo(ID) {
    if (ID === this.accountID) {
      const info = this;
      return info;
    }
  }
  viewBalance() {
    return this.balance;
    
  }
  depositOwn(money) {
    if (money <= this.ownMoney) {
      return (this.balance = money + this.balance);
    } else {
      console.error("You didn't bring enough money to make that deposit");
      return;
    }
  }
  withdraw(money) {
    if (money <= this.balance) {
      return (this.balance = this.balance - money);
    } else {
      console.error("Insufficient funds. Try another amount");
      return;
    }
  }
  depositAnotherfromOwnMoney(money, sender, receiver) {
    if (money <= sender.ownMoney) {
      if (receiver.alias in bank) {
        sender.ownMoney = sender.ownMoney - money;
        console.log(`$${money} were transfered to ${receiver.name}`);
        console.log(`Now you are carrying ${sender.ownMoney}`);
        return (receiver.balance = receiver.balance + money);
      }
    } else {
      console.error("Insufficient funds. Try another amount");
    }
  }
  depositAnotherfromBalance(money, sender, receiver) {
    if (money <= sender.balance) {
      if (receiver.alias in bank) {
        sender.balance = sender.balance - money;
        console.log(`$${money} were transfered to ${receiver.name}`);
        console.log(`Now you are carrying ${sender.balance}`);
        return (receiver.balance = receiver.balance + money);
      }
    } else {
      console.error("Insufficient funds. Try another amount");
    }
  }
}

let x = 2000;
let y = 2500;
const client1 = new Client("James", "client1", 12345, 3000, 1800);
const client2 = new Client("Sarah", "client2", 98765, 5000, 2500);
const client3 = new Client("Amelia", "client3", 78563, 1000, 6500);
console.log(client1.viewBalance());
console.log(client1.depositOwn(x));
console.log(client1.withdraw(y));
console.log(client1.accountInfo(12345));

const bank = {
  client1: client1,
  client2: client2,
  client3: client3,
};

console.log(bank.client3);
console.log(bank);
console.log(client1.depositAnotherfromOwnMoney(850, client1, client2));
console.log(client1.depositAnotherfromBalance(850, client1, client2));
