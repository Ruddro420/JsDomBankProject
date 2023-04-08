
// Deposit Part

//Get Button
const getDepositBtn = document.getElementById('depositBtn');
// Click Event
getDepositBtn.addEventListener('click',function(){
//Get deposite input field
const getDepositField = document.getElementById('depositField'); 
// Get the value of the input
if(getDepositField.value > 0 ) 
{
const NewDeposit = getDepositField.value;
//convert the string to the integer
const NewDepositAmount = parseFloat(NewDeposit);
// Get the id where you show data data
const showDeposit = document.getElementById('depositValue');
//Get the Old Data from The InnterText
const oldDeposit = showDeposit.innerText;
// Convert string to the integer
const oldDepositAmount = parseFloat(oldDeposit);
// Sum to the old data and new data
const newTotal =  oldDepositAmount  + NewDepositAmount ;
//show the data
showDeposit.innerText = newTotal;
//clear the input field
getDepositField.value = '';

// Balance Part ###################

// Balance Part ###################

const getBalance = document.getElementById('balanceValue');
const oldData = getBalance.innerText;
const oldDataAmmount = parseFloat(oldData);

getBalance.innerText = oldDataAmmount + NewDepositAmount;
}

else 
{
    alert("Amount Can't be Negative");
    //clear the input field
     getDepositField.value = '';
}


});
