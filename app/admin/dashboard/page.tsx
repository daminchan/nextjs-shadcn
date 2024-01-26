import EditForm from '@/components/editShiftForm/editForm';


import React from 'react'

type Employee = {
    employee_id: number;
    name: string;
    description: string;
    shifts: { date: number; start_time: string; end_time: string; }[];
  };
  





const page = () => {

 
 
    return (
        <div>
            <EditForm></EditForm>
        </div>
  )
}

export default page
