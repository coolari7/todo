import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { TodoProvider } from "state/context/todo";
import { AppSwitch } from "components/AppRouter/AppSwitch";

describe("TodoEdit", () => {
  const todo = {
    id: "a1",
    title: "Test Title",
    description: "Test Description",
    isComplete: false,
  };
  let history;

  const setup = (pathname) => {
    history = createMemoryHistory({
      initialEntries: [{ pathname }],
    });

    render(
      <Router history={history}>
        <TodoProvider initial={{ [todo.id]: todo }}>
          <AppSwitch />
        </TodoProvider>
      </Router>
    );
  };

  it("should have correct elements in the input boxes", () => {
    setup("/todos/edit/a1");

    expect(screen.getByRole("form")).toHaveFormValues({
      title: todo.title,
      description: todo.description,
    });
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("should conditionally redirect to the home page", () => {
    setup("/todos/edit/id-not-present");

    expect(history.location.pathname).toBe("/");
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("checkbox").getAttribute("value")).toBe(
      "Test Title"
    );
  });

  it("should edit a todo", () => {
    setup("/todos/edit/a1");

    userEvent.type(
      screen.getByRole("textbox", { name: "Enter Title" }),
      " (edited)"
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("checkbox").getAttribute("value")).toBe(
      "Test Title (edited)"
    );
  });
});
