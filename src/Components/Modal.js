import styles from "../Styles/Modal.module.css";

export default function GetModalHtml({ product, isModal, handleModal }) {
  return (
    <div
      className={styles.modal}
      style={{
        display: `${isModal ? "flex" : "none"}`,
      }}
    >
      <div
        className={styles.modalWindow}
        style={{
          backgroundColor: `${product.color}`,
        }}
      >
        <h3>Product informations</h3>
        <span className={styles.close} onClick={() => handleModal()}>
          &times;
        </span>
        <div className={styles.modalWindowInfo}>
          <div className={styles.modalWindowInfoHeaders}>
            <p>Id:</p>
            <p>Name:</p>
            <p>Year:</p>
            <p>Color:</p>
            <p>Pantone Value:</p>
          </div>
          <div className={styles.modalWindowInfoValues}>
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
