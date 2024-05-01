import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import List from './components/list';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(
        result => {
          setIsLoading(false);
          setData(result.results);
        },
        error => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (error) {
    return <div>There is an error fetching data.</div>;
  } else {
    return (
      <div>
        <Navbar />
        {
          data.map(item => (
            <List
              key={item.id.value}
              userAvatar={item.picture.large}
              firstName={item.name.first}
              lastName={item.name.last}
           />
            ))
        }
      </div>
    );
  }


  return (
    <div className="App">
      <Navbar/>
      <List/>
    </div>
  );
}

export default App;
