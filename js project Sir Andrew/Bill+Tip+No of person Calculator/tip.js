



document.addEventListener('DOMContentLoaded',
    function (){
    const billInput = document.getElementById('bill');
    const peopleInput = document.getElementById('people');
    const tipInput = document.getElementById('tip');
    const totalAmountSpan = document.getElementById('totalAmount');
    const totalTipSpan = document.getElementById('totalTip');
    const amountPerPersonSpan = document.getElementById('amountPerPerson');

    function calculateTip() {
        const bill =parseFloat(billInput.value);
        const people = peopleInput.value;
        const tipPercentage =tipInput.value / 100;

       
        const tipAmount = bill * tipPercentage;
        const totalAmount = bill + tipAmount;
        const amountPerPerson = totalAmount / people;

        totalAmountSpan.textContent = '₹' + totalAmount;
        totalTipSpan.textContent = '₹' + tipAmount;
        amountPerPersonSpan.textContent = '₹' + amountPerPerson;
    }

    billInput.addEventListener('input', calculateTip);
    peopleInput.addEventListener('input', calculateTip);
    tipInput.addEventListener('input', calculateTip);
});
