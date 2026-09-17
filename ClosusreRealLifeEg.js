// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // Private variable

//   return {
//     deposit(amount) {
//       if (amount > 0) {
//         balance += amount;
//         return `Deposited $${amount}. New balance: $${balance}`;
//       }
//     },
//     withdraw(amount) {
//       if (amount <= balance) {
//         balance -= amount;
//         return `Withdrew $${amount}. Remaining balance: $${balance}`;
//       }
//       return "Insufficient funds!";
//     },
//     getBalance() {
//       return balance;
//     }
//   };
// }

// const myAccount = createBankAccount(100);

// console.log(myAccount) ; 

// console.log(myAccount.deposit(50));   // "Deposited $50. New balance: $150"
// console.log(myAccount.withdraw(30));  // "Withdrew $30. Remaining balance: $120"
// console.log(myAccount.balance);       // undefined (Direct access is blocked!)
// console.log(myAccount.getBalance());  // 120

//------------------------------------------------

function outer() {
    let x = 10;
    return function() {
        return x++;
    };
}

const fn = outer(); //one function will be there in this 

console.log(fn()); //10
console.log(fn()); //11
console.log(fn());//12