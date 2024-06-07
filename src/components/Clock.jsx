import React, { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    function getMonthIndex(date) {
        let monthIndex = date.getMonth()
        let month = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]

        return month[monthIndex];
    };

    function getDayIndex(day) {
        let dayIndex = day.getDay();
        let days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ]

        return days[dayIndex]
    }

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const currentDay = new Date();
    const day = getDayIndex(currentDay)
    const date = time.getDate();
    const currentMonth = new Date();
    const month = getMonthIndex(currentMonth)
    const year = time.getFullYear();

    return (
        <div className='h-screen flex justify-center items-center flex-col bg-gradient-to-tr from-black via-gray-600 to-blue-400'>
            <div className='bg-gray-800 rounded px-10 py-5 shadow-[0_20px_50px_rgba(255,255,255,_0.9)]'>
                <h1 className='text-4xl tracking-widest drop-shadow-xl text-white'>
                    {hours < 10 ? "0" + hours : hours}:
                    {minutes < 10 ? "0" + minutes : minutes}:
                    {seconds < 10 ? "0" + seconds : seconds}
                    {hours >= 12 ? " PM " : " AM "}
                </h1>
                <div className='bg-white text-center rounded-sm mt-2'>
                    <span className='text-lg text-black font-semibold'>
                        {day}{" "}
                        {date < 10 ? '0' + date : date}{" "}
                        {month < 10 ? '0' + month : month}, {" "}
                        {year}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Clock