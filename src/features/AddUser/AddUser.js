import React, { useState } from "react"

import Card from "../../shared/UI/Card/Card"
import Input from "../../shared/UI/Input/Input"
import Button from "../../shared/UI/Button/Button"
import Modal from "../../widgets/Modal/Modal"

import styles from './AddUser.module.css'

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Есть ошибка',
                message: 'Пожалуйста, введите имя и возраст (поля ввода не должны быть пустыми).'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Введен неверный возраст',
                message: 'Пожалуйста, введите корректный возраст (больше 0).'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    return (
        <>
            {error && <Modal title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <Input
                        id='username'
                        htmlFor='username'
                        label={'Имя пользователя'}
                        value={enteredUsername}
                        type='text'
                        onChange={usernameChangeHandler}
                    />
                    <Input
                        id='age'
                        htmlFor='age'
                        label={'Возраст (Полных лет)'}
                        value={enteredAge}
                        type='number'
                        onChange={ageChangeHandler}
                    />
                    <Button
                        type={'submit'}
                    >Добавить пользователя</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser