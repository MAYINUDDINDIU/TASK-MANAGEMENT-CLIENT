import React from 'react';

const Taskadd = () => {






    const addtask = (event) => {
        event.preventDefault();
        const description = event.target.description.value;

        const add = { description }

        fetch('https://hudson-beaver-69286.herokuapp.com/task', {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            })


    }


    return (
        <div className='justify-center flex mt-5'>
            <div class="card lg:w-3/5 bg-success rounded shadow-2xl">
                <div class="card-body ">
                    <div>
                        <form onSubmit={addtask}>
                            <input type="text" name='description' placeholder="Type Your Task" class="input  input-bordered rounded input-success w-full max-w-lg" required />
                            <button class="btn btn-primary px-16 lg:px-10 ml-2 rounded m-2">Add Task</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Taskadd;