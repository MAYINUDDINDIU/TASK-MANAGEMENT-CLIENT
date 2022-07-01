import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});

    console.log(task);

    useEffect(() => {
        const url = `http://localhost:5000/task-all/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [id]);



    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `http://localhost:5000/task-all/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
                toast.success('Task Edit Successfully')
            })
    }

    return (
        <div className='flex flex-col justify-center items-center py-6 verticalHight'>

            <div className='card shadow w-96 bg-success rounded text-white p-5 m-0'>
                <h2 className='text-primary font-bold'>Description: <span className='text-white text-sm'>{task.description}</span>  </h2>
            </div>
            <div className='card shadow w-96 bg-success mt-3 rounded  md:w-1/4 w-full mx-auto '>
                <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4 mt-4'>

                    <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                    <input className='py-2 btn btn-primary px-6 text-white font-bold rounded  block mx-auto ' type="submit" value="Edit Task" />

                </form>
            </div>
            <Link to='/'><button className="btn btn-success btn-sm rounded text-white">Back</button></Link>
        </div>
    );
};

export default UpdateTask;