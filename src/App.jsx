import { Header, List, Footer } from "./components/index"
import { useEffect, useState } from "react"
import useAxios from "./hooks/useAxios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [method, setMethod] = useState("get");
  const [url, setUrl] = useState("/todos?_limit=15")
  const [processData, setProcessData] = useState(null);
  const [processId, setProcessId] = useState(null);

  const data = useAxios({
    method: method,
    url: url,
    body: processData,
    id: processId,
  })

  useEffect(() => {
    setTodos(data)
  }, [data, method])

  const handlePost = () => {
    if (text.trim()) {
      setProcessData({ title: text, completed: false })
      setUrl("/todos")
      setMethod("post");
    }
    setText("")
  }

  const changeCompleted = (id, completed) => {
    setUrl(`/todos/${id}`)
    setMethod("patch")
    setProcessData({id : id, completed : !completed})
  }

  const remove = (id) => {
    setUrl(`/todos/${id}`)
    setMethod("delete")
    setProcessId(id)
  }

  const editList = (id, newTitle) => {
    setUrl(`/todos/${id}`)
    setMethod("patch")
    setProcessData({title : newTitle})
  }

  // const editList = (id, newTitle) => {
  //   axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { title: newTitle })
  //     .then((res) => setTodos(todos.map((todo) => {
  //       if (todo.id === id) {
  //         return {
  //           ...todo,
  //           title: res.data.title
  //         }
  //       }
  //       return todo
  //     })))
  // }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <section className='p-5 w-[450px] bg-dark-brown rounded-md shadow-2xl'>
      <Header text={text} setText={setText} handlePost={handlePost} />
      <List data={todos} changeCompleted={changeCompleted} remove={remove} editList={editList} />
      <Footer data={todos} clearAll={clearAll} />
    </section>
  )
}

export default App
