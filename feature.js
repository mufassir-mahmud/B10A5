document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('history-btn').classList.remove('btn-outline');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('btn-outline');
})

document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('donation-btn').classList.remove('btn-outline');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.add('btn-outline');
})

