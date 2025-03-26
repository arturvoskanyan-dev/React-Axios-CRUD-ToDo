import { Header, List, Footer } from "./components/index"
import { useEffect, useState } from "react"
import { instance } from "./api/axiosInstance";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    instance.get("/todos?_limit=15")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err))
  }, [])

  const handlePost = () => {
    if (text.trim()) {
      instance.post("/todos", { title: text, completed: false })
        .then((res) => setTodos((prev) => {
          return [
            ...prev,
            {
              ...res.data,
              id: Date.now()
            }
          ]
        }))
    }
    setText("")
  }

  const changeCompleted = (id, completed) => {
    instance.patch(`/todos/${id}`, { completed: !completed })
      .then((res) => setTodos(todos.map((todo) => {
        if(todo.id === id) {
          return {
            ...todo,
            completed : res.data.completed
          }
        }
        return todo
      })))
  }

  const remove = (id) => {
    instance.delete(`/todos/${id}`)
    .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
  }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <section className='p-5 w-[450px] bg-dark-brown rounded-md shadow-2xl'>
      <Header text={text} setText={setText} handlePost={handlePost} />
      <List data={todos} changeCompleted={changeCompleted} remove={remove} />
      <Footer data={todos} clearAll={clearAll} />
    </section>
  )
}

export default App
