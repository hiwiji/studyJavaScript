
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



// 숙제1. 전송누르면 아이디/ 비번 입력란 둘다 공백검사
// 아이디 전송버튼 누르면
document.getElementById('send').addEventListener('click', function() {
    // input에 입력한 값이 공백일 때 alert창 켜기
    if(document.getElementById('id').value == '') {
        alert('아이디를 입력해주세요');
    }
    if(document.getElementById('password').value == '') {
        alert('비밀번호를 입력해주세요');
    }

    // 숙제2. 비번이 6자 미만이면 더 길게 입력하라고 안내문 띄우기 (alert로)
    if(document.getElementById('password').value.length < 6) {
        alert('비밀번호를 6자이상으로 입력해주세요');
    }
});



document.getElementById('id').addEventListener('change', function() {
    console.log('안녕');
});
