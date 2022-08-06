// 전역변수 선언할 위치
// 자바스크립트 데이터 타입은 바뀔 수 있음.
let days = document.forms[0].days   // 요소
console.log(typeof days)        // object
console.log(typeof days.vlaue)   // string
days = parseInt(days.value)
console.log(typeof days)        // number, 숙박일수 더할 값
// 선택할 수 있는 입실 날짜의 설정 min 속성값 ~ max 속성값

days = document.forms[0].days
let start = document.forms[0].start
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)
start.max = dateFormat(today)

function daySelect(){
    alert("숙박일수 " + days.value + " 일 입니다.")
    console.log('숙박일수 ' + days.value + ' 일 입니다.')
    if(start.value != '')
        endOutput()
}

function endOutput(){
    // parseInt() : select 에서 선택한 값은 typeof 가 string
    let end = new Date(start.value)
    console.log('입실날짜 : ' + end)
    end.setDate(end.getDate() + parseInt(days.value))
    console.log('퇴실날짜 : ' + end)
    console.log('퇴실날짜 dateFormat : ' + dateFormat(end))
    document.forms[0].end.value=dateFormat(end)
}

function dateFormat(someday){       // 날짜 타입 new Date() 인자 -> yyyy-MM-dd 형식 문자열 리턴
    const month = (someday.getMonth()+1).toString().padStart(2,0)
    const date = someday.getDate().toString().padStart(2,0)
    let result = [someday.getFullYear(),month,date].join('-')

    console.log("dateFormat : " + result)
    return result
}

