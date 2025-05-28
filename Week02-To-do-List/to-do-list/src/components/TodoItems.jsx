import React from 'react';
import delete_icon from '../assets/delete_icon.png';
import edit_icon from '../assets/edit_icon.png';


const TodoItems = ({ tasks, onDelete, onEdit }) => (
    <ul className="w-full">
        {tasks.length === 0 && <li className="text-gray-500">No tasks yet.</li>}
        {tasks.map((task, idx) => (
            <li key={idx} className="flex justify-between items-center p-2 border-b h-12">
                <span>{task}</span>
                <div>
                    <button
                        className="mr-2 px-2 py-1 cursor-pointer rounded"
                        onClick={() => onEdit(idx)}
                    >
                        <img className='h-7 w-7' src={edit_icon} alt="" />
                    </button>
                    <button
                        className="px-2 py-1 rounded cursor-pointer "
                        onClick={() => onDelete(idx)}
                    >
                         <img className='h-7 w-7' src={delete_icon} alt="" />
                    </button>
                </div>
            </li>
        ))}
    </ul>
);

export default TodoItems;