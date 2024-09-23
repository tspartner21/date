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




