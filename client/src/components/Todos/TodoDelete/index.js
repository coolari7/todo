import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useStore } from "context";
import { removeTodo } from "context/todo";

export function TodoDelete({ todo, onDismiss }) {
  const [, dispatch] = useStore("todos");

  const onClickDelete = () => {
    dispatch(removeTodo(todo.id));
    onDismiss();
  };

  return (
    <React.Fragment>
      <Modal.Header>Delete Todo</Modal.Header>
      <Modal.Content>Are you sure you want to delete this todo?</Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onClickDelete}>
          Delete
        </Button>
        <Button onClick={onDismiss}>Cancel</Button>
      </Modal.Actions>
    </React.Fragment>
  );
}
