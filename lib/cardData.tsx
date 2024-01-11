// constants/data.ts
export const cardData = [
  {
    title: "従業員A",
    description: "アルバイト",
    content: "/user/work-schedule-confirmation",
    footer: "TOP",
  },
  {
    title: "従業員B",
    description: "パート",
    content: "/user/work-schedule-confirmation",
    footer: "TOP",
  },
  {
    title: "従業員C",
    description: "パート",
    content: "/user/work-schedule-confirmation",
    footer: "TOP",
  },
];

export const employee = [
{
  title: "user1",
  description: "アルバイト",
  employee_id:1,
  isExpanded: "boolean",
  shifts: [
    { date: 1, start_time: "09:00", end_time: "" },
    { date: 2, start_time: "10:00", end_time: "" },
    { date: 3, start_time: "09:00", end_time: "" },
    { date: 4, start_time: "10:00", end_time: "" },
    { date: 5, start_time: "09:00", end_time: "" },
    { date: 6, start_time: "10:00", end_time: "" },
    { date: 7, start_time: "09:00", end_time: "" },
    { date: 8, start_time: "10:00", end_time: "" },
    // ...1週間分のシフトデータ...
  ]
},
{
  title: "user2",
  description: "アルバイト",
  employee_id:2,
  isExpanded: "boolean",
  shifts: [
    { date: 1, start_time: "16:00", end_time: "" },
    { date: 2, start_time: "17:00", end_time: "" },
    { date: 3, start_time: "19:00", end_time: "" },
    { date: 4, start_time: "21:00", end_time: "" },
    // ...1週間分のシフトデータ...
  ]
}
];
