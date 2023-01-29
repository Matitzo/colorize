export default function GetProductHtml({
  products,
  setModal,
  setModalProduct,
}) {
  function viewModalProduct(product) {
    setModal((prevData) => !prevData);
    setModalProduct(product);
  }

  return products.map((product) => (
    <div
      className="product"
      style={{
        backgroundColor: `${product.color}`,
      }}
      onClick={() => viewModalProduct(product)}
    >
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.year}</p>
    </div>
  ));
}
