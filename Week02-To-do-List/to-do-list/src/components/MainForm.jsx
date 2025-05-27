import React, { useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const MainForm = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTask = () => {
        if (input.trim() === '') return;
        if (editIndex !== null) {
            // Edit mode
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = input;
            setTasks(updatedTasks);
            setEditIndex(null);
        } else {
            // Add mode
            setTasks([...tasks, input]);
        }
        setInput('');
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleEditTask = (index) => {
        setInput(tasks[index]);
        setEditIndex(index);
    };

    return (
        <>
        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-md bg-white w-170 h-auto flex flex-col  justify-center  text-center  font-san  text-black-700  font-bold text-lg  shadow-lg  mt-10  mb-10 ml-90 mr-120 rounded-lg items-justify-center">

            <div className='flex items-between '>
                <img className='h-12 w-15 ml-40 mb-10' src={todo_icon} alt="" />
                <h1 className="font-bold text-2xl p-4">GET IT DONE!</h1>
                <br /><br />
            </div>

            <div className="border-1 bg-gray-100 w-100 rounded-2xl h-12 ml-20 items-center" >
                <input
                    className="w-full h-full rounded-2xl p-2 text-xl font-san placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                    type="text"
                    name="task"
                    placeholder="Add your task"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleAddTask(); }}
                />
                <button
                    className="absolute p-2 border-2 rounded-full h-12 bg-orange-500 cursor-pointer font-bold text-l text-white ml-2 mb-2 pb-1 transition duration-300 ease-in-out"
                    onClick={handleAddTask}
                >
                    {editIndex !== null ? 'Update' : 'ADD+'}
                </button>
            </div>

            <div className='mt-5 mb-5 ml-20 mr-20 p-2 border-2 border-gray-300 rounded-lg bg-gray-100 shadow-md h-auto flex flex-col justify-center items-center'>
                {/* List of tasks */}
                <TodoItems
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onEdit={handleEditTask}
                />
            </div>
        </div>
        </>
    );
};

export default MainForm;