import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "components/common/Icons/Plus";

export function NoTodos() {
  return (
    <section className="screen-center flex-center sm:block sm:px-20 sm:pt-16">
      <div className="font-bold text-gray-600">
        <p className="mb-3 sm:mb-5 text-4xl sm:text-5xl text-center sm:text-left">
          Add some todos?
        </p>
        <Link
          to="/todos/add"
          className="inline-block btn bg-green-400 p-2 hover:bg-green-500 rounded-full"
        >
          <Plus fill="white" />
        </Link>
      </div>
    </section>
  );
}
