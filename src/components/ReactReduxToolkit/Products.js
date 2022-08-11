import React from "react";
import JsonData from "./JsonData.json";
import { useDispatch } from "react-redux";
import { IncrementCart } from "./CartReducer";
import { DecrementCart } from "./CartReducer";

const Products = () => {
    const dispatch= useDispatch();
  return (
    <div cassName="container">
      <div className="row">
        {JsonData.products.map((product) => (
          <div className="col" key={product.id}>
            <div
              className="card m-1"
              style={{
                width: "18rem",
                height: "25rem",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <img
                className="card-img-top"
                src={product.src}
                style={{ width: "100%", height: "20em" }}
                alt="mobile"
              ></img>
              <p className="card-title">
                {product.name} | {product.price}
              </p>
              <div className="card-body">
                <button
                  className="btn btn-primary ml-auto"
                  onClick={() =>
                    dispatch(
                      IncrementCart({
                        productName: product.name,
                        productPrice: product.price,
                      })
                    )
                  }
                >
                  Add
                </button>
                &nbsp;
                <button
                  className="btn btn-primary ml-auto"
                  onClick={() =>
                    dispatch(
                      DecrementCart({
                        productName: product.name,
                        productPrice: product.price,
                      })
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
