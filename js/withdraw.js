
// Deposit Part

//Get Button
const getWithdrawBtn = document.getElementById('withdrawbtn');
// Click Event
getWithdrawBtn.addEventListener('click',function(){
//Get deposite input field
const getWithdrawField = document.getElementById('withdraw-field'); 
if(getWithdrawField.value > 0 )
{
    // Get the value of the input
const NewWithdraw = getWithdrawField.value;
//convert the string to the integer
const NewWithdrawAmount = parseFloat(NewWithdraw);
// Get the id where you show data data
const showWithdraw = document.getElementById('withdrawValue');
//Get the Old Data from The InnterText
const oldWithdraw = showWithdraw.innerText;
// Convert string to the integer
const oldWithdrawAmount = parseFloat(oldWithdraw);
// Sum to the old data and new data
const newTotal =  oldWithdrawAmount  + NewWithdrawAmount ;
//show the data
showWithdraw.innerText = newTotal;
//clear the input field
getWithdrawField.value = '';

// Balance Part ###################

const getBalance = document.getElementById('balanceValue');
const oldData = getBalance.innerText
const oldDataAmmount = parseFloat(oldData);

getBalance.innerText = oldDataAmmount - NewWithdrawAmount ;

}

else 
{
    alert("Amount Can't be Negative");
    //clear the input field
     getDepositField.value = '';
}




});
