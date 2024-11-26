import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [albums, setAlbums] = useState({});
  const [showAlbum, setShowAlbums] = useState(false);
  const [albumId, setAlbumId] = useState(null);

  const URL = 'https://jsonplaceholder.typicode.com/photos';

  const getData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };
  useEffect(async () => {
    const newData = {};
    const data = await getData();

    data.map((item, index) => {
      const { albumId } = item;
      if (newData[albumId]) {
        newData[albumId] = [...newData[albumId], item];
      } else {
        newData[albumId] = [item];
      }
    });
    setAlbums(newData);
  }, []);

  function toggleAlbum(id) {
    if (albumId === id) {
      setShowAlbums((prev) => !prev);
    } else if (albumId !== id) {
      setShowAlbums(true);
    } else {
      setShowAlbums(true);
    }
    setAlbumId(id);
  }

  return (
    <div className="app">
      <h1>All Albums</h1>
      <div className="container">
        {Object.keys(albums).map((album) => {
          const thumbUrl =
            // albums[album][0].thumbnailUrl ||
            `https://picsum.photos/id/${album}/200/300`;

          return (
            <div className="wrapper">
              <div
                key={album}
                className="album"
                onClick={() => toggleAlbum(album)}
              >
                <p className="photoText">Album No. {album}</p>
                <img src={thumbUrl} alt="thumbnailUrl" className="photo" />
              </div>
              {showAlbum && albumId === album && (
                <div className="modal">
                  <h2 className="">Photos of Album {album}</h2>
                  <button
                    className="closeBtn"
                    onClick={() => setShowAlbums(false)}
                  >
                    X
                  </button>
                  <div className="content">
                    {albums[album].map((item) => {
                      const { url, id, title } = item || {};
                      console.log('id', id);
                      const photoUrl =
                        // albums[album][0].url ||
                        `https://picsum.photos/id/${id}/200/300`;
                      return (
                        <div key={id} className="album">
                          <p className="photoText">{title}</p>
                          <img src={photoUrl} alt={title} className="photo" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
