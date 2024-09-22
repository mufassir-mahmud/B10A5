document.getElementById('noakhali-donate-btn').addEventListener('click',function(){

    const noakhaliAddAmount = getDonateById('noakhali-amount-input');
    if(isNaN(noakhaliAddAmount)){
        alert('This is not a Number');
        return;
    }
    const noakhaliPreviousAmount = addDonateAmount('noakhali-donation');
    const balance = getBalance('balance')
    if(noakhaliAddAmount > balance ){
        alert('This is not accept');
        return;
    }
    if(noakhaliAddAmount < 0 ){
        alert('This is not accept');
        return;
    }
    const newMAinBalance = balance - noakhaliAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const noakhaliDonateAmount = noakhaliPreviousAmount + noakhaliAddAmount;
    document.getElementById('noakhali-donation').innerText = noakhaliDonateAmount;
//     const div = document.createElement('div');
//     div.innerHTML = `
//     <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
// <dialog id="my_modal_3" class="modal">
//   <div class="modal-box">
//     <form method="dialog">
//       <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     <h3 class="text-lg font-bold">Hello!</h3>
//     <p class="py-4">Press ESC key or click on ✕ button to close</p>
//   </div>
// </dialog>
//     `;
//     document.getElementById('modal').appendChild(div)
})


document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
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
})









document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniAddAmount = getDonateById('feni-amount-input');
    if(isNaN(feniAddAmount)){
        alert('This is not a Number');
        return;
    }
    const feniPreviousAmount = addDonateAmount('feni-donation');
    const balance = getBalance('balance');
    if(feniAddAmount > balance ){
        alert('This is not accept');
        return;
    }
    if(feniAddAmount < 0 ){
        alert('This is not accept');
        return;
    }
    const newMAinBalance = balance-feniAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const feniDonationAmount = feniPreviousAmount + feniAddAmount;
    document.getElementById('feni-donation').innerText = feniDonationAmount;
})



document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const quataAddAmount = getDonateById('quata-add-input');
    if(isNaN(quataAddAmount)){
        alert('This is not a Number');
        return;
    }
    const quataPreviousAmount = addDonateAmount('quata-donation');
    const balance = getBalance('balance');
    if(quataAddAmount > balance ){
        alert('This is not accept');
        return;
    }
    if(quataAddAmount < 0 ){
        alert('This is not accept');
        return;
    }
    const newMAinBalance = balance-quataAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const quataDonationAmount = quataPreviousAmount + quataAddAmount;
    document.getElementById('quata-donation').innerText = quataDonationAmount;
})


