# GDG 프론트엔드 정규스터디 1주차

# 1. Hello HTML!
기본적인 개발 환경 준비하깅

# 2.HTML, 너 누구야?

## HTML 왜 생겨났을까
**HTML : HyperText Markup Language**
**팀 버너스리** : 연구자들 간의 정보 공류를 쉽게 하기 위한 시스템을 구상
**양식을 통일하면 되겠네! 이 양식을 HTML이라고 하자!!**

## 그래서 HTML이란?

### MarkupLanguage
양식을 통일한다는 말 = 문서를 **'구조적'** 으로 만든다는 이야기.

#### Tag 사용해보기
예) 자기소개 페이지 만들기
- 가장 큰 제목(heading 1)은 이름, 단락(paragraph)에는 간단한 자기소개
- 두 번째 큰 제목(heading 2)으로는 가족관계 단락을 통해 가족에 대한 내용
- 페이지 제목(Title)은 Hello

<img width="370" height="157" alt="image" src="https://github.com/user-attachments/assets/aa018d3e-fa8c-4723-a0e8-fb5342afa912" />
<br> 위 그림과 같이 **<tagname> content </tagname>** 과 같은 형식으로 사용 <br>
태그 이름은 직관적으로 사용된다. heading 1 = h1, heading 2 = h2, paragraph = p, title.. 
<br>
위의 자기소개 페이지를 코드로보면 <br>

```
<h1>신짱구</h1>
<p>안녕하세요. 저는 떡잎마을에
사는 신짱구입니다. 5살이에요.</p>
```

#### 사용할 소스코드

```
<!DOCTYPE html>        // HTML5로 작성된 문서라는 의미
<html>                 // HTML 문서의 내용
<head>                 // head 태그 : 브라우저가 사용하는 정보
<title>Hello</title>   // title 태그 : 문서의 제목은 Hello
</head>
<body>                 // body 태그 : 사용자가 보는 정보
<h1>신짱구</h1>
<p>안녕하세요. 저는 떡잎마을에 사는 신짱구입니다. 5살이에요.</p>
<h2>
가족 관계
</h2>
<p>엄마, 아빠, 저, 동생. 그리고 흰둥이와 함께 살아요.</p>
</body>
</html>
```
**마크업 언어**는 구조적이고 텍스트 외에 의미를 부여 및 정부를 주는 언어구나 라는 것을 알아볼 수 있었다.


### HyperText 
**Hyper** : 초월, 넘어서 같은 의미로 쓰인다.
즉 **문서의 Text를 넘어서**는 무언가를 만들려고 하는게 하이퍼텍스트라고 간략히 이해할 수 있다. <br>
이때 텍스트를 '**링크**'의 개념으로 사용해서, 텍스트를 이용해서 정보를 거미줄 처럼 연결하는 것

### HyperText 구현해보기
#### 아빠 페이지 구현 (father.html)
아빠 페이지를 구현하고, hello.html 페이지에서 아빠로 페이지를 넘어갈 수 있는 HyperText를 만들어보자!
<br>
```
<!DOCTYPE html>
<html lang="ko">
<head>
 <title>Father</title>
</head>
<body>
 <h1>아빠 : 신형만</h1>
 <p>여우같은 아내, 토끼같은 자식, 강아지를 위해 일하는 가장</p>
 <p>35세. 180cm A형</p>
 <p>회사원 - 떡잎상사 영업2과 계장</p>
 <p>특기 - 발냄새 공격</p>
</body>
</html>
```

#### 아빠 페이지와 연결하기 
- **a 태그 사용하기(anchor)** : 짱구 페이지에 닻을 내려보자. <br>
아래와 같이 수정해보자.
```
<p>엄마,
<a href="./father.html">아빠</a>, // <a> </a> 태그 사용!
저, 동생. 그리고 흰둥이와 함께 살아요.</p>
```
**href**: hyper reference의 약자. '하이퍼 참조' <br>
실행 시켜보면, **아빠** 단어에 밑줄이 생기고 파랗게 변한다. 누르면 father 페이지로 넘어간다!! <br>


<img width="393" height="188" alt="image" src="https://github.com/user-attachments/assets/a8d1ffa2-a51f-4aa8-a450-9cbede65fb21" />
<br>
위의 그림처럼, 여는 태그 안쪽에 작성했던 href는 태그에 대한 속성(attribute)이라고 한다. 여러가지 속성이 있다.


## 원론적인 이야기
- **웹**: 우리의 페이지는 거미줄처럼 연결된다. a 태그와 함께라면... '목차'?
- **문서**: 정보를 담는, 데이터 조각인데 페이지라고 부르는게 신기하다

### 목차 페이지(index.html)
hello.html 파일명을 index.html로 바꿔주기 --> 목차는 책을 열었을 때 바로 보이는 부분인 것처럼, <br>
주소에서 127.0.0.1:5500/index.html -> 127.0.0.1:5500/ 이라고 바꿔줘도 똑같은 페이지를 보내준다. <br>
이는 네이버든, 구글이든 다 똑같다! 

# 3. JS 맛보기
index.html의 body 태그가 끝나기 전에 script 태그를 넣어서 콘솔에서 출력하게 해주는 console.log 함수를 사용해보자. <br>
F12 개발자 도구를 열어 콘솔 탭을 누르면 console.log 함수에 작성했던 Hello World!가 출력이 되는 것을 확인할 수 있다. 

- **script 태그**: HTML은 그냥 '문서'다. 정적이라고 할 수 있다. 그래서 버튼을 누르거나, 스크립트를 심어서 원하게 동작하도록 '명령'을 내리게 할 수 있다.

JavaScript는 그래서 웹 문서와의 소통, 즉 웹 문서를 동적으로 만들어준다. **내가 작성한 스크립트대로 페이지를 조작하자!** <br>
그러나 JS는 언어라기에는 근본 없는 경우가 많이 있다. 지금은 많이 개선되어서 언어라고 부를만 하다고 생각은 개인적으로 한다. 
