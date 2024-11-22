import React, {useState, useEffect} from 'react';


const UserList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await response.json();

          setData(data)
      }
      
      fetchData();
      
    }, [])

    console.log(data);

    return (
        <div>
            <h1>User Names</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
