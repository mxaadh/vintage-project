"use client";

import { useAuth } from "@/context/AuthContext";
import { updateProduct } from "@/lib/api/product";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SetTimerProps {
    oldData: IProduct
}

const SetTimer = ({ oldData }: SetTimerProps) => {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState(oldData.endDate || "");
    const [hour, setHour] = useState(oldData.endHour || "0");
    const [minute, setMinute] = useState(oldData.endMinute || "0");
    const { token } = useAuth();

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
        console.log("Selected Date:", event.target.value);
    };

    const hours = Array.from({ length: 24 }, (_, i) => i.toString());
    const minutes = Array.from({ length: 60 }, (_, i) => i.toString());

    async function handleSubmit() {
        const PayloadData = {
            title: oldData.title,
            price: oldData.price,
            endDate: selectedDate,
            endHour: hour,
            endMinute: minute,
        };

        try {
            const response: IProduct = await updateProduct(oldData._id, PayloadData, token);
            console.log("Product updated:", response);
            router.push("/admin/product");
        } catch (error: unknown) {
            if (error instanceof Error) console.error(error.message, "<< error");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-start items-center gap-2"
        >
            {/* <DateP date={targetDate} setDate={setTargetDate} /> */}
            <input
                type="date"
                id="date"
                className="border rounded px-2 py-1"
                value={selectedDate}
                onChange={handleDateChange}
            />
            <select
                id="hour"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="border rounded px-2 py-1"
            >
                {hours.map((h) => (
                    <option key={h} value={h}>
                        {h.padStart(2, "0")}
                    </option>
                ))}
            </select>
            <select
                id="minute"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
                className="border rounded px-2 py-1"
            >
                {minutes.map((m) => (
                    <option key={m} value={m}>
                        {m.padStart(2, "0")}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="border rounded px-2 py-1 bg-orange-600 text-white"
            >
                Set Timer
            </button>
        </form>
    );
};

export default SetTimer