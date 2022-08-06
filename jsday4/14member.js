function valid_check(){
    const frm = document.forms[0]
    const name = frm.name
    const email = frm.email
    const password = frm.password
    const age = frm.age
    let isValid = true

    if(name.value==""){
        alert("이름은 필수 입력입니다.")
        name.focus()
        isValid = false
    }
    if(password.value.length < 4){
        alert("패스워드는 4글자 이상입니다.")
        password.focus()
        isValid = false
    }
    
    // 이메일은 기호 @ 와 . 을 모두 포함해야하는데 .은 마지막 위치는 아니어야 한다.
    if(email.value=="" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.endsWith('.')){
        // email.value.indexOf('.') == email.value.length -1 이면 마지막에 . 이 들어감
        alert("이메일은 필수 입력이며 @가 포함되어야 합니다.")
        email.focus()
        isValid = false
    }
// 실제 이메일 주소는 형식이 위의 조건보다 복잡. 계정 문자열에 특수기호는 - _ .만 포함.
//              숫자는 도메인 이름에는 기호가 사용 못함. naver.com O na-ver.com X na334.com
// 복잡한 조건의 유효성 검사를 정규식 표현으로 할 수 있다.
// 정규 표현식은 전화번호, 이메일, 패스워드, 한글, 영문 입력 체크
var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
if(regEmail.test(email.value)===false){
    alert('입력된 값은 이메일 형식이 아닙니다.')
}
/* 
정규표현식은   / / 안에 작성
^ 는 시작
$ 는 끝
[] 는 [] 안의 문자들중 1개 선택, [0-9a-zA-Z]는 숫자, 영문소문자, 영문대문자 중 1개
* 는 0번 이상 문자 반복
[]? 는 [] 안의 문자들이 있는가? 존재여부
() 는 그룹
{n} 는 n개
{n,m}는 n개 이상, m번 이
*/

    if(age.value < 15 || age.value > 99){
        alert('나이는 15~99 범위의 값이어야 합니다.')
        age.focus()
        isValid = false
    }

    // 취미는 반드시 1개 이상을 선택하도록 조건 추가
    let cnt=0
    frm.hobby.forEach(element => {
        if(element.checked) 
        cnt++
    });
    if(cnt==0){
        alert('취미는 1개 이상 선택해야 합니다.')
        isValid=false
    }

    // 함수 결과값 === true (함수 결과값이 string 일 때는 거짓)
    if(isValid){    // 유효성 통과하여 제출     // 자바스크립트는 동등 비교 ==, ===
                                            // === 는 타입까지 비교 예시) 2 == "2" 는 참, 2 === "2" 는 거짓
        frm.action="13result.html"
        // frm.submit()
    }else{
        alert('유효성 통과 실패!!!')
    }
}