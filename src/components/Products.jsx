import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(data);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const resp = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await resp.clone().json());
        setFilter(await resp.json());
        setLoading(false);
        console.log(filter);
        // console.log(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Spinner animation="grow" />
      </>
    );
  };
  const filterProduct=(cat)=>{
    console.log(data.category);
    const updatedList=data.filter(i=>i.category===cat)
    console.log(updatedList);
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() =>
              setFilter(data)
            }
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() =>
              filterProduct("men's clothing")
            }
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women 's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark  me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product,index) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-5" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}    {/*  36 mnt ra purbaru */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
