import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div>
      <h2 className="mb-4">Employee Dashboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
