// 문제1. 변수 만들기 (level 2 시작)

// 나이는 변하니까 재할당가능한 변수
// 출신지역은 바뀌지 않으니 재할당 불가능한 변수에 저장

var age = 20;
const region = 'suwon';

/* ================================================================= */

// 문제2. 실행안되는 이유 찾기

var name = 'park';
var id = 0;

function showName(){
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName();
console.log(id);
console.log(name);


/* ================================================================= */

// 문제3. 이자율 계산하기
// 첫 예금액이 5만원 미만이면 연이율 15%
// 5만원 이상이면 연이율 20%

// 1. 변수에 예금액을 넣으면
// 2. 2년 후에 총 예금액을 자동으로 콘솔창에 출력해주는 기능 js로 짜기

var 예금액 = 60000;
var 미래예금액 = 0; 
var year = 2;

if ( 예금액 >= 50000) {
    미래예금액 = 예금액 * (1.2 ** year);

} else {
    미래예금액 = 예금액 * (1.15 ** year);
};



console.log(Math.round(미래예금액)); 
// 소수점으로 나와서 반올림시켜버림 (Math.round함수이용)



/* ================================================================= */


// 문제4. 최대 마실 커피양 구하기

// 방금마신 커피의 2/3만큼 총 2번 리필해주는 카페임
// ex) 처음 커피 90ml 주문하면 첫 리필은 60ml를 해주고, 그 다음은 40ml를 해줌

var first = 360;
var total = 0;


total = first + first * 2/3 + first * 2/3 * 2/3

console.log(total);


/* ================================================================= */


//문제5.퀴즈 ui 만들어보기

// input창에 답적고 제출버튼 누르기
// 답맞추면 alert('성공') ,
// 3번찍어서 못맞추면 alert('멍청이')
// 답은 1335 년도

// var count = 0;
// document.querySelector('#send-answer').addEventListener('click', function() {
//     if( document.querySelector('#answer').value == 1335) {
//         alert('성공');
//     } else {  
//         count++;

//         if(count==3) {
//             alert('멍청아');
//         } else {
//             alert('틀렸습니다');
//         }
//     }
// });


//문제5.퀴즈 ui 만들어보기

// input창에 답적고 제출버튼 누르기
// 답맞추면 alert('성공') ,
// 3번찍어서 못맞추면 alert('멍청이')
// 답은 1335 년도


var count = 0;

document.querySelector('#send-answer').addEventListener('click', function() {
    if(document.querySelector('#answer').value == 1335) {
        alert('맞았어유 축축');
    } else {
        count ++
        if ( count == 3 ) {
            alert ('멍청이');
        } else {
            alert('틀렸어유');
        }
    }
});