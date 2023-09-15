import { useEffect, useState } from 'react';
import axios from 'axios';

interface Agent {
    id: number;
    name: string;
    mobile: number;
    pass_id: number;
    flight_id: number;
  }

const Agent = () => {
  const [agent, setAgent] = useState<Agent[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3020/agents')
      .then((response) => {
        setAgent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Agent data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Agent Details</h1><hr/>
      {agent.length > 0 ? (
        <ul>
          {agent.map((agent) => (
            <li key={agent.id}>
              <p className='text-xl font-semibold text-blue-400 underline'>ID: {agent.id}</p>
              <p className='text-base font-medium underline'>Name: {Agent.name}</p>
              <p>Model No: {agent.mobile}</p>
              <p>Passenger Id: {agent.pass_id}</p>
              <p>Flight Id: {agent.flight_id}</p>
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