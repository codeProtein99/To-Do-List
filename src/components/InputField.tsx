import { useRef } from 'react';
import './styles.css';

//We are giving the type of the values that we are providing as props here :
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>; //Setter methods k liye esse krte h.
    //Ques) How can we do it using classes and that to in separate files?
    handleAdd:(e : React.FormEvent)=>void;
}
//In the app everytime we click on the button the App gets refreshed. To prevent this we do something inside the function def.
const InputField : React.FC<Props> = ({todo,setTodo,handleAdd}) =>{

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        // Upon pressing the button and submitting it, the handleAdd method will be run
        //What has been done with handleAdd method with event etc here?? 
        <form className="input1" action="" onSubmit={(e)=>{
            handleAdd(e);
            inputRef.current?.blur();
            }}> 
            <input 
                ref={inputRef}
                type="input" 
                placeholder="Enter your task" 
                className="input_box"
                value={todo}
                onChange={(e)=>{
                    setTodo(e.target.value);
                }}
            />
            <button className="input_submit" type="submit">Add</button>
        </form>
    );
}

export default InputField;