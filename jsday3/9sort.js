// 베열정렬 sort

// number
const points = [40,100,1,15,11,25]
console.log("초기값 : " + points)
points.sort()               // number 의 숫자로 사전식 정렬 
console.log("정렬 : " + points)
points.reverse()            // 내림차순
console.log("역순 정렬 : " + points)
// number 의 크기값으로 비교 정렬
points.sort(function(a,b){
    return a-b          // 오름차순이라면 a-b가 음수일때 a가 b보다 앞에 있다.
})
console.log("number 값 정렬 : " + points)
points.sort(function(a,b){
    return b-a          // 내림차순이라면 b-a가 양수일때 b가 a보다 앞에 있다.
})
console.log("number 값 역순 정렬 : " + points)

// string
const fruits = ['banana','Mango','apple','orange','Carrot']
console.log('초기값 : ' + fruits)
fruits.sort()
console.log('정렬 : ' + fruits)
fruits.reverse()
console.log("역순 정렬 : " + fruits)

const cars = [{type:'volvo',year:2016},
            {type:'Saab',year:2001},
            {type:'BMW',year:2010},
            {type:'audi',year:2014}]
console.log('car 배열 초기값::')
cars.forEach(value => console.log(value))
// 객체는 어떤 속성을 기준으로 정렬(sort)하는지 콜백함수 작성
cars.sort(function(a,b){        // a,b는 객체
    return a.year - b.year
})
console.log('car 배열 year 순서로 정렬::')
cars.forEach(value => console.log(value))
cars.sort(function(a,b){            // 오름차순 (문자열 타입일때)
    if(a.type<b.type) return -1     // a.type 이 사전순으로 b.type보다 앞에 있다면 -1(음수)
    else return 1                   // 그렇지 않다면 1(양수)
})

console.log('car 배열 type 순서로 정렬::')
cars.forEach(value => console.log(value))

// car 배열, 대소문자 상관없이 type 역순으로 정렬 : -> 문자열을 대문자 또는 소문자로 통일하고 비교
function type_reverse(a,b){      // 함수명이 자동으로 함수에 대한 변수(식별값)
    if(b.type.toLowerCase()<a.type.toLocaleLowerCase()) return -1   // toLocaleLowerCase : 소문자로 통일해서 비교
    else return 1                                                   // toLocaleUpperCase : 대문자로 통일해서 비교
}
cars.sort(function(a,b){        // 콜백함수가 함수 리터럴 자체, 함수 리터럴을 화살표 함수 형식으로 가능
    if(b.type<a.type) return -1
    else return 1
})
console.log('car 배열 type 역순으로 정렬::')
cars.forEach(value => console.log(value))

// 대소문자 상관없이
cars.sort(type_reverse)         // 콜백함수가 함수를 참조하는 식별자(변수)
console.log('car 배열 type 역순으로 정렬(대소문자 무관)::')
cars.forEach(value => console.log(value))