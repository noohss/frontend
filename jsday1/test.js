// 주말에 node.js 설치 해보기 -> 자바스크립트 런타입환경 프로그램
// vscode 에서 스크립트 실행이 허용이 안된경우 powershell 에서 설정 변경
// 실행이 되면 오케이
console.log('사과바나나기러기스위스토마토역삼역')
let arr1 = [11, 22, 44, 99, 55];
console.log(arr1);
console.log(typeof arr1);
console.log(arr1[3]);
arr1[2] = 77;
console.log(arr1.sort());           // 정렬 가능  
console.log(arr1.reverse());        // 역순 정렬
arr1[6] = 44;                       // 길이 자동으로 늘어남.
console.log(arr1);
arr1 = [1, 5, 6, 7];
console.log(arr1);

// 문자로 된 배열 만들기
const arr2 = ['apple', 'mango', 'kiwi', 'banana', 'strawberry', 'grape'];
console.log(arr2);
arr2[7] = 'pear';       // 기존 객체 변경은 가능
console.log(arr2);