class IndividualAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
}

class JointAccount {
  constructor(accountNumber, balance, secondaryHolder) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.secondaryHolder = secondaryHolder;
  }
}

class RetirementAccount {
  constructor(accountNumber, balance, retirementAge) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.retirementAge = retirementAge;
  }
}

export { IndividualAccount, JointAccount, RetirementAccount };
