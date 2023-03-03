import React from "react";
import "./App.css";
import { StyledMain } from "./App.styled";
import { useLocation } from "react-router-dom";
// @ts-ignore
import Header from "./Components/Header.tsx";
// @ts-ignore
import Footer from "./Components/Footer.tsx";
// @ts-ignore
import GetPaginationHtml from "./Components/Pagination.tsx";
// @ts-ignore
import GetModalHtml from "./Components/Modal.tsx";
// @ts-ignore
import GetFiltrHtml from "./Components/Filter.tsx";
// @ts-ignore
import GetProductsHtml from "./Components/Products.tsx";
// @ts-ignore
import GetNoDataHtml from "./Components/NoDataFound.tsx";

function App() {
  const location = useLocation();
  const [error, setError] = React.useState("");
  const [products, setProducts] = React.useState<any[]>([]);

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
    <>
      <GetModalHtml
        product={modalProduct}
        isModal={isModal}
        handleModal={() => setModal((prevData) => !prevData)}
      />
      <Header />
      <StyledMain>
        <h2>Search our products!</h2>
        <GetFiltrHtml
          filter={filter}
          locationPathName={location.pathname}
          setFilter={setFilter}
        />
        {products.length >= 1 ? (
          <GetProductsHtml
            products={products}
            setModal={() => setModal((prevData) => !prevData)}
            setModalProduct={(product) => setModalProduct(product)}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            leftArrow={true}
          />
        ) : (
          <GetNoDataHtml error={error} />
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

export default App;
