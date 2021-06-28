import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD"; // action의 type에 들어가는 string은 타이핑하기 힘들어서 함수로 바꿈 
const MINUS = "MINUS";

const countModifier = (count = 0, action) => { // data를 수정하는 함수 (이 함수만 data를 수정 가능)
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  };
};

const countStore = createStore(countModifier); // createStore 안의 함수가 return 하는 값을 Store에 저장

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => countStore.dispatch({type : ADD});
const handleMinus = () => countStore.dispatch({type : MINUS});

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);