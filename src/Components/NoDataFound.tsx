import React from "react";

export default function GetNoDataHtml({ error }) {
  return (
    <div
      style={{
        textShadow: `0px 0px 8px whitesmoke`,
      }}
    >
      <h3>
        {error["0"] === "5"
          ? "Server encountered an issue and is not able to serve the client’s request."
          : "There are no products with such index."}
      </h3>
    </div>
  );
}
