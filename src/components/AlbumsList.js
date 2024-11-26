import React, { useState } from 'react';
import PhotosModal from './PhotosModal';

function AlbumsList({ albums }) {
  const [showAlbum, setShowAlbums] = useState(false);

  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  function toggleAlbum(id) {
    setShowAlbums((prev) => !prev);
    setSelectedAlbumId(id);
  }

  return (
    <div className="container">
      <h1>All Albums</h1>
      <div className="albumWrapper">
        {Object.keys(albums).map((albumId) => {
          const thumbUrl =
            // albums[album][0].thumbnailUrl ||
            `https://picsum.photos/id/${albumId}/200/300`;

          return (
            <div
              key={albumId}
              className="photoWrapper album"
              onClick={() => toggleAlbum(albumId)}
            >
              <p className="photoText">Album No. {albumId}</p>
              <img src={thumbUrl} alt="thumbnailUrl" className="photo" />
            </div>
          );
        })}
        <PhotosModal
          show={showAlbum}
          albums={albums}
          albumId={selectedAlbumId}
          closeModal={() => setShowAlbums(false)}
        />
      </div>
    </div>
  );
}

export default AlbumsList;
