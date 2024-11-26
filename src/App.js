import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  const URL = 'https://jsonplaceholder.typicode.com/photos';

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data.slice(0, 100);
  };

  const newData = {};
  const showData = async () => {
    const data = await getData();

    data.map((item, index) => {
      const { albumId } = item;
      if (newData[albumId]) {
        newData[albumId] = [...newData[albumId], item];
      } else {
        newData[albumId] = [];
      }
    });
    console.log('newData', newData);
  };

  showData();

  return <>hi</>;
}
