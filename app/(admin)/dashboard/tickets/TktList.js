import Ticket from './card/Ticket.js';

// component function
export default function TktList({ tickets, onUpdate }) {

  return (
    <>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} onUpdate={onUpdate} />
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets for this user!</p>
      )}
    </>
  );
}
