import React from "react";
import { useTheme } from "../../../context/theme";

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

  const themedStyles = React.useMemo(
    () => ({
      segment: theme === "dark" ? "ui inverted segment" : "ui segment",
      form: theme === "dark" ? "ui inverted form" : "ui form",
    }),
    [theme]
  );

  return (
    <React.Fragment>
      <h3 className="ui dividing header">{header}</h3>
      <div className={themedStyles.segment}>
        <form className={themedStyles.form} onSubmit={onFormSubmit}>
          <div className="field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={setFormTitle}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Description</label>
            <input
              type="text"
              name="title"
              value={description}
              onChange={setFormDescription}
            />
          </div>
          <button className="ui button">{buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}
