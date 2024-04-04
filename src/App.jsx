import React from 'react';
import Lottery from './components/Lottery/Lottery';
import { sum } from './components/Lottery/helper';

function App() {
    let winCondition = (ticket) => {
        const ticketSum = sum(ticket);
        return ticketSum === 15 || ticketSum === 10 || ticketSum === 20;
    };

    return (
        <div>
            <Lottery n={3} winCondition={winCondition} />
        </div>
    );
}

export default App;
