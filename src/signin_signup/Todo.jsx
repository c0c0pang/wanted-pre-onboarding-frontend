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
  const [input, setInput] = useState({})
  const [check, setCheck] = useState({})
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
    const modifyButton = (index, todo, e) => {
      setCheck({ ...check, [index]: true })
      setInput({ ...input, [e.target.name]: todo })
    }
    const cancelButton = (index) => {
      setCheck({ ...check, [index]: false })
    }
    const onChange = (e) => {
      const { name, value } = e.target
      setInput({ ...input, [name]: value })
    }
    const onSubmit = async (id, todo, index) => {
      const isCompleted = true
      await todoApi.UpDateTodo({ id, todo, isCompleted })
      const updateList = await todoApi.GetTodo()
      setListBox([...updateList])
      setCheck({ ...check, [index]: false })

    }
    return (
      listBox.map((element, index) =>
        <List key={index}>
          <Label>
            <LabelInput type="checkbox"></LabelInput>
          </Label>
          {check?.[index] ? (
            <>
              <ModifyInput onChange={(e) => onChange(e)} name={element.id.toString()} value={input?.[element.id]} type="text" data-testid="modify-input"></ModifyInput>
              <ModifySubmitButton data-testid="submit-button" onClick={() => onSubmit(element.id, input?.[element.id], index)}>제출</ModifySubmitButton>
              <ModifyCancelButton data-testid="cancel-button" onClick={() => cancelButton(index)}>취소</ModifyCancelButton>
            </>
          ) : (
            <>
              <LabelSpan>{element.todo}</LabelSpan>
              <ModifyButton name={element.id.toString()} data-testid="modify-button" onClick={(e) => modifyButton(index, element.todo, e)}>수정</ModifyButton>
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
