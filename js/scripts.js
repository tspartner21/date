console.log("test");

/*

new Date() : 시간관련 인스턴스 객체를 생성해주는 생성자
시간관련  인스턴스 객체 : 다양한 시간관련 메서드를 호출 가능
*/

const month = ['January', 'February', 'Maarch', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const now = new Date();
console.log(now);

//년도값 반환
console.log(now.getFullYear());

//월값 반환
console.log(now.getMonth());

console.log(month[now.getMonth()]);

console.log(days[now.getDay()]);

//시간
console.log(now.getHours());

//분
console.log(now.getMinutes());

//초
console.log(now.getSeconds());

//우리나라 시간대를 전세계 표준시를 변환하는 메서드
const gmtNow = now.toGMTString();

console.log(gmtNow);

//미션1 - new Date()를 활용해서 시간,분,초를 각각 span안에 출력

const h1 = document.querySelector('h1');
const em = h1.querySelector('em');
const span = document.querySelector('span');

const setTime = () => {
  const now = new Date();
  em.textContent = now.getHours() < 13 ? 'pm' : 'am';
  span.textContent = `${now.getHours()} 시간  :  ${now.getMinutes()} 분: ${now.getSeconds()} 초 `;
}

setInterval(setTime, 1000);

//미션2 - 현재 시간이 13시를 넘기면 em안쪽의 'am'을  'pm'으로 출력

//매 초마다 아이콘 및 색상을 변경
// const body = document.body;
// const setColor = () => {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// }

// setInterval(setColor, 1000);








