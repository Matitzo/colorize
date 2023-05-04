import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
// @ts-ignore
import Navbar from "./Components/Navbar.tsx";
// @ts-ignore
import Header from "./Components/Header.tsx";
// @ts-ignore
import Footer from "./Components/Footer.tsx";
// @ts-ignore
import GetModalHtml from "./Components/Modal.tsx";
// @ts-ignore
import SearchProducts from "./Components/SearchProducts.tsx";
// @ts-ignore
import CompareColors from "./Components/CompareColors.tsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [products, setProducts] = React.useState<any[]>([]);

  const [isModal, setModal] = React.useState(false);
  const [modalProduct, setModalProduct] = React.useState({});

  const [filter, setFilter] = React.useState(
    !location.search.includes("id") ? "" : location.search.replace(/\D/g, "") // takes only numbers
  );
  const [totalPages, setTotalPages] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [colorsArray, setColorsArray] = React.useState<any | []>(
    location.search.includes("colors")
      ? location.search.split("=")[1].split(",")
      : []
  );
  const [inputColor, setInputColorCode] = React.useState("");

  React.useEffect(() => {
    getApi();
  }, [filter, currentPage]);

  React.useEffect(() => {
    navigate(
      `${colorsArray.length > 0 ? `?colors=${colorsArray.join(",")}` : "?"}`
    );
  }, [colorsArray]);

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
      <Navbar />
      <Header />
      <Routes>
        <Route
          path={"/colorize"}
          element={
            <SearchProducts
              filter={filter}
              setFilter={(value) => setFilter(value)}
              products={products}
              setModal={(value) => setModal(value)}
              setModalProduct={(value) => setModalProduct(value)}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={(value) => setCurrentPage(value)}
              error={error}
            />
          }
        ></Route>
        <Route
          path={"/colorize/compare"}
          element={
            <CompareColors
              colorsArray={colorsArray}
              setColorsArray={(value) => setColorsArray(value)}
              inputColor={inputColor}
              setInputColorCode={(value) => setInputColorCode(value)}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
