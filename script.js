// document.write("외부 스크립트 방법");

console.log("콘솔창에서 확인하세요");

var num = 10 + 20;
let sum = num + 30;
let string1 = 'Hello World!';
let string2 = "\"시네마 웹사이트\"에 오신것을 환영합니다.";

console.log(num);
console.log(sum);
console.log(string1);
console.log(string2);

let dan = 3;
let gugu = 8;

let string = `${dan} * ${gugu} = ${dan * gugu}`;
console.log(string);

let score = [91, 92, 93, 94, 95];

console.log(score)
console.log(score[2])

let StudentsScore = { // 파이썬의 딕셔너리 같은것
    youjesuck:100,
    parkmyungsu:90,
    jungjunha:80
};

console.log(StudentsScore);
console.log(StudentsScore.youjesuck);
console.log(StudentsScore["parkmyungsu"]);

console.log(10 == '10'); // true => 값만 같은지 체크
console.log(10 === '10'); // false => 값과 자료형까지 같은지 체크
console.log(10 != '10');
console.log(10 !== '10');

// 구구단
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("\n");
}


// 배열 원소의 자료형이 다른경우에 for문으로 출력하면 어떻게 되나?

let arr = [1, "안녕", 3.14, true, "-1"] ;

for(let i = 0; i < 5; i++){
    console.log(arr[i]);
}

