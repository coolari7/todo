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
      onSubmit={onFormSubmit}
      className="p-5 shadow-md bg-blue-50 rounded-sm grid grid-cols-1 gap-4"
    >
      <fieldset name="title">
        <label className="label" htmlFor="title">
          Enter Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={setFormTitle}
          autoComplete="off"
          className="text-input"
        />
      </fieldset>
      <fieldset name="description">
        <label className="label" htmlFor="description">
          Enter Description
        </label>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={setFormDescription}
          autoComplete="off"
          className="text-input"
        />
      </fieldset>
      <fieldset>
        <button className="btn">{buttonText}</button>
      </fieldset>
    </form>
  );
}
