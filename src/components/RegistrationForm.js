import React, { useState } from 'react';
import   './styles.css';

function  RegistrationForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    message: '',
  });

  const userData = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, address, message } = user;

    const res = await fetch(
      'https://userformdata-139d5-default-rtdb.firebaseio.com/userData.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, mobile, address, message }),
      }
    );

    if (res) {
      setUser({
        name: '',
        email: '',
        mobile: '',
        address: '',
        message: '',
      });
      alert('Data saved successfully');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} 
      className='form' method="post">
        <h2  className='title'>Registration Form</h2>
        <div  className='input-group'>
          <label className='label'>Your Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            required
            value={user.name}
            onChange={userData}
             className='input'
          />
        </div>
        <div  className='input-group'>
          <label  className='label'>Your Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            required
            value={user.email}
            onChange={userData}
             className='input'
          />
        </div>
        <div  className='input-group'>
          <label  className='label'>Mobile Number</label>
          <input
            name="mobile"
            type="number"
            placeholder="Enter your mobile number"
            autoComplete="off"
            required
            value={user.mobile}
            onChange={userData}
             className='input'
          />
        </div>
        <div  className='input-group'>
          <label  className='label'>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            autoComplete="off"
            required
            value={user.address}
            onChange={userData}
             className='input'
          />
        </div>
        <div  className='input-group'>
          <label  className='label'>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            autoComplete="off"
            required
            value={user.message}
            onChange={userData}
            className='textarea'
          />
        </div>
        <div>
          <button type="submit" className='button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;