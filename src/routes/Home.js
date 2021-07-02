import React, { useState } from "react";
import { connect } from "react-redux";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

function getCurrentState(state) {
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
