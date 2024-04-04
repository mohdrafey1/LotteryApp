import TicketNum from './TicketNum';

export default function Ticket({ ticket }) {
    return (
        <div className="flex justify-center mb-6">
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}
