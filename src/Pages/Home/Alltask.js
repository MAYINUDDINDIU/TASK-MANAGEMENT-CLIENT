import React, { useEffect, useState } from 'react';

const Alltask = () => {
    const [tasks, setTasks] = useState([]);
    const [relode, setRelode] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/task-all`;
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
            const url = `http://localhost:5000/task-all/${id}`;
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
        <div className=''>
            <div className='mt-4 py-5'>
                <h3 className='text-2xl text-green-600 font-bold text-center'>Total Task: {tasks.length}</h3>
                <div>
                    {
                        tasks.map((task) => <div key={task._id} task={task} class="overflow-x-auto lg:w-3/4 mx-auto">
                            <div className='justify-center flex mt-5'>
                                <div class="card lg:w-full bg-success rounded shadow-2xl mt-2">
                                    <div class="card-body bg-success ">
                                        <table className="table ">
                                            <tbody>
                                                <tr className=''>
                                                    <td className=''>
                                                        <input type="text" name='description' placeholder="Type Your Task" value={task.description} class="input  input-bordered rounded input-success w-full max-w-md" required />
                                                        <button class="btn btn-primary px-16 lg:px-10 ml-2 rounded m-2">EDIT</button>
                                                        <button onClick={() => handleDelete(task._id)} class="btn btn-primary px-16 lg:px-10 ml-2 rounded m-2">DELETE</button>
                                                    </td>





                                                    {/* <td onClick={() => handleDelete(task._id)} className='text-right text-2xl text-red-600 font-bold cursor-pointer'><button class="btn btn-error  font-bold">Delete</button></td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Alltask;