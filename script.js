document.getElementById('noakhali-donate-btn').addEventListener('click',function(){

    const noakhaliAddAmount = getDonateById('noakhali-amount-input');
    
    if(isNaN(Number(noakhaliAddAmount))   ){
        // alert('This isnot a Number');
        document.getElementById('noakhali-amount-input').value = '';
        return;
    }
    
   
     
    const noakhaliPreviousAmount = addDonateAmount('noakhali-donation');
    const balance = getBalance('balance')
    if(noakhaliAddAmount > balance ){
        alert('This is not accept');
        document.getElementById('noakhali-amount-input').value = '';
        return;
    }
    if(noakhaliAddAmount < 0 ){
        alert('This is not accept');
        document.getElementById('noakhali-amount-input').value = '';
        return;
    }
    const newMAinBalance = balance - noakhaliAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const noakhaliDonateAmount = noakhaliPreviousAmount + noakhaliAddAmount;
    document.getElementById('noakhali-donation').innerText = noakhaliDonateAmount;
    
    document.getElementById('my_modal_1').showModal();
    const donationFor = document.getElementById('noakhali-donate').innerText;
    const div = document.createElement('div');
    div.classList.add('p-10', 'm-5' ,'space-y-5', 'border-2', 'rounded-lg')
    div.innerHTML = `
    <h2 class="text-base">${noakhaliAddAmount} taka is ${donationFor} </h2>
    <p>Date : ${new Date() } </p>
     
    `;
    document.getElementById('history-content').appendChild(div);
    document.getElementById('noakhali-amount-input').value = '';
})


// document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
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
// })









document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const feniAddAmount = getDonateById('feni-amount-input');
    if(isNaN(feniAddAmount)){
        document.getElementById('feni-amount-input').value = '';
        return;
    }
    const feniPreviousAmount = addDonateAmount('feni-donation');
    const balance = getBalance('balance');
    if(feniAddAmount > balance ){
        alert('This is not accept');
        document.getElementById('feni-amount-input').value = '';
        return;
    }
    if(feniAddAmount < 0 ){
        alert('This is not accept');
        document.getElementById('feni-amount-input').value = '';
        return;
    }
    const newMAinBalance = balance-feniAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const feniDonationAmount = feniPreviousAmount + feniAddAmount;
    document.getElementById('feni-donation').innerText = feniDonationAmount;
    document.getElementById('my_modal_1').showModal();
    const donationFor = document.getElementById('feni-donate').innerText;
    const div = document.createElement('div');
    div.classList.add('p-10', 'm-5' , 'space-y-5', 'border-2', 'rounded-lg')
    div.innerHTML = `
    <h2 class="text-base">${feniAddAmount} taka is ${donationFor} </h2>
    <p>Date : ${new Date() } </p>
     
    `;
    document.getElementById('history-content').appendChild(div);
    document.getElementById('feni-amount-input').value = '';
})



document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const quataAddAmount = getDonateById('quata-add-input');
    if(isNaN(quataAddAmount)){
        document.getElementById('quata-add-input').value = '';
        return;
    }
    const quataPreviousAmount = addDonateAmount('quata-donation');
    const balance = getBalance('balance');
    if(quataAddAmount > balance ){
        alert('This is not accept');
        document.getElementById('quata-add-input').value = '';
        return;
    }
    if(quataAddAmount < 0 ){
        alert('This is not accept');
        document.getElementById('quata-add-input').value = '';
        return;
    }
    const newMAinBalance = balance-quataAddAmount;
    document.getElementById('balance').innerText = newMAinBalance;
    const quataDonationAmount = quataPreviousAmount + quataAddAmount;
    document.getElementById('quata-donation').innerText = quataDonationAmount;
    document.getElementById('my_modal_1').showModal();
    
    const donationFor = document.getElementById('quota-donate').innerText;
    const div = document.createElement('div');
    div.classList.add('p-10', 'm-5' , 'space-y-5', 'border-2', 'rounded-lg')
    div.innerHTML = `
    <h2 class="text-base">${quataAddAmount} taka is ${donationFor} </h2>
    <p>Date : ${new Date() } </p>
     
    `;
    document.getElementById('history-content').appendChild(div);
    document.getElementById('quata-add-input').value = '';
    
})


