console.log('1. 현재날짜와 시간(로컬)')
console.log(new Date())
console.log('2. 날짜를 직접 지정')
console.log(new Date(2022,7,12))        // 월을 number 로 표기할 때는 0~11
console.log(new Date('2022-07-12'))
console.log('3. 날짜와 시간')
console.log(new Date(2022,6,23,16,8,30))
console.log('4. 세계표준시간 - UTC')
console.log(new Date().toUTCString())
console.log('5. 세계표준시간 - ISO')
console.log(new Date().toISOString())       // ms까지 표시
console.log('6. 로컬 형식(운영체제 설정 국가)')
console.log(new Date().toLocaleString())
console.log('* 날짜는 자바에서는 long 타입 값으로 1970-01-01 0시 기준 ms 값')
console.log(new Date().getTime)
console.log('7. 날짜/시간 메소드')
const today = new Date()
console.log('7-1) 년도 : ' + today.getFullYear())
console.log('7-2) 월 : ' + today.getMonth())
console.log('7-3) 일 : ' + today.getDate())
console.log('7-4) 시 : ' + today.getHours())
console.log('7-5) 분 : ' + today.getMinutes())
console.log('7-6) 초 : ' + today.getSeconds())
console.log('8. 날짜변경 메소드')
today.setFullYear(today.getFullYear()+3)        // 날짜 변경
console.log('1) 3년 후 : ' + today)
// today = new Date()
// today.setFullYear(today.getFullYear()-3)
// console.log('2) 3년 전 : ' + today)

// 내 생일 + 3000일은?
let mybirth = new Date('1998-05-15')
console.log('3) 나의 탄생일 : ' + mybirth.toLocaleString())
mybirth.setDate(mybirth.getDate()+10000)
console.log('4) 나의 생일 +10000일 : ' + mybirth.toLocaleString())

// 내가 태어난지 몇일?
mybirth = new Date('1998-05-15')
let diff = new Date() - mybirth
console.log('5) new Date() - mybirth')
console.log(diff + "ms")    // ms 를 일로 바꾸기 1일 = 24시간 * 60분 * 60 * 1000 ms
const $1day = 24*60*60*1000
console.log('6) 내가 태어난지 Day+'  + Math.floor(diff/$1day) + "일")     // 자바스크립트 반올림, 올림

today = new Date()
console.log(today)      // Thu Jul 28 2022 14:39:52 GMT+0900 (Korean Standard Time)
                        // 20220728
console.log("년도 : " + today.getFullYear())
console.log("월 : " + (today.getMonth()+1))
console.log("일 : " + today.getDate())
// 월, 일은 무조건 2자리 숫자로, 만약에 1~9 이면 앞에 0 추가
const month = (today.getMonth()+1).toString().padStart(2,0)
const date = [today.getDate().toString(),month,date].join('-')

let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')      
                                // 배열 요소를 특정 기호('-')로 연결
console.log('9. 날짜형식 yyyy-mm-dd')
console.log(result)
console.log('10. 날짜형식 yyyymmdd')
result =[today.getFullYear(),month,today.getDate()].join('-')
console.log(result)