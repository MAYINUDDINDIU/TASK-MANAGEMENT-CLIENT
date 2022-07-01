import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className='font-bold'>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div className='flex justify-center py-6  verticalHight'>
            <DayPicker
                className='shadow-lg p-4 bg-success text-white font-bolde'
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </div>
    );
};

export default Calendar;