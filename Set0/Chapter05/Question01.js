class Client {
  constructor(name, accountID, firstDeposit, ownMoney) {
    (this.name = name), (this.accountID = accountID), (this.firstDeposit = firstDeposit), (this.ownMoney = ownMoney);
  }
}

const bank = (function () {
  const clients = {};
  return {
    createClient(name, accountID, firstDeposit, ownMoney) {
      const newClient = new Client(name, accountID, firstDeposit, ownMoney);
      clients[`${accountID}`] = { name: newClient.name, balance: newClient.firstDeposit, ownMoney: newClient.ownMoney };
    },
    viewBalance(accountID) {
      if (clients[`${accountID}`]) {
        return clients[`${accountID}`].balance;
      }
    },
    withdraw(accountID, amount) {
      if (clients[`${accountID}`]) {
        if (clients[`${accountID}`].balance >= amount) {
          clients[`${accountID}`].balance -= amount;
          clients[`${accountID}`].ownMoney += amount;
        } else {
          throw new Error("Insufficient funds");
        }
      }
      throw new Error("That's not a valid ID");
    },
    depositToOwnAccount(accountID, amount) {
      if (clients[`${accountID}`].ownMoney >= amount) {
        clients[`${accountID}`].balance += amount;
        clients[`${accountID}`].ownMoney -= amount;
        return clients[`${accountID}`].balance;
      } else {
        throw new Error("Insufficient funds");
      }
    },
    depositToAnotherAccountFromAccount(senderID, receiverID, amount) {
      if (clients[`${senderID}`] && clients[`${receiverID}`] && amount <= clients[`${senderID}`].balance) {
        clients[`${receiverID}`].balance += amount;
        clients[`${senderID}`].balance -= amount;
      } else if (clients[`${senderID}`] && clients[`${receiverID}`] && amount >= clients[`${senderID}`].balance) {
        throw new Error("Insufficient funds");
      } else throw new Error("That's not a valid ID");
    },
    depositToAnotherAccountFromOwnMoney(senderID, receiverID, amount) {
      if (clients[`${senderID}`] && clients[`${receiverID}`] && amount <= clients[`${senderID}`].ownMoney) {
        clients[`${receiverID}`].balance += amount;
        clients[`${senderID}`].ownMoney -= amount;
      } else if (clients[`${senderID}`] && clients[`${receiverID}`] && amount >= clients[`${senderID}`].ownMoney) {
        throw new Error("Insufficient funds");
      } else throw new Error("That's not a valid ID");
    },
  };
})();

bank.createClient("Sarah", "12345", 6000, 400);
bank.createClient("James", "23456", 1200, 8000);
bank.createClient("Erika", "34567", 3500, 1500);
console.log(bank.depositToOwnAccount("12345", 200));
bank.depositToAnotherAccountFromAccount("12345", "23456", 1500);
bank.depositToAnotherAccountFromOwnMoney("23456", "12345", 1000);
console.log(bank.viewBalance("34567"));
console.log(bank);
