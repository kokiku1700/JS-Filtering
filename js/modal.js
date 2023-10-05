import * as foodList from "./foodList.js"

let fName = document.getElementsByClassName('foodName');
let fCountry = document.getElementsByClassName('foodCountry');
let fEx = document.getElementsByClassName('foodEx');
let closeBtn = document.getElementsByClassName('closeBtn');
let modal = document.getElementsByClassName('modalWrap');
let fList = document.getElementsByClassName('fList');

Array.from(fList).forEach((e, i) => {
    e.addEventListener('click', () => {
        modal[0].style.display = 'flex';   
        fName[0].textContent = `${foodList.foodArr[i].name}`;
        fCountry[0].textContent = `${foodList.foodArr[i].country}`;
        fEx[0].textContent = `${foodList.foodArr[i].ex}`;
        document.body.style.overflow = 'hidden';
    })
});

closeBtn[0].addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    modal[0].style.display = 'none';
});

console.log(foodList.foodArr);