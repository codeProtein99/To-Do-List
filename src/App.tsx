import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name = 'Paritosh'; //For variables we dont need to specify the types always here.
// let arr = [1,'f',true]; // similarly here as well. Normally we'll need it when we will have user defined types

const App : React.FC = () => { // The App is a function that returns a JSX Element.

  //Creating our state for the component
  //Here as we have given wmpty string to useState so todo is of type string otherwise its undefined
  const [todo,setTodo] = useState<string>(""); // This is how we provide type to the usestate; by Generics:.
  const [todos,setTodos] = useState<Todo[]>([]);
  //Here we have made an array of Todo type so that it can contain all the todo tasks in it and maintain its state.

  //This function will be used to add the tasks to the todos array. We will pass it to the InputField component so that that will be
  //Added there to be invoked there. Its going to take an event from on submit.
  const handleAdd = (e : React.FormEvent) =>{
    //Clicking on this handleAdd functiin it should set our state basically call the setter method to set the state.
    //Or rather we can say add our todos.
    e.preventDefault();

    if(todo){
      //We added a todo task along with the rest of the array.
      setTodos([...todos, {id:Date.now(), todo:todo , isDone:false}]);
      //Then we need to empty the input field:
      setTodo('');
    }
  }

  console.log(todos);

  return (
    <>
    <div className="App">
      {/* heading of the App */}
      <span className='heading'>My Tasker</span>
      {/* We are making the component for the input field */}
      <InputField todo={todo} setTodo = {setTodo}  handleAdd={handleAdd}/>
      <TodoList todos= {todos} setTodos = {setTodos} />
      {/* <ul>
      {todos.map((t,index)=>(
        <li key={index}>{t.todo}</li>
      ))}
      </ul> */}
    </div>
    </>
  );
}

export default App;
