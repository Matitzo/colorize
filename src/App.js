import "./App.css";
import React from "react";
import GetPaginationHtml from "./Components/Pagination";
import GetModalHtml from "./Components/Modal";
import GetFiltrHtml from "./Components/Filter";
import GetProductsHtml from "./Components/Products";
import GetNoDataHtml from "./Components/NoDataFound";
import { useLocation } from "react-router-dom";
// @ts-check

function App() {
  const location = useLocation();
  const [error, setError] = React.useState("");
  const [products, setProducts] = React.useState([]);

  const [isModal, setModal] = React.useState(false);
  const [modalProduct, setModalProduct] = React.useState({});

  const [filter, setFilter] = React.useState(
    !location.search.includes("id") ? "" : location.search.replace(/\D/g, "") // takes only numbers
  );

  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    getApi();
  }, [filter, currentPage]);

  function getApi() {
    filter ? filteredId() : notFilteredId();
  }

  function filteredId() {
    fetch(`https://reqres.in/api/products/${`?id=${filter}`}`)
      .then((response) => {
        if (response.ok) return response.json();
        setCurrentPage(1);
        setTotalPages(1);
        setProducts([]);
        setError(response.status.toString());
        throw new Error(response.status + " Something went wrong");
      })
      .then((product) => {
        setCurrentPage(1);
        setTotalPages(1);
        product.data ? setProducts([product.data]) : setProducts([]);
      })
      .catch((e) => console.log(e));
  }

  function notFilteredId() {
    fetch(
      `https://reqres.in/api/products/${
        !location.search ? `?page=${currentPage}` : location.search
      }&per_page=5`
    )
      .then((response) => {
        if (response.ok) return response.json();
        setCurrentPage(1);
        setTotalPages(1);
        setProducts([]);
        setError(response.status.toString());
        throw new Error(response.status + " Something went wrong");
      })
      .then((products) => {
        setCurrentPage(products.page);
        setTotalPages(products.total_pages);
        setProducts(products.data);
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="wrapper">
      <GetModalHtml
        product={modalProduct}
        isModal={isModal}
        handleModal={() => setModal((prevData) => !prevData)}
      />

      <GetFiltrHtml
        handleFilter={(value) => setFilter(value)}
        filter={filter}
        locationPathName={location.pathname}
      />
      <div className="container">
        {products.length >= 1 ? (
          <GetProductsHtml
            products={products}
            setModal={() => setModal((prevData) => !prevData)}
            setModalProduct={(product) => setModalProduct(product)}
          />
        ) : (
          <GetNoDataHtml error={error} />
        )}
      </div>
      <GetPaginationHtml
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
