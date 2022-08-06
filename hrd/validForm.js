// 현재 날짜 new Date()

const today = new Date()
console.log(today)      // Thu Jul 28 2022 14:39:52 GMT+0900 (Korean Standard Time)
                        // 20220728
console.log("년도 : " + today.getFullYear())
console.log("월 : " + (today.getMonth()+1))
console.log("일 : " + today.getDate())

let result = [today.getFullYear(),today.getMonth()+1,today.getDate()].join('-')      
                                // 배열 요소를 특정 기호('-')로 연결

console.log(result)
const month = (today.getMonth()+1).toString().padStart(2,0)
result =[today.getFullYear(),month,today.getDate()].join('-')
console.log(result)
                                // 변수 선언 없이 바로 출력가능
document.forms[0].elements[4].value = result

function valid_check(){
    const frm = document.forms[0]
    const seq = frm.seq
    const name = frm.name
    const phone = frm.phone
    const address = frm.address
    const reg_date = frm.reg_date
    const grade = frm.grade
    const city = frm.bcode
    let isValid = true

    if(seq.value==""){
        alert("회원번호는 필수 입력입니다.")
        seq.focus()
        isValid = false
    }

    if(name.value==""){
        alert("회원성명이 입력되지 않았습니다.")
        name.focus()
        isValid = false
    }
var regPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;;
        if(regPhone.test(phone.value)===false){
            alert("입력된 값은 휴대전화 번호 형식이 아닙니다.")
            phone.focus()
            isValid = false
        }
    
    if(address.value==""){
        alert("회원주소는 필수 입력입니다.")
        address.focus()
        isValid = false
    }
    
    if(reg_date.value==""){
        alert("가입일자는 필수 입력입니다.")
        reg_date.focus()
        isValid = false
    }else if(reg_date.value != result){
            alert("잘못된 날짜입니다.")
            reg_date.focus()
            isValid = false
    }
    
    
    if(grade.value=="A" || grade.value=="B" || grade.value=="C"){
    }else{
        alert("잘못된 회원 등급입니다.")
        grade.focus()
        isValid = false
    }

    var num = /^[0-9]*$/;
    if(city.value < 10 || city.value > 99 || num.test(city.value)===false){
        alert("도시코드 형식이 아닙니다.")
        city.focus()
        isValid = false
    } 
    
}

