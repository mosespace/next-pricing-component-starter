import React from "react";

function Page({ params: { id } }) {
  return (
    <div>
      <h3>Coin Detail Page{id}</h3>
    </div>
  );
}

export default Page;
