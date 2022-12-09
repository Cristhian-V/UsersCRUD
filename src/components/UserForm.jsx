import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

//import de imagenes
import userImg from '../assets/img/userName.png'
import passimg from '../assets/img/pass.png'
import emailimg from '../assets/img/mail.png'
import birthdayimg from '../assets/img/bithday.png'

const UserForm = ({ createUser, userUpd, userUpdate, setUserUpd, title, settitle}) => {
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
        settitle('New User')
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='form'>
            <h1 className='form-title'>{title}</h1>
            <div className='form-name-container'>
                <figure className='form-imgContainer'><img src={userImg} alt="" /></figure>
                <input type="text" {...register('first_name')} className='form-inputName' placeholder='first name' />
                <input type="text" {...register('last_name')} className='form-inputLast' placeholder='last name'/>
            </div>
            <div className='form-email-container'>
                <figure className='form-imgContainer'><img src={emailimg} alt="" /></figure>
                <input type="text" {...register('email')} className='form-inputEmail' placeholder='email' />
            </div>
            <div className='form-password-container'>
                <figure className='form-imgContainer'><img src={passimg} alt="" /></figure>
                <input type="password" {...register('password')} className='form-inputPass' placeholder='password' />
            </div>
            <div className='form-birthday-container'>
                <figure className='form-imgContainer'><img src={birthdayimg} alt="" /></figure>
                <input type="date" {...register('birthday')} className='form-inputbirthday' />
            </div>
            <div className='form-button-container'>
            <button className='form-button'> upload </button>
            </div>
        </form>
    )
}

export default UserForm