//primitive type
let name1 = "mark";
name1.toString();

35; //number리터럴
'mark'//string 리터럴
{      //object 리터럴
    name: 'mark',
    age:35,
}

// boolean 예시
let isDone: boolean = false;  // 지금 이 경우는 

typeof isDone === 'boolean' //true

let isOk:Boolean = true;

let inNotOk: boolean = new Boolean(true); // 이 경우는 에러를 낸다. primitive 타입에 Wrapper를 할당했기 때문이다.

// Number
let demical: number = 6; // 10진수 리터럴
let hex: number = 0xf00d;  // 16진수 리터럴
let binary: number = 0b1010; // 2진수 리터럴
let octal: number = 0o744;  // 8진수 리터럴
// TypeScript는 16진수 및 10진수 리터럴 외에도 ES6 에 도입된 2진수 및 8진수도 지원한다.

// TemplateString
let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${ fullName }
I'll be ${ age + 1 } years old next month`;
// 이와 같이 두 줄이상으로 나눠서 쓸 경우에 주로 사용한다.
// 또는 그 사이에 자바스크립트 변수 넣고싶을 때 사용.

let u: undefined = undefined;
let n: null = null; // 무언가가 있는데, 사용할 준비가 덜 된 상태.

// void
/* 타입이 없는 상태이다. `any`와 반대말. Void는 없다. 무조건 소문자. 주로 함수 리턴 시 사용.*/
function returnVoid(message): void{
    console.log(message);
}
returnVoid('리턴이 없어요');

// any
// 이걸 최대한 안쓰는 것이 핵심이다.
// 컴파일에서 타입 체크가 정상적으로 이루어지지 않기 때문이다.
// 그래서 컴파일 옵션 중에 any를 쓰면 오류를 뱉도록 하는 옵션도 있다.(nolplicitAny)
function returnAny(message): any{
    console.log(message);
}
returnAny('리턴은 아무거나.');

// Never
// 리턴에 주로 사용.
function error(err): never{
    throw new Error(err);
}

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

// Tuple
// 배열인데 타입이 한 가지가 아닐 경우
// 마찬가지로 객체이다.
// 꺼내 사용 시 주의 필요.
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; //틀린 문법.

// Enum
// C에서 사용하던 Enum과 같다.
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green;

enum Color4 {Red = 1, Green, Blue}
let colorname: string = Color4[2];
