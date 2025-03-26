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
  }

  return (
    <section className='p-5 w-[450px] bg-dark-brown rounded-md shadow-2xl'>
      <Header text={text} setText={setText} handlePost={handlePost} />
      <List data={todos} />
      <Footer />
    </section>
  )
}

export default App
