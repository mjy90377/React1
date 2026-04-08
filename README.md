# 202430208 민지영
## [5주차 - 26.04.01]

## 1. JSX
### [용어]
* **태그**(Tag) : 요소를 표시하는 기호
    * `<table>`, `<div>`, `<li>`등
* **엘리먼트**(Element) / **노드**(node) : 여는 태그, 내용, 닫는 태그로 구성된 형태
    * `<h1>제목</h1>` 등
* **속성**(Attribute) : html의 속성과 비슷함
    * img 태그의 `src` 등
* **프로퍼티**(Property) : 동적인 값
    * 사용자가 입력하는 값 등

 ### [JSX에서 JavaScript를 사용하는 방법]
>  <u>따옴표 혹은 중괄호</u>를 사용한다.
1. **따옴표**로 문자열 전달
    * 문자열을 묶을 때만 중괄호가 아닌 따옴표가 사용됨
    ```JavaScript
        <img alt="문자열">
    ```
2. **중괄호**로 JavaScript <u>변수 참조</u>
    * 선언한 변수를 JSX에서 중괄호로 포함
    ```JavaScript
    const name = "React"
    return(
        <>
            <h1>Hello, {name}</h1>
        </>
    )
    ```
3. **중괄호**로 JavaScript <u>함수 호출</u>
    ```JavaScript
        //함수
        function formatDate(date) {
                return new Intl.DateTimeFormat(
                    "en-US",
                    { weekday: "long" }
                ).format(date);
            }
        
        //호출
        <p>Today is {formatDate(new Date())}</p>
    ```
4. **중괄호**로 JavaScript <u>객체 사용</u>
    * 이중 중괄호 형태
    * Json 방식(키: 값 구조)로 된 객체를 중괄호로 감쌈

> #JSX에서 중괄호를 사용하는 위치
>> * 속성의 **값**
>>>   ex) `src={reactrogo}`
>> * <u>태그 사이</u>의 문자열
>>   * 태그 자체에서는 사용 불가
>>      * ex) `<{tag}>` - *잘못된 사용*

## 2. props
 : properties의 약자, JSX에서 JavaScript 값을 전달하는 방식
 ### [특징]
 * **단방향 통신** : 부모 -> 자식 방향으로만 전달됨
    > ***props 흐름** : 
    >부모가 props 전달 -> 자식이 처리 -> 렌더링
 * **읽기 전용** : 자식 컴포넌트는 props 수정 불가
 * **다양한 타입** : 문자열, 숫자, 객체, 배열, 함수 등 JavaScript의 모든 타입 전달 가능 

### [props 읽기]
<**자식 컴포넌트**>
``` JavaScript
export default function ChildComp ({alt, width, height}) {
  return (
    <>
        <img className="button-icon" src={reactLogo} alt={alt} width={width} height={height} />
    </>
  )
}
```

* 소괄호 내부에 중괄호를 통해 입력받을 props의 이름 지정


**<부모 컴포넌트>**
```JavaScript
import ChildComp from "./ChildComp"

export default function ParentComp () {
   return(
    <>
      <ChildComp alt="React" 
      width={100} height={100}/>
    </>
   )
}
```
* 부모 컴포넌트에서 중괄호를 통해 자식 컴포넌트에 값 전달

### [객체 전달]
**<자식 컴포넌트>**
```JavaScript
  export default function ChildComp ({imageInfo, width, height}) {
  return (
    <>
        <img src={imageInfo.src} alt={imageInfo.alt} width={width} height={height} />
    </>
  )
}

```
* 객체를 전달받는 자식 컴포넌트
* 객체명으로 값에 접근해야 함

**<부모 컴포넌트>**
```JavaScript
import ChildComp from "./ChildComp"
import reactLogo from '../assets/react.svg'

export default function ParentComp () {
   return(
    <>
      <ChildComp 
        imageInfo={
          {
            src: reactLogo,
            alt: "React"
          } 
        }  
        width={100} height={100}
      />
    </>
   )
}
```
* 객체를 값으로 전달
* 이중 중괄호 형태
    *  외부: JSX에서  props를 전달하기 위한 중괄호
    * 내부: 객체를 구성하는 json 형태의 중괄호

### [props의 기본값 지정]
> 자식 컴포넌트에서 변수 뒤에 `=`를 사용해 기본값 지정이 가능하다.
```JavaScript
export default function ChildComp 
({imageInfo, width=300, height=300})
```
**<props의 기본값을 지정했을 경우>**
* 부모 컴포넌트에서 해당 값을 전달하지 않으면 <u>기본값</u>이 사용됨
* 별도의 값을 전달했을 경우 <u>전달한 값</u>이 사용됨
### [spread 문법으로 props 전달]
* props가 매우 많아서 가독성이 떨어질 때 사용하면 유리함
* 형태 : `<컴포넌트 {...props} />`
* 자식 컴포넌트
    ```JavaScript
    export default function NameCard({...userData}) {
    return (
        <div>
            <h2>사용자 정보</h2>
            <p>ID: {userData.id}</p>
            <p>이름: {userData.name}</p>
            <p>나이: {userData.age}</p>
            <p>직업: {userData.job}</p>
            <p>거주지: {userData.location}</p>
        </div>
    )
    }
    ```
* 부모 컴포넌트
    ```JavaScript
    import NameCard from "./NameCard";

    export default function SpreadComp(){
        const userData = {
            id: 1,
            name: "Tom",
            age: 25,
            job: "developer",
            location: "seoul",
        };

        return (
            <>
                <NameCard {...userData}/>
            </>
        )
    }
    ```

### [spread 문법 사용 시]
* 자식 컴포넌트에서는 props들을 명시적으로 받고, 부모에서 값을 전달할 때만 spread 형태로 보낼 수 있음
    * 가독성 향상 
* **일부만** spread 형식으로 전달할 수 있음
    * ex) 하나의 props만 따로 전달하고 나머지는 spread로 한 번에 전달
* spread 형식으로 받은 값은 `객체이름.변수명`으로 사용 가능

> #### <문제점>
> 1. 가독성 
>*  자식에서 사용 시 어떤 props를 받는 지 파악이 어려움
> 2. 불필요한 데이터 전달
>* 객체에서 사용하는 컴포넌트가 필요 없는 값까지 같이 보내는 경우들이 생김
> 3. 우선순위 문제
>* 한 값이 변수로도 전달되고 spread로 전달될 경우 충돌 발생 가능

> -> spread 문법은 선별적으로 사용하는 것이 권장됨



## [4주차- 26.03.25]

## 1. Vite의 JavaScipt + swc 옵션 
: Vite를 통한 리액트  프로젝트 생성 시  선택 가능한 옵션 중 하나였으나, 2026년 3월 12일부터 지원하지 않게 됨
### swc
지금까지는 JavaScript 옵션을 선택했을 때 기본 컴파일러로 **Babel**이 사용됨
    
* Babel의 느린 속도로 인해 이를 <u>대체할 목적</u>으로 개발
* 트랜스파일링, 번들링 등의 기능 
* Rust로 개발됨

### 옵션이 사라진 이유
JavaScript 옵션을 선택했을 때 Babel이 아닌 Oxc를 기본 컴파일러로 사용하도록 정책이 변경됨

> **Oxc** 
> *  swc의 3배 파싱 속도를 가짐
> * Babel을 대체하기 위한 것만이 아닌 eslint, Prittier, 타입스크립트 트랜스파일러 등의 다양한 기능 존재

#### React 프로젝트 생성 + 옵션 지정 (현재 권장) :
```bash

npm create vite@latest my-app -- --template react

```
## 2. export default 컴포넌트
### [ export default 사용법 ]
1. 컴포넌트가 있는 파일의 마지막에 `export default 이름` 으로 지정
    - 한 파일 안에 여러 개의 컴포넌트가 있을 경우 복잡해짐
2. 함수를 선언할 때 `export default function 이름`으로 지정
    - 주로 사용되는 방식

### [ named export와 default export ]
 > export 방법은 default 키워드 사용 여부에 따라 다름
* **named export**
    * export와 import 하는 곳의 컴포넌트 이름이 동일해야 함
    * 4가지 경우의 import 방식 : 
        1.   <u>중괄호 내부</u>에 컴포넌트 한 개의 이름 import
        2. 중괄호 안에 **콤마**를 통해 여러 개의 컴포넌트 import
        3. `as` 키워드로 파일 내에서 사용할 **변수명** 지정
        4. `*`를 통해 네임스페이스 import
* **default export**
    * 한 파일당 한 번만 사용 가능
    * 다른 이름으로 import할 수 있음
        * 그러나 같은 이름으로 사용하는 것이 권장됨      

> #### named export 방식의 장점
> * **일관성** : 어디서든 같은 이름으로 사용해야 함
> * **리팩토링 용이** : 이름 변경 시 에디터에서 자동으로 연결된 모든 파일의 이름을 안전하게 변경
> * **트리 쉐이킹** : 사용하지 않는 코드 제거 과정에서 유리한 경우
* 재활용 가능한 컴포넌트 개발 시 주로 named export 방식이 사용됨

## 3. 컴포넌트 관리
* 여러 개의 파일에서 컴포넌트를 만들었을 경우
    *  분리된 파일에서 exeport , 사용할 파일에서 import 필요
* 컴포넌트 **중첩** :  컴포넌트 안에서 특정 <u>컴포넌트를 호출</u>하는 것
    * 컴포넌트 안에서 컴포넌트 선언은 불가능
    * 컴포넌트에 여러 컴포넌트를 뭉쳐놓은 것도 하나의 컴포넌트
* 컴포넌트 위치
    * src의 루트에 계속 컴포넌트를 만들면 관리가 어려움
    * 별도의 하위 디렉터리를 생성하여 관리
* 컴포넌트를 import 할 때의 이름은 반드시 **대문자로 시작**해야 함
    * 소문자로 시작하면 컴포넌트로 인식되지 않음

## 4. JSX
### <특징>
* 자바스크립트 확장 문법으로, HTML과 비슷한 형태
*  닫는 태그 또는 자체 종료 **필수**
* 자바스크립트는 중괄호 1개, 객체는 중괄호 2개
* <u>자바스크립트 함수 형태</u>로 개발하며 그 안에 태그들을 넣어 사용하는 방식

### <규칙>
1. 전체를 래핑하여 하나의 루트 엘리먼트로 반환해야 한다.
2. 모든 태그를 닫아야 한다.
3. 속성은 카멜 케이스로 작성해야 한다.