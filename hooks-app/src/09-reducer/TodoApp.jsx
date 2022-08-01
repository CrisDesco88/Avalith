import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


export const TodoApp = () => {
  const {
    todos,
    todoCount,
    pendingTodoCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
  } = useTodo();

  return (
    <>
      <h2>
        TodoApp
      </h2>
      <hr />
      <h3>
        Total: {todoCount} <br/> 
        Pendientes: {pendingTodoCount}
      </h3>
      <hr />

      <section className="row">
        <div className="col-7">
          {/* TODO: Crear <TodoList todos={todos} /> */}
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TODO: Crear <TodoAdd onNewTodo={handleNewTodo} /> */}
          {/* TODO: {id: new Date().get..., description..., done...} */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </section>
    </>
  );
};
