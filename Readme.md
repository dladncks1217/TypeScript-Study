#TypeScript 연습
>TypeScript 공부내용입니다.
## 1. 타입스크립트의 특성
- 타입스크립트는 '프로그래밍 언어이다.'
- 타입스크립트는 'Compiled Language' 이다.
  - 전통적인 'Compiled Language'와 다른 내용이 많다. (그냥 그 느낌만 착용한것.)
  - 그래서 'Transpile' 라는 말을 사용한다.
-  JavaScript는 'Interpreted Language'다.
## 2. 컴파일 언어와 인터프리터 언어
- #### 컴파일 언어
  -  컴파일이 필요함.
  -  컴파일러 필요.
  -  컴파일하는 시점 있음.
     -  컴파일 타임
  -  컴파일된 결과물을 실행.
  -  컴파일된 결과물을 실행하는 시점.
-  #### 인터프리터 언어
  -  컴파일 필요없음.
  -  컴파일러 필요 x
  -  컴파일 시점 x
  -  코드 자체를 실행
  -  코드를 실행하는 시점 O
     -  = 런타임 
-  #### 그렇다면 타입스크립트는?
  -  컴파일 하는 시점에 어떤 일들이 일어나는데, 그 중에서 제일 중요하게 여기는 것이 "타입" 인 것이다.
  그래서 이름도 TypeScript인 것이다.
## 3. 정적 타입 언어 vs 동적 타입 언어
  - 정적 타입 언어는 우리가 알고 있듯이, 미리 타입을 지정해두고 시작하는 언어.
  - 동적 타입 언어는 타입이 없다. js에서 예전에 var 썼고 지금도 let 쓰고 const 쓰고 하더라도 타입 자체가 변하는 식의 프로그래밍을 권장하는 모듈도 있었다.     
  - 그런데 이런 부분에서 문제가 생겼던게 JavaScript로 프로그래밍 하다보면 분명 어느 부분에서 오류가 나는데, 이 덩어리가 커지면 굉장히 잡아내기 어렵고,
  하나 잡으면 여러가지 동시 다발적으로 문제가 생기고 이런 일들이 많았다.
  - 그래서 정적 타입 언어의 장점만 가져와 보자 해서 만들어진 것이 TypeScript다. (물론 정적 타입 언어를 써야 하는 것이 가장 좋다는 말은 아니다.)
## 4. 전통적인 컴파일 언어와 TypeScript
  - C, C++, Go, C#, Java 등..
  - 프로그래머가 작성한 소스코드를 기계어로 변환하는 과정을 컴파일이라고 함.
  - 기계어로 변환된 코드를 Object Code라고 한다.
  - 컴파일 하는 프로그램을 컴파일러라고 함.
  - 컴파일된 코드는 프로세서에 따라 다르다.
  - 소스코드에서는 OS에 따라 라이브러리가 다르다.
  - 컴파일된 코드는 작은 크기에 최적화된다.
  - 일반적으로 실행 시 기계어로 바꾸는 방식이 인터프리터 언어보다 빠르다.
     - (실행 시 기계어로 바꿔주는 연산이 필요 없기 때문.)
  - 타입 스크립트라는 문법으로 작성한 소스 코드를 컴파일 해주는 컴파일러가 'TypeScript Compiler' 라고 하는 것이고, 결과물이 JavaScript인 것이다.
  - C나 C++에서 컴파일된 코드가 굉장히 작고 최적화 되어있고, 이런 것에 대한 장점이 있는데, 사실 TypeScript를 컴파일 하면 Helper함수 라는 것들이 구현되어 아래 위로 들어가기 때문에, JavaScript보다 코드 양이 더 많아진다.
  - 이것을 TypeScript의 단점으로 지적하는 사람들이 제일 많다.
  - 그러나 그 부분도 극복하기 위해 많이 노력중이라고 함.
  - TypeScript에는 Linking 과정이 없음.
## TypeScript 컴파일러
  - 타입스크립트 컴파일러가 npm 모듈로 제공되므로 node.js가 설치되어야 함.
  >VS Code
   ####컴파일러
   -  VS Code 에 컴파일러가 내장되어있음.
   -  내장된 컴파일러 버전은 VS Code가 업데이트 되면서 올라간다.
      -  그래서 컴파일러 버전과 VS Code의 버전은 상관관계가 있음.
   -  내장된 컴파일러를 선택할 수 있고, 직접 설치한 컴파일러 선택 가능.
   ####tslint
   -  npm i typescript tslint(로컬)
   -  tslint --init
   