
export default function SingleImageModal({ photo, open, closeModal }) {

    if (!open) return null;

    return (
        <div className="modalImage">
            <h3 className="">{photo?.title}</h3>
            <button className="closeBtn" onClick={() => closeModal()}>
                X
            </button>
            <div className="imgWrapper">
                <img src={`https://picsum.photos/id/${photo?.id}/200/300`} alt={photo?.title} className="singleImage" />
            </div>
        </div>
    )
}