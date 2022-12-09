import axios from 'axios'
import React from 'react'

//import de imagenes
import dlt from '../assets/img/delete.png'
import edit from '../assets/img/edit.png'

const UserList = ({ user, getAllUsers, setUserUpd, settitle}) => {

    const delet = () => {
        const URL = `https://users-crud.academlo.tech/users/${user.id}/`
        axios.delete(URL)
            .then(res => getAllUsers())
            .catch(err => console.log(err))
    }

    const editUser = () => {
        setUserUpd(user)
        settitle('Edit User')
    }

    return (
        <div>
            <div>
                <ul>
                    <li>{user.first_name} {user.last_name}</li>
                    <li>{user.email}</li>
                    <li>{user.birthday}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><button onClick={delet}><img src={dlt} alt="" /></button> </li>
                    <li><button onClick={editUser}><img src={edit} alt="" /></button> </li>
                </ul>
            </div>
        </div>
    )
}

export default UserList