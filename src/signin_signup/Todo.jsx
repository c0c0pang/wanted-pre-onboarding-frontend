import React, { useEffect, useState } from "react";
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
  ModifyButton,
  DeleteButton,
} from "../styled_component/styled_todo";
import { todoApi } from "../api/apiStorage";
function Todo() {
  const navigate = useNavigate();
  const [text, setText] = useState('')
  const [listBox, setListBox] = useState([])
  const [checkList, setCheckList] = useState([])
  useEffect(() => {
    TokenCheckTodo({ navigate });
    const listSetup = async () => {
      setListBox(await todoApi.GetTodo())
    }
    listSetup()
  }, []);
  const todoCreate = async () => {
    await todoApi.CreateTodo(text)
    const updateList = await todoApi.GetTodo()
    setListBox([...updateList])
    setText('')
  }
  const deleteTodo = async (id) => {
    await todoApi.DeleteTodo(id)
    const updateList = await todoApi.GetTodo()
    setListBox([...updateList])
  }

  const listComponent = () => {
    const modifyButton = (index) => {
      const newList = [...listBox]
      newList[index] = { ...listBox[index], 'isCompleted': true }
      setListBox(newList)
    }
    const cancelButton = (index) => {
      const newList = [...listBox]
      newList[index] = { ...listBox[index], 'isCompleted': false }
      setListBox(newList)
    }
    return (
      listBox.map((element, index) =>
        <List key={index}>
          <Label>
            <LabelInput type="checkbox"></LabelInput>
            <LabelSpan>{element.todo}</LabelSpan>
          </Label>
          {element.isCompleted ? (
            <>
              <ModifyInput type="text" data-testid="modify-input"></ModifyInput>
              <ModifySubmitButton data-testid="submit-button">제출</ModifySubmitButton>
              <ModifyCancelButton data-testid="cancel-button" onClick={() => cancelButton(index)}>취소</ModifyCancelButton>
            </>
          ) : (
            <>
              <ModifyButton data-testid="modify-button" onClick={() => modifyButton(index)}>수정</ModifyButton>
              <DeleteButton data-testid="delete-button" onClick={() => deleteTodo(element.id)}>삭제</DeleteButton>
            </>
          )}
        </List>
      )
    )
  }
  return (
    <>
      <TodoCreateDiv >
        <TodoCreateInput value={text} data-testid="new-todo-input" onChange={(e) => setText(e.target.value)} />
        <TodoCreateButton data-testid="new-todo-add-button" onClick={() => todoCreate()}>추가</TodoCreateButton>
      </TodoCreateDiv>
      <ListDiv>
        {listComponent()}
      </ListDiv>
    </>
  );
}

export default Todo;
