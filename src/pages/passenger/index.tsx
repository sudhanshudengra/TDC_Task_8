import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Passenger {
  id: number;
  name: string;
  email: string;
  dob: number;
  gender: string;
}

const Passenger = () => {
  const [passenger, setPassenger] = useState<Passenger[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3020/passengers')
      .then((response) => {
        setPassenger(response.data);
      })
      .catch((error) => {
        console.error('Error fetching passenger data:', error);
      });
  }, []);

  

  return (
    <div>
      <h1>Passenger Details</h1><hr/>
      {passenger.length > 0 ? (
        <ul>
          {passenger.map((passenger) => (
            <li key={passenger.id}>
              <Link href={`/passenger/${passenger.id}`} >
              <button className='text-xl font-semibold text-blue-400 underline'> ID: {passenger.id}
              </button>
              </Link>
              <p>Name: {passenger.name}</p>
              <p>Email: {passenger.email}</p>
              <p>Gender: {passenger.gender}</p>
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

export default Passenger;