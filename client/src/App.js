import React, { useState, useEffect } from "react";

function App() {
  const [json, setJson] = useState({});
  const [numResults, setNumResults] = useState(5);
  const [keyword, setKeyword] = useState("nike shoes");
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:4000/nordstrom?top=${numResults}&keyword=${keyword}`
    );
    const json = await response.json();
    setJson(json);
    console.log(json);
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetchProducts();
  };

  const products = json.Products
    ? json.Products.map((product, i) => {
        const src = `https://n.nordstrommedia.com/ImageGallery/store/product/Zoom${product.Media[0].Path}`;
        return (
          <div
            key={product.SkuId}
            className="card mb-3 shadow text-center"
          >
            <div className="card-header">{product.Name}</div>
            <img
              width="300"
              src={src}
              alt={product.Name}
              className="align-self-center"
            />
          </div>
        );
      })
    : null;

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          className="form-control mb-3 mr-3"
          type="number"
          value={numResults}
          onChange={e => setNumResults(e.target.value)}
        />
        <label htmlFor="keyword">Search</label>
        <input
          id="keyword"
          className="form-control mb-3"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mt-3"
        >
          Submit
        </button>
      </form>
      <div className="mt-5">{products}</div>
    </div>
  );
}

export default App;
