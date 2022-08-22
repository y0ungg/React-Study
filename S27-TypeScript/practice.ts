//1. Primitives
//number, string, boolean, null, undefined, symbol
let age: number;
age = 12;
//age = '' //error


//2. More complex types
//array, object
let person: string[];
person = ["Sam", "Emma"];

let people: {
  name: string;
  age: number;
};
people = { name: "Sara", age: 10 };

let students: {
  name: string;
  age: number;
}[];
students = [
  { name: "J", age: 50 },
  { name: "K", age: 25 },
];


//3. Type Inference
let words = ['hi', 'hello'];
//words.push(5); //error
words.push('bye'); //ok


//4. Union Type
let money: string | number;
money = 5000;
money = '10$';


//5. Functions & Types
//함수는 매개변수의 타입과 반환 값의 타입을 가진다.
function add(a: number, b: number): number {
	return a + b;
}

function onClickEvent(): void {
    console.log('hi!');
}
//void = 반환 값이 없음을 의미하는 타입

function greeting(count: number): string {
    return `${count}번째 방문자 당첨!`;
}