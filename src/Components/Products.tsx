import React from "react";
// @ts-ignore
import styles from "../Styles/Products.module.css";

export default function GetProductsHtml({
  products,
  setModal,
  setModalProduct,
}) {
  function viewModalProduct(product) {
    setModal((prevData) => !prevData);
    setModalProduct(product);
  }

  return (
    <div className={styles["table"]}>
      <div className={styles["headers"]}>
        <h4>Id</h4>
        <h4>Name</h4>
        <h4>Year</h4>
      </div>
      {products.map((product) => (
        <div
          className={styles["product"]}
          style={{
            backgroundColor: `${product.color}`,
          }}
          onClick={() => viewModalProduct(product)}
        >
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.year}</p>
        </div>
      ))}
    </div>
  );
}
