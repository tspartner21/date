console.log("test");

/*

setInterval : 특정 함수를 일정시간마다 반복 호출
setInterval(함수, 인터벌 시간);
인터벌간격마다 함수 반복 호출

new Date() : 시간관련 인스턴스 객체를 생성해주는 생성자
시간관련  인스턴스 객체 : 다양한 시간관련 메서드를 호출 가능
*/


//미션1 - new Date()를 활용해서 시간,분,초를 각각 span안에 출력


const title = document.querySelector('h1');
const [em, spanHr, spanMin, spanSec] = title.children;

setInterval(() => {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  let apm = hr < 13 ? "am" : "pm";

  em.innerText = apm;
  spanHr.innerText = hr;
  spanMin.innerText = min;
  spanSec.innerText = sec;

  // //배경색 1초마다 변경
  // const r = Math.floor(Math.random() * 256);
  // const g = Math.floor(Math.random() * 256);
  // const b = Math.floor(Math.random() * 256);

  // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // 1초마다 psy의 강남스타일 가사 표시
  // const psy = document.querySelector('.psy');
  // const lyrics = [
  //   "낮에는 따사로운 인간적인 여자",
  //   "커피 한잔의 여유를 아는 품격있는 여자",
  //   "밤이 오면 심장이 뜨거워지는 여자",
  //   "그런 반전 있는 여자",
  //   "낮에는 따사로운 인간적인 여자",
  //   "커피 한잔의 여유를 아는 품격있는 여자",
  //   "밤이 오면 심장이 뜨거워지는 여자",
  //   "그런 반전 있는 여자",
  // ];
  // let idx = Math.floor(Math.random() * lyrics.length);
  // psy.innerText = lyrics[idx];


}, 1000);












