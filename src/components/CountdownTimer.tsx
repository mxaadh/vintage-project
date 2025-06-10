import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  endDate: string;
  endHour: string;
  endMinute: string;
  counter?: (x: string) => void
}

const CountdownTimer = ({
  endDate = "10-06-2025",
  endHour = "23",
  endMinute = "59",
  counter = () => { }
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState("00 : 00 : 00");

  useEffect(() => {
    // Handle different date formats and validate input
    let day, month, year;

    if (endDate.includes('-')) {
      const parts = endDate.split('-');
      if (parts.length === 3) {
        // Check if it's DD-MM-YYYY or YYYY-MM-DD format
        if (parts[0].length === 4) {
          // YYYY-MM-DD format
          [year, month, day] = parts;
        } else {
          // DD-MM-YYYY format
          [day, month, year] = parts;
        }
      } else {
        console.error("Invalid date format:", endDate);
        setTimeLeft("Invalid Date Format");
        counter("Invalid Date Format");
        return;
      }
    } else {
      console.error("Date must contain dashes:", endDate);
      setTimeLeft("Invalid Date Format");
      counter("Invalid Date Format");
      return;
    }

    // Validate date parts
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    const hourNum = parseInt(endHour, 10);
    const minuteNum = parseInt(endMinute, 10);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum) || isNaN(hourNum) || isNaN(minuteNum)) {
      console.error("Invalid date/time values:", { day, month, year, endHour, endMinute });
      setTimeLeft("Invalid Values");
      counter("Invalid Values");
      return;
    }

    // Create date using Date constructor (month is 0-indexed)
    const targetTime = new Date(yearNum, monthNum - 1, dayNum, hourNum, minuteNum, 0);

    console.log("Parsed values:", { day: dayNum, month: monthNum, year: yearNum, hour: hourNum, minute: minuteNum });
    console.log("Target time:", targetTime);
    console.log("Current time:", new Date());

    // Check if the date is valid
    if (isNaN(targetTime.getTime())) {
      console.error("Failed to create valid date");
      setTimeLeft("Invalid Date");
      counter("Invalid Date");
      return;
    }

    // eslint-disable-next-line prefer-const
    let intervalId: NodeJS.Timeout;

    const updateTimer = () => {
      const now = new Date();
      const diff = targetTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("00 : 00 : 00");
        counter("00 : 00 : 00");
        clearInterval(intervalId);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const formattedTime = `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

      setTimeLeft(formattedTime);
      counter(formattedTime);
    };

    intervalId = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call

    return () => clearInterval(intervalId);
  }, [counter, endDate, endHour, endMinute]);

  return <span>{timeLeft}</span>;
};

export default CountdownTimer;