import axios from 'axios'
import React from 'react'

//import de imagenes
import dlt from '../assets/img/delete.png'
import edit from '../assets/img/edit.png'
import birthdayImg from '../assets/img/bithday.png'

const UserList = ({ user, getAllUsers, setUserUpd, settitle }) => {

    const delet = () => {
        const URL = `https://users-crud.academlo.tech/users/${user.id}/`
        axios.delete(URL)
            .then(res => {
                getAllUsers()
                setUserUpd({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    birthday: '',
                })
            })
            .catch(err => console.log(err))
    }

    const editUser = () => {
        setUserUpd(user)
        settitle('Edit User')
    }

    return (
        <div className='userList-div-container'>
            <div className='userList-information'>
                <ul>
                    <li className='userList-name'>{user.first_name} {user.last_name}</li>
                    <li className='userList-mail'>{user.email}</li>
                    <li className='userList-date'><img src={birthdayImg} alt="" /> {user.birthday}</li>
                </ul>
            </div>
            <div className='userList-buttons'>
                <ul className='userList-buttons'>
                    <li className='userList-delete'><button onClick={delet}><img src={dlt} alt="" /></button> </li>
                    <li className='userList-edit'><button onClick={editUser}><img src={edit} alt="" /></button> </li>
                </ul>
            </div>
        </div>)
}

export default UserList