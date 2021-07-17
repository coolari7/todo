import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Todo } from "components/Todos/Todo";
import { App } from "components/App";

describe("Todo", () => {
  const todo = {
    title: "Test Todo Title",
    isComplete: false,
  };

  it("should show Todo", () => {
    const renderResult = render(<Todo todo={todo} />);
    expect(renderResult.getByRole("checkbox")).not.toBeChecked();
    expect(renderResult.getByTestId("checkbox-label")).toHaveTextContent(
      todo.title
    );
  });

  it("should check checkbox when clicked", async () => {
    const renderResult = render(<App />);
    fireEvent.click(renderResult.getByTestId("checkbox-label"));
    expect(renderResult.getByRole("checkbox")).toBeChecked();
    expect(
      renderResult.getByTestId("checkbox-label").style.textDecoration
    ).toEqual("line-through");
  });

  afterEach(cleanup);
});
