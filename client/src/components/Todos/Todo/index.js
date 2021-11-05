import React from "react";
import { Dots } from "components/common/Icons/Dots";
import { LabelText } from "components/common/LabelText";
import { Menu } from "components/common/Menu";
import { Link } from "react-router-dom";

export function Todo({ todo, onToggle, onDelete }) {
  return (
    <li className="flex justify-between shadow-md bg-white p-2 rounded-full">
      <label className="inline-flex items-center ml-2">
        <input
          type="checkbox"
          onChange={() => onToggle(todo)}
          checked={todo.isComplete}
          aria-checked={todo.isComplete}
          value={todo.title}
          className="mr-4 rounded-full h-5 w-5"
        />
        <LabelText todo={todo} />
      </label>
      <Menu className="relative inline-block">
        <Menu.Button>
          <button name="menubutton" className="block">
            <Dots className="cursor-pointer text-gray-600" fill="gray" />
          </button>
        </Menu.Button>
        <Menu.Items className="dropdown">
          <Menu.Item>
            <Link
              role="menuitem"
              to={`/todos/edit/${todo.id}`}
              className="dropdown-item"
            >
              Edit
            </Link>
          </Menu.Item>
          <Menu.Item>
            <button onClick={() => onDelete(todo)} className="dropdown-item">
              Delete
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </li>
  );
}
