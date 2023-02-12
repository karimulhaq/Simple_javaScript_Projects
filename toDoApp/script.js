'use strict';
/// selecting the elements 
const header = document.querySelector('.header');
const btnAdd = document.getElementById('btnAddJs');
const inputData = document.getElementById('inputDataJs');
const listItem = document.querySelector('.listIt');



// add button 
btnAdd.addEventListener('click', function (e) {
    let enteredData = inputData.value;
    if (inputData.value === '') { window.alert('Please, add what you do') }
    else {
        // create li (list items)
        let LI = document.createElement("li");
        let text = document.createTextNode(enteredData);
        LI.appendChild(text);
        listItem.appendChild(LI);
        // let arr = [];
        // arr.push(LI);
        // listItem.appendChild(...arr);


        // edit button
        let btnE = document.createElement('button');
        btnE.textContent = 'Edit';
        LI.appendChild(btnE);
        // style button 
        btnE.style.marginLeft = '2rem';
        btnE.style.marginRight = '1rem';
        btnE.style.marginTop = '1rem';
        // delete button
        let btnD = document.createElement('button');
        btnD.textContent = 'Delete';
        LI.appendChild(btnD);
        /// delete the task of list
        btnD.addEventListener('click', function (e) {
            listItem.removeChild(LI);
        })
        /// edit the task of list 
        btnE.addEventListener('click', function (e) {
            const change = window.prompt('Edit the Task');
            text.nodeValue = change;
        })
    }


    /// clear the input field
    inputData.value = '';
})




