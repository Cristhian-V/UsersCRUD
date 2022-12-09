import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UserForm = ({ createUser, userUpd, userUpdate, setUserUpd }) => {
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(userUpd)
    }, [userUpd])

    const submit = data => {
        if (userUpd) {
            userUpdate(data)
        } else {
            createUser(data)
        }

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
        setUserUpd(undefined)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>New User</h1>
            <div>
                <img src="" alt="" />
                <input type="text" {...register('first_name')} />
                <input type="text" {...register('last_name')} />
            </div>
            <div>
                <img src="" alt="" />
                <input type="text" {...register('email')} />
            </div>
            <div>
                <img src="" alt="" />
                <input type="password" {...register('password')} />
            </div>
            <div>
                <img src="" alt="" />
                <input type="date" {...register('birthday')} />
            </div>
            <button> upload </button>
        </form>
    )
}

export default UserForm