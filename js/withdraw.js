document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Olease Provide a Valid Number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("You cant Withdraw more than Total Balance");
    return;
  }

  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
