import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useTheme } from "context/theme";

export function TodoForm({
  onSubmit,
  todo = {},
  header = "Form",
  buttonText = "Submit",
}) {
  const [title, setTitle] = React.useState(todo?.title || "");
  const [description, setDescription] = React.useState(todo?.description || "");
  const [theme] = useTheme();

  const setFormTitle = (e) => setTitle(e.target.value);
  const setFormDescription = (e) => setDescription(e.target.value);
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
  };

  return (
    <React.Fragment>
      <Header as="h3" dividing>
        {header}
      </Header>
      <Segment inverted={theme === "dark"}>
        <Form inverted={theme === "dark"} onSubmit={onFormSubmit}>
          <Form.Field>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={setFormTitle}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="title">Description</label>
            <input
              type="text"
              name="title"
              value={description}
              onChange={setFormDescription}
            />
          </Form.Field>
          <Button>{buttonText}</Button>
        </Form>
      </Segment>
    </React.Fragment>
  );
}
