import React from "react";

export function TodoForm({
  onSubmit,
  todo = {},
  buttonText = "Submit",
  ...props
}) {
  const [title, setTitle] = React.useState(todo?.title ?? "");
  const [description, setDescription] = React.useState(todo?.description ?? "");

  const setFormTitle = (e) => setTitle(e.target.value);
  const setFormDescription = (e) => setDescription(e.target.value);
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
  };

  return (
    <form
      aria-label="todo-form"
      onSubmit={onFormSubmit}
      className="p-5 shadow-md bg-blue-50 rounded-sm grid grid-cols-1 gap-4"
    >
      <label className="label">
        Enter Title
        <input
          type="text"
          name="title"
          value={title}
          onChange={setFormTitle}
          autoComplete="off"
          className="text-input"
        />
      </label>
      <label className="label">
        Enter Description
        <textarea
          name="description"
          value={description}
          onChange={setFormDescription}
          autoComplete="off"
          className="text-input"
        />
      </label>
      <fieldset>
        <button className="btn">{buttonText}</button>
      </fieldset>
    </form>
  );
}
