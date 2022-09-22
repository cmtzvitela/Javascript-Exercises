class Client {
  constructor(name, accountID, firstDeposit, ownMoney) {
    (this.name = name), (this.accountID = accountID), (this.firstDeposit = firstDeposit), (this.ownMoney = ownMoney);
  }
}

const bank = {
  createClient(name, accountID, firstDeposit, ownMoney) {
    const newClient = new Client(name, accountID, firstDeposit, ownMoney);
    console.log(newClient);
    bank[`${accountID}`] = { name: newClient.name, balance: newClient.firstDeposit, ownMoney: newClient.ownMoney };
  },
  viewBalance(accountID) {
    if (bank[`${accountID}`]) {
      return bank[`${accountID}`].balance;
    }
  },
  withdraw(accountID, amount) {
    if (bank[`${accountID}`]) {
      if (bank[`${accountID}`].balance >= amount) {
        bank[`${accountID}`].balance -= amount;
        bank[`${accountID}`].ownMoney += amount;
      } else return "Insufficient funds";
    }
    return "That's not a valid ID";
  },
  depositToOwnAccount(accountID, amount) {
    if (bank[`${accountID}`].ownMoney >= amount) {
      bank[`${accountID}`].balance += amount;
      bank[`${accountID}`].ownMoney -= amount;
    } else {
      return "Insufficient funds";
    }
  },
  depositToAnotherAccountFromAccount(senderID, receiverID, amount) {
    if (bank[`${senderID}`] && bank[`${receiverID}`] && amount <= bank[`${senderID}`].balance) {
      bank[`${receiverID}`].balance += amount;
      bank[`${senderID}`].balance -= amount;
    } else if (bank[`${senderID}`] && bank[`${receiverID}`] && amount >= bank[`${senderID}`].balance) {
      return "Insufficient funds";
    } else return "Invalid ID";
  },
  depositToAnotherAccountFromOwnMoney(senderID, receiverID, amount) {
    if (bank[`${senderID}`] && bank[`${receiverID}`] && amount <= bank[`${senderID}`].ownMoney) {
      bank[`${receiverID}`].balance += amount;
      bank[`${senderID}`].ownMoney -= amount;
    } else if (bank[`${senderID}`] && bank[`${receiverID}`] && amount >= bank[`${senderID}`].ownMoney) {
      return "Insufficient funds";
    } else return "Invalid ID";
  },
};

bank.createClient("Sarah", "12345", 6000, 400);
bank.createClient("James", "23456", 1200, 8000);
bank.createClient("Erika", "34567", 3500, 1500);
console.log(bank.depositToOwnAccount("12345", 200));
bank.depositToAnotherAccountFromAccount("12345", "23456", 1500);
bank.depositToAnotherAccountFromOwnMoney("23456", "12345", 1000);
console.log(bank.viewBalance("34567"));
bank.withdraw("34567", 2000);
console.log(bank);
