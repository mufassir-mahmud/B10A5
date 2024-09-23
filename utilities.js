function getDonateById(id) {
  const inputValue = document.getElementById(id).value ;
  
  if(isNaN(inputValue) || inputValue == ""){
    alert('This is not a number');
    document.getElementById(id).value = '';
    return 
  }
  else{
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber
  }
  
}

function getBalance(id){
const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}

function addDonateAmount(id){
    const donationBalance = document.getElementById(id).innerText;
    const donationBalanceNumber = parseFloat(donationBalance);
    return donationBalanceNumber
}

// function getBtn(id){
//   document.getElementById('donation-section').classList.add('hidden');
//   document.getElementById('donation-btn').classList.remove('bg-[#B4F461]').classList.add('btn-outline')
// }

