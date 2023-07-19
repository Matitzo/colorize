import React from "react";
// @ts-ignore
import Desc from "./Desc.tsx";
import { StyledMain } from "../App.styled";
// @ts-ignore
import GetFiltrHtml from "./Filter.tsx";
// @ts-ignore
import GetProductsHtml from "./Products.tsx";
// @ts-ignore
import GetNoDataHtml from "./NoDataFound.tsx";
import { useLocation } from "react-router-dom";

export default function SearchProducts({
  filter,
  setFilter,
  products,
  setModal,
  setModalProduct,
  currentPage,
  totalPages,
  setCurrentPage,
  error,
}) {
  const location = useLocation();
  return (
    <StyledMain>
      <Desc
        heading={"Search our products"}
        text={"Click product to display more informations."}
      />
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
  );
}
