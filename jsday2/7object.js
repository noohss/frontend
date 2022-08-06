/*
    자바스크립트 데이터타입 : 원시데이터 타입(number,string,boolean,undefined,null 등) 을 제외한 함수,배열도 object 객체입니다.
            : 데이터 타입 확인 연산자 
    객체 구성 : 프로퍼티(객체의 상태),메소드(객체의 동작/기능)
                객체의 프로퍼티값이 함수일때 메소드 입니다.

    객체 정의  : 자바에서는 클래스를 먼저 정의하고 필요할때 new 연산으로 생성
               자바스크립트는 프로토타입 기반(별도의 클래스 정의가 없는 형식)이라고 합니다. 바로 객체 리터럴로 생성할 수 있습니다.
*/

let person = { name:'sana',
               age:19,
               sayHi : function(){    //메소드 정의:객체의 프로퍼티값이 함수 정의일때 메소드 입니다.
                 console.log(`Hi!! 나는 ${this.name} 입니다.`);   
                 console.log('Hi!! 나는' + this.name + '입니다.');   
               } 
            };        //객체리터럴을 이용하여 객체 생성

console.log('이름 : ' + person.name)
console.log('이름 : ' + person['name'])
console.log('나이 : ' + person.age)
console.log('나이 : ' + person['age'])
console.log(person)
person.sayHi();

// 새로운 속성 추가
person.color = 'red'

// JSON : 자바스크립트 객체와 서로 변환되는 문자열 (자바스크립트의 object를 JSON으로, 또는 반대로 변환 가능)
// 
//          응용 프로그램 -----> select, insert, update,... -----> 서버 -----> 오라클(DBMS)
//                      <----- 오라클에서 select 한 결과를 자바 객체로 매핑해서 전달

//  OPEN API : 포털 서비스, 공공기관, 단체, 학교... 데이터를 공개하고 제공.
//              data.go.kr 에서 json 문자열을 제공하는 사례를 찾아보기.

//                                      REST 서비스
//          개발자          -----         data.go.rk    공개 데이터     -->     서버
//          자바스크립트,자바(스프링)        <-----      JSON 문자열을 전달      <--- (REST 서비스)

// JSON.parse() 메소드는 JSON 문자열을 자바스크립트 객체로 변환 / 서버에서 전송받은 데이터를 처리하기 위해 객체로 변환
// JSON.stringfy() 메소드는 자바스크립트 객체를 JSON 문자열로 변환 / 객체를 서버로 전송하기 위해서 문자열로 변환
// -> 예제는 8json.html