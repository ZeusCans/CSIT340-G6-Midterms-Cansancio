import React, { useState } from "react";

export default function Summary() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);
  const [customer, setCustomer] = useState("Cansancio, Zeus B.");

  return (
    <header>
      <h2 className="text-6xl font-bold">Build your plan</h2>
      <p className="mt-4 text-3xl text-[#CB2957]">
        Seats: {seats} | Months: {months}
      </p>
      <p className="mt-2 text-xl">Quote for {customer}</p>
    </header>
  );
}