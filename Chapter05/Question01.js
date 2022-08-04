class Client {
  constructor(name, accountID, ownMoney, balance) {
    (this.name = name), (this.accountID = accountID), (this.ownMoney = ownMoney), (this.balance = balance);
  }
  accountInfo(ID) {
    if (ID == this.Client.accountID) {
      const info = this.Client;
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
      console.log("You didn't bring enough money to make that deposit");
      return;
    }
  }
  withdraw(money) {
    if (money <= this.balance) {
      return (this.balance = this.balance - money);
    } else {
      console.log("Insufficient funds. Try another amount");
      return;
    }
  }
  depositAnother(money, ID) {
    if (money <= this.ownMoney) {
      let client = accountInfo(ID);
      console.log(client);
      if (client.accountID in bank.client) {
        return client.accountID.balance + money;
      }
    } else {
      console.log("Insufficient funds. Try another amount");
    }
  }
}

let x = 2000;
let y = 2500;
const client1 = new Client("James", 12345, 3000, 1800);
const client2 = new Client("Sarah", 98765, 5000, 2500);
console.log(client1.depositOwn(x));
console.log(client1.withdraw(y));

const bank = {
  client1: client1,
  client2: client2,
  98765: {
    balance: client2.balance,
  },
};

console.log(bank);
console.log(client1.depositAnother(500, "98765"));
console.log(client2.balance);
