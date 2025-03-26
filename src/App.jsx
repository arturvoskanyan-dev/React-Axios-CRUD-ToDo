import {Header, List, Footer} from "./components/index"
import { useEffect, useState } from "react"
import { instance } from "./api/axiosInstance";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    instance.get("/todos?_limit=15")
    .then((res) => setTodos(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <section className='p-5 w-[450px] bg-dark-brown rounded-md shadow-2xl'>
      <Header />
      <List data={todos} />
      <Footer />
    </section>
  )
}

export default App
