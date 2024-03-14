import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todos,setTodos}) =>{//setTodos, we want them because we will delete the todos element or mark complete
    //We will be mapping all the elements of the todos array here. So we need todos array here to map it here also setTodos.

    return (
        <div className="todos">
            {todos.map((eachTodo)=>(
                <SingleTodo 
                    eachTodo={eachTodo}
                    key={eachTodo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    );   
}

export default TodoList;