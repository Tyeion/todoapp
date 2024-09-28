import { useState } from "react";
import styles from './form.module.css' ;
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo , setTodo] =useState({name:"", done:false});


  function handleSubmit(e) {
    e.preventDefault();
      setTodos([...todos, todo]); // Spread operator saves all the previous items
      setTodo({name: "" , done: false}); // Clear the input after submission
    
  }

  return (
    
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <input className={styles.modernInput}
        onChange={(e) => setTodo({name:e.target.value , done: false})}
        value={todo.name}
        type="text"
        placeholder="Enter a todo"
      />
      <button className={styles.modernButton}type="submit">Add</button>
      </div>
    </form>
    
  );
}
