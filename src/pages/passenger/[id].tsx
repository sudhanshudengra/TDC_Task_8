// pages/Passenger.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Passenger {
  id: number;
  name: string;
  email: string;
  dob: number;
  gender: string;
  booking: Array<{
    id: number;
    mode: string;
    pass_id: number;
    flight_id: number;
    billing_id: number;
    ticket_no: number;
    agent_id: number;
    seat_type: boolean;
  }>;
}

const Passenger = () => {
  const router = useRouter();
  const { id } = router.query; 

  const [passenger, setPassenger] = useState<Passenger | null>(null);
    const [newName, setNewName] = useState<string>('');


  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3020/passengers/${id}`)
        .then((response) => {
          setPassenger(response.data);
        })
        .catch((error) => {
          console.error('Error fetching passenger data:', error);
        });
    }
  }, [id]);

  const deletePassenger = () => {
    if (!passenger) {
      return;
    }

    axios
      .delete(`http://localhost:3020/passengers/${passenger.id}`)
      .then(() => {
        console.log('Passenger deleted successfully.');
        setPassenger(null);
      })
      .catch((error) => {
        console.error('Error deleting passenger:', error);
      });
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3020/passengers/${passenger.id}')
      .then((response) => {
        setPassenger(response.data);
      })
      .catch((error) => {
        console.error('Error fetching passenger data:', error);
      });
  };

  const updatePassengerName = () => {
    if (!passenger || !newName) {
      return;
    }

    axios
      .put(`http://localhost:3020/passengers/${passenger.id}`, {
        name: newName,
      })
      .then(() => {
        console.log('Passenger name updated successfully.');
        fetchData();
        setNewName('');
      })
      .catch((error) => {
        console.error('Error updating passenger name:', error);
      });
  };


  return (
    <div>
      <h1>Passenger Details</h1>
      <hr />
      {passenger ? (
        <div>
          <p className='text-xl font-semibold text-blue-400 underline'>ID: {passenger.id}</p>
          <p>Name: {passenger.name}</p>
          <p>Email: {passenger.email}</p>
          <p>Gender: {passenger.gender}</p>
          <br />
          <h2 className = "text-xl font-bold text-orange-600 font-serif underline">Booking Details: </h2>
            <p>Booking ID: {passenger.booking[0].id}</p>
            <p>Mode: {passenger.booking[0].mode}</p>
            <p>Passenger ID: {passenger.booking[0].pass_id}</p>
            <p>Flight ID: {passenger.booking[0].flight_id}</p>
            <p>Billing ID: {passenger.booking[0].billing_id}</p>
            <p>Ticket No: {passenger.booking[0].ticket_no}</p>
            <p>Agent ID: {passenger.booking[0].agent_id}</p>
            <p>Seat Type: {(passenger.booking[0]?.seat_type).toString().toUpperCase()}</p>
            <hr /> <br />
            <button className = "text-xl font-bold bg-red-600 text-white font-serif underline" onClick={deletePassenger}>Delete Passenger</button>
            <hr />
            <br />
            <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{backgroundColor: 'lightblue' , color: 'black'}}
          />
          <button className = "text-xl font-bold bg-sky-700 text-white font-serif underline" onClick={updatePassengerName}>Update Name</button>
        </div>
      ) : (
        <p className = "text-xl font-bold">No details for the customer specified...</p>
      )}
    </div>
  );
};

export default Passenger;
