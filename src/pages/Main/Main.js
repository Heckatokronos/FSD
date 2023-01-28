import React, { useState } from "react"
import AddUser from "../../features/AddUser/AddUser"
import UsersList from "../../features/UsersList/UsersList"

const Main = (props) => {

    const [usersList, setUsersList] = useState([])

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
        })
    }

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </>
    )
}

export default Main