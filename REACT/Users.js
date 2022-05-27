import React, { Component, useState } from "react"
import UserForm from "./Components/UserForm"

export default class Users {
    const [userName, setUserName] = useState([])
    const [textInput, setTextInput] = useState('')
    
    const addUser = (textInput) => {
        if (textInput) {
            const newUser = {
                id: Math.round(Math.random() * 10),
                name: textInput
            }
            setUserName([...userName, newUser])
        }
    }

    const inputChange = (e) => {
        setTextInput(e.currentTarget)
    }

    const buttonSubmit = (e) => {
        e.preventDefault()
        addUser('textInput')
        setTextInput()
    }
        return (
            <div>Users
                <h1>Список пользователей</h1>
                <form onSubmit=(buttonSubmit)>
                    <input 
                    type="text"
                    value={textInput}
                    placeholder="имя пользователя"
                    onChange={inputChange}
                    
                    ></input>
                    <button>Добавить</button>
                </form>
                {userName.map((nameuser) => {
                    return (
                        <UserForm nameuser={nameuser}>
                        key={nameuser.id}/>
                    )
                })}
                <UserForm />
            </div>
        )
}