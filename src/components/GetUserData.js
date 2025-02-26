import React, { useState, useEffect } from 'react';
import   './styles.css';
 
function GetUserData() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://userformdata-139d5-default-rtdb.firebaseio.com/userData.json'
        );
        const data = await response.json();

        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setFetchedData(dataArray);
        } else {
          setFetchedData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='pageStyle'>
      <div  className='containerStyle'>
        <h2 className='titleStyle'>User Data</h2>
        {fetchedData.length > 0 ? (
          <ul  className='listStyle'>
            {fetchedData.map((item) => (
              <li key={item.id} className='listItemStyle'>
                <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email},<br/>
                <strong>Mobile:</strong> {item.mobile}, <strong>Address:</strong> {item.address},<br/>
                <strong>Message:</strong> {item.message}
              </li>
            ))}
          </ul>
        ) : (
          <p  className='noDataStyle'>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default GetUserData; 