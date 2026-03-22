//import { useState } from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {


  const [dados, setDados] = useState([]);

  useEffect(()=>{
    //Axios.get('https://jsonplaceholder.typicode.com/users')
    //.then(res => res.data).then(console.log)
    //.then(res => console.log(res.data))
    //.catch(err => console.log(err))

    Axios.post('https://jsonplaceholder.typicode.com/users',{
      "name":"Leo",
      "username":"Muller",
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  }, [])


  return (
    <>
    <h1>olá mundo</h1>
    </>
  )
}

export default App
