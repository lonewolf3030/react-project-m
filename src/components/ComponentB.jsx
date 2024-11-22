import React, {useEffect, useState} from 'react'


const ComponentB = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();

          setData(data)
      }
      
      fetchData()
      
    }, [])

    console.log(data)

  return (
    <div>
        <h3>{props.count}</h3>
  

  <ul>
    {data?.map((item, id) => {
        <li key = {id}>{item.name}</li>
    })}
  </ul>



    </div>
  )
}

export default ComponentB