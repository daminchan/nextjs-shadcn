import { ShiftSchedule } from "@/components/ShiftSchedule";

type Employee = {
  employee_id: number;
  name: string;
  description: string;
  shifts: { date: number; start_time: string; end_time: string; }[];
};


const getData = async (): Promise<Employee[]> => {
  const res = await fetch('http://localhost:3000/EmployeeData', {next:{revalidate:0}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

  const EmployeeShiftView = async () => {
    const employeeData = await getData();
    return (
      <div > 
       <section className="container pt-32 grid grid-cols-1 gap-4 md:grid-cols-3">
         {employeeData.map(data => (
           <ShiftSchedule
           key={data.employee_id} // ユニークなキーを設定
           cardTitle={data.name}
           cardDescription={data.description}
           shifts={data.shifts} // シフトデータを直接渡す
           ></ShiftSchedule>
         ))}
       </section>
      </div>
   
     );
         }
  export default EmployeeShiftView;