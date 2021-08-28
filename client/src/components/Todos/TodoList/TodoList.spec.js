import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "state/context/todo";
import { TodoList } from ".";

describe("TodoList", () => {
  const todos = {
    a1: {
      id: "a1",
      title: "Test Title 1",
      description: "Test Description 1",
      isComplete: false,
    },
    a2: {
      id: "a2",
      title: "Test Title 2",
      description: "Test Description 2",
      isComplete: true,
    },
  };

  it("should show the todos", () => {
    const { container } = render(
      <TodoProvider initial={todos}>
        <TodoList />
      </TodoProvider>
    );

    // ASSERTING NUMBER OF TODOS
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    // ASSERTING CHECKBOX STATUS
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();

    // ASSERTING TITLES
    const spans = container.querySelectorAll("span");
    expect(spans[0]).toHaveTextContent(todos.a1.title);
    expect(spans[1]).toHaveTextContent(todos.a2.title);
  });

  it("should toggle a todo when clicked", () => {
    render(
      <TodoProvider initial={todos}>
        <TodoList />
      </TodoProvider>
    );

    const checkbox = screen.getAllByRole("checkbox");
    expect(checkbox[0]).not.toBeChecked();
    // CHECK
    userEvent.click(checkbox[0]);
    expect(checkbox[0]).toBeChecked();
    // UNCHECK
    userEvent.click(checkbox[0]);
    expect(checkbox[0]).not.toBeChecked();
  });

  it("should show <NoTodos /> when appropriate", () => {
    render(
      <BrowserRouter>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </BrowserRouter>
    );
    expect(() => screen.getAllByRole("listitem")).toThrowError();
    expect(screen.getByRole("heading")).toHaveTextContent("Add some todos?");
  });
});
