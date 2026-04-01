# 5주차 수업
##### 26.04.01

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