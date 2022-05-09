import React, { useState, useEffect } from "react"
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom"
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
// import Navbar from "./Navbar"
import Sidebar from "./Sidebar";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())


  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map(
      todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }
    ))
  }

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  useEffect(() => {
    //storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainer={"TodoContainer"} />
      <Switch>
        <Route exact path="/todoapp/">
          <div className="container" id="page-wrap">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
            {/* Please work */}
          </div>
        </Route>
        <Route path="/todoapp/about/">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}


export default TodoContainer