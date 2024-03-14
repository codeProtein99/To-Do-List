import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import "./styles.css";

interface Props {
    eachTodo : Todo;
    todos : Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo : React.FC<Props> = ({eachTodo,todos,setTodos}:Props) =>{

    //For the edit part we have to keep 2 states:
    // 1) Keep the track if the edit mode is on or not?
    // 2) It will keep the value of the edited todo.

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(eachTodo.todo);

    //function for the tick mark:
    const handleDone = (eachTodoId : number) =>{
        setTodos(todos.map(todoItem=>
            (todoItem.id === eachTodoId ? {...todoItem,isDone:!eachTodo.isDone} : todoItem)
            ))
    }
    //Function to delete the tasks:
    const handleDelete = (eachTodoId : number) =>{
        setTodos(todos.filter(todo=>todo.id !== eachTodoId));
    }

    //Function to handle the Edit on Pressing the Enter:
    const handleEdit = (e : React.FormEvent, id : number) =>{
        e.preventDefault();

        setTodos(todos.map((todo) => (
            todo.id === id ? {...todo,todo:editTodo}:todo
        )))
        setEdit(false);
    }

    //When we click on the edit option, the focus doesnt go on its own inside the text field. To bring that automatically we use useRef.
    const inputRef = useRef<HTMLInputElement>(null);

    //We are going to make a useEffect; whenever edit changes it will fire the code inside it:
    useEffect(()=>{
        inputRef.current?.focus(); // Basically its going to focus on this.
    },[edit])

    return (
        <form action="" className="todos_single" onSubmit={(e)=>handleEdit(e,eachTodo.id)}>

            {/* We check here if the edit mode is on or not */}
            {
                edit? (
                    <input ref={inputRef} value={editTodo} onChange={(e)=> setEditTodo(e.target.value)}
                        className="todos_single_text"
                    />
                ) 
                : (
                    /* if the todo item has already been completed then we will just be striking it off (Here's the condition for it) */
                    (eachTodo.isDone) ? (
                        <s className="todos_single_text">{eachTodo.todo}</s>
                    ) : (
                        <span className="todos_single_text">
                            {eachTodo.todo}
                        </span>
                    )
                )
            }

            
           
            <div>
                <span className="icon" onClick={()=>{
                    if(!edit && !eachTodo.isDone){
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={()=>{handleDelete(eachTodo.id)}}>
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={()=>{handleDone(eachTodo.id)}}>
                    <MdDone/>
                </span>
            </div>
        </form>
    );
}

export default SingleTodo;