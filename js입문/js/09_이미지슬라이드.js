
// 로그인 모달창
$('#loginBtn').on('click', function(){
    $('.black-bg').addClass('show-modal');
});

$('#close').on('click', function(){
    $('.black-bg').removeClass('show-modal');
});


// 네비바 토글
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function() {
    document.getElementsByClassName('list-group')[0].classList.toggle('show');
});



var 아이디입력값 = document.getElementById('id').value;
var 비번입력값 = document.getElementById('password').value;

// 숙제1. 전송누르면 아이디/ 비번 입력란 둘다 공백검사
// 아이디 전송버튼 누르면
document.getElementById('send').addEventListener('click', function() {
    // input에 입력한 값이 공백일 때 alert창 켜기
    if(아이디입력값 == '') {
        alert('아이디를 입력해주세요');
    }
    if(document.getElementById('password').value == '') {
        alert('비밀번호를 입력해주세요');
    }

    // 숙제2. 비번이 6자 미만이면 더 길게 입력하라고 안내문 띄우기 (alert로)
    // 09_정규표현식 숙제 - form 전송시 입력한 비번에 영어대문자 있는지 검사
    if(document.getElementById('password').value.length < 6) {
        alert('비밀번호를 6자이상으로 입력해주세요');
    }
});

// 다크모드 만들기
// badge 클릭회수가 1회(홀수) 내부 글자를 light 변경
// badge 클릭회수가 2회(짝수) 내부 글자를 dark로 변경 반복 


var count = 0;

document.querySelector('.badge').addEventListener('click', function() {
    count++;
    
    if ( count % 2 == 1 ) {
        document.querySelector('.badge').innerHTML = 'Light 🔄';
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
    } else {
        document.querySelector('.badge').innerHTML = 'Dark 🔄';
       document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';
    }
}); 


// 이미지 슬라이드 만들기

// 1. 시작화면 만들기 (미리 HTML / CSS 만들기)
// 2. 버튼2 누른 후 최종화면 만들기



// 3. 원할 때 최종화면 변하게  코드 작성(js) - 2번
document.querySelector('.slide-2').addEventListener('click', function() {
    document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
})

// 숙제 : 버튼 1번 만들기 
document.querySelector('.slide-1').addEventListener('click', function() {
    document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
})


// 숙제 : 버튼 3번 버튼 만들기
document.querySelector('.slide-3').addEventListener('click', function() {
    document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
})


// 이전, 다음버튼 기능 만들기
