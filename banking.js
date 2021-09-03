//back to home page
document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';
});
//function to avoid doble code. button event handler and getting input value
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputTotalAmount = parseFloat(inputText);
    //clearing input field
    input.value = '';
    return inputTotalAmount;
}
//updating deposit and withdraw total amount field by function
function getTotalAmount(amountFieldId, totaAmount) {
    const totalFieldAmount = document.getElementById(amountFieldId);
    const totalFieldAmountText = totalFieldAmount.innerText;
    const previousAmount = parseFloat(totalFieldAmountText);
    const updateTotalAmount = previousAmount + totaAmount;
    totalFieldAmount.innerText = updateTotalAmount.toFixed(2);
}
//GET CURRENT balance
function getCurrentBalance() {
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    return previousBalance;
}

//updating total balance field by function
function totalBalance(amount, isAdd) {
    const totalBalance = document.getElementById('totalBalance');
    /*  const totalBalanceText = totalBalance.innerText;
     const previousBalance = parseFloat(totalBalanceText); */
     const previousBalance=getCurrentBalance();
    if (isAdd == true) {
        const updateTotalBalance = previousBalance + amount;
        totalBalance.innerText = updateTotalBalance.toFixed(2);
    }
    else {
        const updateTotalBalance = previousBalance - amount;
        totalBalance.innerText = updateTotalBalance.toFixed(2);
    }
}

//deposit button event handler
document.getElementById('depositBtn').addEventListener('click', function () {
    //getting deposit input value by function calling
    const depositTotalAmount = getInputValue('inputDeposit');
    if (depositTotalAmount > 0) {
        //get total deposit amount by function
        getTotalAmount('depositTotal', depositTotalAmount);
        //get total balance afer deposit by function
        totalBalance(depositTotalAmount, true);
    } else {
        return document.getElementById('depositHints').innerText = 'Please input a positive number and greater than zero!!'
    }

    //get input value manual without function
    /* const inputDeposit = document.getElementById('inputDeposit');
    const inputDepositText = inputDeposit.value;
    const depositTotalAmount = parseFloat(inputDepositText); */

    //get total deposit amount without function
    /* const depositTotal = document.getElementById('depositTotal');
    const depositTotalText= depositTotal.innerText;
    const previousDeposit = parseFloat(depositTotalText);
    const updateDepositAmount = previousDeposit +depositTotalAmount;
    depositTotal.innerText=updateDepositAmount.toFixed(2); */

    //get total balance amount without function
    /* const totalBalance=document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance= parseFloat(totalBalanceText);
    const updateTotalBalance= previousBalance+depositTotalAmount;
    totalBalance.innerText=updateTotalBalance.toFixed(2); */
});
//withdraw button event handler
document.getElementById('withdrawBtn').addEventListener('click', function () {
    ////getting withdraw input value by function calling
    const withdrawTotalAmount = getInputValue('inputWithdraw');
    const currentBalance = getCurrentBalance();
    if (withdrawTotalAmount > 0 && withdrawTotalAmount < currentBalance) {
        //get total withdraw amount by function
        getTotalAmount('withdrawTotal', withdrawTotalAmount);
        //get total balance after withdraw by function
        totalBalance(withdrawTotalAmount, false);
    }
    else {
        return document.getElementById('withdrawHints').innerText = 'Please input a positive number and more than available balance!!'

    }
    //get input withdraw value without function
    /* const inputWithdraw= document.getElementById('inputWithdraw');
    const inputWithdrawText = inputWithdraw.value;
    const withdrawTotalAmount = parseFloat(inputWithdrawText); */

    //get withdraw total without function
    /*  const totalWithdraw= document.getElementById('withdrawTotal');
     const totalWithdrawText=totalWithdraw.innerText;
     const previousWithdraw= parseFloat(totalWithdrawText);
     const updateWithdrawAmount= previousWithdraw +withdrawTotalAmount;
     totalWithdraw.innerText=updateWithdrawAmount.toFixed(2); */

    ///get total balance after withdrawing without function
    /* const totalBalance=document.getElementById('totalBalance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance=parseFloat(totalBalanceText);
    const updateTotalBalance= previousBalance - withdrawTotalAmount;
    totalBalance.innerText=updateTotalBalance.toFixed(2); */
})