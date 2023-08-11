  var Links = {
            setColor : function (color) {
                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length) {
                    alist[i].style.color='yellow';
                    i = i + 1;
                }
            }
        }

        // a링크 글씨색 변경함수
        // function LinksSetColor(color) {
        //     var alist = document.querySelectorAll('a');
        //     var i = 0;
        //     while(i < alist.length) {
        //         alist[i].style.color='powderblue';
        //         i = i + 1;
        //     }
        // }

        var Body = {
            setColor : function(color) {
                document.querySelector('body').style.color = color;   
            },
            setBackgroundColor : function(color) {
                document.querySelector('body').style.backgroundColor = color;
            }
        }

        // 전체 메인화면 배경색 변경함수
        // function BodySetColor(color) {
        //     document.querySelector('body').style.color = color;
        // }

        // 전체 메인화면 글씨색 변경함수
        // function BodySetBackgroundColor(color) {
        //     document.querySelector('body').style.backgroundColor = color;
        // }

        // 전체화면 다크모드 지정 함수
        function nightDayHandler(self) {

            var target = document.querySelector('body');

            if(self.value === 'night') {
                Body.setBackgroundColor('black');
                Body.setColor('white');
                self.value = 'day';          
                Links.setColor('powderblue');  
            } else {
                Body.setBackgroundColor('white');
                Body.setColor('black'); 
                self.value = 'night'; 

                var alist = document.querySelectorAll('a');
                var i = 0;
                while(i < alist.length) {
                    alist[i].style.color='blue';
        
                    i = i + 1;
                }
            }
        }