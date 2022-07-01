import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Alltask = () => {
    const [tasks, setTasks] = useState([]);
    const [relode, setRelode] = useState(false);

    useEffect(() => {
        const url = `https://hudson-beaver-69286.herokuapp.com/task-all`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setRelode(!relode);
            })
    }, [relode]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://hudson-beaver-69286.herokuapp.com/task-all/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = tasks.filter(task => task._id !== id);
                    setTasks(rest);
                })
        }
    }




    return (
        <div className='flex justify-center'>
            <div className='mt-4 py-5'>
                <h3 className='text-2xl text-green-600 font-bold text-center'>Total Task: {tasks.length}</h3>
                <button className='mt-2 btn btn-primary px-12 rounded'> <Link to='/Add-Task'>ADD NEW TASK</Link> </button>
                <div>
                    {
                        tasks.map((task) => <div key={task._id} task={task} class="">


                            <div class="card w-96 mt-2 lg:w-full bg-base-100 shadow-xl">
                                <div class="card-body">

                                    <div className='flex'>
                                        <input type="checkbox" class="checkbox mt-2 checkbox-primary" />
                                        <p className='mt-2'>{task.description}</p>
                                        <button class="btn btn-info text-white btn-sm  lg:px-10 ml-2 rounded m-2"> <Link to={`/Update/${task._id}`}>EDIT</Link></button>
                                        <button onClick={() => handleDelete(task._id)} class="btn btn-sm  btn-error text-white  lg:px-10 ml-2 rounded m-2">DELETE</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Alltask;