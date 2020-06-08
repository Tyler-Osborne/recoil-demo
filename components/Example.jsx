import React, { useState, useEffect } from "react";


const Example = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(json => setProfile(json))
      .then(() => setLoading(false));
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <h2>Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Phone Number: {profile.phone}</p>
        </>
      )}
    </div>
  );
};

export default Example;
