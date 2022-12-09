import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState()
  const [userUpd, setUserUpd] = useState()

  const getAllUsers = () => {
    const URL = `https://users-crud.academlo.tech/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = (data) => {
    const URL = `https://users-crud.academlo.tech/users/`
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const userUpdate = data => {
    const URL = `https://users-crud.academlo.tech/users/${userUpd.id}/`
    axios.patch(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  console.log(users)

  return (
    <div className="App">
      <div className='userList-container'>
        {
          users?.map(user => (
            <UserList
              key={user.id}
              user={user}
              getAllUsers={getAllUsers}
              setUserUpd={setUserUpd}
            />
          ))
        }
      </div>
      <div>
        <UserForm
          createUser={createUser}
          userUpd={userUpd}
          userUpdate={userUpdate}
          setUserUpd={setUserUpd}
        />
      </div>
    </div>
  )
}

export default App
