"use client";

import React from 'react';
import { ShiftSchedule } from "@/components/ShiftSchedule";
import { employee } from "@/lib/cardData";




export default function EmployeeShiftView() {

  
  return (
   <div > 
    <section className="container pt-32 grid grid-cols-1 gap-4 md:grid-cols-3">
      {employee.map(data => (
        <ShiftSchedule
        key={data.employee_id} // ユニークなキーを設定
        cardTitle={data.title}
        cardDescription={data.description}
        shifts={data.shifts} // シフトデータを直接渡す
        ></ShiftSchedule>
      ))}
    </section>
   </div>

  );
}
