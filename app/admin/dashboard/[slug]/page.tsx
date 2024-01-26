"use client"
import React from 'react'
import { AdminShiftSchedule } from "@/components/shiftDataDisplay/AdminShiftSchedule";
import { employee } from "@/lib/cardData";
import { useRouter } from 'next/navigation'




export default function Page({ params }: { params: { slug: string } }) {
   
    const employeeItem = employee.find(e => e.employee_id.toString() === params.slug);
  
    return (
      <div>
        <h1>詳細ページ: User{params.slug}</h1>
       
        {employeeItem ? (
          <div className="container pt-32 grid grid-cols-2 gap-10 xl:grid-cols-3">
          
            <AdminShiftSchedule
        key={employeeItem.employee_id} // ユニークなキーを設定
        cardTitle={employeeItem.title}
        cardDescription={employeeItem.description}
        shifts={employeeItem.shifts} // シフトデータを直接渡す
        ></AdminShiftSchedule>
          </div>
        ) : (
          <p>Employee not found</p>
        )}
      </div>
    );
  }
  