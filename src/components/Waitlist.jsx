import React, { useState } from "react";

export default function Waitlist() {
  const [teams, setTeams] = useState(0);

  function handleJoin() {
    setTeams((t) => t + 1);
  }

  function handleClear() {
    setTeams(0);
  }

  return (
    <div className="p-6 rounded-lg border-2 border-[#000000] bg-[#EEEEEE] text-[#000000]">
      <h4 className="text-2xl font-bold mb-2">Waitlist</h4>
      <p className="mb-4 text-lg">Teams on the waitlist: {teams}</p>
      <div className="flex gap-3">
        <button
          className="cursor-pointer rounded-lg bg-[#CB2957] px-4 py-2 text-lg font-bold text-[#EEEEEE]"
          onClick={handleJoin}
        >
          Join
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#000000] px-4 py-2 text-lg font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}