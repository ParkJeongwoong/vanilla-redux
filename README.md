# Redux

> https://ko.redux.js.org/introduction/getting-started/

React JS Fundamentals Course (2019 Update)

노마드 코더 강의 : `ReactJS로 영화 웹 서비스 만들기`



## Without Redux (Pure Redux)

설치 : `npm install redux`

사용 :

1. import 

```react
import { createStore } from "redux";
```

2.  Store, Reducer, Actions 활용



## Redux Flow

![08/26, redux(3)](https://media.vlpt.us/images/sonofhuman20/post/e8bc8967-8762-494a-aa01-8c77556f8edb/redux.png)

1. **Store에 데이터 저장** (`createStore() 사용`)
2. **Reducers를 통해 Store에 저장된 값 변경** (`createStore함수 안에 reducer 함수를 인자로 / 이후 reducer의 return 값이 store에 저장`)
   - 첫 번째 인자는 state, 두 번째 인자는 action
     - 이 때, state에는 초기 값을 default 형태로 설정한다
3. **Actions를 통해 Reducers 실행** (`state.dispatch()를 통해 reducer의 두 번째 인자, action에 message를 보냄`)
   - 구체적으로는 <u>객체</u> (`{ type : action}`)이며 reducer에서 action 인자는 type 안의 action(문자열)을 전달받게 된다
4. <u>시작은 Actions 부터</u>
   1. **`state.dispatch(action)`** /// `state.dispatch({type : data})`
   2. **`reducer = (state, action) => {changedState}`**
   3. **`state = createStore(reducer)`** /// `state = changedState`



## Subscribe

![Redux 개념 익히기 -1](https://media.vlpt.us/images/cyongchoi/post/fa7c231f-fb68-4fde-a96d-c791360dfb8d/Bildschirmfoto-2017-12-01-um-08.56.48.png)

**`state.subscribe(callback)`**

- state의 변화를 감지하고 인자로 가지고 있는 callback 함수를 실행

