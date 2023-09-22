/*
클래스 구현
같은 내용의 객체를 여러게 만들기 위해 사용
*/
class food {
    constructor(name, country, ex) {
        this.name = name;
        this.country = country;
        this.ex = ex;
    }
}
/*
다른 js파일에서 사용하기 위해 export를 사용
여러 객체를 반복문을 돌리기 위해 배열을 만들고 class를 이용해 만든 객체를 
집어 넣는다. 
*/
export let foodArr = [];

// 생성한 객체를 foodArr에 넣는다.
foodArr.push(new food(
    '라면', 
    "일본", 
    '라면의 원조는 일본으로 라멘으로 불린다. 이후 한국에서 인스턴트식 라면이 성장했다.'
))

foodArr.push(new food(
    '짜장면', 
    "중국", 
    "짜장면의 원조는 중국이지만 우리나라 방식으로 재해석 했다."
))

foodArr.push(new food(
    "김치",
    "한국",
    "김치는 맛있다."
))

foodArr.push(new food(
    "쌀국수",
    "중국 남부, 동남아시아",
    "고기로 육수를 내어 쌀로 만든 면으로 만든 음식이다."
))

foodArr.push(new food(
    "삼겹살",
    "한국",
    "삼겹살은 거의 한국에서 많이 먹으며 소주와 함께 먹으면 맛이 배가 된다."
))

foodArr.push(new food(
    "토마토 파스타",
    "이탈리아",
    "이탈리아의 면 요리로 토마스를 베이스로 한다. 한국에서 일반적인 파스타다."
))

foodArr.push(new food(
    "크림 파스타",
    "이탈리아",
    "이탈리아의 면 요리로 크림을 이용해 만든다. 살짝 느끼할 수 있지만 맛은 훌륭하다."
))

foodArr.push(new food(
    "햄버거",
    "독일",
    "햄버거는 미국이 유명하지만 원조는 독일로 간편하고 생각보다 영양소가 균형있어 완전 식품이라고 불린다."
))

//객체가 생성될 때 마다 html에 태그 생성과 동시에 객체 name 적용
let ulTag = document.getElementsByClassName('imgUl')[0];
for ( let i = 0; i < foodArr.length; i++ ) {
    let liTag = document.createElement('li');
    let imgTag = document.createElement('img');
    let pTag = document.createElement('p');
    
    imgTag.src = `../img/${i}.jpg`
    ulTag.appendChild(liTag);
    liTag.appendChild(imgTag);
    liTag.appendChild(pTag);
    pTag.textContent = `${foodArr[i].name}`;
}

