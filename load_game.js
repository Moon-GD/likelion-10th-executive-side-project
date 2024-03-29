;(()=>{
    var score = 0;
    if (localStorage.getItem('score')) { score += localStorage.getItem('score') }
    score = parseInt(score)

    function getCalc() {
        if(score >= 7) {
            location.href = './result/index.html'
        }    
        else if(score < 7) {
            location.href = './result/result.html'
        }
    }

    let order = ['#FIRST', '#SECOND', '#THIRD', '#FOURTH', '#FIFTH']
    let font_order = ['#FIRST-SPLASH', '#SECOND-SPLASH', '#THIRD-SPLASH', '#FOURTH-SPLASH', '#FIFTH-SPLASH']

    function start() {
        for(let i=0;i<5;i++) {
            setTimeout(()=> {
                $(order[i]).css({"background-color":"#FFB531",})
                $(font_order[i]).css({"color":"black"})
            }, i * 300)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"white"})
                $(font_order[i]).css({"color":"rgba(0, 0, 0, 0.3)"})
            }, i * 300 + 300)
        }

        for(let i=0;i<5;i++) {
            setTimeout(()=> {
                $(order[i]).css({"background-color":"#FFB531",})
                $(font_order[i]).css({"color":"black"})
            }, 1800 + i * 100)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"white"})
                $(font_order[i]).css({"color":"rgba(0, 0, 0, 0.3)"})
            }, 1800 + i * 100 + 200)
        }

        for(let i=0;i<5;i++) {
            setTimeout(()=> {
                $(order[i]).css({"background-color":"#FFB531",})
                $(font_order[i]).css({"color":"black"})
            }, 2400)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"white"})
                $(font_order[i]).css({"color":"rgba(0, 0, 0, 0.3)"})
            }, 2600)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"#FFB531",})
                $(font_order[i]).css({"color":"black"})
            }, 2800)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"white"})
                $(font_order[i]).css({"color":"rgba(0, 0, 0, 0.3)"})
            }, 3000)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"#FFB531",})
                $(font_order[i]).css({"color":"black"})
            }, 3200)

            setTimeout(()=> {
                $(order[i]).css({"background-color":"white"})
                $(font_order[i]).css({"color":"rgba(0, 0, 0, 0.3)"})
            }, 3400)
        }
    }

    // 버튼 깜빡임 이벤트
    start()

    // true : 비어있음
    // false : 비어있지 않음
    let first = true, second = true, third = true, fourth = true, fifth = true
    
    // 버튼 html 변수
    let go_html = '<span class="white-space-text">전진</span>'
    let north_html = '<img class="white-space-up" src="./assets/direction.png" alt="위쪽 화살표">'
    let east_html = '<img class="white-space-right" src="./assets/direction.png" alt="오른쪽 화살표">'
    let repeat_html = '<span class="white-space-text">반복</span>'

    // 버튼 클릭 시 경로에 활성화
    function isLoadEmpty() {
        if(first == true)
            return 1
        else if(second == true)
            return 2
        else if(third == true)
            return 3
        else if(fourth == true)
            return 4
        else if(fifth == true)
            return 5            
        else
            return -1
    }

    function loadOn(number, component) {
        if(number == -1) {

        }
        else if(number == 1) {
            $('#FIRST').html(component)
            first = false
        }
        else if(number == 2) {
            $('#SECOND').html(component)
            second = false
        }
        else if(number == 3) {
            $('#THIRD').html(component)
            third = false
        }
        else if(number == 4) {
            $('#FOURTH').html(component)
            fourth = false
        }
        else if(number == 5) {
            $('#FIFTH').html(component)
            fifth = false
        }
    }

    $('#GO').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, go_html)
    })

    $('#NORTH').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, north_html)
    })

    $('#EAST').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, east_html)
    })

    $('#REPEAT').click(()=>{
        let empty_number = isLoadEmpty()
        loadOn(empty_number, repeat_html)

        // repeat은 한 번만 클릭할 수 있도록 설정
        $('#LOOP-SPACE').css({
            "background-color":"grey",
            "color":"white",
            "opacity":"0.3"
        })
        $('#REPEAT').off('click')
    })

    // 클릭 시 버튼 비활성화
    $('#FIRST').click(()=>{
        if(first == false) {
            $('#FIRST').html('')
            first = true
        }
    })

    $('#SECOND').click(()=>{
        if(second == false) {
            $('#SECOND').html('')
            second = true
        }
    })

    $('#THIRD').click(()=>{
        if(third == false) {
            $('#THIRD').html('')
            third = true
        }
    })

    $('#FOURTH').click(()=>{
        if(fourth == false) {
            $('#FOURTH').html('')
            fourth = true
        }
    })

    $('#FIFTH').click(()=>{
        if(fifth == false) {
            $('#FIFTH').html('')
            fifth = true
        }
    })

    // 사자 위치 정보
    let x = 0, y = 0, flag = false
    let deg = 0
    
    let word_list = [
        false, false, false, false, 
        false, false, false
    ]


    let footer = document.querySelector('footer')
    let footer_style = window.getComputedStyle(footer)
    let distance = '5vw'
    if(footer_style.color == 'rgb(128, 0, 128)')
    {
        distance = '8vw'
    }
    function go() {
        // 글자 위치 정보

        if(deg == 0 || deg == 360) {
            $('#LION').animate({left:`+=` + distance}, 500)
            x++
        }
        else if(deg == 90 || deg == -270) {
            $('#LION').animate({bottom:`-=` + distance}, 500)
            y--
        }
        else if(deg == -90 || deg == 270) {
            $('#LION').animate({bottom:`+=` + distance}, 500)
            y++
        }
        else if(deg == 180 || deg == -180) {
            $('#LION').animate({left:`-=` + distance}, 500)
            x--
        }

        if(x==1 && y==0) {
            setTimeout(()=>{
                $('.first-letter').fadeOut()
            }, 400)
            word_list[0] = true
        }
        else if(x==1 && y==1) {
            setTimeout(()=>{
                $('.second-letter').fadeOut()
            }, 400)
            word_list[1] = true
        }
        else if(x==2 && y==1) {
            setTimeout(()=>{
                $('.third-letter').fadeOut()
            }, 400)
            word_list[2] = true
        }
        else if(x==2 && y==2) {
            setTimeout(()=>{
                $('.fourth-letter').fadeOut()
            }, 400)
            word_list[3] = true
        }
        else if(x==3 && y==2) {
            setTimeout(()=>{
                $('.fifth-letter').fadeOut()
            }, 400)
            word_list[4] = true
        }
        else if(x==3 && y==3) {
            setTimeout(()=>{
                $('.sixth-letter').fadeOut()
            }, 400)
            word_list[5] = true
        }
        else if(x==4 && y==3) {
            setTimeout(()=>{
                $('.seventh-letter').fadeOut()
            }, 400)
            word_list[6] = true
        }
        else {
            setTimeout(()=>{
                if(flag == false) {
                    alert('사자가 경로를 이탈하였습니다!')
                    window.location.reload()
                }
            }, 600)
        }

        let correct = true
        for(let i = 0 ; i < 7 ; i++) {
            if(word_list[i] == false) {
                correct = false
                break
            }
        }

        if(correct) {
            setTimeout(()=>{
                flag = true
                setTimeout(()=> {
                    score += 3
                    getCalc()
                }, 700)
            }, 700)
        }
    }

    function north() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg - i * 1}deg)`})
            }, i * 10)
        }
        setTimeout(()=>{
            deg -= 90
        }, 950)
    }

    function east() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg + i * 1}deg)`})
            }, i * 10)
        }

        setTimeout(()=>{
            deg += 90
        }, 950)
    }
    
    $('.go-btn').click(() => {
        // let content = $(order[i]).html()
        let repeat_exist = false
        let p;
        for(p=0;p<5;p++) {
            let content = $(order[p]).html()

            if(content == repeat_html) {
                repeat_exist = true
                break
            }
        }

        // 경로에 반복 키워드가 존재하는 경우
        if(repeat_exist) {
            let loop_max = 60, loop_count = p + 1
            let time = 0
            for(let j=0;j<loop_max/loop_count;j++) {
                for(let i=0;i<=p;i++) {
                    setTimeout(()=>{
                        content = $(order[i]).html()
                        if(content == go_html) {
                            go()
                        }
                        else if(content == north_html) {
                            north()
                        }
                        else if(content == east_html) {
                            east()
                        }
                    }, time + 1000 * i)
                }
                time += p * 1000
            }
        }
        // 경로에 반복 키워드가 존재하지 않는 경우
        else {
            for(let i=0;i<5;i++) {
                setTimeout(()=>{
                    content = $(order[i]).html()
                    if(content == go_html) {
                        go()
                    }
                    else if(content == north_html) {
                        north()
                    }
                    else if(content == east_html) {
                        east()
                    }
                }, 1000 * i)
            }
            setTimeout(()=>{
                alert('아쉽지만 글씨를 모두 지나가지 못하였습니다!')
                window.location.reload()
            }, 5000)
        }
    })

    $('.reload-btn').click(()=>{
        window.location.reload()
    })

    $('.pass-a').click(() => {
        getCalc()
    })
})()