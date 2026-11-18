import React from "react";

const featuredStyle = { border: "2px solid #6f42c1", background: "#f8f5ff" };

function ProductList({ items }) {
  if (!items || items.length === 0) {
    return <h4 className="text-center text-muted">No Products Available</h4>;
  }

  return (
    <div className="row g-4">
      {items.map((item, index) => (
        <div className="col-sm-6 col-lg-4" key={item.id}>
          <div
            className="card h-100 shop-card"
            style={index === 0 ? featuredStyle : undefined}   /* inline style on ONE card */
            onClick={() => alert(item.title)}
          >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.about}</p>
              <p className={`fw-bold mb-0 ${item.cost > 500 ? "text-danger" : "text-success"}`}>
                ₹{item.cost}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
