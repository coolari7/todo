import React from "react";
import { mount } from "enzyme";
import { Todo } from "components/Todos/Todo";
import { ThemeProvider } from "context/theme";
import { BrowserRouter } from "react-router-dom";

function TodoWrapper(props) {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Todo {...props} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

describe("Todo Component", () => {
  const todo = {
    id: "1",
    title: "Test Todo Title 1",
    description: "Test Todo Description 1",
    createdOn: new Date(),
    isComplete: false,
  };
  let wrappedComponent = mount(<TodoWrapper todo={todo} />);

  beforeEach(() => {
    wrappedComponent = mount(<TodoWrapper todo={todo} />);
  });

  it("shows the correct title and checked status", () => {
    expect(wrappedComponent.find("span").render().text()).toEqual(todo.title);
    expect(wrappedComponent.find("input").props().checked).toEqual(false);
  });

  afterEach(() => {
    wrappedComponent.unmount();
  });
});
