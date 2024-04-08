import { useEffect, useState } from 'react';

const CalendarPage = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const currentDate = new Date();
      const examDate = new Date('2024-04-26');
      const differenceInTime = examDate.getTime() - currentDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysLeft(differenceInDays);
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">NEB Exam Countdown</h1>
        <p className="text-xl mb-4">Days left until April 26, 2024:</p>
        <div className="text-4xl font-bold text-center">{daysLeft}</div>
      </div>
    </div>
  );
};

export default CalendarPage;
