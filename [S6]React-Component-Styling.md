## Day 3 

###### `React`

## :memo: 리액트 컴포넌트 스타일링

<br>

1. 동적으로 인라인 스타일 설정하기
2. 동적으로 CSS 클래스 설정하기
3. styled-components
4. CSS Module

<br>


### Styled-Components
CSS-in-JS

프로젝트의 규모가 커지고 복잡해짐에 따라 `스타일의 컴포넌트화`가 대두되었다.

```jsx
const Div = styled.div` //div method를 호출하는 것

    &.className { //가상 셀렉터
        ...
    } 
    
    & input:focus {
        ...
    }
    
    &:hover {
        color: ${props => props.color ? 'red' : 'black'}
    }
    
    @media ( ... ) { //media query
        width: auto;
    } 
` 
```
`props`: 해당 컴포넌트에 props로 전달받은 모든 것을 가리킨다.

<br>
<br>

### CSS Module

css module을 통해 css 클래스가 중첩되지 않게 할 수 있다.

```jsx
//기존의 css import 방법
import './style.css';

//CSS module 사용법
import styles from './style.module.css';
```

css파일에서 스타일을 작성하고, 특정 컴포넌트에 스타일 객체를 불러온다.

```jsx
//in react
<button className={styles.button}></button>
<div className={styles['form-control']}></div>

//개발자도구에서 조회한 element
<button class=`컴포넌트이름_클래스이름_고유한해시값`></button>
```
모든 컴포넌트에 대해 고유한 버전의 스타일과 클래스를 만들어낸다.

클래스 이름안에 스타일이 들어있다.
