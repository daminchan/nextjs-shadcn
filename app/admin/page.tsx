//モックデータを使用してfetchするテスト
"use client"
import React, { useEffect, useState } from 'react';
type Employee = {
  employee_id: number;
  name: string;
  description: string;
  shifts: { date: number; start_time: string; end_time: string; }[];
};

const AdminPage = () => {
  
  const [employeeData,setEmployeeData] = useState<Employee[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/EmployeeData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // 取得したデータをコンソールに出力
        setEmployeeData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap'>
        {employeeData.map((employee, Index) => (
        <div className='m-1 flex flex-col'key={employee.employee_id}>
           <div className='p-2 font-bold'>
            {employee.name}
           </div>
          <ul className=''>
           {employee.shifts.map((shifts,shiftsIndex)=>(
              <li className='flex justify-start items-center' key={shiftsIndex}>
                <div className='p-2'>{shifts.start_time}</div>
                <div className='p-2'>{shifts.date}日</div>
              </li>
           ))}
          </ul>
        </div>
      ))}
  </div>
  );
};

export default AdminPage;

