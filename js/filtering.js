import * as foodList from './foodList.js';

let search = document.getElementById('search');
let p = document.getElementsByTagName('p');

/* 
    input에 단어를 작성할 때 마다 동적으로 필터링해주느 코드
*/
search.addEventListener("input", (e) => {
    const searchFilter = e.target.value.trim();
    Array.from(p).forEach(i => {
        if(i.textContent.includes(searchFilter)){
            i.parentNode.style.display = 'block';
        } else {
            i.parentNode.style.display = 'none';
        }
    });
    console.log(e)
});