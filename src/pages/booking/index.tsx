import { useEffect, useState } from 'react';
import axios from 'axios';

interface Booking {
    id: number;
    mode: string;
    pass_id: number;
    flight_id: number;
    billing_id: number;
    ticket_no: number;
    agent_id: number;
    seat_type: boolean;
}

const Agent = () => {
  const [booking, setBooking] = useState<Booking[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3020/bookings')
      .then((response) => {
        setBooking(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Agent data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Agent Details</h1><hr/>
      {booking.length > 0 ? (
        <ul>
          {booking.map((booking) => (
            <li key={booking.id}>
              <p className='text-xl font-semibold text-blue-400 underline'>ID: {booking.id}</p>
              <p className='text-base font-medium underline'>Passenger Id: {booking.pass_id}</p>
              <p>Mode: {booking.mode}</p>
              <p>Agent Id: {booking.agent_id}</p>
              <p>Flight Id: {booking.flight_id}</p>
              <p>Billing Id: {booking.billing_id}</p>
              <p>Ticket No: {booking.ticket_no}</p>
              <p>Seat Type: {(booking.seat_type).toString().toUpperCase()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Agent;