# React
React 사용 전 기초적인 지식 습득을 위해서...🙃   
막상 공부해보니 다들 쓰는 이유가 있구나 하며 감탄하는 중이다.

<h2>0. 사전 지식은 여기서</h2>

* [Tania Rasciad의 Getting started with react](https://www.taniarascia.com/getting-started-with-react/)
    - React는 프레임워크가 아니다. Github에서 인기있는 JavaScript의 라이브러리.
    - 페이스북에서 만든 오픈 소스 라이브러리이다.
    - `Babel`이란 <u>오래된 브라우저에서도 ES6+를 사용할 수 있게 해주는 JavaScript 컴파일러</u> 이다.
    - CDN으로 React 라이브러리들을 import하고, 간단한 정적 HTML에 React를 실행하는 실습을 할 수 있다.
        - 하지만 이 방식은 효율적이지 않고 유지보수가 어렵기 때문에 잘 사용되지 않는다.
        - 페이스북은 <u>React 앱을 구축하는 데 필요한 환경을 제공</u>하는 `Create React App`을 만들었다.
    - JSX: JavaScript + XML
        ``` javascript
        const title = <h1 className="site-title">Hello, Client!</h1>
        ```
        - JSX를 사용하지 않고도 작성할 수 있다.
        ``` javascript
        const title = React.createElement('h1', { className: 'site-title' }, 'Hello, Client!')
        ```
        - braces`{ , }` 사용 방식
        ``` javascript
        const name = 'John!'
        const title = <h1>Hello, {name}</h1>
        ```
        - JSX 사용시 주의사항
            - 속성과 메소드가 CamelCase로 적용된다.
            

<h2>1. 개발환경</h2>

- SpringBoot 3.2.0v을 사용했습니다.
- 운영체제는 Mac OS 입니다.

<h2>2. React dev tool 설치</h2>

React 전용 개발자 도구가 있다. 설치는 [여기](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)에서!   
설치를 하게 되면(Chrome 기준) 우측 상단 확장프로그램 레이아웃에 React logo가 활성화 되는데 logo의 상태마다 React 사용환경을 알 수 있다.

<h2>3. npm, npx, yarn</h2>

우선 패키지 관리 프로그램을 설치해야 한다. 대표적으로 npm, npx, yarn가 있는데 node를 설치하면 npm이 함꼐 설치되고, npm 패키지를 통해 npx를 설치할 수 있다.   
벌써 설치해야 하는게 3개나 있다니 머리가 아파오는데 각각의 차이점을 좀 알아야 되겠다.

- npm: 
- npx:
- yarn:
    * [여기]()에 참 잘 정리되어 있습니다.

``` bash
brew install node
npm install npx -g
brew install yarn --ignore-dependencies
```