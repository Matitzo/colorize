export default function GetModalHtml({ product, isModal, handleModal }) {
  return (
    <div
      className="modal"
      style={{
        display: `${isModal ? "flex" : "none"}`,
      }}
    >
      <div className="modal-window">
        <h3>Product informations</h3>
        <span className="close" onClick={() => handleModal()}>
          &times;
        </span>
        <div className="modal-window-info">
          <div className="modal-window-info-headers">
            <p>Id:</p>
            <p>Name:</p>
            <p>Year:</p>
            <p>Color:</p>
            <p>Pantone Value:</p>
          </div>
          <div className="modal-window-info-values">
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.year}</p>
            <p>{product.color}</p>
            <p>{product.pantone_value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
