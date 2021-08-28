import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Todo } from "components/Todos/Todo";

describe("Todo", () => {
  const todo = {
    id: "someid123",
    title: "Test Title",
    description: "Test Description",
    isComplete: false,
  };

  const onToggle = () => {
    todo.isComplete = !todo.isComplete;
  };

  it("should show Todo", () => {
    render(<Todo todo={todo} onToggle={onToggle} />);
    const input = screen.getByRole("checkbox");
    const span = screen.getByText(todo.title, { exact: true });
    expect(input).not.toBeChecked();
    expect(span).toBeInTheDocument();
  });

  it("should check checkbox when clicked", () => {
    const { rerender } = render(<Todo todo={todo} onToggle={onToggle} />);
    const input = screen.getByRole("checkbox");
    userEvent.click(input);
    rerender(<Todo todo={todo} onToggle={onToggle} />);
    expect(input).toBeChecked();
    expect(screen.getByText(todo.title, { exact: true }).className).toMatch(
      /line\-through/i
    );
  });

  it("should open menu on clicking the dots", () => {});
});
