import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenCheckTodo } from "../custom/functionSet";
import {
  TodoCreateDiv,
  Label,
  LabelDiv,
  LabelInput,
  LabelSpan,
  List,
  ListDiv,
  ModifyCancelButton,
  ModifyDiv,
  ModifyInput,
  ModifySubmitButton,
  TodoCreateButton,
  TodoCreateInput,
} from "../styled_component/styled_todo";
function Todo() {
  const navigate = useNavigate();
  useEffect(() => {
    TokenCheckTodo({ navigate });
  }, []);
  return (
    <TodoCreateDiv>
      <TodoCreateInput />
      <TodoCreateButton>추가</TodoCreateButton>
    </TodoCreateDiv>
  );
}

export default Todo;
