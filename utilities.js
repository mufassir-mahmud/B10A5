function getDonateById(id){
    const inputValue = document.getElementById(id).value ;
    
   
    const inputValueNumber = parseFloat(inputValue);
    
    return inputValueNumber;
    
    
    
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

function addModal(id){
    const div = document.createElement('div');
    div.innerHTML = `
    <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
    `;
    document.getElementById('modal').appendChild(div)
}