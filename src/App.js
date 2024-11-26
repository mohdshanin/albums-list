import React, { useState, useEffect } from 'react';
import './style.css';
import AlbumsList from './components/AlbumsList';

export default function App() {
  const [albums, setAlbums] = useState({});

  const URL = 'https://jsonplaceholder.typicode.com/photos';

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };
  useEffect(async () => {
    const newData = {};
    const data = await getData();

    data.map((item) => {
      const { albumId } = item;
      if (newData[albumId]) {
        newData[albumId] = [...newData[albumId], item];
      } else {
        newData[albumId] = [item];
      }
    });
    setAlbums(newData);
  }, []);

  return (
    <div className="app">
      <AlbumsList albums={albums} />
    </div>
  );
}
