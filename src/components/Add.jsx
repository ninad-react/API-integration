import React, { useEffect, useState } from 'react'
import "./add.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';

function Add() {

    const[text, setText] = useState("");
    const {id} = useParams();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8000/todos', {text});
            console.log('Post added', resp.data);
            setText('');
            toast.success('Data added Successfully!!');
            
        }
        catch(Error){
            console.log('Error', Error);
        }

    }

    useEffect(() => {
        
    },[])

  return (
    <div>
        <h1>Add Your TODO Task</h1>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Enter your task</label>
            <input type='text' id='task' name='task' value={text} onChange={(e) => setText(e.target.value)} required></input>

            <button type='submit'>Submit</button> 
            <Link to="/">
                <button>Home</button>
            </Link>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Add