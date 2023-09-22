import * as foodList from './foodList.js';

let search = document.getElementById('search');
let p = document.getElementsByTagName('p');

search.addEventListener("input", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
    Array.from(p).forEach(i => {
        if(i.textContent.includes(searchFilter)){
            i.parentNode.style.display = 'block';
        } else {
            i.parentNode.style.display = 'none';
        }
    });
    console.log(e)
});