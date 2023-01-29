import logo from "./logo.svg";
import "./App.css";
import React from "react";
import GetPaginationHtml from "./Components/Pagination";
import GetModalHtml from "./Components/Modal";
import GetFiltrHtml from "./Components/Filter";
import GetProductHtml from "./Components/Product";
import GetNoDataHtml from "./Components/NoDataFound";
import { useLocation } from "react-router-dom";
// @ts-check

function App() {
  const location = useLocation();
  const [products, setProducts] = React.useState([]);

  const [isModal, setModal] = React.useState(false);
  const [modalProduct, setModalProduct] = React.useState({});

  const [filter, setFilter] = React.useState(
    location.pathname.length > 1 ? location.pathname : ""
  );

  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    getApi();
  }, [filter, currentPage]);

  function getApi() {
    filter.length > 1 ? filteredId() : notFilteredId();
  }

  function filteredId() {
    fetch(`https://reqres.in/api/products${filter}`)
      .then((response) => response.json())
      .then((product) => {
        setCurrentPage(1);
        setTotalPages(1);
        product.data ? setProducts([product.data]) : setProducts([]);
      })
      .catch((error) => console.error(error));
  }

  function notFilteredId() {
    fetch(
      `https://reqres.in/api/products${
        !location.search ? `?page=${currentPage}` : location.search
      }&per_page=5`
    )
      .then((response) => response.json())
      .then((products) => {
        setCurrentPage(products.page);
        setTotalPages(products.total_pages);
        setProducts(products.data);
      });
  }

  return (
    <div className="products">
      <GetModalHtml
        product={modalProduct}
        isModal={isModal}
        handleModal={() => setModal((prevData) => !prevData)}
      />

      <GetFiltrHtml
        handleFilter={(value) => setFilter(`/${value}`)}
        filter={filter}
      />

      {products.length >= 1 ? (
        <GetProductHtml
          products={products}
          setModal={() => setModal((prevData) => !prevData)}
          setModalProduct={(product) => setModalProduct(product)}
        />
      ) : (
        <GetNoDataHtml />
      )}

      <GetPaginationHtml
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
