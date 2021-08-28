import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { TodoProvider } from "state/context/todo";
import { AppSwitch } from "components/AppRouter/AppSwitch";

describe("TodoAdd", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory({
      initialEntries: [{ pathname: "/todos/add" }],
    });

    render(
      <Router history={history}>
        <TodoProvider>
          <AppSwitch />
        </TodoProvider>
      </Router>
    );
  });

  it("should have empty inputs and an 'Add' button", () => {
    expect(screen.getByRole("form")).toHaveFormValues({
      title: "",
      description: "",
    });
    expect(screen.getByRole("button")).toHaveTextContent("Add");
  });

  it("should add todo", () => {
    userEvent.type(
      screen.getByRole("textbox", { name: "Enter Title" }),
      "Test Title"
    );
    userEvent.type(
      screen.getByRole("textbox", { name: "Enter Description" }),
      "Test Description"
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("checkbox").getAttribute("value")).toBe(
      "Test Title"
    );
  });
});
