import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function useAxios({ method = "get", url, body = null, id}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return

    axios({
      method: method,
      url: `https://jsonplaceholder.typicode.com/${url}`,
      data: body,
    }).then((res) => {
      if (method === "post") {
        setData((prev) => {
          return [...prev, { ...res.data, id: Date.now(), title: res.data.title}]
        })
      } else if (method === "patch") {
        setData((prev) => {
          return [...prev, {...res.data, title: res.data.title}]
        })
        setData(data.map((d) => {
          if (d.id === res.data.id && res.data.name === "edit") {
            return {...d, title: res.data.title} 
          } else if(d.id === res.data.id) {
            return {...d, completed: res.data.completed}
          }
          return d
        }))
      } else if(method === "delete") {
        setData(data.filter((d) => d.id !== id))
      } else {
        setData(res.data)
      }
    })
  }, [method, url, body])

  return data
}