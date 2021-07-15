import React from "react";

export function TodoForm() {
  return (
    <form className="p-5 shadow-md bg-blue-50 rounded-sm grid grid-cols-1 gap-4">
      <fieldset name="title">
        <label className="label" htmlFor="title">
          Enter Title
        </label>
        <input
          type="text"
          id="title"
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
          autoComplete="off"
          className="text-input"
        />
      </fieldset>
      <fieldset>
        <button className="btn">Submit</button>
      </fieldset>
    </form>
  );
}
