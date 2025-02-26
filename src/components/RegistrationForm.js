import React, { useState } from 'react';

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

    console.log(user);
  };

  const formStyle = {
    width: '800px',
    margin: '50px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const inputGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '16px',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '100px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const titleStyle = {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={formStyle} method="post">
        <h2 style={titleStyle}>Registration Form</h2>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Your Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            required
            value={user.name}
            onChange={userData}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Your Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            required
            value={user.email}
            onChange={userData}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Mobile Number</label>
          <input
            name="mobile"
            type="number"
            placeholder="Enter your mobile number"
            autoComplete="off"
            required
            value={user.mobile}
            onChange={userData}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            autoComplete="off"
            required
            value={user.address}
            onChange={userData}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            autoComplete="off"
            required
            value={user.message}
            onChange={userData}
            style={textareaStyle}
          />
        </div>
        <div>
          <button type="submit" style={buttonStyle}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;