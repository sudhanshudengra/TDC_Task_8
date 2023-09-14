import { useEffect, useState } from 'react';
import axios from 'axios';

interface Flight {
    id: number;
    name: string;
    model_no: number;
    s_loc_id: number;
    d_loc_id: number;
    description: string;
    status: string;
    business_seats: number;
    economy_seats: number;
    no_of_attendants: number;
    duration: string;
  }

const Flight = () => {
  const [flight, setFlight] = useState<Flight[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3020/flights')
      .then((response) => {
        setFlight(response.data);
      })
      .catch((error) => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Flight Details</h1><hr/>
      {flight.length > 0 ? (
        <ul>
          {flight.map((flight) => (
            <li key={flight.id}>
              <p className='text-xl font-semibold text-blue-400 underline'>ID: {flight.id}</p>
              <p className='text-base font-medium underline'>Name: {flight.name}</p>
              <p>Model No: {flight.model_no}</p>
              <p className='text-base font-medium underline'>Source Location: {flight.s_loc_id}</p>
              <p className='text-base font-medium underline'>Destination Location: {flight.d_loc_id}</p>
              <p>Description: {flight.description}</p>
              <p>Status: {flight.status}</p>
              <p>Business Seats: {flight.business_seats}</p>
              <p>Economy Seats: {flight.economy_seats}</p>
              <p>No of Attendants: {flight.no_of_attendants}</p>
              <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Flight;