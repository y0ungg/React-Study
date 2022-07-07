## Day 4

###### `React`

## :memo: 리액트 앱 디버깅하기

<br>

1. 도와줄 사람부터 찾지 않고, 오류 메세지를 이해하고 스스로 해결 방법을 탐색한다.
2. React DevTools


<br>


## Error Messages

`Failed to compile`: 파일을 불러오는 데 실패했다.

```
//case1
Parsing error:  ... -> 파싱 에러: 오류 세부 내용과 코드 조각을 확인할 수 있다.


//case2
IDE 환경에서 변수 이름이 잘못된 경우 밑줄이 그어진다.
-> ... is not defined 와 같은 내용을 확인할 수 있다.
```

당황하지 말고 에러 메세지를 읽고, 코드 조각을 확인해보자.

<br>

### 코드 흐름 및 경고 분석
브라우저 콘솔 창에 경고 메시지를 볼 수 있다.
> Warning: 경고 내용 in 오류 발생 위치

<br>
<br>

## Breakpoint
브라우저 개발자 도구 -> sources -> 자바스크립트 파일
브라우저에서 IDE에서 작성한 원문 코드를 디버그할 수 있다.

localhost 또는 webpack폴더 하위에서 현재 동작중인 JS 파일을 확인할 수 있다.

1. 라인 넘버를 클릭해서 파란색 화살표 걸어준다 => `breakpoint`
2. 그 코드를 실행할 수 있도록 브라우저에서 이벤트를 발생시키면 `breakpoint`에서 멈춘다.
3. 파란색 줄로 표시되면서 멈추고 `scope`, `call stack` 등 확인할 수 있다.
4. `step into next function call` 버튼 클릭 (다음 함수 호출)
5. 변수에 마우스를 올리면 현재 그 값이 무엇인지 볼 수 있다.

<br>
<br>

## React DevTools

리액트 개발자 도구
크롬 "React Developer Tools"
개발자 도구에 components, profiler 탭이 생성된다.

#### components 탭
root component부터 연결 되어 있는 모든 components 트리를 볼 수 있다.
각 컴포넌트의 props 등의 속성도 확인할 수 있다.

`hook`: 동적으로 state 등을 확인할 수 있다.
개발자도구에서 state를 변경하면 브라우저에 반영되지만 코드에는 반영되지 않는다.

`rendered by`: 가장 가까운 컴포넌트가 상위에 있고 밑으로 갈수록 렌더 차례가 멀어진다.
