import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [ //main properties
        {
            id: 1,
            todo: "Todo msg", //** 
            completed: false,
        }
        // akta TODO add kora holo
    ],
    //adding functionalities 
    addTodo: (todo) => {}, //**
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider