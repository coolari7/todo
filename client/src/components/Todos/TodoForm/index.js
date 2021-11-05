import { Button } from "components/Lists/Button";
import { Input } from "components/Lists/Input";
import { Select } from "components/Lists/Select";
import { TextArea } from "components/Lists/Textarea";
import React from "react";

export function TodoForm({ onSubmit, todo = {}, buttonText = "Submit" }) {
  const options = ["Grocery", "Daily", "Shopping", "Today"];
  const [title, setTitle] = React.useState(todo?.title ?? "");
  const [description, setDescription] = React.useState(todo?.description ?? "");
  const [list, setList] = React.useState(options[0]);

  const setFormTitle = (e) => setTitle(e.target.value);
  const setFormDescription = (e) => setDescription(e.target.value);
  const setFormList = (e) => setList(e.target.innerText);
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
  };

  return (
    <form
      aria-label="todo-form"
      onSubmit={onFormSubmit}
      className="p-5 grid grid-cols-1 gap-4"
    >
      <Input
        required
        minLength="10"
        value={title}
        onChange={setFormTitle}
        label="Todo Title"
        placeholder="Buy some milk..."
      />
      <TextArea
        value={description}
        onChange={setFormDescription}
        label="Todo Description"
        placeholder="But 2L of milk | Relatives arrival"
      />
      <Select
        value={list}
        options={options}
        onChange={setFormList}
        labelText="Select List"
      />
      <fieldset className="flex gap-2">
        <Button type="submit">{buttonText}</Button>
      </fieldset>
    </form>
  );
}
