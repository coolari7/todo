import React from "react";
import { Todo } from "components/Todos/Todo";
import { deleteTodo, editTodo } from "state/actions/todo";
import { useTodo } from "state/context/todo";
import { NoTodos } from "components/Pages/NoTodos";
import { Modal } from "components/Modal";

export function TodoList() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [todos, dispatch] = useTodo();
  const deleteRef = React.useRef(null);

  const onToggle = (todo) => {
    dispatch(editTodo({ ...todo, isComplete: !todo.isComplete }));
  };

  const modalCancelClicked = () => {
    setIsModalOpen(false);
    deleteRef.current = null;
  };

  const menuDeleteClicked = (todo) => {
    setIsModalOpen(true);
    deleteRef.current = todo;
  };

  const onDelete = () => {
    dispatch(deleteTodo(deleteRef.current));
    modalCancelClicked();
  };

  const todoValues = React.useMemo(() => Object.values(todos), [todos]);

  if (todoValues.length < 1) {
    return <NoTodos />;
  }

  const mapTodos = () =>
    todoValues.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={menuDeleteClicked}
      />
    ));

  return (
    <React.Fragment>
      <ul className="grid grid-cols-1 gap-4 list-none p-4">{mapTodos()}</ul>
      <Modal isOpen={isModalOpen} onClose={modalCancelClicked}>
        <Modal.Header>Delete Todo</Modal.Header>
        <Modal.Content>
          Are you sure about this? This action is irreversible!
        </Modal.Content>
        <Modal.Action>
          <button
            onClick={modalCancelClicked}
            className="btn bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="btn bg-red-500 hover:bg-red-600"
          >
            Delete
          </button>
        </Modal.Action>
      </Modal>
    </React.Fragment>
  );
}
