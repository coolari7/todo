import React from "react";
import { useStore } from "context";
import { editTodo } from "context/todo";
import { NoTodos } from "components/Custom/NoTodos";
import { PortalModal } from "components/Modal";
import { Todo } from "components/Todos/Todo";
import { TodoDelete } from "components/Todos/TodoDelete";

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
    <PortalModal>
      <TodoDelete
        todo={todoBeingDeleted}
        onDismiss={() => setIsOpenModal(false)}
      />
    </PortalModal>
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
