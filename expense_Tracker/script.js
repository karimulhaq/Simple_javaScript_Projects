'use strict'


//// html seleced items
const nameField = document.getElementById('nameJs');
const dateField = document.getElementById('dateJs');
const amountField = document.getElementById('amountJs');
const btnAddExpense = document.getElementById('btnAddJs');
const tableData = document.getElementById('tableJs');


// Add button handaler
btnAddExpense.addEventListener('click', function (e) {

    if (!nameField.value || !dateField.value || !amountField.value) { alert('please!, fill in the blank fields') }
    else {
        let nameData = nameField.value;
        let dateData = dateField.value;
        let amountData = amountField.value;
        let tableRow = document.createElement("tr");
        let td1 = tableRow.appendChild(document.createElement("td"));
        let td2 = tableRow.appendChild(document.createElement("td"));
        let td3 = tableRow.appendChild(document.createElement("td"));

        td1.innerHTML = nameData;
        td2.innerHTML = dateData;
        td3.innerHTML = amountData;
        tableData.appendChild(tableRow);

    }
    nameField.value = dateField.value = amountField.value = '';

})

















