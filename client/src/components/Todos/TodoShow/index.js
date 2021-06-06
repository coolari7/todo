import React from "react";
import { useStore } from "../../../context";
import { editTodo } from "../../../context/todo";
import { NoTodos } from "../../Custom/NoTodos";
import { Modal } from "../../Modal";
import { Todo } from "../Todo";
import { TodoDelete } from "../TodoDelete";

export function TodoShow() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [todoBeingDeleted, setTodoBeingDeleted] = React.useState();
  const [todos, dispatch] = useStore("todos");

  const onToggle = (todo) =>
    dispatch(editTodo({ ...todo, isComplete: !todo.isComplete }));

  const onClickDelete = (todo) => {
    setTodoBeingDeleted(todo);
    setIsOpenModal(true);
  };

  const renderTodos = () =>
    Object.keys(todos).map((id) => (
      <Todo
        key={id}
        todo={todos[id]}
        onToggle={onToggle}
        onClickDelete={onClickDelete}
      />
    ));

  const renderModal = () => (
    <Modal>
      <TodoDelete
        todo={todoBeingDeleted}
        onDismiss={() => setIsOpenModal(false)}
      />
    </Modal>
  );

  const render = () =>
    Object.keys(todos).length < 1 ? (
      <NoTodos />
    ) : isOpenModal ? (
      renderModal()
    ) : (
      renderTodos()
    );

  return <React.Fragment>{render()}</React.Fragment>;
}
