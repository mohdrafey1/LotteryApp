import React, { useState } from 'react';
import { genTicket } from './helper';
import Ticket from './Ticket';

function Lottery({ n = 3, winCondition }) {
    const [ticket, setTicket] = useState(genTicket(n));
    const isWinning = winCondition(ticket);

    const handleParticipate = () => {
        const newTicket = genTicket(n);
        setTicket(newTicket);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
                    Casino Lottery
                </h1>
                <Ticket ticket={ticket} />
                <button
                    onClick={handleParticipate}
                    className="block w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:bg-yellow-500"
                >
                    Try Your Luck Again
                </button>
                {isWinning && (
                    <h3 className="text-center text-green-500 font-semibold mt-4">
                        🎉 Congratulations! You've Won 10,000 crore ₹ 🎉 <br />
                        <span className="text-black">Spend here </span>
                        <a
                            href="https://jee-bharke-shopping.vercel.app/"
                            target="_blank"
                            className="text-red-500 underline hover:text-blue-700"
                        >
                            Click
                        </a>
                    </h3>
                )}
            </div>
        </div>
    );
}

export default Lottery;
