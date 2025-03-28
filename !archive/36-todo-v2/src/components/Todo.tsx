import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa6'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { TodoInterface } from '../types/Todo.interface'

interface TodoProps {
  todo: TodoInterface
}

const Todo = ({ todo: { id, title, completed } }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useContext(Context)

  return (
    <div className={`todo ${completed ? 'todo--completed' : ''}`}>
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed.toString()}</div>
      <RiDeleteBin2Line
        className="todo__delete-btn"
        onClick={() => deleteTodo(id)}
      />
      <FaCheck className="todo__check-btn" onClick={() => toggleTodo(id)} />
    </div>
  )
}

export default Todo
