import { useState } from 'react';

function UserCards() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    setUsers(data.data);
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <h3>{`${user.first_name} ${user.last_name}`}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
