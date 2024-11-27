import React, { useState } from 'react';
import SingleImageModal from './SingleImageModal';

function PhotosModal({ show, albums, albumId, closeModal }) {
  const [photo, setPhoto] = useState({});
  const [open, setOpen] = useState(false);

  if (!show) return null;
  return (
    <div className="">
      <div className="modal">
        <h2 className="">Photos of Album {albumId}</h2>
        <button className="closeBtn" onClick={() => closeModal()}>
          X
        </button>
        <div className="content">
          {albums[albumId].map((item) => {
            const { url, id, title } = item || {};

            const photoUrl =
              // albums[album][0].url ||
              `https://picsum.photos/id/${id}/200/300`;
            return (
              <div key={id} className="photoWrapper image" onClick={() => {
                setOpen(true);
                setPhoto(item);
              }}>
                <p className="photoText">{title}</p>
                <img src={photoUrl} alt={title} className="photo" />
              </div>
            );
          })}
        </div>
      </div>
      <SingleImageModal photo={photo} open={open} closeModal={() => setOpen(false)} />
    </div>
  );
}

export default PhotosModal;
