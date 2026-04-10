# GDG 프론트엔드 정규스터디 2주차

## Index

- JS 파이로 이사하기
- JS 어서오고~
- 브라우저는 왜 JS를 쓸 수 있죠?

## JS 파일로 Migration

Today : Counter App 만들기  
Web application을 만들어보게 된다

기능

- +1 버튼을 누르면 숫자 증가
- -1 버튼을 누르면 숫자 감소
- RESET 버튼 : 0으로 돌아가기

필요한 구성  
Counter App 은 페이지의 제목 : **h1 태그**  
숫자 0은 내용이므로 : **p 태그**  
버튼은 그냥 **button 태그**를 사용

### HTML 추가 학습

Button 에 **id**라는 속성을 넣어보기

나만의 식별할 수 있는 고유한 무언가. id가 있으면 JS로 다루기 편해진다.

```HTML
<button id="increase">+1</button>
<button id="reset">RESET</button>
<button id="decrease">-1</button>
```

HTML은 본질적으로 **문서**이다.  
일반적으로 코드가 너무 많아지게 된다면, 그 본질을 지키기 어렵지 않을까? 그래서 파일을 분리해 HTML과 JS 코드를 따로 관리하는것.

### JS와 HTML을 연결?

src를 사용해서 연결할 수 있다!

## JS 어서오고..

이제 페이지는 구성이 되었으니, 해결해야 할 과제는?

1. 숫자를 코드로 바꿔보자
2. 숫자가 바뀌는 행위를 버튼으로 핸들링하자

### 1번 과제 해결

```JS
const number = document.getElementById("counting-num");

number.textContent = 100;
```

document는 script로 연결된 HTML 문서를 의미한다.

### 2번 과제 해결

```JS
const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");

let count = 0;
number.textContent;

function increaseCount() {
  count++;
  number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
```

- addEventListener : incButton에 무언가 사건(여기서는 click)이 발생하면, 실행하라는 의미로 생각하자 즉 click이 발생하면 increaseCount 함수를 실행해라!

## Script 태그의 위치와 브라우저의 동작방식

브라우저가 하는일

1. HTML 파일 열기
2. HTML 문서를 한줄한줄 순차적으로 읽기 (Parsing)
3. DOM 트리 만들기
4. 화면에 표시하기

여기서 2번째 Parsing에서, HTML parsing 중에 script를 발견하게 되면

1. parsing 중단
2. script 파일(js같은)을 다운로드 받는다
3. script 파일 실행
4. HTML을 이어서 parsing

그러나 문제는 HTML 해석이 늦어지게 되면서, 화면에 늦게 보여지게 된다. (비동기로 한다면?)  
또 순서가 꼬일수도 있다. JS 파일로 받아야할 id들이 파싱과정에서 JS 실행시점보다 늦어진다면, 실행과정에서 문제가 발생!

## JAVASCRIPT

현대의 브라우저 : JS 실행 엔진 + 태초의 브라우저(웹통신, 문서리더기)

Chrome - 게임 챌린저? 게임 체인저?

### V8 엔진

1. 크롬 : ECMA 개발 표준을 따름 -> 개발 편의성의 증가.

옛날 -> 진짜 순수 웹 페이지  
현대 -> 웹 앱!

2. V8 엔진 : 오픈소스!!! 대박
   이로 인해 NodeJS가 탄생  
   노드는 JS를 실행할 수 있는 환경. **"런타임 환경"**  
   이를 통해서 서버, 블체, ML등을 시도해보면서, 이런 라이브러리들이 생성되면서 NPM이 탄생하게 됨...

## JAVASCRIPT

### 함수

화살표 함수
변수 선언은 let,const 사용 (var은 좀 위험..)
