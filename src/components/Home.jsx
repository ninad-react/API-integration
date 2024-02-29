import { useState, useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {

    const navigate = useNavigate();

    const[todos, setTodos] = useState([]);

    const apiCalling = async() => {
        await axios.get("http://localhost:8000/todos")
        .then((res) => setTodos(res.data))
    }

    const handleEdit = (id) => {
        navigate('/edit/'+id)
    }

    const deleteRow = (id) =>{
        const result = window.confirm("Do you want to proceed");

        if(result === true){
            handleDelete(id);
        }else{
            navigate("/")
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8000/todos/"+id);
            apiCalling();
            toast.success('Data deleted Successfully!!');
        }catch(error){
            console.log('error', error);
        }
    }

    useEffect(() => {
        apiCalling();
    }, [])

  return (
    <div>
        <h1>Todo App</h1>
        <Link to="/add">
                <button className="add-btn">Add</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TODO Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            
            {todos.map((todo) => 
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.text}</td>
                    <td>
                        <button onClick={() => handleEdit(todo.id)} className="edit-btn">Edit</button>
                        <button onClick={() => deleteRow(todo.id)} className="delete-btn">Delete</button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default Home