;(()=>{
    let first = true, second = true, third = true, fourth = true, fifth = true
    // true : 비어있음
    // false : 비어있지 않음
    
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
    
    let deg = 0
    function go() {
        if(deg == 0 || deg == 360) {
            $('#LION').animate({left:"+=5vw"}, 500)
        }
        else if(deg == 90 || deg == -270) {
            $('#LION').animate({bottom:"-=5vw"}, 500)
        }
        else if(deg == -90 || deg == 270) {
            $('#LION').animate({bottom:"+=5vw"}, 500)
        }
        else if(deg == 180 || deg == -180) {
            $('#LION').animate({left:"-=5vw"}, 500)
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
    
    let order = ['#FIRST', '#SECOND', '#THIRD', '#FOURTH', '#FIFTH']
    let i = 0, infinite = 0
    
    /*
    function play(i) {
        content = $(order[i]).html()
        return new Promise((resolve, reject) => {
            if(content == repeat_html) {
                i = 0
                reject(i)
            }
            else if(content == go_html) {
                resolve(go)
            }
            else if(content == east_html) {
                resolve(east)
            }
            else if(content == north_html) {
                resolve(north)
            }
            else if(i >= 5 || infinite > 20) {
                window.location.reload()  // 일정 횟수가 넘어가면 페이지 리로드
                reject(200)
            }
            else {
                i++
                reject(i)
            }
        })
    }

    $('.go-btn').click(() => {
        play(i)
        .then((state)=>{
            state()
            i = i + 1
            infinite++
        })
        .catch((index)=>{
            i = index, infinite++
            if(i == 0) {
                play(i)
                .then((state)=>{
                    state()
                    i = i + 1
                    infinite++
                })
                .catch((index)=>{
                    i = index, infinite++
                })
            }
        })
    })
    */
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    let go_sync = async function() {
        if(deg == 0 || deg == 360) {
            setTimeout(()=>{
                $('#LION').animate({left:"+=5vw"}, 500)
            }, 0)
        }
        else if(deg == 90 || deg == -270) {
            setTimeout(()=>{
                $('#LION').animate({bottom:"-=5vw"}, 500)
            }, 0)
        }
        else if(deg == -90 || deg == 270) {
            setTimeout(()=>{
                $('#LION').animate({bottom:"+=5vw"}, 500)
            }, 0)
        }
        else if(deg == 180 || deg == -180) {
            setTimeout(()=>{
                $('#LION').animate({left:"-=5vw"}, 500)
            }, 1000)
        }
        await delay(1000)
    }

    let north_sync = async function() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg - i * 1}deg)`})
            }, i * 10)
        }
        setTimeout(()=>{
            deg -= 90
        }, 950)

        await delay(1000)
    }

    let east_sync = async function() {
        for(let i=0;i<90;i++)
        {
            setTimeout(()=>{
                $('#LION').css({"transform":`rotate(${deg + i * 1}deg)`})
            }, i * 10)
        }

        setTimeout(()=>{
            deg += 90
        }, 950)

        await delay(1000)
    }

    let repeat_sync = async function() {

        await delay(1000)
    }

    let order_list = []
    $('.go-btn').click(() => {
        for(let i=0;i<3;i++) {
            let content = $(order[i]).html()
            if(content == go_html) {
                order_list.push(go_sync())
            }
            else if(content == north_html) {
                order_list.push(north_sync())
            }
            else if(content == east_html) {
                order_list.push(east_sync())
            }
            else if(content == repeat_html) {
                order_list.push(repeat_sync())
            }
        }
        
        j = 0
        for(let i=0;i<3;i+=2, j+=2) {
            async function hi() {
                order_list[j].then(()=> {
                    if(j<3) {
                        order_list[i+1]
                    }
                    else if(order_list[j] == repeat_sync()){
                        console.log(1)
                    }
                })
            }

            hi()
        }
        
    })


})()